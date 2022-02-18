declare class NSSentrySDK extends SentrySDK {

    static alloc(): NSSentrySDK; // inherited from NSObject

    static captureEnvelope(envelope: SentryEnvelope): void;

    static new(): NSSentrySDK; // inherited from NSObject

    static storeEnvelope(envelope: SentryEnvelope): void;
}
