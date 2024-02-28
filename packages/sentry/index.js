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
    CLogTypes[CLogTypes["log"] = 0] = "log";
    CLogTypes[CLogTypes["info"] = 1] = "info";
    CLogTypes[CLogTypes["warning"] = 2] = "warning";
    CLogTypes[CLogTypes["error"] = 3] = "error";
})(CLogTypes || (CLogTypes = {}));
export const CLog = (type, ...args) => {
    Trace.write(args.map((a) => (a && typeof a === 'object' ? JSON.stringify(a) : a)).join(' '), SentryTraceCategory, type);
};
//# sourceMappingURL=index.js.map