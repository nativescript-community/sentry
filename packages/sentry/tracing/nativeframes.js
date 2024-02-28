import { logger, timestampInSeconds } from '@sentry/utils';
import { NATIVE } from '../wrapper';
import { instrumentChildSpanFinish } from './utils';
/**
 * A margin of error of 50ms is allowed for the async native bridge call.
 * Anything larger would reduce the accuracy of our frames measurements.
 */
const MARGIN_OF_ERROR_SECONDS = 0.05;
/**
 * Instrumentation to add native slow/frozen frames measurements onto transactions.
 */
export class NativeFramesInstrumentation {
    constructor(addGlobalEventProcessor, doesExist) {
        /** The native frames at the transaction finish time, keyed by traceId. */
        this._finishFrames = new Map();
        /** The listeners for each native frames response, keyed by traceId */
        this._framesListeners = new Map();
        logger.log('[NativescriptTracing] Native frames instrumentation initialized.');
        addGlobalEventProcessor((event) => this._processEvent(event, doesExist));
    }
    /**
   * To be called when a transaction is started.
   * Logs the native frames at this start point and instruments child span finishes.
   */
    onTransactionStart(transaction) {
        void NATIVE.fetchNativeFrames().then((framesMetrics) => {
            if (framesMetrics) {
                transaction.setData('__startFrames', framesMetrics);
            }
        });
        instrumentChildSpanFinish(transaction, (_, endTimestamp) => {
            if (!endTimestamp) {
                this._onSpanFinish();
            }
        });
    }
    /**
   * To be called when a transaction is finished
   */
    onTransactionFinish(transaction) {
        void this._fetchFramesForTransaction(transaction);
    }
    /**
   * Called on a span finish to fetch native frames to support transactions with trimEnd.
   * Only to be called when a span does not have an end timestamp.
   */
    _onSpanFinish() {
        const timestamp = timestampInSeconds();
        void NATIVE.fetchNativeFrames().then((nativeFrames) => {
            if (nativeFrames) {
                this._lastSpanFinishFrames = {
                    timestamp,
                    nativeFrames,
                };
            }
        });
    }
    /**
   * Returns the computed frames measurements and awaits for them if they are not ready yet.
   */
    async _getFramesMeasurements(traceId, finalEndTimestamp, startFrames) {
        if (this._finishFrames.has(traceId)) {
            return this._prepareMeasurements(traceId, finalEndTimestamp, startFrames);
        }
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                this._framesListeners.delete(traceId);
                resolve(null);
            }, 2000);
            this._framesListeners.set(traceId, () => {
                resolve(this._prepareMeasurements(traceId, finalEndTimestamp, startFrames));
                clearTimeout(timeout);
                this._framesListeners.delete(traceId);
            });
        });
    }
    /**
   * Returns the computed frames measurements given ready data
   */
    _prepareMeasurements(traceId, finalEndTimestamp, // The actual transaction finish time.
    startFrames) {
        let finalFinishFrames;
        const finish = this._finishFrames.get(traceId);
        if (finish &&
            finish.nativeFrames &&
            // Must be in the margin of error of the actual transaction finish time (finalEndTimestamp)
            Math.abs(finish.timestamp - finalEndTimestamp) < MARGIN_OF_ERROR_SECONDS) {
            finalFinishFrames = finish.nativeFrames;
        }
        else if (this._lastSpanFinishFrames &&
            Math.abs(this._lastSpanFinishFrames.timestamp - finalEndTimestamp) <
                MARGIN_OF_ERROR_SECONDS) {
            // Fallback to the last span finish if it is within the margin of error of the actual finish timestamp.
            // This should be the case for trimEnd.
            finalFinishFrames = this._lastSpanFinishFrames.nativeFrames;
        }
        else {
            return null;
        }
        const measurements = {
            frames_total: {
                value: finalFinishFrames.totalFrames - startFrames.totalFrames,
                unit: 'none'
            },
            frames_frozen: {
                value: finalFinishFrames.frozenFrames - startFrames.frozenFrames,
                unit: 'none'
            },
            frames_slow: {
                value: finalFinishFrames.slowFrames - startFrames.slowFrames,
                unit: 'none'
            },
        };
        return measurements;
    }
    /**
   * Fetch finish frames for a transaction at the current time. Calls any awaiting listeners.
   */
    async _fetchFramesForTransaction(transaction) {
        const startFrames = transaction.data.__startFrames;
        // This timestamp marks when the finish frames were retrieved. It should be pretty close to the transaction finish.
        const timestamp = timestampInSeconds();
        let finishFrames = null;
        if (startFrames) {
            finishFrames = await NATIVE.fetchNativeFrames();
        }
        this._finishFrames.set(transaction.traceId, {
            nativeFrames: finishFrames,
            timestamp,
        });
        this._framesListeners.get(transaction.traceId)?.();
        setTimeout(() => this._cancelFinishFrames(transaction), 2000);
    }
    /**
   * On a finish frames failure, we cancel the await.
   */
    _cancelFinishFrames(transaction) {
        if (this._finishFrames.has(transaction.traceId)) {
            this._finishFrames.delete(transaction.traceId);
            logger.log(`[NativeFrames] Native frames timed out for ${transaction.op} transaction ${transaction.name}. Not adding native frames measurements.`);
        }
    }
    /**
   * Adds frames measurements to an event. Called from a valid event processor.
   * Awaits for finish frames if needed.
   */
    async _processEvent(event, doesExist) {
        if (!doesExist()) {
            return event;
        }
        if (event.type === 'transaction' &&
            event.transaction &&
            event.contexts &&
            event.contexts.trace) {
            const traceContext = event.contexts.trace;
            const traceId = traceContext.trace_id;
            if (traceId && traceContext.data?.__startFrames && event.timestamp) {
                const measurements = await this._getFramesMeasurements(traceId, event.timestamp, traceContext.data.__startFrames);
                if (!measurements) {
                    logger.log(`[NativeFrames] Could not fetch native frames for ${traceContext.op} transaction ${event.transaction}. Not adding native frames measurements.`);
                }
                else {
                    logger.log(`[Measurements] Adding measurements to ${traceContext.op} transaction ${event.transaction}: ${JSON.stringify(measurements, undefined, 2)}`);
                    event.measurements = {
                        ...(event.measurements ?? {}),
                        ...measurements,
                    };
                    this._finishFrames.delete(traceId);
                }
                delete traceContext.data.__startFrames;
            }
        }
        return event;
    }
}
//# sourceMappingURL=nativeframes.js.map