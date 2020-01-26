interface CFRuntimeBase {
    _cfisa: number;
    _cfinfo: interop.Reference<number>;
    _rc: number;
}
declare let CFRuntimeBase: interop.StructType<CFRuntimeBase>;

interface KSBinaryImage {
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
declare let KSBinaryImage: interop.StructType<KSBinaryImage>;

interface KSBufferedReader {
    buffer: string;
    bufferLength: number;
    dataStartPos: number;
    dataEndPos: number;
    fd: number;
}
declare let KSBufferedReader: interop.StructType<KSBufferedReader>;

interface KSBufferedWriter {
    buffer: string;
    bufferLength: number;
    position: number;
    fd: number;
}
declare let KSBufferedWriter: interop.StructType<KSBufferedWriter>;

declare const enum KSCDeleteBehavior {
    Never = 0,

    OnSucess = 1,

    Always = 2
}

declare class KSCString extends NSObject {
    static alloc(): KSCString; // inherited from NSObject

    static new(): KSCString; // inherited from NSObject

    static stringWithCString(string: string): KSCString;

    static stringWithData(data: NSData): KSCString;

    static stringWithDataLength(data: string, length: number): KSCString;

    static stringWithString(string: string): KSCString;

    readonly bytes: string;

    readonly length: number;

    constructor(o: { CString: string });

    constructor(o: { data: NSData });

    constructor(o: { data: string; length: number });

    constructor(o: { string: string });

    initWithCString(string: string): this;

    initWithData(data: NSData): this;

    initWithDataLength(data: string, length: number): this;

    initWithString(string: string): this;
}

declare class KSCrash extends NSObject {
    static alloc(): KSCrash; // inherited from NSObject

    static new(): KSCrash; // inherited from NSObject

    static sharedInstance(): KSCrash;

    readonly activeDurationSinceLastCrash: number;

    readonly activeDurationSinceLaunch: number;

    addConsoleLogToReport: boolean;

    readonly backgroundDurationSinceLastCrash: number;

    readonly backgroundDurationSinceLaunch: number;

    catchZombies: boolean;

    readonly crashedLastLaunch: boolean;

    deadlockWatchdogInterval: number;

    deleteBehaviorAfterSendAll: KSCDeleteBehavior;

    demangleLanguages: KSCrashDemangleLanguage;

    doNotIntrospectClasses: NSArray<any>;

    introspectMemory: boolean;

    readonly launchesSinceLastCrash: number;

    maxReportCount: number;

    monitoring: KSCrashMonitorType;

    onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>) => void>;

    printPreviousLog: boolean;

    readonly reportCount: number;

    readonly sessionsSinceLastCrash: number;

    readonly sessionsSinceLaunch: number;

    sink: KSCrashReportFilter;

    readonly systemInfo: NSDictionary<any, any>;

    uncaughtExceptionHandler: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

    userInfo: NSDictionary<any, any>;

    deleteAllReports(): void;

    install(): boolean;

    reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(
        name: string,
        reason: string,
        language: string,
        lineOfCode: string,
        stackTrace: NSArray<any>,
        logAllThreads: boolean,
        terminateProgram: boolean
    ): void;

    sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}

declare const enum KSCrashDemangleLanguage {
    None = 0,

    CPlusPlus = 1,

    Swift = 2,

    All = -2
}

declare let KSCrashFrameworkVersionNumber: number;

declare let KSCrashFrameworkVersionString: interop.Reference<number>;

declare class KSCrashInstallation extends NSObject {
    static alloc(): KSCrashInstallation; // inherited from NSObject

    static new(): KSCrashInstallation; // inherited from NSObject

    onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>) => void>;

    constructor(o: { requiredProperties: NSArray<any> });

    addPreFilter(filter: KSCrashReportFilter): void;

    initWithRequiredProperties(requiredProperties: NSArray<any>): this;

    install(): void;

    makeKeyPath(keyPath: string): string;

    makeKeyPaths(keyPaths: NSArray<any>): NSArray<any>;

    reportFieldForPropertySetKey(propertyName: string, key: any): void;

    reportFieldForPropertySetValue(propertyName: string, value: any): void;

    sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

    sink(): KSCrashReportFilter;
}

declare const enum KSCrashMonitorType {
    MachException = 1,

    Signal = 2,

    CPPException = 4,

    NSException = 8,

    MainThreadDeadlock = 16,

    UserReported = 32,

    System = 64,

    ApplicationState = 128,

    Zombie = 256
}

interface KSCrashReportFilter extends NSObjectProtocol {
    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}
declare let KSCrashReportFilter: {
    prototype: KSCrashReportFilter;
};

declare class KSCrashReportFilterCombine extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterCombine; // inherited from NSObject

    static filterWithFiltersAndKeys(firstFilter: any): KSCrashReportFilterCombine;

    static new(): KSCrashReportFilterCombine; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { filtersAndKeys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterConcatenate extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterConcatenate; // inherited from NSObject

    static filterWithSeparatorFmtKeys(separatorFmt: string, firstKey: any): KSCrashReportFilterConcatenate;

    static new(): KSCrashReportFilterConcatenate; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { separatorFmt: string; keys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterDataToString extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterDataToString; // inherited from NSObject

    static filter(): KSCrashReportFilterDataToString;

    static new(): KSCrashReportFilterDataToString; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterObjectForKey extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterObjectForKey; // inherited from NSObject

    static filterWithKeyAllowNotFound(key: any, allowNotFound: boolean): KSCrashReportFilterObjectForKey;

    static new(): KSCrashReportFilterObjectForKey; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { key: any; allowNotFound: boolean });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterPassthrough extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterPassthrough; // inherited from NSObject

    static filter(): KSCrashReportFilterPassthrough;

    static new(): KSCrashReportFilterPassthrough; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterPipeline extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterPipeline; // inherited from NSObject

    static filterWithFilters(firstFilter: any): KSCrashReportFilterPipeline;

    static new(): KSCrashReportFilterPipeline; // inherited from NSObject

    readonly filters: NSArray<any>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { filters: any });

    addFilter(filter: KSCrashReportFilter): void;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterStringToData extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterStringToData; // inherited from NSObject

    static filter(): KSCrashReportFilterStringToData;

    static new(): KSCrashReportFilterStringToData; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class KSCrashReportFilterSubset extends NSObject implements KSCrashReportFilter {
    static alloc(): KSCrashReportFilterSubset; // inherited from NSObject

    static filterWithKeys(firstKeyPath: any): KSCrashReportFilterSubset;

    static new(): KSCrashReportFilterSubset; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { keys: any });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

interface KSCrashReportWriter {
    addBooleanElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: boolean) => void>;
    addFloatingPointElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: number) => void>;
    addIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: number) => void>;
    addUIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: number) => void>;
    addStringElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string) => void>;
    addTextFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string) => void>;
    addTextFileLinesElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string) => void>;
    addJSONFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
    addDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string, p4: number) => void>;
    beginDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string) => void>;
    appendDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: number) => void>;
    endDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>) => void>;
    addUUIDElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string) => void>;
    addJSONElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
    beginObject: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string) => void>;
    beginArray: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>, p2: string) => void>;
    endContainer: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>) => void>;
    context: interop.Pointer | interop.Reference<any>;
}
declare let KSCrashReportWriter: interop.StructType<KSCrashReportWriter>;

declare let KSCrashVersionNumber: number;

declare let KSCrashVersionString: interop.Reference<number>;

declare class KSJSONCodec extends NSObject {
    static alloc(): KSJSONCodec; // inherited from NSObject

    static decodeOptionsError(JSONData: NSData, options: KSJSONDecodeOption): any;

    static encodeOptionsError(object: any, options: KSJSONEncodeOption): NSData;

    static new(): KSJSONCodec; // inherited from NSObject
}

interface KSJSONDecodeCallbacks {
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
declare let KSJSONDecodeCallbacks: interop.StructType<KSJSONDecodeCallbacks>;

declare const enum KSJSONDecodeOption {
    None = 0,

    IgnoreNullInArray = 1,

    IgnoreNullInObject = 2,

    IgnoreAllNulls = 3,

    KeepPartialObject = 4
}

interface KSJSONEncodeContext {
    addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
    userData: interop.Pointer | interop.Reference<any>;
    containerLevel: number;
    isObject: interop.Reference<boolean>;
    containerFirstEntry: boolean;
    prettyPrint: boolean;
}
declare let KSJSONEncodeContext: interop.StructType<KSJSONEncodeContext>;

declare const enum KSJSONEncodeOption {
    None = 0,

    Pretty = 1,

    Sorted = 2
}

declare const KSJSON_ERROR_CANNOT_ADD_DATA: number;

declare const KSJSON_ERROR_DATA_TOO_LONG: number;

declare const KSJSON_ERROR_INCOMPLETE: number;

declare const KSJSON_ERROR_INVALID_CHARACTER: number;

declare const KSJSON_ERROR_INVALID_DATA: number;

declare const KSJSON_OK: number;

declare const enum KSObjCClassType {
    Unknown = 0,

    String = 1,

    Date = 2,

    URL = 3,

    Array = 4,

    Dictionary = 5,

    Number = 6,

    Exception = 7
}

interface KSObjCIvar {
    name: string;
    type: string;
    index: number;
}
declare let KSObjCIvar: interop.StructType<KSObjCIvar>;

declare const enum KSObjCType {
    Unknown = 0,

    Class = 1,

    Object = 2,

    Block = 3
}

interface KSStackCursor {
    stackEntry: { address: number; imageName: string; imageAddress: number; symbolName: string; symbolAddress: number };
    state: { currentDepth: number; hasGivenUp: boolean };
    resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSStackCursor>) => void>;
    advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSStackCursor>) => boolean>;
    symbolicate: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSStackCursor>) => boolean>;
    context: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare let KSStackCursor: interop.StructType<KSStackCursor>;

interface KSStackCursor_Backtrace_Context {
    skippedEntries: number;
    backtraceLength: number;
    backtrace: interop.Pointer | interop.Reference<number>;
}
declare let KSStackCursor_Backtrace_Context: interop.StructType<KSStackCursor_Backtrace_Context>;

declare const OBJC_TAG_1: number;

declare const OBJC_TAG_7: number;

declare const OBJC_TAG_NSAtom: number;

declare const OBJC_TAG_NSDate: number;

declare const OBJC_TAG_NSIndexPath: number;

declare const OBJC_TAG_NSManagedObjectID: number;

declare const OBJC_TAG_NSNumber: number;

declare const OBJC_TAG_NSString: number;

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
    vtable: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: any, p2: string) => any>>;
    data_NEVER_USE: number;
}
declare let class_t: interop.StructType<class_t>;

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

declare function kscpu_currentArch(): string;

declare function kscpu_exceptionRegisterName(regNumber: number): string;

declare function kscpu_i_fillState(thread: number, state: interop.Pointer | interop.Reference<number>, flavor: number, stateCount: number): boolean;

declare function kscpu_numExceptionRegisters(): number;

declare function kscpu_numRegisters(): number;

declare function kscpu_registerName(regNumber: number): string;

declare function kscpu_stackGrowDirection(): number;

declare function kscrash_addUserReport(report: string, reportLength: number): number;

declare function kscrash_deleteAllReports(): void;

declare function kscrash_getReportCount(): number;

declare function kscrash_getReportIDs(reportIDs: interop.Pointer | interop.Reference<number>, count: number): number;

declare function kscrash_install(appName: string, installPath: string): KSCrashMonitorType;

declare function kscrash_notifyAppActive(isActive: boolean): void;

declare function kscrash_notifyAppCrash(): void;

declare function kscrash_notifyAppInForeground(isInForeground: boolean): void;

declare function kscrash_notifyAppTerminate(): void;

declare function kscrash_readReport(reportID: number): string;

declare function kscrash_reportUserException(name: string, reason: string, language: string, lineOfCode: string, stackTrace: string, logAllThreads: boolean, terminateProgram: boolean): void;

declare function kscrash_setAddConsoleLogToReport(shouldAddConsoleLogToReport: boolean): void;

declare function kscrash_setCrashNotifyCallback(onCrashNotify: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSCrashReportWriter>) => void>): void;

declare function kscrash_setDeadlockWatchdogInterval(deadlockWatchdogInterval: number): void;

declare function kscrash_setDoNotIntrospectClasses(doNotIntrospectClasses: interop.Pointer | interop.Reference<string>, length: number): void;

declare function kscrash_setIntrospectMemory(introspectMemory: boolean): void;

declare function kscrash_setMaxReportCount(maxReportCount: number): void;

declare function kscrash_setMonitoring(monitors: KSCrashMonitorType): KSCrashMonitorType;

declare function kscrash_setPrintPreviousLog(shouldPrintPreviousLog: boolean): void;

declare function kscrash_setUserInfoJSON(userInfoJSON: string): void;

declare function kscrashmonitortype_name(monitorType: KSCrashMonitorType): string;

declare function ksdate_utcStringFromTimestamp(timestamp: number, buffer21Chars: string): void;

declare function ksdebug_isBeingTraced(): boolean;

declare function ksdl_dladdr(address: number, info: interop.Pointer | interop.Reference<Dl_info>): boolean;

declare function ksdl_getBinaryImage(index: number, buffer: interop.Pointer | interop.Reference<KSBinaryImage>): boolean;

declare function ksdl_imageCount(): number;

declare function ksdl_imageNamed(imageName: string, exactMatch: boolean): number;

declare function ksdl_imageUUID(imageName: string, exactMatch: boolean): string;

declare function ksdm_demangleCPP(mangledSymbol: string): string;

declare function ksdm_demangleSwift(mangledSymbol: string): string;

declare function ksfu_closeBufferedReader(reader: interop.Pointer | interop.Reference<KSBufferedReader>): void;

declare function ksfu_closeBufferedWriter(writer: interop.Pointer | interop.Reference<KSBufferedWriter>): void;

declare function ksfu_deleteContentsOfPath(path: string): boolean;

declare function ksfu_flushBufferedWriter(writer: interop.Pointer | interop.Reference<KSBufferedWriter>): boolean;

declare function ksfu_lastPathEntry(path: string): string;

declare function ksfu_makePath(absolutePath: string): boolean;

declare function ksfu_openBufferedReader(reader: interop.Pointer | interop.Reference<KSBufferedReader>, path: string, readBuffer: string, readBufferLength: number): boolean;

declare function ksfu_openBufferedWriter(writer: interop.Pointer | interop.Reference<KSBufferedWriter>, path: string, writeBuffer: string, writeBufferLength: number): boolean;

declare function ksfu_readBufferedReader(reader: interop.Pointer | interop.Reference<KSBufferedReader>, dstBuffer: string, byteCount: number): number;

declare function ksfu_readBufferedReaderUntilChar(
    reader: interop.Pointer | interop.Reference<KSBufferedReader>,
    ch: number,
    dstBuffer: string,
    length: interop.Pointer | interop.Reference<number>
): boolean;

declare function ksfu_readBytesFromFD(fd: number, bytes: string, length: number): boolean;

declare function ksfu_readEntireFile(path: string, data: interop.Pointer | interop.Reference<string>, length: interop.Pointer | interop.Reference<number>, maxLength: number): boolean;

declare function ksfu_readLineFromFD(fd: number, buffer: string, maxLength: number): number;

declare function ksfu_removeFile(path: string, mustExist: boolean): boolean;

declare function ksfu_writeBufferedWriter(writer: interop.Pointer | interop.Reference<KSBufferedWriter>, data: string, length: number): boolean;

declare function ksfu_writeBytesToFD(fd: number, bytes: string, length: number): boolean;

declare function ksfu_writeStringToFD(fd: number, string: string): boolean;

declare function ksid_generate(destinationBuffer37Bytes: string): void;

declare function ksjson_addBooleanElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, value: boolean): number;

declare function ksjson_addDataElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, value: string, length: number): number;

declare function ksjson_addFloatingPointElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, value: number): number;

declare function ksjson_addIntegerElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, value: number): number;

declare function ksjson_addJSONElement(
    encodeContext: interop.Pointer | interop.Reference<KSJSONEncodeContext>,
    name: string,
    jsonData: string,
    jsonDataLength: number,
    closeLastContainer: boolean
): number;

declare function ksjson_addJSONFromFile(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, filename: string, closeLastContainer: boolean): number;

declare function ksjson_addNullElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_addRawJSONData(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, data: string, length: number): number;

declare function ksjson_addStringElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string, value: string, length: number): number;

declare function ksjson_appendDataElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, value: string, length: number): number;

declare function ksjson_appendStringElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, value: string, length: number): number;

declare function ksjson_beginArray(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_beginDataElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_beginElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_beginEncode(
    context: interop.Pointer | interop.Reference<KSJSONEncodeContext>,
    prettyPrint: boolean,
    addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>,
    userData: interop.Pointer | interop.Reference<any>
): void;

declare function ksjson_beginObject(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_beginStringElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>, name: string): number;

declare function ksjson_decode(
    data: string,
    length: number,
    stringBuffer: string,
    stringBufferLength: number,
    callbacks: interop.Pointer | interop.Reference<KSJSONDecodeCallbacks>,
    userData: interop.Pointer | interop.Reference<any>,
    errorOffset: interop.Pointer | interop.Reference<number>
): number;

declare function ksjson_endContainer(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>): number;

declare function ksjson_endDataElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>): number;

declare function ksjson_endEncode(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>): number;

declare function ksjson_endStringElement(context: interop.Pointer | interop.Reference<KSJSONEncodeContext>): number;

declare function ksjson_stringForError(error: number): string;

declare function kslog_clearLogFile(): boolean;

declare function kslog_setLogFilename(filename: string, overwrite: boolean): boolean;

declare function ksmach_exceptionName(exceptionType: number): string;

declare function ksmach_kernelReturnCodeName(returnCode: number): string;

declare function ksmach_machExceptionForSignal(signal: number): number;

declare function ksmach_signalForMachException(exception: number, code: number): number;

declare function ksmc_addReservedThread(thread: number): void;

declare function ksmc_contextSize(): number;

declare function ksmc_resumeEnvironment(): void;

declare function ksmc_suspendEnvironment(): void;

declare function ksmem_copyMaxPossible(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): number;

declare function ksmem_copySafely(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function ksmem_isMemoryReadable(memory: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function ksmem_maxReadableBytes(memory: interop.Pointer | interop.Reference<any>, tryByteCount: number): number;

declare function ksobjc_arrayContents(arrayPtr: interop.Pointer | interop.Reference<any>, contents: interop.Pointer | interop.Reference<number>, count: number): number;

declare function ksobjc_arrayCount(arrayPtr: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_baseClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function ksobjc_className(classPtr: interop.Pointer | interop.Reference<any>): string;

declare function ksobjc_copyStringContents(string: interop.Pointer | interop.Reference<any>, dst: string, maxLength: number): number;

declare function ksobjc_copyURLContents(nsurl: interop.Pointer | interop.Reference<any>, dst: string, maxLength: number): number;

declare function ksobjc_dateContents(datePtr: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_dictionaryCount(dict: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_dictionaryFirstEntry(
    dict: interop.Pointer | interop.Reference<any>,
    key: interop.Pointer | interop.Reference<number>,
    value: interop.Pointer | interop.Reference<number>
): boolean;

declare function ksobjc_getDescription(object: interop.Pointer | interop.Reference<any>, buffer: string, bufferLength: number): number;

declare function ksobjc_isClassNamed(classPtr: interop.Pointer | interop.Reference<any>, className: string): boolean;

declare function ksobjc_isKindOfClass(classPtr: interop.Pointer | interop.Reference<any>, className: string): boolean;

declare function ksobjc_isMetaClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_isRootClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_isTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_isValidObject(object: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_isValidTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_isaPointer(objectOrClassPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function ksobjc_ivarCount(classPtr: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_ivarList(classPtr: interop.Pointer | interop.Reference<any>, dstIvars: interop.Pointer | interop.Reference<KSObjCIvar>, ivarsCount: number): number;

declare function ksobjc_ivarNamed(classPtr: interop.Pointer | interop.Reference<any>, name: string, dst: interop.Pointer | interop.Reference<KSObjCIvar>): boolean;

declare function ksobjc_ivarValue(objectPtr: interop.Pointer | interop.Reference<any>, ivarIndex: number, dst: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_numberAsFloat(object: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_numberAsInteger(object: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_numberIsFloat(object: interop.Pointer | interop.Reference<any>): boolean;

declare function ksobjc_objectClassName(objectPtr: interop.Pointer | interop.Reference<any>): string;

declare function ksobjc_objectClassType(object: interop.Pointer | interop.Reference<any>): KSObjCClassType;

declare function ksobjc_objectType(objectOrClassPtr: interop.Pointer | interop.Reference<any>): KSObjCType;

declare function ksobjc_stringLength(stringPtr: interop.Pointer | interop.Reference<any>): number;

declare function ksobjc_superClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function ksobjc_taggedPointerPayload(taggedObjectPtr: interop.Pointer | interop.Reference<any>): number;

declare function kssc_initCursor(
    cursor: interop.Pointer | interop.Reference<KSStackCursor>,
    resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSStackCursor>) => void>,
    advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<KSStackCursor>) => boolean>
): void;

declare function kssc_initSelfThread(cursor: interop.Pointer | interop.Reference<KSStackCursor>, skipEntries: number): void;

declare function kssc_initWithBacktrace(
    cursor: interop.Pointer | interop.Reference<KSStackCursor>,
    backtrace: interop.Pointer | interop.Reference<number>,
    backtraceLength: number,
    skipEntries: number
): void;

declare function kssc_resetCursor(cursor: interop.Pointer | interop.Reference<KSStackCursor>): void;

declare function kssignal_fatalSignals(): interop.Pointer | interop.Reference<number>;

declare function kssignal_numFatalSignals(): number;

declare function kssignal_signalCodeName(signal: number, code: number): string;

declare function kssignal_signalName(signal: number): string;

declare function ksstring_extractHexValue(string: string, stringLength: number, result: interop.Pointer | interop.Reference<number>): boolean;

declare function ksstring_isNullTerminatedUTF8String(memory: interop.Pointer | interop.Reference<any>, minLength: number, maxLength: number): boolean;

declare function kssymbolicator_symbolicate(cursor: interop.Pointer | interop.Reference<KSStackCursor>): boolean;

declare function kssysctl_getMacAddress(name: string, macAddressBuffer: string): boolean;

declare function kssysctl_int32(major_cmd: number, minor_cmd: number): number;

declare function kssysctl_int32ForName(name: string): number;

declare function kssysctl_int64(major_cmd: number, minor_cmd: number): number;

declare function kssysctl_int64ForName(name: string): number;

declare function kssysctl_string(major_cmd: number, minor_cmd: number, value: string, maxSize: number): number;

declare function kssysctl_stringForName(name: string, value: string, maxSize: number): number;

declare function kssysctl_timeval(major_cmd: number, minor_cmd: number): timeval;

declare function kssysctl_timevalForName(name: string): timeval;

declare function kssysctl_uint32(major_cmd: number, minor_cmd: number): number;

declare function kssysctl_uint32ForName(name: string): number;

declare function kssysctl_uint64(major_cmd: number, minor_cmd: number): number;

declare function kssysctl_uint64ForName(name: string): number;

declare function ksthread_getQueueName(thread: number, buffer: string, bufLength: number): boolean;

declare function ksthread_getThreadName(thread: number, buffer: string, bufLength: number): boolean;

declare function ksthread_self(): number;

interface method_list_t {
    entsizeAndFlags: number;
    count: number;
    first: method_t;
}
declare let method_list_t: interop.StructType<method_list_t>;

interface method_t {
    name: string;
    types: string;
    imp: interop.FunctionReference<(p1: any, p2: string) => any>;
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

declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare class SentryAsynchronousOperation extends NSOperation {
    static alloc(): SentryAsynchronousOperation; // inherited from NSObject

    static new(): SentryAsynchronousOperation; // inherited from NSObject

    completeOperation(): void;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {
    static alloc(): SentryBreadcrumb; // inherited from NSObject

    static new(): SentryBreadcrumb; // inherited from NSObject

    category: string;

    data: NSDictionary<string, any>;

    level: SentrySeverity;

    message: string;

    timestamp: Date;

    type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { level: SentrySeverity; category: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithLevelCategory(level: SentrySeverity, category: string): this;

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

declare class SentryBreadcrumbStore extends NSObject implements SentrySerializable {
    static alloc(): SentryBreadcrumbStore; // inherited from NSObject

    static new(): SentryBreadcrumbStore; // inherited from NSObject

    maxBreadcrumbs: number;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { fileManager: SentryFileManager });

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    class(): typeof NSObject;

    clear(): void;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    count(): number;

    initWithFileManager(fileManager: SentryFileManager): this;

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
    environment: any;
    releaseName: any;
    dist: any;
    static alloc(): SentryClient; // inherited from NSObject

    static new(): SentryClient; // inherited from NSObject

    _debugMeta: NSArray<SentryDebugMeta>;

    _snapshotThreads: NSArray<SentryThread>;

    beforeSendRequest: (p1: SentryNSURLRequest) => void;

    beforeSerializeEvent: (p1: SentryEvent) => void;

    breadcrumbs: SentryBreadcrumbStore;

    extra: NSDictionary<string, any>;

    lastContext: NSDictionary<string, any>;

    lastEvent: SentryEvent;

    sampleRate: number;

    shouldSendEvent: (p1: SentryEvent) => boolean;

    tags: NSDictionary<string, string>;

    user: SentryUser;

    static logLevel: SentryLogLevel;

    static readonly sdkName: string;

    static sharedClient: SentryClient;

    static readonly versionString: string;

    constructor(o: { dsn: string });

    appendStacktraceToEvent(event: SentryEvent): void;

    clearContext(): void;

    crash(): void;

    crashedLastLaunch(): boolean;

    enableAutomaticBreadcrumbTracking(): void;

    initWithDsnDidFailWithError(dsn: string): this;

    reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(
        name: string,
        reason: string,
        language: string,
        lineOfCode: string,
        stackTrace: NSArray<any>,
        logAllThreads: boolean,
        terminateProgram: boolean
    ): void;

    sendEventWithCompletionHandler(event: SentryEvent, completionHandler: (p1: NSError) => void): void;

    snapshotStacktrace(snapshotCompleted: () => void): void;

    startCrashHandlerWithError(): boolean;

    storeEvent(event: SentryEvent): void;
}

declare class SentryContext extends NSObject implements SentrySerializable {
    static alloc(): SentryContext; // inherited from NSObject

    static new(): SentryContext; // inherited from NSObject

    appContext: NSDictionary<string, any>;

    deviceContext: NSDictionary<string, any>;

    osContext: NSDictionary<string, any>;

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

declare class SentryCrashExceptionApplication extends NSObject {
    static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

    static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare class SentryDebugMeta extends NSObject implements SentrySerializable {
    static alloc(): SentryDebugMeta; // inherited from NSObject

    static new(): SentryDebugMeta; // inherited from NSObject

    cpuSubType: number;

    cpuType: number;

    imageAddress: string;

    imageSize: number;

    imageVmAddress: string;

    majorVersion: number;

    minorVersion: number;

    name: string;

    revisionVersion: number;

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

declare class SentryDsn extends NSObject {
    static alloc(): SentryDsn; // inherited from NSObject

    static new(): SentryDsn; // inherited from NSObject

    url: NSURL;

    constructor(o: { string: string });

    initWithStringDidFailWithError(dsnString: string): this;
}

declare const enum SentryError {
    kSentryErrorUnknownError = -1,

    kSentryErrorInvalidDsnError = 100,

    kSentryErrorKSCrashNotInstalledError = 101,

    kSentryErrorInvalidCrashReportError = 102,

    kSentryErrorCompressionError = 103,

    kSentryErrorJsonConversionError = 104,

    kSentryErrorCouldNotFindDirectory = 105,

    kSentryErrorRequestError = 106,

    kSentryErrorEventNotSent = 107
}

declare let SentryErrorDomain: string;

declare class SentryEvent extends NSObject implements SentrySerializable {
    static alloc(): SentryEvent; // inherited from NSObject

    static new(): SentryEvent; // inherited from NSObject

    breadcrumbsSerialized: NSDictionary<string, any>;

    context: SentryContext;

    debugMeta: NSArray<SentryDebugMeta>;

    dist: string;

    environment: string;

    eventId: string;

    exceptions: NSArray<SentryException>;

    extra: NSDictionary<string, any>;

    fingerprint: NSArray<string>;

    infoDict: NSDictionary<any, any>;

    level: SentrySeverity;

    logger: string;

    message: string;

    modules: NSDictionary<string, string>;

    platform: string;

    releaseName: string;

    sdk: NSDictionary<string, any>;

    serverName: string;

    stacktrace: SentryStacktrace;

    tags: NSDictionary<string, string>;

    threads: NSArray<SentryThread>;

    timestamp: Date;

    user: SentryUser;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    constructor(o: { level: SentrySeverity });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithLevel(level: SentrySeverity): this;

    initWithJSON(jsonData: NSData): this;

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

    mechanism: NSDictionary<string, any>;

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

declare class SentryFileManager extends NSObject {
    static alloc(): SentryFileManager; // inherited from NSObject

    static createDirectoryAtPathWithError(path: string): boolean;

    static new(): SentryFileManager; // inherited from NSObject

    constructor();

    allFilesInFolder(path: string): NSArray<string>;

    deleteAllFolders(): void;

    deleteAllStoredBreadcrumbs(): void;

    deleteAllStoredEvents(): void;

    getAllStoredBreadcrumbs(): NSArray<NSDictionary<string, any>>;

    getAllStoredEvents(): NSArray<NSDictionary<string, any>>;

    initWithError(): this;

    removeFileAtPath(path: string): boolean;

    storeBreadcrumb(crumb: SentryBreadcrumb): string;

    storeDictionaryToPath(dictionary: NSDictionary<any, any>, path: string): string;

    storeEvent(event: SentryEvent): string;
}

declare class SentryFrame extends NSObject implements SentrySerializable {
    static alloc(): SentryFrame; // inherited from NSObject

    static new(): SentryFrame; // inherited from NSObject

    columnNumber: number;

    fileName: string;

    function: string;

    imageAddress: string;

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

declare class SentryJavaScriptBridgeHelper extends NSObject {
    static alloc(): SentryJavaScriptBridgeHelper; // inherited from NSObject

    static convertReactNativeStacktrace(stacktrace: NSArray<any>): NSArray<SentryFrame>;

    static createSentryBreadcrumbFromJavaScriptBreadcrumb(jsonBreadcrumb: NSDictionary<any, any>): SentryBreadcrumb;

    static createSentryEventFromJavaScriptEvent(jsonEvent: NSDictionary<any, any>): SentryEvent;

    static createSentryUserFromJavaScriptUser(user: NSDictionary<any, any>): SentryUser;

    static new(): SentryJavaScriptBridgeHelper; // inherited from NSObject

    static parseJavaScriptStacktrace(stacktrace: string): NSArray<any>;

    static sanitizeDictionary(dictionary: NSDictionary<any, any>): NSDictionary<any, any>;

    static sentryLogLevelFromJavaScriptLevel(level: number): SentryLogLevel;
}

declare class SentryKSCrashInstallation extends KSCrashInstallation {
    static alloc(): SentryKSCrashInstallation; // inherited from NSObject

    static new(): SentryKSCrashInstallation; // inherited from NSObject

    sendAllReports(): void;
}

declare class SentryKSCrashReportConverter extends NSObject {
    static alloc(): SentryKSCrashReportConverter; // inherited from NSObject

    static new(): SentryKSCrashReportConverter; // inherited from NSObject

    userContext: NSDictionary<any, any>;

    constructor(o: { report: NSDictionary<any, any> });

    convertReportToEvent(): SentryEvent;

    initWithReport(report: NSDictionary<any, any>): this;
}

declare class SentryKSCrashReportSink extends NSObject implements KSCrashReportFilter {
    static alloc(): SentryKSCrashReportSink; // inherited from NSObject

    static new(): SentryKSCrashReportSink; // inherited from NSObject

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly; // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    filterReportsOnCompletion(reports: NSArray<any>, onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

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

declare class SentryLog extends NSObject {
    static alloc(): SentryLog; // inherited from NSObject

    static logWithMessageAndLevel(message: string, level: SentryLogLevel): void;

    static new(): SentryLog; // inherited from NSObject
}

declare const enum SentryLogLevel {
    kSentryLogLevelNone = 1,

    kSentryLogLevelError = 2,

    kSentryLogLevelDebug = 3,

    kSentryLogLevelVerbose = 4
}

declare class SentryNSURLRequest extends NSMutableURLRequest {
    static alloc(): SentryNSURLRequest; // inherited from NSObject

    static new(): SentryNSURLRequest; // inherited from NSObject

    static requestWithURL(URL: NSURL): SentryNSURLRequest; // inherited from NSURLRequest

    static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): SentryNSURLRequest; // inherited from NSURLRequest

    constructor(o: { storeRequestWithDsn: SentryDsn; andData: NSData });

    constructor(o: { storeRequestWithDsn: SentryDsn; andEvent: SentryEvent });

    initStoreRequestWithDsnAndDataDidFailWithError(dsn: SentryDsn, data: NSData): this;

    initStoreRequestWithDsnAndEventDidFailWithError(dsn: SentryDsn, event: SentryEvent): this;
}

declare class SentryQueueableRequestManager extends NSObject implements SentryRequestManager {
    static alloc(): SentryQueueableRequestManager; // inherited from NSObject

    static new(): SentryQueueableRequestManager; // inherited from NSObject

    readonly ready: boolean; // inherited from SentryRequestManager

    constructor(o: { session: NSURLSession }); // inherited from SentryRequestManager

    addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSError) => void): void;

    cancelAllOperations(): void;

    initWithSession(session: NSURLSession): this;
}

interface SentryRequestManager {
    ready: boolean;

    addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSError) => void): void;

    cancelAllOperations(): void;

    initWithSession?(session: NSURLSession): SentryRequestManager;
}
declare let SentryRequestManager: {
    prototype: SentryRequestManager;
};

declare class SentryRequestOperation extends SentryAsynchronousOperation {
    static alloc(): SentryRequestOperation; // inherited from NSObject

    static new(): SentryRequestOperation; // inherited from NSObject

    constructor(o: { session: NSURLSession; request: NSURLRequest; completionHandler: (p1: NSError) => void });

    initWithSessionRequestCompletionHandler(session: NSURLSession, request: NSURLRequest, completionHandler: (p1: NSError) => void): this;
}

interface SentrySerializable extends NSObjectProtocol {
    serialize(): NSDictionary<string, any>;
}
declare let SentrySerializable: {
    prototype: SentrySerializable;
};

declare const enum SentrySeverity {
    kSentrySeverityFatal = 0,

    kSentrySeverityError = 1,

    kSentrySeverityWarning = 2,

    kSentrySeverityInfo = 3,

    kSentrySeverityDebug = 4
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

    constructor(o: { frames: NSArray<SentryFrame>; registers: NSDictionary<string, string> });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    fixDuplicateFrames(): void;

    initWithFramesRegisters(frames: NSArray<SentryFrame>, registers: NSDictionary<string, string>): this;

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

    OncePerClassAndSuperclasses = 2
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

declare class SentryUser extends NSObject implements SentrySerializable {
    static alloc(): SentryUser; // inherited from NSObject

    static new(): SentryUser; // inherited from NSObject

    email: string;

    extra: NSDictionary<string, any>;

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
