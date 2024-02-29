import { HttpClient, RewriteFrames } from '@sentry/integrations';
// import { Integrations as BrowserReactIntegrations } from '@sentry/react';
import type { Integration, StackFrame } from '@sentry/types';

import type { NativescriptClientOptions, NativescriptOptions } from '../options';
// import { HermesProfiling } from '../profiling/integration';
import { NativescriptTracing } from '../tracing';
// import { isExpoGo, notWeb } from '../utils/environment';
import { DeviceContext } from './devicecontext';
import { EventOrigin } from './eventorigin';
// import { ExpoContext } from './expocontext';
// import { ModulesLoader } from './modulesloader';
// import { NativeLinkedErrors } from './nativelinkederrors';
import { NativescriptErrorHandlers } from './nativescripterrorhandlers';
// import { ReactNativeInfo } from './reactnativeinfo';
import { Release } from './release';
// import { createReactNativeRewriteFrames } from './rewriteframes';
import { Screenshot } from './screenshot';
import { SdkInfo } from './sdkinfo';
// import { Spotlight } from './spotlight';
// import { ViewHierarchy } from './viewhierarchy';

export let rewriteFrameIntegration: {
    _iteratee: (frame: StackFrame) => StackFrame;
};
/**
 * Returns the default ReactNative integrations based on the current environment.
 *
 * Native integrations are only returned when native is enabled.
 *
 * Web integrations are only returned when running on web.
 */
export function getDefaultIntegrations(options: NativescriptClientOptions & NativescriptOptions): Integration[] {
    const integrations: Integration[] = [];
    const iteratee = (frame: StackFrame) => {
        if (frame.platform === 'javascript' && frame.filename) {
            let filename = frame.filename
                .replace(/^file\:\/\//, '')
                .replace(/^address at /, '')
                .replace(/^.*\/[^\.]+(\.app|CodePush|.*(?=\/))/, '');

            if (frame.filename.indexOf('[native code]') === -1) {
                const appPrefix = options.appPrefix ?? '~/';
                if (appPrefix.endsWith('//') && !appPrefix.endsWith('///')) {
                    filename = filename.indexOf('/') === 0 ? `${appPrefix}${filename}` : `${appPrefix}/${filename}`;
                } else {
                    filename = filename.indexOf('/') === 0 ? `${appPrefix}${filename.slice(1)}` : `${appPrefix}${filename}`;
                }
            }

            frame.filename = filename;
            if (options.colnoOffset) {
                frame.colno += options.colnoOffset;
            }
            // We always want to have a tripple slash
        }
        return frame;
    };

    rewriteFrameIntegration = new RewriteFrames({}) as any;
    rewriteFrameIntegration._iteratee = iteratee;

    // if (notWeb()) {
    integrations.push(new NativescriptErrorHandlers(options));
    // integrations.push(new NativeLinkedErrors());
    // } else {
    //     integrations.push(new BrowserReactIntegrations.TryCatch());
    //     integrations.push(new BrowserReactIntegrations.GlobalHandlers());
    //     integrations.push(new BrowserReactIntegrations.LinkedErrors());
    // }

    // @sentry/react default integrations
    // integrations.push(new BrowserReactIntegrations.InboundFilters());
    // integrations.push(new BrowserReactIntegrations.FunctionToString());
    // integrations.push(new BrowserReactIntegrations.Breadcrumbs());
    // integrations.push(new BrowserReactIntegrations.Dedupe());
    // integrations.push(new BrowserReactIntegrations.HttpContext());
    // end @sentry/react-native default integrations

    integrations.push(new Release());
    integrations.push(new EventOrigin());
    integrations.push(new SdkInfo());
    // integrations.push(new ReactNativeInfo());

    // if (__DEV__ && notWeb()) {
    //     integrations.push(new DebugSymbolicator());
    // }

    integrations.push(rewriteFrameIntegration as any);

    if (options.enableNative) {
        integrations.push(new DeviceContext());
        // integrations.push(new ModulesLoader());
        if (options.attachScreenshot) {
            integrations.push(new Screenshot());
        }
        // if (options.attachViewHierarchy) {
        //     integrations.push(new ViewHierarchy());
        // }
        // if (options._experiments && typeof options._experiments.profilesSampleRate === 'number') {
        //     integrations.push(new HermesProfiling());
        // }
    }

    // hasTracingEnabled from `@sentry/core` only check if tracesSampler or tracesSampleRate keys are present
    // that's different from prev imp here and might lead misconfiguration
    // `tracesSampleRate: undefined` should not enable tracing
    const hasTracingEnabled = options.enableTracing || typeof options.tracesSampleRate === 'number' || typeof options.tracesSampler === 'function';
    if (hasTracingEnabled && options.enableAutoPerformanceTracing) {
        integrations.push(new NativescriptTracing());
    }
    if (options.enableCaptureFailedRequests) {
        integrations.push(new HttpClient());
    }

    // if (isExpoGo()) {
    //     integrations.push(new ExpoContext());
    // }

    // if (options.enableSpotlight) {
    //     integrations.push(
    //         Spotlight({
    //             sidecarUrl: options.spotlightSidecarUrl,
    //         }),
    //     );
    // }

    return integrations;
}
