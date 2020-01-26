[![npm](https://img.shields.io/npm/v/nativescript-akylas-sentry.svg)](https://www.npmjs.com/package/nativescript-akylas-sentry)
[![npm](https://img.shields.io/npm/dt/nativescript-akylas-sentry.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-akylas-sentry)
[![GitHub forks](https://img.shields.io/github/forks/Akylas/nativescript-akylas-sentry.svg)](https://github.com/Akylas/nativescript-akylas-sentry/network)
[![GitHub stars](https://img.shields.io/github/stars/Akylas/nativescript-akylas-sentry.svg)](https://github.com/Akylas/nativescript-akylas-sentry/stargazers)

# Installation

* `tns plugin add nativescript-akylas-sentry`

Be sure to run a new build after adding plugins to avoid any issues.

# Usage

```typescript
import * as Sentry from 'nativescript-akylas-sentry';
Sentry.init({
        dsn: "__DSN__"
    });
```

## Reporting NativeScript errors

The `handleUncaughtErrors` method ensures all unhandled NativeScript errors will be caught by Sentry in production, using a [custom error handler](https://docs.nativescript.org/core-concepts/error-handling).


## Reporting handled errors

If you would like to send a handled error to Bugsnag, you can pass any Error object to Sentry notify method:
```typescript
import * as Sentry from 'nativescript-akylas-sentry';
try {
  // potentially crashy code
} catch (error) {
  Sentry.captureException(error);
}
```

## Reporting promise rejections

To report a promise rejection, use notify() as a part of the catch block:

```typescript
import * as Sentry from 'nativescript-akylas-sentry';
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
