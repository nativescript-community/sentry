import { Envelope } from '@sentry/types';
import { NativescriptOptions } from './options';
export declare namespace NATIVE {
    function isNativeTransportAvailable(): boolean;
    function sendEnvelope(envelope: Envelope): Promise<void>;
    function prepareEnvelope(envelope: Envelope): number[];
    function prepareEnvelopeNative(envelope: Envelope): Uint8Array;
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
    function closeNativeSdk(): void;
    function nativeCrash(): void;
    function fetchNativeDeviceContexts(): Promise<any>;
    function captureScreenshot(fileName?: string): {
        contentType: string;
        data: Uint8Array;
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
}
