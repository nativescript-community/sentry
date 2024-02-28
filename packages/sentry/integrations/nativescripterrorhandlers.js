import { getCurrentHub } from '@sentry/core';
import { eventFromUnknownInput } from '@sentry/browser/esm/eventbuilder';
import { addExceptionMechanism, logger } from '@sentry/utils';
import { Application } from '@nativescript/core';
import { Screenshot } from './screenshot';
/** NativescriptErrorHandlers Integration */
export class NativescriptErrorHandlers {
    /** Constructor */
    constructor(options) {
        /**
         * @inheritDoc
         */
        this.name = NativescriptErrorHandlers.id;
        this.handlingFatal = false;
        this._options = {
            // uncaughtErrors: false,
            onerror: false,
            onunhandledrejection: false,
            patchGlobalPromise: true,
            ...options,
        };
    }
    /**
     * @inheritDoc
     */
    setupOnce() {
        this._handleUnhandledRejections();
        this._handleOnError();
    }
    /**
     * Handle Promises
     */
    _handleUnhandledRejections() {
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
    globalHanderEvent(event) {
        this.globalHander(event.error);
    }
    globalHander(error, isFatal) {
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
            const client = currentHub.getClient();
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
            let hint = {
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
                event.level = 'fatal';
                addExceptionMechanism(event, {
                    handled: false,
                    type: 'onerror',
                });
            }
            client.captureEvent(event);
        }
        catch (error) {
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
    _handleOnError() {
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
/**
 * @inheritDoc
 */
NativescriptErrorHandlers.id = 'NativescriptErrorHandlers';
//# sourceMappingURL=nativescripterrorhandlers.js.map