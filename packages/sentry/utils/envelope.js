import { createEnvelope, dsnToString } from '@sentry/utils';
export const header = 0;
export const items = 1;
/**
   * Creates an envelope from a user feedback.
   */
export function createUserFeedbackEnvelope(feedback, { metadata, tunnel, dsn, }) {
    const headers = Object.assign(Object.assign({ event_id: feedback.event_id, sent_at: new Date().toISOString() }, (metadata && metadata.sdk && { sdk: {
            name: metadata.sdk.name,
            version: metadata.sdk.version,
        } })), (!!tunnel && !!dsn && { dsn: dsnToString(dsn) }));
    const item = createUserFeedbackEnvelopeItem(feedback);
    return createEnvelope(headers, [item]);
}
function createUserFeedbackEnvelopeItem(feedback) {
    const feedbackHeaders = {
        type: 'user_report',
    };
    return [feedbackHeaders, feedback];
}
//# sourceMappingURL=envelope.js.map