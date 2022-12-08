import * as Sentry from '@nativescript-community/sentry';
import { Application } from '@nativescript/core';
import { on as applicationOn, launchEvent } from '@nativescript/core/application';
import Vue from 'nativescript-vue';
import Home from './views/Home';



async function startSentry() {
    try {
        Sentry.init({
            dsn: SENTRY_DSN,
            debug: true,
            flushSendEvent: true,
            enableNativeCrashHandling: true,
            enableAutoPerformanceTracking: true
        });
        setTimeout(()=>{
            // Sentry.withScope(scope => {
            //     try {
            //         scope.setTag('myTag', 'tag-value');
            //         scope.setExtra('myExtra', 'extra-value');
            //         scope.addBreadcrumb({ message: 'test' });
            //         Sentry.captureMessage('Hello Sentry!');
            //     } catch (error) {
            //         console.error(error);
            //     }
            // });
        }, 1000);
    } catch(err){console.error(err, err.stack);}

}

if (!__ANDROID__ || Application.android.context) {
    startSentry();
} else {
    applicationOn(launchEvent, startSentry);

}

new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
