
declare class NSSentrySDK extends SentrySDK {

    static alloc(): NSSentrySDK; // inherited from NSObject

    static captureEnvelope(envelope: SentryEnvelope): void;

    static envelopeWithData(data: NSData): SentryEnvelope;

    static new(): NSSentrySDK; // inherited from NSObject

    static storeEnvelope(envelope: SentryEnvelope): void;

    static readonly appStartMeasurement: SentryAppStartMeasurement;

    static appStartMeasurementHybridSDKMode: boolean;

    static readonly currentScreenFrames: SentryScreenFrames;

    static framesTrackingMeasurementHybridSDKMode: boolean;

    static readonly installationID: string;

    static readonly isFramesTrackingRunning: boolean;
}
