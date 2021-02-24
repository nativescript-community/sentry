import { getClass } from '@nativescript/core/utils/types';
import { Event, Response, Severity, Status } from '@sentry/types';
import { NativescriptOptions, _processLevel } from './backend';
import { UserFeedback } from './nssentry';
export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;
    export function fetchRelease() {
        const infoDict = NSBundle.mainBundle.infoDictionary;
        return {
            id: infoDict.objectForKey('CFBundleIdentifier'),
            version: infoDict.objectForKey('CFBundleShortVersionString'),
            build: infoDict.objectForKey('CFBundleVersion'),
        };
    }

    export async function sendEvent(event: Event) {
        // Process and convert deprecated levels
        event.level = event.level ? _processLevel(event.level) : undefined;

        const header = NSDictionary.dictionaryWithObjectsForKeys([event.event_id,event.sdk], ['event_id', 'sdk']);

        const payload = {
            ...event,
            message: {
                message: event.message,
            },
        };

        // Serialize and remove any instances that will crash the native bridge such as Spans
        const serializedPayload = JSON.parse(JSON.stringify(payload));
        const sdkInfo = SentrySdkInfo.alloc().initWithDict(header);
        const eventId = SentryId.alloc().initWithUUIDString(event.event_id);
        const envelopeHeader = SentryEnvelopeHeader.alloc().initWithIdAndSdkInfo(eventId, sdkInfo);
        const envelopeItemData = NSJSONSerialization.dataWithJSONObjectOptionsError(serializedPayload, 0);

        let itemType = payload.type;
        if (!itemType) {
            // Default to event type.
            itemType = 'event' as any;
        }

        const envelopeItemHeader = SentryEnvelopeItemHeader.alloc().initWithTypeLength(itemType,envelopeItemData.length);
        const envelopeItem = SentryEnvelopeItem.alloc().initWithHeaderData(envelopeItemHeader,envelopeItemData);

        const envelope = SentryEnvelope.alloc().initWithHeaderSingleItem(envelopeHeader,envelopeItem);

        if (TNS_ENV === 'production' && event.level === Severity.Fatal) {
            // captureEvent queues the event for submission, so storing to disk happens asynchronously
            // We need to make sure the event is written to disk before resolving the promise.
            // This could be replaced by SentrySDK.flush() when available.
            SentrySDK.currentHub().getClient().storeEnvelope(envelope);
        } else {
            SentrySDK.currentHub().captureEnvelope(envelope);
        }


    }
    export function startWithDsnString(dsnString: string, options: NativescriptOptions): Promise<Response> {
        return new Promise((resolve) => {

            SentrySDK.startWithConfigureOptions((obj) => {
                obj.logLevel = SentryLogLevel.kSentryLogLevelVerbose;
                Object.keys(options).forEach((k) => {
                    obj[k] = options[k];
                });
            });
            resolve({ status: Status.Success });
        });
    }

    export function setLogLevel(level: number) {
        let cocoaLevel;
        switch (level) {
            case 1:
                cocoaLevel = SentryLogLevel.kSentryLogLevelError;
                break;
            case 2:
                cocoaLevel = SentryLogLevel.kSentryLogLevelDebug;
                break;
            case 3:
                cocoaLevel = SentryLogLevel.kSentryLogLevelVerbose;
                break;
            default:
                cocoaLevel = SentryLogLevel.kSentryLogLevelNone;
        }
        SentrySDK.logLevel = cocoaLevel;
    }
    export function crash() {
        SentrySDK.crash();
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
                console.log(
                    "Please report this at https://github.com/farfromrefug/nativescript-gesturehandler-febase/issues: iOS toJsObject is missing a converter for class '" +
                        getClass(val) +
                        "'. Casting to String as a fallback."
                );
                return String(val);
        }
    }
    export function deviceContexts(): Promise<any> {
        return new Promise((resolve) => {
            SentrySDK.configureScope((scope) => {
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
            userFeedback.comments = (feedback.comments);
        }
        if (feedback.email) {
            userFeedback.email = (feedback.email);
        }
        if (feedback.name) {
            userFeedback.name = (feedback.name);
        }
        SentrySDK.currentHub().getClient().captureUserFeedback(userFeedback);
    }
}
