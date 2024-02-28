import { createArrayBuffer, pointsFromBuffer } from '@nativescript-community/arraybuffers';
import { Application, Trace, Utils } from '@nativescript/core';
import { SentryError } from '@sentry/utils';
import { parseErrorStack } from './integrations/debugsymbolicator';
import { isHardCrash } from './misc';
import { utf8ToBytes } from './vendor';
import { SDK_NAME } from './version';
import { CLog, CLogTypes } from '.';
import { rewriteFrameIntegration } from './integrations/default';
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.substr(1);
}
let encoder;
function strToTypedArray(str) {
    if (!encoder) {
        const charset = java.nio.charset.Charset.forName('UTF-8');
        encoder = charset.newEncoder();
    }
    return new Uint8Array(ArrayBuffer.from(encoder.encode(java.nio.CharBuffer.wrap(str))));
}
function concatTypedArrays(a, b) {
    if (!b || b.length === 0)
        return a;
    if (!a || a.length === 0)
        return b;
    const c = createArrayBuffer(a.length + b.length, true, false);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}
export var NATIVE;
(function (NATIVE) {
    let enableNative = true;
    const _DisabledNativeError = new SentryError('Native is disabled');
    let frameMetricsAggregator;
    function isNativeTransportAvailable() {
        return enableNative;
    }
    NATIVE.isNativeTransportAvailable = isNativeTransportAvailable;
    const mJsModuleIdPattern = new RegExp('(?:^|[/\\\\])(\\d+\\.js)$');
    function stackFrameToModuleId(frame) {
        if (!!frame.file) {
            const matcher = mJsModuleIdPattern.exec(frame.file);
            if (matcher) {
                return matcher[1] + ':';
            }
        }
        return '';
    }
    function convertToNativeJavascriptStacktrace(stack) {
        if (!stack) {
            return null;
        }
        const nStackTrace = new io.sentry.protocol.SentryStackTrace();
        const frames = new java.util.ArrayList();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];
            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';
            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = new io.sentry.protocol.SentryStackFrame();
            stackFrame.setFunction(methodName);
            stackFrame.setFilename(fileName);
            stackFrame.setLineno(new java.lang.Integer(lineNumber));
            stackFrame.setColno(new java.lang.Integer(column));
            stackFrame.setPlatform('javascript');
            stackFrame.setInApp(new java.lang.Boolean(frame.in_app || false));
            frames.add(stackFrame);
        }
        nStackTrace.setFrames(frames);
        return nStackTrace;
    }
    function addJavascriptExceptionInterface(nEvent, type, value, stack) {
        const exceptions = nEvent.getExceptions();
        const actualExceptions = new java.util.ArrayList();
        const nException = new io.sentry.protocol.SentryException();
        nException.setType(type);
        nException.setValue(value);
        nException.setThreadId(new java.lang.Long(java.lang.Thread.currentThread().getId()));
        nException.setStacktrace(convertToNativeJavascriptStacktrace(stack));
        actualExceptions.add(nException);
        if (exceptions) {
            actualExceptions.addAll(1, exceptions);
        }
        nEvent.setExceptions(actualExceptions);
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
    function _getBreadcrumbs(event) {
        const breadcrumbs = event.breadcrumbs;
        const hardCrashed = isHardCrash(event);
        // if (event.breadcrumbs && !hardCrashed) {
        //     breadcrumbs = undefined;
        // }
        breadcrumbs && breadcrumbs.forEach(b => {
            // fix for native SDK not supporting number
            b.timestamp = new Date(b.timestamp * 1000).toISOString();
        });
        return breadcrumbs && breadcrumbs.length ? breadcrumbs : undefined;
    }
    /**
   * Convert js severity level in event.level and event.breadcrumbs to more widely supported levels.
   * @param event
   * @returns Event with more widely supported Severity level strings
   */
    function _processLevels(event) {
        var _a;
        const processed = Object.assign(Object.assign({}, event), { level: event.level ? _processLevel(event.level) : undefined, breadcrumbs: (_a = event.breadcrumbs) === null || _a === void 0 ? void 0 : _a.map((breadcrumb) => (Object.assign(Object.assign({}, breadcrumb), { level: breadcrumb.level
                    ? _processLevel(breadcrumb.level)
                    : undefined }))) });
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
            // fix for native SDK
            event.timestamp = new Date(event.timestamp * 1000).toISOString();
            if ('message' in event) {
                // @ts-ignore Android still uses the old message object, without this the serialization of events will break.
                event.message = { message: event.message };
            }
            event.breadcrumbs = _getBreadcrumbs(event);
            return [itemHeader, event];
        }
        return item;
    }
    async function sendEnvelope(envelope) {
        if (!enableNative) {
            console.warn('Event was skipped as native SDK is not enabled.');
            return;
        }
        const envelopeBytes = prepareEnvelopeNative(envelope);
        // const envelopeBytesNative = prepareEnvelopeNative(envelope);
        await captureEnvelope(envelopeBytes);
        if (sentryOptions.flushSendEvent) {
            flush(0);
        }
    }
    NATIVE.sendEnvelope = sendEnvelope;
    function prepareEnvelope(envelope) {
        const [EOL] = utf8ToBytes('\n');
        const [envelopeHeader, envelopeItems] = envelope;
        const headerString = JSON.stringify(envelopeHeader);
        const envelopeBytes = utf8ToBytes(headerString);
        envelopeBytes.push(EOL);
        let hardCrashed = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);
            let bytesPayload = [];
            let bytesContentType;
            if (typeof itemPayload === 'string') {
                bytesPayload = utf8ToBytes(itemPayload);
            }
            else if (itemPayload instanceof Uint8Array) {
                bytesContentType = typeof itemHeader.content_type === 'string'
                    ? itemHeader.content_type
                    : 'application/octet-stream';
                bytesPayload = [...itemPayload];
            }
            else if (itemPayload instanceof ArrayBuffer) {
                bytesPayload = [...new Uint8Array(itemPayload)];
                bytesContentType = typeof itemHeader.content_type === 'string'
                    ? itemHeader.content_type
                    : 'application/octet-stream';
            }
            else {
                bytesContentType = 'application/json';
                bytesPayload = utf8ToBytes(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }
            // Content type is not inside BaseEnvelopeItemHeaders.
            itemHeader.content_type = bytesContentType;
            itemHeader.length = bytesPayload.length;
            const serializedItemHeader = JSON.stringify(itemHeader) + '\n';
            envelopeBytes.push(...utf8ToBytes(serializedItemHeader));
            // envelopeBytes.push(EOL);
            envelopeBytes.push(...bytesPayload);
            envelopeBytes.push(EOL);
        }
        return envelopeBytes;
    }
    NATIVE.prepareEnvelope = prepareEnvelope;
    function prepareEnvelopeNative(envelope) {
        const [envelopeHeader, envelopeItems] = envelope;
        const headerString = JSON.stringify(envelopeHeader);
        let envelopeBytes = strToTypedArray(headerString + '\n');
        let hardCrashed = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);
            let bytesPayload;
            if (typeof itemPayload === 'string') {
                bytesPayload = strToTypedArray(itemPayload);
            }
            else if (itemPayload instanceof Uint8Array) {
                bytesPayload = itemPayload;
            }
            else {
                bytesPayload = strToTypedArray(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }
            // Content type is not inside BaseEnvelopeItemHeaders.
            itemHeader.content_type = 'application/json';
            itemHeader.length = bytesPayload.length;
            const serializedItemHeaderBytes = strToTypedArray(JSON.stringify(itemHeader) + '\n');
            const rawItemBytes = createArrayBuffer(serializedItemHeaderBytes.length + bytesPayload.length + 1, true, false);
            rawItemBytes.set(serializedItemHeaderBytes, 0);
            rawItemBytes.set(bytesPayload, serializedItemHeaderBytes.length);
            rawItemBytes[serializedItemHeaderBytes.length + bytesPayload.length] = '\n'.charCodeAt(0);
            envelopeBytes = concatTypedArrays(envelopeBytes, rawItemBytes);
        }
        return envelopeBytes;
    }
    NATIVE.prepareEnvelopeNative = prepareEnvelopeNative;
    async function captureEnvelope(envelope, { store } = {}) {
        try {
            const outboxPath = new java.io.File(nSentryOptions.getOutboxPath(), java.util.UUID.randomUUID().toString());
            const out = new java.io.FileOutputStream(outboxPath);
            if (ArrayBuffer.isView(envelope)) {
                out.write(pointsFromBuffer(envelope, true, false));
            }
            else if (Array.isArray(envelope)) {
                out.write(envelope);
            }
            else {
                out.write(new java.lang.String(envelope).getBytes(java.nio.charset.Charset.forName('UTF-8')));
            }
            return true;
        }
        catch (err) {
            console.error('captureEnvelope error', err, err.stack);
            return false;
        }
    }
    NATIVE.captureEnvelope = captureEnvelope;
    function flush(timeout = 0) {
        if (Trace.isEnabled()) {
            CLog(CLogTypes.info, 'flush');
        }
        io.sentry.Sentry.flush(timeout);
    }
    NATIVE.flush = flush;
    let initialized = false;
    let sentryOptions;
    let nSentryOptions;
    let logger;
    let buildInfo;
    function addPackages(event, sdk) {
        const eventSdk = event.getSdk();
        if (eventSdk && sdk && eventSdk.getName() === SDK_NAME) {
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
    async function initNativeSdk(originalOptions = {}) {
        if (initialized) {
            return (true);
        }
        try {
            const options = Object.assign({ enableNative: true, autoInitializeNativeSdk: true }, originalOptions);
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
            io.sentry.android.core.SentryAndroid.init(Utils.android.getApplicationContext(), new io.sentry.Sentry.OptionsConfiguration({
                configure(config) {
                    var _a, _b;
                    // config.setLogger(new io.sentry.SystemOutLogger());
                    try {
                        const { dsn, debug, enableNativeCrashHandling, beforeSend, beforeBreadcrumb, headers } = options, otherOptions = __rest(options, ["dsn", "debug", "enableNativeCrashHandling", "beforeSend", "beforeBreadcrumb", "headers"]);
                        config.setDsn(dsn || '');
                        if (!!debug) {
                            io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
                            config.setDebug(debug);
                        }
                        Object.keys(otherOptions).forEach(k => {
                            const methodName = `set${capitalize(k)}`;
                            const value = otherOptions[k];
                            if (value && typeof config[methodName] === 'function') {
                                if (typeof value === 'number') {
                                    config[methodName](java.lang.Double.valueOf(value));
                                }
                                else {
                                    config[methodName](value);
                                }
                            }
                        });
                        // if (options.sendClientReports) {
                        //     config.setSendClientReports(options.sendClientReports);
                        // }
                        // if (options.maxBreadcrumbs) {
                        //     config.setMaxBreadcrumbs(options.maxBreadcrumbs);
                        // }
                        // if (options.maxCacheItems) {
                        //     config.setMaxCacheItems(options.maxCacheItems);
                        // }
                        // if (!!options.environment) {
                        //     config.setEnvironment(options.environment);
                        // } else {
                        //     config.setEnvironment('javascript');
                        // }
                        // if (!!options.debug) {
                        //     io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
                        //     config.setDebug(options.debug);
                        // }
                        // if (!!options.release) {
                        //     config.setRelease(options.release);
                        // }
                        // if (!!options.dist) {
                        //     config.setDist(options.dist);
                        // }
                        // if (options.enableAutoSessionTracking !== undefined) {
                        //     config.setEnableAutoSessionTracking(options.enableAutoSessionTracking);
                        // }
                        // if (options.sessionTrackingIntervalMillis !== undefined) {
                        //     config.setSessionTrackingIntervalMillis(options.sessionTrackingIntervalMillis);
                        // }
                        // if (options.shutdownTimeout !== undefined) {
                        //     config.setShutdownTimeoutMillis(options.shutdownTimeout);
                        // }
                        // if (options.enableNdkScopeSync !== undefined) {
                        //     config.setEnableScopeSync(options.enableNdkScopeSync);
                        // }
                        // if (options.attachStacktrace !== undefined) {
                        //     config.setAttachStacktrace(options.attachStacktrace);
                        // }
                        // if (options.attachThreads !== undefined) {
                        //     // JS use top level stacktraces and android attaches Threads which hides them so
                        //     // by default we hide.
                        //     config.setAttachThreads(options.attachThreads);
                        // }
                        // if (options.attachScreenshot !== undefined) {
                        //     config.setAttachScreenshot(options.attachScreenshot);
                        // }
                        // if (options.sendDefaultPii !== undefined) {
                        //     config.setSendDefaultPii(options.sendDefaultPii);
                        // }
                        // if (options.enableNdk !== undefined) {
                        //     config.setEnableNdk(options.enableNdk);
                        // }
                        // if (options.maxQueueSize !== undefined) {
                        //     config.setMaxQueueSize(options.maxQueueSize);
                        // }
                        // if (options.enableAutoPerformanceTracking === true) {
                        //     frameMetricsAggregator = new androidx.core.app.FrameMetricsAggregator();
                        //     const currentActivity = Application.android.foregroundActivity;
                        //     if (frameMetricsAggregator != null && currentActivity != null) {
                        //         try {
                        //             frameMetricsAggregator.add(currentActivity);
                        //         } catch (err) {
                        //             // throws ConcurrentModification when calling addOnFrameMetricsAvailableListener
                        //             // this is a best effort since we can't reproduce it
                        //         }
                        //     }
                        // } else {
                        //     disableNativeFramesTracking();
                        // }
                        if (options.enableFragmentLifecycleBreadcrumbs !== undefined || options.enableAutoFragmentLifecycleTracing !== undefined) {
                            config.addIntegration(new io.sentry.android.fragment.FragmentLifecycleIntegration(Application.android.getNativeApplication(), (_a = options.enableFragmentLifecycleBreadcrumbs) !== null && _a !== void 0 ? _a : true, // enabled by default
                            (_b = options.enableAutoFragmentLifecycleTracing) !== null && _b !== void 0 ? _b : false // disabled by default
                            ));
                        }
                        // config.setEnableNdk(true);
                        if (enableNativeCrashHandling === false) {
                            const integrations = config.getIntegrations();
                            const size = integrations.size();
                            for (let index = size - 1; index >= 0; index--) {
                                const inte = integrations.get(index);
                                if (inte instanceof io.sentry.UncaughtExceptionHandlerIntegration ||
                                    inte instanceof io.sentry.android.core.AnrIntegration ||
                                    inte instanceof io.sentry.android.core.NdkIntegration) {
                                    integrations.remove(index);
                                }
                            }
                        }
                        const currentActivityHolder = io.sentry.android.core.CurrentActivityHolder.getInstance();
                        const activity = Application.android.startActivity;
                        if (activity != null) {
                            currentActivityHolder.setActivity(activity);
                        }
                        config.setTransportFactory(new io.sentry.ITransportFactory({
                            create(sopt, requestDetails) {
                                const map = requestDetails.getHeaders();
                                map.put('X-Forwarded-Protocol', 'https');
                                if (headers) {
                                    Object.keys(headers).forEach(k => {
                                        map.put(k, headers[k]);
                                    });
                                }
                                return new io.sentry.transport.AsyncHttpTransport(sopt, new io.sentry.transport.RateLimiter(sopt), sopt.getTransportGate(), requestDetails);
                            }
                        }));
                        config.setBeforeSend(new io.sentry.SentryOptions.BeforeSendCallback({
                            execute(event, hint) {
                                var _a, _b, _c;
                                if (beforeSend) {
                                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                                    beforeSend(event, hint);
                                }
                                // we use this callback to actually try and get the JS stack when a native error is catched
                                try {
                                    const exceptions = event.getExceptions();
                                    const count = exceptions.size();
                                    for (let index = 0; index < count; index++) {
                                        const ex = exceptions.get(index);
                                        if (ex && ex.getType() === 'NativeScriptException') {
                                            let mechanism = (_a = event.getThrowableMechanism) === null || _a === void 0 ? void 0 : _a.call(event);
                                            if (!mechanism) {
                                                const privateMethod = io.sentry.SentryEvent.class.getDeclaredMethod('getThrowable', null);
                                                privateMethod.setAccessible(true);
                                                mechanism = privateMethod.invoke(event, null);
                                            }
                                            let throwable;
                                            if (mechanism instanceof io.sentry.exception.ExceptionMechanismException) {
                                                throwable = mechanism.getThrowable();
                                            }
                                            else if (mechanism instanceof com.tns.NativeScriptException) {
                                                throwable = mechanism;
                                            }
                                            if (throwable) {
                                                const jsStackTrace = (_c = (_b = (throwable)).getIncomingStackTrace) === null || _c === void 0 ? void 0 : _c.call(_b);
                                                if (jsStackTrace) {
                                                    const stack = parseErrorStack({ stack: 'at ' + jsStackTrace }).reverse();
                                                    stack.forEach((frame) => rewriteFrameIntegration._iteratee(frame));
                                                    addJavascriptExceptionInterface(event, 'Error', throwable.getMessage(), stack.reverse());
                                                }
                                            }
                                            break;
                                        }
                                    }
                                }
                                catch (e) {
                                    console.error('Sentry error while processing BeforeSendCallback callback', e, e.stack);
                                }
                                setEventOriginTag(event);
                                addPackages(event, config.getSdkVersion());
                                return event;
                            },
                        }));
                        config.setBeforeBreadcrumb(new io.sentry.SentryOptions.BeforeBreadcrumbCallback({
                            execute(breadcrumb, hint) {
                                if (beforeBreadcrumb) {
                                    return beforeBreadcrumb(breadcrumb, hint);
                                }
                                else {
                                    return breadcrumb;
                                }
                            }
                        }));
                        nSentryOptions = config;
                        sentryOptions = options;
                    }
                    catch (err) {
                        console.error('Error starting Sentry', err, err.stack);
                        throw err;
                    }
                },
            }));
            logger = new io.sentry.android.core.AndroidLogger('NativescriptSentry');
            buildInfo = new io.sentry.android.core.BuildInfoProvider(logger);
            initialized = true;
        }
        catch (e) {
            console.error('Catching on startWithOptions, calling callback', e);
            throw (e);
        }
        return (true);
    }
    NATIVE.initNativeSdk = initNativeSdk;
    function disableNativeFramesTracking() {
        if (frameMetricsAggregator) {
            frameMetricsAggregator.stop();
            frameMetricsAggregator = null;
        }
    }
    NATIVE.disableNativeFramesTracking = disableNativeFramesTracking;
    function setEventOriginTag(event) {
        const sdk = event.getSdk();
        if (sdk) {
            switch (sdk.getName()) {
                // If the event is from capacitor js, it gets set there and we do not handle it
                // here.
                case 'sentry.native':
                    setEventEnvironmentTag(event, 'native');
                    break;
                case 'sentry.java.android':
                    setEventEnvironmentTag(event, 'java');
                    break;
                default:
                    setEventEnvironmentTag(event, 'nativescript');
                    break;
            }
        }
    }
    function setEventEnvironmentTag(event, environment) {
        event.setTag('event.origin', 'android');
        event.setTag('event.environment', environment);
    }
    function enableNativeFramesTracking() {
        if (!frameMetricsAggregator) {
            frameMetricsAggregator = new androidx.core.app.FrameMetricsAggregator();
            const currentActivity = Application.android.foregroundActivity;
            if (frameMetricsAggregator != null && currentActivity != null) {
                try {
                    frameMetricsAggregator.add(currentActivity);
                }
                catch (err) {
                    // throws ConcurrentModification when calling addOnFrameMetricsAvailableListener
                    // this is a best effort since we can't reproduce it
                }
            }
        }
    }
    NATIVE.enableNativeFramesTracking = enableNativeFramesTracking;
    function fetchNativeSdkInfo() {
        return null;
    }
    NATIVE.fetchNativeSdkInfo = fetchNativeSdkInfo;
    let nativeRelease;
    function fetchNativeRelease() {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        if (!nativeRelease) {
            const context = Utils.ad.getApplicationContext();
            const packageInfo = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
            nativeRelease = {
                'id': packageInfo.packageName,
                'version': packageInfo.versionName,
                'build': packageInfo.versionCode + ''
            };
        }
        return nativeRelease;
    }
    NATIVE.fetchNativeRelease = fetchNativeRelease;
    function closeNativeSdk() {
        io.sentry.Sentry.close();
    }
    NATIVE.closeNativeSdk = closeNativeSdk;
    function nativeCrash() {
        throw new java.lang.RuntimeException('TEST - Sentry Client Crash');
    }
    NATIVE.nativeCrash = nativeCrash;
    async function fetchNativeDeviceContexts() {
        return {};
    }
    NATIVE.fetchNativeDeviceContexts = fetchNativeDeviceContexts;
    function captureScreenshot(fileName = 'screenshot') {
        const activity = Application.android.foregroundActivity || Application.android.startActivity;
        const raw = io.sentry.android.core.internal.util.ScreenshotUtils.takeScreenshot(activity, logger, buildInfo);
        if (raw !== null) {
            return [{
                    'contentType': 'image/png',
                    data: new Uint8Array(ArrayBuffer.from(java.nio.ByteBuffer.wrap(raw))),
                    filename: fileName + '.png'
                }];
        }
        return null;
    }
    NATIVE.captureScreenshot = captureScreenshot;
    function isFrameMetricsAggregatorAvailable() {
        return frameMetricsAggregator != null;
    }
    // 700ms to constitute frozen frames.
    const FROZEN_FRAME_THRESHOLD = 700;
    // 16ms (slower than 60fps) to constitute slow frames.
    const SLOW_FRAME_THRESHOLD = 16;
    async function fetchNativeFrames() {
        if (!isFrameMetricsAggregatorAvailable()) {
            return null;
        }
        else {
            try {
                let totalFrames = 0;
                let slowFrames = 0;
                let frozenFrames = 0;
                const framesRates = frameMetricsAggregator.getMetrics();
                if (framesRates != null) {
                    const totalIndexArray = framesRates[androidx.core.app.FrameMetricsAggregator.TOTAL_INDEX];
                    if (totalIndexArray != null) {
                        for (let i = 0; i < totalIndexArray.size(); i++) {
                            const frameTime = totalIndexArray.keyAt(i);
                            const numFrames = totalIndexArray.valueAt(i);
                            totalFrames += numFrames;
                            // hard coded values, its also in the official android docs and frame metrics
                            // API
                            if (frameTime > FROZEN_FRAME_THRESHOLD) {
                                // frozen frames, threshold is 700ms
                                frozenFrames += numFrames;
                            }
                            else if (frameTime > SLOW_FRAME_THRESHOLD) {
                                // slow frames, above 16ms, 60 frames/second
                                slowFrames += numFrames;
                            }
                        }
                    }
                }
                if (totalFrames === 0 && slowFrames === 0 && frozenFrames === 0) {
                    return null;
                }
                return {
                    totalFrames,
                    slowFrames,
                    frozenFrames
                };
            }
            catch (err) {
                console.warn('Error fetching native frames.', err);
            }
            return null;
        }
    }
    NATIVE.fetchNativeFrames = fetchNativeFrames;
    let didFetchAppStart = false;
    async function fetchNativeAppStart() {
        const appStartInstance = io.sentry.android.core.AppStartState.getInstance();
        const appStartTime = appStartInstance.getAppStartTime();
        const isColdStart = appStartInstance.isColdStart();
        const wasFetched = didFetchAppStart;
        // This is always set to true, as we would only allow an app start fetch to only
        // happen once in the case of a JS bundle reload, we do not want it to be
        // instrumented again.
        didFetchAppStart = true;
        if (appStartTime == null) {
            console.warn("App start won't be sent due to missing appStartTime.");
            return null;
        }
        else if (isColdStart == null) {
            console.warn("App start won't be sent due to missing isColdStart.");
            return null;
        }
        else {
            return {
                appStartTime: appStartTime.nanoTimestamp() / 1000000,
                isColdStart,
                didFetchAppStart: wasFetched
            };
        }
    }
    NATIVE.fetchNativeAppStart = fetchNativeAppStart;
})(NATIVE || (NATIVE = {}));
//# sourceMappingURL=wrapper.android.js.map