import type { DebugImage, Event, EventHint, Integration, StackFrame, Stacktrace } from '@sentry/core';

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
    /** NSException only — the same frames as raw return addresses, index-aligned with `callStackSymbols`. */
    callStackReturnAddresses?: { count: number; objectAtIndex(index: number): number };
    /** NSError only */
    domain?: string;
    code?: number;
    localizedDescription?: string;
    /** Throwable only */
    getClass?(): { getName(): string };
    getMessage?(): string;
    getStackTrace?(): {
        length: number;
        [index: number]: {
            getClassName(): string;
            getMethodName(): string;
            getFileName(): string | null;
            getLineNumber(): number;
        };
    };
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
    if (__IOS__ && ((typeof NSException !== 'undefined' && value instanceof NSException) || (typeof NSError !== 'undefined' && value instanceof NSError))) {
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

/** Frame fields Sentry's native symbolication reads that `StackFrame` does not declare. */
interface CocoaStackFrame extends StackFrame {
    package?: string;
    image_addr?: string;
}

function formatAddress(address: number): string {
    return `0x${address.toString(16).padStart(16, '0')}`;
}

function binaryImageCache(): SentryBinaryImageCache | undefined {
    try {
        return typeof SentryDependencies !== 'undefined' ? SentryDependencies.binaryImageCache : undefined;
    } catch {
        return undefined;
    }
}

/**
 * Builds the throw-site frames plus a debug image for every binary they touch.
 * Names from `callStackSymbols` come from the device's symbol table, which is
 * wrong or missing for stripped binaries (release app executables, the
 * NativeScript runtime's internal functions). With the image list, Sentry
 * symbolicates the addresses against the uploaded dSYMs instead; the device
 * names stay as the fallback when no image or dSYM is found.
 */
function iosThrowSiteStack(native: NativeExceptionLike): { frames: CocoaStackFrame[]; images: DebugImage[] } | undefined {
    const symbols = native.callStackSymbols;
    const addresses = native.callStackReturnAddresses;
    const count = Math.max(symbols?.count ?? 0, addresses?.count ?? 0);
    if (!count) {
        return undefined;
    }
    // Empty until the native SDK has started; frames then fall back to device names.
    const cache = binaryImageCache();
    const images = new Map<number, DebugImage>();
    const frames: CocoaStackFrame[] = [];
    for (let i = 0; i < count; i++) {
        const frame: CocoaStackFrame = { platform: 'cocoa' };
        if (symbols && i < symbols.count) {
            const line = String(symbols.objectAtIndex(i));
            const match = NATIVE_STACK_FRAME_RE.exec(line);
            if (match) {
                frame.module = match[1];
                frame.instruction_addr = match[2];
                frame.function = match[3];
            } else {
                frame.function = line;
            }
        }
        const address = addresses && i < addresses.count ? Number(addresses.objectAtIndex(i)) : 0;
        if (address > 0) {
            frame.instruction_addr = formatAddress(address);
            const image = cache?.imageByAddress(address);
            if (image) {
                frame.package = String(image.name);
                frame.image_addr = formatAddress(image.address);
                if (!images.has(image.address) && image.uuid) {
                    images.set(image.address, {
                        type: 'macho',
                        debug_id: String(image.uuid),
                        image_addr: frame.image_addr,
                        image_size: Number(image.size),
                        code_file: frame.package
                    });
                }
            }
        }
        frames.push(frame);
    }
    // Both arrays are newest-frame-first; Sentry wants oldest first.
    frames.reverse();
    return { frames, images: [...images.values()] };
}

function addDebugImages(event: Event, images: DebugImage[]): void {
    if (!images.length) {
        return;
    }
    event.debug_meta ??= {};
    event.debug_meta.images ??= [];
    const known = new Set(event.debug_meta.images.map((image) => ('image_addr' in image ? image.image_addr : undefined)));
    for (const image of images) {
        if (!('image_addr' in image) || !known.has(image.image_addr)) {
            event.debug_meta.images.push(image);
        }
    }
}

function enrichWithIosException(event: Event, native: NativeExceptionLike): void {
    const stack = iosThrowSiteStack(native);
    if (stack) {
        event.exception ??= {};
        event.exception.values ??= [];
        event.exception.values.unshift({
            type: native.name !== undefined ? String(native.name) : 'NSException',
            value: String(native.reason ?? native.name ?? 'NSException'),
            // Every address is a return address, including the newest frame, so the
            // symbolicator must step each one back into its call instruction.
            stacktrace: { frames: stack.frames, instruction_addr_adjustment: 'all' } as Stacktrace
        });
        addDebugImages(event, stack.images);
    }

    const context: Record<string, unknown> = {};
    if (native.name !== undefined) {
        context.name = String(native.name);
    }
    if (native.reason !== undefined) {
        context.reason = String(native.reason);
    }
    if (native.reason === undefined && native.localizedDescription !== undefined) {
        context.description = String(native.localizedDescription);
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
    const className = typeof native.getClass === 'function' ? String(native.getClass().getName()) : undefined;
    const message = typeof native.getMessage === 'function' ? native.getMessage() : undefined;

    const elements = typeof native.getStackTrace === 'function' ? native.getStackTrace() : undefined;
    if (elements?.length) {
        const frames: StackFrame[] = [];
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const fileName = element.getFileName();
            const lineNumber = element.getLineNumber();
            frames.push({
                platform: 'java',
                module: String(element.getClassName()),
                function: String(element.getMethodName()),
                filename: fileName != null ? String(fileName) : undefined,
                lineno: lineNumber >= 0 ? lineNumber : undefined
            });
        }
        // getStackTrace() is newest-frame-first; Sentry wants oldest first.
        frames.reverse();

        event.exception ??= {};
        event.exception.values ??= [];
        event.exception.values.unshift({
            type: className ?? 'Throwable',
            value: String(message ?? className ?? 'Throwable'),
            stacktrace: { frames }
        });
    }

    const context: Record<string, unknown> = {};
    if (className !== undefined) {
        context.class = className;
    }
    if (message != null) {
        context.message = String(message);
    }
    if (Object.keys(context).length) {
        event.contexts = { ...event.contexts, nativeException: context };
    }
}

/**
 * Enriches events whose original exception carries a `nativeException`: chains
 * the native throw-site stack (`callStackSymbols` on iOS, `getStackTrace()` on
 * Android) as a proper exception entry and attaches native context
 * (name/reason/domain/code/userInfo on iOS, class/message on Android).
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
