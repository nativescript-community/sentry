import { Transaction } from '@sentry/tracing';
import { EventProcessor, MeasurementUnit, Measurements } from '@sentry/types';
export interface NativeFramesResponse {
    totalFrames: number;
    slowFrames: number;
    frozenFrames: number;
}
export interface FramesMeasurements extends Measurements {
    'frames_total': {
        value: number;
        unit: MeasurementUnit;
    };
    'frames_slow': {
        value: number;
        unit: MeasurementUnit;
    };
    'frames_frozen': {
        value: number;
        unit: MeasurementUnit;
    };
}
/**
 * Instrumentation to add native slow/frozen frames measurements onto transactions.
 */
export declare class NativeFramesInstrumentation {
    /** The native frames at the transaction finish time, keyed by traceId. */
    private _finishFrames;
    /** The listeners for each native frames response, keyed by traceId */
    private _framesListeners;
    /** The native frames at the finish time of the most recent span. */
    private _lastSpanFinishFrames?;
    constructor(addGlobalEventProcessor: (e: EventProcessor) => void, doesExist: () => boolean);
    /**
   * To be called when a transaction is started.
   * Logs the native frames at this start point and instruments child span finishes.
   */
    onTransactionStart(transaction: Transaction): void;
    /**
   * To be called when a transaction is finished
   */
    onTransactionFinish(transaction: Transaction): void;
    /**
   * Called on a span finish to fetch native frames to support transactions with trimEnd.
   * Only to be called when a span does not have an end timestamp.
   */
    private _onSpanFinish;
    /**
   * Returns the computed frames measurements and awaits for them if they are not ready yet.
   */
    private _getFramesMeasurements;
    /**
   * Returns the computed frames measurements given ready data
   */
    private _prepareMeasurements;
    /**
   * Fetch finish frames for a transaction at the current time. Calls any awaiting listeners.
   */
    private _fetchFramesForTransaction;
    /**
   * On a finish frames failure, we cancel the await.
   */
    private _cancelFinishFrames;
    /**
   * Adds frames measurements to an event. Called from a valid event processor.
   * Awaits for finish frames if needed.
   */
    private _processEvent;
}
