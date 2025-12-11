import type { Breadcrumb, Envelope, User } from '@sentry/core';
import { NativescriptOptions } from './options';
export declare namespace NATIVE {
    function isNativeTransportAvailable(): boolean;
    function sendEnvelope(envelope: Envelope): Promise<void>;
    function prepareEnvelope(envelope: Envelope): number[];
    function prepareEnvelopeNative(envelope: Envelope): Uint8Array<any>;
    function captureEnvelope(envelope: string | Uint8Array | number[], { store }?: {
        store?: boolean;
    }): Promise<boolean>;
    function flush(timeout?: number): void;
    function initNativeSdk(originalOptions?: NativescriptOptions): Promise<boolean>;
    function disableNativeFramesTracking(): void;
    function enableNativeFramesTracking(): void;
    function fetchNativeSdkInfo(): {
        name: string;
        version: string;
    };
    function fetchNativeRelease(): any;
    function closeNativeSdk(): Promise<void>;
    function nativeCrash(): void;
    function fetchNativeDeviceContexts(): Promise<any>;
    function captureScreenshot(fileName?: string): {
        contentType: string;
        data: Uint8Array<any>;
        filename: string;
    }[];
    function fetchNativeFrames(): Promise<{
        totalFrames: number;
        slowFrames: number;
        frozenFrames: number;
    }>;
    function fetchNativeAppStart(): Promise<{
        appStartTime: number;
        isColdStart: java.lang.Boolean;
        didFetchAppStart: boolean;
    }>;
    function setUser(user: User | null): void;
    function setTag(key: string, value: string): void;
    function setExtra(key: string, extra: any): void;
    function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number): void;
    function clearBreadcrumbs(): void;
    function setContext(key: string, context: {
        [key: string]: any;
    } | null): void;
    function crashedLastRun(): Promise<java.lang.Boolean>;
}
