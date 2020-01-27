import { android as appAndroid } from '@nativescript/core/application';
import { Event, Response, Status } from '@sentry/types';
import { NativescriptOptions } from './backend';

export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;
    let androidHelper: io.sentry.android.event.helper.AndroidEventBuilderHelper;
    function getAndroidHelper() {
        if (!androidHelper) {
            androidHelper = new io.sentry.android.event.helper.AndroidEventBuilderHelper(appAndroid.context);
        }
        return androidHelper;
    }
    export function fetchRelease() {
        const ctx = appAndroid.context as android.content.Context;
        const packageInfo = ctx.getPackageManager().getPackageInfo(ctx.getPackageName(), 0);
        return {
            id: packageInfo.packageName,
            version: packageInfo.versionName,
            build: packageInfo.versionCode
        };
    }
    function eventLevel(event) {
        const level = event.level || '';
        switch (level) {
            case 'fatal':
                return io.sentry.event.Event.Level.FATAL;
            case 'warning':
                return io.sentry.event.Event.Level.WARNING;
            case 'info':
                return io.sentry.event.Event.Level.INFO;
            case 'debug':
                return io.sentry.event.Event.Level.DEBUG;
            default:
                return io.sentry.event.Event.Level.ERROR;
        }
    }
    function getNativeHashMap(obj: { [k: string]: string }) {
        if (!obj) {
            return null;
        }
        const map = new java.util.HashMap<string, string>();
        Object.keys(obj).forEach(k => {
            map.put(k, obj[k]);
        });
        return map;
    }
    function getJSHashMap(obj: java.util.HashMap<any, any>) {
        if (!obj) {
            return null;
        }

        const result = {};
        let value, pair, key;

        const it = obj.entrySet().iterator();
        while (it.hasNext()) {
            pair = it.next() as java.util.Map.Entry<any, any>;
            value = pair.getValue();
            key = pair.getKey();
            if (value instanceof java.util.HashMap) {
                result[key] = getJSHashMap(value);
            } else if (value instanceof java.lang.Number) {
                result[key] = value.doubleValue();
            } else if (value && value.hasOwnProperty('length')) {
                // const jsValue = [];
                // const length = value.length;
                // for (let i = 0; i < length; i++) {
                //     jsValue[i] = value[i];
                // }
                result[key] = Array.from({ length: value.length }).map((v, i) => value[i]);
            } else {
                result[key] = value;
            }
        }

        // map.keySet().forEach(k => {

        // });
        return result;
    }
    function getUserBuilder(user: { [k: string]: any }) {
        const userBuilder = new io.sentry.event.UserBuilder();
        if (user.email) {
            userBuilder.setEmail(user.email);
        }
        if (user.userID) {
            userBuilder.setId(user.userID);
        } else if (user.userId) {
            userBuilder.setId(user.userId);
        } else if (user.id) {
            userBuilder.setId(user.id);
        }
        if (user.username) {
            userBuilder.setUsername(user.username);
        }
        if (user.extra) {
            userBuilder.setData(getNativeHashMap(user.extra));
        }
        return userBuilder;
    }
    const mJsModuleIdPattern = new RegExp('(?:^|[/\\\\])(\\d+\\.js)$').compile();
    function stackFrameToModuleId(frame: { file?: string }) {
        if (!!frame.file) {
            const matcher = frame.file.match(mJsModuleIdPattern);
            if (matcher) {
                return matcher[1] + ':';
            }
        }
        return '';
    }
    function convertToNativeStacktrace(stack) {
        const frames = new java.util.ArrayDeque();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];

            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';

            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = new io.sentry.event.interfaces.SentryStackTraceElement('', methodName, stackFrameToModuleId(frame), lineNumber, new java.lang.Integer(column), fileName, 'javascript');
            frames.add(stackFrame);
        }
        const synthStackTrace: io.sentry.event.interfaces.SentryStackTraceElement[] = Array.create(io.sentry.event.interfaces.SentryStackTraceElement, stack.length);
        const iterator = frames.descendingIterator() as java.util.Iterator<io.sentry.event.interfaces.SentryStackTraceElement>;
        let i = 0;
        while (iterator.hasNext()) {
            synthStackTrace[i] = iterator.next();
            i++;
        }
        return synthStackTrace;
    }
    function addExceptionInterface(eventBuilder, type, value, stack) {
        const stackTraceInterface = new io.sentry.event.interfaces.StackTraceInterface(convertToNativeStacktrace(stack));
        const exceptions = new java.util.ArrayDeque();
        exceptions.push(new io.sentry.event.interfaces.SentryException(value, type, '', stackTraceInterface));
        eventBuilder.withSentryInterface(new io.sentry.event.interfaces.ExceptionInterface(exceptions));
    }
    export function sendEvent(event: Event): Promise<Response> {
        return new Promise(resolve => {
            // const header = JSON.stringify({ event_id: event.event_id });

            // (event as any).message = {
            //     message: event.message
            // };
            // const payload = JSON.stringify(event);
            // const item = JSON.stringify({
            //     content_type: 'application/json',
            //     length: payload.length,
            //     type: 'event'
            // });
            // const envelope = `${header}\n${item}\n${payload}`;
            // // tslint:disable-next-line: no-unsafe-any
            // return RNSentry.captureEnvelope(envelope);

            let eventBuilder: io.sentry.event.EventBuilder;
            if (event.event_id) {
                const eventId = event.event_id.replace(/([0-9a-z]{8})([0-9a-z]{4})([0-9a-z]{4})([0-9a-z]{4})([0-9a-z]+)/, '$1-$2-$3-$4-$5');
                eventBuilder = new io.sentry.event.EventBuilder(java.util.UUID.fromString(eventId)).withLevel(eventLevel(event));
            } else {
                console.error('Event has no event_id');
                eventBuilder = new io.sentry.event.EventBuilder().withLevel(eventLevel(event));
            }

            // try {
            getAndroidHelper().helpBuildingEvent(eventBuilder);
            // } catch (err) {
            // console.log(err);
            // }

            if (event.breadcrumbs) {
                const breadcrumbs = event.breadcrumbs;
                const eventBreadcrumbs = new java.util.ArrayList<io.sentry.event.Breadcrumb>();
                for (let i = 0; i < breadcrumbs.length; i++) {
                    const breadcrumb = breadcrumbs[i];
                    const breadcrumbBuilder = new io.sentry.event.BreadcrumbBuilder();
                    if (breadcrumb.category) {
                        breadcrumbBuilder.setCategory(breadcrumb.category);
                    }

                    if (breadcrumb.type && breadcrumb.type != null) {
                        const typeString = breadcrumb.type.toUpperCase();
                        try {
                            breadcrumbBuilder.setType(io.sentry.event.Breadcrumb.Type.valueOf(typeString));
                        } catch (e) {
                            // don't copy over invalid breadcrumb 'type' value
                        }
                    }

                    if (breadcrumb.level && breadcrumb.level != null) {
                        const levelString = breadcrumb.level.toUpperCase();
                        try {
                            breadcrumbBuilder.setLevel(io.sentry.event.Breadcrumb.Level.valueOf(levelString));
                        } catch (e) {
                            // don't copy over invalid breadcrumb 'level' value
                        }
                    }

                    try {
                        if (breadcrumb.data && breadcrumb.data != null) {
                            const newData = new java.util.HashMap();
                            Object.keys(breadcrumb.data).forEach(k => {
                                const value = breadcrumb.data[k];
                                // in case a `status_code` entry got accidentally stringified as a float
                                if (k === 'status_code') {
                                    newData.put(k, value && value.endsWith('.0') ? value.replace('.0', '') : value);
                                } else {
                                    newData.put(k, value);
                                }
                            });
                            breadcrumbBuilder.setData(newData);
                        }
                    } catch (e) {
                        console.warn('Discarded breadcrumb.data since it was not an object');
                    }

                    if (breadcrumb.message) {
                        breadcrumbBuilder.setMessage(breadcrumb.message);
                    } else {
                        breadcrumbBuilder.setMessage('');
                    }
                    eventBreadcrumbs.add(i, breadcrumbBuilder.build());
                }
                if (eventBreadcrumbs.size() > 0) {
                    eventBuilder.withBreadcrumbs(eventBreadcrumbs);
                }
            }

            if (event.message) {
                eventBuilder.withMessage(event.message || '');
            }

            if (event.logger) {
                eventBuilder.withLogger(event.logger);
            }

            if (event.user) {
                const userBuilder = getUserBuilder(event.user);
                const builtUser = userBuilder.build();
                const userInterface = new io.sentry.event.interfaces.UserInterface(builtUser.getId(), builtUser.getUsername(), null, builtUser.getEmail(), builtUser.getData());
                eventBuilder.withSentryInterface(userInterface);
            }

            if (event.extra) {
                Object.keys(event.extra).forEach(k => {
                    const value = event.extra[k];
                    eventBuilder.withExtra(k, value);
                });
            }

            if (event.fingerprint) {
                const fingerprint: string[] = event.fingerprint;
                const print = Array.create('string', fingerprint.length);
                for (let i = 0; i < fingerprint.length; ++i) {
                    print[i] = fingerprint[i];
                }
                eventBuilder.withFingerprint(print);
            }

            if (event.tags) {
                Object.keys(event.tags).forEach(k => {
                    const value = event.tags[k];
                    eventBuilder.withTag(k, value || 'INVALID_TAG');
                });
            }

            if (event.exception) {
                const exceptionValues: any[] = event.exception.values;
                const exception = exceptionValues[0];
                if (exception.stacktrace) {
                    const stacktrace = exception.stacktrace;
                    const frames = stacktrace.frames;
                    if (exception.value) {
                        addExceptionInterface(eventBuilder, exception.type, exception.value, frames);
                    } else {
                        // We use type/type here since this indicates an Unhandled Promise Rejection
                        // https://github.com/getsentry/react-native-sentry/issues/353
                        addExceptionInterface(eventBuilder, exception.type, exception.type, frames);
                    }
                }
            }

            if (event.environment) {
                eventBuilder.withEnvironment(event.environment);
            }

            if (event.release) {
                eventBuilder.withRelease(event.release);
            } else {
                eventBuilder.withRelease(null);
            }

            if (event.dist) {
                eventBuilder.withDist(event.dist);
            } else {
                eventBuilder.withDist(null);
            }

            const builtEvent = eventBuilder.build();

            if (event.sdk) {
                const sdk = event.sdk;
                const sdkIntegrations = new java.util.HashSet();
                if (sdk.integrations) {
                    const integrations: string[] = sdk.integrations;
                    for (let i = 0; i < integrations.length; ++i) {
                        sdkIntegrations.add(integrations[i]);
                    }
                }
                builtEvent.setSdk(new io.sentry.event.Sdk(sdk.name, sdk.version, sdkIntegrations));
            }
            io.sentry.Sentry.capture(builtEvent);
            resolve({ status: Status.Success });
        }).catch(err => {
            console.error(err);
            return Promise.reject(err);
        }) as any;
    }
    let sentryClient: io.sentry.SentryClient;
    export function startWithDsnString(dsnString: string, options: NativescriptOptions): Promise<Response> {
        return new Promise((resolve, reject) => {
            if (sentryClient != null) {
                console.info('Already started, use existing client', dsnString);
                resolve({ status: Status.Failed });
                return;
            }

            try {
                sentryClient = io.sentry.Sentry.init(dsnString, new io.sentry.android.AndroidSentryClientFactory(appAndroid.context));
            } catch (e) {
                console.error('Catching on startWithDsnString, calling callback', e.getMessage());
                reject(e);
                return;
            }

            // androidHelper = new io.sentry.android.event.helper.AndroidEventBuilderHelper(this.getReactApplicationContext());

            sentryClient.addShouldSendEventCallback(
                new io.sentry.event.helper.ShouldSendEventCallback({
                    shouldSend(event: io.sentry.event.Event) {
                        console.log('shouldSend', event.getSentryInterfaces());
                        // We don't want to send events that are from ExceptionsManagerModule.
                        // Because we sent it already from raven.
                        if (event.getSentryInterfaces().containsKey(io.sentry.event.interfaces.ExceptionInterface.EXCEPTION_INTERFACE)) {
                            const exceptionInterface = event.getSentryInterfaces().get(io.sentry.event.interfaces.ExceptionInterface.EXCEPTION_INTERFACE);
                            if (
                                exceptionInterface
                                    .getExceptions()
                                    .getFirst()
                                    .getExceptionClassName()
                                    .contains('JavascriptException')
                            ) {
                                return false;
                            }
                        }
                        return true;
                    }
                })
            );
            if (options.environment && options.environment != null) {
                sentryClient.environment = options.environment;
            }
            if (options.release && options.release != null) {
                sentryClient.release = options.release;
            }
            if (options.dist && options.dist != null) {
                sentryClient.dist = options.dist;
            }
            resolve({ status: Status.Success });
        });
    }

    export function setLogLevel(level: number) {
        // if (sentryClient) {
        //     sentryClient.setL
        // }
        // [SentryClient setLogLevel:[SentryJavaScriptBridgeHelper sentryLogLevelFromJavaScriptLevel:level]];   // logger.setLevel(this.logLevel(level));
    }

    export function crash() {
        throw new java.lang.RuntimeException('TEST - Sentry Client Crash');
    }
    export function deviceContexts(): Promise<any> {
        return new Promise(resolve => {
            const eventBuilder = new io.sentry.event.EventBuilder();
            getAndroidHelper().helpBuildingEvent(eventBuilder);
            const event = eventBuilder.build();

            const params = {};
            const it = event
                .getContexts()
                .entrySet()
                .iterator();
            let value, pair, key;
            while (it.hasNext()) {
                pair = it.next() as java.util.Map.Entry<any, any>;
                value = pair.getValue();
                key = pair.getKey();
                params[key] = getJSHashMap(value);
            }

            resolve(params);
        });
    }
}
