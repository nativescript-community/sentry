import { Outcome } from '@sentry/types';
/**
 * Merges buffer with new outcomes.
 */
export declare function mergeOutcomes(...merge: Outcome[][]): Outcome[];
