
declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

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

    initWithOptions(options: SentryOptions): this;

    storeEnvelope(envelope: SentryEnvelope): void;
}

declare class SentryCrashExceptionApplication extends NSObject {

    static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

    static new(): SentryCrashExceptionApplication; // inherited from NSObject
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

    constructor(o: { id: SentryId; andSdkInfo: SentrySdkInfo });

    initWithId(eventId: SentryId): this;

    initWithIdAndSdkInfo(eventId: SentryId, sdkInfo: SentrySdkInfo): this;
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

    thread: SentryThread;

    type: string;

    userReported: number;

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

    installedIntegrations: NSMutableArray<NSObject>;

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

    installWithOptions(options: SentryOptions): void;
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

    error: SentryNSError;

    handled: number;

    helpLink: string;

    meta: NSDictionary<string, string>;

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

    attachStacktrace: boolean;

    beforeBreadcrumb: (p1: SentryBreadcrumb) => SentryBreadcrumb;

    beforeSend: (p1: SentryEvent) => SentryEvent;

    debug: boolean;

    dist: string;

    dsn: string;

    enableAutoSessionTracking: boolean;

    enabled: boolean;

    environment: string;

    integrations: NSArray<string>;

    logLevel: SentryLogLevel;

    maxAttachmentSize: number;

    maxBreadcrumbs: number;

    onCrashedLastRun: (p1: SentryEvent) => void;

    parsedDsn: SentryDsn;

    releaseName: string;

    sampleRate: number;

    readonly sdkInfo: SentrySdkInfo;

    sendDefaultPii: boolean;

    sessionTrackingIntervalMillis: number;

    constructor(o: { dict: NSDictionary<string, any> });

    initWithDictDidFailWithError(options: NSDictionary<string, any>): this;
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

    static configureScope(callback: (p1: SentryScope) => void): void;

    static crash(): void;

    static currentHub(): SentryHub;

    static new(): SentrySDK; // inherited from NSObject

    static setCurrentHub(hub: SentryHub): void;

    static setUser(user: SentryUser): void;

    static startWithConfigureOptions(configureOptions: (p1: SentryOptions) => void): void;

    static startWithOptions(optionsDict: NSDictionary<string, any>): void;

    static startWithOptionsObject(options: SentryOptions): void;

    static readonly crashedLastRun: boolean;

    static logLevel: SentryLogLevel;
}

declare class SentryScope extends NSObject implements SentrySerializable {

    static alloc(): SentryScope; // inherited from NSObject

    static new(): SentryScope; // inherited from NSObject

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

    constructor(o: { name: string; andVersion: string });

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    initWithDict(dict: NSDictionary<any, any>): this;

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
