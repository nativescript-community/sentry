import { Application } from '@nativescript/core';
import { logger } from '@sentry/utils';
// import type { AppStateStatus } from 'react-native';
// import { AppState } from 'react-native';
/**
 * Idle Transaction callback to only sample transactions with child spans.
 * To avoid side effects of other callbacks this should be hooked as the last callback.
 */
export const onlySampleIfChildSpans = (transaction) => {
    const spansCount = transaction.spanRecorder &&
        transaction.spanRecorder.spans.filter(span => span.spanId !== transaction.spanId).length;
    if (!spansCount || spansCount <= 0) {
        logger.log(`Not sampling as ${transaction.op} transaction has no child spans.`);
        transaction.sampled = false;
    }
};
/**
 * Hooks on AppState change to cancel the transaction if the app goes background.
 */
export const cancelInBackground = (transaction) => {
    function onBackground() {
        logger.debug(`Setting ${transaction.op} transaction to cancelled because the app is in the background.`);
        transaction.setStatus('cancelled');
        transaction.finish();
    }
    Application.on(Application.backgroundEvent, onBackground);
    // const subscription = AppState.addEventListener('change', (newState: AppStateStatus) => {
    //     if (newState === 'background') {
    //     }
    // });
    transaction.registerBeforeFinishCallback(() => {
        logger.debug(`Removing AppState listener for ${transaction.op} transaction.`);
        Application.off(Application.backgroundEvent, onBackground);
    });
};
//# sourceMappingURL=transaction.js.map