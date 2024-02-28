import { BaseClient } from '@sentry/core';
import { Envelope, Event, EventHint, SeverityLevel, UserFeedback } from '@sentry/types';
import { NativescriptClientOptions } from './options';
/**
 * The Sentry React Native SDK Client.
 *
 * @see NativescriptOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
export declare class NativescriptClient extends BaseClient<NativescriptClientOptions> {
    private _outcomesBuffer;
    /**
     * Creates a new React Native SDK instance.
     * @param options Configuration options for this SDK.
     */
    constructor(options: NativescriptClientOptions);
    /**
   * @inheritDoc
   */
    eventFromException(exception: unknown, hint?: EventHint): Promise<Event>;
    /**
   * @inheritDoc
   */
    eventFromMessage(message: string, level?: SeverityLevel, hint?: EventHint): PromiseLike<Event>;
    /**
   * If native client is available it will trigger a native crash.
   * Use this only for testing purposes.
   */
    nativeCrash(): void;
    /**
   * @inheritDoc
   */
    close(): PromiseLike<boolean>;
    flush(timeout?: number): Promise<boolean>;
    /**
   * Sends user feedback to Sentry.
   */
    captureUserFeedback(feedback: UserFeedback): void;
    /**
   * @inheritDoc
   */
    /**
   * Sets up the integrations
   */
    setupIntegrations(): void;
    /**
   * @inheritdoc
   */
    protected _sendEnvelope(envelope: Envelope): void;
    /**
 * Starts native client with dsn and options
 */
    private _initNativeSdk;
    /**
   * If the user is in development mode, and the native nagger is enabled then it will show an alert.
   */
    private _showCannotConnectDialog;
    /**
   * Attaches a client report from outcomes to the envelope.
   */
    private _attachClientReportTo;
}
