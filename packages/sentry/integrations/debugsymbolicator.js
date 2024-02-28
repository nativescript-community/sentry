import { addGlobalEventProcessor, getCurrentHub } from '@sentry/core';
import { logger, stackParserFromStackParserOptions } from '@sentry/utils';
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
export class DebugSymbolicator {
    constructor() {
        /**
         * @inheritDoc
         */
        this.name = DebugSymbolicator.id;
    }
    /**
     * @inheritDoc
     */
    setupOnce() {
        addGlobalEventProcessor(async (event, hint) => {
            const self = getCurrentHub().getIntegration(DebugSymbolicator);
            if (!self || hint === undefined || hint.originalException === undefined) {
                return event;
            }
            // @ts-ignore
            const error = hint.originalException;
            // const parseErrorStack = require('react-native/Libraries/Core/Devtools/parseErrorStack');
            const stack = parseErrorStack(error);
            // Ideally this should go into contexts but android sdk doesn't support it
            event.extra = {
                ...event.extra,
                componentStack: error.componentStack,
                jsEngine: error.jsEngine
            };
            await self._symbolicate(event, stack);
            event.platform = 'node'; // Setting platform node makes sure we do not show source maps errors
            return event;
        });
    }
    /**
     * Symbolicates the stack on the device talking to local dev server.
     * Mutates the passed event.
     */
    async _symbolicate(event, stack) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            this._replaceFramesInEvent(event, stack);
        }
        catch (error) {
            if (error instanceof Error) {
                logger.warn(`Unable to symbolicate stack trace: ${error.message}`);
            }
        }
    }
    /**
     * Replaces the frames in the exception of a error.
     * @param event Event
     * @param frames StackFrame[]
     */
    _replaceFramesInEvent(event, frames) {
        if (event.exception?.values?.[0].stacktrace) {
            event.exception.values[0].stacktrace.frames = frames.reverse();
        }
    }
}
/**
 * @inheritDoc
 */
DebugSymbolicator.id = 'DebugSymbolicator';
//# sourceMappingURL=debugsymbolicator.js.map