export { Breadcrumb, Request, SdkInfo, Event, Exception, StackFrame, Stacktrace, Thread, User, } from '@sentry/types';
export { addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, withScope, configureScope, setTag, setTags, setUser, startTransaction } from '@sentry/core';
import * as Integrations from './integrations';
import { SDK_NAME, SDK_VERSION } from './version';
export { NativescriptOptions } from './options';
export { NativescriptClient } from './client';
export { init, setDist, setRelease, nativeCrash, flush, close, } from './sdk';
export { NativescriptTracing, } from './tracing';
export { Integrations, SDK_NAME, SDK_VERSION };
export declare const SentryTraceCategory = "Sentry";
export declare enum CLogTypes {
    log = 0,
    info = 1,
    warning = 2,
    error = 3
}
export declare const CLog: (type: CLogTypes, ...args: any[]) => void;
