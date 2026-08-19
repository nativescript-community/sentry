export { nativescriptTracingIntegration, INTEGRATION_NAME as NATIVESCRIPT_TRACING_INTEGRATION_NAME, getCurrentNativescriptTracingIntegration, getNativescriptTracingIntegration } from './nstracing';
export type { NativescriptTracingIntegration } from './nstracing';

export { startIdleNavigationSpan, startIdleSpan, getDefaultIdleNavigationSpanOptions } from './span';

export type { NativescriptNavigationCurrentRoute, NativescriptNavigationRoute } from './types';

export * from './ops';
