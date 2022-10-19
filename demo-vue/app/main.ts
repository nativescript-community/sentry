import * as Sentry from '@nativescript-community/sentry';
import { Application } from '@nativescript/core';
import { on as applicationOn, launchEvent } from '@nativescript/core/application';
import Vue from 'nativescript-vue';
import Home from './views/Home';



async function startSentry() {
    try {
        Sentry.init({
            dsn: SENTRY_DSN,
            debug: true,
            flushSendEvent: true,
            enableNativeCrashHandling: true,
            enableAutoPerformanceTracking: true
        });
        setTimeout(()=>{
            // Sentry.withScope(scope => {
            //     try {
            //         scope.setTag('myTag', 'tag-value');
            //         scope.setExtra('myExtra', 'extra-value');
            //         scope.addBreadcrumb({ message: 'test' });
            //         Sentry.captureMessage('Hello Sentry!');
            //     } catch (error) {
            //         console.error(error);
            //     }
            // });
        }, 1000);
    } catch(err){console.error(err, err.stack);}

}

if (!__ANDROID__ || Application.android.context) {
    startSentry();
} else {
    applicationOn(launchEvent, startSentry);

}

// let typedArray;
// const textDecoder = new TextDecoder();
// const textEncoder = new TextEncoder();
// const strTest = '';
// if (__IOS__){
//     let startTime = Date.now();
//     const testNSData  = NSString.stringWithString(strTest).dataUsingEncoding(NSUTF8StringEncoding);
//     typedArray = new Uint8Array(interop.bufferFromData(testNSData));
//     console.log('typedArray encoded', Date.now() - startTime, 'ms');
//     startTime = Date.now();
//     let decoded = NSString.alloc().initWithDataEncoding(typedArray.buffer, NSUTF8StringEncoding) + '';
//     console.log('typedArray decoded', decoded === strTest, Date.now() - startTime, 'ms');

//     startTime = Date.now();
//     typedArray = textEncoder.encode(strTest);
//     console.log('textDecoder encoded', Date.now() - startTime, 'ms');
//     startTime = Date.now();
//     decoded= textDecoder.decode(typedArray);
//     console.log('textDecoder decoded', decoded === strTest, Date.now() - startTime, 'ms');
// }
// if (__ANDROID__){
//     const charset = java.nio.charset.Charset.forName('UTF-8');
//     const nencoder = charset.newEncoder();
//     const ndecoder = charset.newDecoder();
//     let startTime = Date.now();
//     // @ts-ignore
//     const testByteArray  = new Uint8Array(ArrayBuffer.from(nencoder.encode(java.nio.CharBuffer.wrap(strTest))));
//     console.log('typedArray encoded', Date.now() - startTime, 'ms');
//     let decoded = ndecoder.decode(testByteArray.buffer as any).toString();
//     console.log('typedArray decoded', decoded === strTest, Date.now() - startTime, 'ms');

//     startTime = Date.now();
//     typedArray = textEncoder.encode(strTest);
//     console.log('textDecoder encoded', Date.now() - startTime, 'ms');
//     startTime = Date.now();
//     decoded= textDecoder.decode(typedArray);
//     console.log('textDecoder decoded', decoded === strTest, Date.now() - startTime, 'ms');
// }
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
