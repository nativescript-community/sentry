import { Integration } from '@sentry/types';
/** Release integration responsible to load release from file. */
export declare class Release implements Integration {
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
