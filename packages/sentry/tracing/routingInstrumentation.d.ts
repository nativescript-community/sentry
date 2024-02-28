import { Hub } from '@sentry/hub';
import { Transaction, TransactionContext } from '@sentry/types';
import { BeforeNavigate } from './types';
export declare type TransactionCreator = (context: TransactionContext) => Transaction | undefined;
export declare type OnConfirmRoute = (context: TransactionContext) => void;
export interface RoutingInstrumentationInstance {
    /**
     * Name of the routing instrumentation
     */
    readonly name: string;
    /**
   * Registers a listener that's called on every route change with a `TransactionContext`.
   *
   * Do not overwrite this unless you know what you are doing.
   *
   * @param listener A `RouteListener`
   * @param beforeNavigate BeforeNavigate
   * @param inConfirmRoute OnConfirmRoute
   */
    registerRoutingInstrumentation(listener: TransactionCreator, beforeNavigate: BeforeNavigate, onConfirmRoute: OnConfirmRoute): void;
    /**
   * To be called when the route changes, BEFORE the new route mounts.
   * If this is called after a route mounts the child spans will not be correctly attached.
   *
   * @param context A `TransactionContext` used to initialize the transaction.
   */
    onRouteWillChange(context: TransactionContext): Transaction | undefined;
}
/**
 * Base Routing Instrumentation. Can be used by users to manually instrument custom routers.
 * Pass this to the tracing integration, and call `onRouteWillChange` every time before a route changes.
 */
export declare class RoutingInstrumentation implements RoutingInstrumentationInstance {
    static instrumentationName: string;
    readonly name: string;
    protected _getCurrentHub?: () => Hub;
    protected _beforeNavigate?: BeforeNavigate;
    protected _onConfirmRoute?: OnConfirmRoute;
    protected _tracingListener?: TransactionCreator;
    /** @inheritdoc */
    registerRoutingInstrumentation(listener: TransactionCreator, beforeNavigate: BeforeNavigate, onConfirmRoute: OnConfirmRoute): void;
    /** @inheritdoc */
    onRouteWillChange(context: TransactionContext): Transaction | undefined;
}
/**
 * Internal base routing instrumentation where `_onConfirmRoute` is not called in onRouteWillChange
 */
export declare class InternalRoutingInstrumentation extends RoutingInstrumentation {
    /** @inheritdoc */
    onRouteWillChange(context: TransactionContext): Transaction | undefined;
}
