
module.exports = {
    id: 'org.nativescript.demovuesentry',
    appPath: 'app',
    appResourcesPath: 'app/App_Resources',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none',
    },
    discardUncaughtJsExceptions:false
};
