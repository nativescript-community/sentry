import { getClass } from '@nativescript/core/utils/types';
import { Event, Response, Status } from '@sentry/types';
import { NativescriptOptions } from './backend';
export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;
    export function fetchRelease() {
        const infoDict = NSBundle.mainBundle.infoDictionary;
        return {
            id: infoDict.objectForKey('CFBundleIdentifier'),
            version: infoDict.objectForKey('CFBundleShortVersionString'),
            build: infoDict.objectForKey('CFBundleVersion')
        };
    }
    export function sendEvent(event: Event): Promise<Response> {
        return new Promise((resolve, reject) => {
            console.log('sendEvent');
            const jsonData = NSString.stringWithString(JSON.stringify(event)).dataUsingEncoding(NSUTF8StringEncoding);
            const sentryEvent = SentryEvent.alloc().initWithJSON(jsonData);
            SentryClient.sharedClient.sendEventWithCompletionHandler(sentryEvent, function(error) {
                console.log('sendEventWithCompletionHandler', error);
                if (error) {
                    reject(error);
                } else {
                    resolve({ status: Status.Success });
                }
            });
        }).catch(err => {
            console.error(err);
            return Promise.reject(err);
        }) as any;;
    }
    export function startWithDsnString(dsnString: string, options: NativescriptOptions): Promise<Response> {
        return new Promise(resolve => {
            const client = SentryClient.alloc().initWithDsnDidFailWithError(dsnString);
            // client.shouldSendEvent = (event: SentryEvent) => true;
            client.beforeSerializeEvent = (e: SentryEvent) => {
                console.log('beforeSerializeEvent3', e.exceptions,  e.exceptions && e.exceptions.count > 0 && toJsObject(e.exceptions.objectAtIndex(0).serialize()), e.stacktrace);
                const stacktrace = e.stacktrace;
                if (stacktrace) {
                    const frames = stacktrace.frames;
                    frames.enumerateObjectsUsingBlock(p => {
                        console.log('frame', p.fileName);
                    });
                }
            };
            SentryClient.sharedClient = client;
            if (!!options.enableNativeCrashHandling) {
                SentryClient.sharedClient.startCrashHandlerWithError();
            }
            if (!!options.environment) {
                SentryClient.sharedClient.environment = options.environment;
            }
            if (!!options.release) {
                SentryClient.sharedClient.releaseName = options.release;
            }
            if (!!options.dist) {
                SentryClient.sharedClient.dist = options.dist;
            }
            resolve({ status: Status.Success });
        });
    }

    export function setLogLevel(level: number) {
        SentryClient.logLevel = SentryJavaScriptBridgeHelper.sentryLogLevelFromJavaScriptLevel(level);
    }
    export function crash() {
        SentryClient.sharedClient.crash();
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
        return new Promise(resolve => {
            resolve(
                toJsObject(
                    SentryContext.alloc()
                        .init()
                        .serialize()
                )
            );
        });
    }
}
