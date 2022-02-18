import * as Sentry from '@nativescript-community/sentry';
import { Application } from '@nativescript/core';
import { on as applicationOn, launchEvent } from '@nativescript/core/application';
import { getAppId, getBuildNumber, getVersionName } from 'nativescript-extendedinfo';
import Vue from 'nativescript-vue';
import Home from './views/Home';



async function startSentry() {
    try {
        const versionName = await getVersionName();
        const buildNumber = await getBuildNumber();
        const appId = await getAppId();
        Sentry.init({
            dsn: SENTRY_DSN,
            debug: true,
            enableAutoPerformanceTracking: true,
            appPrefix: SENTRY_PREFIX,
            release: `${appId}@${versionName}+${buildNumber}`,
            dist: `${buildNumber}.${__ANDROID__ ? 'android' : 'ios'}`
        });
        console.log('startSentry done ');
        setTimeout(()=>{
            console.log('timeout');
            Sentry.withScope(scope => {
                console.log('about to captureMessage ');
                scope.setTag('myTag', 'tag-value');
                scope.setExtra('myExtra', 'extra-value');
                scope.addBreadcrumb({ message: 'test' });
                Sentry.captureMessage('Hello Sentry!');
            });
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
