import { Integrations, defaultIntegrations, getCurrentHub } from '@sentry/browser';
import { initAndBind, setExtra } from '@sentry/core';
import { Hub, makeMain } from '@sentry/hub';
import { RewriteFrames } from '@sentry/integrations';
import { StackFrame } from '@sentry/types';

import { NativescriptOptions } from './backend';
import { NativescriptClient } from './client';
import { NativescriptScope } from './scope';
import { DebugSymbolicator, DeviceContext, NativescriptErrorHandlers, Release } from './integrations';
import { EventOrigin } from './integrations/eventorigin';
import { SdkInfo } from './integrations/sdkinfo';

const IGNORED_DEFAULT_INTEGRATIONS = [
    'GlobalHandlers', // We will use the react-native internal handlers
    'Breadcrumbs', // We add it later, just not patching fetch
    'CaptureConsole', // We add it later, just not patching fetch
    'TryCatch' // We don't need this
];

export let rewriteFrameIntegration: {
    _iteratee: (frame: StackFrame) => StackFrame;
};
/**
 * Inits the SDK
 */
export function init(
    options: NativescriptOptions = {
        flushSendEvent: true,
        enableNative: true,
        enableNativeCrashHandling: true,
        enableAutoPerformanceTracking: true
    }
): void {
    const nativescriptHub = new Hub(undefined, new NativescriptScope());
    makeMain(nativescriptHub);
    // tslint:disable: strict-comparisons
    if (options.defaultIntegrations === undefined) {
        rewriteFrameIntegration = new RewriteFrames({
            iteratee: (frame: StackFrame) => {
                if (frame.filename) {
                    let filename = (frame.filename = frame.filename
                        .replace(/^file\:\/\//, '')
                        .replace(/^address at /, '')
                        .replace(/^.*\/[^\.]+(\.app|CodePush|.*(?=\/))/, ''));

                    // const appPrefix = 'app://';
                    if (frame.filename.indexOf('[native code]') === -1) {
                        const appPrefix = options.appPrefix || '';
                        if (appPrefix.endsWith('//') && !appPrefix.endsWith('///')) {
                            filename = frame.filename.indexOf('/') === 0 ? `${appPrefix}${frame.filename}` : `${appPrefix}/${frame.filename}`;
                        } else {
                            filename = frame.filename.indexOf('/') === 0 ? `${appPrefix}${frame.filename.slice(1)}` : `${appPrefix}${frame.filename}`;
                        }
                    }

                    frame.filename = filename;
                    // We always want to have a tripple slash
                }
                return frame;
            }
        }) as any;
        options.defaultIntegrations = [
            new NativescriptErrorHandlers(options),
            new Release(),
            ...defaultIntegrations.filter((i) => !IGNORED_DEFAULT_INTEGRATIONS.includes(i.name)),
            new Integrations.Breadcrumbs({
                console: false,
                xhr: false,
                dom: false,
                fetch: false,
                ...(options.breadcrumbs || {})
            }),
            rewriteFrameIntegration as any,
            new EventOrigin(),
            new SdkInfo()
        ];
    }
    if (options.enableNative === undefined) {
        options.enableNative = true;
    }
    if (options.enableNativeCrashHandling === undefined) {
        options.enableNativeCrashHandling = true;
    }
    // if (options.enableNativeNagger === undefined) {
    //     options.enableNativeNagger = true;
    // }
    initAndBind(NativescriptClient, options);
}

/**
 * Sets the release on the event.
 */
export function setRelease(release: string): void {
    setExtra('__sentry_release', release);
}

/**
 * Sets the dist on the event.
 */
export function setDist(dist: string): void {
    setExtra('__sentry_dist', dist);
}

/**
 * If native client is available it will trigger a native crash.
 * Use this only for testing purposes.
 */
export function nativeCrash(): void {
    const client = getCurrentHub().getClient<NativescriptClient>();
    if (client) {
        client.nativeCrash();
    }
}

/**
 * Flushes all pending events in the queue to disk.
 * Use this before applying any realtime updates such as code-push or expo updates.
 */
export async function flush(): Promise<boolean> {
    try {
        const client = getCurrentHub().getClient<NativescriptClient>();

        if (client) {
            const result = await client.flush();

            return result;
        }
        // eslint-disable-next-line no-empty
    } catch (_) {}

    console.error('Failed to flush the event queue.');

    return false;
}

/**
 * Closes the SDK, stops sending events.
 */
export async function close(): Promise<void> {
    try {
        const client = getCurrentHub().getClient<NativescriptClient>();

        if (client) {
            await client.close();
        }
    } catch (e) {
        console.error('Failed to close the SDK');
    }
}
