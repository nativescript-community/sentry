export { addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, withScope, configureScope, setTag, setTags, setUser, startTransaction } from '@sentry/core';
import { _addTracingExtensions } from './tracing/addTracingExtensions';
_addTracingExtensions();
// export {
//     Integrations as BrowserIntegrations,
//     ErrorBoundary,
//     withErrorBoundary,
//     createReduxEnhancer,
//     Profiler,
//     useProfiler,
//     withProfiler,
// } from '@sentry/react';
import * as Integrations from './integrations';
import { SDK_NAME, SDK_VERSION } from './version';
import { Trace } from '@nativescript/core';
export { NativescriptClient } from './client';
export { init, setDist, setRelease, nativeCrash, flush, close, } from './sdk';
// export { TouchEventBoundary, withTouchEventBoundary } from './touchevents';
export { NativescriptTracing,
//     ReactNavigationV4Instrumentation,
//     // eslint-disable-next-line deprecation/deprecation
//     ReactNavigationV5Instrumentation,
//     ReactNavigationInstrumentation,
//     NativescriptNavigationInstrumentation,
//     RoutingInstrumentation,
//     ReactNavigationTransactionContext,
 } from './tracing';
export { Integrations, SDK_NAME, SDK_VERSION };
export const SentryTraceCategory = 'Sentry';
export var CLogTypes;
(function (CLogTypes) {
    CLogTypes[CLogTypes["log"] = Trace.messageType.log] = "log";
    CLogTypes[CLogTypes["info"] = Trace.messageType.info] = "info";
    CLogTypes[CLogTypes["warning"] = Trace.messageType.warn] = "warning";
    CLogTypes[CLogTypes["error"] = Trace.messageType.error] = "error";
})(CLogTypes || (CLogTypes = {}));
export const CLog = (type, ...args) => {
    Trace.write(args.map((a) => (a && typeof a === 'object' ? JSON.stringify(a) : a)).join(' '), SentryTraceCategory, type);
};
//# sourceMappingURL=index.js.map