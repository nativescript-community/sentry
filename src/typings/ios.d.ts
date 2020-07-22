interface CFRuntimeBase {
    _cfisa: number;
    _cfinfo: interop.Reference<number>;
    _rc: number;
}
declare let CFRuntimeBase: interop.StructType<CFRuntimeBase>;

declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare const OBJC_TAG_1: number;

declare const OBJC_TAG_7: number;

declare const OBJC_TAG_NSAtom: number;

declare const OBJC_TAG_NSDate: number;

declare const OBJC_TAG_NSIndexPath: number;

declare const OBJC_TAG_NSManagedObjectID: number;

declare const OBJC_TAG_NSNumber: number;

declare const OBJC_TAG_NSString: number;

declare class SentryAsynchronousOperation extends NSOperation {
    static alloc(): SentryAsynchronousOperation; // inherited from NSObject

    static new(): SentryAsynchronousOperation; // inherited from NSObject

    completeOperation(): void;
}

declare class SentryAutoBreadcrumbTrackingIntegration extends NSObject implements SentryIntegrationProtocol {
    static alloc(): SentryAutoBreadcrumbTrackingIntegration; // inherited from NSObject

    static new(): SentryAutoBreadcrumbTrackingIntegration; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    installWithOptions(options: SentryOptions): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryAutoSessionTrackingIntegration extends NSObject implements SentryIntegrationProtocol {
    static alloc(): SentryAutoSessionTrackingIntegration; // inherited from NSObject

    static new(): SentryAutoSessionTrackingIntegration; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    installWithOptions(options: SentryOptions): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    stop(): void;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {
    static alloc(): SentryBreadcrumb; // inherited from NSObject

    static new(): SentryBreadcrumb; // inherited from NSObject

    category: string;

    data: NSDictionary<string, any>;

    level: SentryLevel;

    message: string;

    timestamp: Date;

    type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { level: SentryLevel; category: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithLevelCategory(level: SentryLevel, category: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryBreadcrumbTracker extends NSObject {
    static alloc(): SentryBreadcrumbTracker; // inherited from NSObject

    static new(): SentryBreadcrumbTracker; // inherited from NSObject

    start(): void;
}

declare class SentryClient extends NSObject {
    static alloc(): SentryClient; // inherited from NSObject

    static new(): SentryClient; // inherited from NSObject

    options: SentryOptions;

    constructor(o: { options: SentryOptions });

    captureEnvelope(envelope: SentryEnvelope): string;

    captureErrorWithScope(error: NSError, scope: SentryScope): string;

    captureEventWithScope(event: SentryEvent, scope: SentryScope): string;

    captureExceptionWithScope(exception: NSException, scope: SentryScope): string;

    captureMessageWithScope(message: string, scope: SentryScope): string;

    captureSession(session: SentrySession): void;

    fileManager(): SentryFileManager;

    initWithOptions(options: SentryOptions): this;
}

declare class SentryConcurrentRateLimitsDictionary extends NSObject {
    static alloc(): SentryConcurrentRateLimitsDictionary; // inherited from NSObject

    static new(): SentryConcurrentRateLimitsDictionary; // inherited from NSObject

    addRateLimitValidUntil(category: SentryRateLimitCategory, date: Date): void;

    getRateLimitForCategory(category: SentryRateLimitCategory): Date;
}

declare class SentryCrash extends NSObject {
    static alloc(): SentryCrash; // inherited from NSObject

    static new(): SentryCrash; // inherited from NSObject

    static sharedInstance(): SentryCrash;

    readonly activeDurationSinceLastCrash: number;

    readonly activeDurationSinceLaunch: number;

    addConsoleLogToReport: boolean;

    readonly backgroundDurationSinceLastCrash: number;

    readonly backgroundDurationSinceLaunch: number;

    catchZombies: boolean;

    readonly crashedLastLaunch: boolean;

    currentSnapshotUserReportedExceptionHandler: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

    deadlockWatchdogInterval: number;

    deleteBehaviorAfterSendAll: SentryCrashCDeleteBehavior;

    demangleLanguages: SentryCrashDemangleLanguage;

    doNotIntrospectClasses: NSArray<any>;

    introspectMemory: boolean;

    readonly launchesSinceLastCrash: number;

    maxReportCount: number;

    monitoring: SentryCrashMonitorType;

    onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;

    printPreviousLog: boolean;

    readonly reportCount: number;

    readonly sessionsSinceLastCrash: number;

    readonly sessionsSinceLaunch: number;

    sink: SentryCrashReportFilter;

    readonly systemInfo: NSDictionary<any, any>;

    uncaughtExceptionHandler: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

    userInfo: NSDictionary<any, any>;

    constructor(o: { basePath: string });

    deleteAllReports(): void;

    deleteReportWithID(reportID: number): void;

    initWithBasePath(basePath: string): this;

    install(): boolean;

    reportIDs(): NSArray<any>;

    reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(
        name: string,
        reason: string,
        language: string,
        lineOfCode: string,
        stackTrace: NSArray<any> | any[],
        logAllThreads: boolean,
        terminateProgram: boolean
    ): void;

    reportWithID(reportID: number): NSDictionary<any, any>;

    sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}

interface SentryCrashBinaryImage {
    address: number;
    vmAddress: number;
    size: number;
    name: string;
    uuid: string;
    cpuType: number;
    cpuSubType: number;
    majorVersion: number;
    minorVersion: number;
    revisionVersion: number;
}
declare let SentryCrashBinaryImage: interop.StructType<SentryCrashBinaryImage>;

interface SentryCrashBinaryImageProvider extends NSObjectProtocol {
    getBinaryImage(index: number): SentryCrashBinaryImage;

    getImageCount(): number;
}
declare let SentryCrashBinaryImageProvider: {
    prototype: SentryCrashBinaryImageProvider;
};

declare class SentryCrashBinaryImageUtil extends NSObject {
    static alloc(): SentryCrashBinaryImageUtil; // inherited from NSObject

    static new(): SentryCrashBinaryImageUtil; // inherited from NSObject
}

interface SentryCrashBufferedReader {
    buffer: string;
    bufferLength: number;
    dataStartPos: number;
    dataEndPos: number;
    fd: number;
}
declare let SentryCrashBufferedReader: interop.StructType<SentryCrashBufferedReader>;

interface SentryCrashBufferedWriter {
    buffer: string;
    bufferLength: number;
    position: number;
    fd: number;
}
declare let SentryCrashBufferedWriter: interop.StructType<SentryCrashBufferedWriter>;

declare const enum SentryCrashCDeleteBehavior {
    Never = 0,

    OnSucess = 1,

    Always = 2,
}

declare class SentryCrashCString extends NSObject {
    static alloc(): SentryCrashCString; // inherited from NSObject

    static new(): SentryCrashCString; // inherited from NSObject

    static stringWithCString(string: string | interop.Pointer | interop.Reference<any>): SentryCrashCString;

    static stringWithData(data: NSData): SentryCrashCString;

    static stringWithDataLength(data: string | interop.Pointer | interop.Reference<any>, length: number): SentryCrashCString;

    static stringWithString(string: string): SentryCrashCString;

    readonly bytes: string;

    readonly length: number;

    constructor(o: { CString: string | interop.Pointer | interop.Reference<any> });

    constructor(o: { data: NSData });

    constructor(o: { data: string | interop.Pointer | interop.Reference<any>; length: number });

    constructor(o: { string: string });

    initWithCString(string: string | interop.Pointer | interop.Reference<any>): this;

    initWithData(data: NSData): this;

    initWithDataLength(data: string | interop.Pointer | interop.Reference<any>, length: number): this;

    initWithString(string: string): this;
}

declare class SentryCrashDefaultBinaryImageProvider extends NSObject implements SentryCrashBinaryImageProvider {
    static alloc(): SentryCrashDefaultBinaryImageProvider; // inherited from NSObject

    static new(): SentryCrashDefaultBinaryImageProvider; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    getBinaryImage(index: number): SentryCrashBinaryImage;

    getImageCount(): number;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashDefaultMachineContextWrapper extends NSObject implements SentryCrashMachineContextWrapper {
    static alloc(): SentryCrashDefaultMachineContextWrapper; // inherited from NSObject

    static new(): SentryCrashDefaultMachineContextWrapper; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    getThreadNameAndBufferAndBufLength(thread: number, buffer: string | interop.Pointer | interop.Reference<any>, bufLength: number): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare const enum SentryCrashDemangleLanguage {
    None = 0,

    CPlusPlus = 1,

    Swift = 2,

    All = -2,
}

declare class SentryCrashDoctor extends NSObject {
    static alloc(): SentryCrashDoctor; // inherited from NSObject

    static doctor(): SentryCrashDoctor;

    static new(): SentryCrashDoctor; // inherited from NSObject

    diagnoseCrash(crashReport: NSDictionary<any, any>): string;
}

declare class SentryCrashExceptionApplication extends NSObject {
    static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

    static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare let SentryCrashFrameworkVersionNumber: number;

declare let SentryCrashFrameworkVersionString: interop.Reference<number>;

declare class SentryCrashInstallation extends NSObject {
    static alloc(): SentryCrashInstallation; // inherited from NSObject

    static new(): SentryCrashInstallation; // inherited from NSObject

    onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;

    constructor(o: { requiredProperties: NSArray<any> | any[] });

    addPreFilter(filter: SentryCrashReportFilter): void;

    initWithRequiredProperties(requiredProperties: NSArray<any> | any[]): this;

    install(): void;

    makeKeyPath(keyPath: string): string;

    makeKeyPaths(keyPaths: NSArray<any> | any[]): NSArray<any>;

    reportFieldForPropertySetKey(propertyName: string, key: any): void;

    reportFieldForPropertySetValue(propertyName: string, value: any): void;

    sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    sink(): SentryCrashReportFilter;
}

declare class SentryCrashInstallationReporter extends SentryCrashInstallation {
    static alloc(): SentryCrashInstallationReporter; // inherited from NSObject

    static new(): SentryCrashInstallationReporter; // inherited from NSObject

    sendAllReports(): void;
}

declare class SentryCrashIntegration extends NSObject implements SentryIntegrationProtocol {
    static alloc(): SentryCrashIntegration; // inherited from NSObject

    static new(): SentryCrashIntegration; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    installWithOptions(options: SentryOptions): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashJSONCodec extends NSObject {
    static alloc(): SentryCrashJSONCodec; // inherited from NSObject

    static decodeOptionsError(JSONData: NSData, options: SentryCrashJSONDecodeOption): any;

    static encodeOptionsError(object: any, options: SentryCrashJSONEncodeOption): NSData;

    static new(): SentryCrashJSONCodec; // inherited from NSObject
}

interface SentryCrashJSONDecodeCallbacks {
    onBooleanElement: interop.FunctionReference<(p1: string, p2: boolean, p3: interop.Pointer | interop.Reference<any>) => number>;
    onFloatingPointElement: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
    onIntegerElement: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
    onNullElement: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
    onStringElement: interop.FunctionReference<(p1: string, p2: string, p3: interop.Pointer | interop.Reference<any>) => number>;
    onBeginObject: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
    onBeginArray: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
    onEndContainer: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => number>;
    onEndData: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => number>;
}
declare let SentryCrashJSONDecodeCallbacks: interop.StructType<SentryCrashJSONDecodeCallbacks>;

declare const enum SentryCrashJSONDecodeOption {
    None = 0,

    IgnoreNullInArray = 1,

    IgnoreNullInObject = 2,

    IgnoreAllNulls = 3,

    KeepPartialObject = 4,
}

interface SentryCrashJSONEncodeContext {
    addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
    userData: interop.Pointer | interop.Reference<any>;
    containerLevel: number;
    isObject: interop.Reference<boolean>;
    containerFirstEntry: boolean;
    prettyPrint: boolean;
}
declare let SentryCrashJSONEncodeContext: interop.StructType<SentryCrashJSONEncodeContext>;

declare const enum SentryCrashJSONEncodeOption {
    None = 0,

    Pretty = 1,

    Sorted = 2,
}

declare const SentryCrashJSON_ERROR_CANNOT_ADD_DATA: number;

declare const SentryCrashJSON_ERROR_DATA_TOO_LONG: number;

declare const SentryCrashJSON_ERROR_INCOMPLETE: number;

declare const SentryCrashJSON_ERROR_INVALID_CHARACTER: number;

declare const SentryCrashJSON_ERROR_INVALID_DATA: number;

declare const SentryCrashJSON_OK: number;

interface SentryCrashMachineContextWrapper extends NSObjectProtocol {
    getThreadNameAndBufferAndBufLength(thread: number, buffer: string | interop.Pointer | interop.Reference<any>, bufLength: number): void;
}
declare let SentryCrashMachineContextWrapper: {
    prototype: SentryCrashMachineContextWrapper;
};

declare const enum SentryCrashMonitorType {
    MachException = 1,

    Signal = 2,

    CPPException = 4,

    NSException = 8,

    MainThreadDeadlock = 16,

    UserReported = 32,

    System = 64,

    ApplicationState = 128,

    Zombie = 256,
}

declare const enum SentryCrashObjCClassType {
    Unknown = 0,

    String = 1,

    Date = 2,

    URL = 3,

    Array = 4,

    Dictionary = 5,

    Number = 6,

    Exception = 7,
}

interface SentryCrashObjCIvar {
    name: string;
    type: string;
    index: number;
}
declare let SentryCrashObjCIvar: interop.StructType<SentryCrashObjCIvar>;

declare const enum SentryCrashObjCType {
    Unknown = 0,

    Class = 1,

    Object = 2,

    Block = 3,
}

declare class SentryCrashReportConverter extends NSObject {
    static alloc(): SentryCrashReportConverter; // inherited from NSObject

    static new(): SentryCrashReportConverter; // inherited from NSObject

    userContext: NSDictionary<any, any>;

    constructor(o: { report: NSDictionary<any, any> });

    convertReportToEvent(): SentryEvent;

    initWithReport(report: NSDictionary<any, any>): this;
}

interface SentryCrashReportFilter extends NSObjectProtocol {
    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}
declare let SentryCrashReportFilter: {
    prototype: SentryCrashReportFilter;
};

declare class SentryCrashReportFilterCombine extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterCombine; // inherited from NSObject

    static filterWithFiltersAndKeys(firstFilter: any): SentryCrashReportFilterCombine;

    static new(): SentryCrashReportFilterCombine; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { filtersAndKeys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    initWithFiltersAndKeys(firstFilter: any): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterConcatenate extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterConcatenate; // inherited from NSObject

    static filterWithSeparatorFmtKeys(separatorFmt: string, firstKey: any): SentryCrashReportFilterConcatenate;

    static new(): SentryCrashReportFilterConcatenate; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { separatorFmt: string; keys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    initWithSeparatorFmtKeys(separatorFmt: string, firstKey: any): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterDataToString extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterDataToString; // inherited from NSObject

    static filter(): SentryCrashReportFilterDataToString;

    static new(): SentryCrashReportFilterDataToString; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterObjectForKey extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterObjectForKey; // inherited from NSObject

    static filterWithKeyAllowNotFound(key: any, allowNotFound: boolean): SentryCrashReportFilterObjectForKey;

    static new(): SentryCrashReportFilterObjectForKey; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { key: any; allowNotFound: boolean });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    initWithKeyAllowNotFound(key: any, allowNotFound: boolean): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterPassthrough extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterPassthrough; // inherited from NSObject

    static filter(): SentryCrashReportFilterPassthrough;

    static new(): SentryCrashReportFilterPassthrough; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterPipeline extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterPipeline; // inherited from NSObject

    static filterWithFilters(firstFilter: any): SentryCrashReportFilterPipeline;

    static new(): SentryCrashReportFilterPipeline; // inherited from NSObject

    readonly filters: NSArray<any>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { filters: any });

    addFilter(filter: SentryCrashReportFilter): void;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    initWithFilters(firstFilter: any): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterStringToData extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterStringToData; // inherited from NSObject

    static filter(): SentryCrashReportFilterStringToData;

    static new(): SentryCrashReportFilterStringToData; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportFilterSubset extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportFilterSubset; // inherited from NSObject

    static filterWithKeys(firstKeyPath: any): SentryCrashReportFilterSubset;

    static new(): SentryCrashReportFilterSubset; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { keys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    initWithKeys(firstKeyPath: any): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryCrashReportSink extends NSObject implements SentryCrashReportFilter {
    static alloc(): SentryCrashReportSink; // inherited from NSObject

    static new(): SentryCrashReportSink; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

interface SentryCrashReportWriter {
    addBooleanElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: boolean) => void>;
    addFloatingPointElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
    addIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
    addUIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
    addStringElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
    addTextFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
    addTextFileLinesElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
    addJSONFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
    addDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: number) => void>;
    beginDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
    appendDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
    endDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;
    addUUIDElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
    addJSONElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
    beginObject: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
    beginArray: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
    endContainer: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;
    context: interop.Pointer | interop.Reference<any>;
}
declare let SentryCrashReportWriter: interop.StructType<SentryCrashReportWriter>;

interface SentryCrashStackCursor {
    stackEntry: { address: number; imageName: string; imageAddress: number; symbolName: string; symbolAddress: number };
    state: { currentDepth: number; hasGivenUp: boolean };
    resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => void>;
    advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>;
    symbolicate: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>;
    context: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare let SentryCrashStackCursor: interop.StructType<SentryCrashStackCursor>;

interface SentryCrashStackCursor_Backtrace_Context {
    skippedEntries: number;
    backtraceLength: number;
    backtrace: interop.Pointer | interop.Reference<number>;
}
declare let SentryCrashStackCursor_Backtrace_Context: interop.StructType<SentryCrashStackCursor_Backtrace_Context>;

declare class SentryCrashStackEntryMapper extends NSObject {
    static alloc(): SentryCrashStackEntryMapper; // inherited from NSObject

    static isInApp(imageName: string): boolean;

    static mapStackEntryWithCursor(stackCursor: SentryCrashStackCursor): SentryFrame;

    static new(): SentryCrashStackEntryMapper; // inherited from NSObject
}

interface SentryCrash_AppState {
    activeDurationSinceLastCrash: number;
    backgroundDurationSinceLastCrash: number;
    launchesSinceLastCrash: number;
    sessionsSinceLastCrash: number;
    activeDurationSinceLaunch: number;
    backgroundDurationSinceLaunch: number;
    sessionsSinceLaunch: number;
    crashedLastLaunch: boolean;
    crashedThisLaunch: boolean;
    appStateTransitionTime: number;
    applicationIsActive: boolean;
    applicationIsInForeground: boolean;
}
declare let SentryCrash_AppState: interop.StructType<SentryCrash_AppState>;

declare class SentryCurrentDate extends NSObject {
    static alloc(): SentryCurrentDate; // inherited from NSObject

    static date(): Date;

    static new(): SentryCurrentDate; // inherited from NSObject

    static setCurrentDateProvider(currentDateProvider: SentryCurrentDateProvider): void;
}

interface SentryCurrentDateProvider extends NSObjectProtocol {
    date(): Date;
}
declare let SentryCurrentDateProvider: {
    prototype: SentryCurrentDateProvider;
};

declare class SentryDateUtil extends NSObject {
    static alloc(): SentryDateUtil; // inherited from NSObject

    static getMaximumDateAndOther(first: Date, second: Date): Date;

    static isInFuture(date: Date): boolean;

    static new(): SentryDateUtil; // inherited from NSObject
}

declare class SentryDebugMeta extends NSObject implements SentrySerializable {
    static alloc(): SentryDebugMeta; // inherited from NSObject

    static new(): SentryDebugMeta; // inherited from NSObject

    imageAddress: string;

    imageSize: number;

    imageVmAddress: string;

    name: string;

    type: string;

    uuid: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryDebugMetaBuilder extends NSObject {
    static alloc(): SentryDebugMetaBuilder; // inherited from NSObject

    static new(): SentryDebugMetaBuilder; // inherited from NSObject

    constructor(o: { binaryImageProvider: SentryCrashBinaryImageProvider });

    buildDebugMeta(): NSArray<SentryDebugMeta>;

    initWithBinaryImageProvider(binaryImageProvider: SentryCrashBinaryImageProvider): this;
}

declare class SentryDefaultCurrentDateProvider extends NSObject implements SentryCurrentDateProvider {
    static alloc(): SentryDefaultCurrentDateProvider; // inherited from NSObject

    static new(): SentryDefaultCurrentDateProvider; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    date(): Date;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare class SentryDefaultRateLimits extends NSObject implements SentryRateLimits {
    static alloc(): SentryDefaultRateLimits; // inherited from NSObject

    static new(): SentryDefaultRateLimits; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { retryAfterHeaderParser: SentryRetryAfterHeaderParser; andRateLimitParser: SentryRateLimitParser });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithRetryAfterHeaderParserAndRateLimitParser(retryAfterHeaderParser: SentryRetryAfterHeaderParser, rateLimitParser: SentryRateLimitParser): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    isRateLimitActive(category: SentryRateLimitCategory): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    update(response: NSHTTPURLResponse): void;
}

declare class SentryDsn extends NSObject {
    static alloc(): SentryDsn; // inherited from NSObject

    static new(): SentryDsn; // inherited from NSObject

    readonly url: NSURL;

    constructor(o: { string: string });

    getEnvelopeEndpoint(): NSURL;

    getHash(): string;

    getStoreEndpoint(): NSURL;

    initWithStringDidFailWithError(dsnString: string): this;
}

declare class SentryEnvelope extends NSObject {
    static alloc(): SentryEnvelope; // inherited from NSObject

    static new(): SentryEnvelope; // inherited from NSObject

    readonly header: SentryEnvelopeHeader;

    readonly items: NSArray<SentryEnvelopeItem>;

    constructor(o: { event: SentryEvent });

    constructor(o: { header: SentryEnvelopeHeader; items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[] });

    constructor(o: { header: SentryEnvelopeHeader; singleItem: SentryEnvelopeItem });

    constructor(o: { id: string; items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[] });

    constructor(o: { id: string; singleItem: SentryEnvelopeItem });

    constructor(o: { session: SentrySession });

    constructor(o: { sessions: NSArray<SentrySession> | SentrySession[] });

    initWithEvent(event: SentryEvent): this;

    initWithHeaderItems(header: SentryEnvelopeHeader, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

    initWithHeaderSingleItem(header: SentryEnvelopeHeader, item: SentryEnvelopeItem): this;

    initWithIdItems(id: string, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

    initWithIdSingleItem(id: string, item: SentryEnvelopeItem): this;

    initWithSession(session: SentrySession): this;

    initWithSessions(sessions: NSArray<SentrySession> | SentrySession[]): this;
}

declare class SentryEnvelopeHeader extends NSObject {
    static alloc(): SentryEnvelopeHeader; // inherited from NSObject

    static new(): SentryEnvelopeHeader; // inherited from NSObject

    readonly eventId: string;

    constructor(o: { id: string });

    initWithId(eventId: string): this;
}

declare class SentryEnvelopeItem extends NSObject {
    static alloc(): SentryEnvelopeItem; // inherited from NSObject

    static new(): SentryEnvelopeItem; // inherited from NSObject

    readonly data: NSData;

    readonly header: SentryEnvelopeItemHeader;

    constructor(o: { event: SentryEvent });

    constructor(o: { header: SentryEnvelopeItemHeader; data: NSData });

    constructor(o: { session: SentrySession });

    initWithEvent(event: SentryEvent): this;

    initWithHeaderData(header: SentryEnvelopeItemHeader, data: NSData): this;

    initWithSession(session: SentrySession): this;
}

declare class SentryEnvelopeItemHeader extends NSObject {
    static alloc(): SentryEnvelopeItemHeader; // inherited from NSObject

    static new(): SentryEnvelopeItemHeader; // inherited from NSObject

    readonly length: number;

    readonly type: string;

    constructor(o: { type: string; length: number });

    initWithTypeLength(type: string, length: number): this;
}

declare class SentryEnvelopeRateLimit extends NSObject {
    static alloc(): SentryEnvelopeRateLimit; // inherited from NSObject

    static new(): SentryEnvelopeRateLimit; // inherited from NSObject

    constructor(o: { rateLimits: SentryRateLimits });

    initWithRateLimits(sentryRateLimits: SentryRateLimits): this;

    removeRateLimitedItems(envelope: SentryEnvelope): SentryEnvelope;
}

declare const enum SentryError {
    kSentryErrorUnknownError = -1,

    kSentryErrorInvalidDsnError = 100,

    kSentryErrorSentryCrashNotInstalledError = 101,

    kSentryErrorInvalidCrashReportError = 102,

    kSentryErrorCompressionError = 103,

    kSentryErrorJsonConversionError = 104,

    kSentryErrorCouldNotFindDirectory = 105,

    kSentryErrorRequestError = 106,

    kSentryErrorEventNotSent = 107,
}

declare let SentryErrorDomain: string;

declare class SentryEvent extends NSObject implements SentrySerializable {
    static alloc(): SentryEvent; // inherited from NSObject

    static new(): SentryEvent; // inherited from NSObject

    breadcrumbs: NSArray<SentryBreadcrumb>;

    context: NSDictionary<string, NSDictionary<string, any>>;

    debugMeta: NSArray<SentryDebugMeta>;

    dist: string;

    environment: string;

    eventId: string;

    exceptions: NSArray<SentryException>;

    extra: NSDictionary<string, any>;

    fingerprint: NSArray<string>;

    json: NSData;

    level: SentryLevel;

    logger: string;

    message: string;

    modules: NSDictionary<string, string>;

    platform: string;

    releaseName: string;

    sdk: NSDictionary<string, any>;

    serverName: string;

    stacktrace: SentryStacktrace;

    startTimestamp: Date;

    tags: NSDictionary<string, string>;

    threads: NSArray<SentryThread>;

    timestamp: Date;

    transaction: string;

    type: string;

    user: SentryUser;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { JSON: NSData });

    constructor(o: { level: SentryLevel });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithJSON(json: NSData): this;

    initWithLevel(level: SentryLevel): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryException extends NSObject implements SentrySerializable {
    static alloc(): SentryException; // inherited from NSObject

    static new(): SentryException; // inherited from NSObject

    mechanism: SentryMechanism;

    module: string;

    thread: SentryThread;

    type: string;

    userReported: number;

    value: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { value: string; type: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithValueType(value: string, type: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryFileContents extends NSObject {
    static alloc(): SentryFileContents; // inherited from NSObject

    static new(): SentryFileContents; // inherited from NSObject

    readonly contents: NSData;

    readonly path: string;

    constructor(o: { path: string; andContents: NSData });

    initWithPathAndContents(path: string, contents: NSData): this;
}

declare class SentryFileManager extends NSObject {
    static alloc(): SentryFileManager; // inherited from NSObject

    static createDirectoryAtPathWithError(path: string): boolean;

    static new(): SentryFileManager; // inherited from NSObject

    maxEnvelopes: number;

    maxEvents: number;

    constructor(o: { dsn: SentryDsn });

    allFilesInFolder(path: string): NSArray<string>;

    deleteAllFolders(): void;

    deleteAllStoredEventsAndEnvelopes(): void;

    deleteCurrentSession(): void;

    deleteTimestampLastInForeground(): void;

    getAllEnvelopes(): NSArray<SentryFileContents>;

    getAllEventsAndMaybeEnvelopes(): NSArray<SentryFileContents>;

    getAllStoredEventsAndEnvelopes(): NSArray<SentryFileContents>;

    initWithDsnDidFailWithError(dsn: SentryDsn): this;

    readCurrentSession(): SentrySession;

    readTimestampLastInForeground(): Date;

    removeFileAtPath(path: string): boolean;

    storeCurrentSession(session: SentrySession): void;

    storeDictionaryToPath(dictionary: NSDictionary<any, any>, path: string): string;

    storeEnvelope(envelope: SentryEnvelope): string;

    storeEvent(event: SentryEvent): string;

    storeTimestampLastInForeground(timestamp: Date): void;
}

declare class SentryFrame extends NSObject implements SentrySerializable {
    static alloc(): SentryFrame; // inherited from NSObject

    static new(): SentryFrame; // inherited from NSObject

    columnNumber: number;

    fileName: string;

    function: string;

    imageAddress: string;

    inApp: number;

    instructionAddress: string;

    lineNumber: number;

    module: string;

    package: string;

    platform: string;

    symbolAddress: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryGlobalEventProcessor extends NSObject {
    static alloc(): SentryGlobalEventProcessor; // inherited from NSObject

    static new(): SentryGlobalEventProcessor; // inherited from NSObject

    static shared(): SentryGlobalEventProcessor;

    processors: NSMutableArray<(p1: SentryEvent) => SentryEvent>;

    addEventProcessor(newProcessor: (p1: SentryEvent) => SentryEvent): void;
}

declare class SentryHttpDateParser extends NSObject {
    static alloc(): SentryHttpDateParser; // inherited from NSObject

    static new(): SentryHttpDateParser; // inherited from NSObject

    dateFromString(string: string): Date;
}

declare class SentryHttpTransport extends NSObject implements SentryTransport {
    static alloc(): SentryHttpTransport; // inherited from NSObject

    static new(): SentryHttpTransport; // inherited from NSObject

    lastEvent: SentryEvent;

    shouldQueueEvent: (p1: NSHTTPURLResponse, p2: NSError) => boolean;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: {
        options: SentryOptions;
        sentryFileManager: SentryFileManager;
        sentryRequestManager: SentryRequestManager;
        sentryRateLimits: SentryRateLimits;
        sentryEnvelopeRateLimit: SentryEnvelopeRateLimit;
    });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithOptionsSentryFileManagerSentryRequestManagerSentryRateLimitsSentryEnvelopeRateLimit(
        options: SentryOptions,
        sentryFileManager: SentryFileManager,
        sentryRequestManager: SentryRequestManager,
        sentryRateLimits: SentryRateLimits,
        envelopeRateLimit: SentryEnvelopeRateLimit
    ): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    sendEnvelopeWithCompletionHandler(envelope: SentryEnvelope, completionHandler: (p1: NSError) => void): void;

    sendEventWithCompletionHandler(event: SentryEvent, completionHandler: (p1: NSError) => void): void;
}

declare class SentryHub extends NSObject {
    static alloc(): SentryHub; // inherited from NSObject

    static new(): SentryHub; // inherited from NSObject

    installedIntegrations: NSMutableArray<NSObject>;

    readonly session: SentrySession;

    constructor(o: { client: SentryClient; andScope: SentryScope });

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    bindClient(client: SentryClient): void;

    captureErrorWithScope(error: NSError, scope: SentryScope): string;

    captureEventWithScope(event: SentryEvent, scope: SentryScope): string;

    captureExceptionWithScope(exception: NSException, scope: SentryScope): string;

    captureMessageWithScope(message: string, scope: SentryScope): string;

    closeCachedSessionWithTimestamp(timestamp: Date): void;

    configureScope(callback: (p1: SentryScope) => void): void;

    endSessionWithTimestamp(timestamp: Date): void;

    getClient(): SentryClient;

    getIntegration(integrationName: string): any;

    getScope(): SentryScope;

    initWithClientAndScope(client: SentryClient, scope: SentryScope): this;

    isIntegrationInstalled(integrationClass: typeof NSObject): boolean;

    setUser(user: SentryUser): void;

    startSession(): void;
}

declare class SentryInstallation extends NSObject {
    static alloc(): SentryInstallation; // inherited from NSObject

    static id(): string;

    static new(): SentryInstallation; // inherited from NSObject
}

interface SentryIntegrationProtocol extends NSObjectProtocol {
    installWithOptions(options: SentryOptions): void;
}
declare let SentryIntegrationProtocol: {
    prototype: SentryIntegrationProtocol;
};

declare const enum SentryLevel {
    kSentryLevelNone = 0,

    kSentryLevelDebug = 1,

    kSentryLevelInfo = 2,

    kSentryLevelWarning = 3,

    kSentryLevelError = 4,

    kSentryLevelFatal = 5,
}

declare class SentryLog extends NSObject {
    static alloc(): SentryLog; // inherited from NSObject

    static logWithMessageAndLevel(message: string, level: SentryLogLevel): void;

    static new(): SentryLog; // inherited from NSObject
}

declare const enum SentryLogLevel {
    kSentryLogLevelNone = 1,

    kSentryLogLevelError = 2,

    kSentryLogLevelDebug = 3,

    kSentryLogLevelVerbose = 4,
}

declare class SentryMechanism extends NSObject implements SentrySerializable {
    static alloc(): SentryMechanism; // inherited from NSObject

    static new(): SentryMechanism; // inherited from NSObject

    data: NSDictionary<string, any>;

    desc: string;

    handled: number;

    helpLink: string;

    meta: NSDictionary<string, string>;

    type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { type: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithType(type: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryMeta extends NSObject {
    static alloc(): SentryMeta; // inherited from NSObject

    static new(): SentryMeta; // inherited from NSObject

    static readonly sdkName: string;

    static readonly versionString: string;
}

declare class SentryNSURLRequest extends NSMutableURLRequest {
    static alloc(): SentryNSURLRequest; // inherited from NSObject

    static new(): SentryNSURLRequest; // inherited from NSObject

    static requestWithURL(URL: NSURL): SentryNSURLRequest; // inherited from NSURLRequest

    static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): SentryNSURLRequest; // inherited from NSURLRequest

    constructor(o: { envelopeRequestWithDsn: SentryDsn; andData: NSData });

    constructor(o: { storeRequestWithDsn: SentryDsn; andData: NSData });

    constructor(o: { storeRequestWithDsn: SentryDsn; andEvent: SentryEvent });

    initEnvelopeRequestWithDsnAndDataDidFailWithError(dsn: SentryDsn, data: NSData): this;

    initStoreRequestWithDsnAndDataDidFailWithError(dsn: SentryDsn, data: NSData): this;

    initStoreRequestWithDsnAndEventDidFailWithError(dsn: SentryDsn, event: SentryEvent): this;
}

declare class SentryOptions extends NSObject {
    static alloc(): SentryOptions; // inherited from NSObject

    static defaultIntegrations(): NSArray<string>;

    static new(): SentryOptions; // inherited from NSObject

    attachStacktrace: number;

    beforeBreadcrumb: (p1: SentryBreadcrumb) => SentryBreadcrumb;

    beforeSend: (p1: SentryEvent) => SentryEvent;

    debug: number;

    dist: string;

    dsn: string;

    enableAutoSessionTracking: number;

    enabled: number;

    environment: string;

    integrations: NSArray<string>;

    logLevel: SentryLogLevel;

    maxBreadcrumbs: number;

    parsedDsn: SentryDsn;

    releaseName: string;

    sampleRate: number;

    sessionTrackingIntervalMillis: number;

    constructor(o: { dict: NSDictionary<string, any> });

    initWithDictDidFailWithError(options: NSDictionary<string, any>): this;
}

declare class SentryQueueableRequestManager extends NSObject implements SentryRequestManager {
    static alloc(): SentryQueueableRequestManager; // inherited from NSObject

    static new(): SentryQueueableRequestManager; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly ready: boolean; // inherited from SentryRequestManager

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { session: NSURLSession }); // inherited from SentryRequestManager

    addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): void;

    cancelAllOperations(): void;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithSession(session: NSURLSession): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;
}

declare const enum SentryRateLimitCategory {
    kSentryRateLimitCategoryAll = 0,

    kSentryRateLimitCategoryDefault = 1,

    kSentryRateLimitCategoryError = 2,

    kSentryRateLimitCategorySession = 3,

    kSentryRateLimitCategoryTransaction = 4,

    kSentryRateLimitCategoryAttachment = 5,

    kSentryRateLimitCategoryUnknown = 6,
}

declare class SentryRateLimitCategoryMapper extends NSObject {
    static alloc(): SentryRateLimitCategoryMapper; // inherited from NSObject

    static mapEnvelopeItemTypeToCategory(itemType: string): SentryRateLimitCategory;

    static mapEventTypeToCategory(eventType: string): SentryRateLimitCategory;

    static mapIntegerToCategory(value: number): SentryRateLimitCategory;

    static new(): SentryRateLimitCategoryMapper; // inherited from NSObject
}

declare class SentryRateLimitParser extends NSObject {
    static alloc(): SentryRateLimitParser; // inherited from NSObject

    static new(): SentryRateLimitParser; // inherited from NSObject

    parse(header: string): NSDictionary<number, Date>;
}

interface SentryRateLimits extends NSObjectProtocol {
    isRateLimitActive(category: SentryRateLimitCategory): boolean;

    update(response: NSHTTPURLResponse): void;
}
declare let SentryRateLimits: {
    prototype: SentryRateLimits;
};

interface SentryRequestManager extends NSObjectProtocol {
    ready: boolean;

    addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): void;

    cancelAllOperations(): void;

    initWithSession?(session: NSURLSession): SentryRequestManager;
}
declare let SentryRequestManager: {
    prototype: SentryRequestManager;
};

declare class SentryRequestOperation extends SentryAsynchronousOperation {
    static alloc(): SentryRequestOperation; // inherited from NSObject

    static new(): SentryRequestOperation; // inherited from NSObject

    constructor(o: { session: NSURLSession; request: NSURLRequest; completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void });

    initWithSessionRequestCompletionHandler(session: NSURLSession, request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): this;
}

declare class SentryRetryAfterHeaderParser extends NSObject {
    static alloc(): SentryRetryAfterHeaderParser; // inherited from NSObject

    static new(): SentryRetryAfterHeaderParser; // inherited from NSObject

    constructor(o: { httpDateParser: SentryHttpDateParser });

    initWithHttpDateParser(httpDateParser: SentryHttpDateParser): this;

    parse(retryAfterHeader: string): Date;
}

declare class SentrySDK extends NSObject {
    static addBreadcrumb(crumb: SentryBreadcrumb): void;

    static alloc(): SentrySDK; // inherited from NSObject

    static captureError(error: NSError): string;

    static captureErrorWithScope(error: NSError, scope: SentryScope): string;

    static captureErrorWithScopeBlock(error: NSError, block: (p1: SentryScope) => void): string;

    static captureEvent(event: SentryEvent): string;

    static captureEventWithScope(event: SentryEvent, scope: SentryScope): string;

    static captureEventWithScopeBlock(event: SentryEvent, block: (p1: SentryScope) => void): string;

    static captureException(exception: NSException): string;

    static captureExceptionWithScope(exception: NSException, scope: SentryScope): string;

    static captureExceptionWithScopeBlock(exception: NSException, block: (p1: SentryScope) => void): string;

    static captureMessage(message: string): string;

    static captureMessageWithScope(message: string, scope: SentryScope): string;

    static captureMessageWithScopeBlock(message: string, block: (p1: SentryScope) => void): string;

    static configureScope(callback: (p1: SentryScope) => void): void;

    static crash(): void;

    static currentHub(): SentryHub;

    static initWithOptions(optionsDict: NSDictionary<string, any>): SentrySDK;

    static initWithOptionsObject(options: SentryOptions): SentrySDK;

    static new(): SentrySDK; // inherited from NSObject

    static setCurrentHub(hub: SentryHub): void;

    static setUser(user: SentryUser): void;

    static startWithConfigureOptions(configureOptions: (p1: SentryOptions) => void): void;

    static startWithOptions(optionsDict: NSDictionary<string, any>): void;

    static startWithOptionsObject(options: SentryOptions): void;

    static logLevel: SentryLogLevel;
}

declare class SentryScope extends NSObject implements SentrySerializable {
    static alloc(): SentryScope; // inherited from NSObject

    static new(): SentryScope; // inherited from NSObject

    listeners: NSMutableArray<(p1: SentryScope) => void>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { maxBreadcrumbs: number });

    constructor(o: { scope: SentryScope });

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    addScopeListener(listener: (p1: SentryScope) => void): void;

    applyToEventMaxBreadcrumb(event: SentryEvent, maxBreadcrumbs: number): SentryEvent;

    applyToSession(session: SentrySession): void;

    class(): typeof NSObject;

    clear(): void;

    clearBreadcrumbs(): void;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithMaxBreadcrumbs(maxBreadcrumbs: number): this;

    initWithScope(scope: SentryScope): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    notifyListeners(): void;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    removeContextForKey(key: string): void;

    removeExtraForKey(key: string): void;

    removeTagForKey(key: string): void;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;

    setContextValueForKey(value: NSDictionary<string, any>, key: string): void;

    setDist(dist: string): void;

    setEnvironment(environment: string): void;

    setExtraValueForKey(value: any, key: string): void;

    setExtras(extras: NSDictionary<string, any>): void;

    setFingerprint(fingerprint: NSArray<string> | string[]): void;

    setLevel(level: SentryLevel): void;

    setTagValueForKey(value: string, key: string): void;

    setTags(tags: NSDictionary<string, string>): void;

    setUser(user: SentryUser): void;
}

interface SentrySerializable extends NSObjectProtocol {
    serialize(): NSDictionary<string, any>;
}
declare let SentrySerializable: {
    prototype: SentrySerializable;
};

declare class SentrySerialization extends NSObject {
    static alloc(): SentrySerialization; // inherited from NSObject

    static dataWithEnvelopeOptionsError(envelope: SentryEnvelope, opt: NSJSONWritingOptions): NSData;

    static dataWithJSONObjectOptionsError(dictionary: NSDictionary<any, any>, opt: NSJSONWritingOptions): NSData;

    static dataWithSessionOptionsError(session: SentrySession, opt: NSJSONWritingOptions): NSData;

    static envelopeWithData(data: NSData): SentryEnvelope;

    static new(): SentrySerialization; // inherited from NSObject

    static sessionWithData(sessionData: NSData): SentrySession;
}

declare class SentrySession extends NSObject {
    static alloc(): SentrySession; // inherited from NSObject

    static new(): SentrySession; // inherited from NSObject

    readonly distinctId: string;

    readonly duration: number;

    environment: string;

    readonly errors: number;

    readonly flagInit: number;

    readonly releaseName: string;

    readonly sequence: number;

    readonly sessionId: NSUUID;

    readonly started: Date;

    readonly status: SentrySessionStatus;

    readonly timestamp: Date;

    user: SentryUser;

    constructor(o: { JSONObject: NSDictionary<any, any> });

    constructor(o: { releaseName: string });

    endSessionAbnormalWithTimestamp(timestamp: Date): void;

    endSessionCrashedWithTimestamp(timestamp: Date): void;

    endSessionExitedWithTimestamp(timestamp: Date): void;

    incrementErrors(): void;

    initWithJSONObject(jsonObject: NSDictionary<any, any>): this;

    initWithReleaseName(releaseName: string): this;

    serialize(): NSDictionary<string, any>;
}

declare const enum SentrySessionStatus {
    kSentrySessionStatusOk = 0,

    kSentrySessionStatusExited = 1,

    kSentrySessionStatusCrashed = 2,

    kSentrySessionStatusAbnormal = 3,
}

declare class SentrySessionTracker extends NSObject {
    static alloc(): SentrySessionTracker; // inherited from NSObject

    static new(): SentrySessionTracker; // inherited from NSObject

    constructor(o: { options: SentryOptions; currentDateProvider: SentryCurrentDateProvider });

    initWithOptionsCurrentDateProvider(options: SentryOptions, currentDateProvider: SentryCurrentDateProvider): this;

    start(): void;

    stop(): void;
}

declare class SentryStacktrace extends NSObject implements SentrySerializable {
    static alloc(): SentryStacktrace; // inherited from NSObject

    static new(): SentryStacktrace; // inherited from NSObject

    frames: NSArray<SentryFrame>;

    registers: NSDictionary<string, string>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { frames: NSArray<SentryFrame> | SentryFrame[]; registers: NSDictionary<string, string> });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    fixDuplicateFrames(): void;

    initWithFramesRegisters(frames: NSArray<SentryFrame> | SentryFrame[], registers: NSDictionary<string, string>): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryStacktraceBuilder extends NSObject {
    static alloc(): SentryStacktraceBuilder; // inherited from NSObject

    static new(): SentryStacktraceBuilder; // inherited from NSObject

    buildStacktraceForCurrentThreadSkippingFrames(framesToSkip: number): SentryStacktrace;
}

declare class SentrySwizzle extends NSObject {
    static alloc(): SentrySwizzle; // inherited from NSObject

    static new(): SentrySwizzle; // inherited from NSObject

    static swizzleClassMethodInClassNewImpFactory(selector: string, classToSwizzle: typeof NSObject, factoryBlock: (p1: SentrySwizzleInfo) => any): void;

    static swizzleInstanceMethodInClassNewImpFactoryModeKey(
        selector: string,
        classToSwizzle: typeof NSObject,
        factoryBlock: (p1: SentrySwizzleInfo) => any,
        mode: SentrySwizzleMode,
        key: interop.Pointer | interop.Reference<any>
    ): boolean;
}

declare class SentrySwizzleInfo extends NSObject {
    static alloc(): SentrySwizzleInfo; // inherited from NSObject

    static new(): SentrySwizzleInfo; // inherited from NSObject

    readonly selector: string;

    getOriginalImplementation(): interop.FunctionReference<() => void>;
}

declare const enum SentrySwizzleMode {
    Always = 0,

    OncePerClass = 1,

    OncePerClassAndSuperclasses = 2,
}

declare class SentrySystemEventsBreadcrumbs extends NSObject {
    static alloc(): SentrySystemEventsBreadcrumbs; // inherited from NSObject

    static new(): SentrySystemEventsBreadcrumbs; // inherited from NSObject

    start(): void;
}

declare class SentryThread extends NSObject implements SentrySerializable {
    static alloc(): SentryThread; // inherited from NSObject

    static new(): SentryThread; // inherited from NSObject

    crashed: number;

    current: number;

    name: string;

    stacktrace: SentryStacktrace;

    threadId: number;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { threadId: number });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithThreadId(threadId: number): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare class SentryThreadInspector extends NSObject {
    static alloc(): SentryThreadInspector; // inherited from NSObject

    static new(): SentryThreadInspector; // inherited from NSObject

    constructor(o: { stacktraceBuilder: SentryStacktraceBuilder; andMachineContextWrapper: SentryCrashMachineContextWrapper });

    getCurrentThreadsSkippingFrames(framesToSkip: number): NSArray<SentryThread>;

    initWithStacktraceBuilderAndMachineContextWrapper(stacktraceBuilder: SentryStacktraceBuilder, machineContextWrapper: SentryCrashMachineContextWrapper): this;
}

interface SentryTransport extends NSObjectProtocol {
    sendEnvelopeWithCompletionHandler(envelope: SentryEnvelope, completionHandler: (p1: NSError) => void): void;

    sendEventWithCompletionHandler(event: SentryEvent, completionHandler: (p1: NSError) => void): void;
}
declare let SentryTransport: {
    prototype: SentryTransport;
};

declare class SentryTransportFactory extends NSObject {
    static alloc(): SentryTransportFactory; // inherited from NSObject

    static initTransportSentryFileManager(options: SentryOptions, sentryFileManager: SentryFileManager): SentryTransport;

    static new(): SentryTransportFactory; // inherited from NSObject
}

declare class SentryUser extends NSObject implements NSCopying, SentrySerializable {
    static alloc(): SentryUser; // inherited from NSObject

    static new(): SentryUser; // inherited from NSObject

    data: NSDictionary<string, any>;

    email: string;

    ipAddress: string;

    userId: string;

    username: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { userId: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    initWithUserId(userId: string): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;
}

declare let SentryVersionNumber: number;

declare let SentryVersionNumberVar: number;

declare let SentryVersionString: interop.Reference<number>;

declare let SentryVersionStringVar: interop.Reference<number>;

interface __CFArray {
    _base: CFRuntimeBase;
    _count: number;
    _mutations: number;
    _mutInProgress: number;
    _store: interop.Pointer | interop.Reference<any>;
}
declare let __CFArray: interop.StructType<__CFArray>;

interface __CFArrayBucket {
    _item: interop.Pointer | interop.Reference<any>;
}
declare let __CFArrayBucket: interop.StructType<__CFArrayBucket>;

interface __CFArrayDeque {
    _leftIdx: number;
    _capacity: number;
}
declare let __CFArrayDeque: interop.StructType<__CFArrayDeque>;

interface __CFBasicHash {
    base: CFRuntimeBase;
    bits: {
        mutations: number;
        hash_style: number;
        keys_offset: number;
        counts_offset: number;
        counts_width: number;
        hashes_offset: number;
        strong_values: number;
        strong_keys: number;
        weak_values: number;
        weak_keys: number;
        int_values: number;
        int_keys: number;
        indirect_keys: number;
        used_buckets: number;
        deleted: number;
        num_buckets_idx: number;
        __kret: number;
        __vret: number;
        __krel: number;
        __vrel: number;
        __: number;
        null_rc: number;
        fast_grow: number;
        finalized: number;
        __kdes: number;
        __vdes: number;
        __kequ: number;
        __vequ: number;
        __khas: number;
        __kget: number;
    };
    pointers: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare let __CFBasicHash: interop.StructType<__CFBasicHash>;

interface __CFBasicHashCallbacks {
    retainValue: interop.FunctionReference<(p1: any, p2: number) => number>;
    retainKey: interop.FunctionReference<(p1: any, p2: number) => number>;
    releaseValue: interop.FunctionReference<(p1: any, p2: number) => void>;
    releaseKey: interop.FunctionReference<(p1: any, p2: number) => void>;
    equateValues: interop.FunctionReference<(p1: number, p2: number) => boolean>;
    equateKeys: interop.FunctionReference<(p1: number, p2: number) => boolean>;
    hashKey: interop.FunctionReference<(p1: number) => number>;
    getIndirectKey: interop.FunctionReference<(p1: number) => number>;
    copyValueDescription: interop.FunctionReference<(p1: number) => NSMutableString>;
    copyKeyDescription: interop.FunctionReference<(p1: number) => NSMutableString>;
}
declare let __CFBasicHashCallbacks: interop.StructType<__CFBasicHashCallbacks>;

interface __CFDate {
    _cfisa: number;
    _time: number;
}
declare let __CFDate: interop.StructType<__CFDate>;

interface __CFNumber {
    _base: CFRuntimeBase;
    _pad: number;
}
declare let __CFNumber: interop.StructType<__CFNumber>;

interface __CFURL {
    _cfBase: CFRuntimeBase;
    _flags: number;
    _encoding: number;
    _string: NSMutableString;
    _base: NSURL;
    _extra: interop.Pointer | interop.Reference<any>;
    _resourceInfo: interop.Pointer | interop.Reference<any>;
    _ranges: interop.Reference<CFRange>;
}
declare let __CFURL: interop.StructType<__CFURL>;

interface __inline1 {
    length: number;
}
declare let __inline1: interop.StructType<__inline1>;

declare const __kCFArrayDeque: number;

declare const __kCFArrayHasCFTypeCallBacks: number;

declare const __kCFArrayHasCustomCallBacks: number;

declare const __kCFArrayHasNullCallBacks: number;

declare const __kCFArrayImmutable: number;

declare const __kCFContentsMask: number;

declare const __kCFFreeContentsWhenDone: number;

declare const __kCFFreeContentsWhenDoneMask: number;

declare const __kCFHasContentsAllocator: number;

declare const __kCFHasContentsAllocatorMask: number;

declare const __kCFHasContentsDeallocator: number;

declare const __kCFHasContentsDeallocatorMask: number;

declare const __kCFHasInlineContents: number;

declare const __kCFHasLengthByte: number;

declare const __kCFHasLengthByteMask: number;

declare const __kCFHasNullByte: number;

declare const __kCFHasNullByteMask: number;

declare const __kCFIsMutable: number;

declare const __kCFIsMutableMask: number;

declare const __kCFIsUnicode: number;

declare const __kCFIsUnicodeMask: number;

declare const __kCFNotInlineContentsCustomFree: number;

declare const __kCFNotInlineContentsDefaultFree: number;

declare const __kCFNotInlineContentsNoFree: number;

interface __notInlineImmutable1 {
    buffer: interop.Pointer | interop.Reference<any>;
    length: number;
    contentsDeallocator: any;
}
declare let __notInlineImmutable1: interop.StructType<__notInlineImmutable1>;

interface __notInlineImmutable2 {
    buffer: interop.Pointer | interop.Reference<any>;
    contentsDeallocator: any;
}
declare let __notInlineImmutable2: interop.StructType<__notInlineImmutable2>;

interface __notInlineMutable {
    buffer: interop.Pointer | interop.Reference<any>;
    length: number;
    capacity: number;
    hasGap: number;
    isFixedCapacity: number;
    isExternalMutable: number;
    capacityProvidedExternally: number;
    desiredCapacity: number;
    contentsAllocator: any;
}
declare let __notInlineMutable: interop.StructType<__notInlineMutable>;

interface class_ro_t {
    flags: number;
    instanceStart: number;
    instanceSize: number;
    reserved: number;
    ivarLayout: string;
    name: string;
    baseMethodList: interop.Pointer | interop.Reference<method_list_t>;
    baseProtocols: interop.Pointer | interop.Reference<protocol_list_t>;
    ivars: interop.Pointer | interop.Reference<ivar_list_t>;
    weakIvarLayout: string;
    baseProperties: interop.Pointer | interop.Reference<property_list_t>;
}
declare let class_ro_t: interop.StructType<class_ro_t>;

interface class_rw_t {
    flags: number;
    version: number;
    ro: interop.Pointer | interop.Reference<class_ro_t>;
    methods: method_list_t;
    properties: property_list_t;
    protocols: protocol_list_t;
    firstSubclass: typeof NSObject;
    nextSiblingClass: typeof NSObject;
    demangledName: string;
}
declare let class_rw_t: interop.StructType<class_rw_t>;

interface class_t {
    isa: interop.Pointer | interop.Reference<class_t>;
    superclass: interop.Pointer | interop.Reference<class_t>;
    cache: interop.Pointer | interop.Reference<any>;
    vtable: interop.Pointer | interop.Reference<interop.FunctionReference<() => void>>;
    data_NEVER_USE: number;
}
declare let class_t: interop.StructType<class_t>;

declare let defaultMaxBreadcrumbs: number;

interface ivar_list_t {
    entsizeAndFlags: number;
    count: number;
    first: ivar_t;
}
declare let ivar_list_t: interop.StructType<ivar_list_t>;

interface ivar_t {
    offset: interop.Pointer | interop.Reference<number>;
    name: string;
    type: string;
    alignment_raw: number;
    size: number;
}
declare let ivar_t: interop.StructType<ivar_t>;

interface method_list_t {
    entsizeAndFlags: number;
    count: number;
    first: method_t;
}
declare let method_list_t: interop.StructType<method_list_t>;

interface method_t {
    name: string;
    types: string;
    imp: interop.FunctionReference<() => void>;
}
declare let method_t: interop.StructType<method_t>;

interface property_list_t {
    entsizeAndFlags: number;
    count: number;
    first: property_t;
}
declare let property_list_t: interop.StructType<property_list_t>;

interface property_t {
    name: string;
    attributes: string;
}
declare let property_t: interop.StructType<property_t>;

interface protocol_list_t {
    entsizeAndFlags: number;
    count: number;
    first: protocol_t;
}
declare let protocol_list_t: interop.StructType<protocol_list_t>;

interface protocol_t {
    isa: typeof NSObject;
    mangledName: string;
    protocols: interop.Pointer | interop.Reference<protocol_list_t>;
    instanceMethods: interop.Pointer | interop.Reference<method_list_t>;
    classMethods: interop.Pointer | interop.Reference<method_list_t>;
    optionalInstanceMethods: interop.Pointer | interop.Reference<method_list_t>;
    optionalClassMethods: interop.Pointer | interop.Reference<method_list_t>;
    instanceProperties: interop.Pointer | interop.Reference<property_list_t>;
    size: number;
    flags: number;
    extendedMethodTypes: interop.Pointer | interop.Reference<string>;
    _demangledName: string;
}
declare let protocol_t: interop.StructType<protocol_t>;

declare function sentrycrash_addUserReport(report: string, reportLength: number): number;

declare function sentrycrash_deleteAllReports(): void;

declare function sentrycrash_deleteReportWithID(reportID: number): void;

declare function sentrycrash_getReportCount(): number;

declare function sentrycrash_getReportIDs(reportIDs: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrash_install(appName: string, installPath: string): SentryCrashMonitorType;

declare function sentrycrash_notifyAppActive(isActive: boolean): void;

declare function sentrycrash_notifyAppCrash(): void;

declare function sentrycrash_notifyAppInForeground(isInForeground: boolean): void;

declare function sentrycrash_notifyAppTerminate(): void;

declare function sentrycrash_readReport(reportID: number): string;

declare function sentrycrash_reportUserException(name: string, reason: string, language: string, lineOfCode: string, stackTrace: string, logAllThreads: boolean, terminateProgram: boolean): void;

declare function sentrycrash_setAddConsoleLogToReport(shouldAddConsoleLogToReport: boolean): void;

declare function sentrycrash_setCrashNotifyCallback(onCrashNotify: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>): void;

declare function sentrycrash_setDeadlockWatchdogInterval(deadlockWatchdogInterval: number): void;

declare function sentrycrash_setDoNotIntrospectClasses(doNotIntrospectClasses: interop.Pointer | interop.Reference<string>, length: number): void;

declare function sentrycrash_setIntrospectMemory(introspectMemory: boolean): void;

declare function sentrycrash_setMaxReportCount(maxReportCount: number): void;

declare function sentrycrash_setMonitoring(monitors: SentryCrashMonitorType): SentryCrashMonitorType;

declare function sentrycrash_setPrintPreviousLog(shouldPrintPreviousLog: boolean): void;

declare function sentrycrash_setUserInfoJSON(userInfoJSON: string): void;

declare function sentrycrashccd_freeze(): void;

declare function sentrycrashccd_getAllThreads(threadCount: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<number>;

declare function sentrycrashccd_getQueueName(thread: number): string;

declare function sentrycrashccd_getThreadName(thread: number): string;

declare function sentrycrashccd_init(pollingIntervalInSeconds: number): void;

declare function sentrycrashccd_unfreeze(): void;

declare function sentrycrashcm_getActiveMonitors(): SentryCrashMonitorType;

declare function sentrycrashcm_notifyFatalExceptionCaptured(isAsyncSafeEnvironment: boolean): boolean;

declare function sentrycrashcm_reportUserException(name: string, reason: string, language: string, lineOfCode: string, stackTrace: string, logAllThreads: boolean, terminateProgram: boolean): void;

declare function sentrycrashcm_setActiveMonitors(monitorTypes: SentryCrashMonitorType): void;

declare function sentrycrashcm_setDeadlockHandlerWatchdogInterval(value: number): void;

declare function sentrycrashcpu_currentArch(): string;

declare function sentrycrashcpu_exceptionRegisterName(regNumber: number): string;

declare function sentrycrashcpu_i_fillState(thread: number, state: interop.Pointer | interop.Reference<number>, flavor: number, stateCount: number): boolean;

declare function sentrycrashcpu_normaliseInstructionPointer(ip: number): number;

declare function sentrycrashcpu_numExceptionRegisters(): number;

declare function sentrycrashcpu_numRegisters(): number;

declare function sentrycrashcpu_registerName(regNumber: number): string;

declare function sentrycrashcpu_stackGrowDirection(): number;

declare function sentrycrashcrf_fixupCrashReport(crashReport: string): string;

declare function sentrycrashcrs_addUserReport(report: string, reportLength: number): number;

declare function sentrycrashcrs_deleteAllReports(): void;

declare function sentrycrashcrs_deleteReportWithID(reportID: number): void;

declare function sentrycrashcrs_getNextCrashReportPath(crashReportPathBuffer: string): void;

declare function sentrycrashcrs_getReportCount(): number;

declare function sentrycrashcrs_getReportIDs(reportIDs: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrashcrs_initialize(appName: string, reportsPath: string): void;

declare function sentrycrashcrs_readReport(reportID: number): string;

declare function sentrycrashcrs_setMaxReportCount(maxReportCount: number): void;

declare function sentrycrashdate_utcStringFromTimestamp(timestamp: number, buffer21Chars: string): void;

declare function sentrycrashdebug_isBeingTraced(): boolean;

declare function sentrycrashdl_dladdr(address: number, info: interop.Pointer | interop.Reference<Dl_info>): boolean;

declare function sentrycrashdl_getBinaryImage(index: number, buffer: interop.Pointer | interop.Reference<SentryCrashBinaryImage>): boolean;

declare function sentrycrashdl_imageCount(): number;

declare function sentrycrashdl_imageNamed(imageName: string, exactMatch: boolean): number;

declare function sentrycrashdl_imageUUID(imageName: string, exactMatch: boolean): string;

declare function sentrycrashfu_closeBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>): void;

declare function sentrycrashfu_closeBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>): void;

declare function sentrycrashfu_deleteContentsOfPath(path: string): boolean;

declare function sentrycrashfu_flushBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>): boolean;

declare function sentrycrashfu_lastPathEntry(path: string): string;

declare function sentrycrashfu_makePath(absolutePath: string): boolean;

declare function sentrycrashfu_openBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>, path: string, readBuffer: string, readBufferLength: number): boolean;

declare function sentrycrashfu_openBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>, path: string, writeBuffer: string, writeBufferLength: number): boolean;

declare function sentrycrashfu_readBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>, dstBuffer: string, byteCount: number): number;

declare function sentrycrashfu_readBufferedReaderUntilChar(
    reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>,
    ch: number,
    dstBuffer: string,
    length: interop.Pointer | interop.Reference<number>
): boolean;

declare function sentrycrashfu_readBytesFromFD(fd: number, bytes: string, length: number): boolean;

declare function sentrycrashfu_readEntireFile(path: string, data: interop.Pointer | interop.Reference<string>, length: interop.Pointer | interop.Reference<number>, maxLength: number): boolean;

declare function sentrycrashfu_readLineFromFD(fd: number, buffer: string, maxLength: number): number;

declare function sentrycrashfu_removeFile(path: string, mustExist: boolean): boolean;

declare function sentrycrashfu_writeBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>, data: string, length: number): boolean;

declare function sentrycrashfu_writeBytesToFD(fd: number, bytes: string, length: number): boolean;

declare function sentrycrashfu_writeStringToFD(fd: number, string: string): boolean;

declare function sentrycrashid_generate(destinationBuffer37Bytes: string): void;

declare function sentrycrashjson_addBooleanElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, value: boolean): number;

declare function sentrycrashjson_addDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, value: string, length: number): number;

declare function sentrycrashjson_addFloatingPointElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, value: number): number;

declare function sentrycrashjson_addIntegerElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, value: number): number;

declare function sentrycrashjson_addJSONElement(
    encodeContext: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>,
    name: string,
    jsonData: string,
    jsonDataLength: number,
    closeLastContainer: boolean
): number;

declare function sentrycrashjson_addJSONFromFile(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, filename: string, closeLastContainer: boolean): number;

declare function sentrycrashjson_addNullElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_addRawJSONData(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, data: string, length: number): number;

declare function sentrycrashjson_addStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string, value: string, length: number): number;

declare function sentrycrashjson_appendDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, value: string, length: number): number;

declare function sentrycrashjson_appendStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, value: string, length: number): number;

declare function sentrycrashjson_beginArray(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_beginDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_beginElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_beginEncode(
    context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>,
    prettyPrint: boolean,
    addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>,
    userData: interop.Pointer | interop.Reference<any>
): void;

declare function sentrycrashjson_beginObject(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_beginStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string): number;

declare function sentrycrashjson_decode(
    data: string,
    length: number,
    stringBuffer: string,
    stringBufferLength: number,
    callbacks: interop.Pointer | interop.Reference<SentryCrashJSONDecodeCallbacks>,
    userData: interop.Pointer | interop.Reference<any>,
    errorOffset: interop.Pointer | interop.Reference<number>
): number;

declare function sentrycrashjson_endContainer(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endEncode(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_stringForError(error: number): string;

declare function sentrycrashlog_clearLogFile(): boolean;

declare function sentrycrashlog_setLogFilename(filename: string, overwrite: boolean): boolean;

declare function sentrycrashmach_exceptionName(exceptionType: number): string;

declare function sentrycrashmach_kernelReturnCodeName(returnCode: number): string;

declare function sentrycrashmach_machExceptionForSignal(signal: number): number;

declare function sentrycrashmach_signalForMachException(exception: number, code: number): number;

declare function sentrycrashmc_addReservedThread(thread: number): void;

declare function sentrycrashmc_contextSize(): number;

declare function sentrycrashmc_resumeEnvironment(): void;

declare function sentrycrashmc_suspendEnvironment(): void;

declare function sentrycrashmem_copyMaxPossible(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): number;

declare function sentrycrashmem_copySafely(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function sentrycrashmem_isMemoryReadable(memory: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function sentrycrashmem_maxReadableBytes(memory: interop.Pointer | interop.Reference<any>, tryByteCount: number): number;

declare function sentrycrashmonitortype_name(monitorType: SentryCrashMonitorType): string;

declare function sentrycrashobjc_arrayContents(arrayPtr: interop.Pointer | interop.Reference<any>, contents: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrashobjc_arrayCount(arrayPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_baseClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_className(classPtr: interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashobjc_copyStringContents(string: interop.Pointer | interop.Reference<any>, dst: string, maxLength: number): number;

declare function sentrycrashobjc_copyURLContents(nsurl: interop.Pointer | interop.Reference<any>, dst: string, maxLength: number): number;

declare function sentrycrashobjc_dateContents(datePtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_dictionaryCount(dict: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_dictionaryFirstEntry(
    dict: interop.Pointer | interop.Reference<any>,
    key: interop.Pointer | interop.Reference<number>,
    value: interop.Pointer | interop.Reference<number>
): boolean;

declare function sentrycrashobjc_getDescription(object: interop.Pointer | interop.Reference<any>, buffer: string, bufferLength: number): number;

declare function sentrycrashobjc_isClassNamed(classPtr: interop.Pointer | interop.Reference<any>, className: string): boolean;

declare function sentrycrashobjc_isKindOfClass(classPtr: interop.Pointer | interop.Reference<any>, className: string): boolean;

declare function sentrycrashobjc_isMetaClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isRootClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isValidObject(object: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isValidTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isaPointer(objectOrClassPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_ivarCount(classPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_ivarList(classPtr: interop.Pointer | interop.Reference<any>, dstIvars: interop.Pointer | interop.Reference<SentryCrashObjCIvar>, ivarsCount: number): number;

declare function sentrycrashobjc_ivarNamed(classPtr: interop.Pointer | interop.Reference<any>, name: string, dst: interop.Pointer | interop.Reference<SentryCrashObjCIvar>): boolean;

declare function sentrycrashobjc_ivarValue(objectPtr: interop.Pointer | interop.Reference<any>, ivarIndex: number, dst: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_numberAsFloat(object: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_numberAsInteger(object: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_numberIsFloat(object: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_objectClassName(objectPtr: interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashobjc_objectClassType(object: interop.Pointer | interop.Reference<any>): SentryCrashObjCClassType;

declare function sentrycrashobjc_objectType(objectOrClassPtr: interop.Pointer | interop.Reference<any>): SentryCrashObjCType;

declare function sentrycrashobjc_stringLength(stringPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_superClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_taggedPointerPayload(taggedObjectPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashreport_setDoNotIntrospectClasses(doNotIntrospectClasses: interop.Pointer | interop.Reference<string>, length: number): void;

declare function sentrycrashreport_setIntrospectMemory(shouldIntrospectMemory: boolean): void;

declare function sentrycrashreport_setUserInfoJSON(userInfoJSON: string): void;

declare function sentrycrashreport_setUserSectionWriteCallback(userSectionWriteCallback: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>): void;

declare function sentrycrashsc_initCursor(
    cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>,
    resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => void>,
    advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>
): void;

declare function sentrycrashsc_initSelfThread(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>, skipEntries: number): void;

declare function sentrycrashsc_initWithBacktrace(
    cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>,
    backtrace: interop.Pointer | interop.Reference<number>,
    backtraceLength: number,
    skipEntries: number
): void;

declare function sentrycrashsc_resetCursor(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>): void;

declare function sentrycrashsignal_fatalSignals(): interop.Pointer | interop.Reference<number>;

declare function sentrycrashsignal_numFatalSignals(): number;

declare function sentrycrashsignal_signalCodeName(signal: number, code: number): string;

declare function sentrycrashsignal_signalName(signal: number): string;

declare function sentrycrashstate_currentState(): interop.Pointer | interop.Reference<SentryCrash_AppState>;

declare function sentrycrashstate_initialize(stateFilePath: string): void;

declare function sentrycrashstate_notifyAppActive(isActive: boolean): void;

declare function sentrycrashstate_notifyAppCrash(): void;

declare function sentrycrashstate_notifyAppInForeground(isInForeground: boolean): void;

declare function sentrycrashstate_notifyAppTerminate(): void;

declare function sentrycrashstate_reset(): boolean;

declare function sentrycrashstring_extractHexValue(string: string, stringLength: number, result: interop.Pointer | interop.Reference<number>): boolean;

declare function sentrycrashstring_isNullTerminatedUTF8String(memory: interop.Pointer | interop.Reference<any>, minLength: number, maxLength: number): boolean;

declare function sentrycrashsymbolicator_symbolicate(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>): boolean;

declare function sentrycrashsysctl_getMacAddress(name: string, macAddressBuffer: string): boolean;

declare function sentrycrashsysctl_int32(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_int32ForName(name: string): number;

declare function sentrycrashsysctl_int64(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_int64ForName(name: string): number;

declare function sentrycrashsysctl_string(major_cmd: number, minor_cmd: number, value: string, maxSize: number): number;

declare function sentrycrashsysctl_stringForName(name: string, value: string, maxSize: number): number;

declare function sentrycrashsysctl_timeval(major_cmd: number, minor_cmd: number): timeval;

declare function sentrycrashsysctl_timevalForName(name: string): timeval;

declare function sentrycrashsysctl_uint32(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_uint32ForName(name: string): number;

declare function sentrycrashsysctl_uint64(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_uint64ForName(name: string): number;

declare function sentrycrashthread_getThreadName(thread: number, buffer: string, bufLength: number): boolean;

declare function sentrycrashthread_self(): number;

declare function sentrycrashzombie_className(object: interop.Pointer | interop.Reference<any>): string;
