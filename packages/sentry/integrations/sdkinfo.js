import { debug } from '@sentry/core';
import { SDK_NAME, SDK_PACKAGE_NAME, SDK_VERSION } from '../version';
import { NATIVE } from '../wrapper';
export const defaultSdkInfo = {
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
export const sdkInfoIntegration = () => {
    let nativeSdkInfo = null;
    return {
        name: INTEGRATION_NAME,
        processEvent: async (event) => {
            // The native SDK info package here is only used on iOS as `beforeSend` is not called on `captureEnvelope`.
            // nativeSdkInfo should be defined a following time so this call won't always be awaited.
            if (nativeSdkInfo === null) {
                try {
                    nativeSdkInfo = await NATIVE.fetchNativeSdkInfo();
                }
                catch (e) {
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
//# sourceMappingURL=sdkinfo.js.map