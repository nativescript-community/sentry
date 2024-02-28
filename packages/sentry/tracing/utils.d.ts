import { IdleTransaction, Span, Transaction } from '@sentry/tracing';
import { TransactionContext, TransactionSource } from '@sentry/types';
export declare const defaultTransactionSource: TransactionSource;
export declare const customTransactionSource: TransactionSource;
export declare const getBlankTransactionContext: (name: string) => TransactionContext;
/**
 * A margin of error of 50ms is allowed for the async native bridge call.
 * Anything larger would reduce the accuracy of our frames measurements.
 */
export declare const MARGIN_OF_ERROR_SECONDS = 0.05;
/**
 *
 */
export declare function adjustTransactionDuration(maxDuration: number, // in seconds
transaction: IdleTransaction, endTimestamp: number): void;
/**
 * Returns the timestamp where the JS global scope was initialized.
 */
export declare function getTimeOriginMilliseconds(): number;
/**
 * Calls the callback every time a child span of the transaction is finished.
 */
export declare function instrumentChildSpanFinish(transaction: Transaction, callback: (span: Span, endTimestamp?: number) => void): void;
/**
 * Determines if the timestamp is now or within the specified margin of error from now.
 */
export declare function isNearToNow(timestamp: number): boolean;
