import { nativeExceptionOf } from '../integrations/nativeexception';

/**
 * Best-effort one-line summary of a non-Error thrown/rejection value. Sentry's
 * own fallback ("Object captured as exception with keys: a, b, c") carries no
 * message and no stack, so every unrelated payload of the same shape collapses
 * into a single untriageable issue.
 */
function describeValue(value: object): string {
    const record = value as Record<string, unknown>;
    // A duck-typed Error (e.g. one that crossed a worker boundary) reads well
    // enough as-is.
    if (typeof record.message === 'string' && record.message) {
        return record.message;
    }
    try {
        const json = JSON.stringify(value);
        if (json && json !== '{}') {
            return json.slice(0, 1024);
        }
    } catch {
        // Circular or native object — fall through to the tag string.
    }
    return Object.prototype.toString.call(value);
}

/**
 * Non-enumerable property carrying the raw value a wrapper `Error` was built
 * from, so it can be re-attached to the event as extra data.
 */
const CAPTURED_VALUE = '__capturedValue';

/** The raw payload behind a wrapper built by {@link toCapturableError}. */
export function capturedValueOf(error: unknown): unknown {
    return (error as Record<string, unknown> | null | undefined)?.[CAPTURED_VALUE];
}

/**
 * Normalizes a thrown/rejection value for capture. A directly-thrown wrapped
 * native exception (NSException/Throwable — not an `Error`, no `.stack`) gets
 * wrapped in an Error carrying its name and message, with the native exception
 * re-attached so the NativeException integration still enriches it. Any other
 * non-Error value is wrapped too, using a summary of the payload as the message
 * (re-attached to the event as `extra.capturedValue`) so the event stays
 * groupable and searchable instead of being titled by its key list.
 */
export function toCapturableError(value: unknown, fallbackMessage: string): unknown {
    if (value == null) {
        return new Error(fallbackMessage);
    }
    if (value instanceof Error) {
        return value;
    }
    const native = nativeExceptionOf(value);
    if (native) {
        let name: unknown;
        let message: unknown;
        if (__IOS__) {
            name = native.name;
            message = native.reason;
        } else if (__ANDROID__) {
            name = typeof native.getClass === 'function' ? native.getClass().getName() : undefined;
            message = typeof native.getMessage === 'function' ? native.getMessage() : undefined;
        }
        const wrapped = new Error(message != null ? String(message) : fallbackMessage);
        if (name !== undefined) {
            wrapped.name = String(name);
        }
        (wrapped as Error & { nativeException?: unknown }).nativeException = native;
        return wrapped;
    }
    const wrapped = new Error(typeof value === 'object' ? describeValue(value) : String(value));
    Object.defineProperty(wrapped, CAPTURED_VALUE, { value, enumerable: false });
    return wrapped;
}
