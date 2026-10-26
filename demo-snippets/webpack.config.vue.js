const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const { dirname, join, relative, resolve, sep } = require('path');
const { readdirSync, readFileSync } = require('fs');

module.exports = (env, webpack) => {
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    webpack.chainWebpack((config) => {});
};

module.exports.onWebpackConfig = function (config, env, params, nsWebpack, webpack) {
    const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
    const dist = nsWebpack.Utils.platform.getDistPath();
    console.log('test', env, params, dist);
    const projectRoot = nsWebpack.Utils.project.getProjectRootPath();
    const appResourcesPath = env.appResourcesPath;
    const appId = env.appId;
    const production = env.production;
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
    if (!process.env.SENTRY_AUTH_TOKEN) {
        // Local builds without Sentry credentials skip the release/sourcemap upload.
        return config;
    }
    config.devtool = production ? false : 'source-map';
    // chains the .map files shipped next to node_modules JS and strips their sourceMappingURL comments, which the Sentry plugin would otherwise pick over the bundle's own
    config.module.rules.push({
        test: /\.[cm]?js$/,
        enforce: 'pre',
        include: /node_modules/,
        use: require.resolve('source-map-loader')
    });
    // shipped maps reference .ts sources that are not published
    config.ignoreWarnings = [...(config.ignoreWarnings || []), /Failed to parse source map/];
    config.plugins.push(
        new webpack.SourceMapDevToolPlugin({
            append: `\n//# sourceMappingURL=../../sourcemaps/[name].js.map`,
            filename: join('../../sourcemaps', '[name].js.map')
        })
    );
    config.plugins.push(
        sentryWebpackPlugin({
            debug: true,
            telemetry: false,
            org: process.env.SENTRY_ORG,
            url: process.env.SENTRY_URL,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
            release: {
                name: `${appId}@${platform}@${appVersion}+${buildNumber}`,
                dist: `${buildNumber}.${platform}`,
                setCommits: {
                    auto: true,
                    ignoreEmpty: true,
                    ignoreMissing: true
                },
                create: true,
                cleanArtifacts: false
            },
            sourcemaps: {
                rewriteSources: (source, map) => source.replace('webpack:///', 'webpack://').replace(/^webpack:\/\/(?:\.\.\/)+packages\/core\//, 'webpack://@nativescript/core/'),
                ignore: ['tns-java-classes', 'hot-update'],
                assets: [join(dist, '**/*.js'), join(dist, '../../sourcemaps', '*.map')]
            }
        })
    );
    return config;
};
