import { addEventProcessor, getCurrentHub } from '@sentry/core';
import { logger, severityLevelFromString } from '@sentry/utils';
import { NATIVE } from '../wrapper';
import { breadcrumbFromObject } from '../breadcrumb';
import { Application } from '@nativescript/core';
/** Load device context from native. */
export class DeviceContext {
    constructor() {
        /**
         * @inheritDoc
         */
        this.name = DeviceContext.id;
    }
    /**
     * @inheritDoc
     */
    setupOnce() {
        addEventProcessor(async (event) => {
            const self = getCurrentHub().getIntegration(DeviceContext);
            if (!self) {
                return event;
            }
            let native = null;
            try {
                native = await NATIVE.fetchNativeDeviceContexts();
            }
            catch (e) {
                logger.log(`Failed to get device context from native: ${e}`);
            }
            if (!native) {
                return event;
            }
            const nativeUser = native.user;
            if (!event.user && nativeUser) {
                event.user = nativeUser;
            }
            let nativeContexts = native.contexts;
            // if (AppState.currentState !== 'unknown') {
            nativeContexts = nativeContexts || {};
            nativeContexts.app = {
                ...nativeContexts.app,
                in_foreground: !Application.inBackground,
            };
            // }
            if (nativeContexts) {
                event.contexts = { ...nativeContexts, ...event.contexts };
                if (nativeContexts.app) {
                    event.contexts.app = { ...nativeContexts.app, ...event.contexts.app };
                }
            }
            const nativeTags = native.tags;
            if (nativeTags) {
                event.tags = { ...nativeTags, ...event.tags };
            }
            const nativeExtra = native.extra;
            if (nativeExtra) {
                event.extra = { ...nativeExtra, ...event.extra };
            }
            const nativeFingerprint = native.fingerprint;
            if (nativeFingerprint) {
                event.fingerprint = (event.fingerprint ?? []).concat(nativeFingerprint.filter(item => (event.fingerprint ?? []).indexOf(item) < 0));
            }
            const nativeLevel = typeof native['level'] === 'string' ? severityLevelFromString(native['level']) : undefined;
            if (!event.level && nativeLevel) {
                event.level = nativeLevel;
            }
            const nativeEnvironment = native['environment'];
            if (!event.environment && nativeEnvironment) {
                event.environment = nativeEnvironment;
            }
            const nativeBreadcrumbs = Array.isArray(native['breadcrumbs'])
                ? native['breadcrumbs'].map(breadcrumbFromObject)
                : undefined;
            if (nativeBreadcrumbs) {
                event.breadcrumbs = nativeBreadcrumbs;
            }
            return event;
        });
    }
}
/**
 * @inheritDoc
 */
DeviceContext.id = 'DeviceContext';
//# sourceMappingURL=devicecontext.js.map