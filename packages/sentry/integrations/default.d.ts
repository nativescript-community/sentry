import type { Integration, StackFrame } from '@sentry/types';
import type { NativescriptClientOptions, NativescriptOptions } from '../options';
export declare let rewriteFrameIntegration: {
    _iteratee: (frame: StackFrame) => StackFrame;
};
/**
 * Returns the default ReactNative integrations based on the current environment.
 *
 * Native integrations are only returned when native is enabled.
 *
 * Web integrations are only returned when running on web.
 */
export declare function getDefaultIntegrations(options: NativescriptClientOptions & NativescriptOptions): Integration[];
