import type { Event, Integration } from '@sentry/core';
import { addEventProcessor } from '@sentry/core';

const INTEGRATION_NAME = 'EventOrigin';

/** Default EventOrigin instrumentation */
export const eventOriginIntegration = (): Integration => ({
    name: INTEGRATION_NAME,
    setup: () => {
        addEventProcessor((event: Event) => {
            event.tags = event.tags ?? {};

            event.tags['event.origin'] = __ANDROID__ ? 'android' : __IOS__ ? 'ios' : 'javascript';
            event.tags['event.environment'] = 'nativescript';

            return event;
        });
    }
});
