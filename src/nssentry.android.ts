import { Application } from '@nativescript/core';
import { android as androidApp } from '@nativescript/core/application';
import { Breadcrumb, Event, Response, Status, User } from '@sentry/types';
import { NativescriptOptions, _processLevel } from './backend';
import { convertNativescriptFramesToSentryFrames, parseErrorStack } from './integrations/debugsymbolicator';
import { UserFeedback } from './nssentry';
import { rewriteFrameIntegration } from './sdk';


export namespace NSSentry {
    export const nativeClientAvailable = true;
    export const nativeTransport = true;

    let frameMetricsAggregator: androidx.core.app.FrameMetricsAggregator;

    function eventLevel(level) {
        switch (level) {
            case 'fatal':
                return io.sentry.SentryLevel.FATAL;
            case 'warning':
                return io.sentry.SentryLevel.WARNING;
            case 'info':
            case 'log':
                return io.sentry.SentryLevel.INFO;
            case 'debug':
                return io.sentry.SentryLevel.DEBUG;
            default:
                return io.sentry.SentryLevel.ERROR;
        }
    }
    function getNativeHashMap(obj: { [k: string]: string }) {
        if (!obj) {
            return null;
        }
        const map = new java.util.HashMap<string, string>();
        Object.keys(obj).forEach((k) => {
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
        const nUser = new io.sentry.protocol.User();
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
    const mJsModuleIdPattern = new RegExp('(?:^|[/\\\\])(\\d+\\.js)$');
    function stackFrameToModuleId(frame: { file?: string }) {
        if (!!frame.file) {
            const matcher = mJsModuleIdPattern.exec(frame.file);
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
        const nStackTrace = new io.sentry.protocol.SentryStackTrace();
        const frames = new java.util.ArrayList<io.sentry.protocol.SentryStackFrame>();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];

            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';

            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = new io.sentry.protocol.SentryStackFrame();
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
    function addExceptionInterface(nEvent: io.sentry.SentryEvent, type: string, value: string, stack) {
        const exceptions = nEvent.getExceptions() || new java.util.ArrayList<io.sentry.protocol.SentryException>();

        const nException = new io.sentry.protocol.SentryException();
        nException.setType(type);
        nException.setValue(value);
        nException.setModule('');
        // nException.setModule('com.tns');
        nException.setThreadId(new java.lang.Long(java.lang.Thread.currentThread().getId()));

        nException.setStacktrace(convertToNativeStacktrace(stack));
        exceptions.add(nException);
        nEvent.setExceptions(exceptions);
    }
    export async function sendEvent(event: Event): Promise<Response> {
        try {
            // Process and convert deprecated levels
            const nEvent = new io.sentry.SentryEvent();
            if (event.event_id) {
                nEvent.setEventId(new io.sentry.protocol.SentryId(event.event_id));
            }

            if (event.breadcrumbs) {
                const breadcrumbs = event.breadcrumbs;
                const eventBreadcrumbs = new java.util.ArrayList<io.sentry.Breadcrumb>();
                for (let i = 0; i < breadcrumbs.length; i++) {
                    const breadcrumb = breadcrumbs[i];
                    const nBreadcumb = new io.sentry.Breadcrumb();
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
                            Object.keys(breadcrumb.data).forEach((k) => {
                                let value = breadcrumb.data[k];
                                // in case a `status_code` entry got accidentally stringified as a float
                                if (k === 'status_code' && typeof value === 'string' && value.endsWith('.0')) {
                                    value = value.replace('.0', '');
                                } else if (typeof value === 'boolean') {
                                    value = new java.lang.Boolean(value);
                                } else if (typeof value === 'number') {
                                    value = value.toString();
                                } else if (Array.isArray(value)) {
                                    value = new org.json.JSONArray(JSON.stringify(value));
                                } else if (value && typeof value === 'object') {
                                    value = new org.json.JSONObject(JSON.stringify(value));
                                }

                                nBreadcumb.setData(k, value);
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
                const nMsg = new io.sentry.protocol.Message();
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
                Object.keys(event.extra).forEach((k) => {
                    const value = event.extra[k];
                    nEvent.setExtra(k, typeof value === 'string' ? value : JSON.stringify(value));
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
                Object.keys(event.tags).forEach((k) => {
                    const value = event.tags[k];
                    nEvent.setTag(k, (value || 'INVALID_TAG').toString());
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
                Object.keys(event.contexts).forEach((k) => {
                    // const value = event.contexts[k];
                    // const context = new io.sentry.protocol.Contexts();
                    // nEvent.setTag(k, value || 'INVALID_TAG');
                });
            }
            if (event.sdk) {
                const sdk = event.sdk;
                const nSdk = new io.sentry.protocol.SdkVersion();
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
            const id = io.sentry.Sentry.captureEvent(nEvent);
            flush(0);
            return({ status: 'success', id } as any);
        }catch(err) {
            console.error('error sending sentry event', err, err.stack);
            throw(err);
        };
    }

    export async function captureEnvelope(envelope: string) {
        const installation = new java.io.File(nSentryOptions.getOutboxPath(), java.util.UUID.randomUUID().toString());
        try {
            const out = new java.io.FileOutputStream(installation);
            out.write(new java.lang.String(envelope).getBytes(java.nio.charset.Charset.forName('UTF-8')));
        } catch(err) {
            console.error('captureEnvelope error', err);
        }
    }

    export function flush(timeout: number) {
        io.sentry.Sentry.flush(timeout);
    }
    let initialized = false;
    let sentryOptions: NativescriptOptions ;
    let nSentryOptions: io.sentry.SentryOptions ;

    function addPackages( event: io.sentry.SentryEvent,  sdk: io.sentry.protocol.SdkVersion) {
        const eventSdk = event.getSdk();
        if (eventSdk != null && eventSdk.getName() === 'sentry.javascript.react-native' && sdk != null) {
            const sentryPackages = sdk.getPackages();
            if (sentryPackages != null) {
                for (let index = 0; index < sentryPackages.size(); index++) {
                    const sentryPackage = sentryPackages.get(index);
                    eventSdk.addPackage(sentryPackage.getName(), sentryPackage.getVersion());

                }
            }
            const integrations = sdk.getIntegrations();
            if (integrations != null) {
                for (let index = 0; index < integrations.size(); index++) {
                    eventSdk.addIntegration(integrations.get(index));

                }
            }
            event.setSdk(eventSdk);
        }
    }
    export function startWithDsnString(dsnString: string, options: NativescriptOptions = {}): Promise<Response> {
        return new Promise((resolve, reject) => {
            if (initialized) {
                resolve({ status: Status.Failed });
                return;
            }

            try {
                io.sentry.android.core.SentryAndroid.init(
                    Application.android.context,
                    new io.sentry.Sentry.OptionsConfiguration({
                        configure(config: io.sentry.SentryOptions) {
                            // config.setLogger(new io.sentry.SystemOutLogger());
                            try {
                                config.setDsn(dsnString);

                                if (options.maxBreadcrumbs) {
                                    config.setMaxBreadcrumbs(options.maxBreadcrumbs);
                                }

                                if (!!options.environment) {
                                    config.setEnvironment(options.environment);
                                } else {
                                    config.setEnvironment('javascript');
                                }
                                if (!!options.debug) {
                                    io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
                                    config.setDebug(new java.lang.Boolean(options.debug));
                                // config.setDiagnosticLevel(io.sentry.SentryLevel.DEBUG);
                                }
                                if (!!options.release) {
                                    config.setRelease(options.release);
                                }
                                if (!!options.dist) {
                                    config.setDist(options.dist);
                                }
                                if (options.enableAutoSessionTracking !== undefined) {
                                    config.setEnableAutoSessionTracking(options.enableAutoSessionTracking);
                                }
                                if (options.sessionTrackingIntervalMillis !== undefined) {
                                    config.setSessionTrackingIntervalMillis(options.sessionTrackingIntervalMillis);
                                }
                                if (options.enableNdkScopeSync !== undefined) {
                                    config.setEnableScopeSync(options.enableNdkScopeSync);
                                }
                                if (options.attachStacktrace !== undefined) {
                                    config.setAttachStacktrace(options.attachStacktrace);
                                }
                                if (options.attachThreads !== undefined) {
                                // JS use top level stacktraces and android attaches Threads which hides them so
                                // by default we hide.
                                    config.setAttachThreads(options.attachThreads);
                                }
                                if (options.sendDefaultPii !== undefined) {
                                    config.setSendDefaultPii(options.sendDefaultPii);
                                }

                                if (options.enableAutoPerformanceTracking === true) {

                                    frameMetricsAggregator = new androidx.core.app.FrameMetricsAggregator();
                                    const currentActivity = Application.android.foregroundActivity;

                                    if (frameMetricsAggregator != null && currentActivity != null) {
                                        try {
                                            frameMetricsAggregator.add(currentActivity);
                                        } catch (err) {
                                        // throws ConcurrentModification when calling addOnFrameMetricsAvailableListener
                                        // this is a best effort since we can't reproduce it
                                        }
                                    }

                                } else {
                                    disableNativeFramesTracking();
                                }

                                // config.setEnableNdk(true);
                                const integrations = config.getIntegrations();
                                const size = integrations.size();
                                if (options.enableNativeCrashHandling === false) {
                                    for (let index = size - 1; index >= 0; index--) {
                                        const inte = integrations.get(index);
                                        if (
                                            inte instanceof io.sentry.UncaughtExceptionHandlerIntegration ||
                                        inte instanceof io.sentry.android.core.AnrIntegration ||
                                        inte instanceof io.sentry.android.core.NdkIntegration
                                        ) {
                                            integrations.remove(index);
                                        }
                                    }
                                }

                                config.setTransportFactory(new io.sentry.ITransportFactory({
                                    create( sopt: io.sentry.SentryOptions,  requestDetails: io.sentry.RequestDetails) {
                                        const map =requestDetails.getHeaders();
                                        map.put('X-Forwarded-Protocol', 'https');
                                        if (options.headers) {
                                            Object.keys(options.headers).forEach(k=>{
                                                map.put(k, options.headers[k]);
                                            });
                                        }
                                        return new io.sentry.transport.AsyncHttpTransport(
                                            sopt, new io.sentry.transport.RateLimiter(sopt.getLogger()), sopt.getTransportGate(), requestDetails);
                                    }
                                }));
                                config.setBeforeSend(
                                    new io.sentry.SentryOptions.BeforeSendCallback({
                                        execute(event, hint) {
                                            if (options.beforeSend) {
                                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                                                options.beforeSend(event as any, hint);
                                            }

                                            // we use this callback to actually try and get the JS stack when a native error is catched
                                            try {
                                                const ex: io.sentry.protocol.SentryException = event.getExceptions().get(0);
                                                if (ex && ex.getType() === 'NativeScriptException') {
                                                    let mechanism = event.getThrowable && event.getThrowable();
                                                    if (!mechanism) {
                                                        const privateMethod = io.sentry.SentryEvent.class.getDeclaredMethod('getThrowable', null);
                                                        privateMethod.setAccessible(true);
                                                        mechanism = privateMethod.invoke(event, null);
                                                    }
                                                    let throwable;
                                                    if (mechanism instanceof io.sentry.exception.ExceptionMechanismException) {
                                                        throwable = mechanism.getThrowable();
                                                    } else if (mechanism instanceof (com as any).tns.NativeScriptException) {
                                                        throwable = mechanism;
                                                    }
                                                    if (throwable ) {
                                                        const jsStackTrace: string = (throwable ).getIncomingStackTrace();
                                                        if (jsStackTrace) {
                                                            const stack = parseErrorStack({ stack: jsStackTrace } as any);

                                                            const convertedFrames = convertNativescriptFramesToSentryFrames(stack as any);
                                                            convertedFrames.forEach((frame) => rewriteFrameIntegration._iteratee(frame));
                                                            addExceptionInterface(event, 'Error', throwable.getMessage(), convertedFrames.reverse());
                                                        }
                                                    }
                                                }
                                            } catch (e) {}
                                            event.setTag('event.origin', 'android');
                                            event.setTag('event.environment', 'nativescript');
                                            addPackages(event, config.getSdkVersion());
                                            return event;
                                        },
                                    })
                                );
                                nSentryOptions = config;
                                sentryOptions = options;
                            } catch(err) {
                                console.error('Error starting Sentry', err);
                                throw err;
                            }

                        },
                    })
                );
                initialized = true;
            } catch (e) {
                console.error('Catching on startWithDsnString, calling callback', e);
                reject(e);
                return;
            }

            resolve({ status: Status.Success });
        });
    }
    export function disableNativeFramesTracking() {
        if (frameMetricsAggregator) {
            frameMetricsAggregator.stop();
            frameMetricsAggregator = null;
        }
    }
    // export function setLogLevel(level: number) {
    //     switch (level) {
    //         case 1:
    //             io.sentry.Sentry.setLevel(null);
    //             break;
    //         case 2:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.ERROR);
    //             break;
    //         case 3:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
    //             break;
    //         case 4:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.INFO);
    //             break;
    //     }
    // }

    export function fetchNativeSdkInfo () {
        return {};
    }

    export function fetchNativeRelease () {
        const context = androidApp.context;
        const packageInfo = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
        return {
            'id': packageInfo.packageName,
            'version': packageInfo.versionName,
            'build': packageInfo.versionCode + ''
        };
    }

    export function closeNativeSdk () {
        io.sentry.Sentry.close();
    }

    export function crash() {
        throw new java.lang.RuntimeException('TEST - Sentry Client Crash');
    }
    export function deviceContexts(): Promise<any> {
        return new Promise((resolve) => {
            const nEvent = new io.sentry.SentryEvent();

            const params = {};
            const it = nEvent.getContexts().entrySet().iterator();
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

    export function captureUserFeedback(feedback: UserFeedback) {
        const userFeedback = new io.sentry.UserFeedback(new io.sentry.protocol.SentryId(feedback.eventId));
        if (feedback.comments) {
            userFeedback.setComments(feedback.comments);
        }
        if (feedback.email) {
            userFeedback.setEmail(feedback.email);
        }
        if (feedback.name) {
            userFeedback.setName(feedback.name);
        }
        io.sentry.Sentry.captureUserFeedback(userFeedback);
    }


    export function setUser(user: User | null, otherUserKeys) {
        io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
            run(scope) {
                if (user == null && otherUserKeys == null) {
                    scope.setUser(null);
                } else {
                    const userInstance = new io.sentry.protocol.User();

                    if (user) {
                        if (user.email) {
                            userInstance.setEmail(user.email);
                        }

                        if (user.id) {
                            userInstance.setId(user.id);
                        }

                        if (user.username) {
                            userInstance.setUsername(user.username);
                        }

                        if (user.ip_address) {
                            userInstance.setIpAddress(user.ip_address);
                        }
                    }

                    if (otherUserKeys ) {
                        userInstance.setOthers(getNativeHashMap(otherUserKeys));
                    }
                    scope.setUser(userInstance);
                }
            }
        }));

    }
    export function setTag(key: string, value: string) {
        io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
            run(scope) {
                scope.setTag(key, value);
            }
        }));
    }

    export function setExtra(key: string, extra: string) {
        io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
            run(scope) {
                scope.setExtra(key, extra);
            }
        }));
    }

    export function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number) {
        io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
            run(scope) {
                const breadcrumbInstance = new io.sentry.Breadcrumb();

                if (breadcrumb.message) {
                    breadcrumbInstance.setMessage(breadcrumb.message);
                }

                if (breadcrumb.type) {
                    breadcrumbInstance.setType(breadcrumb.type);
                }

                if (breadcrumb.category) {
                    breadcrumbInstance.setCategory(breadcrumb.category);
                }

                if (breadcrumb.level) {
                    breadcrumbInstance.setLevel(eventLevel(breadcrumb.level));
                }

                if (breadcrumb.data) {
                    Object.keys(breadcrumb.data).forEach(key => {
                        breadcrumbInstance.setData(key, breadcrumb.data[key]);
                    });
                }

                scope.addBreadcrumb(breadcrumbInstance);
            }
        }));
    }
    export function clearBreadcrumbs() {
        io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
            run(scope) {
                scope.clearBreadcrumbs();
            }
        }));
    }
    export function setContext(key: string, context: { [key: string]: any } | null) {
        // setContext not available on the Android SDK yet.
        setExtra(key, context?JSON.stringify(context) : null);
    }
}
