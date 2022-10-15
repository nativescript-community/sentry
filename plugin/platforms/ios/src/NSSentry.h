#import <Sentry/Sentry.h>

@interface NSSentrySDK: SentrySDK
+ (void)captureEnvelope:(SentryEnvelope *)envelope;
+ (void)storeEnvelope:(SentryEnvelope *)envelope;
+ (nullable SentryEnvelope *)envelopeWithData:(NSData *)data;

@property (class, nonatomic, readonly, copy) NSString *installationID;
@property (class, nonatomic, assign, readonly) BOOL isFramesTrackingRunning;

@property (class, nonatomic, assign, readonly) SentryScreenFrames *currentScreenFrames;
@property (class, nullable, nonatomic, readonly) SentryAppStartMeasurement *appStartMeasurement;
@property (class, nonatomic, assign) BOOL appStartMeasurementHybridSDKMode;
@property (class, nonatomic, assign) BOOL framesTrackingMeasurementHybridSDKMode;

@end