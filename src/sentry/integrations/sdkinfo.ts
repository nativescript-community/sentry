import type { Event, Integration, Package, SdkInfo as SdkInfoType } from '@sentry/core';
import { debug } from '@sentry/core';

import { SDK_NAME, SDK_PACKAGE_NAME, SDK_VERSION } from '../version';

import { NATIVE } from '../wrapper';

type DefaultSdkInfo = Pick<Required<SdkInfoType>, 'name' | 'packages' | 'version'>;

export const defaultSdkInfo: DefaultSdkInfo = {
    name: SDK_NAME,
    packages: [
        {
            name: SDK_PACKAGE_NAME,
            version: SDK_VERSION
        }
    ],
    version: SDK_VERSION
};

const INTEGRATION_NAME = 'SdkInfo';

/** Default SdkInfo instrumentation */
export const sdkInfoIntegration = (): Integration => {
    let nativeSdkInfo: Package | null = null;

    return {
        name: INTEGRATION_NAME,
        processEvent: async (event: Event): Promise<Event> => {
            // The native SDK info package here is only used on iOS as `beforeSend` is not called on `captureEnvelope`.
            // nativeSdkInfo should be defined a following time so this call won't always be awaited.
            if (nativeSdkInfo === null) {
                try {
                    nativeSdkInfo = await NATIVE.fetchNativeSdkInfo();
                } catch (e) {
                    // If this fails, go ahead as usual as we would rather have the event be sent with a package missing.
                    debug.warn('[SdkInfo] Native SDK Info retrieval failed...something could be wrong with your Sentry installation:');
                    debug.warn(e);
                }
            }

            event.platform = event.platform || 'javascript';
            event.sdk = {
                ...(event.sdk ?? {}),
                ...defaultSdkInfo,
                packages: [...((event.sdk && event.sdk.packages) || []), ...((nativeSdkInfo && [nativeSdkInfo]) || []), ...defaultSdkInfo.packages]
            };
            return event;
        }
    };
};
