import { EventProcessor, Integration, SdkInfo as SdkInfoType } from '@sentry/types';
declare type DefaultSdkInfo = Pick<Required<SdkInfoType>, 'name' | 'packages' | 'version'>;
export declare const defaultSdkInfo: DefaultSdkInfo;
/** Default SdkInfo instrumentation */
export declare class SdkInfo implements Integration {
    /**
   * @inheritDoc
   */
    static id: string;
    /**
   * @inheritDoc
   */
    name: string;
    private _nativeSdkInfo;
    /**
   * @inheritDoc
   */
    setupOnce(addGlobalEventProcessor: (e: EventProcessor) => void): void;
}
export {};
