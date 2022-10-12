import { getClass } from '@nativescript/core/utils/types';
import { Breadcrumb, Event, Response, Severity, Status, User } from '@sentry/types';
import { NativescriptOptions, _processLevel } from './backend';
import { UserFeedback } from './nssentry';

export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;

    export function fetchNativeSdkInfo() {
        if (sentryOptions) {
            return {
                name: nSentryOptions.sdkInfo.name,
                version: nSentryOptions.sdkInfo.version
            };
        }
        return {};
    }
    export function fetchNativeRelease() {
        const infoDict = NSBundle.mainBundle.infoDictionary;
        return {
            id: infoDict.objectForKey('CFBundleIdentifier'),
            version: infoDict.objectForKey('CFBundleShortVersionString'),
            build: infoDict.objectForKey('CFBundleVersion')
        };
    }
    export function closeNativeSdk() {
        NSSentrySDK.close();
    }

    export async function sendEvent(event: Event) {
        try {
            // Process and convert deprecated levels
            event.level = event.level ? _processLevel(event.level) : undefined;

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

            if (event.level === Severity.Fatal) {
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
            console.error(err);
        }
    }
    let sentryOptions: NativescriptOptions;
    let nSentryOptions: SentryOptions;
    export function startWithOptions(dsnString: string, options: NativescriptOptions = {}): Promise<Response> {
        return new Promise((resolve) => {
            sentryOptions = options;
            NSSentrySDK.startWithConfigureOptions((obj) => {
                const beforeSend = options.beforeSend;
                delete options.beforeSend;
                obj.beforeSend = (event: SentryEvent)=>{
                    if (beforeSend) {
                        beforeSend(event as any);
                    }
                    return event;
                };
                Object.keys(options).forEach((k) => {
                    obj[k] = options[k];
                });
                nSentryOptions = obj;
            });
            resolve({ status: Status.Success });
        });
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
    export function crash() {
        NSSentrySDK.crash();
    }
    export function flush(timeout: number) {
        // SentryClient.sharedClient.flush(timeout);
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
    export function deviceContexts(): Promise<any> {
        return new Promise((resolve) => {
            NSSentrySDK.configureScope((scope) => {
                const serializedScope = scope.serialize();
                const contexts = serializedScope.valueForKey('context');
                resolve(JSON.parse(NSString.alloc().initWithDataEncoding(NSJSONSerialization.dataWithJSONObjectOptionsError(contexts, 0), NSUTF8StringEncoding) as any));
            });
            //
            // resolve(toJsObject(SentryEvent.alloc().init().context));
        });
    }
    export function captureUserFeedback(feedback: UserFeedback) {
        const userFeedback = SentryUserFeedback.alloc().initWithEventId(SentryId.alloc().initWithUUIDString(feedback.eventId));
        if (feedback.comments) {
            userFeedback.comments = feedback.comments;
        }
        if (feedback.email) {
            userFeedback.email = feedback.email;
        }
        if (feedback.name) {
            userFeedback.name = feedback.name;
        }
        NSSentrySDK.captureUserFeedback(userFeedback);
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

    export function setUser(user: User | null, otherUserKeys) {
        NSSentrySDK.configureScope((scope: SentryScope) => {
            if (!user && !otherUserKeys) {
                scope.setUser(null);
            } else {
                const userInstance = SentryUser.alloc().init();

                if (user) {
                    userInstance.userId = user.id;
                    userInstance.email = user.email;
                    userInstance.username = user.username;
                }

                if (otherUserKeys) {
                    const nStr = NSString.stringWithString(JSON.stringify(otherUserKeys));
                    const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
                    userInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0);
                }

                scope.setUser(userInstance);
            }
        });
    }
    export function setTag(key: string, value: string) {
        NSSentrySDK.configureScope((scope: SentryScope) => {
            scope.setTagValueForKey(value, key);
        });
    }

    export function setExtra(key: string, extra: any) {
        NSSentrySDK.configureScope((scope: SentryScope) => {
            scope.setExtraValueForKey(extra, key);
        });
    }

    export function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number) {
        NSSentrySDK.configureScope((scope: SentryScope) => {
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
                breadcrumbInstance.data = NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0);
            }

            scope.addBreadcrumb(breadcrumbInstance);
        });
    }
    export function clearBreadcrumbs() {
        NSSentrySDK.configureScope((scope: SentryScope) => {
            scope.clearBreadcrumbs();
        });
    }
    export function setContext(key: string, context: { [key: string]: any } | null) {
        NSSentrySDK.configureScope((scope: SentryScope) => {
            if (!context) {
                scope.setContextValueForKey(null, key);
            } else {
                const nStr = NSString.stringWithString(JSON.stringify(context));
                const nData = nStr.dataUsingEncoding(NSUTF8StringEncoding);
                scope.setContextValueForKey(NSJSONSerialization.JSONObjectWithDataOptionsError(nData, 0), key);
            }
        });
    }
}
