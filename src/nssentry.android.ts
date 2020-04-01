import { android as appAndroid } from '@nativescript/core/application';
import { Event, Response, Status } from '@sentry/types';
import { NativescriptOptions } from './backend';
import { rewriteFrameIntegration } from './sdk';
import { convertNativescriptFramesToSentryFrames, parseErrorStack } from './integrations/debugsymbolicator';

export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;

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
                return io.sentry.core.SentryLevel.FATAL;
            case 'warning':
                return io.sentry.core.SentryLevel.WARNING;
            case 'info':
                return io.sentry.core.SentryLevel.INFO;
            case 'debug':
                return io.sentry.core.SentryLevel.DEBUG;
            default:
                return io.sentry.core.SentryLevel.ERROR;
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
            pair = it.next();
            value = pair.getValue();
            key = pair.getKey();
            if (value instanceof java.util.HashMap) {
                result[key] = getJSHashMap(value);
            } else if (value instanceof java.lang.Number) {
                result[key] = value.doubleValue();
            } else if (value && value.hasOwnProperty('length')) {
                result[key] = Array.from({ length: value.length }).map((v, i) => value[i]);
            } else {
                result[key] = value;
            }
        }

        return result;
    }
    function getUser(user: { [k: string]: any }) {
        const nUser = new io.sentry.core.protocol.User();
        if (user.email) {
            nUser.setEmail(user.email);
        }
        if (user.userID) {
            nUser.setId(user.userID);
        } else if (user.userId) {
            nUser.setId(user.userId);
        } else if (user.id) {
            nUser.setId(user.id);
        }
        if (user.username) {
            nUser.setUsername(user.username);
        }
        if (user.extra) {
            nUser.setOthers(getNativeHashMap(user.extra));
        }
        return nUser;
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
    function convertToNativeStacktrace(
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
        const nStackTrace = new io.sentry.core.protocol.SentryStackTrace();
        const frames = new java.util.ArrayList<io.sentry.core.protocol.SentryStackFrame>();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];

            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';

            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = new io.sentry.core.protocol.SentryStackFrame();
            stackFrame.setModule('');
            stackFrame.setFunction(methodName.length > 0 ? methodName.split('.').pop() : methodName);
            stackFrame.setFilename(stackFrameToModuleId(frame));
            stackFrame.setLineno(new java.lang.Integer(lineNumber));
            stackFrame.setColno(new java.lang.Integer(column));
            stackFrame.setAbsPath(fileName);
            stackFrame.setPlatform('javascript');
            stackFrame.setInApp(new java.lang.Boolean(frame.in_app || false));
            frames.add(stackFrame);
        }
        nStackTrace.setFrames(frames);
        return nStackTrace;
    }
    function addExceptionInterface(nEvent: io.sentry.core.SentryEvent, type: string, value: string, stack) {
        const exceptions = nEvent.getExceptions() || new java.util.ArrayList<io.sentry.core.protocol.SentryException>();

        const nException = new io.sentry.core.protocol.SentryException();
        nException.setType(type);
        nException.setValue(value);
        nException.setModule('');
        // nException.setModule('com.tns');
        nException.setThreadId(new java.lang.Long(java.lang.Thread.currentThread().getId()));

        nException.setStacktrace(convertToNativeStacktrace(stack));
        exceptions.add(nException);
        nEvent.setExceptions(exceptions);
    }
    export function sendEvent(event: Event): Promise<Response> {
        return new Promise(resolve => {
            const nEvent = new io.sentry.core.SentryEvent();
            if (event.event_id) {
                nEvent.setEventId(new io.sentry.core.protocol.SentryId(event.event_id));
            }

            if (event.breadcrumbs) {
                const breadcrumbs = event.breadcrumbs;
                const eventBreadcrumbs = new java.util.ArrayList<io.sentry.core.Breadcrumb>();
                for (let i = 0; i < breadcrumbs.length; i++) {
                    const breadcrumb = breadcrumbs[i];
                    const nBreadcumb = new io.sentry.core.Breadcrumb();
                    if (breadcrumb.category) {
                        nBreadcumb.setCategory(breadcrumb.category);
                    }

                    if (breadcrumb.type) {
                        const typeString = breadcrumb.type.toUpperCase();
                        try {
                            nBreadcumb.setType(typeString);
                        } catch (e) {
                            // don't copy over invalid breadcrumb 'type' value
                        }
                    }

                    if (breadcrumb.level) {
                        nBreadcumb.setLevel(eventLevel(breadcrumb.level));
                    }

                    try {
                        if (breadcrumb.data) {
                            Object.keys(breadcrumb.data).forEach(k => {
                                const value = breadcrumb.data[k];
                                // in case a `status_code` entry got accidentally stringified as a float
                                if (k === 'status_code') {
                                    nBreadcumb.setData(k, value && value.endsWith('.0') ? value.replace('.0', '') : value);
                                } else {
                                    nBreadcumb.setData(k, value);
                                }
                            });
                        }
                    } catch (e) {
                        console.warn('Discarded breadcrumb.data since it was not an object');
                    }

                    if (breadcrumb.message) {
                        nBreadcumb.setMessage(breadcrumb.message);
                    } else {
                        nBreadcumb.setMessage('');
                    }
                    eventBreadcrumbs.add(i, nBreadcumb);
                }
                if (eventBreadcrumbs.size() > 0) {
                    nEvent.setBreadcrumbs(eventBreadcrumbs);
                }
            }

            if (event.message) {
                const nMsg = new io.sentry.core.protocol.Message();
                nMsg.setMessage(event.message || '');
                nEvent.setMessage(nMsg);
            }

            if (event.logger) {
                nEvent.setLogger(event.logger);
            }

            if (event.user) {
                nEvent.setUser(getUser(event.user));
            }

            if (event.extra) {
                Object.keys(event.extra).forEach(k => {
                    const value = event.extra[k];
                    nEvent.setExtra(k, value);
                });
            }

            if (event.fingerprint) {
                const fingerprint: string[] = event.fingerprint;
                const print = new java.util.ArrayList();
                for (let i = 0; i < fingerprint.length; ++i) {
                    print.add(fingerprint[i]);
                }
                nEvent.setFingerprints(print);
            }

            if (event.tags) {
                Object.keys(event.tags).forEach(k => {
                    const value = event.tags[k];
                    nEvent.setTag(k, value || 'INVALID_TAG');
                });
            }

            if (event.exception) {
                const exceptionValues: any[] = event.exception.values;
                const exception = exceptionValues[0];
                if (exception.stacktrace) {
                    const stacktrace = exception.stacktrace;
                    const frames = stacktrace.frames;
                    if (exception.value) {
                        addExceptionInterface(nEvent, exception.type, exception.value, frames);
                    } else {
                        // We use type/type here since this indicates an Unhandled Promise Rejection
                        // https://github.com/getsentry/react-native-sentry/issues/353
                        addExceptionInterface(nEvent, exception.type, exception.type, frames);
                    }
                }
            }
            if (event.environment) {
                nEvent.setEnvironment(event.environment);
            }

            if (event.platform) {
                nEvent.setPlatform(event.platform);
            }

            if (event.release) {
                nEvent.setRelease(event.release);
            }

            if (event.dist) {
                nEvent.setDist(event.dist);
            }
            if (event.level) {
                nEvent.setLevel(eventLevel(event.level));
            }
            if (event.contexts) {
                Object.keys(event.contexts).forEach(k => {
                    // const value = event.contexts[k];
                    // const context = new io.sentry.core.protocol.Contexts();
                    // nEvent.setTag(k, value || 'INVALID_TAG');
                });
            }
            if (event.sdk) {
                const sdk = event.sdk;
                const nSdk = new io.sentry.core.protocol.SdkVersion();
                nSdk.setName(sdk.name);
                nSdk.setVersion(sdk.version);
                if (sdk.integrations) {
                    const integrations: string[] = sdk.integrations;
                    for (let i = 0; i < integrations.length; ++i) {
                        nSdk.addIntegration(integrations[i]);
                    }
                }
                nEvent.setSdk(nSdk);
            }
            const id = io.sentry.core.Sentry.captureEvent(nEvent);
            // io.sentry.core.Sentry.flush(0);
            resolve({ status: Status.Success, id });
        }).catch(err => {
            console.error(err);
            return Promise.reject(err);
        }) as any;
    }

    export function flush(timeout: number) {
        console.log('native flush', timeout);
        io.sentry.core.Sentry.flush(timeout);
    }
    let initialized = false;
    export function startWithDsnString(dsnString: string, options: NativescriptOptions): Promise<Response> {
        return new Promise((resolve, reject) => {
            if (initialized) {
                console.info('Already started, use existing client', dsnString);
                resolve({ status: Status.Failed });
                return;
            }

            try {
                io.sentry.android.core.SentryAndroid.init(
                    appAndroid.context,
                    new io.sentry.core.Sentry.OptionsConfiguration({
                        configure(config) {
                            config.setDsn(dsnString);
                            config.setEnvironment('javascript');
                            if (!!options.environment) {
                                config.setEnvironment(options.environment);
                            }
                            config.setLogger(
                                new io.sentry.core.ILogger({
                                    log(param0: io.sentry.core.SentryLevel, param1: any, param2: any, param3?: native.Array<any>) {
                                        console.log('sentry', param0, param1, param2, param3);
                                    }
                                })
                            );
                            if (!!options.debug) {
                                config.setDebug(options.debug);
                            }
                            if (!!options.release) {
                                config.setRelease(options.release);
                            }
                            if (!!options.dist) {
                                config.setDist(options.dist);
                            }

                            config.setEnableNdk(true);

                            const integrations = config.getIntegrations();
                            const size = integrations.size();
                            if (options.enableNativeCrashHandling === false) {
                                let indexToRemove = -1;
                                for (let index = 0; index < size; index++) {
                                    const inte = integrations.get(index);
                                    if (inte instanceof io.sentry.core.UncaughtExceptionHandlerIntegration) {
                                        indexToRemove = index;
                                    }
                                }
                                if (indexToRemove > -1) {
                                    integrations.remove(indexToRemove);
                                }
                            }
                            config.setBeforeSend(
                                new io.sentry.core.SentryOptions.BeforeSendCallback({
                                    execute(event, hint) {
                                        // we use this callback to actually try and get the JS stack when a native error is catched
                                        try {
                                            const ex: io.sentry.core.protocol.SentryException = event.getExceptions().get(0);
                                            if (ex && ex.getType() === 'NativeScriptException') {
                                                const privateMethod = io.sentry.core.SentryEvent.class.getDeclaredMethod('getThrowable', null);
                                                privateMethod.setAccessible(true);
                                                const returnValue: java.lang.Throwable = privateMethod.invoke(event, null);
                                                if (returnValue instanceof io.sentry.core.exception.ExceptionMechanismException) {
                                                    const throwable: java.lang.Throwable = returnValue.getThrowable();
                                                    if (throwable instanceof (com as any).tns.NativeScriptException) {
                                                        const jsStackTrace: string = (throwable as any).getIncomingStackTrace();
                                                        if (jsStackTrace) {
                                                            const stack = parseErrorStack({ stack: jsStackTrace } as any);

                                                            const convertedFrames = convertNativescriptFramesToSentryFrames(stack as any);
                                                            convertedFrames.forEach(frame => rewriteFrameIntegration._iteratee(frame));
                                                            addExceptionInterface(event, 'Error', throwable.getMessage(), convertedFrames.reverse());
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (e) {}
                                        return event;
                                    }
                                })
                            );
                        }
                    })
                );
                initialized = true;
            } catch (e) {
                console.error('Catching on startWithDsnString, calling callback', e.getMessage());
                reject(e);
                return;
            }

            resolve({ status: Status.Success });
        });
    }

    export function setLogLevel(level: number) {
        switch (level) {
            case 1:
                io.sentry.core.Sentry.setLevel(null);
                break;
            case 2:
                io.sentry.core.Sentry.setLevel(io.sentry.core.SentryLevel.ERROR);
                break;
            case 3:
                io.sentry.core.Sentry.setLevel(io.sentry.core.SentryLevel.DEBUG);
                break;
            case 4:
                io.sentry.core.Sentry.setLevel(io.sentry.core.SentryLevel.LOG);
                break;
        }
    }

    export function crash() {
        throw new java.lang.RuntimeException('TEST - Sentry Client Crash');
    }
    export function deviceContexts(): Promise<any> {
        return new Promise(resolve => {
            const nEvent = new io.sentry.core.SentryEvent();

            const params = {};
            const it = nEvent
                .getContexts()
                .entrySet()
                .iterator();
            let value, pair, key;
            while (it.hasNext()) {
                pair = it.next();
                value = pair.getValue();
                key = pair.getKey();
                params[key] = getJSHashMap(value);
            }
            resolve(params);
        });
    }
}
