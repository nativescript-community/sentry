import { Integration } from '@sentry/types';
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
/** NativescriptErrorHandlers Integration */
export declare class NativescriptErrorHandlers implements Integration {
    /**
     * @inheritDoc
     */
    static id: string;
    /**
     * @inheritDoc
     */
    name: string;
    /** NativescriptOptions */
    private readonly _options;
    /** Constructor */
    constructor(options?: NativescriptErrorHandlersOptions);
    /**
     * @inheritDoc
     */
    setupOnce(): void;
    /**
     * Handle Promises
     */
    private _handleUnhandledRejections;
    private globalHanderEvent;
    handlingFatal: boolean;
    private globalHander;
    /**
     * Handle erros
     */
    private _handleOnError;
}
