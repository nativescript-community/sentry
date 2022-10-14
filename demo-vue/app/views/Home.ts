import * as Sentry from '@nativescript-community/sentry';
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
        <Button text="notify" @tap="notify"/>
        <Button text="throwError" @tap="throwError"/>
        <Button text="crashTest" @tap="crashTest"/>
        <Button text="nativeCrashTest" @tap="nativeCrashTest"/>
        <Button text="flush" @tap="flush"/>
      </StackLayout>
    </Page>
    `,
    // data() {
    // },
    // mounted() {
    // },
    methods: {
        notify() {
            Sentry.captureException(new Error('test_notify_error' + Date.now()));
        },
        throwError() {
            throw new Error('test_thrown_error');
        },
        leaveBreadcrumb() {
            Sentry.addBreadcrumb({ category: 'ui', message: 'test', level: 'info' as any });
        },
        crashTest() {
            Sentry.nativeCrash();
        },
        nativeCrashTest() {
            TestClass.someMethod();
        },
        flush() {
            Sentry.flush();
        }
    }
};
