[![npm](https://img.shields.io/npm/v/@nativescript-community/sentry.svg)](https://www.npmjs.com/package/@nativescript-community/sentry)
[![npm](https://img.shields.io/npm/dt/@nativescript-community/sentry.svg?label=npm%20downloads)](https://www.npmjs.com/package/@nativescript-community/sentry)
[![GitHub forks](https://img.shields.io/github/forks/nativescript-community/sentry.svg)](https://github.com/nativescript-community/sentry/network)
[![GitHub stars](https://img.shields.io/github/stars/nativescript-community/sentry.svg)](https://github.com/nativescript-community/sentry/stargazers)

# Installation

* `tns plugin add @nativescript-community/sentry`

Be sure to run a new build after adding plugins to avoid any issues.

# Configuration

## Webpack 

You will need to add something like this to your webpack config so that the source maps gets uploaded. I dont set `auth` or `project` in the options as i use a `.sentryclirc` config file.
* `SOURCEMAP_REL_DIR`: i almost always set it to `../../sourcemaps`
* `SENTRY_PREFIX`: i almost always set it to `app:///`
```javascript
if (!!sentry && !!uploadSentry) {
  config.devtool = false;
  config.plugins.push(
      new webpack.SourceMapDevToolPlugin({
          append: `\n//# sourceMappingURL=${process.env.SENTRY_PREFIX}[name].js.map`,
          filename: join(process.env.SOURCEMAP_REL_DIR, '[name].js.map')
      })
  );
  let appVersion;
  let buildNumber;
  if (isAndroid) {
      const gradlePath = `${appResourcesPath}/Android/app.gradle`;
      const gradleData = readFileSync(gradlePath, 'utf8');
      appVersion = gradleData.match(/versionName "((?:[0-9]+\.?)+)"/)[1];
      buildNumber = gradleData.match(/versionCode ([0-9]+)/)[1];
  } else if (isIOS) {
      const plistPath = `${appResourcesPath}/iOS/Info.plist`;
      const plistData = readFileSync(plistPath, 'utf8');
      appVersion = plistData.match(/<key>CFBundleShortVersionString<\/key>[\s\n]*<string>(.*?)<\/string>/)[1];
      buildNumber = plistData.match(/<key>CFBundleVersion<\/key>[\s\n]*<string>([0-9]*)<\/string>/)[1];
  }
  config.plugins.push(
      new SentryCliPlugin({
          release: appVersion,
          urlPrefix: 'app:///',
          rewrite: true,
          release: `${nconfig.id}@${appVersion}+${buildNumber}`,
          dist: `${buildNumber}.${platform}`,
          ignoreFile: '.sentrycliignore',
          include: [join(dist, process.env.SOURCEMAP_REL_DIR)]
      })
  );
}
```

###debug 

For debug mode to work correctly you will need to add this to your webpack (see demo app)

```js
nsWebpack.chainWebpack(config=>{
    config.entry('bundle').prepend('@nativescript-community/sentry/process');
});
```

## Fastlane

If you use fastlane you can use it to create release and upload dsyms
To do that you need to install it:
```sh
fastlane add_plugin sentry
```
Also for now you should install `nativescript-set-version` as it is needed to read app version, build number.
```sh
npm install -D nativescript-set-version
```

Now you can setup your `Fastfile`
* create release 
```
version = ""
versionCode = ""

Dir.chdir("..") do
  version  =  sh("./node_modules/.bin/get-version", platform, "version").gsub(/\n/,'')
  versionCode  =  sh("./node_modules/.bin/get-version", platform, "code").gsub(/\n/,'')
end
sentry_create_release(
  version: version, # release version to create
)
```

* upload dsyms
```
sentry_upload_dsym
```

# Usage in the app

```typescript
import * as Sentry from '@nativescript-community/sentry';
import { getAppId, getBuildNumber, getVersionName } from 'nativescript-extendedinfo';

const buildNumber = await getBuildNumber();
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
```

## Reporting NativeScript errors

The `handleUncaughtErrors` method ensures all unhandled NativeScript errors will be caught by Sentry in production, using a [custom error handler](https://docs.nativescript.org/core-concepts/error-handling).


## Reporting handled errors

If you would like to send a handled error to Bugsnag, you can pass any Error object to Sentry notify method:
```typescript
import * as Sentry from '@nativescript-community/sentry';
try {
  // potentially crashy code
} catch (error) {
  Sentry.captureException(error);
}
```

## Reporting promise rejections

To report a promise rejection, use notify() as a part of the catch block:

```typescript
import * as Sentry from '@nativescript-community/sentry';
new Promise(function(resolve, reject) {
  /* potentially failing code */
})
.then(function () { /* if the promise is resolved */ })
.catch(function (error) {
  Sentry.captureException(error);
});
```

## Sending diagnostic data

### Automatically captured diagnostics

Bugsnag will automatically capture and attach the following diagnostic data:

* A full stacktrace
* Battery state
* Device model and OS version
* Thread state for all threads
* Release stage (production, debug, etc)
* App running duration in the foreground and/or background
* A device- and vendor-specific identifier


## Identifying users

In order to correlate errors with customer reports, or to see a list of users who experienced each error, it is helpful to capture and display user information. Information set on the Bugsnag client is sent with each error report:

```typescript
Sentry.setUser({"email": "john.doe@example.com"});
```

## Logging breadcrumbs

In order to understand what happened in your application before each crash, it can be helpful to leave short log statements that we call breadcrumbs. The last several breadcrumbs are attached to a crash to help diagnose what events lead to the error.

### Automatically captured breadcrumbs

By default, Bugsnag captures common events including:

* Low memory warnings
* Device rotation (if applicable)
* Menu presentation
* Screenshot capture (not the screenshot itself)
* Undo and redo
* Table view selection
*  Window visibility changes
* Non-fatal errors
* Log messages (off by default, see configuration options)

### Attaching custom breadcrumbs

To attach additional breadcrumbs, use the leaveBreadcrumb function:

```typescript
Sentry.addBreadcrumb({
    category: 'ui',
    message: 'load main view',
    level: 'info'
  });
```
