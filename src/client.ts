import { BaseClient, Scope } from '@sentry/core';

import { NativescriptBackend, NativescriptOptions } from './backend';
import { NSSentry } from './nssentry';

/**
 * The Sentry React Native SDK Client.
 *
 * @see NativescriptOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
export class NativescriptClient extends BaseClient<NativescriptBackend, NativescriptOptions> {
    /**
     * Creates a new React Native SDK instance.
     * @param options Configuration options for this SDK.
     */
    public constructor(options: NativescriptOptions) {
        super(NativescriptBackend, options);
    }

    /**
   * If native client is available it will trigger a native crash.
   * Use this only for testing purposes.
   */
    public nativeCrash(): void {
        this._getBackend().nativeCrash();
    }

    /**
   * @inheritDoc
   */
    public close(): PromiseLike<boolean> {
    // As super.close() flushes queued events, we wait for that to finish before closing the native SDK.
        return super.close().then((result: boolean) => NSSentry.closeNativeSdk().then(() => result) as PromiseLike<boolean>);
    }
}
