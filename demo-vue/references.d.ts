/* eslint-disable spaced-comment */
/// <reference path="../src/references.d.ts" />

declare const TNS_ENV: string;
// typings/custom.d.ts
declare module 'nativescript-worker-loader!*' {
    const content: any;
    export = content;
}

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare const gVars: {
    SENTRY_DSN: string;
    SENTRY_PREFIX: string;
    platform: 'ios' | 'android';
    isAndroid: boolean;
    isIOS: boolean;
};
