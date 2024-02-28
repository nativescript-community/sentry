import { IdleTransaction, Transaction } from '@sentry/tracing';
import { MeasurementUnit, Measurements } from '@sentry/types';
export interface StallMeasurements extends Measurements {
    'stall_count': {
        value: number;
        unit: MeasurementUnit;
    };
    'stall_total_time': {
        value: number;
        unit: MeasurementUnit;
    };
    'stall_longest_time': {
        value: number;
        unit: MeasurementUnit;
    };
}
export interface StallTrackingOptions {
    /**
   * How long in milliseconds an event loop iteration can be delayed for before being considered a "stall."
   * @default 100
   */
    minimumStallThreshold: number;
}
/**
 * Stall measurement tracker inspired by the `JSEventLoopWatchdog` used internally in React Native:
 * https://github.com/facebook/react-native/blob/006f5afe120c290a37cf6ff896748fbc062bf7ed/Libraries/Interaction/JSEventLoopWatchdog.js
 *
 * However, we modified the interval implementation to instead have a fixed loop timeout interval of `LOOP_TIMEOUT_INTERVAL_MS`.
 * We then would consider that iteration a stall when the total time for that interval to run is greater than `LOOP_TIMEOUT_INTERVAL_MS + minimumStallThreshold`
 */
export declare class StallTrackingInstrumentation {
    isTracking: boolean;
    private _minimumStallThreshold;
    /** Total amount of time of all stalls that occurred during the current tracking session */
    private _totalStallTime;
    /** Total number of stalls that occurred during the current tracking session */
    private _stallCount;
    /** The last timestamp the iteration ran in milliseconds */
    private _lastIntervalMs;
    private _timeout;
    private _statsByTransaction;
    constructor(options?: StallTrackingOptions);
    /**
   * @inheritDoc
   * Not used for this integration. Instead call `registerTransactionStart` to start tracking.
   */
    setupOnce(): void;
    /**
   * Register a transaction as started. Starts stall tracking if not already running.
   * @returns A finish method that returns the stall measurements.
   */
    onTransactionStart(transaction: Transaction): void;
    /**
   * Logs a transaction as finished.
   * Stops stall tracking if no more transactions are running.
   * @returns The stall measurements
   */
    onTransactionFinish(transaction: Transaction | IdleTransaction, passedEndTimestamp?: number): void;
    /**
   * Logs the finish time of the span for use in `trimEnd: true` transactions.
   */
    private _markSpanFinish;
    /**
   * Get the current stats for a transaction at a given time.
   */
    private _getCurrentStats;
    /**
   * Start tracking stalls
   */
    private _startTracking;
    /**
   * Stops the stall tracking interval and calls reset().
   */
    private _stopTracking;
    /**
   * Will stop tracking if there are no more transactions.
   */
    private _shouldStopTracking;
    /**
   * Clears all the collected stats
   */
    private _reset;
    /**
   * Iteration of the stall tracking interval. Measures how long the timer strayed from its expected time of running, and how
   * long the stall is for.
   */
    private _iteration;
    /**
   * Deletes leaked transactions (Earliest transactions when we have more than MAX_RUNNING_TRANSACTIONS transactions.)
   */
    private _flushLeakedTransactions;
}
