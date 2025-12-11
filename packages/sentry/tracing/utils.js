import { SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, debug, dropUndefinedKeys, getSpanDescendants, setMeasurement, spanToJSON, timestampInSeconds, uuid4 } from '@sentry/core';
import { NS_GLOBAL_OBJ } from '../utils/worldwide';
export const defaultTransactionSource = 'component';
export const customTransactionSource = 'custom';
/**
 * A margin of error of 50ms is allowed for the async native bridge call.
 * Anything larger would reduce the accuracy of our frames measurements.
 */
export const MARGIN_OF_ERROR_SECONDS = 0.05;
const timeOriginMilliseconds = Date.now();
/**
 * Returns the timestamp where the JS global scope was initialized.
 */
export function getTimeOriginMilliseconds() {
    return timeOriginMilliseconds;
}
/**
 * Determines if the timestamp is now or within the specified margin of error from now.
 */
export function isNearToNow(timestamp) {
    if (!timestamp) {
        return false;
    }
    return Math.abs(timestampInSeconds() - timestamp) <= MARGIN_OF_ERROR_SECONDS;
}
/**
 * Sets the duration of the span as a measurement.
 * Uses `setMeasurement` function from @sentry/core.
 */
export function setSpanDurationAsMeasurement(name, span) {
    const { timestamp: spanEnd, start_timestamp: spanStart } = spanToJSON(span);
    if (!spanEnd || !spanStart) {
        return;
    }
    setMeasurement(name, (spanEnd - spanStart) * 1000, 'millisecond');
}
/**
 * Sets the duration of the span as a measurement.
 * Uses `setMeasurement` function from @sentry/core.
 */
export function setSpanDurationAsMeasurementOnSpan(name, span, on) {
    const { timestamp: spanEnd, start_timestamp: spanStart } = spanToJSON(span);
    if (!spanEnd || !spanStart) {
        return;
    }
    setSpanMeasurement(on, name, (spanEnd - spanStart) * 1000, 'millisecond');
}
/**
 * Sets measurement on the give span.
 */
export function setSpanMeasurement(span, key, value, unit) {
    span.addEvent(key, {
        [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
        [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit
    });
}
/**
 * Returns the latest end timestamp of the child spans of the given span.
 */
export function getLatestChildSpanEndTimestamp(span) {
    const childEndTimestamps = getSpanDescendants(span)
        .map((span) => spanToJSON(span).timestamp)
        .filter((timestamp) => !!timestamp);
    return childEndTimestamps.length ? Math.max(...childEndTimestamps) : undefined;
}
/**
 * Returns unix timestamp in ms of the bundle start time.
 *
 * If not available, returns undefined.
 */
export function getBundleStartTimestampMs() {
    const bundleStartTime = NS_GLOBAL_OBJ.__BUNDLE_START_TIME__;
    if (!bundleStartTime) {
        debug.warn('Missing the bundle start time on the global object.');
        return undefined;
    }
    if (!NS_GLOBAL_OBJ.nativePerformanceNow) {
        // bundleStartTime is Date.now() in milliseconds
        return bundleStartTime;
    }
    // nativePerformanceNow() is monotonic clock like performance.now()
    const approxStartingTimeOrigin = Date.now() - NS_GLOBAL_OBJ.nativePerformanceNow();
    return approxStartingTimeOrigin + bundleStartTime;
}
/**
 * Creates valid span JSON object from the given data.
 */
export function createSpanJSON(from) {
    return dropUndefinedKeys({
        status: 'ok',
        ...from,
        span_id: from.span_id ? from.span_id : uuid4().substring(16),
        trace_id: from.trace_id ? from.trace_id : uuid4(),
        data: dropUndefinedKeys({
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: from.op,
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: from.origin,
            ...(from.data ? from.data : {})
        })
    });
}
const SENTRY_DEFAULT_ORIGIN = 'manual';
/**
 *
 */
export function createChildSpanJSON(parent, from) {
    return createSpanJSON({
        op: parent.op,
        trace_id: parent.trace_id,
        parent_span_id: parent.span_id,
        origin: parent.origin || SENTRY_DEFAULT_ORIGIN,
        ...from
    });
}
//# sourceMappingURL=utils.js.map