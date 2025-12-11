import type { Integration, StackFrame } from '@sentry/core';
/**
 * React Native Error
 */
type NativescriptError = Error & {
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
export declare const debugSymbolicatorIntegration: () => Integration;
export {};
