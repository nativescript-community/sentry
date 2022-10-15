import { pointsFromBuffer } from '@nativescript-community/arraybuffers';
import { getClass } from '@nativescript/core/utils/types';
import { Scope  } from '@sentry/core';
import { Attachment, BaseEnvelopeItemHeaders, Breadcrumb, Envelope, EnvelopeItem, Event, SeverityLevel, User } from '@sentry/types';
import { SentryError, logger } from '@sentry/utils';
import { isHardCrash } from './misc';
import { NativescriptOptions } from './options';
import { utf8ToBytes } from './vendor';
import { UserFeedback } from './wrapper';

const numberHasDecimals = function (value: number): boolean {
    return !(value % 1 === 0);
};

const numberIs64Bit = function (value: number): boolean {
    return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
};
function dataSerialize (data?: any, wrapPrimitives?: boolean) {
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
                return NSArray.arrayWithArray((data as any).map(dataSerialize));
            }

            const node = {} as any;
            Object.keys(data).forEach(function (key) {
                const value = data[key];
                node[key] = dataSerialize(value, wrapPrimitives);
            });
            return NSDictionary.dictionaryWithDictionary(node);
        }

        default:
            return null;
    }
};

export namespace NATIVE {
    let enableNative = true;
    const _DisabledNativeError = new SentryError('Native is disabled');

    export function isNativeTransportAvailable() {
        return enableNative;
    }

    export function fetchNativeSdkInfo() {
        if (sentryOptions) {
            return {
                name: nSentryOptions.sdkInfo.name,
                version: nSentryOptions.sdkInfo.version
            };
        }
        return {};
    }
    let nativeRelease;
    export function fetchNativeRelease () {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        if (!nativeRelease) {
            const infoDict = NSBundle.mainBundle.infoDictionary;
            nativeRelease =  {
                id: infoDict.objectForKey('CFBundleIdentifier'),
                version: infoDict.objectForKey('CFBundleShortVersionString'),
                build: infoDict.objectForKey('CFBundleVersion')
            };
        }
        return nativeRelease;
    }
    export function closeNativeSdk() {
        NSSentrySDK.close();
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

    function _processLevel(level: SeverityLevel): SeverityLevel {
        if (level === 'log' as SeverityLevel) {
            return 'debug' as SeverityLevel;
        }
        else if (level === 'critical' as SeverityLevel) {
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

            event.breadcrumbs = _getBreadcrumbs(event);
            return [itemHeader, event];
        }

        return item;
    }
    function setEventEnvironmentTag(event: SentryEvent,  environment: string) {
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
    export async function sendEvent(event: Event) {
        try {
            // Process and convert deprecated levels
            // event.level = event.level ? _processLevel(event.level) : undefined;
            console.error('sendEvent', JSON.stringify(event));

            const payload = {
                ...event,
                message: {
                    message: event.message
                }
            };
            payload.tags = payload.tags || {};

            payload.tags['event.origin'] = 'ios';
            payload.tags['event.environment'] = 'nativescript';
            // Serialize and remove any instances that will crash the native bridge such as Spans
            const serializedPayload = JSON.parse(JSON.stringify(payload));
            const eventId = SentryId.alloc().initWithUUIDString(event.event_id);
            const envelopeHeader = SentryEnvelopeHeader.alloc().initWithId(eventId);
            const envelopeItemData = NSJSONSerialization.dataWithJSONObjectOptionsError(serializedPayload, 0);

            let itemType = payload.type;
            if (!itemType) {
                // Default to event type.
                itemType = 'event' as any;
            }

            const envelopeItemHeader = SentryEnvelopeItemHeader.alloc().initWithTypeLength(itemType, envelopeItemData.length);
            const envelopeItem = SentryEnvelopeItem.alloc().initWithHeaderData(envelopeItemHeader, envelopeItemData);

            const envelope = SentryEnvelope.alloc().initWithHeaderSingleItem(envelopeHeader, envelopeItem);

            if (event.level === 'fatal') {
                // captureEvent queues the event for submission, so storing to disk happens asynchronously
                // We need to make sure the event is written to disk before resolving the promise.
                // This could be replaced by SentrySDK.flush() when available.
                NSSentrySDK.storeEnvelope(envelope);
            } else {
                NSSentrySDK.captureEnvelope(envelope);
            }
            // if (sentryOptions.flushSendEvent === true) {

            // }
        } catch (err) {
            console.error('sendEvent', err, err.stack);
        }
    }
    /**
   * Sending the envelope over the bridge to native
   * @param envelope Envelope
   */
    export async function sendEnvelope(envelope: Envelope) {
        if (!enableNative) {
            logger.warn('Event was skipped as native SDK is not enabled.');
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
        const nEnvelope = NSSentrySDK.envelopeWithData(data);
        if (!envelope) {
            throw new Error('Failed to parse envelope from byte array.');
        }
        if (hardCrashed) {
            // Storing to disk happens asynchronously with captureEnvelope
            NSSentrySDK.storeEnvelope(nEnvelope);
        } else {
            NSSentrySDK.captureEnvelope(nEnvelope);
        }
        if (sentryOptions.flushSendEvent) {
            NSSentrySDK.flush(0);
        }
    }
    let sentryOptions: NativescriptOptions;
    let nSentryOptions: SentryOptions;
    export async function initNativeSdk(originalOptions: NativescriptOptions = {}): Promise<boolean> {
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
                    console.warn(
                        'Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false'
                    );
                }
                return false;
            }

            if (!options.dsn) {
                console.warn(
                    'Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.'
                );
                return false;
            }
            sentryOptions = options;
            const {tracesSampleRate, tracesSampler, beforeSend, ...toPassOptions} = options;

            Object.keys(toPassOptions).forEach((k) => {
                const value = toPassOptions[k];
                const valuetype =  typeof value;
                if (valuetype === 'undefined' || valuetype === 'object' || valuetype === 'function' || Array.isArray(value) )  {
                    delete toPassOptions[k];
                }
            });
            console.log('toPassOptions', Object.keys(toPassOptions));
            const mutDict = NSMutableDictionary.alloc().initWithDictionary(dataSerialize(toPassOptions) as any);

            nSentryOptions = SentryOptions.alloc().initWithDictDidFailWithError(mutDict as any);
            nSentryOptions.beforeSend = (event: SentryEvent)=>{
                console.log('beforeSend', event);
                if (beforeSend) {
                    beforeSend(event as any, null);
                }
                setEventOriginTag(event);
                return event;
            };
            if (toPassOptions.hasOwnProperty('enableNativeCrashHandling')) {
                if (!toPassOptions.enableNativeCrashHandling) {
                    const integrations = nSentryOptions.integrations.mutableCopy();
                    // console.log('integrations', typeof nSentryOptions, nSentryOptions.length, nSentryOptions[0]);
                    integrations.removeObject('SentryCrashIntegration');
                    sentryOptions.integrations = integrations;
                }
            }

            if (toPassOptions.hasOwnProperty('enableAutoPerformanceTracking')) {
                NSSentrySDK.appStartMeasurementHybridSDKMode = toPassOptions.enableAutoPerformanceTracking;
                NSSentrySDK.framesTrackingMeasurementHybridSDKMode = toPassOptions.enableAutoPerformanceTracking;
            }
            NSSentrySDK.startWithOptionsObject(nSentryOptions);

            // NSSentrySDK.startWithConfigureOptions((obj) => {
            //     const beforeSend = options.beforeSend;
            //     delete options.beforeSend;

            //     obj.beforeSend = (event: SentryEvent)=>{
            //         console.log('beforeSend', event);
            //         if (beforeSend) {
            //             beforeSend(event as any, null);
            //         }
            //         return event;
            //     };
            //     Object.keys(options).forEach((k) => {
            //         if (options[k] !== undefined )  {
            //             // console.log('setting sentry option',k, obj.hasOwnProperty(k), options[k] );
            //             obj[k] = options[k];

            //         }
            //     });
            //     nSentryOptions = obj;
            // });
            return (true);
        } catch (error) {
            enableNative = false;
            console.error('initNativeSdk', error, error.stack);
            return false;
        }
    }

    // export function nativeLogLevel(level: number) {
    //     let cocoaLevel;
    //     switch (level) {
    //         case 1:
    //             cocoaLevel = SentryLevel.kSentryLevelError;
    //             break;
    //         case 2:
    //             cocoaLevel = SentryLevel.kSentryLevelDebug;
    //             break;
    //         case 3:
    //             cocoaLevel = SentryLevel.kSentryLevelVerbose;
    //             break;
    //         default:
    //             cocoaLevel = SentryLevel.kSentryLevelNone;
    //     }
    //     return cocoaLevel;
    // }
    export function cranativeCrashsh() {
        NSSentrySDK.crash();
    }
    export function flush(timeout: number) {
        NSSentrySDK.flush(timeout);
    }
    function toJsObject(objCObj) {
        if (objCObj === null || typeof objCObj !== 'object') {
            return objCObj;
        }
        let node, key, i, l;
        const oKeyArr = objCObj.allKeys;

        if (oKeyArr === undefined && objCObj.count !== undefined) {
            // array
            node = [];
            for (i = 0, l = objCObj.count; i < l; i++) {
                key = objCObj.objectAtIndex(i);
                node.push(toJsObject(key));
            }
        } else if (oKeyArr !== undefined) {
            // object
            node = {};
            for (i = 0, l = oKeyArr.count; i < l; i++) {
                key = oKeyArr.objectAtIndex(i);
                const val = objCObj.valueForKey(key);

                // Firestore can store nulls
                if (val === null) {
                    node[key] = null;
                    continue;
                }
                node[key] = getValueForClass(val);
            }
        } else {
            node = getValueForClass(objCObj);
        }

        return node;
    }

    function getValueForClass(val) {
        switch (getClass(val)) {
            case 'NSArray':
            case 'NSMutableArray':
                return toJsObject(val);
            case 'NSDictionary':
            case 'NSMutableDictionary':
                return toJsObject(val);
            case 'String':
                return String(val);
            case 'Boolean':
                return val;
            case 'Number':
            case 'NSDecimalNumber':
                return Number(String(val));
            case 'Date':
                return new Date(val);

            default:
                return String(val);
        }
    }

    function dictToJSON(dict) {
        JSON.parse(NSString.alloc().initWithDataEncoding(NSJSONSerialization.dataWithJSONObjectOptionsError(dict, 0), NSUTF8StringEncoding) as any);
    }
    export async function fetchNativeDeviceContexts() {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        const contexts = {};
        NSSentrySDK.configureScope((scope) => {
            try {

                const serializedScope = scope.serialize();
                // console.log('toto' , dictToJSON(serializedScope), NSString.alloc().initWithDataEncoding(NSJSONSerialization.dataWithJSONObjectOptionsError(serializedScope, 0), NSUTF8StringEncoding));
                // const context2 = SentryEvent.alloc().init().context;
                // console.log('context2' , context2 && dictToJSON(context2));
                const tempContexts = (serializedScope.valueForKey('context'));
                const tempUser = serializedScope.valueForKey('user');
                const user = {};
                if (tempUser) {
                    Object.assign(user, dictToJSON(tempUser.valueForKey('user')));
                } else {
                    user['id'] = NSSentrySDK.installationID;
                }
                contexts['user'] = user;

                if (tempContexts) {
                    contexts['context'] = dictToJSON(tempContexts);
                }
            } catch (error) {
                console.error('fetchNativeDeviceContexts', error, error.stack);
            }
        });
        return (contexts);

    }
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

    export function disableNativeFramesTracking() {
        // only for android
    }
    let didFetchAppStart = false;
    export async function fetchNativeAppStart() {
        const appStartMeasurement = NSSentrySDK.appStartMeasurement;
        const wasFetched  =didFetchAppStart;
        didFetchAppStart = true;
        if (!appStartMeasurement) {
            return null;
        } else {
            const isColdStart = appStartMeasurement.type === SentryAppStartType.Cold;

            return {
                isColdStart,
                'appStartTime': (appStartMeasurement.appStartTimestamp.getTime() * 1000),
                didFetchAppStart: wasFetched,
            };
        }
    }
    export async function fetchNativeFrames() {
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
}
