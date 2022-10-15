#import "NSSentry.h"
#import <Sentry/Sentry.h>

@implementation NSSentrySDK

+ (void)captureEnvelope:(SentryEnvelope *)envelope
{
    return [PrivateSentrySDKOnly captureEnvelope:envelope];
}
+ (void)storeEnvelope:(SentryEnvelope *)envelope
{
    return [PrivateSentrySDKOnly storeEnvelope:envelope];
}
+ (nullable SentryEnvelope *)envelopeWithData:(NSData *)data
{
    return [PrivateSentrySDKOnly envelopeWithData:data];
}

+ (NSString *)installationID
{
    return [PrivateSentrySDKOnly installationID];
}

+ (nullable SentryAppStartMeasurement *)appStartMeasurement
{
    return [PrivateSentrySDKOnly appStartMeasurement];
}

+ (SentryScreenFrames *)currentScreenFrames
{
    return [PrivateSentrySDKOnly currentScreenFrames];
}

+ (BOOL)isFramesTrackingRunning
{
    return [PrivateSentrySDKOnly isFramesTrackingRunning];
}
+ (void)setAppStartMeasurementHybridSDKMode:(BOOL)appStartMeasurementHybridSDKMode
{
    [PrivateSentrySDKOnly setAppStartMeasurementHybridSDKMode:appStartMeasurementHybridSDKMode];
}
+ (void)setFramesTrackingMeasurementHybridSDKMode:(BOOL)framesTrackingMeasurementHybridSDKMode
{
    [PrivateSentrySDKOnly setFramesTrackingMeasurementHybridSDKMode:framesTrackingMeasurementHybridSDKMode];
}
@end
