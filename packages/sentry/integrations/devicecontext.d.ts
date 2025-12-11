import type { Integration } from '@sentry/core';
export declare const INTEGRATION_NAME = "DeviceContext";
/** Load device context from native. */
export declare const deviceContextIntegration: () => Integration;
