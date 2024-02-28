import { getCurrentHub } from '@sentry/browser';
import { Hub, Scope, getIntegrationsToSetup, initAndBind, makeMain, setExtra } from '@sentry/core';
import { logger, stackParserFromStackParserOptions } from '@sentry/utils';
import { NativescriptClient } from './client';
import { getDefaultIntegrations } from './integrations/default';
import { DEFAULT_BUFFER_SIZE, makeNativescriptTransport } from './transports/native';
import { makeUtf8TextEncoder } from './transports/TextEncoder';
import { safeFactory, safeTracesSampler } from './utils/safe';
import { NATIVE } from './wrapper';
import { parseErrorStack } from './integrations/debugsymbolicator';
import { getDefaultEnvironment } from './utils/environment';
// const STACKTRACE_LIMIT = 50;
// function stripSentryFramesAndReverse(stack) {
//     if (!stack.length) {
//         return [];
//     }
//     let localStack = stack;
//     const firstFrameFunction = localStack[0].function || '';
//     const lastFrameFunction = localStack[localStack.length - 1].function || '';
//     // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
//     if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
//         localStack = localStack.slice(1);
//     }
//     // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
//     if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
//         localStack = localStack.slice(0, -1);
//     }
//     // The frame where the crash happened, should be the last entry in the array
//     return localStack
//         .slice(0, STACKTRACE_LIMIT)
//         .map(frame => ({
//             ...frame,
//             filename: frame.filename || localStack[0].filename,
//             function: frame.function || undefined,
//         }));
// }
const defaultStackParser = (stack, skipFirst = 0) => {
    let frames = parseErrorStack({ stack });
    if (skipFirst) {
        frames = frames.slice(skipFirst);
    }
    return frames;
};
const IGNORED_DEFAULT_INTEGRATIONS = [
    'GlobalHandlers',
    // 'Breadcrumbs', // We add it later, just not patching fetch
    // 'CaptureConsole', // We add it later, just not patching fetch
    'TryCatch' // We don't need this
];
const DEFAULT_OPTIONS = {
    enableNative: true,
    enableNativeCrashHandling: true,
    enableNativeNagger: true,
    autoInitializeNativeSdk: true,
    enableAutoPerformanceTracking: true,
    enableOutOfMemoryTracking: true,
    patchGlobalPromise: true,
    transportOptions: {
        textEncoder: makeUtf8TextEncoder(),
    },
    sendClientReports: true,
    maxQueueSize: DEFAULT_BUFFER_SIZE,
    attachStacktrace: true
};
/**
 * Inits the SDK
 */
export function init(passedOptions) {
    var _a, _b, _c, _d;
    const NativescriptHub = new Hub(undefined, new Scope());
    // const NativescriptHub = new Hub(undefined, new NativescriptScope());
    makeMain(NativescriptHub);
    const maxQueueSize = (_c = (_a = passedOptions.maxQueueSize) !== null && _a !== void 0 ? _a : (_b = passedOptions.transportOptions) === null || _b === void 0 ? void 0 : _b.bufferSize) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.maxQueueSize;
    const options = Object.assign(Object.assign(Object.assign({}, DEFAULT_OPTIONS), passedOptions), { 
        // If custom transport factory fails the SDK won't initialize
        transport: passedOptions.transport || makeNativescriptTransport, transportOptions: Object.assign(Object.assign(Object.assign({}, DEFAULT_OPTIONS.transportOptions), ((_d = passedOptions.transportOptions) !== null && _d !== void 0 ? _d : {})), { bufferSize: maxQueueSize }), maxQueueSize, integrations: [], 
        // integrations: getIntegrationsToSetup(passedOptions),
        stackParser: stackParserFromStackParserOptions(passedOptions.stackParser || defaultStackParser), beforeBreadcrumb: safeFactory(passedOptions.beforeBreadcrumb, { loggerMessage: 'The beforeBreadcrumb threw an error' }), initialScope: safeFactory(passedOptions.initialScope, { loggerMessage: 'The initialScope threw an error' }) });
    if ('tracesSampler' in options) {
        options.tracesSampler = safeTracesSampler(options.tracesSampler);
    }
    if (!('environment' in options)) {
        options.environment = getDefaultEnvironment();
    }
    // As long as tracing is opt in with either one of these options, then this is how we determine tracing is enabled.
    const tracingEnabled = typeof options.tracesSampler !== 'undefined' ||
        typeof options.tracesSampleRate !== 'undefined';
    const DEFAULT_INTEGRATIONS = getDefaultIntegrations(options);
    const defaultIntegrations = passedOptions.defaultIntegrations === undefined
        ? DEFAULT_INTEGRATIONS
        : passedOptions.defaultIntegrations;
    // if (passedOptions.defaultIntegrations === undefined) {
    //     rewriteFrameIntegration = new RewriteFrames({
    //         iteratee: (frame: StackFrame) => {
    //             if (frame.platform === 'javascript' && frame.filename) {
    //                 let filename = frame.filename
    //                     .replace(/^file\:\/\//, '')
    //                     .replace(/^address at /, '')
    //                     .replace(/^.*\/[^\.]+(\.app|CodePush|.*(?=\/))/, '');
    //                 if (frame.filename.indexOf('[native code]') === -1) {
    //                     const appPrefix = options.appPrefix ?? '~/';
    //                     if (appPrefix.endsWith('//') && !appPrefix.endsWith('///')) {
    //                         filename = filename.indexOf('/') === 0 ? `${appPrefix}${filename}` : `${appPrefix}/${filename}`;
    //                     } else {
    //                         filename = filename.indexOf('/') === 0 ? `${appPrefix}${filename.slice(1)}` : `${appPrefix}${filename}`;
    //                     }
    //                 }
    //                 frame.filename = filename;
    //                 if (passedOptions.colnoOffset) {
    //                     frame.colno += passedOptions.colnoOffset;
    //                 }
    //                 // We always want to have a tripple slash
    //             }
    //             return frame;
    //         }
    //     }) as any;
    //     defaultIntegrations.push(...[
    //         new NativescriptErrorHandlers(options),
    //         new Release(),
    //         ...sentryDefaultIntegrations.filter((i) => !IGNORED_DEFAULT_INTEGRATIONS.includes(i.name)),
    //         new Integrations.Breadcrumbs({
    //             console: false,
    //             xhr: false,
    //             dom: false,
    //             fetch: false,
    //             ...(options.breadcrumbs || {})
    //         }),
    //         rewriteFrameIntegration as any,
    //         new EventOrigin(),
    //         new SdkInfo()
    //     ]);
    //     if (!!options.enableNative) {
    //         defaultIntegrations.push(new DeviceContext());
    //     }
    //     if (tracingEnabled) {
    //         if (options.enableAutoPerformanceTracking) {
    //             defaultIntegrations.push(new NativescriptTracing());
    //         }
    //     }
    //     if (options.attachScreenshot) {
    //         defaultIntegrations.push(new Screenshot());
    //     }
    // }
    options.integrations = getIntegrationsToSetup({
        integrations: safeFactory(passedOptions.integrations, { loggerMessage: 'The integrations threw an error' }),
        defaultIntegrations,
    });
    initAndBind(NativescriptClient, options);
}
/**
 * Sets the release on the event.
 */
export function setRelease(release) {
    setExtra('__sentry_release', release);
}
/**
 * Sets the dist on the event.
 */
export function setDist(dist) {
    setExtra('__sentry_dist', dist);
}
/**
 * If native client is available it will trigger a native crash.
 * Use this only for testing purposes.
 */
export function nativeCrash() {
    const client = getCurrentHub().getClient();
    if (client) {
        client.nativeCrash();
    }
}
/**
 * Flushes all pending events in the queue to disk.
 * Use this before applying any realtime updates such as code-push or expo updates.
 * Not yet working on Android
 */
export async function flush(timeout = 0) {
    try {
        const client = getCurrentHub().getClient();
        if (client) {
            const result = await client.flush(timeout);
            return result;
        }
        // eslint-disable-next-line no-empty
    }
    catch (_) { }
    console.error('Failed to flush the event queue.');
    return false;
}
/**
 * Closes the SDK, stops sending events.
 */
export async function close() {
    try {
        const client = getCurrentHub().getClient();
        if (client) {
            await client.close();
        }
    }
    catch (e) {
        console.error('Failed to close the SDK');
    }
}
/**
 * Captures user feedback and sends it to Sentry.
 */
export function captureUserFeedback(feedback) {
    var _a;
    (_a = getCurrentHub().getClient()) === null || _a === void 0 ? void 0 : _a.captureUserFeedback(feedback);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
export function withScope(callback) {
    const safeCallback = (scope) => {
        try {
            NATIVE.withScope(nscope => {
                callback(scope);
            });
        }
        catch (e) {
            logger.error('Error while running withScope callback', e);
        }
    };
    return getCurrentHub().withScope(safeCallback);
}
/**
   * Callback to set context information onto the scope.
   * @param callback Callback function that receives Scope.
   */
export function configureScope(callback) {
    const safeCallback = (scope) => {
        try {
            callback(scope);
        }
        catch (e) {
            logger.error('Error while running configureScope callback', e);
        }
    };
    getCurrentHub().configureScope(safeCallback);
}
//# sourceMappingURL=sdk.js.map