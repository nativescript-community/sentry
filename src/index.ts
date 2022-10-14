export {
    Breadcrumb,
    Request,
    SdkInfo,
    Event,
    Exception,
    StackFrame,
    Stacktrace,
    Thread,
    User,
} from '@sentry/types';

export {
    addGlobalEventProcessor,
    addBreadcrumb,
    captureException,
    captureEvent,
    captureMessage,
    configureScope,
    getHubFromCarrier,
    getCurrentHub,
    Hub,
    Scope,
    setContext,
    setExtra,
    setExtras,
    setTag,
    setTags,
    setUser,
    startTransaction,
    withScope,
} from '@sentry/core';

// We need to import it so we patch the hub with global functions
// aka. this has side effects
import '@sentry/tracing';

// Add the React Native SDK's own tracing extensions, this needs to happen AFTER @sentry/tracing's
import { _addTracingExtensions } from './measurements';
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
export { NativescriptOptions } from './options';
export { NativescriptClient } from './client';

export {
    init,
    setDist,
    setRelease,
    nativeCrash,
    flush,
    close,
} from './sdk';
// export { TouchEventBoundary, withTouchEventBoundary } from './touchevents';

// export {
//     NativescriptTracing,
//     ReactNavigationV4Instrumentation,
//     // eslint-disable-next-line deprecation/deprecation
//     ReactNavigationV5Instrumentation,
//     ReactNavigationInstrumentation,
//     NativescriptNavigationInstrumentation,
//     RoutingInstrumentation,
//     ReactNavigationTransactionContext,
// } from './tracing';

export { Integrations, SDK_NAME, SDK_VERSION };
