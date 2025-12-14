/* eslint-disable max-lines */
import { instrumentOutgoingRequests } from '@sentry/browser';
import type { Client, Event, Integration, StartSpanOptions } from '@sentry/core';
import { getClient } from '@sentry/core';
import { addDefaultOpForSpanFrom, addThreadInfoToSpan, defaultIdleOptions } from './span';

export const INTEGRATION_NAME = 'NativescriptTracing';

export interface NativescriptTracingOptions {
    /**
     * The time that has to pass without any span being created.
     * If this time is exceeded, the idle span will finish.
     *
     * @default 1_000 (ms)
     */
    idleTimeoutMs?: number;

    /**
     * The max. time an idle span may run.
     * If this time is exceeded, the idle span will finish no matter what.
     *
     * @default 60_0000 (ms)
     */
    finalTimeoutMs?: number;

    /**
     * Flag to disable patching all together for fetch requests.
     *
     * Fetch in React Native is a `whatwg-fetch` polyfill which uses XHR under the hood.
     * This causes duplicates when both `traceFetch` and `traceXHR` are enabled at the same time.
     *
     * @default false
     */
    traceFetch: boolean;

    /**
     * Flag to disable patching all together for xhr requests.
     *
     * @default true
     */
    traceXHR: boolean;

    /**
     * If true, Sentry will capture http timings and add them to the corresponding http spans.
     *
     * @default true
     */
    enableHTTPTimings: boolean;

    /**
     * A callback which is called before a span for a navigation is started.
     * It receives the options passed to `startSpan`, and expects to return an updated options object.
     */
    beforeStartSpan?: (options: StartSpanOptions) => StartSpanOptions;

    /**
     * This function will be called before creating a span for a request with the given url.
     * Return false if you don't want a span for the given url.
     *
     * @default (url: string) => true
     */
    shouldCreateSpanForRequest?(this: void, url: string): boolean;
}

function getDefaultTracePropagationTargets(): RegExp[] | undefined {
    return [/.*/];
}

export const defaultNativescriptTracingOptions: NativescriptTracingOptions = {
    // all fetch requests are xhr under the hood in NativeScript because of whatwg-fetch polyfill
    traceFetch: false,
    traceXHR: true,
    enableHTTPTimings: true
};

export interface NativescriptTracingState {
    currentRoute: string | undefined;
}

export const nativescriptTracingIntegration = (
    options: Partial<NativescriptTracingOptions> = {}
): Integration & {
    options: NativescriptTracingOptions;
    state: NativescriptTracingState;
    setCurrentRoute: (route: string) => void;
} => {
    const state: NativescriptTracingState = {
        currentRoute: undefined
    };

    const finalOptions = {
        ...defaultNativescriptTracingOptions,
        ...options,
        beforeStartSpan: options.beforeStartSpan ?? ((options: StartSpanOptions) => options),
        finalTimeoutMs: options.finalTimeoutMs ?? defaultIdleOptions.finalTimeout,
        idleTimeoutMs: options.idleTimeoutMs ?? defaultIdleOptions.idleTimeout
    };

    const userShouldCreateSpanForRequest = finalOptions.shouldCreateSpanForRequest;

    // Drop Dev Server Spans
    const devServerUrl = undefined;
    const finalShouldCreateSpanForRequest =
        devServerUrl === undefined
            ? userShouldCreateSpanForRequest
            : (url: string): boolean => {
                  if (url.startsWith(devServerUrl)) {
                      return false;
                  }
                  if (userShouldCreateSpanForRequest) {
                      return userShouldCreateSpanForRequest(url);
                  }
                  return true;
              };

    finalOptions.shouldCreateSpanForRequest = finalShouldCreateSpanForRequest;

    const setup = (client: Client): void => {
        addDefaultOpForSpanFrom(client);
        addThreadInfoToSpan(client);

        instrumentOutgoingRequests(client, {
            traceFetch: finalOptions.traceFetch,
            traceXHR: finalOptions.traceXHR,
            shouldCreateSpanForRequest: finalOptions.shouldCreateSpanForRequest,
            tracePropagationTargets: client.getOptions().tracePropagationTargets || getDefaultTracePropagationTargets()
        });
    };

    const processEvent = (event: Event): Event => {
        if (event.contexts && state.currentRoute) {
            event.contexts.app = { view_names: [state.currentRoute], ...event.contexts.app };
        }
        return event;
    };

    return {
        name: INTEGRATION_NAME,
        setup,
        processEvent,
        options: finalOptions,
        state,
        setCurrentRoute: (route: string) => {
            state.currentRoute = route;
        }
    };
};

export type NativescriptTracingIntegration = ReturnType<typeof nativescriptTracingIntegration>;

/**
 * Returns the current Nativescript Tracing integration.
 */
export function getCurrentNativescriptTracingIntegration(): NativescriptTracingIntegration | undefined {
    const client = getClient();
    if (!client) {
        return undefined;
    }

    return getNativescriptTracingIntegration(client);
}

/**
 * Returns Nativescript Tracing integration of given client.
 */
export function getNativescriptTracingIntegration(client: Client): NativescriptTracingIntegration | undefined {
    return client.getIntegrationByName(INTEGRATION_NAME);
}
