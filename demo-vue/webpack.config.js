const WebpackTemplate = require('nativescript-akylas-webpack-template');
const webpack = require('webpack');
const { resolve } = require('path');
const { readFileSync } = require('fs');
const SentryCliPlugin = require('@sentry/webpack-plugin');
const nsWebpack = require('nativescript-dev-webpack');
// const NsVueTemplateCompiler = require('nativescript-vue-template-compiler');
// returns a new object with the values at each key mapped using mapFn(value)

// temporary hack to support v-model using ns-vue-template-compiler
// See https://github.com/nativescript-vue/nativescript-vue/issues/371
// NsVueTemplateCompiler.registerElement('MDTextField', () => require('nativescript-material-textfield').TextField, {
//     model: {
//         prop: 'text',
//         event: 'textChange'
//     }
// });

module.exports = env => {
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    const appComponents = [];

    const {
        development, // --env.development
        production, // --env.production
        sentry, // --env.production
        devlog, // --env.devlog
        adhoc // --env.adhoc
    } = env;

    if (adhoc) {
        env = Object.assign({}, env, {
            production: true,
            sourceMap: true,
            uglify: true
        });
    }
    console.log('running webpack with env', env);

    const aliases = {
        'nativescript-vue': 'nativescript-akylas-vue',
        vue: 'nativescript-vue'
    };
    const projectRoot = __dirname;
    if (development) {
        aliases['nativescript-akylas-sentry$'] = resolve(projectRoot, '..', 'src', 'index');
    }

    const config = WebpackTemplate(env, {
        projectRoot: __dirname,
        appComponents,
        snapshotPlugin: {
            useLibs: true
        },
        alias: aliases,
        // copyPlugin: copyFiles,
        definePlugin: {
            PRODUCTION: !!production,
            'gVars.isWatch': false,
            'gVars.sentry': !!sentry,
            'gVars.SENTRY_DSN': '"https://dbe796f805924060914b2ac7ed0564ff@bugs.akylas.fr/2"',
            LOG_LEVEL: devlog ? '"full"' : '""',
            TEST_LOGS: adhoc || !production
        }
    });
    // config.stats = 'verbose';
    if (development) {
        config.plugins.push(new webpack.ContextReplacementPlugin(/nativescript-akylas-sentry/, resolve(projectRoot, '..', 'src')));
    }
    // config.plugins.push(new webpack.IgnorePlugin(/(SqljsDriver|ExpoDriver|CordovaDriver)/,/typeorm/))
    if (!!production || !!sentry) {
        let appVersion;
        let buildNumber;
        if (platform === 'android') {
            appVersion = readFileSync('app/App_Resources/Android/app.gradle', 'utf8').match(/versionName "((?:[0-9]+\.?)+)"/)[1];
            buildNumber = readFileSync('app/App_Resources/Android/app.gradle', 'utf8').match(/versionCode ([0-9]+)/)[1];
        } else if (platform === 'ios') {
            appVersion = readFileSync('app/App_Resources/iOS/Info.plist', 'utf8').match(/<key>CFBundleShortVersionString<\/key>[\s\n]*<string>(.*?)<\/string>/)[1];
            buildNumber = readFileSync('app/App_Resources/iOS/Info.plist', 'utf8').match(/<key>CFBundleVersion<\/key>[\s\n]*<string>([0-9]*)<\/string>/)[1];
        }
        // if (buildNumber) {
        //     appVersion += `.${buildNumber}`;
        // }
        // appVersion += `${platform === 'android' ? 1 : 0}`;
        console.log('appVersion', appVersion, buildNumber);
        // config.plugins.push(
        //     new BugsnagBuildReporterPlugin(
        //         {
        //             apiKey: '767d861562cf9edbb3a9cb1a54d23fb8',
        //             appVersion: appVersion
        //         },
        //         {
        //             /* opts */
        //         }
        //     )
        // );
        const dist = resolve(projectRoot, nsWebpack.getAppPath(platform, projectRoot));
        config.plugins.push(
            new SentryCliPlugin({
                release: appVersion,
                urlPrefix:'app:///',
                rewrite:true,
                dist:buildNumber,
                ignore:['tns-java-classes'],
                include: dist,
                configFile: '.sentryclirc'
            })
        );
    }
    // config.stats = 'verbose';
    return config;
};
