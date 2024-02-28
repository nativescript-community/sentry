import { Integration, StackFrame } from '@sentry/types';
/**
 * React Native Error
 */
declare type NativescriptError = Error & {
    stackTrace?: string;
    framesToPop?: number;
    jsEngine?: string;
    preventSymbolication?: boolean;
    componentStack?: string;
};
export interface NativescriptStackFrame extends StackFrame {
    native?: boolean;
}
export declare function parseErrorStack(e: NativescriptError): StackFrame[];
/** Tries to symbolicate the JS stack trace on the device. */
export declare class DebugSymbolicator implements Integration {
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * @inheritDoc
     */
    static id: string;
    /**
     * @inheritDoc
     */
    setupOnce(): void;
    /**
   * Symbolicates the stack on the device talking to local dev server.
   * Mutates the passed event.
   */
    private _symbolicate;
    /**
     * Replaces the frames in the exception of a error.
     * @param event Event
     * @param frames StackFrame[]
     */
    private _replaceFramesInEvent;
}
export {};
