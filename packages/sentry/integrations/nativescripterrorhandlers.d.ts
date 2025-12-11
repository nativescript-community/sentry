import type { Client, Integration } from '@sentry/core';
export declare const INTEGRATION_NAME = "NativescriptErrorHandlers";
/** NativescriptErrorHandlers Options */
export interface NativescriptErrorHandlersOptions {
    onerror?: boolean;
    onunhandledrejection?: boolean;
    /**
     * When enabled, Sentry will overwrite the global Promise instance to ensure that unhandled rejections are correctly tracked.
     * If you run into issues with Promise polyfills such as `core-js`, make sure you polyfill after Sentry is initialized.
     * Read more at https://docs.sentry.io/platforms/react-native/troubleshooting/#unhandled-promise-rejections
     *
     * When disabled, this option will not disable unhandled rejection tracking. Set `onunhandledrejection: false` on the `ReactNativeErrorHandlers` integration instead.
     *
     * @default true
     */
    patchGlobalPromise?: boolean;
}
export declare const defaultNativescriptErrorHandlersOptions: NativescriptErrorHandlersOptions;
export interface NativescriptErrorHandlersState {
    handlingFatal: boolean;
}
export declare const nativescriptErrorHandlersIntegration: (options?: Partial<NativescriptErrorHandlersOptions>) => Integration & {
    options: NativescriptErrorHandlersOptions;
    state: NativescriptErrorHandlersState;
};
export type NativescriptErrorHandlersIntegration = ReturnType<typeof nativescriptErrorHandlersIntegration>;
/**
 * Returns the current NativescriptErrorHandlers integration.
 */
export declare function getCurrentNativescriptErrorHandlersIntegration(): NativescriptErrorHandlersIntegration | undefined;
/**
 * Returns NativescriptErrorHandlers integration of given client.
 */
export declare function getNativescriptErrorHandlersIntegration(client: Client): NativescriptErrorHandlersIntegration | undefined;
