const webpack = require('webpack');
const nsWebpack = require('@nativescript/webpack');
const { dirname, join, relative, resolve, sep } = require('path');
const { readdirSync, readFileSync } = require('fs');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
module.exports = (env, params = {}) => {
    nsWebpack.init(env);
    nsWebpack.chainWebpack(config=>{
        config.entry('bundle').prepend('@nativescript-community/sentry/process');
    });
    const config =  nsWebpack.resolveConfig();
    // Object.assign(config, {
    //     snapshot: {
    //         // detect changes in "node_modules"
    //         managedPaths: [],
    //     }
    // });
    const definitions  =config.plugins.find((p) => p.constructor.name === 'DefinePlugin').definitions;
    delete definitions['process'];
    const SENTRY_PREFIX = 'app:///';
    Object.assign(definitions, {
        'SENTRY_DSN': '"https://3e5220672ff5463f9a0c5bb18bcac1fd@bugs.akylas.fr/2"',
        'SENTRY_PREFIX': `"${SENTRY_PREFIX}"`,
    });

    const nconfig = require('./nativescript.config');
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    const dist = nsWebpack.Utils.platform.getDistPath();
    const SOURCEMAP_REL_DIR = '../../sourcemaps';
    const projectRoot = params.projectRoot || __dirname;
    const appResourcesPath = nconfig.appResourcesPath;
    let appVersion;
    let buildNumber;
    if (platform === 'android') {
        const gradlePath = resolve(projectRoot, appResourcesPath, 'Android/app.gradle');
        const gradleData = readFileSync(gradlePath, 'utf8');
        appVersion = gradleData.match(/versionName "((?:[0-9]+\.?)+)"/)[1];
        buildNumber = gradleData.match(/versionCode ([0-9]+)/)[1];
    } else if (platform === 'ios') {
        const plistPath = resolve(projectRoot, appResourcesPath, 'iOS/Info.plist');
        const plistData = readFileSync(plistPath, 'utf8');
        appVersion = plistData.match(/<key>CFBundleShortVersionString<\/key>[\s\n]*<string>(.*?)<\/string>/)[1];
        buildNumber = plistData.match(/<key>CFBundleVersion<\/key>[\s\n]*<string>([0-9]*)<\/string>/)[1];
    }
    config.resolve.symlinks = false;
    config.devtool = false;
    config.plugins.push(
        new webpack.SourceMapDevToolPlugin({
            append: `\n//# sourceMappingURL=${SENTRY_PREFIX}[file].map`,
            filename: join(SOURCEMAP_REL_DIR, '[file].map')
        })
    );
    // config.plugins.push(
    //     sentryWebpackPlugin({
    //         release: appVersion,
    //         urlPrefix: SENTRY_PREFIX,
    //         rewrite: true,
    //         release: {
    //             name: `${nconfig.id}@${appVersion}+${buildNumber}`,
    //             dist: `${buildNumber}.${platform}`,
    //             uploadLegacySourcemaps: {
    //                 ignoreFile: '.sentrycliignore',
    //                 paths: [dist, join(dist, SOURCEMAP_REL_DIR)]
    //             },
    //         },
    //     })
    // );
    return config;
};
