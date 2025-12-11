/* eslint-disable max-lines */
import { instrumentOutgoingRequests } from '@sentry/browser';
import { getClient } from '@sentry/core';
import { addDefaultOpForSpanFrom, addThreadInfoToSpan, defaultIdleOptions } from './span';
export const INTEGRATION_NAME = 'NativescriptTracing';
function getDefaultTracePropagationTargets() {
    return [/.*/];
}
export const defaultNativescriptTracingOptions = {
    // all fetch requests are xhr under the hood in NativeScript because of whatwg-fetch polyfill
    traceFetch: false,
    traceXHR: true,
    enableHTTPTimings: true
};
export const nativescriptTracingIntegration = (options = {}) => {
    const state = {
        currentRoute: undefined
    };
    const finalOptions = {
        ...defaultNativescriptTracingOptions,
        ...options,
        beforeStartSpan: options.beforeStartSpan ?? ((options) => options),
        finalTimeoutMs: options.finalTimeoutMs ?? defaultIdleOptions.finalTimeout,
        idleTimeoutMs: options.idleTimeoutMs ?? defaultIdleOptions.idleTimeout
    };
    const userShouldCreateSpanForRequest = finalOptions.shouldCreateSpanForRequest;
    // Drop Dev Server Spans
    const devServerUrl = undefined;
    const finalShouldCreateSpanForRequest = devServerUrl === undefined
        ? userShouldCreateSpanForRequest
        : (url) => {
            if (url.startsWith(devServerUrl)) {
                return false;
            }
            if (userShouldCreateSpanForRequest) {
                return userShouldCreateSpanForRequest(url);
            }
            return true;
        };
    finalOptions.shouldCreateSpanForRequest = finalShouldCreateSpanForRequest;
    const setup = (client) => {
        addDefaultOpForSpanFrom(client);
        addThreadInfoToSpan(client);
        instrumentOutgoingRequests(client, {
            traceFetch: finalOptions.traceFetch,
            traceXHR: finalOptions.traceXHR,
            shouldCreateSpanForRequest: finalOptions.shouldCreateSpanForRequest,
            tracePropagationTargets: client.getOptions().tracePropagationTargets || getDefaultTracePropagationTargets()
        });
    };
    const processEvent = (event) => {
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
        setCurrentRoute: (route) => {
            state.currentRoute = route;
        }
    };
};
/**
 * Returns the current Nativescript Tracing integration.
 */
export function getCurrentNativescriptTracingIntegration() {
    const client = getClient();
    if (!client) {
        return undefined;
    }
    return getNativescriptTracingIntegration(client);
}
/**
 * Returns Nativescript Tracing integration of given client.
 */
export function getNativescriptTracingIntegration(client) {
    return client.getIntegrationByName(INTEGRATION_NAME);
}
//# sourceMappingURL=nstracing.js.map