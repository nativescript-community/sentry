import { eventFromException, eventFromMessage,makeFetchTransport } from '@sentry/browser';import { BrowserTransportOptions } from '@sentry/browser/types/transports/types';
import { FetchImpl } from '@sentry/browser/types/transports/utils';
import { BaseClient } from '@sentry/core';

import { ClientReportEnvelope, ClientReportItem, Envelope, Event, EventHint, Exception, Outcome, SeverityLevel, Thread, Transport, UserFeedback } from '@sentry/types';
import { SentryError, dateTimestampInSeconds, logger } from '@sentry/utils';

import { alert } from '@nativescript/core';
import { createIntegration } from './integrations/factory';
import { defaultSdkInfo } from './integrations/sdkinfo';
import { NativescriptClientOptions } from './options';
import { NativeTransport } from './transports/native';
import { createUserFeedbackEnvelope, items } from './utils/envelope';
import { mergeOutcomes } from './utils/outcome';
import { NATIVE } from './wrapper';
import { Screenshot } from './integrations/screenshot';
import { NativescriptTracing } from './tracing';
import { rewriteFrameIntegration } from './integrations/default';


/**
 * The Sentry React Native SDK Client.
 *
 * @see NativescriptOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
export class NativescriptClient extends BaseClient<NativescriptClientOptions> {
    private _outcomesBuffer: Outcome[];
    // private readonly _browserClient: BrowserClient;

    /**
     * Creates a new React Native SDK instance.
     * @param options Configuration options for this SDK.
     */
    public constructor(options: NativescriptClientOptions) {
        if (!options.transport) {
            options.transport = (options: BrowserTransportOptions, nativeFetch?: FetchImpl): Transport => {
                if (NATIVE.isNativeTransportAvailable()) {
                    return new NativeTransport();
                }
                return makeFetchTransport(options, nativeFetch);
            };
        }
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || defaultSdkInfo;
        super(options);

        this._outcomesBuffer = [];
        this._initNativeSdk();
    }

    /**
   * @inheritDoc
   */
    public eventFromException(exception: unknown, hint?: EventHint): PromiseLike<Event> {
        // N put stackTrace in "stackTrace" instead of "stacktrace"
        if (exception['stackTrace']) {
            exception['stacktrace'] = exception['stackTrace'];
        }
        const hintWithScreenshot =  Screenshot.attachScreenshotToEventHint(hint, this._options);
        return eventFromException(
            this._options.stackParser,
            exception,
            hintWithScreenshot,
            this._options.attachStacktrace,
        );
        // return this._browserClient.eventFromException(exception, hint);
    }

    /**
   * @inheritDoc
   */
    public eventFromMessage(message: string, level?: SeverityLevel, hint?: EventHint): PromiseLike<Event> {
        return eventFromMessage(
            this._options.stackParser,
            message,
            level,
            hint,
            this._options.attachStacktrace,
        ).then((event: Event) => {
        // TMP! Remove this function once JS SDK uses threads for messages
            if (!event.exception?.values || event.exception.values.length <= 0) {
                return event;
            }
            const values = event.exception.values.map((exception: Exception): Thread => {
                if (exception.stacktrace) {
                    exception.stacktrace.frames.forEach((frame) => rewriteFrameIntegration._iteratee(frame));
                }
                return {
                    stacktrace: exception.stacktrace,
                };
            });
            (event as { threads?: { values: Thread[] } }).threads = { values };
            delete event.exception;
            return event;
        });
    }

    /**
   * If native client is available it will trigger a native crash.
   * Use this only for testing purposes.
   */
    public nativeCrash(): void {
        NATIVE.nativeCrash();
    }

    /**
   * @inheritDoc
   */
    public close(): PromiseLike<boolean> {
    // As super.close() flushes queued events, we wait for that to finish before closing the native SDK.
        return super.close().then((result: boolean) => NATIVE.closeNativeSdk().then(() => result) as PromiseLike<boolean>);
    }

    public async flush(timeout?: number): Promise<boolean> {
        const result = await super.flush(timeout);
        NATIVE.flush(timeout);
        return result;
    }
    /**
   * Sends user feedback to Sentry.
   */
    public captureUserFeedback(feedback: UserFeedback): void {
        const envelope = createUserFeedbackEnvelope(
            feedback,
            {
                metadata: this._options._metadata,
                dsn: this.getDsn(),
                tunnel: this._options.tunnel,
            },
        );
        this._sendEnvelope(envelope);
    }

    /**
   * @inheritDoc
   */
    // sendEvent(event: Event, hint = {}) {
    //     if (this._dsn) {
    //         if (NATIVE.sendEvent) {
    //             NATIVE.sendEvent(event, hint);
    //         } else {
    //             super.sendEvent(event, hint);
    //         }
    //     }
    // }

    /**
   * Sets up the integrations
   */
    public setupIntegrations(): void {
        super.setupIntegrations();
        const tracing = this.getIntegration(NativescriptTracing);
        const routingName = tracing?.options.routingInstrumentation?.name;
        if (routingName) {
            this.addIntegration(createIntegration(routingName));
        }
        const enableUserInteractionTracing = tracing?.options.enableUserInteractionTracing;
        if (enableUserInteractionTracing) {
            this.addIntegration(createIntegration('ReactNativeUserInteractionTracing'));
        }
    }

    /**
   * @inheritdoc
   */
    protected _sendEnvelope(envelope: Envelope): void {
        const outcomes = this._clearOutcomes();
        this._outcomesBuffer = mergeOutcomes(this._outcomesBuffer, outcomes);

        if (this._options.sendClientReports) {
            this._attachClientReportTo(this._outcomesBuffer, envelope as ClientReportEnvelope);
        }

        let shouldClearOutcomesBuffer = true;
        if (this._isEnabled() && this._transport && this._dsn) {
            this.emit('beforeEnvelope', envelope);
            this._transport.send(envelope)
                .then(null, reason => {
                    if (reason instanceof SentryError) { // SentryError is thrown by SyncPromise
                        shouldClearOutcomesBuffer = false;
                        // If this is called asynchronously we want the _outcomesBuffer to be cleared
                        logger.error('SentryError while sending event, keeping outcomes buffer:', reason);
                    } else {
                        logger.error('Error while sending event:', reason);
                    }
                });
        } else {
            logger.error('Transport disabled');
        }

        if (shouldClearOutcomesBuffer) {
            this._outcomesBuffer = []; // if send fails synchronously the _outcomesBuffer will stay intact
        }
    }

    /**
 * Starts native client with dsn and options
 */
    private async _initNativeSdk(): Promise<void> {
        let didCallNativeInit = false;

        try {
            didCallNativeInit = await NATIVE.initNativeSdk(this._options);
        } catch (_) {
            this._showCannotConnectDialog();

            this._options.onReady?.({ didCallNativeInit: false });

            return;
        }
        this._options.onReady?.({ didCallNativeInit });
    }

    /**
   * If the user is in development mode, and the native nagger is enabled then it will show an alert.
   */
    private _showCannotConnectDialog(): void {
        if (__DEV__ && this._options.enableNativeNagger) {
            alert({
                title:'Sentry',
                message:'Warning, could not connect to Sentry native SDK.\nIf you do not want to use the native component please pass `enableNative: false` in the options.\nVisit: https://docs.sentry.io/platforms/react-native/#linking for more details.'}
            );
        }
    }

    /**
   * Attaches a client report from outcomes to the envelope.
   */
    private _attachClientReportTo(outcomes: Outcome[], envelope: ClientReportEnvelope): void {
        if (outcomes.length > 0) {
            const clientReportItem: ClientReportItem = [
                { type: 'client_report' },
                {
                    timestamp: dateTimestampInSeconds(),
                    discarded_events: outcomes,
                },
            ];

            envelope[items].push(clientReportItem);
        }
    }
}
