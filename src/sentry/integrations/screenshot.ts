import type { EventHint, Integration } from '@sentry/core';
import { NATIVE } from '../wrapper';

export const INTEGRATION_NAME = 'Screenshot';

/**
 * If enabled attaches a screenshot to the event hint.
 */
export function attachScreenshotToEventHint(hint: EventHint, { attachScreenshot }: { attachScreenshot?: boolean }): EventHint {
    if (!attachScreenshot) {
        return hint;
    }

    const screenshots = NATIVE.captureScreenshot();
    if (screenshots !== null && screenshots.length > 0) {
        hint.attachments = [...screenshots, ...(hint?.attachments || [])];
    }
    return hint;
}

/** Adds screenshots to error events */
export const screenshotIntegration = (): Integration => ({
    name: INTEGRATION_NAME
    // TODO: right now we're manually adding screenshots in error handlers. Should we instead just rely on this?
    // processEvent(event, hint, client: any) {
    //     const hasException = event.exception?.values && event.exception.values.length > 0;
    //     if (!hasException || client.getOptions().beforeScreenshot?.(event, hint) === false) {
    //         return event;
    //     }
    //     attachScreenshotToEventHint(hint, { attachScreenshot: true });
    //     return event;
    // }
});
