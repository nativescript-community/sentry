import { defaultRequestInstrumentationOptions, instrumentOutgoingRequests, startIdleTransaction } from '@sentry/tracing';
import { logger } from '@sentry/utils';
import { NATIVE } from '../wrapper';
import { NativeFramesInstrumentation } from './nativeframes';
import { UI_LOAD } from './ops';
import { cancelInBackground, onlySampleIfChildSpans } from './transaction';
import { StallTrackingInstrumentation } from './stalltracking';
import { adjustTransactionDuration, getTimeOriginMilliseconds, isNearToNow } from './utils';
import { getActiveTransaction, getCurrentHub } from '@sentry/core';
const DEFAULT_TRACE_PROPAGATION_TARGETS = ['localhost', /^\/(?!\/)/];
const defaultNativescriptTracingOptions = Object.assign(Object.assign({}, defaultRequestInstrumentationOptions), { idleTimeout: 1000, maxTransactionDuration: 600, idleTimeoutMs: 1000, finalTimeoutMs: 600000, ignoreEmptyBackNavigationTransactions: true, beforeNavigate: context => context, enableAppStartTracking: true, enableNativeFramesTracking: true, enableStallTracking: true, enableUserInteractionTracing: false });
/**
 * Tracing integration for React Native.
 */
export class NativescriptTracing {
    constructor(options = {}) {
        var _a, _b, _c, _d;
        /**
       * @inheritDoc
       */
        this.name = NativescriptTracing.id;
        this.useAppStartWithProfiler = false;
        this._hasSetTracePropagationTargets = !!(options &&
            options.tracePropagationTargets);
        this._hasSetTracingOrigins = !!(options &&
            options.tracingOrigins);
        this.options = Object.assign(Object.assign(Object.assign({}, defaultNativescriptTracingOptions), options), { finalTimeoutMs: (_b = (_a = options.finalTimeoutMs) !== null && _a !== void 0 ? _a : (typeof options.maxTransactionDuration === 'number'
                ?
                    options.maxTransactionDuration * 1000
                : undefined)) !== null && _b !== void 0 ? _b : defaultNativescriptTracingOptions.finalTimeoutMs, idleTimeoutMs: (_d = (_c = options.idleTimeoutMs) !== null && _c !== void 0 ? _c : options.idleTimeout) !== null && _d !== void 0 ? _d : defaultNativescriptTracingOptions.idleTimeoutMs });
    }
    /**
   *  Registers routing and request instrumentation.
   */
    setupOnce(
    // @ts-ignore TODO
    addGlobalEventProcessor, getCurrentHub) {
        const hub = getCurrentHub();
        const client = hub.getClient();
        const clientOptions = client && client.getOptions();
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { traceFetch, traceXHR, tracingOrigins, shouldCreateSpanForRequest, tracePropagationTargets: thisOptionsTracePropagationTargets, routingInstrumentation, enableAppStartTracking, enableNativeFramesTracking, enableStallTracking, } = this.options;
        this._getCurrentHub = getCurrentHub;
        const clientOptionsTracePropagationTargets = clientOptions && clientOptions.tracePropagationTargets;
        // There are three ways to configure tracePropagationTargets:
        // 1. via top level client option `tracePropagationTargets`
        // 2. via ReactNativeTracing option `tracePropagationTargets`
        // 3. via ReactNativeTracing option `tracingOrigins` (deprecated)
        //
        // To avoid confusion, favour top level client option `tracePropagationTargets`, and fallback to
        // ReactNativeTracing option `tracePropagationTargets` and then `tracingOrigins` (deprecated).
        //
        // If both 1 and either one of 2 or 3 are set (from above), we log out a warning.
        const tracePropagationTargets = clientOptionsTracePropagationTargets ||
            (this._hasSetTracePropagationTargets && thisOptionsTracePropagationTargets) ||
            (this._hasSetTracingOrigins && tracingOrigins) ||
            DEFAULT_TRACE_PROPAGATION_TARGETS;
        if (__DEV__ &&
            (this._hasSetTracePropagationTargets || this._hasSetTracingOrigins) &&
            clientOptionsTracePropagationTargets) {
            logger.warn('[ReactNativeTracing] The `tracePropagationTargets` option was set in the ReactNativeTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.');
        }
        if (enableAppStartTracking) {
            this._instrumentAppStart().then(undefined, (reason) => {
                logger.error('[ReactNativeTracing] Error while instrumenting app start:', reason);
            });
        }
        if (enableNativeFramesTracking) {
            NATIVE.enableNativeFramesTracking();
            this.nativeFramesInstrumentation = new NativeFramesInstrumentation(addGlobalEventProcessor, () => {
                const self = getCurrentHub().getIntegration(NativescriptTracing);
                if (self) {
                    return !!self.nativeFramesInstrumentation;
                }
                return false;
            });
        }
        else {
            NATIVE.disableNativeFramesTracking();
        }
        if (enableStallTracking) {
            this.stallTrackingInstrumentation = new StallTrackingInstrumentation();
        }
        if (routingInstrumentation) {
            routingInstrumentation.registerRoutingInstrumentation(this._onRouteWillChange.bind(this), this.options.beforeNavigate, this._onConfirmRoute.bind(this));
        }
        else {
            logger.log('[ReactNativeTracing] Not instrumenting route changes as routingInstrumentation has not been set.');
        }
        addGlobalEventProcessor(this._getCurrentViewEventProcessor.bind(this));
        instrumentOutgoingRequests({
            traceFetch,
            traceXHR,
            shouldCreateSpanForRequest,
            tracePropagationTargets,
        });
    }
    /**
   * To be called on a transaction start. Can have async methods
   */
    onTransactionStart(transaction) {
        var _a, _b;
        if (isNearToNow(transaction.startTimestamp)) {
            // Only if this method is called at or within margin of error to the start timestamp.
            (_a = this.nativeFramesInstrumentation) === null || _a === void 0 ? void 0 : _a.onTransactionStart(transaction);
            (_b = this.stallTrackingInstrumentation) === null || _b === void 0 ? void 0 : _b.onTransactionStart(transaction);
        }
    }
    /**
   * To be called on a transaction finish. Cannot have async methods.
   */
    onTransactionFinish(transaction, endTimestamp) {
        var _a, _b;
        (_a = this.nativeFramesInstrumentation) === null || _a === void 0 ? void 0 : _a.onTransactionFinish(transaction);
        (_b = this.stallTrackingInstrumentation) === null || _b === void 0 ? void 0 : _b.onTransactionFinish(transaction, endTimestamp);
    }
    /**
   * Called by the NativescriptProfiler component on first component mount.
   */
    onAppStartFinish(endTimestamp) {
        this._appStartFinishTimestamp = endTimestamp;
    }
    /**
   * Starts a new transaction for a user interaction.
   * @param userInteractionId Consists of `op` representation UI Event and `elementId` unique element identifier on current screen.
   */
    startUserInteractionTransaction(userInteractionId) {
        var _a, _b;
        const { elementId, op } = userInteractionId;
        if (!this.options.enableUserInteractionTracing) {
            logger.log('[ReactNativeTracing] User Interaction Tracing is disabled.');
            return undefined;
        }
        if (!this.options.routingInstrumentation) {
            logger.error('[ReactNativeTracing] User Interaction Tracing is not working because no routing instrumentation is set.');
            return undefined;
        }
        if (!elementId) {
            logger.log('[ReactNativeTracing] User Interaction Tracing can not create transaction with undefined elementId.');
            return undefined;
        }
        if (!this._currentRoute) {
            logger.log('[ReactNativeTracing] User Interaction Tracing can not create transaction without a current route.');
            return undefined;
        }
        const hub = ((_a = this._getCurrentHub) === null || _a === void 0 ? void 0 : _a.call(this)) || getCurrentHub();
        const activeTransaction = getActiveTransaction(hub);
        const activeTransactionIsNotInteraction = (activeTransaction === null || activeTransaction === void 0 ? void 0 : activeTransaction.spanId) !== ((_b = this._inflightInteractionTransaction) === null || _b === void 0 ? void 0 : _b.spanId);
        if (activeTransaction && activeTransactionIsNotInteraction) {
            logger.warn(`[ReactNativeTracing] Did not create ${op} transaction because active transaction ${activeTransaction.name} exists on the scope.`);
            return undefined;
        }
        if (this._inflightInteractionTransaction) {
            this._inflightInteractionTransaction.cancelIdleTimeout(undefined, { restartOnChildSpanChange: false });
            this._inflightInteractionTransaction = undefined;
        }
        const name = `${this._currentRoute}.${elementId}`;
        const context = {
            name,
            op,
            trimEnd: true,
        };
        this._inflightInteractionTransaction = this._startIdleTransaction(context);
        this._inflightInteractionTransaction.registerBeforeFinishCallback((transaction) => {
            this._inflightInteractionTransaction = undefined;
            this.onTransactionFinish(transaction);
        });
        this._inflightInteractionTransaction.registerBeforeFinishCallback(onlySampleIfChildSpans);
        this.onTransactionStart(this._inflightInteractionTransaction);
        logger.log(`[ReactNativeTracing] User Interaction Tracing Created ${op} transaction ${name}.`);
        return this._inflightInteractionTransaction;
    }
    /**
   *  Sets the current view name into the app context.
   *  @param event Le event.
   */
    _getCurrentViewEventProcessor(event) {
        if (event.contexts && this._currentViewName) {
            event.contexts.app = Object.assign({ view_names: [this._currentViewName] }, event.contexts.app);
        }
        return event;
    }
    /**
   * Returns the App Start Duration in Milliseconds. Also returns undefined if not able do
   * define the duration.
   */
    _getAppStartDurationMilliseconds(appStart) {
        if (!this._appStartFinishTimestamp) {
            return undefined;
        }
        return this._appStartFinishTimestamp * 1000 - appStart.appStartTime;
    }
    /**
   * Instruments the app start measurements on the first route transaction.
   * Starts a route transaction if there isn't routing instrumentation.
   */
    async _instrumentAppStart() {
        if (!this.options.enableAppStartTracking || !NATIVE.enableNative) {
            return;
        }
        const appStart = await NATIVE.fetchNativeAppStart();
        if (!appStart || appStart.didFetchAppStart) {
            return;
        }
        if (!this.useAppStartWithProfiler) {
            this._appStartFinishTimestamp = getTimeOriginMilliseconds() / 1000;
        }
        if (this.options.routingInstrumentation) {
            this._awaitingAppStartData = appStart;
        }
        else {
            const appStartTimeSeconds = appStart.appStartTime / 1000;
            const idleTransaction = this._createRouteTransaction({
                name: 'App Start',
                op: 'ui.load',
                startTimestamp: appStartTimeSeconds,
            });
            if (idleTransaction) {
                this._addAppStartData(idleTransaction, appStart);
            }
        }
    }
    /**
   * Adds app start measurements and starts a child span on a transaction.
   */
    _addAppStartData(transaction, appStart) {
        if (!this._appStartFinishTimestamp) {
            logger.warn('App start was never finished.');
            return;
        }
        const appStartTimeSeconds = appStart.appStartTime / 1000;
        const appStartMode = appStart.isColdStart ? 'app_start_cold' : 'app_start_warm';
        transaction.startChild({
            description: appStart.isColdStart ? 'Cold App Start' : 'Warm App Start',
            op: appStartMode,
            startTimestamp: appStartTimeSeconds,
            endTimestamp: this._appStartFinishTimestamp,
        });
        const appStartDurationMilliseconds = this._appStartFinishTimestamp * 1000 - appStart.appStartTime;
        transaction.setMeasurement(appStartMode, appStartDurationMilliseconds);
    }
    /** To be called when the route changes, but BEFORE the components of the new route mount. */
    _onRouteWillChange(context) {
        return this._createRouteTransaction(context);
    }
    /**
   * Creates a breadcrumb and sets the current route as a tag.
   */
    _onConfirmRoute(context) {
        var _a, _b, _c;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this._currentRoute = (_b = (_a = context.data) === null || _a === void 0 ? void 0 : _a.route) === null || _b === void 0 ? void 0 : _b.name;
        (_c = this._getCurrentHub) === null || _c === void 0 ? void 0 : _c.call(this).configureScope(scope => {
            var _a;
            if (context.data) {
                const contextData = context.data;
                scope.addBreadcrumb({
                    category: 'navigation',
                    type: 'navigation',
                    // We assume that context.name is the name of the route.
                    message: `Navigation to ${context.name}`,
                    data: {
                        from: (_a = contextData.previousRoute) === null || _a === void 0 ? void 0 : _a.name,
                        to: contextData.route.name,
                    },
                });
            }
            this._currentViewName = context.name;
            /**
       * @deprecated tag routing.route.name will be removed in the future.
       */
            scope.setTag('routing.route.name', context.name);
        });
    }
    /** Create routing idle transaction. */
    _createRouteTransaction(context) {
        if (!this._getCurrentHub) {
            logger.warn(`[ReactNativeTracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
            return undefined;
        }
        if (this._inflightInteractionTransaction) {
            logger.log(`[ReactNativeTracing] Canceling ${this._inflightInteractionTransaction.op} transaction because navigation ${context.op}.`);
            this._inflightInteractionTransaction.setStatus('cancelled');
            this._inflightInteractionTransaction.finish();
        }
        const { finalTimeoutMs } = this.options;
        const expandedContext = Object.assign(Object.assign({}, context), { trimEnd: true });
        const idleTransaction = this._startIdleTransaction(expandedContext);
        this.onTransactionStart(idleTransaction);
        logger.log(`[ReactNativeTracing] Starting ${context.op} transaction "${context.name}" on scope`);
        idleTransaction.registerBeforeFinishCallback((transaction, endTimestamp) => {
            this.onTransactionFinish(transaction, endTimestamp);
        });
        idleTransaction.registerBeforeFinishCallback(transaction => {
            if (this.options.enableAppStartTracking && this._awaitingAppStartData) {
                transaction.op = UI_LOAD;
                this._addAppStartData(transaction, this._awaitingAppStartData);
                this._awaitingAppStartData = undefined;
            }
        });
        idleTransaction.registerBeforeFinishCallback((transaction, endTimestamp) => {
            adjustTransactionDuration(finalTimeoutMs, transaction, endTimestamp);
        });
        if (this.options.ignoreEmptyBackNavigationTransactions) {
            idleTransaction.registerBeforeFinishCallback(transaction => {
                var _a, _b;
                if (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                ((_b = (_a = transaction.data) === null || _a === void 0 ? void 0 : _a.route) === null || _b === void 0 ? void 0 : _b.hasBeenSeen) &&
                    (!transaction.spanRecorder ||
                        transaction.spanRecorder.spans.filter(span => span.spanId !== transaction.spanId).length === 0)) {
                    logger.log('[ReactNativeTracing] Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.');
                    // Route has been seen before and has no child spans.
                    transaction.sampled = false;
                }
            });
        }
        return idleTransaction;
    }
    /**
   * Start app state aware idle transaction on the scope.
   */
    _startIdleTransaction(context) {
        var _a;
        const { idleTimeoutMs, finalTimeoutMs } = this.options;
        const hub = ((_a = this._getCurrentHub) === null || _a === void 0 ? void 0 : _a.call(this)) || getCurrentHub();
        const tx = startIdleTransaction(hub, context, idleTimeoutMs, finalTimeoutMs, true);
        cancelInBackground(tx);
        return tx;
    }
}
/**
* @inheritDoc
*/
NativescriptTracing.id = 'NativescriptTracing';
//# sourceMappingURL=nstracing.js.map