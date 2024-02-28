import type { Hub, Transaction } from '@sentry/core';
import type { CustomSamplingContext, TransactionContext } from '@sentry/types';
/**
 * Adds React Native's extensions. Needs to be called before any transactions are created.
 */
export declare function _addTracingExtensions(): void;
export type StartTransactionFunction = (this: Hub, transactionContext: TransactionContext, customSamplingContext?: CustomSamplingContext) => Transaction;
