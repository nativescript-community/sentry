import type { InternalGlobal } from '@sentry/core';
import { GLOBAL_OBJ } from '@sentry/core';

/** Internal Global object interface with common and Sentry specific properties */
export interface NativeScriptInternalGlobal extends InternalGlobal {
    __BUNDLE_START_TIME__?: number;
    nativePerformanceNow?: () => number;
}

/** Get's the global object for the current JavaScript runtime */
export const NS_GLOBAL_OBJ = GLOBAL_OBJ as NativeScriptInternalGlobal;
