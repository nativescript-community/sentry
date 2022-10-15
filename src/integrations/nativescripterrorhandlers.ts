import { getCurrentHub } from '@sentry/core';
import { Integration, SeverityLevel } from '@sentry/types';
import { NATIVE } from '../wrapper';
import { addExceptionMechanism, getGlobalObject, logger } from '@sentry/utils';

import { NativescriptClient } from '../client';

import {Application, Trace} from '@nativescript/core';

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
            onerror: true,
            onunhandledrejection: true,
            patchGlobalPromise: true,
            ...options,
        };
    }

    /**
     * @inheritDoc
     */
    public setupOnce(): void {
        // this._handleUnhandledRejections();
        this._handleOnError();
    }

    /**
     * Handle Promises
     */
    // private _handleUnhandledRejections(): void {
    //     if (this._options.onunhandledrejection) {
    //         if (this._options.uncaughtErrors) {
    //             Application.on(Application.uncaughtErrorEvent, this.globalHanderEvent, this);
    //         }
    //         if (this._options.patchGlobalPromise) {
    //             this._polyfillPromise();
    //         }

    //         this._attachUnhandledRejectionHandler();
    //         this._checkPromiseAndWarn();
    //     }
    // }

    private globalHanderEvent(event) {
        this.globalHander(event.error);
    }
    handlingFatal = false;

    private async globalHander(error: any, isFatal?: boolean) {
        console.log('globalHander', error, isFatal);
        // We want to handle fatals, but only in production mode.
        const shouldHandleFatal = isFatal && !__DEV__;
        if (shouldHandleFatal) {
            if (this.handlingFatal) {
                logger.log(
                    'Encountered multiple fatals in a row. The latest:',
                    error
                );
                return;
            }
            this.handlingFatal = true;
        }

        const currentHub = getCurrentHub();
        const client = currentHub.getClient<NativescriptClient>();

        if (!client) {
            logger.error(
                'Sentry client is missing, the error event might be lost.',
                error
            );

            // If there is no client something is fishy, anyway we call the default handler
            //   defaultHandler(error, isFatal);

            return;
        }

        const options = client.getOptions();

        const event = await client.eventFromException(error, {
            originalException: error
        });

        if (isFatal) {
            event.level = 'fatal' as SeverityLevel;

            addExceptionMechanism(event, {
                handled: false,
                type: 'onerror',
            });
        }

        currentHub.captureEvent(event);

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
            Application.on(Application.discardedErrorEvent, this.globalHanderEvent, this);

            Trace.setErrorHandler({
                handlerError: this.globalHander
            });
            // const defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();

            // ErrorUtils.setGlobalHandler);
        }
    }
}
