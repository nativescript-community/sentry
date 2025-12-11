export type { Breadcrumb, SdkInfo, Event, Exception, StackFrame, Stacktrace, Thread, User } from '@sentry/core';

export { addBreadcrumb, captureException, captureEvent, captureMessage, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser } from '@sentry/core';

import * as Integrations from './integrations';
import { SDK_NAME, SDK_VERSION } from './version';
import { Trace } from '@nativescript/core';
export { NativescriptOptions } from './options';
export { NativescriptClient } from './client';

export { init, setDist, setRelease, nativeCrash, flush, close, captureUserFeedback, withScope, crashedLastRun } from './sdk';
// export { TouchEventBoundary, withTouchEventBoundary } from './touchevents';

export { nativescriptTracingIntegration, getCurrentNativescriptTracingIntegration, getNativescriptTracingIntegration, startIdleNavigationSpan, startIdleSpan } from './tracing';

export { Integrations, SDK_NAME, SDK_VERSION };

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
