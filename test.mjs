import { stackParserFromStackParserOptions } from '@sentry/utils';

const UNKNOWN_FUNCTION = undefined;

// function createFrame(filename, func, lineno, colno) {

function createFrame(frame) {
    frame.in_app = (frame.filename && !frame.filename.includes('node_modules')) || (!!frame.colno && !!frame.lineno);
    frame.platform = frame.filename.endsWith('.js') ? 'javascript'  : 'android';

    return frame;
}

const nativescriptRegex =
  /^\s*at (?:(.*\).*?|.*?) ?\()?((?:file|native|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const nativescriptFunc = line => {
    const parts = nativescriptRegex.exec(line);
    if (parts) {
        return createFrame({
            filename:parts[2],
            function:parts[1] || UNKNOWN_FUNCTION,
            lineno:parts[3] ? +parts[3] : undefined,
            colno:parts[4] ? +parts[4] : undefined
        });
    }
    return null;
};

const nativescriptLineParser = [30, nativescriptFunc];

const androidRegex =
  /^\s*(?:(.*\).*?|.*?) ?\()?((?:Native Method|[-a-z]+:)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const androidFunc = line => {
    const parts = androidRegex.exec(line);
    if (parts) {
        let func = UNKNOWN_FUNCTION, mod;
        if (parts[1]) {
            const splitted = parts[1].split('.');
            func = splitted[splitted.length-1];
            mod = splitted.slice(0, -1).join('.');
        }
        return createFrame({
            filename:parts[2],
            function:func,
            module:mod,
            lineno:parts[3] ? +parts[3] : undefined,
            colno:parts[4] ? +parts[4] : undefined
        });
    }
    return null;
};

const androidLineParser = [50, androidFunc];

const stackParser = stackParserFromStackParserOptions([nativescriptLineParser, androidLineParser]);

console.log('stackParser', stackParser(`at androidNativeCrashTest(file:///data/data/org.nativescript.demovuesentry/files/app/bundle.js:184:92)
at invokeWithErrorHandling(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:73859:26)
at invoker(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:74513:14)
at _handleEvent(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:23374:37)
at notify(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:23356:24)
at _emit(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:23403:18)
at ClickListenerImpl.onClick(file:///data/data/org.nativescript.demovuesentry/files/app/vendor.js:33101:19)
com.nativescript.sentry.ClassExample.helloWorld(ClassExample.java:5)
com.tns.Runtime.callJSMethodNative(Native Method)
com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1302)
com.tns.Runtime.callJSMethodImpl(Runtime.java:1188)
com.tns.Runtime.callJSMethod(Runtime.java:1175)
com.tns.Runtime.callJSMethod(Runtime.java:1153)
com.tns.Runtime.callJSMethod(Runtime.java:1149)
java.lang.Object_vendor_33094_28_ClickListenerImpl.onClick(Unknown Source:10)
android.view.View.performClick(View.java:7441)
android.view.View.performClickInternal(View.java:7418)
android.view.View.access$3700(View.java:835)
android.view.View$PerformClick.run(View.java:28676)
android.os.Handler.handleCallback(Handler.java:938)
android.os.Handler.dispatchMessage(Handler.java:99)
android.os.Looper.loopOnce(Looper.java:201)
android.os.Looper.loop(Looper.java:288)
android.app.ActivityThread.main(ActivityThread.java:7839)
java.lang.reflect.Method.invoke(Native Method)
com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:548)
com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1003)`));
