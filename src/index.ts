// We need to import it so we patch the hub with global functions
// aka. this has side effects
import '@sentry/tracing';
import * as Integrations from './integrations';
import { NSSentry } from './nssentry';
// logger.disable(); // this crashes for {N} for now
export {
    addBreadcrumb, addGlobalEventProcessor,
    captureEvent, captureException,
    captureMessage,
    configureScope,
    getCurrentHub, getHubFromCarrier,
    Hub,
    Scope,
    setContext,
    setExtra,
    setExtras,
    setTag,
    setTags,
    setUser,
    withScope
} from '@sentry/core';
export { Breadcrumb, Event, Exception, Request, Response, SdkInfo, Severity, StackFrame, Stacktrace, Status, Thread, User } from '@sentry/types';
export { NativescriptBackend, NativescriptOptions } from './backend';
export { NativescriptClient as NativescriptClient } from './client';
export { init, nativeCrash, setDist, setRelease } from './sdk';
export {
    NSTracing
} from './tracing';
export { SDK_NAME, SDK_VERSION } from './version';
export { Integrations };
export {
    captureUserFeedback
};

const captureUserFeedback = NSSentry.captureUserFeedback;


