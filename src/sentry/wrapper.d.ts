import { Attachment, Breadcrumb, Envelope, Event, User } from '@sentry/types';
import { NativescriptOptions } from './options';

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
/**
 * This type describes serialized scope from sentry-cocoa and sentry-android
 * https://github.com/getsentry/sentry-cocoa/blob/master/Sources/Sentry/SentryScope.m
 * https://github.com/getsentry/sentry-java/blob/a461f7e125b65240004e6162b341f383ce2e1394/sentry-android-core/src/main/java/io/sentry/android/core/InternalSentrySdk.java#L32
 */
export interface NativeDeviceContextsResponse {
    [key: string]: unknown;
    tags?: Record<string, string>;
    extra?: Record<string, unknown>;
    contexts?: Record<string, Record<string, unknown>>;
    user?: {
        userId?: string;
        email?: string;
        username?: string;
        ipAddress?: string;
        segment?: string;
        data?: Record<string, unknown>;
    };
    dist?: string;
    environment?: string;
    fingerprint?: string[];
    level?: string;
    breadcrumbs?: {
        level?: string;
        timestamp?: string;
        category?: string;
        type?: string;
        message?: string;
        data?: Record<string, unknown>;
    }[];
}

export interface NativeScreenshot {
    data: Uint8Array;
    contentType: string;
    filename: string;
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

    function enableNativeFramesTracking();
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

    function setUser(user: User | null);
    function setTag(key: string, value: string);

    function setExtra(key: string, extra: any);

    function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number);
    function addAttachment(attachment: Attachment);

    function clearBreadcrumbs();

    function setContext(key: string, context: { [key: string]: any } | null);

    function utf8ToBytes(str: string): Uint8Array;

    function captureScreenshot(fileName?: string): NativeScreenshot[];
}
