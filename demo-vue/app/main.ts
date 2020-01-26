import Vue from 'nativescript-vue';
import { getBuildNumber, getVersionName } from 'nativescript-extendedinfo';
import { isAndroid } from '@nativescript/core/platform';

import * as Sentry from 'nativescript-akylas-sentry';

Promise.all([getVersionName(), getBuildNumber()]).then(res => {
    Sentry.init({
        dsn: gVars.SENTRY_DSN,
        // debug: true,
        // release: `${res[0]}.${res[1]}${isAndroid ? 1 : 0}`
        release: `${res[0]}`
    });
    // setTimeout(() => {
    // Sentry.setTag('myTag', 'tag-value');
    // Sentry.setExtra('myExtra', 'extra-value');
    // Sentry.addBreadcrumb({ message: 'test' });
    // console.log('about to captureMessage ');
    // Sentry.captureMessage('Hello Sentry!');
    // }, 1000);
});

import Home from './views/Home';
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
