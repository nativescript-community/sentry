/**
 * Base Routing Instrumentation. Can be used by users to manually instrument custom routers.
 * Pass this to the tracing integration, and call `onRouteWillChange` every time before a route changes.
 */
export class RoutingInstrumentation {
    constructor() {
        this.name = RoutingInstrumentation.instrumentationName;
    }
    /** @inheritdoc */
    registerRoutingInstrumentation(listener, beforeNavigate, onConfirmRoute) {
        this._tracingListener = listener;
        this._beforeNavigate = beforeNavigate;
        this._onConfirmRoute = onConfirmRoute;
    }
    /** @inheritdoc */
    onRouteWillChange(context) {
        const transaction = this._tracingListener?.(context);
        if (transaction) {
            this._onConfirmRoute?.(context);
        }
        return transaction;
    }
}
RoutingInstrumentation.instrumentationName = 'base-routing-instrumentation';
/**
 * Internal base routing instrumentation where `_onConfirmRoute` is not called in onRouteWillChange
 */
export class InternalRoutingInstrumentation extends RoutingInstrumentation {
    /** @inheritdoc */
    onRouteWillChange(context) {
        return this._tracingListener?.(context);
    }
}
//# sourceMappingURL=routingInstrumentation.js.map