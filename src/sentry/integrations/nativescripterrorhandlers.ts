import { getCurrentHub } from '@sentry/core';
import { eventFromUnknownInput } from '@sentry/browser/esm/eventbuilder';
import { EventHint, Integration, SeverityLevel } from '@sentry/types';
import { NATIVE } from '../wrapper';
import { addExceptionMechanism, logger } from '@sentry/utils';

import { NativescriptClient } from '../client';

import { Application, Trace } from '@nativescript/core';
import { Screenshot } from './screenshot';

/** NativescriptErrorHandlers Options */
export interface NativescriptErrorHandlersOptions {
    // traceErrorHandler?: boolean;
    // uncaughtErrors?: boolean;
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

interface PromiseRejectionTrackingOptions {
    onUnhandled: (id: string, error: unknown) => void;
    onHandled: (id: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;

/** NativescriptErrorHandlers Integration */
export class NativescriptErrorHandlers implements Integration {
    /**
     * @inheritDoc
     */
    public static id: string = 'NativescriptErrorHandlers';

    /**
     * @inheritDoc
     */
    public name: string = NativescriptErrorHandlers.id;

    /** NativescriptOptions */
    private readonly _options: NativescriptErrorHandlersOptions;

    /** Constructor */
    public constructor(options?: NativescriptErrorHandlersOptions) {
        this._options = {
            // uncaughtErrors: false,
            onerror: false,
            onunhandledrejection: false,
            patchGlobalPromise: true,
            ...options
        };
    }

    /**
     * @inheritDoc
     */
    public setupOnce(): void {
        this._handleUnhandledRejections();
        this._handleOnError();
    }

    /**
     * Handle Promises
     */
    private _handleUnhandledRejections(): void {
        if (this._options.onunhandledrejection) {
            // if (this._options.uncaughtErrors) {
            Application.on(Application.uncaughtErrorEvent, this.globalHanderEvent, this);
            // }
            // if (this._options.patchGlobalPromise) {
            //     this._polyfillPromise();
            // }

            // this._attachUnhandledRejectionHandler();
            // this._checkPromiseAndWarn();
        }
    }

    private globalHanderEvent(event) {
        this.globalHander(event.error);
    }
    handlingFatal = false;

    private globalHander(error: any, isFatal?: boolean) {
        try {
            // We want to handle fatals, but only in production mode.
            const shouldHandleFatal = isFatal && !__DEV__;
            if (shouldHandleFatal) {
                if (this.handlingFatal) {
                    logger.log('Encountered multiple fatals in a row. The latest:', error);
                    return;
                }
                this.handlingFatal = true;
            }

            const currentHub = getCurrentHub();
            const client = currentHub.getClient<NativescriptClient>();

            if (!client) {
                logger.error('Sentry client is missing, the error event might be lost.', error);

                // If there is no client something is fishy, anyway we call the default handler
                //   defaultHandler(error, isFatal);

                return;
            }

            // We override client.eventFromException because it is async function
            // while not needed and we want to be sync
            if (error['stackTrace']) {
                error['stacktrace'] = error['stackTrace'];
            }
            let hint: EventHint = {
                originalException: error
            };
            const syntheticException = (hint && hint.syntheticException) || undefined;
            hint = Screenshot.attachScreenshotToEventHint(hint, client.getOptions());
            const event = eventFromUnknownInput(client.getOptions().stackParser, error, syntheticException, client.getOptions().attachStacktrace);
            addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
            event.level = 'error';
            if (hint && hint.event_id) {
                event.event_id = hint.event_id;
            }

            if (isFatal) {
                event.level = 'fatal' as SeverityLevel;
                addExceptionMechanism(event, {
                    handled: false,
                    type: 'onerror'
                });
            }

            client.captureEvent(event);
        } catch (error) {
            console.error(error);
        }

        // if (!__DEV__) {
        //     void client.flush(options.shutdownTimeout || 2000).then(() => {
        //         defaultHandler(error, isFatal);
        //     });
        // } else {
        //     // If in dev, we call the default handler anyway and hope the error will be sent
        //     // Just for a better dev experience
        //     defaultHandler(error, isFatal);
        // }
    }

    /**
     * Handle erros
     */
    private _handleOnError(): void {
        if (this._options.onerror) {
            // let handlingFatal = false;
            // Application.on(Application.uncaughtErrorEvent, this.globalHanderEvent, this);
            Application.on(Application.discardedErrorEvent, this.globalHanderEvent, this);

            // Trace.setErrorHandler({
            //     handlerError: this.globalHander
            // });
            // const defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();

            // ErrorUtils.setGlobalHandler);
        }
    }
}
