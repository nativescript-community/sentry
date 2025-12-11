import type { Integration, SdkInfo as SdkInfoType } from '@sentry/core';
type DefaultSdkInfo = Pick<Required<SdkInfoType>, 'name' | 'packages' | 'version'>;
export declare const defaultSdkInfo: DefaultSdkInfo;
/** Default SdkInfo instrumentation */
export declare const sdkInfoIntegration: () => Integration;
export {};
