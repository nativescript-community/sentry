import { Event, Response } from '@sentry/types';
import { NativescriptOptions } from './backend';

export namespace NSSentry {
    function fetchRelease();
    function sendEvent(event: Event): Promise<Response>;
    function startWithDsnString(dsn: string, options: NativescriptOptions): Promise<Response>;
    function setLogLevel(level: number);
    function crash();
    function deviceContexts(): Promise<any>;
    const nativeClientAvailable: boolean;
    const nativeTransport: boolean;
}
