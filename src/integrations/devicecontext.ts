import { addEventProcessor, addGlobalEventProcessor, getCurrentHub } from '@sentry/core';
import { Contexts, Event, Integration } from '@sentry/types';
import { logger } from '@sentry/utils';
import { NATIVE } from '../wrapper';

/** Load device context from native. */
export class DeviceContext implements Integration {
    /**
     * @inheritDoc
     */
    public name: string = DeviceContext.id;
    /**
     * @inheritDoc
     */
    public static id: string = 'DeviceContext';

    /**
     * @inheritDoc
     */
    public setupOnce(): void {
        addEventProcessor(async (event: Event) => {
            const self = getCurrentHub().getIntegration(DeviceContext);
            if (!self) {
                return event;
            }

            try {
                const contexts = await NATIVE.fetchNativeDeviceContexts();

                const context = contexts['context'] as Contexts ?? {};
                const user = contexts['user'] ?? {};

                event.contexts = { ...context, ...event.contexts };
                const breadcrumbs = contexts['breadcrumbs'] ?? [];
                if (breadcrumbs.length) {
                    event.breadcrumbs = event.breadcrumbs || [];
                    event.breadcrumbs.push(...breadcrumbs);
                    event.breadcrumbs = event.breadcrumbs.sort((a, b) => a.timestamp - b.timestamp);
                }
                if (contexts['extra']) {
                    event.extra  = event.extra || {};
                    Object.assign(event.extra, contexts['extra']);
                }

                if (!event.user) {
                    event.user = { ...user };
                }
            } catch (e) {
                logger.log(`Failed to get device context from native: ${e}`);
            }

            return event;
        });
    }
}
