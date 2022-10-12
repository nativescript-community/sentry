import { Event, Response } from '@sentry/types';
import { NativescriptOptions } from './backend';
import { Breadcrumb, User } from "@sentry/types";

export interface UserFeedback {
    eventId: string;
    comments?: string;
    email?: string;
    name?: string;
}

export namespace NSSentry {
    function sendEvent(event: Event): Promise<Response>;
    // function captureException(exception: any /* nativeException*/): Promise<Response>;
    function startWithOptions(dsn: string, options: NativescriptOptions): Promise<Response>;
    // function setLogLevel(level: number);
    function crash();
    function flush(timeout: number);
    function deviceContexts(): Promise<any>;
    function captureUserFeedback(feedback: UserFeedback);
    const nativeClientAvailable: boolean;
    const nativeTransport: boolean;

    function fetchNativeSdkInfo(): any
    function fetchNativeRelease(): any
    function closeNativeSdk();

     function setUser(user: User | null)
       function setTag(key: string, value: string)
      
       function setExtra(key: string, extra: any)
      
       function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number)
     
       function clearBreadcrumbs()
      
       function setContext(key: string, context: { [key: string]: any } | null)
}
