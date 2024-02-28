import type { Breadcrumb, SeverityLevel } from '@sentry/types';
export declare const DEFAULT_BREADCRUMB_LEVEL: SeverityLevel;
declare type BreadcrumbCandidate = {
    [K in keyof Partial<Breadcrumb>]: unknown;
};
/**
 * Convert plain object to a valid Breadcrumb
 */
export declare function breadcrumbFromObject(candidate: BreadcrumbCandidate): Breadcrumb;
export {};
