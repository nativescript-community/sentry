import { EnvelopeItem } from '@sentry/types';
type EnvelopeItemPayload = EnvelopeItem[1];
/**
   * Extracts the hard crash information from the event exceptions.
   * No exceptions or undefined handled are not hard crashes.
   */
export declare function isHardCrash(payload: EnvelopeItemPayload): boolean;
export {};
