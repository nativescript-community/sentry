
declare class NSSentrySDK extends SentrySDK {

    static alloc(): NSSentrySDK; // inherited from NSObject

    static captureEnvelope(envelope: SentryEnvelope): void;

    static envelopeWithData(data: NSData): SentryEnvelope;

    static new(): NSSentrySDK; // inherited from NSObject

    static storeEnvelope(envelope: SentryEnvelope): void;

    static readonly appStartMeasurement: SentryAppStartMeasurement;

    static readonly currentScreenFrames: SentryScreenFrames;

    static readonly installationID: string;

    static readonly isFramesTrackingRunning: boolean;
    static appStartMeasurementHybridSDKMode: boolean;
    static framesTrackingMeasurementHybridSDKMode: boolean;
}
