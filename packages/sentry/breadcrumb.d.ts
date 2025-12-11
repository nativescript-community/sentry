import { type Breadcrumb, type SeverityLevel } from '@sentry/core';
export declare const DEFAULT_BREADCRUMB_LEVEL: SeverityLevel;
type BreadcrumbCandidate = {
    [K in keyof Partial<Breadcrumb>]: unknown;
};
/**
 * Convert plain object to a valid Breadcrumb
 */
export declare function breadcrumbFromObject(candidate: BreadcrumbCandidate): Breadcrumb;
export {};
