import { Application } from '@nativescript/core';
import type { Client, EventHint, Integration, SeverityLevel } from '@sentry/core';
import { addBreadcrumb, addExceptionMechanism, debug, getClient } from '@sentry/core';
import type { NativescriptClientOptions } from '../options';
import { attachScreenshotToEventHint } from './screenshot';
import { eventFromUnknownInput } from '../utils/eventbuilder';

export const INTEGRATION_NAME = 'NativescriptErrorHandlers';

/** NativescriptErrorHandlers Options */
export interface NativescriptErrorHandlersOptions {
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;

/**
 * Runtimes 9.1+ dispatch the WHATWG error events (`error`, `unhandledrejection`,
 * `rejectionhandled`) on the global, carrying the actual thrown value (with
 * `nativeException` / `stackTrace` attached) instead of the legacy Application
 * events' lossy shape.
 */
const supportsGlobalErrorEvents = typeof global.ErrorEvent === 'function' && typeof global.addEventListener === 'function';

export const defaultNativescriptErrorHandlersOptions: NativescriptErrorHandlersOptions = {
    // On event-capable runtimes uncaught errors no longer crash the app, so the
    // native crash handler never sees them — these must be on or they are lost.
    onerror: supportsGlobalErrorEvents,
    onunhandledrejection: supportsGlobalErrorEvents
};

export interface NativescriptErrorHandlersState {
    handlingFatal: boolean;
}

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

    const globalHandlerEvent = (event: any) => {
        globalHandler(event.error);
    };

    const globalHandler = (error: any, mechanismType?: string, isFatal?: boolean) => {
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
            const clientOptions = client.getOptions() as NativescriptClientOptions;
            hint = attachScreenshotToEventHint(hint, { attachScreenshot: clientOptions.attachScreenshot });
            const event = eventFromUnknownInput(clientOptions.stackParser, error, hint.syntheticException ?? undefined, clientOptions.attachStacktrace);
            addExceptionMechanism(event); // defaults to { type: 'generic', handled: true }
            event.level = 'error';
            if (hint.event_id) {
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
                    globalHandler(error, 'onerror');
                });
            }
            if (finalOptions.onunhandledrejection) {
                global.addEventListener('unhandledrejection', (event: any) => {
                    const reason = event.reason !== undefined ? event.reason : new Error('Unhandled promise rejection (no reason)');
                    globalHandler(reason, 'onunhandledrejection');
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
        if (finalOptions.onunhandledrejection) {
            Application.on(Application.uncaughtErrorEvent, globalHandlerEvent);
        }
        if (finalOptions.onerror) {
            Application.on(Application.discardedErrorEvent, globalHandlerEvent);
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
