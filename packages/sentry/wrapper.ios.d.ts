import { Envelope } from '@sentry/types';
import { NativescriptOptions } from './options';
export declare namespace NATIVE {
    function isNativeTransportAvailable(): boolean;
    function fetchNativeSdkInfo(): {
        name: string;
        version: string;
    };
    function fetchNativeRelease(): any;
    function closeNativeSdk(): void;
    /**
   * Sending the envelope over the bridge to native
   * @param envelope Envelope
   */
    function sendEnvelope(envelope: Envelope): Promise<void>;
    function initNativeSdk(originalOptions?: NativescriptOptions): Promise<boolean>;
    function nativeCrash(): void;
    function flush(timeout: number): void;
    function fetchNativeDeviceContexts(): Promise<any>;
    function enableNativeFramesTracking(): void;
    function disableNativeFramesTracking(): void;
    function fetchNativeAppStart(): Promise<{
        isColdStart: boolean;
        appStartTime: number;
        didFetchAppStart: boolean;
    }>;
    function fetchNativeFrames(): Promise<{
        totalFrames: number;
        slowFrames: number;
        frozenFrames: number;
    }>;
    function captureScreenshot(fileName?: string): any[];
}
