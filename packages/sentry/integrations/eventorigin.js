import { addEventProcessor } from '@sentry/core';
const INTEGRATION_NAME = 'EventOrigin';
/** Default EventOrigin instrumentation */
export const eventOriginIntegration = () => ({
    name: INTEGRATION_NAME,
    setup: () => {
        addEventProcessor((event) => {
            event.tags = event.tags ?? {};
            event.tags['event.origin'] = __ANDROID__ ? 'android' : __IOS__ ? 'ios' : 'javascript';
            event.tags['event.environment'] = 'nativescript';
            return event;
        });
    }
});
//# sourceMappingURL=eventorigin.js.map