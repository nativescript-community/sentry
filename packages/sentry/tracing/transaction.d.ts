import { type BeforeFinishCallback, type IdleTransaction } from '@sentry/core';
/**
 * Idle Transaction callback to only sample transactions with child spans.
 * To avoid side effects of other callbacks this should be hooked as the last callback.
 */
export declare const onlySampleIfChildSpans: BeforeFinishCallback;
/**
 * Hooks on AppState change to cancel the transaction if the app goes background.
 */
export declare const cancelInBackground: (transaction: IdleTransaction) => void;
