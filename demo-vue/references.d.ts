/* eslint-disable spaced-comment */
/// <reference path="../src/references.d.ts" />
/// <reference path="../references.d.ts" />

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare const SENTRY_DSN: string;
declare const SENTRY_PREFIX: string;
declare const __APP_ID__: string;
declare const __APP_VERSION__: string;
declare const __APP_BUILD_NUMBER__: string;
