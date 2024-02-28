import { SentryError, logger } from '@sentry/utils';
import { parseErrorStack } from './integrations/debugsymbolicator';
import { isHardCrash } from './misc';
import { utf8ToBytes } from './vendor';
import { rewriteFrameIntegration } from './integrations/default';
const numberHasDecimals = function (value) {
    return !(value % 1 === 0);
};
const numberIs64Bit = function (value) {
    return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
};
function dataSerialize(data, wrapPrimitives) {
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
                }
                else {
                    return NSNumber.alloc().initWithLongLong(data);
                }
            }
            else {
                if (hasDecimals) {
                    return NSNumber.alloc().initWithFloat(data);
                }
                else {
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
                return NSArray.arrayWithArray(data.map(dataSerialize));
            }
            const node = {};
            Object.keys(data).forEach(function (key) {
                const value = data[key];
                node[key] = dataSerialize(value, wrapPrimitives);
            });
            return NSDictionary.dictionaryWithDictionary(node);
        }
        default:
            return null;
    }
}
;
const FATAL_ERROR_REGEXP = /NativeScript encountered a fatal error: (.*?)\n at \n(\t*)?(.*)$/m;
export var NATIVE;
(function (NATIVE) {
    let enableNative = true;
    const _DisabledNativeError = new SentryError('Native is disabled');
    function convertToNativeJavascriptStacktrace(stack) {
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
        nStackTrace.frames = (frames);
        return nStackTrace;
    }
    function addJavascriptExceptionInterface(nEvent, type, value, stack) {
        const exceptions = nEvent.exceptions;
        const actualExceptions = NSMutableArray.alloc().initWithArray(exceptions);
        const nException = SentryException.new();
        nException.type = type;
        nException.value = value;
        // nException.threadId = NSThread.currentThread.;
        nException.stacktrace = convertToNativeJavascriptStacktrace(stack);
        actualExceptions.insertObjectAtIndex(nException, 0);
        nEvent.exceptions = (actualExceptions);
    }
    function isNativeTransportAvailable() {
        return enableNative;
    }
    NATIVE.isNativeTransportAvailable = isNativeTransportAvailable;
    function fetchNativeSdkInfo() {
        // if (sentryOptions) {
        return {
            name: PrivateSentrySDKOnly.getSdkName(),
            version: PrivateSentrySDKOnly.getSdkVersionString()
        };
        // }
        // return {};
    }
    NATIVE.fetchNativeSdkInfo = fetchNativeSdkInfo;
    let nativeRelease;
    function fetchNativeRelease() {
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
    NATIVE.fetchNativeRelease = fetchNativeRelease;
    function closeNativeSdk() {
        NSSentrySDK.close();
    }
    NATIVE.closeNativeSdk = closeNativeSdk;
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
    function _getBreadcrumbs(event) {
        const breadcrumbs = event.breadcrumbs;
        return breadcrumbs;
    }
    /**
   * Convert js severity level in event.level and event.breadcrumbs to more widely supported levels.
   * @param event
   * @returns Event with more widely supported Severity level strings
   */
    function _processLevels(event) {
        const processed = {
            ...event,
            level: event.level ? _processLevel(event.level) : undefined,
            breadcrumbs: event.breadcrumbs?.map((breadcrumb) => ({
                ...breadcrumb,
                level: breadcrumb.level
                    ? _processLevel(breadcrumb.level)
                    : undefined,
            })),
        };
        return processed;
    }
    /**
   * Convert js severity level which has critical and log to more widely supported levels.
   * @param level
   * @returns More widely supported Severity level strings
   */
    function _processLevel(level) {
        if (level === 'log') {
            return 'debug';
        }
        else if (level === 'critical') {
            return 'fatal';
        }
        return level;
    }
    /**
   * Gets the event from envelopeItem and applies the level filter to the selected event.
   * @param data An envelope item containing the event.
   * @returns The event from envelopeItem or undefined.
   */
    function _processItem(item) {
        const [itemHeader, itemPayload] = item;
        if (itemHeader.type === 'event' || itemHeader.type === 'transaction') {
            const event = _processLevels(itemPayload);
            event.breadcrumbs = _getBreadcrumbs(event);
            return [itemHeader, event];
        }
        return item;
    }
    function setEventEnvironmentTag(event, environment) {
        event.tags = NSDictionary.dictionaryWithDictionary({
            'event.origin': 'ios',
            'event.environment': environment
        });
    }
    function setEventOriginTag(event) {
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
    async function sendEnvelope(envelope) {
        if (!enableNative) {
            logger.warn('Event was skipped as native SDK is not enabled.');
            return;
        }
        const [EOL] = utf8ToBytes('\n');
        const [envelopeHeader, envelopeItems] = envelope;
        const headerString = JSON.stringify(envelopeHeader);
        const envelopeBytes = utf8ToBytes(headerString);
        envelopeBytes.push(EOL);
        let hardCrashed = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);
            let bytesPayload = [];
            if (typeof itemPayload === 'string') {
                bytesPayload = utf8ToBytes(itemPayload);
            }
            else if (itemPayload instanceof Uint8Array) {
                bytesPayload = [...itemPayload];
            }
            else if (itemPayload instanceof ArrayBuffer) {
                bytesPayload = [...new Uint8Array(itemPayload)];
            }
            else {
                bytesPayload = utf8ToBytes(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }
            // Content type is not inside BaseEnvelopeItemHeaders.
            itemHeader.content_type = 'application/json';
            itemHeader.length = bytesPayload.length;
            const serializedItemHeader = JSON.stringify(itemHeader);
            envelopeBytes.push(...utf8ToBytes(serializedItemHeader));
            envelopeBytes.push(EOL);
            envelopeBytes.push(...bytesPayload);
            envelopeBytes.push(EOL);
        }
        const data = NSData.dataWithData(new Uint8Array(envelopeBytes).buffer);
        const nEnvelope = NSSentrySDK.envelopeWithData(data);
        if (!envelope) {
            throw new Error('Failed to parse envelope from byte array.');
        }
        if (hardCrashed) {
            // Storing to disk happens asynchronously with captureEnvelope
            NSSentrySDK.storeEnvelope(nEnvelope);
        }
        else {
            NSSentrySDK.captureEnvelope(nEnvelope);
        }
        if (sentryOptions.flushSendEvent) {
            NSSentrySDK.flush(0);
        }
    }
    NATIVE.sendEnvelope = sendEnvelope;
    let sentryOptions;
    let nSentryOptions;
    async function initNativeSdk(originalOptions = {}) {
        try {
            const options = {
                enableNative: true,
                ...originalOptions,
            };
            if (!options.enableNative) {
                if (options.enableNativeNagger) {
                    console.warn('Note: Native Sentry SDK is disabled.');
                }
                enableNative = false;
                return false;
            }
            if (!options.autoInitializeNativeSdk) {
                if (options.enableNativeNagger) {
                    console.warn('Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false');
                }
                return false;
            }
            if (!options.dsn) {
                console.warn('Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.');
                return false;
            }
            sentryOptions = options;
            const { tracesSampleRate, tracesSampler, beforeSend, beforeBreadcrumb, ...toPassOptions } = options;
            Object.keys(toPassOptions).forEach((k) => {
                const value = toPassOptions[k];
                const valuetype = typeof value;
                if (valuetype === 'undefined' || valuetype === 'object' || valuetype === 'function' || Array.isArray(value)) {
                    delete toPassOptions[k];
                }
            });
            const mutDict = NSMutableDictionary.alloc().initWithDictionary(dataSerialize(toPassOptions));
            nSentryOptions = SentryOptions.alloc().initWithDictDidFailWithError(mutDict);
            // before send right now is never called when we send the envelope. Only on native crash
            nSentryOptions.beforeSend = (event) => {
                const exception = event.exceptions?.objectAtIndex(0);
                const exceptionvalue = exception?.value;
                if (exceptionvalue) {
                    const matches = exceptionvalue.match(FATAL_ERROR_REGEXP);
                    if (matches) {
                        const errorMessage = matches[1];
                        const jsStackTrace = exceptionvalue.substring(exceptionvalue.indexOf(matches[2]));
                        const stack = parseErrorStack({ stack: 'at ' + jsStackTrace }).reverse();
                        stack.forEach((frame) => rewriteFrameIntegration._iteratee(frame));
                        addJavascriptExceptionInterface(event, 'Error', errorMessage, stack.reverse());
                        exception.type = 'NativeScriptException';
                        exception.value = errorMessage;
                    }
                }
                if (beforeSend) {
                    beforeSend(event, null);
                }
                setEventOriginTag(event);
                return event;
            };
            nSentryOptions.beforeBreadcrumb = (breadcrumb) => {
                if (beforeBreadcrumb) {
                    const deserialized = dictToJSON(breadcrumb.serialize());
                    const processed = beforeBreadcrumb(deserialized, null);
                    const serialized = dataSerialize(processed);
                    const levels = ['log', 'debug', 'info', 'warning', 'error', 'fatal'];
                    if (processed) {
                        breadcrumb.level = Math.max(levels.indexOf(processed['level']), 0);
                        ['category', 'data', 'message', 'type']
                            .forEach(key => breadcrumb[key] = serialized.objectForKey(key));
                    }
                    else {
                        return null;
                    }
                }
                return breadcrumb;
            };
            if (toPassOptions.hasOwnProperty('enableNativeCrashHandling')) {
                if (!toPassOptions.enableNativeCrashHandling) {
                    const integrations = nSentryOptions.integrations.mutableCopy();
                    integrations.removeObject('SentryCrashIntegration');
                    nSentryOptions.integrations = integrations;
                }
            }
            if (toPassOptions.hasOwnProperty('enableAutoPerformanceTracking')) {
                NSSentrySDK.appStartMeasurementHybridSDKMode = toPassOptions.enableAutoPerformanceTracking;
                NSSentrySDK.framesTrackingMeasurementHybridSDKMode = toPassOptions.enableAutoPerformanceTracking;
            }
            NSSentrySDK.startWithOptions(nSentryOptions);
            return (true);
        }
        catch (error) {
            enableNative = false;
            console.error('initNativeSdk', error, error.stack);
            return false;
        }
    }
    NATIVE.initNativeSdk = initNativeSdk;
    function nativeCrash() {
        NSSentrySDK.crash();
    }
    NATIVE.nativeCrash = nativeCrash;
    function flush(timeout) {
        NSSentrySDK.flush(timeout);
    }
    NATIVE.flush = flush;
    function dictToJSON(dict) {
        return JSON.parse(NSString.alloc().initWithDataEncoding(NSJSONSerialization.dataWithJSONObjectOptionsError(dict, 0), NSUTF8StringEncoding));
    }
    async function fetchNativeDeviceContexts() {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        let serializedScope = {};
        NSSentrySDK.configureScope((scope) => {
            try {
                const result = dictToJSON(scope.serialize());
                result['user'] = result['user'] || { id: NSSentrySDK.installationID };
                serializedScope = result;
            }
            catch (error) {
                console.error('fetchNativeDeviceContexts', error, error.stack);
            }
        });
        const contexts = serializedScope.context;
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
    NATIVE.fetchNativeDeviceContexts = fetchNativeDeviceContexts;
    // export function captureUserFeedback(feedback: UserFeedback) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     const userFeedback = SentryUserFeedback.alloc().initWithEventId(SentryId.alloc().initWithUUIDString(feedback.eventId));
    //     if (feedback.comments) {
    //         userFeedback.comments = feedback.comments;
    //     }
    //     if (feedback.email) {
    //         userFeedback.email = feedback.email;
    //     }
    //     if (feedback.name) {
    //         userFeedback.name = feedback.name;
    //     }
    //     NSSentrySDK.captureUserFeedback(userFeedback);
    // }
    // function eventLevel(level) {
    //     switch (level) {
    //         case 'fatal':
    //             return SentryLevel.kSentryLevelFatal;
    //         case 'warning':
    //             return SentryLevel.kSentryLevelWarning;
    //         case 'info':
    //         case 'log':
    //             return SentryLevel.kSentryLevelInfo;
    //         case 'debug':
    //             return SentryLevel.kSentryLevelDebug;
    //         default:
    //             return SentryLevel.kSentryLevelError;
    //     }
    // }
    // export function setUser(user: User | null, otherUserKeys) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         if (!user && !otherUserKeys) {
    //             scope.setUser(null);
    //         } else {
    //             const userInstance = SentryUser.alloc().init();
    //             if (user) {
    //                 userInstance.userId = user.id;
    //                 userInstance.email = user.email;
    //                 userInstance.username = user.username;
    //             }
    //             if (otherUserKeys) {
    //                 const nStr = NSString.stringWithString(JSON.stringify(otherUserKeys));
    //                 const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
    //                 userInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0);
    //             }
    //             scope.setUser(userInstance);
    //         }
    //     });
    // }
    // export function setTag(key: string, value: string) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         scope.setTagValueForKey(value, key);
    //     });
    // }
    // export function setExtra(key: string, extra: any) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         scope.setExtraValueForKey(extra, key);
    //     });
    // }
    // export function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         const breadcrumbInstance = SentryBreadcrumb.alloc().init();
    //         if (breadcrumb.level) {
    //             breadcrumbInstance.level = eventLevel(breadcrumb.level);
    //         }
    //         breadcrumbInstance.category = breadcrumb.category;
    //         breadcrumbInstance.type = breadcrumb.type;
    //         breadcrumbInstance.message = breadcrumb.message;
    //         if (breadcrumb.data) {
    //             const nStr = NSString.stringWithString(JSON.stringify(breadcrumb.data));
    //             const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
    //             breadcrumbInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0);
    //         }
    //         scope.addBreadcrumb(breadcrumbInstance);
    //     });
    // }
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
    // export function clearBreadcrumbs() {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         scope.clearBreadcrumbs();
    //     });
    // }
    // export function setContext(key: string, context: { [key: string]: any } | null) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     NSSentrySDK.configureScope((scope: SentryScope) => {
    //         if (!context) {
    //             scope.setContextValueForKey(null, key);
    //         } else {
    //             const nStr = NSString.stringWithString(JSON.stringify(context));
    //             const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
    //             scope.setContextValueForKey(NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0), key);
    //         }
    //     });
    // }
    function enableNativeFramesTracking() {
        // Do nothing on iOS, this bridge method only has an effect on android.
        // If you're starting the Cocoa SDK manually,
        // you can set the 'enableAutoPerformanceTracing: true' option and
        // the 'tracesSampleRate' or 'tracesSampler' option.
    }
    NATIVE.enableNativeFramesTracking = enableNativeFramesTracking;
    function disableNativeFramesTracking() {
        // only for android
    }
    NATIVE.disableNativeFramesTracking = disableNativeFramesTracking;
    let didFetchAppStart = false;
    async function fetchNativeAppStart() {
        const appStartMeasurement = NSSentrySDK.appStartMeasurement;
        const wasFetched = didFetchAppStart;
        didFetchAppStart = true;
        if (!appStartMeasurement) {
            return null;
        }
        else {
            const isColdStart = appStartMeasurement.type === 1 /* SentryAppStartType.Cold */;
            return {
                isColdStart,
                'appStartTime': (appStartMeasurement.appStartTimestamp.getTime() * 1000),
                didFetchAppStart: wasFetched,
            };
        }
    }
    NATIVE.fetchNativeAppStart = fetchNativeAppStart;
    async function fetchNativeFrames() {
        if (NSSentrySDK.isFramesTrackingRunning) {
            const frames = NSSentrySDK.currentScreenFrames;
            if (frames) {
                const totalFrames = frames.total;
                const slowFrames = frames.slow;
                const frozenFrames = frames.frozen;
                if (totalFrames !== 0 || slowFrames !== 0 || frozenFrames !== 0) {
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
    NATIVE.fetchNativeFrames = fetchNativeFrames;
    function captureScreenshot(fileName = 'screenshot') {
        const rawScreenshots = PrivateSentrySDKOnly.captureScreenshots();
        const res = [];
        for (let index = 0; index < rawScreenshots.count; index++) {
            res.push({
                'contentType': 'image/png',
                data: new Uint8Array(interop.bufferFromData(rawScreenshots.objectAtIndex(index))),
                filename: fileName + (index > 0 ? `-${index}` : '') + '.png'
            });
        }
        return res;
    }
    NATIVE.captureScreenshot = captureScreenshot;
})(NATIVE || (NATIVE = {}));
//# sourceMappingURL=wrapper.ios.js.map