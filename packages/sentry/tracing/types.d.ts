import type { Span } from '@sentry/core';
export interface NativescriptNavigationRoute {
    name: string;
    key: string;
    params: Record<string, any>;
}
export interface NativescriptNavigationCurrentRoute extends NativescriptNavigationRoute {
    hasBeenSeen: boolean;
}
export interface RouteChangeContextData {
    previousRoute?: {
        [key: string]: unknown;
        name: string;
    } | null;
    route: {
        [key: string]: unknown;
        name: string;
        hasBeenSeen: boolean;
    };
}
export type BeforeNavigate = (context: Span) => void;
