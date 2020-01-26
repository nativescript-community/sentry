import { addGlobalEventProcessor, getCurrentHub } from '@sentry/core';
import { Event, EventHint, Integration, StackFrame } from '@sentry/types';
import { logger } from '@sentry/utils';

const INTERNAL_CALLSITES_REGEX = new RegExp(['/Libraries/Renderer/oss/NativescriptRenderer-dev\\.js$', '/Libraries/BatchedBridge/MessageQueue\\.js$'].join('|'));

/**
 * React Native Stack Frame
 */
interface NativescriptFrame {
    // arguments: []
    column: number;
    file: string;
    lineNumber: number;
    methodName: string;
}

/**
 * React Native Error
 */
type NativescriptError = Error & {
    framesToPop?: number;
    jsEngine?: string;
    preventSymbolication?: boolean;
    componentStack?: string;
};
// xport type ExtendedError = Error & {
//   jsEngine?: string,
//   preventSymbolication?: boolean,
//   componentStack?: string,
//   forceRedbox?: boolean,
//   isComponentError?: boolean,
//   ...
// };

function parseErrorStack(e: NativescriptError): StackFrame[] {
    if (!e || !e.stack) {
        return [];
    }
    const stacktraceParser = require('stacktrace-parser');
    if (Array.isArray(e.stack)) {
        return e.stack;
    } else {
        return stacktraceParser.parse('at ' + e.stack).map(frame => ({
            ...frame,
            column: frame.column != null ? frame.column - 1 : null
        }));
    }
}
/** Tries to symbolicate the JS stack trace on the device. */
export class DebugSymbolicator implements Integration {
    /**
     * @inheritDoc
     */
    public name: string = DebugSymbolicator.id;
    /**
     * @inheritDoc
     */
    public static id: string = 'DebugSymbolicator';

    /**
     * @inheritDoc
     */
    public setupOnce(): void {
        addGlobalEventProcessor(async (event: Event, hint?: EventHint) => {
            const self = getCurrentHub().getIntegration(DebugSymbolicator);
            if (!self || hint === undefined || hint.originalException === undefined) {
                return event;
            }

            const error: NativescriptError = hint.originalException as any;

            // const parseErrorStack = require('react-native/Libraries/Core/Devtools/parseErrorStack');
            const stack = parseErrorStack(error);

            // Ideally this should go into contexts but android sdk doesn't support it
            event.extra = {
                ...event.extra,
                componentStack: error.componentStack
                // jsEngine: error.jsEngine
            };

            // if (global.__DEV__) {
            //     await self._symbolicate(event, stack);
            // }
            // if (reactError.jsEngine === 'hermes') {
            const convertedFrames = this._convertNativescriptFramesToSentryFrames(stack as any);
            this._replaceFramesInEvent(event, convertedFrames);
            // }

            event.platform = 'node'; // Setting platform node makes sure we do not show source maps errors

            return event;
        });
    }

    /**
     * Symbolicates the stack on the device talking to local dev server.
     * Mutates the passed event.
     */
    private async _symbolicate(event: Event, stack: string | undefined): Promise<void> {
        try {
            // const symbolicateStackTrace = require('react-native/Libraries/Core/Devtools/symbolicateStackTrace');
            // const prettyStack = await symbolicateStackTrace(stack);
            // if (prettyStack) {
            //     const stackWithoutInternalCallsites = prettyStack.filter((frame: any) => frame.file && frame.file.match(INTERNAL_CALLSITES_REGEX) === null);
            //     const symbolicatedFrames = this._convertNativescriptFramesToSentryFrames(stackWithoutInternalCallsites);
            //     this._replaceFramesInEvent(event, symbolicatedFrames);
            // } else {
            //     logger.error('The stack is null');
            // }
        } catch (error) {
            logger.warn(`Unable to symbolicate stack trace: ${error.message}`);
        }
    }

    /**
     * Converts NativescriptFrames to frames in the Sentry format
     * @param frames NativescriptFrame[]
     */
    private _convertNativescriptFramesToSentryFrames(frames: NativescriptFrame[]): StackFrame[] {
        // Below you will find lines marked with :HACK to prevent showing errors in the sentry ui
        // But since this is a debug only feature: This is Fine (TM)
        return frames.map(
            (frame: NativescriptFrame): StackFrame => {
                const inApp = (frame.file && !frame.file.includes('node_modules')) || (!!frame.column && !!frame.lineNumber);
                // const inApp =true;
                return {
                    colno: frame.column,
                    filename: frame.file,
                    function: frame.methodName,
                    in_app: inApp,
                    lineno: inApp ? frame.lineNumber : undefined, // :HACK
                    platform: inApp ? 'javascript' : 'node' // :HACK
                };
            }
        );
    }

    /**
     * Replaces the frames in the exception of a error.
     * @param event Event
     * @param frames StackFrame[]
     */
    private _replaceFramesInEvent(event: Event, frames: StackFrame[]): void {
        if (event.exception && event.exception.values && event.exception.values[0] && event.exception.values[0].stacktrace) {
            event.exception.values[0].stacktrace.frames = frames.reverse();
        }
    }
}
