import { Application } from '@nativescript/core';
import { eventFromUnknownInput } from '@sentry/browser/build/npm/types/eventbuilder';
import type { Client, EventHint, Integration, SeverityLevel } from '@sentry/core';
import { addExceptionMechanism, debug, getClient } from '@sentry/core';
import type { NativescriptClientOptions } from '../options';
import { attachScreenshotToEventHint } from './screenshot';

export const INTEGRATION_NAME = 'NativescriptErrorHandlers';

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

export const defaultNativescriptErrorHandlersOptions: NativescriptErrorHandlersOptions = {
    // uncaughtErrors: false,
    onerror: false,
    onunhandledrejection: false,
    patchGlobalPromise: true
};

export interface NativescriptErrorHandlersState {
    handlingFatal: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;

export const nativescriptErrorHandlersIntegration = (
    options: Partial<NativescriptErrorHandlersOptions> = {}
): Integration & {
    options: NativescriptErrorHandlersOptions;
    state: NativescriptErrorHandlersState;
} => {
    const state: NativescriptErrorHandlersState = {
        handlingFatal: false
    };

    const finalOptions = {
        ...defaultNativescriptErrorHandlersOptions,
        ...options
    };

    const globalHanderEvent = (event: any) => {
        globalHander(event.error);
    };

    const globalHander = (error: any, isFatal?: boolean) => {
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
            let hint: EventHint = {
                originalException: error
            };
            const syntheticException = (hint && hint.syntheticException) || undefined;
            const clientOptions = client.getOptions() as NativescriptClientOptions;
            hint = attachScreenshotToEventHint(hint, { attachScreenshot: clientOptions.attachScreenshot });
            const event = eventFromUnknownInput(clientOptions.stackParser, error, syntheticException, clientOptions.attachStacktrace);
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
    };

    const setup = (_client: Client): void => {
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

export type NativescriptErrorHandlersIntegration = ReturnType<typeof nativescriptErrorHandlersIntegration>;

/**
 * Returns the current NativescriptErrorHandlers integration.
 */
export function getCurrentNativescriptErrorHandlersIntegration(): NativescriptErrorHandlersIntegration | undefined {
    const client = getClient();
    if (!client) {
        return undefined;
    }

    return getNativescriptErrorHandlersIntegration(client);
}

/**
 * Returns NativescriptErrorHandlers integration of given client.
 */
export function getNativescriptErrorHandlersIntegration(client: Client): NativescriptErrorHandlersIntegration | undefined {
    return client.getIntegrationByName(INTEGRATION_NAME);
}
