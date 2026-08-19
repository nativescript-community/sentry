import type { Event, EventHint, Integration, StackFrame } from '@sentry/core';

export const INTEGRATION_NAME = 'NativeException';

/**
 * Duck-typed view of the `nativeException` the runtimes attach to JS errors
 * born from a native throw (NSException/NSError on iOS, Throwable on Android).
 * Property access marshals lazily, so only touch what exists.
 */
export interface NativeExceptionLike {
    name?: string;
    reason?: string;
    userInfo?: unknown;
    /** NSException only — symbolicated frames captured at the native @throw site. */
    callStackSymbols?: { count: number; objectAtIndex(index: number): string };
    /** NSError only */
    domain?: string;
    code?: number;
    /** Throwable only */
    getClass?(): { getName(): string };
    getMessage?(): string;
}

/**
 * Per the runtimes' error contract (docs/error-handling.md), a thrown/rejection
 * value can be: an Error (possibly carrying `nativeException`), a directly-thrown
 * wrapped native exception (not an Error, no `.stack`), or any other value.
 * Resolve the native exception for the first two shapes.
 */
export function nativeExceptionOf(value: unknown): NativeExceptionLike | undefined {
    if (!value) {
        return undefined;
    }
    if (__IOS__ && typeof NSException !== 'undefined' && value instanceof NSException) {
        return value as NativeExceptionLike;
    }
    // @ts-ignore
    if (__ANDROID__ && value instanceof java.lang.Throwable) {
        return value as NativeExceptionLike;
    }
    const native = (value as { nativeException?: unknown }).nativeException;
    return typeof native === 'object' && native !== null ? (native as NativeExceptionLike) : undefined;
}

// callStackSymbols line shape: "3   CoreFoundation   0x00000001804ae0f8 __exceptionPreprocess + 172"
const NATIVE_STACK_FRAME_RE = /^\s*\d+\s+(\S+)\s+(0x[0-9a-fA-F]+)\s+(.+)$/;

function enrichWithIosException(event: Event, native: NativeExceptionLike): void {
    const symbols = native.callStackSymbols;
    if (symbols) {
        const frames: StackFrame[] = [];
        for (let i = 0; i < symbols.count; i++) {
            const line = String(symbols.objectAtIndex(i));
            const match = NATIVE_STACK_FRAME_RE.exec(line);
            frames.push(match ? { platform: 'cocoa', module: match[1], instruction_addr: match[2], function: match[3] } : { platform: 'cocoa', function: line });
        }
        // callStackSymbols is newest-frame-first; Sentry wants oldest first.
        frames.reverse();

        event.exception ??= {};
        event.exception.values ??= [];
        event.exception.values.unshift({
            type: native.name !== undefined ? String(native.name) : 'NSException',
            value: String(native.reason ?? native.name ?? 'NSException'),
            stacktrace: { frames }
        });
    }

    const context: Record<string, unknown> = {};
    if (native.name !== undefined) {
        context.name = String(native.name);
    }
    if (native.reason !== undefined) {
        context.reason = String(native.reason);
    }
    if (native.domain !== undefined) {
        context.domain = String(native.domain);
    }
    if (native.code !== undefined) {
        context.code = Number(native.code);
    }
    if (native.userInfo != null) {
        // NSDictionary values can be arbitrary native objects — its description
        // string is the safe universal serialization.
        context.userInfo = String(native.userInfo).slice(0, 8192);
    }
    event.contexts = { ...event.contexts, nativeException: context };
}

function enrichWithAndroidException(event: Event, native: NativeExceptionLike): void {
    const context: Record<string, unknown> = {};
    if (typeof native.getClass === 'function') {
        context.class = String(native.getClass().getName());
    }
    if (typeof native.getMessage === 'function') {
        const message = native.getMessage();
        if (message != null) {
            context.message = String(message);
        }
    }
    if (Object.keys(context).length) {
        event.contexts = { ...event.contexts, nativeException: context };
    }
}

/**
 * Enriches events whose original exception carries a `nativeException`: on iOS
 * chains the ObjC throw-site stack (`callStackSymbols`) as a proper exception
 * entry and attaches name/reason/domain/code/userInfo context; on Android
 * attaches class/message context (the native frames are already chained from
 * the runtime's combined `stackTrace` when building the event).
 */
export const nativeExceptionIntegration = (): Integration => ({
    name: INTEGRATION_NAME,
    processEvent(event: Event, hint: EventHint): Event {
        try {
            const native = nativeExceptionOf(hint?.originalException);
            if (native) {
                if (__IOS__) {
                    enrichWithIosException(event, native);
                } else if (__ANDROID__) {
                    enrichWithAndroidException(event, native);
                }
            }
        } catch {
            // Enrichment must never break event delivery.
        }
        return event;
    }
});
