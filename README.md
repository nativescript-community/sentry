[![npm](https://img.shields.io/npm/v/nativescript-akylas-sentry.svg)](https://www.npmjs.com/package/nativescript-akylas-sentry)
[![npm](https://img.shields.io/npm/dt/nativescript-akylas-sentry.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-akylas-sentry)
[![GitHub forks](https://img.shields.io/github/forks/Akylas/nativescript-akylas-sentry.svg)](https://github.com/Akylas/nativescript-akylas-sentry/network)
[![GitHub stars](https://img.shields.io/github/stars/Akylas/nativescript-akylas-sentry.svg)](https://github.com/Akylas/nativescript-akylas-sentry/stargazers)

# Installation

* `tns plugin add nativescript-akylas-sentry`

Be sure to run a new build after adding plugins to avoid any issues.

# Usage

```typescript
import { Client } from 'nativescript-akylas-sentry';
const bugsnag = new Client();
bugsnag
    .init('YOUR_API_KEY')
    .then(res => {
        bugsnag.enableConsoleBreadcrumbs();
        bugsnag.handleUncaughtErrors();
        console.log('bugsnag did init', !!res);
    })
    .catch(err => {
        console.log('bugsnag  init failed', err);
    });
```

## Reporting NativeScript errors

The `handleUncaughtErrors` method ensures all unhandled NativeScript errors will be caught by Bugsnag in production, using a [custom error handler](https://docs.nativescript.org/core-concepts/error-handling).


## Reporting handled errors

If you would like to send a handled error to Bugsnag, you can pass any Error object to Bugsnag’s notify method:
```typescript
try {
  // potentially crashy code
} catch (error) {
  bugsnag.notify(error);
}
```

## Reporting promise rejections

To report a promise rejection, use notify() as a part of the catch block:

```typescript
new Promise(function(resolve, reject) {
  /* potentially failing code */
})
.then(function () { /* if the promise is resolved */ })
.catch(function (error) {
  bugsnag.notify(error); /* if the promise is rejected */
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

### Attaching custom diagnostics

It can often be helpful to attach application-specific diagnostic data to exception reports. This can be accomplished by adding a report callback to notify. The callback is invoked before the report is sent to Bugsnag:

```typescript
bugsnag.notify(error, function(report) {
  report.metadata = { "account": {
    "company": "Acme Co",
    "id": 123
    }
  }
});
```

## Identifying users

In order to correlate errors with customer reports, or to see a list of users who experienced each error, it is helpful to capture and display user information. Information set on the Bugsnag client is sent with each error report:

```typescript
bugsnag.setUser('1234', 'Jessica Jones', 'jess@example.com');
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
bugsnag.leaveBreadcrumb('load main view', {type: 'navigation'});
```

## Session tracking

Bugsnag tracks the number of “sessions” that happen within your application. This allows you to compare stability scores between releases and helps you to understand the quality of your releases.

Sessions are captured and reported by default. This behaviour can be disabled using the ```autoCaptureSessions``` configuration option.

Using this option, Bugsnag will report a session each time:

* The app is launched
* The app enters the foreground for the first time in 60 seconds

If you want control over what is deemed a session, you can switch off automatic session tracking with the ```autoCaptureSessions``` option, and manage the session lifecycle using ```startSession()```, ```stopSession()``` and ```resumeSession()```.
