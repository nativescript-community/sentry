import { nativeExceptionOf } from '../integrations/nativeexception';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;

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
    // Marshalled native objects have no own-enumerable properties, so JSON and
    // key listings see nothing — their native description says what they are.
    if (__IOS__ && typeof NSObject !== 'undefined' && value instanceof NSObject) {
        return String(value).slice(0, 1024);
    }
    // @ts-ignore
    if (__ANDROID__ && value instanceof java.lang.Object) {
        return String(value).slice(0, 1024);
    }
    try {
        const json = JSON.stringify(value);
        if (json && json !== '{}') {
            return json.slice(0, 1024);
        }
    } catch {
        // Circular — fall through to the constructor/keys summary.
    }
    const constructorName = typeof value.constructor === 'function' && value.constructor.name !== 'Object' ? value.constructor.name : 'Object';
    // getOwnPropertyNames also sees the non-enumerable properties JSON missed.
    const keys = Object.getOwnPropertyNames(value);
    return keys.length ? `${constructorName} captured as error with keys: ${keys.slice(0, 10).join(', ')}` : `${constructorName} captured as error (no own properties)`;
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

function markCapturedValue(error: Error, value: unknown): void {
    if (!(CAPTURED_VALUE in error)) {
        Object.defineProperty(error, CAPTURED_VALUE, { value, enumerable: false });
    }
}

/**
 * Objects whose interesting properties are non-enumerable (class instances with
 * getters, exotic objects) serialize to `{}` as event extra data. Snapshot the
 * own property names shallowly so the payload stays triageable.
 */
function capturedValueSnapshot(value: unknown): unknown {
    if (typeof value !== 'object' || value === null || Object.keys(value).length) {
        return value;
    }
    const ownProperties = Object.getOwnPropertyNames(value);
    if (!ownProperties.length) {
        return value;
    }
    const snapshot: Record<string, string> = {};
    for (const key of ownProperties.slice(0, 20)) {
        try {
            snapshot[key] = String((value as Record<string, unknown>)[key]).slice(0, 256);
        } catch {
            snapshot[key] = '<property access threw>';
        }
    }
    return snapshot;
}

function wrapValue(value: unknown, message: string): Error {
    const error = new Error(message);
    // Hide the wrapper machinery from the stack so the event's culprit is the
    // capture site, not this file.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Error as any).captureStackTrace?.(error, toCapturableError);
    if (typeof value === 'object' && value !== null) {
        const record = value as Record<string, unknown>;
        if (typeof record.name === 'string' && record.name) {
            error.name = record.name;
        }
        // An own-property Error carries the closest thing to a real stack.
        const errorProperty = Object.values(record).find((v) => v instanceof Error);
        if (errorProperty?.stack) {
            error.stack = errorProperty.stack;
        }
    }
    markCapturedValue(error, capturedValueSnapshot(value));
    return error;
}

/**
 * The runtimes install `ErrorEvent`/`PromiseRejectionEvent` as global
 * constructors — capturing the event itself instead of its payload is a common
 * slip, so unwrap it.
 */
function unwrapEventShapedValue(value: object): { unwrapped: unknown } | undefined {
    if (typeof global.ErrorEvent === 'function' && value instanceof global.ErrorEvent) {
        const event = value as { error?: unknown; message?: unknown };
        return { unwrapped: event.error !== undefined ? event.error : event.message };
    }
    if (typeof global.PromiseRejectionEvent === 'function' && value instanceof global.PromiseRejectionEvent) {
        return { unwrapped: (value as { reason?: unknown }).reason };
    }
    return undefined;
}

/**
 * Normalizes a thrown/rejection value for capture. A directly-thrown wrapped
 * native exception (NSException/NSError/Throwable — not an `Error`, no `.stack`)
 * gets wrapped in an Error carrying its name and message, with the native
 * exception re-attached so the NativeException integration still enriches it.
 * Any other non-Error value is wrapped too, using a summary of the payload as
 * the message (re-attached to the event as `extra.capturedValue`) so the event
 * stays groupable and searchable instead of being titled by its key list.
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
            name = native.name ?? native.domain;
            message = native.reason ?? native.localizedDescription;
        } else if (__ANDROID__) {
            name = typeof native.getClass === 'function' ? native.getClass().getName() : undefined;
            message = typeof native.getMessage === 'function' ? native.getMessage() : undefined;
        }
        const wrapped = new Error(message != null ? String(message) : fallbackMessage);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Error as any).captureStackTrace?.(wrapped, toCapturableError);
        if (name !== undefined) {
            wrapped.name = String(name);
        }
        (wrapped as Error & { nativeException?: unknown }).nativeException = native;
        return wrapped;
    }
    if (typeof value === 'object') {
        const eventShaped = unwrapEventShapedValue(value);
        if (eventShaped && eventShaped.unwrapped !== value) {
            return toCapturableError(eventShaped.unwrapped, fallbackMessage);
        }
        const record = value as Record<string, unknown>;
        // With no message of its own, an own-property Error is the best capture:
        // real message, real type, real stack. The payload rides along as extra.
        if (!(typeof record.message === 'string' && record.message)) {
            const errorProperty = Object.values(record).find((v) => v instanceof Error);
            if (errorProperty) {
                markCapturedValue(errorProperty, capturedValueSnapshot(value));
                return errorProperty;
            }
        }
        return wrapValue(value, describeValue(value));
    }
    return wrapValue(value, String(value));
}
