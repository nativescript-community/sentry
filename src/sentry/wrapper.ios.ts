import type { BaseEnvelopeItemHeaders, Breadcrumb, Envelope, EnvelopeItem, Event, SeverityLevel, User } from '@sentry/core';
import { SentryError, debug } from '@sentry/core';
import { parseErrorStack } from './integrations/debugsymbolicator';
import { isHardCrash } from './misc';
import { NativescriptOptions } from './options';
import { utf8ToBytes } from './vendor';
import { frameIteratee } from './integrations/default';
import { splitObject } from './utils/object';

const numberHasDecimals = function (value: number): boolean {
    return !(value % 1 === 0);
};

const numberIs64Bit = function (value: number): boolean {
    return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
};
function dataSerialize(data?: any, wrapPrimitives?: boolean) {
    switch (typeof data) {
        case 'string':
        case 'boolean': {
            return data;
        }
        case 'number': {
            const hasDecimals = numberHasDecimals(data);
            if (numberIs64Bit(data)) {
                if (hasDecimals) {
                    return NSNumber.alloc().initWithDouble(data);
                } else {
                    return NSNumber.alloc().initWithLongLong(data);
                }
            } else {
                if (hasDecimals) {
                    return NSNumber.alloc().initWithFloat(data);
                } else {
                    return data;
                }
            }
        }

        case 'object': {
            if (data instanceof Date) {
                return NSDate.dateWithTimeIntervalSince1970(data.getTime() / 1000);
            }

            if (!data) {
                return null;
            }

            if (Array.isArray(data)) {
                return NSArray.arrayWithArray(data.map((el) => dataSerialize(el, wrapPrimitives)).filter((el) => el !== null));
            }

            const node = Object.fromEntries(
                Object.entries(data)
                    .map(([key, value]) => [key, dataSerialize(value, wrapPrimitives)])
                    .filter(([, value]) => value !== null)
            );
            return NSDictionary.dictionaryWithDictionary(node as any);
        }

        default:
            return null;
    }
}

const FATAL_ERROR_REGEXP = /NativeScript encountered a fatal error:([^]*?) at([\t\n\s]*)?([^]*)$/m;

export namespace NATIVE {
    export let enableNative = true;
    const _DisabledNativeError = new SentryError('Native is disabled');

    function convertToNativeJavascriptStacktrace(
        stack: {
            file?: string;
            filename?: string;
            function?: string;
            methodName?: string;
            column?: number;
            colno?: number;
            lineno?: number;
            lineNumber?: number;
            in_app?: boolean;
        }[]
    ) {
        if (!stack) {
            return null;
        }
        const nStackTrace = SentryStacktrace.new();
        const frames = NSMutableArray.alloc().init();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];

            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';

            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = SentryFrame.new();
            stackFrame.function = methodName;
            stackFrame.fileName = fileName;
            stackFrame.lineNumber = lineNumber;
            stackFrame.columnNumber = column;
            stackFrame.platform = 'javascript';
            stackFrame.inApp = NSNumber.numberWithBool(frame.in_app || false);
            frames.addObject(stackFrame);
        }
        nStackTrace.frames = frames as any;
        return nStackTrace;
    }
    function addJavascriptExceptionInterface(nEvent: SentryEvent, type: string, value: string, stack) {
        const exceptions = nEvent.exceptions;

        const actualExceptions = NSMutableArray.alloc().initWithArray(exceptions);
        const nException = SentryException.new();
        nException.type = type;
        nException.value = value;
        // nException.threadId = NSThread.currentThread.;
        nException.stacktrace = convertToNativeJavascriptStacktrace(stack);
        actualExceptions.insertObjectAtIndex(nException, 0);
        nEvent.exceptions = actualExceptions as any;
    }

    export function isNativeTransportAvailable() {
        return enableNative;
    }

    export function fetchNativeSdkInfo() {
        // if (sentryOptions) {
        return {
            name: PrivateSentrySDKOnly.getSdkName(),
            version: PrivateSentrySDKOnly.getSdkVersionString()
        };
        // }
        // return {};
    }
    let nativeRelease;
    export function fetchNativeRelease() {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        if (!nativeRelease) {
            const infoDict = NSBundle.mainBundle.infoDictionary;
            nativeRelease = {
                id: infoDict.objectForKey('CFBundleIdentifier'),
                version: infoDict.objectForKey('CFBundleShortVersionString'),
                build: infoDict.objectForKey('CFBundleVersion')
            };
        }
        return nativeRelease;
    }
    export async function closeNativeSdk() {
        SentrySDK.close();
    }

    /**
     * Get breadcrumbs (removes breadcrumbs from handled exceptions on Android)
     *
     * We do this to avoid duplicate breadcrumbs on Android as sentry-android applies the breadcrumbs
     * from the native scope onto every envelope sent through it. This scope will contain the breadcrumbs
     * sent through the scope sync feature. This causes duplicate breadcrumbs.
     * We then remove the breadcrumbs in all cases but if it is handled == false,
     * this is a signal that the app would crash and android would lose the breadcrumbs by the time the app is restarted to read
     * the envelope.
     */
    function _getBreadcrumbs(event: Event): Breadcrumb[] | undefined {
        const breadcrumbs: Breadcrumb[] | undefined = event.breadcrumbs;

        return breadcrumbs;
    }

    /**
     * Convert js severity level in event.level and event.breadcrumbs to more widely supported levels.
     * @param event
     * @returns Event with more widely supported Severity level strings
     */

    function _processLevels(event: Event): Event {
        const processed: Event = {
            ...event,
            level: event.level ? _processLevel(event.level) : undefined,
            breadcrumbs: event.breadcrumbs?.map((breadcrumb) => ({
                ...breadcrumb,
                level: breadcrumb.level ? _processLevel(breadcrumb.level) : undefined
            }))
        };

        return processed;
    }
    /**
     * Convert js severity level which has critical and log to more widely supported levels.
     * @param level
     * @returns More widely supported Severity level strings
     */

    function _processLevel(level: SeverityLevel): SeverityLevel {
        if (level === ('log' as SeverityLevel)) {
            return 'debug' as SeverityLevel;
        } else if (level === ('critical' as SeverityLevel)) {
            return 'fatal' as SeverityLevel;
        }

        return level;
    }
    /**
     * Gets the event from envelopeItem and applies the level filter to the selected event.
     * @param data An envelope item containing the event.
     * @returns The event from envelopeItem or undefined.
     */
    function _processItem(item: EnvelopeItem): EnvelopeItem {
        const [itemHeader, itemPayload] = item;

        if (itemHeader.type === 'event' || itemHeader.type === 'transaction') {
            const event = _processLevels(itemPayload as Event);
            // console.log('_processItem', JSON.stringify(event.exception.values[0].stacktrace.frames.reverse()))

            // event.breadcrumbs = _getBreadcrumbs(event);
            return [itemHeader, event];
        }

        return item;
    }
    function setEventEnvironmentTag(event: SentryEvent, environment: string) {
        event.tags = NSDictionary.dictionaryWithDictionary({
            'event.origin': 'ios',
            'event.environment': environment
        } as any);
    }
    function setEventOriginTag(event: SentryEvent) {
        if (event.sdk) {
            const sdkName = event.sdk.objectForKey('name');

            // If the event is from react native, it gets set there and we do not handle
            // it here.
            if (sdkName === 'sentry.cocoa') {
                setEventEnvironmentTag(event, 'native');
            }
        }
    }
    /**
     * Sending the envelope over the bridge to native
     * @param envelope Envelope
     */
    export async function sendEnvelope(envelope: Envelope) {
        if (!enableNative) {
            debug.warn('Event was skipped as native SDK is not enabled.');
            return;
        }
        const [EOL] = utf8ToBytes('\n');

        const [envelopeHeader, envelopeItems] = envelope;

        const headerString = JSON.stringify(envelopeHeader);
        const envelopeBytes: number[] = utf8ToBytes(headerString);
        envelopeBytes.push(EOL);

        let hardCrashed: boolean = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);

            let bytesPayload: number[] = [];
            if (typeof itemPayload === 'string') {
                bytesPayload = utf8ToBytes(itemPayload);
            } else if (itemPayload instanceof Uint8Array) {
                bytesPayload = [...itemPayload];
            } else if (itemPayload instanceof ArrayBuffer) {
                bytesPayload = [...new Uint8Array(itemPayload)];
            } else {
                bytesPayload = utf8ToBytes(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }

            // Content type is not inside BaseEnvelopeItemHeaders.
            (itemHeader as BaseEnvelopeItemHeaders).content_type = 'application/json';
            (itemHeader as BaseEnvelopeItemHeaders).length = bytesPayload.length;
            const serializedItemHeader = JSON.stringify(itemHeader);

            envelopeBytes.push(...utf8ToBytes(serializedItemHeader));
            envelopeBytes.push(EOL);
            envelopeBytes.push(...bytesPayload);
            envelopeBytes.push(EOL);
        }
        const data = NSData.dataWithData(new Uint8Array(envelopeBytes).buffer as any);
        const nEnvelope = PrivateSentrySDKOnly.envelopeWithData(data);
        if (!envelope) {
            throw new Error('Failed to parse envelope from byte array.');
        }
        if (hardCrashed) {
            // Storing to disk happens asynchronously with captureEnvelope
            PrivateSentrySDKOnly.storeEnvelope(nEnvelope);
        } else {
            PrivateSentrySDKOnly.captureEnvelope(nEnvelope);
        }
        if (sentryOptions.flushSendEvent) {
            SentrySDK.flush(0);
        }
    }
    let sentryOptions: NativescriptOptions;
    let nSentryOptions: SentryOptions;
    export async function initNativeSdk(originalOptions: NativescriptOptions = {}): Promise<boolean> {
        try {
            const options = {
                enableNative: true,
                ...originalOptions
            } as NativescriptOptions;
            if (!options.enableNative) {
                if (options.enableNativeNagger) {
                    console.warn('Note: Native Sentry SDK is disabled.');
                }
                enableNative = false;
                return false;
            }

            if (!options.autoInitializeNativeSdk) {
                if (options.enableNativeNagger) {
                    console.warn(
                        'Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false'
                    );
                }
                return false;
            }

            if (!options.dsn) {
                console.warn('Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.');
                return false;
            }
            sentryOptions = options;
            const {
                enableCrashHandler,
                enableNativeCrashHandling,
                enableAutoPerformanceTracking,
                enableTracing,
                tracesSampleRate,
                tracesSampler,
                beforeSend,
                beforeBreadcrumb,
                disabledNativeIntegrations,
                ...toPassOptions
            } = options;

            Object.keys(toPassOptions).forEach((k) => {
                const value = toPassOptions[k];
                const valuetype = typeof value;
                if (valuetype === 'undefined' || valuetype === 'object' || valuetype === 'function' || Array.isArray(value)) {
                    delete toPassOptions[k];
                }
            });
            const mutDict = NSMutableDictionary.alloc().initWithDictionary(dataSerialize(toPassOptions, true));

            nSentryOptions = PrivateSentrySDKOnly.optionsWithDictionaryDidFailWithError(mutDict as any);
            if (!nSentryOptions) {
                console.warn('Warning: Sentry options could not be parsed. Native SDK will not be initialized.');
                enableNative = false;
                return false;
            }

            // before send right now is never called when we send the envelope. Only on native crash
            nSentryOptions.beforeSend = (event: SentryEvent) => {
                const exceptions = event.exceptions;
                const count = exceptions?.count;
                // if enableCrashHandler is disabled we actually dont disable it but prevent event Sending
                // the reason is that without SentryCrashIntegration the scope does not get augmented and we loose info
                if (enableCrashHandler === false) {
                    return null;
                }
                if (count) {
                    for (let index = 0; index < exceptions.count; index++) {
                        const exception = exceptions.objectAtIndex(index) as SentryException;
                        const exceptionvalue = exception.value;
                        if (exceptionvalue) {
                            const matches = exceptionvalue.match(FATAL_ERROR_REGEXP);
                            if (matches) {
                                const errorMessage = matches[1];
                                const jsStackTrace = exceptionvalue.substring(exceptionvalue.indexOf(matches[2]));
                                const stack = parseErrorStack({ stack: 'at ' + jsStackTrace } as any).reverse();
                                stack.forEach((frame) => frameIteratee(frame));
                                addJavascriptExceptionInterface(event, 'Error', errorMessage, stack.reverse());
                                exception.type = 'NativeScriptException';
                                exception.value = errorMessage;
                            }
                        }
                    }
                }
                if (beforeSend) {
                    beforeSend(event as any, null);
                }
                setEventOriginTag(event);

                return event;
            };
            nSentryOptions.beforeBreadcrumb = (breadcrumb) => {
                if (beforeBreadcrumb) {
                    const deserialized = dictToJSON(breadcrumb.serialize());
                    const processed = beforeBreadcrumb(deserialized, null);
                    const serialized = dataSerialize(processed, true) as NSDictionary<string, any>;
                    const levels = ['log', 'debug', 'info', 'warning', 'error', 'fatal'];

                    if (processed) {
                        breadcrumb.level = Math.max(levels.indexOf(processed['level']), 0);
                        ['category', 'data', 'message', 'type'].forEach((key) => (breadcrumb[key] = serialized.objectForKey(key)));
                    } else {
                        return null;
                    }
                }
                return breadcrumb;
            };
            if (enableNativeCrashHandling === false) {
                nSentryOptions.enableCrashHandler = false;
            }
            if (disabledNativeIntegrations) {
                // sentry-cocoa 9 removed the options.integrations list; each integration
                // is now gated by its own dedicated option and cannot be disabled by name.
                console.warn('disabledNativeIntegrations is not supported on iOS anymore, use the dedicated native options instead (e.g. enableWatchdogTerminationTracking).');
            }

            if (enableAutoPerformanceTracking !== undefined) {
                PrivateSentrySDKOnly.appStartMeasurementHybridSDKMode = enableAutoPerformanceTracking;
                PrivateSentrySDKOnly.framesTrackingMeasurementHybridSDKMode = enableAutoPerformanceTracking;
            }
            const sdkVersion = PrivateSentrySDKOnly.getSdkVersionString();
            PrivateSentrySDKOnly.setSdkNameAndVersionString('sentry.cocoa.nativescript', sdkVersion);
            SentrySDK.startWithOptions(nSentryOptions);

            return true;
        } catch (error) {
            enableNative = false;
            console.error('initNativeSdk', error, error.stack);
            return false;
        }
    }

    export function nativeCrash() {
        SentrySDK.crash();
    }
    export function flush(timeout: number) {
        SentrySDK.flush(timeout);
    }

    function dictToJSON(dict) {
        return JSON.parse(NSString.alloc().initWithDataEncoding(NSJSONSerialization.dataWithJSONObjectOptionsError(dict, 0 as any), NSUTF8StringEncoding) as any);
    }
    export async function fetchNativeDeviceContexts() {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        let serializedScope: any = {};
        SentrySDK.configureScope((scope) => {
            try {
                const result = dictToJSON(scope.serialize());
                result['user'] = result['user'] || { id: PrivateSentrySDKOnly.installationID };
                serializedScope = result;
            } catch (error) {
                console.error('fetchNativeDeviceContexts', error, error.stack);
            }
        });
        const contexts = serializedScope.context || {};
        const extraContextDict = PrivateSentrySDKOnly.getExtraContext();
        if (extraContextDict) {
            const extraContext = dictToJSON(extraContextDict);
            if (extraContext?.device) {
                contexts.device = contexts.device || {};
                Object.assign(contexts.device, extraContext.device);
            }
            if (extraContext?.app) {
                contexts.app = contexts.app || {};
                Object.assign(contexts.app, extraContext.app);
            }
        }
        serializedScope.contexts = contexts;
        delete serializedScope.context;
        return serializedScope;
    }

    function eventLevel(level) {
        switch (level) {
            case 'fatal':
                return SentryLevel.kSentryLevelFatal;
            case 'warning':
                return SentryLevel.kSentryLevelWarning;
            case 'info':
            case 'log':
                return SentryLevel.kSentryLevelInfo;
            case 'debug':
                return SentryLevel.kSentryLevelDebug;
            default:
                return SentryLevel.kSentryLevelError;
        }
    }

    export function setUser(user: User | null) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            const [filteredUser, otherUserKeys] = splitObject(user, ['id', 'email', 'username', 'ip_address']);

            if (!filteredUser && !otherUserKeys) {
                scope.setUser(null);
            } else {
                const userInstance = SentryUser.alloc().init();
                if (typeof filteredUser?.id === 'number' || typeof filteredUser?.id === 'string') {
                    userInstance.userId = `${filteredUser.id}`;
                }
                if (typeof filteredUser?.email === 'string') {
                    userInstance.email = filteredUser.email;
                }
                if (typeof filteredUser?.username === 'string') {
                    userInstance.username = filteredUser.username;
                }
                if (typeof filteredUser.ip_address === 'string') {
                    userInstance.ipAddress = filteredUser.ip_address;
                }

                if (otherUserKeys) {
                    const nStr = NSString.stringWithString(JSON.stringify(otherUserKeys));
                    const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
                    userInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0 as any);
                }

                scope.setUser(userInstance);
            }
        });
    }
    export function setTag(key: string, value: string) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            if (value) {
                scope.setTagValueForKey(value, key);
            } else {
                scope.removeTagForKey(key);
            }
        });
    }

    export function setExtra(key: string, extra: any) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            if (extra) {
                scope.setExtraValueForKey(extra, key);
            } else {
                scope.removeContextForKey(key);
            }
        });
    }

    export function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            const breadcrumbInstance = SentryBreadcrumb.alloc().init();

            if (breadcrumb.level) {
                breadcrumbInstance.level = eventLevel(breadcrumb.level);
            }
            breadcrumbInstance.category = breadcrumb.category;
            breadcrumbInstance.type = breadcrumb.type;
            breadcrumbInstance.message = breadcrumb.message;

            if (breadcrumb.data) {
                const nStr = NSString.stringWithString(JSON.stringify(breadcrumb.data));
                const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
                breadcrumbInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0 as any);
            }

            scope.addBreadcrumb(breadcrumbInstance);
        });
    }
    // let scopeScope = null;
    // export function withScope(callback: (scope: Scope) => void) {
    //     scopeScope = SentryScope.alloc().init();
    //     // NSSentrySDK.withScope(new io.sentry.ScopeCallback({
    //     // run(nscope) {
    //     // nscope is ignored
    //     // console.log('native withScope', nscope);
    //     callback(null);
    //     scopeScope = null;
    //     // }
    //     // }));
    // }
    // export function  addAttachment(attachment: Attachment) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {

    //         if (attachment.data) {
    //             if (typeof attachment.data === 'string') {
    //                 attachment.data = new TextEncoder().encode(attachment.data);
    //             }
    //             scope.addAttachment(SentryAttachment.alloc().initWithDataFilenameContentType(attachment.data.buffer as any,  attachment.filename, attachment.contentType));
    //         } else {
    //             scope.addAttachment(SentryAttachment.alloc().initWithPath(attachment.filename));
    //         }
    //     });
    // }
    export function clearBreadcrumbs() {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => scope.clearBreadcrumbs());
    }
    export function setContext(key: string, context: { [key: string]: any } | null) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            if (!context) {
                scope.setContextValueForKey(null, key);
            } else {
                const nStr = NSString.stringWithString(JSON.stringify(context));
                const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
                scope.setContextValueForKey(NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0 as any), key);
            }
        });
    }

    export function enableNativeFramesTracking() {
        // Do nothing on iOS, this bridge method only has an effect on android.
        // If you're starting the Cocoa SDK manually,
        // you can set the 'enableAutoPerformanceTracing: true' option and
        // the 'tracesSampleRate' or 'tracesSampler' option.
    }

    export function disableNativeFramesTracking() {
        // only for android
    }
    let didFetchAppStart = false;
    export async function fetchNativeAppStart() {
        const appStartMeasurement = PrivateSentrySDKOnly.appStartMeasurement;
        const wasFetched = didFetchAppStart;
        didFetchAppStart = true;
        if (!appStartMeasurement) {
            return null;
        } else {
            const isColdStart = appStartMeasurement.type === SentryAppStartType.Cold;

            return {
                isColdStart,
                appStartTime: appStartMeasurement.appStartTimestamp.getTime(),
                didFetchAppStart: wasFetched
            };
        }
    }
    export async function fetchNativeFrames() {
        if (PrivateSentrySDKOnly.isFramesTrackingRunning) {
            const frames = PrivateSentrySDKOnly.currentScreenFrames;

            if (frames) {
                const totalFrames = frames.total;
                const slowFrames = frames.slow;
                const frozenFrames = frames.frozen;

                if (totalFrames === 0 && slowFrames === 0 && frozenFrames === 0) {
                    return null;
                }

                return {
                    totalFrames,
                    slowFrames,
                    frozenFrames
                };
            }
        }
        return null;
    }

    export function captureScreenshot(fileName = 'screenshot') {
        const rawScreenshots = PrivateSentrySDKOnly.captureScreenshots();
        if (!rawScreenshots) {
            return [];
        }
        const res = [];
        for (let index = 0; index < rawScreenshots.count; index++) {
            res.push({
                contentType: 'image/png',
                data: new Uint8Array(interop.bufferFromData(rawScreenshots.objectAtIndex(index))),
                filename: fileName + (index > 0 ? `-${index}` : '') + '.png'
            });
        }
        return res;
    }
    export function setAttribute(key: string, value: string | number | boolean) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            if (value === null || value === undefined) {
                scope.removeAttributeForKey(key);
            } else {
                scope.setAttributeValueForKey(primitiveProcessor(value), key);
            }
        });
    }

    export function setAttributes(attributes: Record<string, string | number | boolean>) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            Object.keys(attributes).forEach((key) => {
                scope.setAttributeValueForKey(primitiveProcessor(attributes[key]), key);
            });
        });
    }

    export function removeAttribute(key: string) {
        if (!enableNative) {
            return;
        }
        SentrySDK.configureScope((scope: SentryScope) => {
            scope.removeAttributeForKey(key);
        });
    }

    export let primitiveProcessor = (value: any): string => value as string;

    export function _setPrimitiveProcessor(processor: (value: any) => string) {
        primitiveProcessor = processor;
    }

    export async function crashedLastRun() {
        return SentrySDK.crashedLastRun;
    }
}
