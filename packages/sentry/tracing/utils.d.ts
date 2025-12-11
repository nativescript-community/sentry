import type { MeasurementUnit, Span, SpanJSON, TransactionSource } from '@sentry/core';
export declare const defaultTransactionSource: TransactionSource;
export declare const customTransactionSource: TransactionSource;
/**
 * A margin of error of 50ms is allowed for the async native bridge call.
 * Anything larger would reduce the accuracy of our frames measurements.
 */
export declare const MARGIN_OF_ERROR_SECONDS = 0.05;
/**
 * Returns the timestamp where the JS global scope was initialized.
 */
export declare function getTimeOriginMilliseconds(): number;
/**
 * Determines if the timestamp is now or within the specified margin of error from now.
 */
export declare function isNearToNow(timestamp: number | undefined): boolean;
/**
 * Sets the duration of the span as a measurement.
 * Uses `setMeasurement` function from @sentry/core.
 */
export declare function setSpanDurationAsMeasurement(name: string, span: Span): void;
/**
 * Sets the duration of the span as a measurement.
 * Uses `setMeasurement` function from @sentry/core.
 */
export declare function setSpanDurationAsMeasurementOnSpan(name: string, span: Span, on: Span): void;
/**
 * Sets measurement on the give span.
 */
export declare function setSpanMeasurement(span: Span, key: string, value: number, unit: MeasurementUnit): void;
/**
 * Returns the latest end timestamp of the child spans of the given span.
 */
export declare function getLatestChildSpanEndTimestamp(span: Span): number | undefined;
/**
 * Returns unix timestamp in ms of the bundle start time.
 *
 * If not available, returns undefined.
 */
export declare function getBundleStartTimestampMs(): number | undefined;
/**
 * Creates valid span JSON object from the given data.
 */
export declare function createSpanJSON(from: Partial<SpanJSON> & Pick<Required<SpanJSON>, 'description' | 'start_timestamp' | 'timestamp' | 'origin'>): SpanJSON;
/**
 *
 */
export declare function createChildSpanJSON(parent: SpanJSON, from: Partial<SpanJSON> & Pick<Required<SpanJSON>, 'description' | 'start_timestamp' | 'timestamp'>): SpanJSON;
