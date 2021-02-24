import { addGlobalEventProcessor, getCurrentHub } from '@sentry/core';
import { Event, Integration } from '@sentry/types';
import { NSSentry } from '../nssentry';

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
        addGlobalEventProcessor(async (event: Event) => {
            const self = getCurrentHub().getIntegration(DeviceContext);
            if (!self) {
                return event;
            }

            try {
                const deviceContexts = await NSSentry.deviceContexts();
                event.contexts = { ...deviceContexts, ...event.contexts };
            } catch (_Oo) {
                // Something went wrong, we just continue
            }

            return event;
        });
    }
}
