
declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare class PrivateSentrySDKOnly extends NSObject {

    static alloc(): PrivateSentrySDKOnly; // inherited from NSObject

    static captureEnvelope(envelope: SentryEnvelope): void;

    static envelopeWithData(data: NSData): SentryEnvelope;

    static getDebugImages(): NSArray<SentryDebugMeta>;

    static getSdkName(): string;

    static getSdkVersionString(): string;

    static new(): PrivateSentrySDKOnly; // inherited from NSObject

    static setSdkName(sdkName: string): void;

    static setSdkNameAndVersionString(sdkName: string, versionString: string): void;

    static storeEnvelope(envelope: SentryEnvelope): void;

    static readonly appStartMeasurement: SentryAppStartMeasurement;

    static appStartMeasurementHybridSDKMode: boolean;

    static readonly currentScreenFrames: SentryScreenFrames;

    static framesTrackingMeasurementHybridSDKMode: boolean;

    static readonly installationID: string;

    static readonly isFramesTrackingRunning: boolean;

    static onAppStartMeasurementAvailable: (p1: SentryAppStartMeasurement) => void;

    static readonly options: SentryOptions;
}

declare class SentryAppStartMeasurement extends NSObject {

    static alloc(): SentryAppStartMeasurement; // inherited from NSObject

    static new(): SentryAppStartMeasurement; // inherited from NSObject

    readonly appStartTimestamp: Date;

    readonly didFinishLaunchingTimestamp: Date;

    readonly duration: number;

    readonly moduleInitializationTimestamp: Date;

    readonly runtimeInitTimestamp: Date;

    readonly type: SentryAppStartType;

    constructor(o: { type: SentryAppStartType; appStartTimestamp: Date; duration: number; runtimeInitTimestamp: Date; didFinishLaunchingTimestamp: Date });

    constructor(o: { type: SentryAppStartType; appStartTimestamp: Date; duration: number; runtimeInitTimestamp: Date; moduleInitializationTimestamp: Date; didFinishLaunchingTimestamp: Date });

    initWithTypeAppStartTimestampDurationRuntimeInitTimestampDidFinishLaunchingTimestamp(type: SentryAppStartType, appStartTimestamp: Date, duration: number, runtimeInitTimestamp: Date, didFinishLaunchingTimestamp: Date): this;

    initWithTypeAppStartTimestampDurationRuntimeInitTimestampModuleInitializationTimestampDidFinishLaunchingTimestamp(type: SentryAppStartType, appStartTimestamp: Date, duration: number, runtimeInitTimestamp: Date, moduleInitializationTimestamp: Date, didFinishLaunchingTimestamp: Date): this;
}

declare const enum SentryAppStartType {

    Warm = 0,

    Cold = 1,

    Unknown = 2
}

declare class SentryAttachment extends NSObject {

    static alloc(): SentryAttachment; // inherited from NSObject

    static new(): SentryAttachment; // inherited from NSObject

    readonly contentType: string;

    readonly data: NSData;

    readonly filename: string;

    readonly path: string;

    constructor(o: { data: NSData; filename: string });

    constructor(o: { data: NSData; filename: string; contentType: string });

    constructor(o: { path: string });

    constructor(o: { path: string; filename: string });

    constructor(o: { path: string; filename: string; contentType: string });

    initWithDataFilename(data: NSData, filename: string): this;

    initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;

    initWithPath(path: string): this;

    initWithPathFilename(path: string, filename: string): this;

    initWithPathFilenameContentType(path: string, filename: string, contentType: string): this;
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

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { level: SentryLevel; category: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    hash(): number;

    initWithLevelCategory(level: SentryLevel, category: string): this;

    isEqual(object: any): boolean;

    isEqualToBreadcrumb(breadcrumb: SentryBreadcrumb): boolean;

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

declare class SentryClient extends NSObject {

    static alloc(): SentryClient; // inherited from NSObject

    static new(): SentryClient; // inherited from NSObject

    options: SentryOptions;

    constructor(o: { options: SentryOptions });

    captureEnvelope(envelope: SentryEnvelope): void;

    captureError(error: NSError): SentryId;

    captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

    captureEvent(event: SentryEvent): SentryId;

    captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

    captureException(exception: NSException): SentryId;

    captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

    captureMessage(message: string): SentryId;

    captureMessageWithScope(message: string, scope: SentryScope): SentryId;

    captureSession(session: SentrySession): void;

    captureUserFeedback(userFeedback: SentryUserFeedback): void;

    flush(timeout: number): void;

    initWithOptions(options: SentryOptions): this;
}

declare class SentryCrashExceptionApplication extends NSObject {

    static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

    static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare class SentryDebugImageProvider extends NSObject {

    static alloc(): SentryDebugImageProvider; // inherited from NSObject

    static new(): SentryDebugImageProvider; // inherited from NSObject

    getDebugImages(): NSArray<SentryDebugMeta>;

    getDebugImagesForThreads(threads: NSArray<SentryThread> | SentryThread[]): NSArray<SentryDebugMeta>;
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

    readonly;  // inherited from NSObjectProtocol

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

    constructor(o: { id: SentryId; items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[] });

    constructor(o: { id: SentryId; singleItem: SentryEnvelopeItem });

    constructor(o: { session: SentrySession });

    constructor(o: { sessions: NSArray<SentrySession> | SentrySession[] });

    constructor(o: { userFeedback: SentryUserFeedback });

    initWithEvent(event: SentryEvent): this;

    initWithHeaderItems(header: SentryEnvelopeHeader, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

    initWithHeaderSingleItem(header: SentryEnvelopeHeader, item: SentryEnvelopeItem): this;

    initWithIdItems(id: SentryId, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

    initWithIdSingleItem(id: SentryId, item: SentryEnvelopeItem): this;

    initWithSession(session: SentrySession): this;

    initWithSessions(sessions: NSArray<SentrySession> | SentrySession[]): this;

    initWithUserFeedback(userFeedback: SentryUserFeedback): this;
}

declare class SentryEnvelopeHeader extends NSObject {

    static alloc(): SentryEnvelopeHeader; // inherited from NSObject

    static new(): SentryEnvelopeHeader; // inherited from NSObject

    readonly eventId: SentryId;

    readonly sdkInfo: SentrySdkInfo;

    constructor(o: { id: SentryId });

    initWithId(eventId: SentryId): this;
}

declare class SentryEnvelopeItem extends NSObject {

    static alloc(): SentryEnvelopeItem; // inherited from NSObject

    static new(): SentryEnvelopeItem; // inherited from NSObject

    readonly data: NSData;

    readonly header: SentryEnvelopeItemHeader;

    constructor(o: { attachment: SentryAttachment; maxAttachmentSize: number });

    constructor(o: { event: SentryEvent });

    constructor(o: { header: SentryEnvelopeItemHeader; data: NSData });

    constructor(o: { session: SentrySession });

    constructor(o: { userFeedback: SentryUserFeedback });

    initWithAttachmentMaxAttachmentSize(attachment: SentryAttachment, maxAttachmentSize: number): this;

    initWithEvent(event: SentryEvent): this;

    initWithHeaderData(header: SentryEnvelopeItemHeader, data: NSData): this;

    initWithSession(session: SentrySession): this;

    initWithUserFeedback(userFeedback: SentryUserFeedback): this;
}

declare class SentryEnvelopeItemHeader extends NSObject {

    static alloc(): SentryEnvelopeItemHeader; // inherited from NSObject

    static new(): SentryEnvelopeItemHeader; // inherited from NSObject

    readonly contentType: string;

    readonly filename: string;

    readonly length: number;

    readonly type: string;

    constructor(o: { type: string; length: number });

    constructor(o: { type: string; length: number; filenname: string; contentType: string });

    initWithTypeLength(type: string, length: number): this;

    initWithTypeLengthFilennameContentType(type: string, length: number, filename: string, contentType: string): this;
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

    kSentryErrorEventNotSent = 107
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

    error: NSError;

    eventId: SentryId;

    exceptions: NSArray<SentryException>;

    extra: NSDictionary<string, any>;

    fingerprint: NSArray<string>;

    level: SentryLevel;

    logger: string;

    message: SentryMessage;

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

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { error: NSError });

    constructor(o: { level: SentryLevel });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithError(error: NSError): this;

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

    stacktrace: SentryStacktrace;

    threadId: number;

    type: string;

    value: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

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

    stackStart: number;

    symbolAddress: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

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

declare class SentryHub extends NSObject {

    static alloc(): SentryHub; // inherited from NSObject

    static new(): SentryHub; // inherited from NSObject

    readonly scope: SentryScope;

    readonly session: SentrySession;

    constructor(o: { client: SentryClient; andScope: SentryScope });

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    bindClient(client: SentryClient): void;

    captureEnvelope(envelope: SentryEnvelope): void;

    captureError(error: NSError): SentryId;

    captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

    captureEvent(event: SentryEvent): SentryId;

    captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

    captureException(exception: NSException): SentryId;

    captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

    captureMessage(message: string): SentryId;

    captureMessageWithScope(message: string, scope: SentryScope): SentryId;

    captureUserFeedback(userFeedback: SentryUserFeedback): void;

    configureScope(callback: (p1: SentryScope) => void): void;

    endSession(): void;

    endSessionWithTimestamp(timestamp: Date): void;

    flush(timeout: number): void;

    getClient(): SentryClient;

    hasIntegration(integrationName: string): boolean;

    initWithClientAndScope(client: SentryClient, scope: SentryScope): this;

    isIntegrationInstalled(integrationClass: typeof NSObject): boolean;

    setUser(user: SentryUser): void;

    startSession(): void;

    startTransactionWithContext(transactionContext: SentryTransactionContext): SentrySpan;

    startTransactionWithContextBindToScope(transactionContext: SentryTransactionContext, bindToScope: boolean): SentrySpan;

    startTransactionWithContextBindToScopeCustomSamplingContext(transactionContext: SentryTransactionContext, bindToScope: boolean, customSamplingContext: NSDictionary<string, any>): SentrySpan;

    startTransactionWithContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): SentrySpan;

    startTransactionWithNameOperation(name: string, operation: string): SentrySpan;

    startTransactionWithNameOperationBindToScope(name: string, operation: string, bindToScope: boolean): SentrySpan;
}

declare class SentryId extends NSObject {

    static alloc(): SentryId; // inherited from NSObject

    static new(): SentryId; // inherited from NSObject

    readonly sentryIdString: string;

    static readonly empty: SentryId;

    constructor(o: { UUID: NSUUID });

    constructor(o: { UUIDString: string });

    initWithUUID(uuid: NSUUID): this;

    initWithUUIDString(string: string): this;
}

interface SentryIntegrationProtocol extends NSObjectProtocol {

    installWithOptions(options: SentryOptions): boolean;

    uninstall?(): void;
}
declare var SentryIntegrationProtocol: {

    prototype: SentryIntegrationProtocol;
};

declare const enum SentryLevel {

    kSentryLevelNone = 0,

    kSentryLevelDebug = 1,

    kSentryLevelInfo = 2,

    kSentryLevelWarning = 3,

    kSentryLevelError = 4,

    kSentryLevelFatal = 5
}

declare const enum SentryLogLevel {

    kSentryLogLevelNone = 1,

    kSentryLogLevelError = 2,

    kSentryLogLevelDebug = 3,

    kSentryLogLevelVerbose = 4
}

declare class SentryMechanism extends NSObject implements SentrySerializable {

    static alloc(): SentryMechanism; // inherited from NSObject

    static new(): SentryMechanism; // inherited from NSObject

    data: NSDictionary<string, any>;

    desc: string;

    handled: number;

    helpLink: string;

    meta: SentryMechanismMeta;

    type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

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

declare class SentryMechanismMeta extends NSObject implements SentrySerializable {

    static alloc(): SentryMechanismMeta; // inherited from NSObject

    static new(): SentryMechanismMeta; // inherited from NSObject

    error: SentryNSError;

    machException: NSDictionary<string, any>;

    signal: NSDictionary<string, any>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

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

declare class SentryMessage extends NSObject implements SentrySerializable {

    static alloc(): SentryMessage; // inherited from NSObject

    static new(): SentryMessage; // inherited from NSObject

    readonly formatted: string;

    message: string;

    params: NSArray<string>;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { formatted: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithFormatted(formatted: string): this;

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

declare class SentryNSError extends NSObject implements SentrySerializable {

    static alloc(): SentryNSError; // inherited from NSObject

    static new(): SentryNSError; // inherited from NSObject

    code: number;

    domain: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { domain: string; code: number });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithDomainCode(domain: string, code: number): this;

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

declare class SentryOptions extends NSObject {

    static alloc(): SentryOptions; // inherited from NSObject

    static defaultIntegrations(): NSArray<string>;

    static new(): SentryOptions; // inherited from NSObject

    appHangTimeoutInterval: number;

    attachScreenshot: boolean;

    attachStacktrace: boolean;

    attachViewHierarchy: boolean;

    beforeBreadcrumb: (p1: SentryBreadcrumb) => SentryBreadcrumb;

    beforeSend: (p1: SentryEvent) => SentryEvent;

    debug: boolean;

    diagnosticLevel: SentryLevel;

    dist: string;

    dsn: string;

    enableAppHangTracking: boolean;

    enableAutoBreadcrumbTracking: boolean;

    enableAutoPerformanceTracking: boolean;

    enableAutoSessionTracking: boolean;

    enableCoreDataTracking: boolean;

    enableCrashHandler: boolean;

    enableFileIOTracking: boolean;

    enableNetworkBreadcrumbs: boolean;

    enableNetworkTracking: boolean;

    enableOutOfMemoryTracking: boolean;

    enableProfiling: boolean;

    enableSwizzling: boolean;

    enableUIViewControllerTracking: boolean;

    enableUserInteractionTracing: boolean;

    enabled: boolean;

    environment: string;

    idleTimeout: number;

    readonly inAppExcludes: NSArray<string>;

    readonly inAppIncludes: NSArray<string>;

    integrations: NSArray<string>;

    readonly isProfilingEnabled: boolean;

    readonly isTracingEnabled: boolean;

    maxAttachmentSize: number;

    maxBreadcrumbs: number;

    maxCacheItems: number;

    onCrashedLastRun: (p1: SentryEvent) => void;

    parsedDsn: SentryDsn;

    profilesSampleRate: number;

    profilesSampler: (p1: SentrySamplingContext) => number;

    releaseName: string;

    sampleRate: number;

    readonly sdkInfo: SentrySdkInfo;

    sendClientReports: boolean;

    sendDefaultPii: boolean;

    sessionTrackingIntervalMillis: number;

    stitchAsyncCode: boolean;

    tracePropagationTargets: NSArray<any>;

    tracesSampleRate: number;

    tracesSampler: (p1: SentrySamplingContext) => number;

    urlSessionDelegate: NSURLSessionDelegate;

    constructor(o: { dict: NSDictionary<string, any> });

    addInAppExclude(inAppExclude: string): void;

    addInAppInclude(inAppInclude: string): void;

    initWithDictDidFailWithError(options: NSDictionary<string, any>): this;
}

declare const enum SentryPermissionStatus {

    kSentryPermissionStatusUnknown = 0,

    kSentryPermissionStatusGranted = 1,

    kSentryPermissionStatusPartial = 2,

    kSentryPermissionStatusDenied = 3
}

declare class SentrySDK extends NSObject {

    static addBreadcrumb(crumb: SentryBreadcrumb): void;

    static alloc(): SentrySDK; // inherited from NSObject

    static captureError(error: NSError): SentryId;

    static captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

    static captureErrorWithScopeBlock(error: NSError, block: (p1: SentryScope) => void): SentryId;

    static captureEvent(event: SentryEvent): SentryId;

    static captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

    static captureEventWithScopeBlock(event: SentryEvent, block: (p1: SentryScope) => void): SentryId;

    static captureException(exception: NSException): SentryId;

    static captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

    static captureExceptionWithScopeBlock(exception: NSException, block: (p1: SentryScope) => void): SentryId;

    static captureMessage(message: string): SentryId;

    static captureMessageWithScope(message: string, scope: SentryScope): SentryId;

    static captureMessageWithScopeBlock(message: string, block: (p1: SentryScope) => void): SentryId;

    static captureUserFeedback(userFeedback: SentryUserFeedback): void;

    static close(): void;

    static configureScope(callback: (p1: SentryScope) => void): void;

    static crash(): void;

    static endSession(): void;

    static flush(timeout: number): void;

    static new(): SentrySDK; // inherited from NSObject

    static setUser(user: SentryUser): void;

    static startSession(): void;

    static startTransactionWithContext(transactionContext: SentryTransactionContext): SentrySpan;

    static startTransactionWithContextBindToScope(transactionContext: SentryTransactionContext, bindToScope: boolean): SentrySpan;

    static startTransactionWithContextBindToScopeCustomSamplingContext(transactionContext: SentryTransactionContext, bindToScope: boolean, customSamplingContext: NSDictionary<string, any>): SentrySpan;

    static startTransactionWithContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): SentrySpan;

    static startTransactionWithNameOperation(name: string, operation: string): SentrySpan;

    static startTransactionWithNameOperationBindToScope(name: string, operation: string, bindToScope: boolean): SentrySpan;

    static startWithConfigureOptions(configureOptions: (p1: SentryOptions) => void): void;

    static startWithOptions(optionsDict: NSDictionary<string, any>): void;

    static startWithOptionsObject(options: SentryOptions): void;

    static readonly crashedLastRun: boolean;

    static readonly isEnabled: boolean;

    static readonly span: SentrySpan;
}

declare const enum SentrySampleDecision {

    kSentrySampleDecisionUndecided = 0,

    kSentrySampleDecisionYes = 1,

    kSentrySampleDecisionNo = 2
}

declare class SentrySamplingContext extends NSObject {

    static alloc(): SentrySamplingContext; // inherited from NSObject

    static new(): SentrySamplingContext; // inherited from NSObject

    readonly customSamplingContext: NSDictionary<string, any>;

    readonly transactionContext: SentryTransactionContext;

    constructor(o: { transactionContext: SentryTransactionContext });

    constructor(o: { transactionContext: SentryTransactionContext; customSamplingContext: NSDictionary<string, any> });

    initWithTransactionContext(transactionContext: SentryTransactionContext): this;

    initWithTransactionContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): this;
}

declare class SentryScope extends NSObject implements SentrySerializable {

    static alloc(): SentryScope; // inherited from NSObject

    static new(): SentryScope; // inherited from NSObject

    span: SentrySpan;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { maxBreadcrumbs: number });

    constructor(o: { scope: SentryScope });

    addAttachment(attachment: SentryAttachment): void;

    addBreadcrumb(crumb: SentryBreadcrumb): void;

    applyToEventMaxBreadcrumb(event: SentryEvent, maxBreadcrumbs: number): SentryEvent;

    applyToSession(session: SentrySession): void;

    class(): typeof NSObject;

    clear(): void;

    clearAttachments(): void;

    clearBreadcrumbs(): void;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithMaxBreadcrumbs(maxBreadcrumbs: number): this;

    initWithScope(scope: SentryScope): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

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

    useSpan(callback: (p1: SentrySpan) => void): void;
}

declare class SentryScreenFrames extends NSObject {

    static alloc(): SentryScreenFrames; // inherited from NSObject

    static new(): SentryScreenFrames; // inherited from NSObject

    readonly frameRateTimestamps: NSArray<NSDictionary<string, number>>;

    readonly frameTimestamps: NSArray<NSDictionary<string, number>>;

    readonly frozen: number;

    readonly slow: number;

    readonly total: number;

    constructor(o: { total: number; frozen: number; slow: number });

    constructor(o: { total: number; frozen: number; slow: number; frameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]; frameRateTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[] });

    initWithTotalFrozenSlow(total: number, frozen: number, slow: number): this;

    initWithTotalFrozenSlowFrameTimestampsFrameRateTimestamps(total: number, frozen: number, slow: number, frameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[], frameRateTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]): this;
}

declare class SentrySdkInfo extends NSObject implements SentrySerializable {

    static alloc(): SentrySdkInfo; // inherited from NSObject

    static new(): SentrySdkInfo; // inherited from NSObject

    readonly name: string;

    readonly version: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { dict: NSDictionary<any, any> });

    constructor(o: { dict: NSDictionary<any, any>; orDefaults: SentrySdkInfo });

    constructor(o: { name: string; andVersion: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithDict(dict: NSDictionary<any, any>): this;

    initWithDictOrDefaults(dict: NSDictionary<any, any>, info: SentrySdkInfo): this;

    initWithNameAndVersion(name: string, version: string): this;

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

interface SentrySerializable extends NSObjectProtocol {

    serialize(): NSDictionary<string, any>;
}
declare var SentrySerializable: {

    prototype: SentrySerializable;
};

declare class SentrySession extends NSObject implements NSCopying, SentrySerializable {

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

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { JSONObject: NSDictionary<any, any> });

    constructor(o: { releaseName: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    endSessionAbnormalWithTimestamp(timestamp: Date): void;

    endSessionCrashedWithTimestamp(timestamp: Date): void;

    endSessionExitedWithTimestamp(timestamp: Date): void;

    incrementErrors(): void;

    initWithJSONObject(jsonObject: NSDictionary<any, any>): this;

    initWithReleaseName(releaseName: string): this;

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

declare const enum SentrySessionStatus {

    kSentrySessionStatusOk = 0,

    kSentrySessionStatusExited = 1,

    kSentrySessionStatusCrashed = 2,

    kSentrySessionStatusAbnormal = 3
}

interface SentrySpan extends SentrySerializable {

    context: SentrySpanContext;

    data: NSDictionary<string, any>;

    isFinished: boolean;

    startTimestamp: Date;

    tags: NSDictionary<string, string>;

    timestamp: Date;

    finish(): void;

    finishWithStatus(status: SentrySpanStatus): void;

    removeDataForKey(key: string): void;

    removeTagForKey(key: string): void;

    setDataValueForKey(value: any, key: string): void;

    setExtraValueForKey(value: any, key: string): void;

    setTagValueForKey(value: string, key: string): void;

    startChildWithOperation(operation: string): SentrySpan;

    startChildWithOperationDescription(operation: string, description: string): SentrySpan;

    toTraceHeader(): SentryTraceHeader;
}
declare var SentrySpan: {

    prototype: SentrySpan;
};

declare class SentrySpanContext extends NSObject implements SentrySerializable {

    static alloc(): SentrySpanContext; // inherited from NSObject

    static new(): SentrySpanContext; // inherited from NSObject

    operation: string;

    readonly parentSpanId: SentrySpanId;

    sampled: SentrySampleDecision;

    spanDescription: string;

    readonly spanId: SentrySpanId;

    status: SentrySpanStatus;

    readonly tags: NSDictionary<string, string>;

    readonly traceId: SentryId;

    static readonly type: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { operation: string });

    constructor(o: { operation: string; sampled: SentrySampleDecision });

    constructor(o: { traceId: SentryId; spanId: SentrySpanId; parentId: SentrySpanId; operation: string; sampled: SentrySampleDecision });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithOperation(operation: string): this;

    initWithOperationSampled(operation: string, sampled: SentrySampleDecision): this;

    initWithTraceIdSpanIdParentIdOperationSampled(traceId: SentryId, spanId: SentrySpanId, parentId: SentrySpanId, operation: string, sampled: SentrySampleDecision): this;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    removeTagForKey(key: string): void;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    serialize(): NSDictionary<string, any>;

    setTagValueForKey(value: string, key: string): void;
}

declare class SentrySpanId extends NSObject implements NSCopying {

    static alloc(): SentrySpanId; // inherited from NSObject

    static new(): SentrySpanId; // inherited from NSObject

    readonly sentrySpanIdString: string;

    static readonly empty: SentrySpanId;

    constructor(o: { UUID: NSUUID });

    constructor(o: { value: string });

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    initWithUUID(uuid: NSUUID): this;

    initWithValue(value: string): this;
}

declare const enum SentrySpanStatus {

    kSentrySpanStatusUndefined = 0,

    kSentrySpanStatusOk = 1,

    kSentrySpanStatusDeadlineExceeded = 2,

    kSentrySpanStatusUnauthenticated = 3,

    kSentrySpanStatusPermissionDenied = 4,

    kSentrySpanStatusNotFound = 5,

    kSentrySpanStatusResourceExhausted = 6,

    kSentrySpanStatusInvalidArgument = 7,

    kSentrySpanStatusUnimplemented = 8,

    kSentrySpanStatusUnavailable = 9,

    kSentrySpanStatusInternalError = 10,

    kSentrySpanStatusUnknownError = 11,

    kSentrySpanStatusCancelled = 12,

    kSentrySpanStatusAlreadyExists = 13,

    kSentrySpanStatusFailedPrecondition = 14,

    kSentrySpanStatusAborted = 15,

    kSentrySpanStatusOutOfRange = 16,

    kSentrySpanStatusDataLoss = 17
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

    readonly;  // inherited from NSObjectProtocol

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

    readonly;  // inherited from NSObjectProtocol

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

declare class SentryTraceHeader extends NSObject {

    static alloc(): SentryTraceHeader; // inherited from NSObject

    static new(): SentryTraceHeader; // inherited from NSObject

    readonly sampled: SentrySampleDecision;

    readonly spanId: SentrySpanId;

    readonly traceId: SentryId;

    constructor(o: { traceId: SentryId; spanId: SentrySpanId; sampled: SentrySampleDecision });

    initWithTraceIdSpanIdSampled(traceId: SentryId, spanId: SentrySpanId, sampled: SentrySampleDecision): this;

    value(): string;
}

declare class SentryTransactionContext extends SentrySpanContext {

    static alloc(): SentryTransactionContext; // inherited from NSObject

    static new(): SentryTransactionContext; // inherited from NSObject

    readonly name: string;

    readonly nameSource: SentryTransactionNameSource;

    parentSampled: SentrySampleDecision;

    sampleRate: number;

    constructor(o: { name: string; operation: string });

    constructor(o: { name: string; operation: string; sampled: SentrySampleDecision });

    constructor(o: { name: string; operation: string; traceId: SentryId; spanId: SentrySpanId; parentSpanId: SentrySpanId; parentSampled: SentrySampleDecision });

    initWithNameOperation(name: string, operation: string): this;

    initWithNameOperationSampled(name: string, operation: string, sampled: SentrySampleDecision): this;

    initWithNameOperationTraceIdSpanIdParentSpanIdParentSampled(name: string, operation: string, traceId: SentryId, spanId: SentrySpanId, parentSpanId: SentrySpanId, parentSampled: SentrySampleDecision): this;
}

declare const enum SentryTransactionNameSource {

    kSentryTransactionNameSourceCustom = 0,

    kSentryTransactionNameSourceUrl = 1,

    kSentryTransactionNameSourceRoute = 2,

    kSentryTransactionNameSourceView = 3,

    kSentryTransactionNameSourceComponent = 4,

    kSentryTransactionNameSourceTask = 5
}

declare class SentryUser extends NSObject implements NSCopying, SentrySerializable {

    static alloc(): SentryUser; // inherited from NSObject

    static new(): SentryUser; // inherited from NSObject

    data: NSDictionary<string, any>;

    email: string;

    ipAddress: string;

    segment: string;

    userId: string;

    username: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { userId: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

    hash(): number;

    initWithUserId(userId: string): this;

    isEqual(object: any): boolean;

    isEqualToUser(user: SentryUser): boolean;

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

declare class SentryUserFeedback extends NSObject implements SentrySerializable {

    static alloc(): SentryUserFeedback; // inherited from NSObject

    static new(): SentryUserFeedback; // inherited from NSObject

    comments: string;

    email: string;

    readonly eventId: SentryId;

    name: string;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly;  // inherited from NSObjectProtocol

    constructor(o: { eventId: SentryId });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithEventId(eventId: SentryId): this;

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

declare let defaultMaxBreadcrumbs: number;

declare let kSentrySampleDecisionNameNo: string;

declare let kSentrySampleDecisionNameUndecided: string;

declare let kSentrySampleDecisionNameYes: string;

declare let kSentrySpanStatusNameAborted: string;

declare let kSentrySpanStatusNameAlreadyExists: string;

declare let kSentrySpanStatusNameCancelled: string;

declare let kSentrySpanStatusNameDataLoss: string;

declare let kSentrySpanStatusNameDeadlineExceeded: string;

declare let kSentrySpanStatusNameFailedPrecondition: string;

declare let kSentrySpanStatusNameInternalError: string;

declare let kSentrySpanStatusNameInvalidArgument: string;

declare let kSentrySpanStatusNameNotFound: string;

declare let kSentrySpanStatusNameOk: string;

declare let kSentrySpanStatusNameOutOfRange: string;

declare let kSentrySpanStatusNamePermissionDenied: string;

declare let kSentrySpanStatusNameResourceExhausted: string;

declare let kSentrySpanStatusNameUnauthenticated: string;

declare let kSentrySpanStatusNameUnavailable: string;

declare let kSentrySpanStatusNameUndefined: string;

declare let kSentrySpanStatusNameUnimplemented: string;

declare let kSentrySpanStatusNameUnknownError: string;

declare function nameForSentrySampleDecision(decision: SentrySampleDecision): string;

declare function nameForSentrySpanStatus(status: SentrySpanStatus): string;
