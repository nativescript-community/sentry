#import "NSSentry.h"
#import <Sentry/Sentry.h>

@implementation NSSentrySDK

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

@end
