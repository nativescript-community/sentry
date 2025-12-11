import { severityLevelFromString } from '@sentry/core';
export const DEFAULT_BREADCRUMB_LEVEL = 'info';
/**
 * Convert plain object to a valid Breadcrumb
 */
export function breadcrumbFromObject(candidate) {
    const breadcrumb = {};
    if (typeof candidate.type === 'string') {
        breadcrumb.type = candidate.type;
    }
    if (typeof candidate.level === 'string') {
        breadcrumb.level = severityLevelFromString(candidate.level);
    }
    if (typeof candidate.event_id === 'string') {
        breadcrumb.event_id = candidate.event_id;
    }
    if (typeof candidate.category === 'string') {
        breadcrumb.category = candidate.category;
    }
    if (typeof candidate.message === 'string') {
        breadcrumb.message = candidate.message;
    }
    if (typeof candidate.data === 'object' && candidate.data !== null) {
        breadcrumb.data = candidate.data;
    }
    if (typeof candidate.timestamp === 'string') {
        const timestampSeconds = Date.parse(candidate.timestamp) / 1000; // breadcrumb timestamp is in seconds
        if (!isNaN(timestampSeconds)) {
            breadcrumb.timestamp = timestampSeconds;
        }
    }
    return breadcrumb;
}
//# sourceMappingURL=breadcrumb.js.map