import { Application } from '@nativescript/core';
import { addExceptionMechanism, debug, getClient } from '@sentry/core';
import { attachScreenshotToEventHint } from './screenshot';
import { eventFromUnknownInput } from '../utils/eventbuilder';
export const INTEGRATION_NAME = 'NativescriptErrorHandlers';
export const defaultNativescriptErrorHandlersOptions = {
    // uncaughtErrors: false,
    onerror: false,
    onunhandledrejection: false,
    patchGlobalPromise: true
};
export const nativescriptErrorHandlersIntegration = (options = {}) => {
    const state = {
        handlingFatal: false
    };
    const finalOptions = {
        ...defaultNativescriptErrorHandlersOptions,
        ...options
    };
    const globalHanderEvent = (event) => {
        globalHander(event.error);
    };
    const globalHander = (error, isFatal) => {
        try {
            // We want to handle fatals, but only in production mode.
            const shouldHandleFatal = isFatal && !__DEV__;
            if (shouldHandleFatal) {
                if (state.handlingFatal) {
                    debug.log('Encountered multiple fatals in a row. The latest:', error);
                    return;
                }
                state.handlingFatal = true;
            }
            const client = getClient();
            if (!client) {
                debug.error('Sentry client is missing, the error event might be lost.', error);
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
            const clientOptions = client.getOptions();
            hint = attachScreenshotToEventHint(hint, { attachScreenshot: clientOptions.attachScreenshot });
            const event = eventFromUnknownInput(clientOptions.stackParser, error, syntheticException, clientOptions.attachStacktrace);
            addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
            event.level = 'error';
            if (hint && hint.event_id) {
                event.event_id = hint.event_id;
            }
            if (isFatal) {
                event.level = 'fatal';
                addExceptionMechanism(event, {
                    handled: false,
                    type: 'onerror'
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
    };
    const setup = (_client) => {
        // Handle Promises
        if (finalOptions.onunhandledrejection) {
            // if (finalOptions.uncaughtErrors) {
            Application.on(Application.uncaughtErrorEvent, globalHanderEvent);
            // }
            // if (finalOptions.patchGlobalPromise) {
            //     polyfillPromise();
            // }
            // attachUnhandledRejectionHandler();
            // checkPromiseAndWarn();
        }
        // Handle errors
        if (finalOptions.onerror) {
            // let handlingFatal = false;
            // Application.on(Application.uncaughtErrorEvent, globalHanderEvent);
            Application.on(Application.discardedErrorEvent, globalHanderEvent);
            // Trace.setErrorHandler({
            //     handlerError: globalHander
            // });
            // const defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();
            // ErrorUtils.setGlobalHandler);
        }
    };
    return {
        name: INTEGRATION_NAME,
        setup,
        options: finalOptions,
        state
    };
};
/**
 * Returns the current NativescriptErrorHandlers integration.
 */
export function getCurrentNativescriptErrorHandlersIntegration() {
    const client = getClient();
    if (!client) {
        return undefined;
    }
    return getNativescriptErrorHandlersIntegration(client);
}
/**
 * Returns NativescriptErrorHandlers integration of given client.
 */
export function getNativescriptErrorHandlersIntegration(client) {
    return client.getIntegrationByName(INTEGRATION_NAME);
}
//# sourceMappingURL=nativescripterrorhandlers.js.map