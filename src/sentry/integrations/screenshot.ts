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
    name: INTEGRATION_NAME,
    setup: () => {
        /* noop */
    }
});
