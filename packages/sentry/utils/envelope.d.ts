import { DsnComponents, EventEnvelope, SdkMetadata, UserFeedback } from '@sentry/types';
export declare const header = 0;
export declare const items = 1;
/**
   * Creates an envelope from a user feedback.
   */
export declare function createUserFeedbackEnvelope(feedback: UserFeedback, { metadata, tunnel, dsn, }: {
    metadata: SdkMetadata | undefined;
    tunnel: string | undefined;
    dsn: DsnComponents | undefined;
}): EventEnvelope;
