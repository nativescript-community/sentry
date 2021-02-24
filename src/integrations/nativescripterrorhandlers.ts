import { getCurrentHub } from '@sentry/core';
import { Integration, Severity } from '@sentry/types';
import { NSSentry } from '../nssentry';
import { logger } from '@sentry/utils';

import { NativescriptClient } from '../client';

import {Application, Trace} from '@nativescript/core';

/** NativescriptErrorHandlers Options */
export interface NativescriptErrorHandlersOptions {
    traceErrorHandler?: boolean;
    uncaughtErrors?: boolean;
}

declare const global: any;

/** NativescriptErrorHandlers Integration */
export class NativescriptErrorHandlers implements Integration {
    /**
     * @inheritDoc
     */
    public name: string = NativescriptErrorHandlers.id;

    /**
     * @inheritDoc
     */
    public static id: string = 'NativescriptErrorHandlers';

    /** NativescriptOptions */
    private readonly _options: NativescriptErrorHandlersOptions;

    /** Constructor */
    public constructor(options?: NativescriptErrorHandlersOptions) {
        this._options = {
            traceErrorHandler: false,
            uncaughtErrors: false,
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
        if (this._options.uncaughtErrors) {
            Application.on(Application.uncaughtErrorEvent, this.globalHanderEvent, this);
            // const tracking = require('promise/setimmediate/rejection-tracking');
            // tracking.disable();
            // tracking.enable({
            //     allRejections: true,
            //     onHandled: () => {
            //         // We do nothing
            //     },
            //     onUnhandled: (id: any, error: any) => {
            //         getCurrentHub().captureException(error, {
            //             data: { id },
            //             originalException: error
            //         });
            //     }
            // });
        }
    }

    private globalHanderEvent(event) {
        this.globalHander(event.error);
    }
    private globalHander(error: any, isFatal?: boolean) {
        getCurrentHub().withScope(scope => {
            if (isFatal) {
                scope.setLevel(Severity.Fatal);
            }
            getCurrentHub().captureException(error, {
                originalException: error
            });
        });

        const client = getCurrentHub().getClient<NativescriptClient>();
        // If in dev, we call the default handler anyway and hope the error will be sent
        // Just for a better dev experience
        if (client) {
            const timeout = client.getOptions().shutdownTimeout || 2000;
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            (client.flush(timeout) as Promise<any>)
                .catch(e => {
                    logger.error(e);
                });
        } else {
            // If there is no client something is fishy, anyway we call the default handler
            // defaultHandler(error, isFatal);
        }
    }

    /**
     * Handle erros
     */
    private _handleOnError(): void {
        if (this._options.traceErrorHandler) {
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
