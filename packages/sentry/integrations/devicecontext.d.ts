import { Integration } from '@sentry/types';
/** Load device context from native. */
export declare class DeviceContext implements Integration {
    /**
     * @inheritDoc
     */
    name: string;
    /**
     * @inheritDoc
     */
    static id: string;
    /**
     * @inheritDoc
     */
    setupOnce(): void;
}
