import { stackParserFromStackParserOptions } from '@sentry/core';
const INTEGRATION_NAME = 'DebugSymbolicator';
// xport type ExtendedError = Error & {
//   jsEngine?: string,
//   preventSymbolication?: boolean,
//   componentStack?: string,
//   forceRedbox?: boolean,
//   isComponentError?: boolean,
//   ...
// };
const UNKNOWN_FUNCTION = undefined;
// function createFrame(filename, func, lineno, colno) {
function createFrame(frame) {
    frame.in_app = (frame.filename && !frame.filename.includes('node_modules')) || (!!frame.colno && !!frame.lineno);
    frame.platform = frame.filename.endsWith('.js') ? 'javascript' : 'android';
    return frame;
}
const nativescriptRegex = /^\s*at (?:(.*\).*?|.*?) ?\()?((?:file|native|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const nativescriptFunc = (line) => {
    const parts = nativescriptRegex.exec(line);
    if (parts) {
        return createFrame({
            filename: parts[2],
            platform: 'javascript',
            function: parts[1] || UNKNOWN_FUNCTION,
            lineno: parts[3] ? +parts[3] : undefined,
            colno: parts[4] ? +parts[4] : undefined
        });
    }
    return null;
};
const nativescriptLineParser = [30, nativescriptFunc];
const androidRegex = /^\s*(?:(.*\).*?|.*?) ?\()?((?:Native Method|[-a-z]+:)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const androidFunc = (line) => {
    const parts = androidRegex.exec(line);
    if (parts) {
        let func = UNKNOWN_FUNCTION, mod;
        if (parts[1]) {
            const splitted = parts[1].split('.');
            func = splitted[splitted.length - 1];
            mod = splitted.slice(0, -1).join('.');
        }
        if (!parts[2].endsWith('.java')) {
            return null;
        }
        return createFrame({
            filename: parts[2],
            function: func,
            module: mod,
            native: func && func.indexOf('Native Method') !== -1,
            lineno: parts[3] ? +parts[3] : undefined,
            colno: parts[4] ? +parts[4] : undefined
        });
    }
    return null;
};
const androidLineParser = [50, androidFunc];
const stackParser = stackParserFromStackParserOptions([nativescriptLineParser, androidLineParser]);
export function parseErrorStack(e) {
    const stack = e?.['stackTrace'] || e?.stack;
    if (!stack) {
        return [];
    }
    return stackParser(stack);
}
/** Tries to symbolicate the JS stack trace on the device. */
export const debugSymbolicatorIntegration = () => ({
    name: INTEGRATION_NAME,
    // eslint-disable-next-line @typescript-eslint/require-await
    processEvent: async (event, hint) => {
        if (!event.exception?.values?.length) {
            return event;
        }
        const error = (hint?.originalException || hint?.syntheticException);
        if (!error || typeof error !== 'object' || error.preventSymbolication) {
            return event;
        }
        const stack = parseErrorStack(error);
        if (!stack.length) {
            return event;
        }
        // Ideally this should go into contexts but android sdk doesn't support it
        event.extra = {
            ...event.extra,
            componentStack: error.componentStack,
            jsEngine: error.jsEngine
        };
        replaceFramesInEvent(event, stack);
        event.platform = 'node'; // Setting platform node makes sure we do not show source maps errors
        return event;
    }
});
/**
 * Replaces the frames in the exception of a error.
 * @param event Event
 * @param frames StackFrame[]
 */
function replaceFramesInEvent(event, frames) {
    if (event.exception?.values?.[0].stacktrace) {
        event.exception.values[0].stacktrace.frames = frames.reverse();
    }
}
//# sourceMappingURL=debugsymbolicator.js.map