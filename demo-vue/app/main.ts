import Vue from 'nativescript-vue';
import { getBuildNumber, getVersionName } from 'nativescript-extendedinfo';

import * as Sentry from '@nativescript-community/sentry';

Promise.all([getVersionName(), getBuildNumber()]).then(res => {
    console.log('test', res);
    console.log('test', res, gVars.SENTRY_PREFIX, gVars.SENTRY_DSN);
    Sentry.init({
        dsn: gVars.SENTRY_DSN,
        // debug: true,
        // beforeSend: (event, hint) => {
        //     console.log('beforeSend', event, hint);
        //     return event;
        // },
        appPrefix: gVars.SENTRY_PREFIX,
        release: `${res[0]}`,
        dist: `${res[1]}.${global.isAndroid ? 'android':'ios'}`
    });
    setTimeout(() => {
        Sentry.withScope(scope => {
            scope.setTag('myTag', 'tag-value');
            scope.setExtra('myExtra', 'extra-value');
            scope.addBreadcrumb({ message: 'test' });
            console.log('about to captureMessage ');
            Sentry.captureMessage('Hello Sentry!');
        });
    }, 1000);
});

import Home from './views/Home';
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
