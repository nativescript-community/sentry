export type {
    Breadcrumb,
    SdkInfo,
    Event,
    Exception,
    SendFeedbackParams,
    SeverityLevel,
    Span,
    StackFrame,
    Stacktrace,
    Thread,
    User,
    UserFeedback,
    ErrorEvent,
    TransactionEvent,
    Metric
} from '@sentry/core';

export {
    addBreadcrumb,
    addIntegration,
    captureException,
    captureEvent,
    captureFeedback,
    captureMessage,
    Scope,
    setContext,
    setExtra,
    setExtras,
    setTag,
    setTags,
    setUser,
    startInactiveSpan,
    startSpan,
    startSpanManual,
    getActiveSpan,
    getRootSpan,
    withActiveSpan,
    suppressTracing,
    spanToJSON,
    spanIsSampled,
    setMeasurement,
    getCurrentScope,
    getGlobalScope,
    getIsolationScope,
    getClient,
    setCurrentClient,
    addEventProcessor,
    lastEventId
} from '@sentry/core';

export { logger, consoleLoggingIntegration, featureFlagsIntegration, type FeatureFlagsIntegration, metrics } from '@sentry/browser';

export * from './integrations/exports';
import { SDK_NAME, SDK_VERSION } from './version';
import { Trace } from '@nativescript/core';
export { NativescriptOptions } from './options';
export { NativescriptClient } from './client';

export { init, setDist, setRelease, nativeCrash, flush, close, captureUserFeedback, withScope, crashedLastRun } from './sdk';
// export { TouchEventBoundary, withTouchEventBoundary } from './touchevents';

export { nativescriptTracingIntegration, getCurrentNativescriptTracingIntegration, getNativescriptTracingIntegration, startIdleNavigationSpan, startIdleSpan } from './tracing';

export { SDK_NAME, SDK_VERSION };

export const SentryTraceCategory = 'Sentry';

export enum CLogTypes {
    log = Trace.messageType.log,
    info = Trace.messageType.info,
    warning = Trace.messageType.warn,
    error = Trace.messageType.error
}

export const CLog = (type: CLogTypes, ...args) => {
    Trace.write(args.map((a) => (a && typeof a === 'object' ? JSON.stringify(a) : a)).join(' '), SentryTraceCategory, type);
};
