import * as Sentry from '@nativescript-community/sentry';
import { File, knownFolders, path } from '@nativescript/core';
import { TextEncoder } from '@nativescript/core/text';
import { createArrayBuffer } from '@nativescript-community/arraybuffers';
declare class TestClass {
    static someMethod();
}

export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="Sentry Demo">
      </ActionBar>
      <StackLayout>
        <Button text="leaveBreadcrumb" @tap="leaveBreadcrumb"/>
        <Button text="message" @tap="message"/>
        <Button text="attachment" @tap="attachment"/>
        <Button text="attachmentFile" @tap="attachmentFile"/>
        <Button text="throwError" @tap="throwError"/>
        <Button text="crashTest" @tap="crashTest"/>
        <Button text="nativeCrashTest" @tap="nativeCrashTest"/>
        <Button text="androidNativeCrashTest" @tap="androidNativeCrashTest"/>
        <Button text="androidNativeCrashCatchedTest" @tap="androidNativeCrashCatchedTest"/>
        <Button text="flush" @tap="flush"/>
      </StackLayout>
    </Page>
    `,
    // data() {
    // },
    // mounted() {
    // },
    methods: {
        message() {
            Sentry.withScope(scope => {
                try {
                    scope.setTag('myTag', 'tag-value');
                    scope.setExtra('myExtra', 'extra-value');
                    scope.addBreadcrumb({ message: 'local breadcrumb' });
                    Sentry.captureMessage('Hello Sentry!');
                } catch (error) {
                    console.error(error);
                }
            });
        },
        attachment() {
            Sentry.withScope(scope => {
                try {
                    scope.addAttachment({
                        data:'this is a  test text file',
                        filename: 'test.jpg',
                    });

                    Sentry.captureMessage('Attachment!');
                } catch (error) {
                    console.error(error);
                }
            });
        },
        attachmentFile() {
            Sentry.withScope(scope => {
                try {
                    const filePath = path.join(knownFolders.currentApp().path, 'assets/map.geojson');
                    let typedArray;
                    if (__ANDROID__) {
                        const javaFile = new java.io.File(filePath);
                        const stream = new java.io.FileInputStream(javaFile);
                        typedArray = createArrayBuffer(stream.available(), true, false);
                        java.nio.channels.Channels.newChannel(stream).read(typedArray.buffer['nativeObject']);
                    }
                    if (__IOS__) {
                        const data = File.fromPath(filePath).readSync();
                        console.log('test', data, interop.bufferFromData(data));
                        typedArray = new Uint8Array(interop.bufferFromData(data));
                    }
                    scope.addAttachment({
                        data: typedArray.buffer,
                        filename: 'map.geojson',
                    });

                    Sentry.captureMessage('Attachment File!');
                } catch (error) {
                    console.error(error);
                }
            });
        },
        throwError() {
            
            Sentry.captureException(new Error('test_notify_error' + Date.now()));
        },
        leaveBreadcrumb() {
            Sentry.addBreadcrumb({ category: 'ui', message: 'global breadcrumb', level: 'info' as any });
        },
        crashTest() {
            Sentry.nativeCrash();
        },
        nativeCrashTest() {
            TestClass.someMethod();
        },
        androidNativeCrashCatchedTest() {
            try {
                console.log('androidNativeCrashTest', (com as any).nativescript.sentry.ClassExample.helloWorld('test3'));

            } catch (error) {
                // console.error('error', error);
                // console.error('keys', Object.keys(error));
                // console.error('nativeExceptio',  error.nativeException);
                console.error('stackTrace', error.stackTrace);
                console.error('stack', error.stack);
                // console.error('stack', error.stack);
                // console.error('stacktrace', error.stacktrace);
                Sentry.captureException(error);
            }
        },
        androidNativeCrashTest() {
            console.log('androidNativeCrashTest', (com as any).nativescript.sentry.ClassExample.helloWorld('test3'));
        },
        flush() {
            Sentry.flush();
        }
    }
};
