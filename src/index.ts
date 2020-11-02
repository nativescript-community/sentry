import { logger } from '@sentry/utils';
logger.disable(); // this crashes for {N} for now
export { Breadcrumb, Request, SdkInfo, Event, Exception, Response, Severity, StackFrame, Stacktrace, Status, Thread, User } from '@sentry/types';

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
    withScope
} from '@sentry/core';

export { NativescriptBackend, NativescriptOptions } from './backend';
export { NativescriptClient as NativescriptClient } from './client';
export { init, setDist, setRelease, nativeCrash } from './sdk';
export { SDK_NAME, SDK_VERSION } from './version';

import * as Integrations from './integrations';
export { Integrations };
