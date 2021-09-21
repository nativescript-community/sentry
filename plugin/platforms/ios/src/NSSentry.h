#import <Sentry/Sentry.h>


@interface NSSentrySDK: SentrySDK

+ (void)captureEnvelope:(SentryEnvelope *)envelope;

+ (void)storeEnvelope:(SentryEnvelope *)envelope;


@end