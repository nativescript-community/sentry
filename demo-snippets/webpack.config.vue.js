const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const nsWebpack = require('@nativescript/webpack');
const { dirname, join, relative, resolve, sep } = require('path');
const { readdirSync, readFileSync } = require('fs');

module.exports = (env, webpack) => {
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    webpack.chainWebpack((config) => {});
};

module.exports.onWebpackConfig = function (config, env, params) {

    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    const dist = nsWebpack.Utils.platform.getDistPath();
    console.log('test', env, params, dist);
    const projectRoot = nsWebpack.Utils.project.getProjectRootPath();
    const appResourcesPath = env.appResourcesPath;
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
    // nsWebpack.chainWebpack(config=>{
    //     config.entry('bundle').prepend('@nativescript-community/sentry/process');
    // });
    const definitions = config.plugins.find((p) => p.constructor.name === 'DefinePlugin').definitions;
    delete definitions['process'];
    Object.assign(definitions, {
        SENTRY_DSN: `"${process.env.SENTRY_DSN}"`,
        SENTRY_PREFIX: `"${process.env.SENTRY_PREFIX}"`,
        __APP_ID__: `"${env.appId}"`,
        __APP_VERSION__: `"${appVersion}"`,
        __APP_BUILD_NUMBER__: `"${buildNumber}"`
    });

    config.resolve.symlinks = false;
    config.devtool = 'source-map';
    config.plugins.push(
        sentryWebpackPlugin({
            org: process.env.SENTRY_ORG,
            url: process.env.SENTRY_URL,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
            release: {
                name: `${config.id}@${appVersion}+${buildNumber}`,
                dist: `${buildNumber}.${platform}`,
                setCommits: false,
                create: true,
                cleanArtifacts: true
            },
            sourcemaps: {
                ignore: ['tns-java-classes', 'hot-update'],
                assets: [dist + '/**/*.js', join(dist, process.env.SOURCEMAP_REL_DIR) + '/*.map']
            }
        })
    );
    return config;
};
