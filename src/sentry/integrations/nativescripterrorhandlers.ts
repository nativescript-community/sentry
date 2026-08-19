import { Application } from '@nativescript/core';
import type { Client, EventHint, Integration, SeverityLevel } from '@sentry/core';
import { addBreadcrumb, addExceptionMechanism, debug, getClient } from '@sentry/core';
import type { NativescriptClientOptions } from '../options';
import { attachScreenshotToEventHint } from './screenshot';
import { eventFromUnknownInput } from '../utils/eventbuilder';

export const INTEGRATION_NAME = 'NativescriptErrorHandlers';

/** NativescriptErrorHandlers Options */
export interface NativescriptErrorHandlersOptions {
    // traceErrorHandler?: boolean;
    // uncaughtErrors?: boolean;

    /**
     * Capture uncaught errors.
     *
     * On runtimes dispatching the global WHATWG error events (9.1+) this listens
     * to `globalThis` `error` events and defaults to `true` — uncaught errors no
     * longer crash the app there, so nothing else would report them. On older
     * runtimes it listens to `Application.discardedErrorEvent` and defaults to `false`.
     */
    onerror?: boolean;

    /**
     * Capture unhandled promise rejections.
     *
     * On runtimes dispatching the global WHATWG error events (9.1+) this listens
     * to `globalThis` `unhandledrejection` events (and leaves a breadcrumb on
     * `rejectionhandled`) and defaults to `true`. On older runtimes it listens to
     * `Application.uncaughtErrorEvent` and defaults to `false`.
     */
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

/**
 * Runtimes 9.1+ dispatch the WHATWG error events (`error`, `unhandledrejection`,
 * `rejectionhandled`) on the global, carrying the actual thrown value (with
 * `nativeException` / `stackTrace` attached) instead of the legacy Application
 * events' lossy shape.
 */
const supportsGlobalErrorEvents = typeof global.ErrorEvent === 'function' && typeof global.addEventListener === 'function';

export const defaultNativescriptErrorHandlersOptions: NativescriptErrorHandlersOptions = {
    // uncaughtErrors: false,
    // On event-capable runtimes uncaught errors no longer crash the app, so the
    // native crash handler never sees them — these must be on or they are lost.
    onerror: supportsGlobalErrorEvents,
    onunhandledrejection: supportsGlobalErrorEvents,
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

    const globalHander = (error: any, mechanismType?: string, isFatal?: boolean) => {
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

            if (mechanismType) {
                addExceptionMechanism(event, {
                    handled: false,
                    type: mechanismType
                });
            }
            if (isFatal) {
                event.level = 'fatal' as SeverityLevel;
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
        if (supportsGlobalErrorEvents) {
            // The runtime dispatches these before (and regardless of) the legacy
            // Application events, with the actual thrown value on the event —
            // don't also subscribe to the Application events or every error
            // would be captured twice.
            // The `nativeuncaughterror` event (Android) is deliberately not
            // captured here: sentry-android's own UncaughtExceptionHandlerIntegration
            // already reports that crash natively.
            if (finalOptions.onerror) {
                global.addEventListener('error', (event: any) => {
                    // The thrown value can be anything; a wrapped native exception
                    // (NSException/Throwable) is not an Error and has no `error` at all
                    // in the degenerate case — fall back to the event message.
                    const error = event.error !== undefined ? event.error : new Error(event.message);
                    globalHander(error, 'onerror');
                });
            }
            if (finalOptions.onunhandledrejection) {
                global.addEventListener('unhandledrejection', (event: any) => {
                    const reason = event.reason !== undefined ? event.reason : new Error('Unhandled promise rejection (no reason)');
                    globalHander(reason, 'onunhandledrejection');
                });
                // Already captured via unhandledrejection; leave a trail that it
                // was eventually handled so triage can deprioritize it.
                global.addEventListener('rejectionhandled', (event: any) => {
                    addBreadcrumb({
                        category: 'promise',
                        level: 'info',
                        message: `Late-handled promise rejection: ${event.reason?.message ?? event.reason}`
                    });
                });
            }
            return;
        }

        // Legacy runtimes: only the Application events are available.
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
