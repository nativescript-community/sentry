import { NATIVE } from '../wrapper';
export const INTEGRATION_NAME = 'Screenshot';
/**
 * If enabled attaches a screenshot to the event hint.
 */
export function attachScreenshotToEventHint(hint, { attachScreenshot }) {
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
export const screenshotIntegration = () => ({
    name: INTEGRATION_NAME,
    setup: () => {
        /* noop */
    }
});
//# sourceMappingURL=screenshot.js.map