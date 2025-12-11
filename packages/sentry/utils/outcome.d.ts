import type { Outcome } from '@sentry/core';
/**
 * Merges buffer with new outcomes.
 */
export declare function mergeOutcomes(...merge: Outcome[][]): Outcome[];
