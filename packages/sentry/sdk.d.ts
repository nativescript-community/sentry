import { Hub, Scope } from '@sentry/core';
import { UserFeedback } from '@sentry/types';
import { NativescriptOptions } from './options';
/**
 * Inits the SDK
 */
export declare function init(passedOptions: NativescriptOptions): void;
/**
 * Sets the release on the event.
 */
export declare function setRelease(release: string): void;
/**
 * Sets the dist on the event.
 */
export declare function setDist(dist: string): void;
/**
 * If native client is available it will trigger a native crash.
 * Use this only for testing purposes.
 */
export declare function nativeCrash(): void;
/**
 * Flushes all pending events in the queue to disk.
 * Use this before applying any realtime updates such as code-push or expo updates.
 * Not yet working on Android
 */
export declare function flush(timeout?: number): Promise<boolean>;
/**
 * Closes the SDK, stops sending events.
 */
export declare function close(): Promise<void>;
/**
 * Captures user feedback and sends it to Sentry.
 */
export declare function captureUserFeedback(feedback: UserFeedback): void;
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
export declare function withScope(callback: (scope: Scope) => void): ReturnType<Hub['withScope']>;
/**
   * Callback to set context information onto the scope.
   * @param callback Callback function that receives Scope.
   */
export declare function configureScope(callback: (scope: Scope) => void): ReturnType<Hub['configureScope']>;
