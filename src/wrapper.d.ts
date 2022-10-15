import {
    Attachment,
    AttachmentItem,
    BaseEnvelopeItemHeaders,
    Breadcrumb,
    ClientReportItem,
    Envelope,
    Event,
    EventItem,
    Package,
    SessionItem,
    SeverityLevel,
    User,
    UserFeedbackItem,
} from '@sentry/types';
import { NativescriptOptions } from './options';
import { SentryError, logger } from '@sentry/utils';
import { Hub, Scope } from '@sentry/core';

export interface NativeAppStartResponse {
    isColdStart: boolean;
    appStartTime: number;
    didFetchAppStart: boolean;
}

export interface NativeFramesResponse {
    totalFrames: number;
    slowFrames: number;
    frozenFrames: number;
}

export interface NativeReleaseResponse {
    build: string;
    id: string;
    version: string;
}
export interface UserFeedback {
    eventId: string;
    comments?: string;
    email?: string;
    name?: string;
}

export namespace NATIVE {
    const nativeClientAvailable: boolean;
    const nativeTransport: boolean;
    let enableNative: boolean;
    function sendEvent(event: Event, hint?): Promise<boolean>;
    function sendEnvelope(envelope: Envelope): Promise<void>;
    function initNativeSdk(options: NativescriptOptions): Promise<boolean>;
    function closeNativeSdk(): Promise<void>;
    function nativeCrash();
    function flush(timeout: number);
    function fetchNativeDeviceContexts(): Promise<any>;
    function captureUserFeedback(feedback: UserFeedback);
    function isNativeTransportAvailable(): boolean;

    function disableNativeFramesTracking();
    function fetchNativeSdkInfo(): any;
    function fetchNativeRelease(): any;
    function fetchNativeFrames(): Promise<{
        totalFrames;
        slowFrames;
        frozenFrames;
    }>;
    function fetchNativeAppStart(): Promise<{
        isColdStart;
        appStartTime;
        didFetchAppStart;
    }>;
    function closeNativeSdk();

    function setUser(user: User | null);
    function setTag(key: string, value: string);

    function setExtra(key: string, extra: any);

    function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number);
    function addAttachment(attachment: Attachment);

    function clearBreadcrumbs();

    function setContext(key: string, context: { [key: string]: any } | null);

    function withScope(callback: (scope: Scope) => void): ReturnType<Hub['withScope']>;

    function utf8ToBytes(str: string): Uint8Array;
}
