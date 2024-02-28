import { EventProcessor, Integration } from '@sentry/types';
/** Default EventOrigin instrumentation */
export declare class EventOrigin implements Integration {
    /**
   * @inheritDoc
   */
    static id: string;
    /**
   * @inheritDoc
   */
    name: string;
    /**
   * @inheritDoc
   */
    setupOnce(addGlobalEventProcessor: (e: EventProcessor) => void): void;
}
