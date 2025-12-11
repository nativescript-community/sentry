import type { EventHint, Integration } from '@sentry/core';
export declare const INTEGRATION_NAME = "Screenshot";
/**
 * If enabled attaches a screenshot to the event hint.
 */
export declare function attachScreenshotToEventHint(hint: EventHint, { attachScreenshot }: {
    attachScreenshot?: boolean;
}): EventHint;
/** Adds screenshots to error events */
export declare const screenshotIntegration: () => Integration;
