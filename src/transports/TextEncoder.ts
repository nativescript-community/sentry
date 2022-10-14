import { TextEncoderInternal } from '@sentry/types';
import { utf8ToBytes } from '../vendor';

import { NATIVE } from '../wrapper';

export const makeUtf8TextEncoder = (): TextEncoderInternal => {
    const textEncoder = {
        encode: (text: string) =>
            // const bytes = new Uint8Array(NATIVE.utf8ToBytes(text));
            // NATIVE.utf8ToBytes(text)
            new Uint8Array(utf8ToBytes(text))
        ,
        encoding: 'utf-8',
    };
    return textEncoder;
};
