import { timestampInSeconds } from '@sentry/utils';
export const defaultTransactionSource = 'component';
export const customTransactionSource = 'custom';
export const getBlankTransactionContext = (name) => ({
    name: 'Route Change',
    op: 'navigation',
    tags: {
        'routing.instrumentation': name,
    },
    data: {},
    metadata: {
        source: defaultTransactionSource,
    },
});
/**
 * A margin of error of 50ms is allowed for the async native bridge call.
 * Anything larger would reduce the accuracy of our frames measurements.
 */
export const MARGIN_OF_ERROR_SECONDS = 0.05;
const timeOriginMilliseconds = Date.now();
/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */
function secToMs(time) {
    return time * 1000;
}
/**
 *
 */
export function adjustTransactionDuration(maxDuration, // in seconds
transaction, endTimestamp) {
    const diff = endTimestamp - transaction.startTimestamp;
    const isOutdatedTransaction = endTimestamp && (diff > secToMs(maxDuration) || diff < 0);
    if (isOutdatedTransaction) {
        transaction.setStatus('deadline_exceeded');
        transaction.setTag('maxTransactionDurationExceeded', 'true');
    }
}
/**
 * Returns the timestamp where the JS global scope was initialized.
 */
export function getTimeOriginMilliseconds() {
    return timeOriginMilliseconds;
}
/**
 * Calls the callback every time a child span of the transaction is finished.
 */
export function instrumentChildSpanFinish(transaction, callback) {
    if (transaction.spanRecorder) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalAdd = transaction.spanRecorder.add;
        transaction.spanRecorder.add = (span) => {
            originalAdd.apply(transaction.spanRecorder, [span]);
            // eslint-disable-next-line @typescript-eslint/unbound-method
            const originalSpanFinish = span.finish;
            span.finish = (endTimestamp) => {
                originalSpanFinish.apply(span, [endTimestamp]);
                callback(span, endTimestamp);
            };
        };
    }
}
/**
 * Determines if the timestamp is now or within the specified margin of error from now.
 */
export function isNearToNow(timestamp) {
    return Math.abs(timestampInSeconds() - timestamp) <= MARGIN_OF_ERROR_SECONDS;
}
//# sourceMappingURL=utils.js.map