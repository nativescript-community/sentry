import { Event, Response } from '@sentry/types';
import { NativescriptOptions } from './backend';

export interface UserFeedback {
    eventId: string;
    comments?: string;
    email?: string;
    name?: string;
}

export namespace NSSentry {
    function fetchRelease();
    function sendEvent(event: Event): Promise<Response>;
    // function captureException(exception: any /* nativeException*/): Promise<Response>;
    function startWithDsnString(dsn: string, options: NativescriptOptions): Promise<Response>;
    function setLogLevel(level: number);
    function crash();
    function flush(timeout: number);
    function deviceContexts(): Promise<any>;
    function captureUserFeedback(feedback: UserFeedback);
    const nativeClientAvailable: boolean;
    const nativeTransport: boolean;
}
