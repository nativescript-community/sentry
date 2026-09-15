
declare class HTTPHeaderSanitizer extends NSObject {

	static alloc(): HTTPHeaderSanitizer; // inherited from NSObject

	static new(): HTTPHeaderSanitizer; // inherited from NSObject

	static sanitizeHeaders(headers: NSDictionary<string, string>): NSDictionary<string, string>;
}

declare class LoadValidator extends NSObject {

	static alloc(): LoadValidator; // inherited from NSObject

	static checkForDuplicatedSDKWithImageNameImageAddressImageSizeObjcRuntimeWrapperDispatchQueueWrapper(imageName: string, imageAddress: number, imageSize: number, objcRuntimeWrapper: SentryObjCRuntimeWrapper, dispatchQueueWrapper: SentryDispatchQueueWrapper): void;

	static new(): LoadValidator; // inherited from NSObject
}

declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare function NSErrorFromSentryErrorWithException(error: SentryError, description: string, exception: NSException): NSError;

declare function NSErrorFromSentryErrorWithKernelError(error: SentryError, description: string, kernelErrorCode: number): NSError;

declare function NSErrorFromSentryErrorWithUnderlyingError(error: SentryError, description: string, underlyingError: NSError): NSError;

declare class PlaceholderProcessInfoClass extends NSObject {

	static alloc(): PlaceholderProcessInfoClass; // inherited from NSObject

	static new(): PlaceholderProcessInfoClass; // inherited from NSObject
}

declare class PlaceholderSentryApplication extends NSObject {

	static alloc(): PlaceholderSentryApplication; // inherited from NSObject

	static new(): PlaceholderSentryApplication; // inherited from NSObject
}

declare class PrivateSentrySDKOnly extends NSObject {

	static addReplayIgnoreClasses(classes: NSArray<typeof NSObject> | typeof NSObject[]): void;

	static addReplayRedactClasses(classes: NSArray<typeof NSObject> | typeof NSObject[]): void;

	static addSdkPackageVersion(name: string, version: string): void;

	static alloc(): PrivateSentrySDKOnly; // inherited from NSObject

	static appStartMeasurementWithSpans(): NSDictionary<string, any>;

	static breadcrumbWithDictionary(dictionary: NSDictionary<any, any>): SentryBreadcrumb;

	static captureEnvelope(envelope: SentryEnvelope): void;

	static captureReplay(): void;

	static captureScreenshots(): NSArray<NSData>;

	static captureViewHierarchy(): NSData;

	static collectProfileBetweenAndForTrace(startSystemTime: number, endSystemTime: number, traceId: SentryId): NSMutableDictionary<string, any>;

	static configureSessionReplayWithScreenshotProvider(breadcrumbConverter: SentryReplayBreadcrumbConverter, screenshotProvider: SentryViewScreenshotProvider): void;

	static discardProfilerForTrace(traceId: SentryId): void;

	static envelopeWithData(data: NSData): SentryEnvelope;

	static getExtraContext(): NSDictionary<any, any>;

	static getReplayId(): string;

	static getSdkName(): string;

	static getSdkVersionString(): string;

	static ignoreNextSignal(signum: number): void;

	static new(): PrivateSentrySDKOnly; // inherited from NSObject

	static optionsWithDictionaryDidFailWithError(options: NSDictionary<string, any>): SentryOptions;

	static setCurrentScreen(screenName: string): void;

	static setIgnoreContainerClass(containerClass: typeof NSObject): void;

	static setLogOutput(output: (p1: string) => void): void;

	static setRedactContainerClass(containerClass: typeof NSObject): void;

	static setReplayTags(tags: NSDictionary<string, any>): void;

	static setSdkName(sdkName: string): void;

	static setSdkNameAndVersionString(sdkName: string, versionString: string): void;

	static setTraceSpanId(traceId: SentryId, spanId: SentrySpanId): void;

	static startProfilerForTrace(traceId: SentryId): number;

	static storeEnvelope(envelope: SentryEnvelope): void;

	static userWithDictionary(dictionary: NSDictionary<any, any>): SentryUser;

	static readonly appStartMeasurement: SentryAppStartMeasurement;

	static appStartMeasurementHybridSDKMode: boolean;

	static readonly currentScreenFrames: SentryScreenFrames;

	static framesTrackingMeasurementHybridSDKMode: boolean;

	static readonly installationID: string;

	static readonly isFramesTrackingRunning: boolean;

	static onAppStartMeasurementAvailable: (p1: SentryAppStartMeasurement) => void;

	static readonly options: SentryOptions;
}

declare class SentryANRStoppedResult extends NSObject {

	static alloc(): SentryANRStoppedResult; // inherited from NSObject

	static new(): SentryANRStoppedResult; // inherited from NSObject
}

declare class SentryANRTracker extends NSObject {

	static alloc(): SentryANRTracker; // inherited from NSObject

	static new(): SentryANRTracker; // inherited from NSObject

	addListener(listener: SentryANRTrackerDelegate): void;

	clear(): void;

	removeListener(listener: SentryANRTrackerDelegate): void;
}

interface SentryANRTrackerDelegate {

	anrDetectedWithType(type: SentryANRType): void;

	anrStoppedWithResult(result: SentryANRStoppedResult): void;
}
declare var SentryANRTrackerDelegate: {

	prototype: SentryANRTrackerDelegate;
};

declare const enum SentryANRType {

	FatalFullyBlocking = 0,

	FatalNonFullyBlocking = 1,

	FullyBlocking = 2,

	NonFullyBlocking = 3,

	Unknown = 4
}

declare class SentryAppHangTypeMapper extends NSObject {

	static alloc(): SentryAppHangTypeMapper; // inherited from NSObject

	static getExceptionTypeWithAnrType(anrType: SentryANRType): string;

	static getFatalExceptionTypeWithNonFatalErrorType(nonFatalErrorType: string): string;

	static isExceptionTypeAppHangWithExceptionType(exceptionType: string): boolean;

	static new(): SentryAppHangTypeMapper; // inherited from NSObject
}

declare class SentryAppStartMeasurement extends NSObject {

	static alloc(): SentryAppStartMeasurement; // inherited from NSObject

	static new(): SentryAppStartMeasurement; // inherited from NSObject

	readonly appStartTimestamp: Date;

	readonly didFinishLaunchingTimestamp: Date;

	readonly duration: number;

	readonly isPreWarmed: boolean;

	readonly moduleInitializationTimestamp: Date;

	readonly runtimeInitSystemTimestamp: number;

	readonly runtimeInitTimestamp: Date;

	readonly sdkStartTimestamp: Date;

	readonly type: SentryAppStartType;
}

declare class SentryAppStartTracker extends NSObject implements SentryFramesTrackerListener {

	static alloc(): SentryAppStartTracker; // inherited from NSObject

	static new(): SentryAppStartTracker; // inherited from NSObject

	readonly isRunning: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	framesTrackerHasNewFrame(newFrameDate: Date): void;

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

declare const enum SentryAppStartType {

	Warm = 0,

	Cold = 1,

	Unknown = 2
}

declare class SentryAppStartTypeToString extends NSObject {

	static alloc(): SentryAppStartTypeToString; // inherited from NSObject

	static convert(type: SentryAppStartType): string;

	static new(): SentryAppStartTypeToString; // inherited from NSObject
}

declare class SentryAppState extends NSObject implements SentrySerializable {

	static alloc(): SentryAppState; // inherited from NSObject

	static new(): SentryAppState; // inherited from NSObject

	isANROngoing: boolean;

	isActive: boolean;

	readonly isDebugging: boolean;

	isSDKRunning: boolean;

	readonly osVersion: string;

	readonly releaseName: string;

	readonly systemBootTimestamp: Date;

	readonly vendorId: string;

	wasTerminated: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONObject: NSDictionary<string, any>; });

	constructor(o: { releaseName: string; osVersion: string; vendorId: string; isDebugging: boolean; systemBootTimestamp: Date; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONObject(jsonObject: NSDictionary<string, any>): this;

	initWithReleaseNameOsVersionVendorIdIsDebuggingSystemBootTimestamp(releaseName: string, osVersion: string, vendorId: string, isDebugging: boolean, systemBootTimestamp: Date): this;

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

declare class SentryAppStateManager extends NSObject {

	static alloc(): SentryAppStateManager; // inherited from NSObject

	static new(): SentryAppStateManager; // inherited from NSObject

	buildCurrentAppState(): SentryAppState;

	loadPreviousAppState(): SentryAppState;

	start(): void;

	stop(): void;

	stopWithForce(force: boolean): void;

	updateAppState(block: (p1: SentryAppState) => void): void;
}

interface SentryApplication {

	connectedScenes: NSSet<UIScene>;

	delegate: UIApplicationDelegate;

	mainThread_isActive: boolean;

	unsafeApplicationState: UIApplicationState;

	getActiveWindowSize(): CGSize;

	getKeyWindow(): UIWindow;

	getWindows(): NSArray<UIWindow>;

	relevantViewControllersNames(): NSArray<string>;
}
declare var SentryApplication: {

	prototype: SentryApplication;
};

declare class SentryAttachment extends NSObject {

	static alloc(): SentryAttachment; // inherited from NSObject

	static new(): SentryAttachment; // inherited from NSObject

	readonly attachmentType: SentryAttachmentType;

	readonly contentType: string;

	readonly data: NSData;

	readonly filename: string;

	readonly path: string;

	constructor(o: { data: NSData; filename: string; });

	constructor(o: { data: NSData; filename: string; contentType: string; });

	constructor(o: { data: NSData; filename: string; contentType: string; attachmentType: SentryAttachmentType; });

	constructor(o: { path: string; });

	constructor(o: { path: string; filename: string; });

	constructor(o: { path: string; filename: string; contentType: string; });

	constructor(o: { path: string; filename: string; contentType: string; attachmentType: SentryAttachmentType; });

	initWithDataFilename(data: NSData, filename: string): this;

	initWithDataFilenameContentType(data: NSData, filename: string, contentType: string): this;

	initWithDataFilenameContentTypeAttachmentType(data: NSData, filename: string, contentType: string, attachmentType: SentryAttachmentType): this;

	initWithPath(path: string): this;

	initWithPathFilename(path: string, filename: string): this;

	initWithPathFilenameContentType(path: string, filename: string, contentType: string): this;

	initWithPathFilenameContentTypeAttachmentType(path: string, filename: string, contentType: string, attachmentType: SentryAttachmentType): this;
}

declare const enum SentryAttachmentType {

	kSentryAttachmentTypeEventAttachment = 0,

	kSentryAttachmentTypeViewHierarchy = 1
}

declare class SentryAttribute extends NSObject {

	static alloc(): SentryAttribute; // inherited from NSObject

	static new(): SentryAttribute; // inherited from NSObject

	readonly type: string;

	readonly value: any;

	constructor(o: { boolean: boolean; });

	constructor(o: { booleanArray: NSArray<number> | number[]; });

	constructor(o: { double: number; });

	constructor(o: { doubleArray: NSArray<number> | number[]; });

	constructor(o: { float: number; });

	constructor(o: { floatArray: NSArray<number> | number[]; });

	constructor(o: { integer: number; });

	constructor(o: { integerArray: NSArray<number> | number[]; });

	constructor(o: { string: string; });

	constructor(o: { stringArray: NSArray<string> | string[]; });

	initWithBoolean(value: boolean): this;

	initWithBooleanArray(values: NSArray<number> | number[]): this;

	initWithDouble(value: number): this;

	initWithDoubleArray(values: NSArray<number> | number[]): this;

	initWithFloat(value: number): this;

	initWithFloatArray(values: NSArray<number> | number[]): this;

	initWithInteger(value: number): this;

	initWithIntegerArray(values: NSArray<number> | number[]): this;

	initWithString(value: string): this;

	initWithStringArray(values: NSArray<string> | string[]): this;
}

declare class SentryBaggage extends NSObject {

	static alloc(): SentryBaggage; // inherited from NSObject

	static new(): SentryBaggage; // inherited from NSObject

	readonly environment: string;

	readonly orgId: string;

	readonly publicKey: string;

	readonly releaseName: string;

	replayId: string;

	readonly sampleRand: string;

	readonly sampleRate: string;

	sampled: string;

	readonly traceId: SentryId;

	readonly transaction: string;

	readonly userId: string;

	constructor(o: { traceId: SentryId; publicKey: string; releaseName: string; environment: string; transaction: string; sampleRate: string; sampleRand: string; sampled: string; replayId: string; });

	constructor(o: { traceId: SentryId; publicKey: string; releaseName: string; environment: string; transaction: string; sampleRate: string; sampleRand: string; sampled: string; replayId: string; orgId: string; });

	constructor(o: { traceId: SentryId; publicKey: string; releaseName: string; environment: string; transaction: string; sampleRate: string; sampled: string; replayId: string; });

	initWithTraceIdPublicKeyReleaseNameEnvironmentTransactionSampleRateSampleRandSampledReplayId(traceId: SentryId, publicKey: string, releaseName: string, environment: string, transaction: string, sampleRate: string, sampleRand: string, sampled: string, replayId: string): this;

	initWithTraceIdPublicKeyReleaseNameEnvironmentTransactionSampleRateSampleRandSampledReplayIdOrgId(traceId: SentryId, publicKey: string, releaseName: string, environment: string, transaction: string, sampleRate: string, sampleRand: string, sampled: string, replayId: string, orgId: string): this;

	initWithTraceIdPublicKeyReleaseNameEnvironmentTransactionSampleRateSampledReplayId(traceId: SentryId, publicKey: string, releaseName: string, environment: string, transaction: string, sampleRate: string, sampled: string, replayId: string): this;

	toHTTPHeaderWithOriginalBaggage(originalBaggage: NSDictionary<any, any>): string;
}

declare class SentryBaggageSerialization extends NSObject {

	static alloc(): SentryBaggageSerialization; // inherited from NSObject

	static decode(baggage: string): NSDictionary<string, string>;

	static encodeDictionary(dictionary: NSDictionary<string, string>): string;

	static new(): SentryBaggageSerialization; // inherited from NSObject
}

declare class SentryBinaryImageCache extends NSObject {

	static alloc(): SentryBinaryImageCache; // inherited from NSObject

	static new(): SentryBinaryImageCache; // inherited from NSObject

	readonly cache: NSArray<SentryBinaryImageInfo>;

	binaryImageAddedVmAddressAddressSizeUuid(imageName: string | interop.Pointer | interop.Reference<any>, vmAddress: number, address: number, size: number, uuid: string | interop.Pointer | interop.Reference<any>): void;

	imageByAddress(address: number): SentryBinaryImageInfo;

	start(isDebug: boolean): void;

	stop(): void;
}

declare class SentryBinaryImageInfo extends NSObject {

	static alloc(): SentryBinaryImageInfo; // inherited from NSObject

	static new(): SentryBinaryImageInfo; // inherited from NSObject

	address: number;

	name: string;

	size: number;

	uuid: string;

	vmAddress: number;

	constructor(o: { name: string; uuid: string; vmAddress: number; address: number; size: number; });

	initWithNameUuidVmAddressAddressSize(name: string, uuid: string, vmAddress: number, address: number, size: number): this;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {

	static alloc(): SentryBreadcrumb; // inherited from NSObject

	static new(): SentryBreadcrumb; // inherited from NSObject

	category: string;

	data: NSDictionary<string, any>;

	level: SentryLevel;

	message: string;

	origin: string;

	timestamp: Date;

	type: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { level: SentryLevel; category: string; });

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

interface SentryBreadcrumbDelegate extends NSObjectProtocol {

	addBreadcrumb(crumb: SentryBreadcrumb): void;
}
declare var SentryBreadcrumbDelegate: {

	prototype: SentryBreadcrumbDelegate;
};

declare class SentryBreadcrumbTracker extends NSObject implements SentryReachabilityObserver {

	static alloc(): SentryBreadcrumbTracker; // inherited from NSObject

	static new(): SentryBreadcrumbTracker; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectivityChangedTypeDescription(connected: boolean, typeDescription: string): void;

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

declare class SentryByteCountFormatter extends NSObject {

	static alloc(): SentryByteCountFormatter; // inherited from NSObject

	static bytesCountDescription(bytes: number): string;

	static new(): SentryByteCountFormatter; // inherited from NSObject
}

declare class SentryClient extends NSObject {

	static alloc(): SentryClient; // inherited from NSObject

	static new(): SentryClient; // inherited from NSObject

	readonly isEnabled: boolean;

	options: SentryOptions;

	constructor(o: { options: SentryOptions; });

	captureError(error: NSError): SentryId;

	captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

	captureEvent(event: SentryEvent): SentryId;

	captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

	captureException(exception: NSException): SentryId;

	captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

	captureFeedbackWithScope(feedback: SentryFeedback, scope: SentryScope): void;

	captureLogWithScope(log: SentryLog, scope: SentryScope): void;

	captureMessage(message: string): SentryId;

	captureMessageWithScope(message: string, scope: SentryScope): SentryId;

	close(): void;

	flush(timeout: number): void;

	initWithOptions(options: SentryOptions): this;
}

declare class SentryClientReport extends NSObject implements SentrySerializable {

	static alloc(): SentryClientReport; // inherited from NSObject

	static new(): SentryClientReport; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { discardedEvents: NSArray<SentryDiscardedEvent> | SentryDiscardedEvent[]; dateProvider: SentryCurrentDateProvider; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDiscardedEventsDateProvider(discardedEvents: NSArray<SentryDiscardedEvent> | SentryDiscardedEvent[], dateProvider: SentryCurrentDateProvider): this;

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

declare class SentryCrashBridge extends NSObject {

	static alloc(): SentryCrashBridge; // inherited from NSObject

	static new(): SentryCrashBridge; // inherited from NSObject

	readonly crashReporter: SentryCrashSwift;

	readonly dateProvider: SentryCurrentDateProvider;

	readonly notificationCenterWrapper: SentryNSNotificationCenterWrapper;

	uncaughtExceptionHandler: interop.FunctionReference<(p1: NSException) => void>;

	constructor(o: { notificationCenterWrapper: SentryNSNotificationCenterWrapper; dateProvider: SentryCurrentDateProvider; crashReporter: SentryCrashSwift; });

	activeScreenSize(): CGSize;

	initWithNotificationCenterWrapperDateProviderCrashReporter(notificationCenterWrapper: SentryNSNotificationCenterWrapper, dateProvider: SentryCurrentDateProvider, crashReporter: SentryCrashSwift): this;
}

declare class SentryCrashReportFilterSwift extends NSObject {

	static alloc(): SentryCrashReportFilterSwift; // inherited from NSObject

	static new(): SentryCrashReportFilterSwift; // inherited from NSObject

	constructor(o: { filterReports: (p1: NSArray<any>, p2: (p1: NSArray<any>, p2: boolean, p3: NSError) => void) => void; });

	initWithFilterReports(filter: (p1: NSArray<any>, p2: (p1: NSArray<any>, p2: boolean, p3: NSError) => void) => void): this;
}

interface SentryCrashReporter extends NSObjectProtocol {

	activeDurationSinceLastCrash: number;

	appMemorySize: number;

	crashedLastLaunch: boolean;

	durationFromCrashStateInitToLastCrash: number;

	freeMemorySize: number;

	isApplicationInForeground: boolean;

	isBeingTraced: boolean;

	isSimulatorBuild: boolean;

	processInfoWrapper: SentryProcessInfoSource;

	systemInfo: NSDictionary<string, any>;

	enrichScope(scope: SentryScope): void;

	startBinaryImageCache(): void;

	stopBinaryImageCache(): void;
}
declare var SentryCrashReporter: {

	prototype: SentryCrashReporter;
};

declare class SentryCrashSwift extends NSObject {

	static alloc(): SentryCrashSwift; // inherited from NSObject

	static new(): SentryCrashSwift; // inherited from NSObject

	readonly activeDurationSinceLastCrash: number;

	basePath: string;

	readonly crashedLastLaunch: boolean;

	readonly monitoring: number;

	readonly systemInfo: NSDictionary<any, any>;

	uncaughtExceptionHandler: interop.FunctionReference<(p1: NSException) => void>;

	userInfo: NSDictionary<any, any>;

	hasOnCrash(): boolean;

	install(): void;

	removeOnCrash(): void;

	sendAllReportsWithCompletion(completion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

	setBridge(bridge: SentryCrashBridge): void;

	setSink(newValue: SentryCrashReportFilterSwift): void;

	setupOnCrash(): void;

	uninstall(): void;
}

interface SentryCurrentDateProvider {

	date(): Date;

	getAbsoluteTime(): number;

	systemTime(): number;

	systemUptime(): number;

	timezoneOffset(): number;
}
declare var SentryCurrentDateProvider: {

	prototype: SentryCurrentDateProvider;
};

declare class SentryDateUtil extends NSObject {

	static alloc(): SentryDateUtil; // inherited from NSObject

	static getMaximumDateAndOther(first: Date, second: Date): Date;

	static millisecondsSince1970(date: Date): number;

	static new(): SentryDateUtil; // inherited from NSObject

	constructor(o: { currentDateProvider: SentryCurrentDateProvider; });

	initWithCurrentDateProvider(currentDateProvider: SentryCurrentDateProvider): this;

	isInFuture(date: Date): boolean;
}

declare class SentryDebugImageProvider extends NSObject {

	static alloc(): SentryDebugImageProvider; // inherited from NSObject

	static new(): SentryDebugImageProvider; // inherited from NSObject

	getDebugImagesForImageAddressesFromCache(imageAddresses: NSSet<string>): NSArray<SentryDebugMeta>;

	getDebugImagesFromCache(): NSArray<SentryDebugMeta>;

	getDebugImagesFromCacheForFrames(frames: NSArray<SentryFrame> | SentryFrame[]): NSArray<SentryDebugMeta>;

	getDebugImagesFromCacheForThreads(threads: NSArray<SentryThread> | SentryThread[]): NSArray<SentryDebugMeta>;
}

declare class SentryDebugMeta extends NSObject implements SentrySerializable {

	static alloc(): SentryDebugMeta; // inherited from NSObject

	static new(): SentryDebugMeta; // inherited from NSObject

	codeFile: string;

	debugID: string;

	imageAddress: string;

	imageAddressRaw: number;

	imageSize: number;

	imageVmAddress: string;

	imageVmAddressRaw: number;

	type: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare class SentryDefaultCrashReporter extends NSObject implements SentryCrashReporter {

	static alloc(): SentryDefaultCrashReporter; // inherited from NSObject

	static new(): SentryDefaultCrashReporter; // inherited from NSObject

	readonly activeDurationSinceLastCrash: number; // inherited from SentryCrashReporter

	readonly appMemorySize: number; // inherited from SentryCrashReporter

	readonly crashedLastLaunch: boolean; // inherited from SentryCrashReporter

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly durationFromCrashStateInitToLastCrash: number; // inherited from SentryCrashReporter

	readonly freeMemorySize: number; // inherited from SentryCrashReporter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isApplicationInForeground: boolean; // inherited from SentryCrashReporter

	readonly isBeingTraced: boolean; // inherited from SentryCrashReporter

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isSimulatorBuild: boolean; // inherited from SentryCrashReporter

	readonly processInfoWrapper: SentryProcessInfoSource; // inherited from SentryCrashReporter

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly systemInfo: NSDictionary<string, any>; // inherited from SentryCrashReporter

	readonly  // inherited from NSObjectProtocol

	constructor(o: { processInfoWrapper: SentryProcessInfoSource; bridge: SentryCrashBridge; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	enrichScope(scope: SentryScope): void;

	initWithProcessInfoWrapperBridge(processInfoWrapper: SentryProcessInfoSource, bridge: SentryCrashBridge): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startBinaryImageCache(): void;

	stopBinaryImageCache(): void;
}

declare class SentryDefaultCurrentDateProvider extends NSObject implements SentryCurrentDateProvider {

	static alloc(): SentryDefaultCurrentDateProvider; // inherited from NSObject

	static getAbsoluteTime(): number;

	static new(): SentryDefaultCurrentDateProvider; // inherited from NSObject

	date(): Date;

	getAbsoluteTime(): number;

	systemTime(): number;

	systemUptime(): number;

	timezoneOffset(): number;
}

declare class SentryDefaultLogScopeApplier extends NSObject implements SentryLogScopeApplier {

	static alloc(): SentryDefaultLogScopeApplier; // inherited from NSObject

	static new(): SentryDefaultLogScopeApplier; // inherited from NSObject

	constructor(o: { environment: string; releaseName: string; cacheDirectoryPath: string; sendDefaultPii: boolean; });

	applyScopeToLog(scope: SentryScope, log: SentryLog): SentryLog;

	initWithEnvironmentReleaseNameCacheDirectoryPathSendDefaultPii(environment: string, releaseName: string, cacheDirectoryPath: string, sendDefaultPii: boolean): this;
}

declare class SentryDefaultObjCRuntimeWrapper extends NSObject implements SentryObjCRuntimeWrapper {

	static alloc(): SentryDefaultObjCRuntimeWrapper; // inherited from NSObject

	static new(): SentryDefaultObjCRuntimeWrapper; // inherited from NSObject

	class_getImageName(cls: typeof NSObject): interop.Pointer | interop.Reference<any>;

	copyClassNamesForImageAmount(image: string | interop.Pointer | interop.Reference<any>, outCount: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>;
}

declare class SentryDefaultRateLimits extends NSObject implements SentryRateLimits {

	static alloc(): SentryDefaultRateLimits; // inherited from NSObject

	static new(): SentryDefaultRateLimits; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { retryAfterHeaderParser: SentryRetryAfterHeaderParser; andRateLimitParser: SentryRateLimitParser; currentDateProvider: SentryCurrentDateProvider; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRetryAfterHeaderParserAndRateLimitParserCurrentDateProvider(retryAfterHeaderParser: SentryRetryAfterHeaderParser, rateLimitParser: SentryRateLimitParser, currentDateProvider: SentryCurrentDateProvider): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isRateLimitActive(category: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	update(response: NSHTTPURLResponse): void;
}

declare class SentryDefaultUIDeviceWrapper extends NSObject implements SentryUIDeviceWrapper {

	static alloc(): SentryDefaultUIDeviceWrapper; // inherited from NSObject

	static new(): SentryDefaultUIDeviceWrapper; // inherited from NSObject

	readonly batteryLevel: number; // inherited from SentryUIDeviceWrapper

	readonly batteryState: UIDeviceBatteryState; // inherited from SentryUIDeviceWrapper

	readonly currentDevice: UIDevice; // inherited from SentryUIDeviceWrapper

	readonly isBatteryMonitoringEnabled: boolean; // inherited from SentryUIDeviceWrapper

	readonly orientation: UIDeviceOrientation; // inherited from SentryUIDeviceWrapper

	constructor(o: { queueWrapper: SentryDispatchQueueWrapper; });

	getSystemVersion(): string;

	initWithQueueWrapper(queueWrapper: SentryDispatchQueueWrapper): this;

	start(): void;

	stop(): void;
}

declare class SentryDependencies extends NSObject {

	static alloc(): SentryDependencies; // inherited from NSObject

	static new(): SentryDependencies; // inherited from NSObject

	static readonly binaryImageCache: SentryBinaryImageCache;

	static readonly dateProvider: SentryDefaultCurrentDateProvider;

	static readonly debugImageProvider: SentryDebugImageProvider;

	static readonly dispatchQueueWrapper: SentryDispatchQueueWrapper;

	static readonly notificationCenterWrapper: SentryNSNotificationCenterWrapper;

	static readonly processInfoWrapper: SentryProcessInfoSource;

	static readonly random: SentryRandomProtocol;

	static readonly sysctlWrapper: SentrySysctl;

	static readonly threadWrapper: SentryThreadWrapper;

	static readonly uiDeviceWrapper: SentryDefaultUIDeviceWrapper;
}

declare class SentryDependencyContainer extends NSObject {

	static alloc(): SentryDependencyContainer; // inherited from NSObject

	static new(): SentryDependencyContainer; // inherited from NSObject

	static reset(): void;

	static sharedInstance(): SentryDependencyContainer;

	appStateManager: SentryAppStateManager;

	binaryImageCache: SentryBinaryImageCache;

	crashReporter: SentryCrashSwift;

	crashWrapper: SentryCrashReporter;

	dateProvider: SentryCurrentDateProvider;

	debugImageProvider: SentryDebugImageProvider;

	dispatchFactory: SentryDispatchFactory;

	dispatchQueueWrapper: SentryDispatchQueueWrapper;

	readonly eventContextEnricher: SentryEventContextEnricher;

	extraContextProvider: SentryExtraContextProvider;

	fileIOTracker: SentryFileIOTracker;

	fileManager: SentryFileManager;

	framesTracker: SentryFramesTracker;

	globalEventProcessor: SentryGlobalEventProcessor;

	notificationCenterWrapper: SentryNSNotificationCenterWrapper;

	objcRuntimeWrapper: SentryObjCRuntimeWrapper;

	processInfoWrapper: SentryProcessInfoSource;

	random: SentryRandomProtocol;

	rateLimits: SentryRateLimits;

	reachability: SentryReachability;

	scopePersistentStore: SentryScopePersistentStore;

	screenshotSource: SentryScreenshotSource;

	startOptions: SentryOptions;

	swizzleWrapper: SentrySwizzleWrapper;

	sysctlWrapper: SentrySysctl;

	threadInspector: SentryThreadInspector;

	threadWrapper: SentryThreadWrapper;

	threadsafeApplication: SentryThreadsafeApplication;

	timerFactory: SentryNSTimerFactory;

	uiDeviceWrapper: SentryUIDeviceWrapper;

	uiViewControllerPerformanceTracker: SentryUIViewControllerPerformanceTracker;

	viewHierarchyProvider: SentryViewHierarchyProvider;

	watchdogTerminationAttributesProcessor: SentryWatchdogTerminationAttributesProcessor;

	application(): SentryApplication;

	getANRTracker(timeout: number): SentryANRTracker;

	getWatchdogTerminationScopeObserverWithOptions(options: SentryOptions): SentryScopeObserver;
}

declare class SentryDiscardedEvent extends NSObject implements SentrySerializable {

	static alloc(): SentryDiscardedEvent; // inherited from NSObject

	static new(): SentryDiscardedEvent; // inherited from NSObject

	readonly quantity: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { reason: string; category: string; quantity: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithReasonCategoryQuantity(reason: string, category: string, quantity: number): this;

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

declare class SentryDispatchFactory extends NSObject {

	static alloc(): SentryDispatchFactory; // inherited from NSObject

	static new(): SentryDispatchFactory; // inherited from NSObject

	createUtilityQueueRelativePriority(name: string | interop.Pointer | interop.Reference<any>, relativePriority: number): SentryDispatchQueueWrapper;

	queueWithNameAttributes(name: string | interop.Pointer | interop.Reference<any>, attributes: NSObject & OS_dispatch_queue_attr): SentryDispatchQueueWrapper;

	sourceWithIntervalLeewayQueueNameAttributesEventHandler(interval: number, leeway: number, queueName: string | interop.Pointer | interop.Reference<any>, attributes: NSObject & OS_dispatch_queue_attr, eventHandler: () => void): SentryDispatchSourceWrapper;
}

declare class SentryDispatchQueueWrapper extends NSObject {

	static alloc(): SentryDispatchQueueWrapper; // inherited from NSObject

	static new(): SentryDispatchQueueWrapper; // inherited from NSObject

	readonly queue: NSObject & OS_dispatch_queue;

	readonly shouldCreateDispatchBlock: boolean;

	readonly shouldDispatchCancel: boolean;

	constructor(o: { highPriority: string | interop.Pointer | interop.Reference<any>; });

	constructor(o: { name: string | interop.Pointer | interop.Reference<any>; });

	constructor(o: { name: string | interop.Pointer | interop.Reference<any>; attributes: NSObject & OS_dispatch_queue_attr; });

	constructor(o: { name: string | interop.Pointer | interop.Reference<any>; relativePriority: number; });

	dispatchAfterBlock(interval: number, block: () => void): void;

	dispatchAsyncOnMainQueueIfNotMainThread(block: () => void): void;

	dispatchAsyncWithBlock(block: () => void): void;

	dispatchOnceBlock(predicate: interop.Pointer | interop.Reference<number>, block: () => void): void;

	dispatchSyncOnMainQueue(block: () => void): void;

	dispatchSyncOnMainQueueTimeout(block: () => void, timeout: number): void;

	initWithHighPriority(name: string | interop.Pointer | interop.Reference<any>): this;

	initWithName(name: string | interop.Pointer | interop.Reference<any>): this;

	initWithNameAttributes(name: string | interop.Pointer | interop.Reference<any>, attributes: NSObject & OS_dispatch_queue_attr): this;

	initWithNameRelativePriority(name: string | interop.Pointer | interop.Reference<any>, relativePriority: number): this;
}

declare class SentryDispatchSourceWrapper extends NSObject {

	static alloc(): SentryDispatchSourceWrapper; // inherited from NSObject

	static new(): SentryDispatchSourceWrapper; // inherited from NSObject

	constructor(o: { interval: number; leeway: number; queue: SentryDispatchQueueWrapper; eventHandler: () => void; });

	cancel(): void;

	initWithIntervalLeewayQueueEventHandler(interval: number, leeway: number, queueWrapper: SentryDispatchQueueWrapper, eventHandler: () => void): this;
}

declare class SentryDisplayLinkWrapper extends NSObject {

	static alloc(): SentryDisplayLinkWrapper; // inherited from NSObject

	static new(): SentryDisplayLinkWrapper; // inherited from NSObject

	readonly targetTimestamp: number;

	readonly timestamp: number;

	invalidate(): void;

	linkWithTargetSelector(target: any, sel: string): void;
}

declare class SentryDsn extends NSObject {

	static alloc(): SentryDsn; // inherited from NSObject

	static new(): SentryDsn; // inherited from NSObject

	readonly orgId: string;

	readonly url: NSURL;

	constructor(o: { string: string; });

	getEnvelopeEndpoint(): NSURL;

	getHash(): string;

	initWithStringDidFailWithError(dsnString: string): this;
}

declare class SentryEnabledFeaturesBuilder extends NSObject {

	static alloc(): SentryEnabledFeaturesBuilder; // inherited from NSObject

	static getEnabledFeaturesWithOptions(options: SentryOptions): NSArray<string>;

	static new(): SentryEnabledFeaturesBuilder; // inherited from NSObject
}

declare class SentryEnvelope extends NSObject {

	static alloc(): SentryEnvelope; // inherited from NSObject

	static new(): SentryEnvelope; // inherited from NSObject

	readonly header: SentryEnvelopeHeader;

	readonly items: NSArray<SentryEnvelopeItem>;

	constructor(o: { header: SentryEnvelopeHeader; items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]; });

	constructor(o: { header: SentryEnvelopeHeader; singleItem: SentryEnvelopeItem; });

	constructor(o: { id: SentryId; items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]; });

	constructor(o: { id: SentryId; singleItem: SentryEnvelopeItem; });

	initWithHeaderItems(header: SentryEnvelopeHeader, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

	initWithHeaderSingleItem(header: SentryEnvelopeHeader, item: SentryEnvelopeItem): this;

	initWithIdItems(id: SentryId, items: NSArray<SentryEnvelopeItem> | SentryEnvelopeItem[]): this;

	initWithIdSingleItem(id: SentryId, item: SentryEnvelopeItem): this;
}

declare class SentryEnvelopeHeader extends NSObject {

	static alloc(): SentryEnvelopeHeader; // inherited from NSObject

	static empty(): SentryEnvelopeHeader;

	static new(): SentryEnvelopeHeader; // inherited from NSObject

	readonly eventId: SentryId;

	sentAt: Date;

	readonly traceContext: SentryTraceContext;

	constructor(o: { id: SentryId; sdkInfo: NSDictionary<any, any>; });

	constructor(o: { id: SentryId; traceContext: SentryTraceContext; });

	initWithIdSdkInfo(eventId: SentryId, sdkInfo: NSDictionary<any, any>): this;

	initWithIdTraceContext(eventId: SentryId, traceContext: SentryTraceContext): this;
}

declare class SentryEnvelopeItem extends NSObject {

	static alloc(): SentryEnvelopeItem; // inherited from NSObject

	static new(): SentryEnvelopeItem; // inherited from NSObject

	readonly data: NSData;

	constructor(o: { attachment: SentryAttachment; maxAttachmentSize: number; });

	constructor(o: { clientReport: SentryClientReport; });

	constructor(o: { event: SentryEvent; });

	constructor(o: { replayEvent: SentryReplayEvent; replayRecording: SentryReplayRecording; video: NSURL; });

	constructor(o: { session: SentrySession; });

	constructor(o: { type: string; data: NSData; addPlatform: boolean; });

	constructor(o: { type: string; data: NSData; contentType: string; itemCount: number; });

	initWithAttachmentMaxAttachmentSize(attachment: SentryAttachment, maxAttachmentSize: number): this;

	initWithClientReport(clientReport: SentryClientReport): this;

	initWithEvent(event: SentryEvent): this;

	initWithReplayEventReplayRecordingVideo(replayEvent: SentryReplayEvent, replayRecording: SentryReplayRecording, video: NSURL): this;

	initWithSession(session: SentrySession): this;

	initWithTypeDataAddPlatform(type: string, data: NSData, addPlatform: boolean): this;

	initWithTypeDataContentTypeItemCount(type: string, data: NSData, contentType: string, itemCount: number): this;

	type(): string;
}

declare class SentryEnvelopeItemTypes extends NSObject {

	static alloc(): SentryEnvelopeItemTypes; // inherited from NSObject

	static new(): SentryEnvelopeItemTypes; // inherited from NSObject

	static readonly attachment: string;

	static readonly clientReport: string;

	static readonly event: string;

	static readonly feedback: string;

	static readonly log: string;

	static readonly profile: string;

	static readonly profileChunk: string;

	static readonly replayVideo: string;

	static readonly session: string;

	static readonly statsd: string;

	static readonly traceMetric: string;

	static readonly transaction: string;
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

	kSentryErrorFileIO = 108,

	kSentryErrorKernel = 109
}

declare var SentryErrorDomain: string;

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

	request: SentryRequest;

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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { error: NSError; });

	constructor(o: { level: SentryLevel; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithError(error: NSError): this;

	initWithLevel(level: SentryLevel): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isMetricKitEvent(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSDictionary<string, any>;
}

interface SentryEventContextEnricher {

	enrichWithAppState(context: NSDictionary<string, any>): NSDictionary<string, any>;
}
declare var SentryEventContextEnricher: {

	prototype: SentryEventContextEnricher;
};

declare class SentryEventDecoder extends NSObject {

	static alloc(): SentryEventDecoder; // inherited from NSObject

	static decodeEventWithJsonData(jsonData: NSData): SentryEvent;

	static new(): SentryEventDecoder; // inherited from NSObject
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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { value: string; type: string; });

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

declare class SentryExperimentalOptions extends NSObject {

	static alloc(): SentryExperimentalOptions; // inherited from NSObject

	static new(): SentryExperimentalOptions; // inherited from NSObject

	enableReplayNetworkDetailsCapturing: boolean;

	enableStandaloneAppStartTracing: boolean;

	enableUnhandledCPPExceptionsV2: boolean;

	enableWatchdogTerminationsV2: boolean;

	validateOptions(options: NSDictionary<string, any>): void;
}

declare const enum SentryExtensionType {

	Widget = 0,

	Intent = 1,

	Action = 2,

	Share = 3,

	NotificationService = 4
}

declare class SentryExtraContextProvider extends NSObject {

	static alloc(): SentryExtraContextProvider; // inherited from NSObject

	static new(): SentryExtraContextProvider; // inherited from NSObject

	getExtraContext(): NSDictionary<string, any>;
}

declare class SentryExtraPackages extends NSObject {

	static addPackageNameVersion(name: string, version: string): void;

	static alloc(): SentryExtraPackages; // inherited from NSObject

	static new(): SentryExtraPackages; // inherited from NSObject
}

declare class SentryFeatureFlagBufferWrapper extends NSObject {

	static alloc(): SentryFeatureFlagBufferWrapper; // inherited from NSObject

	static new(): SentryFeatureFlagBufferWrapper; // inherited from NSObject

	static scopeBuffer(): SentryFeatureFlagBufferWrapper;

	static spanBuffer(): SentryFeatureFlagBufferWrapper;

	copyBuffer(): SentryFeatureFlagBufferWrapper;

	removeAll(): void;

	serializeForContext(): NSDictionary<string, any>;

	serializeForSpanData(): NSDictionary<string, any>;
}

declare class SentryFeedback extends NSObject implements SentrySerializable {

	static alloc(): SentryFeedback; // inherited from NSObject

	static new(): SentryFeedback; // inherited from NSObject

	readonly eventId: SentryId;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { message: string; name: string; email: string; source: SentryFeedbackSource; associatedEventId: SentryId; attachments: NSArray<SentryAttachment> | SentryAttachment[]; });

	attachmentsForEnvelope(): NSArray<SentryAttachment>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithMessageNameEmailSourceAssociatedEventIdAttachments(message: string, name: string, email: string, source: SentryFeedbackSource, associatedEventId: SentryId, attachments: NSArray<SentryAttachment> | SentryAttachment[]): this;

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

declare class SentryFeedbackAPI extends NSObject {

	static alloc(): SentryFeedbackAPI; // inherited from NSObject

	static new(): SentryFeedbackAPI; // inherited from NSObject

	hideWidget(): void;

	showWidget(): void;
}

declare const enum SentryFeedbackSource {

	Widget = 0,

	Custom = 1
}

declare class SentryFileContents extends NSObject {

	static alloc(): SentryFileContents; // inherited from NSObject

	static new(): SentryFileContents; // inherited from NSObject

	readonly contents: NSData;

	readonly path: string;

	constructor(o: { path: string; contents: NSData; });

	initWithPathContents(path: string, contents: NSData): this;
}

declare class SentryFileIOTracker extends NSObject {

	static alloc(): SentryFileIOTracker; // inherited from NSObject

	static new(): SentryFileIOTracker; // inherited from NSObject

	constructor(o: { threadInspector: SentryThreadInspector; processInfoWrapper: SentryProcessInfoSource; });

	disable(): void;

	enable(): void;

	initWithThreadInspectorProcessInfoWrapper(threadInspector: SentryThreadInspector, processInfoWrapper: SentryProcessInfoSource): this;

	measureNSDataFromFileOptionsOriginErrorMethod(path: string, readOptionsMask: NSDataReadingOptions, origin: string, error: interop.Pointer | interop.Reference<NSError>, method: (p1: string, p2: NSDataReadingOptions, p3: interop.Pointer | interop.Reference<NSError>) => NSData): NSData;

	measureNSDataFromFileOriginMethod(path: string, origin: string, method: (p1: string) => NSData): NSData;

	measureNSDataFromURLOptionsOriginErrorMethod(url: NSURL, readOptionsMask: NSDataReadingOptions, origin: string, error: interop.Pointer | interop.Reference<NSError>, method: (p1: NSURL, p2: NSDataReadingOptions, p3: interop.Pointer | interop.Reference<NSError>) => NSData): NSData;

	measureNSDataWriteToFileAtomicallyOriginMethod(data: NSData, path: string, atomically: boolean, origin: string, method: (p1: string, p2: boolean) => boolean): boolean;

	measureNSDataWriteToFileOptionsOriginErrorMethod(data: NSData, path: string, writeOptionsMask: NSDataWritingOptions, origin: string, error: interop.Pointer | interop.Reference<NSError>, method: (p1: string, p2: NSDataWritingOptions, p3: interop.Pointer | interop.Reference<NSError>) => boolean): boolean;

	measureNSFileManagerCreateFileAtPathDataAttributesOriginMethod(path: string, data: NSData, attributes: NSDictionary<string, any>, origin: string, method: (p1: string, p2: NSData, p3: NSDictionary<string, any>) => boolean): boolean;
}

declare class SentryFileManager extends NSObject implements SentryFileManagerProtocol {

	static alloc(): SentryFileManager; // inherited from NSObject

	static createDirectoryAtPathError(path: string): boolean;

	static new(): SentryFileManager; // inherited from NSObject

	readonly basePath: string;

	readonly breadcrumbsFilePathOne: string;

	readonly breadcrumbsFilePathTwo: string;

	envelopeDeletedCallback: (p1: SentryEnvelopeItem, p2: number) => void;

	readonly previousBreadcrumbsFilePathOne: string;

	readonly previousBreadcrumbsFilePathTwo: string;

	readonly sentryPath: string;

	constructor(o: { options: SentryOptions; dateProvider: SentryCurrentDateProvider; dispatchQueueWrapper: SentryDispatchQueueWrapper; });

	allFilesInFolder(path: string): NSArray<string>;

	appHangEventExists(): boolean;

	deleteAbnormalSession(): void;

	deleteAllEnvelopes(): void;

	deleteAllFolders(): void;

	deleteAppHangEvent(): void;

	deleteAppState(): void;

	deleteCrashedSession(): void;

	deleteCurrentSession(): void;

	deleteOldEnvelopeItems(): void;

	deleteTimestampLastInForeground(): void;

	deleteTimezoneOffset(): void;

	getAllEnvelopes(): NSArray<SentryFileContents>;

	getEnvelopesPath(filePath: string): string;

	getOldestEnvelope(): SentryFileContents;

	getSentryPathAsURL(): NSURL;

	initWithOptionsDateProviderDispatchQueueWrapperError(options: SentryOptions, dateProvider: SentryCurrentDateProvider, dispatchQueueWrapper: SentryDispatchQueueWrapper): this;

	isDirectory(path: string): boolean;

	moveAppStateToPreviousAppState(): void;

	moveBreadcrumbsToPreviousBreadcrumbs(): void;

	moveStateToPreviousState(stateFilePath: string, previousStateFilePath: string): void;

	readAbnormalSession(): SentrySession;

	readAppHangEvent(): SentryEvent;

	readAppState(): SentryAppState;

	readCrashedSession(): SentrySession;

	readCurrentSession(): SentrySession;

	readDataFromPathError(path: string): NSData;

	readPreviousAppState(): SentryAppState;

	readPreviousBreadcrumbs(): NSArray<any>;

	readTimestampLastInForeground(): Date;

	readTimezoneOffset(): number;

	removeFileAtPath(path: string): void;

	storeAbnormalSession(session: SentrySession): void;

	storeAppHangEvent(event: SentryEvent): void;

	storeAppState(appState: SentryAppState): void;

	storeCrashedSession(session: SentrySession): void;

	storeCurrentSession(session: SentrySession): void;

	storeEnvelope(envelope: SentryEnvelope): string;

	storeTimestampLastInForeground(timestamp: Date): void;

	storeTimezoneOffset(offset: number): void;

	writeDataToPath(data: NSData, path: string): boolean;
}

interface SentryFileManagerProtocol {

	getSentryPathAsURL(): NSURL;

	moveStateToPreviousState(stateFilePath: string, previousStateFilePath: string): void;

	readDataFromPathError(path: string): NSData;

	removeFileAtPath(path: string): void;

	writeDataToPath(data: NSData, path: string): boolean;
}
declare var SentryFileManagerProtocol: {

	prototype: SentryFileManagerProtocol;
};

declare class SentryFormElementOutlineStyle extends NSObject {

	static alloc(): SentryFormElementOutlineStyle; // inherited from NSObject

	static new(): SentryFormElementOutlineStyle; // inherited from NSObject

	constructor(o: { color: UIColor; cornerRadius: number; outlineWidth: number; });

	initWithColorCornerRadiusOutlineWidth(color: UIColor, cornerRadius: number, outlineWidth: number): this;
}

declare class SentryFrame extends NSObject implements SentrySerializable {

	static alloc(): SentryFrame; // inherited from NSObject

	static new(): SentryFrame; // inherited from NSObject

	columnNumber: number;

	contextLine: string;

	fileName: string;

	function: string;

	imageAddress: string;

	inApp: number;

	instructionAddress: string;

	lineNumber: number;

	module: string;

	package: string;

	parentIndex: number;

	platform: string;

	postContext: NSArray<string>;

	preContext: NSArray<string>;

	sampleCount: number;

	stackStart: number;

	symbolAddress: string;

	vars: NSDictionary<string, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare class SentryFrameRemover extends NSObject {

	static alloc(): SentryFrameRemover; // inherited from NSObject

	static new(): SentryFrameRemover; // inherited from NSObject

	static removeNonSdkFrames(frames: NSArray<SentryFrame> | SentryFrame[]): NSArray<SentryFrame>;
}

declare class SentryFramesDelayResultSPI extends NSObject {

	static alloc(): SentryFramesDelayResultSPI; // inherited from NSObject

	static new(): SentryFramesDelayResultSPI; // inherited from NSObject

	readonly delayDuration: number;

	readonly framesContributingToDelayCount: number;
}

declare class SentryFramesTracker extends NSObject {

	static alloc(): SentryFramesTracker; // inherited from NSObject

	static new(): SentryFramesTracker; // inherited from NSObject

	static shouldAddSlowFrozenFramesDataWithTotalFramesSlowFramesFrozenFrames(totalFrames: number, slowFrames: number, frozenFrames: number): boolean;

	readonly isRunning: boolean;

	addListener(listener: SentryFramesTrackerListener): void;

	currentFrames(): SentryScreenFrames;

	getFramesDelaySPIEndSystemTimestamp(startSystemTimestamp: number, endSystemTimestamp: number): SentryFramesDelayResultSPI;

	removeListener(listener: SentryFramesTrackerListener): void;

	resetProfilingTimestamps(): void;

	start(): void;

	stop(): void;
}

interface SentryFramesTrackerListener extends NSObjectProtocol {

	framesTrackerHasNewFrame(newFrameDate: Date): void;
}
declare var SentryFramesTrackerListener: {

	prototype: SentryFramesTrackerListener;
};

declare class SentryGeo extends NSObject implements NSCopying, SentrySerializable {

	static alloc(): SentryGeo; // inherited from NSObject

	static new(): SentryGeo; // inherited from NSObject

	city: string;

	countryCode: string;

	region: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	hash(): number;

	isEqual(object: any): boolean;

	isEqualToGeo(geo: SentryGeo): boolean;

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

	addEventProcessor(newProcessor: (p1: SentryEvent) => SentryEvent): void;

	reportAll(event: SentryEvent): SentryEvent;
}

declare class SentryHangTrackerIntegrationObjC extends NSObject {

	static alloc(): SentryHangTrackerIntegrationObjC; // inherited from NSObject

	static new(): SentryHangTrackerIntegrationObjC; // inherited from NSObject

	pauseAppHangTracking(): void;

	resumeAppHangTracking(): void;

	uninstall(): void;
}

declare class SentryHttpDateParser extends NSObject {

	static alloc(): SentryHttpDateParser; // inherited from NSObject

	static new(): SentryHttpDateParser; // inherited from NSObject

	dateFromString(string: string): Date;
}

declare const enum SentryHttpStatusCode {

	Ok = 200,

	Created = 201,

	BadRequest = 400,

	PreconditionFailed = 412,

	ContentTooLarge = 413,

	TooManyRequests = 429,

	InternalServerError = 500
}

declare class SentryHttpStatusCodeRange extends NSObject {

	static alloc(): SentryHttpStatusCodeRange; // inherited from NSObject

	static new(): SentryHttpStatusCodeRange; // inherited from NSObject

	readonly max: number;

	readonly min: number;

	constructor(o: { min: number; max: number; });

	constructor(o: { statusCode: number; });

	initWithMinMax(min: number, max: number): this;

	initWithStatusCode(statusCode: number): this;
}

declare class SentryHttpTransportHttpStatusCodeLogger extends NSObject {

	static alloc(): SentryHttpTransportHttpStatusCodeLogger; // inherited from NSObject

	static logHttpResponseErrorWithStatusCodeEnvelopeRequest(statusCode: number, envelope: SentryEnvelope, request: NSURLRequest): void;

	static new(): SentryHttpTransportHttpStatusCodeLogger; // inherited from NSObject
}

declare class SentryHub extends NSObject {

	static alloc(): SentryHub; // inherited from NSObject

	static new(): SentryHub; // inherited from NSObject

	readonly logger: SentryLogger;

	readonly scope: SentryScope;

	constructor(o: { client: SentryClient; andScope: SentryScope; });

	addBreadcrumb(crumb: SentryBreadcrumb): void;

	bindClient(client: SentryClient): void;

	captureError(error: NSError): SentryId;

	captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

	captureEvent(event: SentryEvent): SentryId;

	captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

	captureException(exception: NSException): SentryId;

	captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

	captureFeedback(feedback: SentryFeedback): void;

	captureMessage(message: string): SentryId;

	captureMessageWithScope(message: string, scope: SentryScope): SentryId;

	close(): void;

	configureScope(callback: (p1: SentryScope) => void): void;

	endSession(): void;

	endSessionWithTimestamp(timestamp: Date): void;

	flush(timeout: number): void;

	getClient(): SentryClient;

	hasIntegration(integrationName: string): boolean;

	initWithClientAndScope(client: SentryClient, scope: SentryScope): this;

	isIntegrationInstalled(integrationClass: typeof NSObject): boolean;

	reportFullyDisplayed(): void;

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

	constructor(o: { UUIDString: string; });

	constructor(o: { uuid: NSUUID; });

	initWithUUIDString(uuidString: string): this;

	initWithUuid(uuid: NSUUID): this;
}

declare class SentryInAppLogic extends NSObject {

	static alloc(): SentryInAppLogic; // inherited from NSObject

	static isImageNameInAppInAppInclude(imageName: string, inAppInclude: string): boolean;

	static new(): SentryInAppLogic; // inherited from NSObject

	readonly inAppIncludes: NSArray<string>;

	constructor(o: { inAppIncludes: NSArray<string> | string[]; });

	initWithInAppIncludes(inAppIncludes: NSArray<string> | string[]): this;

	isClassInApp(targetClass: typeof NSObject): boolean;

	isInApp(imagePath: string): boolean;
}

interface SentryInitialDisplayReporting {

	reportInitialDisplay(): void;
}
declare var SentryInitialDisplayReporting: {

	prototype: SentryInitialDisplayReporting;
};

declare class SentryInstallation extends NSObject {

	static alloc(): SentryInstallation; // inherited from NSObject

	static cacheIDAsyncWithCacheDirectoryPath(cacheDirectoryPath: string): void;

	static cachedIdWithCacheDirectoryPath(cacheDirectoryPath: string): string;

	static idWithCacheDirectoryPath(cacheDirectoryPath: string): string;

	static idWithCacheDirectoryPathNonCached(cacheDirectoryPath: string): string;

	static new(): SentryInstallation; // inherited from NSObject
}

interface SentryIntegrationProtocol extends NSObjectProtocol {

	uninstall(): void;
}
declare var SentryIntegrationProtocol: {

	prototype: SentryIntegrationProtocol;
};

declare const enum SentryLastRunStatus {

	Unknown = 0,

	DidNotCrash = 1,

	DidCrash = 2
}

declare const enum SentryLevel {

	kSentryLevelNone = 0,

	kSentryLevelDebug = 1,

	kSentryLevelInfo = 2,

	kSentryLevelWarning = 3,

	kSentryLevelError = 4,

	kSentryLevelFatal = 5
}

declare class SentryLevelHelper extends NSObject {

	static alloc(): SentryLevelHelper; // inherited from NSObject

	static levelForName(name: string): SentryLevel;

	static nameForLevel(level: SentryLevel): string;

	static new(): SentryLevelHelper; // inherited from NSObject
}

declare class SentryLocale extends NSObject {

	static alloc(): SentryLocale; // inherited from NSObject

	static isRightToLeftLanguage(): boolean;

	static new(): SentryLocale; // inherited from NSObject

	static timeIs24HourFormat(): boolean;
}

declare class SentryLog extends NSObject {

	static alloc(): SentryLog; // inherited from NSObject

	static new(): SentryLog; // inherited from NSObject

	attributes: NSDictionary<string, SentryAttribute>;

	body: string;

	level: SentryLogLevel;

	severityNumber: number;

	spanId: SentrySpanId;

	timestamp: Date;

	traceId: SentryId;

	constructor(o: { level: SentryLogLevel; body: string; });

	constructor(o: { level: SentryLogLevel; body: string; attributes: NSDictionary<string, SentryAttribute>; });

	initWithLevelBody(level: SentryLogLevel, body: string): this;

	initWithLevelBodyAttributes(level: SentryLogLevel, body: string, attributes: NSDictionary<string, SentryAttribute>): this;

	setAttributeForKey(attribute: SentryAttribute, key: string): void;
}

declare const enum SentryLogLevel {

	Trace = 0,

	Debug = 1,

	Info = 2,

	Warn = 3,

	Error = 4,

	Fatal = 5
}

interface SentryLogScopeApplier {

	applyScopeToLog(scope: SentryScope, log: SentryLog): SentryLog;
}
declare var SentryLogScopeApplier: {

	prototype: SentryLogScopeApplier;
};

declare class SentryLogger extends NSObject {

	static alloc(): SentryLogger; // inherited from NSObject

	static new(): SentryLogger; // inherited from NSObject

	constructor(o: { delegate: SentryLoggerDelegate; dateProvider: SentryCurrentDateProvider; });

	debug(body: string): void;

	debugAttributes(body: string, attributes: NSDictionary<string, any>): void;

	error(body: string): void;

	errorAttributes(body: string, attributes: NSDictionary<string, any>): void;

	fatal(body: string): void;

	fatalAttributes(body: string, attributes: NSDictionary<string, any>): void;

	info(body: string): void;

	infoAttributes(body: string, attributes: NSDictionary<string, any>): void;

	initWithDelegateDateProvider(delegate: SentryLoggerDelegate, dateProvider: SentryCurrentDateProvider): this;

	trace(body: string): void;

	traceAttributes(body: string, attributes: NSDictionary<string, any>): void;

	warn(body: string): void;

	warnAttributes(body: string, attributes: NSDictionary<string, any>): void;
}

interface SentryLoggerDelegate {

	captureLog(log: SentryLog): void;
}
declare var SentryLoggerDelegate: {

	prototype: SentryLoggerDelegate;
};

declare class SentryMaskingPreviewView extends UIView {

	static alloc(): SentryMaskingPreviewView; // inherited from NSObject

	static appearance(): SentryMaskingPreviewView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): SentryMaskingPreviewView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): SentryMaskingPreviewView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SentryMaskingPreviewView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): SentryMaskingPreviewView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): SentryMaskingPreviewView; // inherited from UIAppearance

	static new(): SentryMaskingPreviewView; // inherited from NSObject

	opacity: number;

	constructor(o: { redactOptions: SentryRedactOptions; });

	initWithRedactOptions(redactOptions: SentryRedactOptions): this;
}

declare class SentryMeasurementUnit extends NSObject implements NSCopying {

	static alloc(): SentryMeasurementUnit; // inherited from NSObject

	static new(): SentryMeasurementUnit; // inherited from NSObject

	readonly unit: string;

	static readonly none: SentryMeasurementUnit;

	constructor(o: { unit: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithUnit(unit: string): this;
}

declare class SentryMeasurementUnitDuration extends SentryMeasurementUnit {

	static alloc(): SentryMeasurementUnitDuration; // inherited from NSObject

	static new(): SentryMeasurementUnitDuration; // inherited from NSObject

	static readonly day: SentryMeasurementUnitDuration;

	static readonly hour: SentryMeasurementUnitDuration;

	static readonly microsecond: SentryMeasurementUnitDuration;

	static readonly millisecond: SentryMeasurementUnitDuration;

	static readonly minute: SentryMeasurementUnitDuration;

	static readonly nanosecond: SentryMeasurementUnitDuration;

	static readonly second: SentryMeasurementUnitDuration;

	static readonly week: SentryMeasurementUnitDuration;
}

declare class SentryMeasurementUnitFraction extends SentryMeasurementUnit {

	static alloc(): SentryMeasurementUnitFraction; // inherited from NSObject

	static new(): SentryMeasurementUnitFraction; // inherited from NSObject

	static readonly percent: SentryMeasurementUnitFraction;

	static readonly ratio: SentryMeasurementUnitFraction;
}

declare class SentryMeasurementUnitInformation extends SentryMeasurementUnit {

	static alloc(): SentryMeasurementUnitInformation; // inherited from NSObject

	static new(): SentryMeasurementUnitInformation; // inherited from NSObject

	static readonly bit: SentryMeasurementUnitInformation;

	static readonly byte: SentryMeasurementUnitInformation;

	static readonly exabyte: SentryMeasurementUnitInformation;

	static readonly exbibyte: SentryMeasurementUnitInformation;

	static readonly gibibyte: SentryMeasurementUnitInformation;

	static readonly gigabyte: SentryMeasurementUnitInformation;

	static readonly kibibyte: SentryMeasurementUnitInformation;

	static readonly kilobyte: SentryMeasurementUnitInformation;

	static readonly mebibyte: SentryMeasurementUnitInformation;

	static readonly megabyte: SentryMeasurementUnitInformation;

	static readonly pebibyte: SentryMeasurementUnitInformation;

	static readonly petabyte: SentryMeasurementUnitInformation;

	static readonly tebibyte: SentryMeasurementUnitInformation;

	static readonly terabyte: SentryMeasurementUnitInformation;
}

declare class SentryMeasurementValue extends NSObject {

	static alloc(): SentryMeasurementValue; // inherited from NSObject

	static new(): SentryMeasurementValue; // inherited from NSObject

	readonly unit: SentryMeasurementUnit;

	readonly value: number;

	constructor(o: { value: number; });

	constructor(o: { value: number; unit: SentryMeasurementUnit; });

	initWithValue(value: number): this;

	initWithValueUnit(value: number, unit: SentryMeasurementUnit): this;

	serialize(): NSDictionary<string, any>;
}

declare class SentryMechanism extends NSObject implements SentrySerializable {

	static alloc(): SentryMechanism; // inherited from NSObject

	static new(): SentryMechanism; // inherited from NSObject

	data: NSDictionary<string, any>;

	desc: string;

	handled: number;

	helpLink: string;

	meta: SentryMechanismContext;

	synthetic: number;

	type: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { type: string; });

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

declare class SentryMechanismContext extends NSObject implements SentrySerializable {

	static alloc(): SentryMechanismContext; // inherited from NSObject

	static new(): SentryMechanismContext; // inherited from NSObject

	error: SentryNSError;

	machException: NSDictionary<string, any>;

	signal: NSDictionary<string, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { formatted: string; });

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

declare class SentryMigrateSessionInit extends NSObject {

	static alloc(): SentryMigrateSessionInit; // inherited from NSObject

	static migrateSessionInitEnvelopesDirPathEnvelopeFilePaths(envelope: SentryEnvelope, envelopesDirPath: string, envelopeFilePaths: NSArray<string> | string[]): boolean;

	static new(): SentryMigrateSessionInit; // inherited from NSObject
}

declare class SentryMobileProvisionParser extends NSObject {

	static alloc(): SentryMobileProvisionParser; // inherited from NSObject

	static new(): SentryMobileProvisionParser; // inherited from NSObject

	readonly mobileProvisionProfileAllowsDebugging: boolean;

	readonly mobileProvisionProfileProvisionsAllDevices: boolean;

	hasEmbeddedMobileProvisionProfile(): boolean;
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

	readonly  // inherited from NSObjectProtocol

	constructor(o: { domain: string; code: number; });

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

interface SentryNSNotificationCenterWrapper {

	addObserverForNameObjectQueueUsingBlock(name: string, obj: any, queue: NSOperationQueue, block: (p1: NSNotification) => void): NSObjectProtocol;

	addObserverSelectorNameObject(observer: any, aSelector: string, aName: string, anObject: any): void;

	postNotification(notification: NSNotification): void;

	removeObserverNameObject(observer: any, aName: string, anObject: any): void;
}
declare var SentryNSNotificationCenterWrapper: {

	prototype: SentryNSNotificationCenterWrapper;
};

declare class SentryNSTimerFactory extends NSObject {

	static alloc(): SentryNSTimerFactory; // inherited from NSObject

	static new(): SentryNSTimerFactory; // inherited from NSObject

	scheduledTimerWithTimeIntervalRepeatsBlock(interval: number, repeats: boolean, block: (p1: NSTimer) => void): NSTimer;

	scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(ti: number, aTarget: any, aSelector: string, userInfo: any, yesOrNo: boolean): NSTimer;
}

declare class SentryNSURLRequestBuilder extends NSObject {

	static alloc(): SentryNSURLRequestBuilder; // inherited from NSObject

	static new(): SentryNSURLRequestBuilder; // inherited from NSObject

	createEnvelopeRequestDsnError(envelope: SentryEnvelope, dsn: SentryDsn): NSURLRequest;

	createEnvelopeRequestUrlError(envelope: SentryEnvelope, url: NSURL): NSURLRequest;
}

interface SentryObjCRuntimeWrapper {

	class_getImageName(cls: typeof NSObject): interop.Pointer | interop.Reference<any>;

	copyClassNamesForImageAmount(image: string | interop.Pointer | interop.Reference<any>, outCount: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var SentryObjCRuntimeWrapper: {

	prototype: SentryObjCRuntimeWrapper;
};

interface SentryObjCTelemetryProcessor {

	addLog(log: SentryLog): void;

	forwardTelemetryData(): number;
}
declare var SentryObjCTelemetryProcessor: {

	prototype: SentryObjCTelemetryProcessor;
};

declare class SentryOnDemandReplay extends NSObject implements SentryReplayVideoMaker {

	static alloc(): SentryOnDemandReplay; // inherited from NSObject

	static new(): SentryOnDemandReplay; // inherited from NSObject

	bitRate: number;

	cacheMaxSize: number;

	frameRate: number;

	videoScale: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { contentFrom: string; processingQueue: SentryDispatchQueueWrapper; assetWorkerQueue: SentryDispatchQueueWrapper; });

	constructor(o: { outputPath: string; processingQueue: SentryDispatchQueueWrapper; assetWorkerQueue: SentryDispatchQueueWrapper; });

	addFrameAsyncWithTimestampMaskedViewImageForScreen(timestamp: Date, maskedViewImage: UIImage, forScreen: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createVideoInBackgroundWithBeginningEndCompletion(beginning: Date, end: Date, completion: (p1: NSArray<SentryVideoInfo>) => void): void;

	createVideoWithBeginningEnd(beginning: Date, end: Date): NSArray<SentryVideoInfo>;

	initWithContentFromProcessingQueueAssetWorkerQueue(outputPath: string, processingQueue: SentryDispatchQueueWrapper, assetWorkerQueue: SentryDispatchQueueWrapper): this;

	initWithOutputPathProcessingQueueAssetWorkerQueue(outputPath: string, processingQueue: SentryDispatchQueueWrapper, assetWorkerQueue: SentryDispatchQueueWrapper): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	releaseFramesUntil(date: Date): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class SentryOptions extends NSObject {

	static alloc(): SentryOptions; // inherited from NSObject

	static isValidSampleRate(rate: number): boolean;

	static new(): SentryOptions; // inherited from NSObject

	appHangTimeoutInterval: number;

	attachAllThreads: boolean;

	attachScreenshot: boolean;

	attachStacktrace: boolean;

	attachViewHierarchy: boolean;

	beforeBreadcrumb: (p1: SentryBreadcrumb) => SentryBreadcrumb;

	beforeCaptureScreenshot: (p1: SentryEvent) => boolean;

	beforeCaptureViewHierarchy: (p1: SentryEvent) => boolean;

	beforeSend: (p1: SentryEvent) => SentryEvent;

	beforeSendLog: (p1: SentryLog) => SentryLog;

	beforeSendSpan: (p1: SentrySpan) => SentrySpan;

	cacheDirectoryPath: string;

	configureProfiling: (p1: SentryProfileOptions) => void;

	configureUserFeedback: (p1: SentryUserFeedbackConfiguration) => void;

	debug: boolean;

	diagnosticLevel: SentryLevel;

	dist: string;

	dsn: string;

	readonly effectiveOrgId: string;

	enableAppHangTracking: boolean;

	enableAutoBreadcrumbTracking: boolean;

	enableAutoPerformanceTracing: boolean;

	enableAutoSessionTracking: boolean;

	enableCaptureFailedRequests: boolean;

	enableCoreDataTracing: boolean;

	enableCrashHandler: boolean;

	enableDataSwizzling: boolean;

	enableFileIOTracing: boolean;

	enableFileManagerSwizzling: boolean;

	enableGraphQLOperationTracking: boolean;

	enableLogs: boolean;

	enableMetricKit: boolean;

	enableMetricKitRawPayload: boolean;

	enableMetrics: boolean;

	enableNetworkBreadcrumbs: boolean;

	enableNetworkTracking: boolean;

	enablePersistingTracesWhenCrashing: boolean;

	enablePreWarmedAppStartTracing: boolean;

	enablePropagateTraceparent: boolean;

	enableReportNonFullyBlockingAppHangs: boolean;

	enableSigtermReporting: boolean;

	enableSpotlight: boolean;

	enableSwizzling: boolean;

	enableTimeToFullDisplayTracing: boolean;

	enableUIViewControllerTracing: boolean;

	enableUserInteractionTracing: boolean;

	enableWatchdogTerminationTracking: boolean;

	enabled: boolean;

	environment: string;

	experimental: SentryExperimentalOptions;

	failedRequestStatusCodes: NSArray<SentryHttpStatusCodeRange>;

	failedRequestTargets: NSArray<any>;

	idleTimeout: number;

	readonly inAppIncludes: NSArray<string>;

	initialScope: (p1: SentryScope) => SentryScope;

	readonly isTracingEnabled: boolean;

	maxAttachmentSize: number;

	maxBreadcrumbs: number;

	maxCacheItems: number;

	onCrashedLastRun: (p1: SentryEvent) => void;

	onLastRunStatusDetermined: (p1: SentryLastRunStatus, p2: SentryEvent) => void;

	orgId: string;

	parsedDsn: SentryDsn;

	profiling: SentryProfileOptions;

	releaseName: string;

	reportAccessibilityIdentifier: boolean;

	sampleRate: number;

	screenshot: SentryViewScreenshotOptions;

	sendClientReports: boolean;

	sendDefaultPii: boolean;

	sessionReplay: SentryReplayOptions;

	sessionTrackingIntervalMillis: number;

	shutdownTimeInterval: number;

	spotlightUrl: string;

	strictTraceContinuation: boolean;

	swiftAsyncStacktraces: boolean;

	swizzleClassNameExcludes: NSSet<string>;

	tracePropagationTargets: NSArray<any>;

	tracesSampleRate: number;

	tracesSampler: (p1: SentrySamplingContext) => number;

	urlSession: NSURLSession;

	urlSessionDelegate: NSURLSessionDelegate;

	userFeedbackConfiguration: SentryUserFeedbackConfiguration;

	static readonly defaultEnvironment: string;

	addInAppInclude(inAppInclude: string): void;

	isAppHangTrackingDisabled(): boolean;

	isContinuousProfilingEnabled(): boolean;

	isProfilingCorrelatedToTraces(): boolean;
}

declare class SentryPredicateDescriptor extends NSObject {

	static alloc(): SentryPredicateDescriptor; // inherited from NSObject

	static new(): SentryPredicateDescriptor; // inherited from NSObject

	predicateDescription(predicate: NSPredicate): string;
}

interface SentryProcessInfoSource {

	environment: NSDictionary<string, string>;

	isLowPowerModeEnabled: boolean;

	isMacCatalystApp: boolean;

	isiOSAppOnMac: boolean;

	isiOSAppOnVisionOS: boolean;

	processDirectoryPath: string;

	processPath: string;

	processorCount: number;

	thermalState: NSProcessInfoThermalState;
}
declare var SentryProcessInfoSource: {

	prototype: SentryProcessInfoSource;
};

declare const enum SentryProfileLifecycle {

	Manual = 0,

	Trace = 1
}

declare class SentryProfileOptions extends NSObject {

	static alloc(): SentryProfileOptions; // inherited from NSObject

	static new(): SentryProfileOptions; // inherited from NSObject

	lifecycle: SentryProfileLifecycle;

	profileAppStarts: boolean;

	sessionSampleRate: number;
}

declare class SentryPropagationContext extends NSObject {

	static alloc(): SentryPropagationContext; // inherited from NSObject

	static new(): SentryPropagationContext; // inherited from NSObject

	static shouldContinueTraceWithOptionsBaggageOrgId(options: SentryOptions, baggageOrgId: string): boolean;

	readonly traceHeader: SentryTraceHeader;

	readonly traceId: SentryId;

	constructor(o: { traceId: SentryId; spanId: SentrySpanId; });

	initWithTraceIdSpanId(traceId: SentryId, spanId: SentrySpanId): this;

	traceContextForEvent(): NSDictionary<string, string>;
}

declare class SentryRRWebBreadcrumbEvent extends SentryRRWebCustomEvent {

	static alloc(): SentryRRWebBreadcrumbEvent; // inherited from NSObject

	static new(): SentryRRWebBreadcrumbEvent; // inherited from NSObject

	constructor(o: { timestamp: Date; category: string; message: string; data: NSDictionary<string, any>; });

	constructor(o: { timestamp: Date; category: string; message: string; level: SentryLevel; data: NSDictionary<string, any>; });

	initWithTimestampCategoryMessageData(timestamp: Date, category: string, message: string, data: NSDictionary<string, any>): this;

	initWithTimestampCategoryMessageLevelData(timestamp: Date, category: string, message: string, level: SentryLevel, data: NSDictionary<string, any>): this;
}

declare class SentryRRWebCustomEvent extends SentryRRWebEvent {

	static alloc(): SentryRRWebCustomEvent; // inherited from NSObject

	static new(): SentryRRWebCustomEvent; // inherited from NSObject
}

declare class SentryRRWebEvent extends NSObject implements SentryRRWebEventProtocol {

	static alloc(): SentryRRWebEvent; // inherited from NSObject

	static new(): SentryRRWebEvent; // inherited from NSObject

	readonly data: NSDictionary<string, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

interface SentryRRWebEventProtocol extends SentrySerializable {
}
declare var SentryRRWebEventProtocol: {

	prototype: SentryRRWebEventProtocol;
};

declare class SentryRRWebSpanEvent extends SentryRRWebCustomEvent {

	static alloc(): SentryRRWebSpanEvent; // inherited from NSObject

	static new(): SentryRRWebSpanEvent; // inherited from NSObject

	constructor(o: { timestamp: Date; endTimestamp: Date; operation: string; description: string; data: NSDictionary<string, any>; });

	initWithTimestampEndTimestampOperationDescriptionData(timestamp: Date, endTimestamp: Date, operation: string, description: string, data: NSDictionary<string, any>): this;
}

declare class SentryRandom extends NSObject implements SentryRandomProtocol {

	static alloc(): SentryRandom; // inherited from NSObject

	static new(): SentryRandom; // inherited from NSObject

	nextNumber(): number;
}

interface SentryRandomProtocol {

	nextNumber(): number;
}
declare var SentryRandomProtocol: {

	prototype: SentryRandomProtocol;
};

declare class SentryRateLimitParser extends NSObject {

	static alloc(): SentryRateLimitParser; // inherited from NSObject

	static new(): SentryRateLimitParser; // inherited from NSObject

	constructor(o: { currentDateProvider: SentryCurrentDateProvider; });

	initWithCurrentDateProvider(currentDateProvider: SentryCurrentDateProvider): this;

	parse(header: string): NSDictionary<number, Date>;
}

interface SentryRateLimits extends NSObjectProtocol {

	isRateLimitActive(category: number): boolean;

	update(response: NSHTTPURLResponse): void;
}
declare var SentryRateLimits: {

	prototype: SentryRateLimits;
};

declare class SentryReachability extends NSObject {

	static alloc(): SentryReachability; // inherited from NSObject

	static new(): SentryReachability; // inherited from NSObject

	skipRegisteringActualCallbacks: boolean;

	addObserver(observer: SentryReachabilityObserver): void;

	removeAllObservers(): void;

	removeObserver(observer: SentryReachabilityObserver): void;
}

interface SentryReachabilityObserver extends NSObjectProtocol {

	connectivityChangedTypeDescription(connected: boolean, typeDescription: string): void;
}
declare var SentryReachabilityObserver: {

	prototype: SentryReachabilityObserver;
};

declare class SentryRedactDefaultOptions extends NSObject implements SentryRedactOptions {

	static alloc(): SentryRedactDefaultOptions; // inherited from NSObject

	static new(): SentryRedactDefaultOptions; // inherited from NSObject

	excludedViewClasses: NSSet<string>;

	includedViewClasses: NSSet<string>;

	maskAllImages: boolean;

	maskAllText: boolean;

	maskedViewClasses: NSArray<typeof NSObject>;

	unmaskedViewClasses: NSArray<typeof NSObject>;
}

interface SentryRedactOptions {

	excludedViewClasses: NSSet<string>;

	includedViewClasses: NSSet<string>;

	maskAllImages: boolean;

	maskAllText: boolean;

	maskedViewClasses: NSArray<typeof NSObject>;

	unmaskedViewClasses: NSArray<typeof NSObject>;
}
declare var SentryRedactOptions: {

	prototype: SentryRedactOptions;
};

declare class SentryRedactViewHelper extends NSObject {

	static alloc(): SentryRedactViewHelper; // inherited from NSObject

	static clipOutView(view: UIView): void;

	static maskSwiftUI(view: UIView): void;

	static maskView(view: UIView): void;

	static new(): SentryRedactViewHelper; // inherited from NSObject

	static unmaskView(view: UIView): void;
}

declare class SentryReplayApi extends NSObject {

	static alloc(): SentryReplayApi; // inherited from NSObject

	static new(): SentryReplayApi; // inherited from NSObject

	hideMaskPreview(): void;

	maskView(view: UIView): void;

	pause(): void;

	resume(): void;

	showMaskPreview(): void;

	start(): void;

	stop(): void;

	unmaskView(view: UIView): void;
}

interface SentryReplayBreadcrumbConverter extends NSObjectProtocol {

	convertFrom(breadcrumb: SentryBreadcrumb): SentryRRWebEventProtocol;
}
declare var SentryReplayBreadcrumbConverter: {

	prototype: SentryReplayBreadcrumbConverter;
};

declare class SentryReplayEvent extends SentryEvent {

	static alloc(): SentryReplayEvent; // inherited from NSObject

	static new(): SentryReplayEvent; // inherited from NSObject

	readonly replayStartTimestamp: Date;

	readonly replayType: SentryReplayType;

	readonly segmentId: number;

	urls: NSArray<string>;

	constructor(o: { eventId: SentryId; replayStartTimestamp: Date; replayType: SentryReplayType; segmentId: number; });

	initWithEventIdReplayStartTimestampReplayTypeSegmentId(eventId: SentryId, replayStartTimestamp: Date, replayType: SentryReplayType, segmentId: number): this;
}

declare class SentryReplayNetworkDetails extends NSObject {

	static alloc(): SentryReplayNetworkDetails; // inherited from NSObject

	static new(): SentryReplayNetworkDetails; // inherited from NSObject

	static readonly replayNetworkDetailsKey: string;

	constructor(o: { method: string; });

	initWithMethod(method: string): this;

	serialize(): NSDictionary<string, any>;

	setRequestWithSizeBodyDataContentTypeAllHeadersConfiguredHeaders(size: number, bodyData: NSData, contentType: string, allHeaders: NSDictionary<string, any>, configuredHeaders: NSArray<string> | string[]): void;

	setResponseWithStatusCodeSizeBodyDataContentTypeAllHeadersConfiguredHeaders(statusCode: number, size: number, bodyData: NSData, contentType: string, allHeaders: NSDictionary<string, any>, configuredHeaders: NSArray<string> | string[]): void;
}

declare class SentryReplayOptions extends NSObject implements SentryRedactOptions {

	static alloc(): SentryReplayOptions; // inherited from NSObject

	static new(): SentryReplayOptions; // inherited from NSObject

	enableExperimentalViewRenderer: boolean;

	enableFastViewRendering: boolean;

	enableViewRendererV2: boolean;

	errorReplayDuration: number;

	excludedViewClasses: NSSet<string>;

	frameRate: number;

	includedViewClasses: NSSet<string>;

	maskAllImages: boolean;

	maskAllText: boolean;

	maskedViewClasses: NSArray<typeof NSObject>;

	maximumDuration: number;

	networkCaptureBodies: boolean;

	networkRequestHeaders: NSArray<string>;

	networkResponseHeaders: NSArray<string>;

	onErrorSampleRate: number;

	quality: SentryReplayQuality;

	readonly replayBitRate: number;

	sessionSampleRate: number;

	sessionSegmentDuration: number;

	readonly sizeScale: number;

	unmaskedViewClasses: NSArray<typeof NSObject>;

	constructor(o: { dictionary: NSDictionary<string, any>; });

	constructor(o: { sessionSampleRate: number; onErrorSampleRate: number; maskAllText: boolean; maskAllImages: boolean; enableViewRendererV2: boolean; enableFastViewRendering: boolean; });

	excludeViewTypeFromSubtreeTraversal(viewType: string): void;

	includeViewTypeInSubtreeTraversal(viewType: string): void;

	initWithDictionary(dictionary: NSDictionary<string, any>): this;

	initWithSessionSampleRateOnErrorSampleRateMaskAllTextMaskAllImagesEnableViewRendererV2EnableFastViewRendering(sessionSampleRate: number, onErrorSampleRate: number, maskAllText: boolean, maskAllImages: boolean, enableViewRendererV2: boolean, enableFastViewRendering: boolean): this;

	isNetworkDetailCaptureEnabledFor(urlString: string): boolean;
}

declare const enum SentryReplayQuality {

	Low = 0,

	Medium = 1,

	High = 2
}

declare class SentryReplayRecording extends NSObject {

	static alloc(): SentryReplayRecording; // inherited from NSObject

	static new(): SentryReplayRecording; // inherited from NSObject

	constructor(o: { segmentId: number; video: SentryVideoInfo; extraEvents: NSArray<SentryRRWebEventProtocol> | SentryRRWebEventProtocol[]; });

	initWithSegmentIdVideoExtraEvents(segmentId: number, video: SentryVideoInfo, extraEvents: NSArray<SentryRRWebEventProtocol> | SentryRRWebEventProtocol[]): this;
}

declare const enum SentryReplayType {

	Session = 0,

	Buffer = 1
}

interface SentryReplayVideoMaker extends NSObjectProtocol {

	addFrameAsyncWithTimestampMaskedViewImageForScreen(timestamp: Date, maskedViewImage: UIImage, forScreen: string): void;

	createVideoInBackgroundWithBeginningEndCompletion(beginning: Date, end: Date, completion: (p1: NSArray<SentryVideoInfo>) => void): void;

	createVideoWithBeginningEnd(beginning: Date, end: Date): NSArray<SentryVideoInfo>;

	releaseFramesUntil(date: Date): void;
}
declare var SentryReplayVideoMaker: {

	prototype: SentryReplayVideoMaker;
};

declare class SentryRequest extends NSObject implements SentrySerializable {

	static alloc(): SentryRequest; // inherited from NSObject

	static new(): SentryRequest; // inherited from NSObject

	bodySize: number;

	cookies: string;

	fragment: string;

	headers: NSDictionary<string, string>;

	method: string;

	queryString: string;

	url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare class SentryRetryAfterHeaderParser extends NSObject {

	static alloc(): SentryRetryAfterHeaderParser; // inherited from NSObject

	static new(): SentryRetryAfterHeaderParser; // inherited from NSObject

	parse(retryAfterHeader: string): Date;
}

declare class SentrySDK extends NSObject {

	static addBreadcrumb(crumb: SentryBreadcrumb): void;

	static alloc(): SentrySDK; // inherited from NSObject

	static captureError(error: NSError): SentryId;

	static captureErrorAttachAllThreads(error: NSError, attachAllThreads: boolean): SentryId;

	static captureErrorWithScope(error: NSError, scope: SentryScope): SentryId;

	static captureErrorWithScopeBlock(error: NSError, block: (p1: SentryScope) => void): SentryId;

	static captureEvent(event: SentryEvent): SentryId;

	static captureEventAttachAllThreads(event: SentryEvent, attachAllThreads: boolean): SentryId;

	static captureEventWithScope(event: SentryEvent, scope: SentryScope): SentryId;

	static captureEventWithScopeBlock(event: SentryEvent, block: (p1: SentryScope) => void): SentryId;

	static captureException(exception: NSException): SentryId;

	static captureExceptionAttachAllThreads(exception: NSException, attachAllThreads: boolean): SentryId;

	static captureExceptionWithScope(exception: NSException, scope: SentryScope): SentryId;

	static captureExceptionWithScopeBlock(exception: NSException, block: (p1: SentryScope) => void): SentryId;

	static captureFeedback(feedback: SentryFeedback): void;

	static captureMessage(message: string): SentryId;

	static captureMessageAttachAllThreads(message: string, attachAllThreads: boolean): SentryId;

	static captureMessageWithScope(message: string, scope: SentryScope): SentryId;

	static captureMessageWithScopeBlock(message: string, block: (p1: SentryScope) => void): SentryId;

	static close(): void;

	static configureScope(callback: (p1: SentryScope) => void): void;

	static crash(): void;

	static endSession(): void;

	static extendAppStart(): void;

	static finishExtendedAppStart(): void;

	static flush(timeout: number): void;

	static getExtendedAppStartSpan(): SentrySpan;

	static new(): SentrySDK; // inherited from NSObject

	static pauseAppHangTracking(): void;

	static reportFullyDisplayed(): void;

	static resumeAppHangTracking(): void;

	static setStartWith(option: SentryOptions): void;

	static setUser(user: SentryUser): void;

	static startProfiler(): void;

	static startSession(): void;

	static startTransactionWithContext(transactionContext: SentryTransactionContext): SentrySpan;

	static startTransactionWithContextBindToScope(transactionContext: SentryTransactionContext, bindToScope: boolean): SentrySpan;

	static startTransactionWithContextBindToScopeCustomSamplingContext(transactionContext: SentryTransactionContext, bindToScope: boolean, customSamplingContext: NSDictionary<string, any>): SentrySpan;

	static startTransactionWithContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): SentrySpan;

	static startTransactionWithNameOperation(name: string, operation: string): SentrySpan;

	static startTransactionWithNameOperationBindToScope(name: string, operation: string, bindToScope: boolean): SentrySpan;

	static startWithConfigureOptions(configureOptions: (p1: SentryOptions) => void): void;

	static startWithOptions(options: SentryOptions): void;

	static stopProfiler(): void;

	static readonly crashedLastRun: boolean;

	static readonly detectedStartUpCrash: boolean;

	static readonly feedback: SentryFeedbackAPI;

	static readonly isEnabled: boolean;

	static readonly lastRunStatus: SentryLastRunStatus;

	static readonly logger: SentryLogger;

	static readonly replay: SentryReplayApi;

	static readonly span: SentrySpan;

	static readonly startOption: SentryOptions;
}

declare class SentrySDKLog extends NSObject {

	static alloc(): SentrySDKLog; // inherited from NSObject

	static logWithMessageAndLevel(message: string, level: SentryLevel): void;

	static new(): SentrySDKLog; // inherited from NSObject

	static setOutput(output: (p1: string) => void): void;

	static willLogAtLevel(level: SentryLevel): boolean;
}

declare class SentrySDKLogSupport extends NSObject {

	static alloc(): SentrySDKLogSupport; // inherited from NSObject

	static configureDiagnosticLevel(isDebug: boolean, diagnosticLevel: SentryLevel): void;

	static new(): SentrySDKLogSupport; // inherited from NSObject
}

declare class SentrySRDefaultBreadcrumbConverter extends NSObject implements SentryReplayBreadcrumbConverter {

	static alloc(): SentrySRDefaultBreadcrumbConverter; // inherited from NSObject

	static new(): SentrySRDefaultBreadcrumbConverter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertFrom(breadcrumb: SentryBreadcrumb): SentryRRWebEventProtocol;

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

declare class SentrySample extends NSObject {

	static alloc(): SentrySample; // inherited from NSObject

	static new(): SentrySample; // inherited from NSObject

	absoluteNSDateInterval: number;

	absoluteTimestamp: number;

	queueAddress: string;

	stackIndex: number;

	threadID: number;
}

declare const enum SentrySampleDecision {

	kSentrySampleDecisionUndecided = 0,

	kSentrySampleDecisionYes = 1,

	kSentrySampleDecisionNo = 2
}

declare class SentrySamplerDecision extends NSObject {

	static alloc(): SentrySamplerDecision; // inherited from NSObject

	static new(): SentrySamplerDecision; // inherited from NSObject

	readonly decision: SentrySampleDecision;

	readonly sampleRand: number;

	readonly sampleRate: number;

	constructor(o: { decision: SentrySampleDecision; forSampleRate: number; withSampleRand: number; });

	initWithDecisionForSampleRateWithSampleRand(decision: SentrySampleDecision, sampleRate: number, sampleRand: number): this;
}

declare class SentrySamplingContext extends NSObject {

	static alloc(): SentrySamplingContext; // inherited from NSObject

	static new(): SentrySamplingContext; // inherited from NSObject

	readonly customSamplingContext: NSDictionary<string, any>;

	readonly transactionContext: SentryTransactionContext;

	constructor(o: { transactionContext: SentryTransactionContext; });

	constructor(o: { transactionContext: SentryTransactionContext; customSamplingContext: NSDictionary<string, any>; });

	initWithTransactionContext(transactionContext: SentryTransactionContext): this;

	initWithTransactionContextCustomSamplingContext(transactionContext: SentryTransactionContext, customSamplingContext: NSDictionary<string, any>): this;
}

declare class SentryScope extends NSObject implements SentrySerializable {

	static alloc(): SentryScope; // inherited from NSObject

	static new(): SentryScope; // inherited from NSObject

	readonly attributes: NSDictionary<string, any>;

	replayId: string;

	span: SentrySpan;

	readonly tags: NSDictionary<string, string>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { maxBreadcrumbs: number; });

	constructor(o: { scope: SentryScope; });

	addAttachment(attachment: SentryAttachment): void;

	addBreadcrumb(crumb: SentryBreadcrumb): void;

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

	removeAttributeForKey(key: string): void;

	removeContextForKey(key: string): void;

	removeExtraForKey(key: string): void;

	removeTagForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serialize(): NSDictionary<string, any>;

	setAttributeValueForKey(value: any, key: string): void;

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

interface SentryScopeObserver extends NSObjectProtocol {

	addSerializedBreadcrumb(serializedBreadcrumb: NSDictionary<string, any>): void;

	clear(): void;

	clearBreadcrumbs(): void;

	setAttributes(attributes: NSDictionary<string, any>): void;

	setContext(context: NSDictionary<string, NSDictionary<string, any>>): void;

	setCurrentScreen?(currentScreen: string): void;

	setDist(dist: string): void;

	setEnvironment(environment: string): void;

	setExtras(extras: NSDictionary<string, any>): void;

	setFingerprint(fingerprint: NSArray<string> | string[]): void;

	setLevel(level: SentryLevel): void;

	setTags(tags: NSDictionary<string, string>): void;

	setTraceContext(traceContext: NSDictionary<string, any>): void;

	setUser(user: SentryUser): void;
}
declare var SentryScopeObserver: {

	prototype: SentryScopeObserver;
};

declare class SentryScopePersistentStore extends NSObject {

	static alloc(): SentryScopePersistentStore; // inherited from NSObject

	static new(): SentryScopePersistentStore; // inherited from NSObject

	moveAllCurrentStateToPreviousState(): void;

	readPreviousContextFromDisk(): NSDictionary<string, NSDictionary<string, any>>;

	readPreviousDistFromDisk(): string;

	readPreviousEnvironmentFromDisk(): string;

	readPreviousExtrasFromDisk(): NSDictionary<string, any>;

	readPreviousFingerprintFromDisk(): NSArray<string>;

	readPreviousTagsFromDisk(): NSDictionary<string, string>;

	readPreviousUserFromDisk(): SentryUser;
}

declare class SentryScreenFrames extends NSObject implements NSCopying {

	static alloc(): SentryScreenFrames; // inherited from NSObject

	static new(): SentryScreenFrames; // inherited from NSObject

	readonly frameRateTimestamps: NSArray<NSDictionary<string, number>>;

	readonly frozen: number;

	readonly frozenFrameTimestamps: NSArray<NSDictionary<string, number>>;

	readonly slow: number;

	readonly slowFrameTimestamps: NSArray<NSDictionary<string, number>>;

	readonly total: number;

	constructor(o: { total: number; frozen: number; slow: number; });

	constructor(o: { total: number; frozen: number; slow: number; slowFrameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]; frozenFrameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]; frameRateTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithTotalFrozenSlow(total: number, frozen: number, slow: number): this;

	initWithTotalFrozenSlowSlowFrameTimestampsFrozenFrameTimestampsFrameRateTimestamps(total: number, frozen: number, slow: number, slowFrameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[], frozenFrameTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[], frameRateTimestamps: NSArray<NSDictionary<string, number>> | NSDictionary<string, number>[]): this;
}

declare class SentryScreenshotSource extends NSObject {

	static alloc(): SentryScreenshotSource; // inherited from NSObject

	static new(): SentryScreenshotSource; // inherited from NSObject

	constructor(o: { photographer: SentryViewPhotographer; });

	appScreenshotDatasFromMainThread(): NSArray<NSData>;

	appScreenshots(): NSArray<UIImage>;

	appScreenshotsData(): NSArray<NSData>;

	appScreenshotsFromMainThread(): NSArray<UIImage>;

	initWithPhotographer(photographer: SentryViewPhotographer): this;

	saveScreenShots(imagesDirectoryPath: string): void;
}

declare class SentrySdkInfoObjC extends NSObject {

	static alloc(): SentrySdkInfoObjC; // inherited from NSObject

	static new(): SentrySdkInfoObjC; // inherited from NSObject

	static optionsToDict(options: SentryOptions): NSDictionary<string, any>;
}

declare class SentrySdkPackage extends NSObject {

	static alloc(): SentrySdkPackage; // inherited from NSObject

	static global(): NSDictionary<string, string>;

	static new(): SentrySdkPackage; // inherited from NSObject
}

interface SentrySerializable extends NSObjectProtocol {

	serialize(): NSDictionary<string, any>;
}
declare var SentrySerializable: {

	prototype: SentrySerializable;
};

declare class SentrySerializationSwift extends NSObject {

	static alloc(): SentrySerializationSwift; // inherited from NSObject

	static appStateWithData(data: NSData): SentryAppState;

	static dataWithEnvelope(envelope: SentryEnvelope): NSData;

	static dataWithJSONObject(jsonObject: any): NSData;

	static dataWithSession(session: SentrySession): NSData;

	static envelopeWithData(data: NSData): SentryEnvelope;

	static new(): SentrySerializationSwift; // inherited from NSObject

	static sessionWithData(data: NSData): SentrySession;
}

declare class SentrySession extends NSObject implements NSCopying {

	static alloc(): SentrySession; // inherited from NSObject

	static new(): SentrySession; // inherited from NSObject

	abnormalMechanism: string;

	readonly distinctId: string;

	readonly duration: number;

	environment: string;

	errors: number;

	readonly flagInit: number;

	readonly releaseName: string;

	readonly sequence: number;

	readonly sessionId: NSUUID;

	readonly started: Date;

	readonly timestamp: Date;

	constructor(o: { JSONObject: NSDictionary<string, any>; });

	constructor(o: { releaseName: string; distinctId: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	endSessionAbnormalWithTimestamp(timestamp: Date): void;

	endSessionCrashedWithTimestamp(timestamp: Date): void;

	endSessionExitedWithTimestamp(timestamp: Date): void;

	incrementErrors(): void;

	initWithJSONObject(jsonObject: NSDictionary<string, any>): this;

	initWithReleaseNameDistinctId(releaseName: string, distinctId: string): this;

	serialize(): NSDictionary<string, any>;

	setFlagInit(): void;
}

interface SentrySessionListener {

	sentrySessionEndedWithSession(session: SentrySession): void;

	sentrySessionStartedWithSession(session: SentrySession): void;
}
declare var SentrySessionListener: {

	prototype: SentrySessionListener;
};

declare class SentrySessionReplay extends NSObject {

	static alloc(): SentrySessionReplay; // inherited from NSObject

	static new(): SentrySessionReplay; // inherited from NSObject

	breadcrumbConverter: SentryReplayBreadcrumbConverter;

	readonly isFullSession: boolean;

	replayTags: NSDictionary<string, any>;

	screenshotProvider: SentryViewScreenshotProvider;

	readonly sessionReplayId: SentryId;

	captureReplay(): boolean;

	captureReplayForEvent(event: SentryEvent): void;

	pause(): void;

	pauseSessionMode(): void;

	resume(): void;

	startWithRootViewFullSession(rootView: UIView, fullSession: boolean): void;
}

interface SentrySessionReplayDelegate extends NSObjectProtocol {

	breadcrumbsForSessionReplay(): NSArray<SentryBreadcrumb>;

	currentScreenNameForSessionReplay(): string;

	sessionReplayEnded(): void;

	sessionReplayNewSegmentWithReplayEventReplayRecordingVideoUrl(replayEvent: SentryReplayEvent, replayRecording: SentryReplayRecording, videoUrl: NSURL): void;

	sessionReplayShouldCaptureReplayForError(): boolean;

	sessionReplayStartedWithReplayId(replayId: SentryId): void;
}
declare var SentrySessionReplayDelegate: {

	prototype: SentrySessionReplayDelegate;
};

declare class SentrySessionReplayHybridSDK extends NSObject {

	static alloc(): SentrySessionReplayHybridSDK; // inherited from NSObject

	static createBreadcrumbwithTimestampCategoryMessageLevelData(timestamp: Date, category: string, message: string, level: SentryLevel, data: NSDictionary<string, any>): SentryRRWebEventProtocol;

	static createDefaultBreadcrumbConverter(): SentryReplayBreadcrumbConverter;

	static createNetworkBreadcrumbWithTimestampEndTimestampOperationDescriptionData(timestamp: Date, endTimestamp: Date, operation: string, description: string, data: NSDictionary<string, any>): SentryRRWebEventProtocol;

	static new(): SentrySessionReplayHybridSDK; // inherited from NSObject
}

declare class SentrySessionReplayIntegration extends NSObject implements SentryReachabilityObserver, SentrySessionListener, SentrySessionReplayDelegate {

	static alloc(): SentrySessionReplayIntegration; // inherited from NSObject

	static new(): SentrySessionReplayIntegration; // inherited from NSObject

	sessionReplay: SentrySessionReplay;

	readonly viewPhotographer: SentryViewPhotographer;

	static readonly name: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { forManualUseWith: SentryOptions; dependencies: SentryDependencyContainer; });

	breadcrumbsForSessionReplay(): NSArray<SentryBreadcrumb>;

	captureReplay(): boolean;

	class(): typeof NSObject;

	configureReplayWithScreenshotProvider(breadcrumbConverter: SentryReplayBreadcrumbConverter, screenshotProvider: SentryViewScreenshotProvider): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	connectivityChangedTypeDescription(connected: boolean, typeDescription: string): void;

	currentScreenNameForSessionReplay(): string;

	hideMaskPreview(): void;

	initForManualUseWithDependencies(options: SentryOptions, dependencies: SentryDependencyContainer): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pause(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	resume(): void;

	retainCount(): number;

	self(): this;

	sentrySessionEndedWithSession(session: SentrySession): void;

	sentrySessionStartedWithSession(session: SentrySession): void;

	sessionReplayEnded(): void;

	sessionReplayNewSegmentWithReplayEventReplayRecordingVideoUrl(replayEvent: SentryReplayEvent, replayRecording: SentryReplayRecording, videoUrl: NSURL): void;

	sessionReplayShouldCaptureReplayForError(): boolean;

	sessionReplayStartedWithReplayId(replayId: SentryId): void;

	setReplayTags(tags: NSDictionary<string, any>): void;

	showMaskPreview(opacity: number): void;

	start(): void;

	stop(): void;

	uninstall(): void;
}

declare class SentryShakeDetector extends NSObject {

	static alloc(): SentryShakeDetector; // inherited from NSObject

	static disable(): void;

	static enable(): void;

	static new(): SentryShakeDetector; // inherited from NSObject

	static readonly shakeDetectedNotification: string;
}

interface SentrySpan extends SentrySerializable {

	data: NSDictionary<string, any>;

	isFinished: boolean;

	operation: string;

	origin: string;

	parentSpanId: SentrySpanId;

	sampled: SentrySampleDecision;

	spanDescription: string;

	spanId: SentrySpanId;

	startTimestamp: Date;

	status: SentrySpanStatus;

	tags: NSDictionary<string, string>;

	timestamp: Date;

	traceContext: SentryTraceContext;

	traceId: SentryId;

	baggageHttpHeader(): string;

	finish(): void;

	finishWithStatus(status: SentrySpanStatus): void;

	removeDataForKey(key: string): void;

	removeTagForKey(key: string): void;

	setDataValueForKey(value: any, key: string): void;

	setMeasurementValue(name: string, value: number): void;

	setMeasurementValueUnit(name: string, value: number, unit: SentryMeasurementUnit): void;

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

	readonly operation: string;

	origin: string;

	readonly parentSpanId: SentrySpanId;

	readonly sampled: SentrySampleDecision;

	readonly spanDescription: string;

	readonly spanId: SentrySpanId;

	readonly traceId: SentryId;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { operation: string; });

	constructor(o: { operation: string; sampled: SentrySampleDecision; });

	constructor(o: { traceId: SentryId; spanId: SentrySpanId; parentId: SentrySpanId; operation: string; sampled: SentrySampleDecision; });

	constructor(o: { traceId: SentryId; spanId: SentrySpanId; parentId: SentrySpanId; operation: string; spanDescription: string; sampled: SentrySampleDecision; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithOperation(operation: string): this;

	initWithOperationSampled(operation: string, sampled: SentrySampleDecision): this;

	initWithTraceIdSpanIdParentIdOperationSampled(traceId: SentryId, spanId: SentrySpanId, parentId: SentrySpanId, operation: string, sampled: SentrySampleDecision): this;

	initWithTraceIdSpanIdParentIdOperationSpanDescriptionSampled(traceId: SentryId, spanId: SentrySpanId, parentId: SentrySpanId, operation: string, description: string, sampled: SentrySampleDecision): this;

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

declare class SentrySpanId extends NSObject implements NSCopying {

	static alloc(): SentrySpanId; // inherited from NSObject

	static new(): SentrySpanId; // inherited from NSObject

	readonly sentrySpanIdString: string;

	static readonly empty: SentrySpanId;

	constructor(o: { UUID: NSUUID; });

	constructor(o: { value: string; });

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

	snapshot: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frames: NSArray<SentryFrame> | SentryFrame[]; registers: NSDictionary<string, string>; });

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

declare class SentrySwiftIntegrationInstaller extends NSObject {

	static alloc(): SentrySwiftIntegrationInstaller; // inherited from NSObject

	static installWith(options: SentryOptions): void;

	static new(): SentrySwiftIntegrationInstaller; // inherited from NSObject
}

declare class SentrySwiftUISpanHelper extends NSObject {

	static alloc(): SentrySwiftUISpanHelper; // inherited from NSObject

	static new(): SentrySwiftUISpanHelper; // inherited from NSObject

	readonly hasSpan: boolean;

	constructor(o: { hasSpan: boolean; initialDisplayReporting: () => void; });

	initWithHasSpanInitialDisplayReporting(hasSpan: boolean, initialDisplayReporting: () => void): this;

	reportInitialDisplay(): void;
}

declare class SentrySwizzleClassNameExclude extends NSObject {

	static alloc(): SentrySwizzleClassNameExclude; // inherited from NSObject

	static new(): SentrySwizzleClassNameExclude; // inherited from NSObject

	static shouldExcludeClassWithClassNameSwizzleClassNameExcludes(className: string, swizzleClassNameExcludes: NSSet<string>): boolean;
}

declare class SentrySwizzleWrapper extends NSObject {

	static alloc(): SentrySwizzleWrapper; // inherited from NSObject

	static new(): SentrySwizzleWrapper; // inherited from NSObject

	removeSwizzleSendActionForKey(key: string): void;

	swizzleSendActionForKey(callback: (p1: string, p2: any, p3: any, p4: _UIEvent) => void, key: string): void;
}

declare class SentrySysctl extends NSObject {

	static alloc(): SentrySysctl; // inherited from NSObject

	static new(): SentrySysctl; // inherited from NSObject

	readonly moduleInitializationTimestamp: Date;

	readonly processStartTimestamp: Date;

	readonly runtimeInitSystemTimestamp: number;

	readonly runtimeInitTimestamp: Date;

	readonly systemBootTimestamp: Date;
}

declare class SentryTelemetryProcessorFactory extends NSObject {

	static alloc(): SentryTelemetryProcessorFactory; // inherited from NSObject

	static getProcessorWithTransportDependencies(transport: SentryTelemetryProcessorTransport, dependencies: SentryDependencyContainer): SentryObjCTelemetryProcessor;

	static new(): SentryTelemetryProcessorFactory; // inherited from NSObject
}

interface SentryTelemetryProcessorTransport {

	sendEnvelopeWithEnvelope(envelope: SentryEnvelope): void;
}
declare var SentryTelemetryProcessorTransport: {

	prototype: SentryTelemetryProcessorTransport;
};

declare class SentryThread extends NSObject implements SentrySerializable {

	static alloc(): SentryThread; // inherited from NSObject

	static new(): SentryThread; // inherited from NSObject

	crashed: number;

	current: number;

	isMain: number;

	name: string;

	stacktrace: SentryStacktrace;

	threadId: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { threadId: number; });

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

interface SentryThreadInspecting {

	getCurrentThreadsWithStackTrace(): NSArray<SentryThread>;

	getThreadName(thread: number): string;
}
declare var SentryThreadInspecting: {

	prototype: SentryThreadInspecting;
};

declare class SentryThreadInspector extends NSObject {

	static alloc(): SentryThreadInspector; // inherited from NSObject

	static new(): SentryThreadInspector; // inherited from NSObject

	getCurrentThreads(): NSArray<SentryThread>;

	getCurrentThreadsWithStackTrace(): NSArray<SentryThread>;

	getThreadName(thread: number): string;

	stacktraceForCurrentThreadAsyncUnsafe(): SentryStacktrace;
}

declare class SentryThreadWrapper extends NSObject {

	static alloc(): SentryThreadWrapper; // inherited from NSObject

	static new(): SentryThreadWrapper; // inherited from NSObject

	sleepForTimeInterval(timeInterval: number): void;

	threadFinished(threadID: NSUUID): void;

	threadStarted(threadID: NSUUID): void;
}

declare class SentryThreadsafeApplication extends NSObject {

	static alloc(): SentryThreadsafeApplication; // inherited from NSObject

	static new(): SentryThreadsafeApplication; // inherited from NSObject

	readonly applicationState: UIApplicationState;

	readonly isActive: boolean;
}

declare class SentryTouchTracker extends NSObject {

	static alloc(): SentryTouchTracker; // inherited from NSObject

	static new(): SentryTouchTracker; // inherited from NSObject

	constructor(o: { dateProvider: SentryCurrentDateProvider; scale: number; });

	constructor(o: { dateProvider: SentryCurrentDateProvider; scale: number; dispatchQueue: SentryDispatchQueueWrapper; });

	initWithDateProviderScale(dateProvider: SentryCurrentDateProvider, scale: number): this;

	initWithDateProviderScaleDispatchQueue(dateProvider: SentryCurrentDateProvider, scale: number, dispatchQueue: SentryDispatchQueueWrapper): this;

	trackTouchFromEvent(event: _UIEvent): void;
}

declare class SentryTraceContext extends NSObject implements SentrySerializable {

	static alloc(): SentryTraceContext; // inherited from NSObject

	static new(): SentryTraceContext; // inherited from NSObject

	readonly environment: string;

	readonly orgId: string;

	readonly publicKey: string;

	readonly releaseName: string;

	readonly replayId: string;

	readonly sampleRand: string;

	readonly sampleRate: string;

	readonly sampled: string;

	readonly traceId: SentryId;

	readonly transaction: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

	toBaggage(): SentryBaggage;
}

declare class SentryTraceHeader extends NSObject {

	static alloc(): SentryTraceHeader; // inherited from NSObject

	static new(): SentryTraceHeader; // inherited from NSObject

	readonly sampled: SentrySampleDecision;

	readonly spanId: SentrySpanId;

	readonly traceId: SentryId;

	constructor(o: { traceId: SentryId; spanId: SentrySpanId; sampled: SentrySampleDecision; });

	initWithTraceIdSpanIdSampled(traceId: SentryId, spanId: SentrySpanId, sampled: SentrySampleDecision): this;

	value(): string;
}

declare class SentryTransactionContext extends SentrySpanContext {

	static alloc(): SentryTransactionContext; // inherited from NSObject

	static new(): SentryTransactionContext; // inherited from NSObject

	forNextAppLaunch: boolean;

	readonly name: string;

	readonly nameSource: SentryTransactionNameSource;

	parentSampleRand: number;

	parentSampleRate: number;

	parentSampled: SentrySampleDecision;

	sampleRand: number;

	sampleRate: number;

	constructor(o: { name: string; operation: string; });

	constructor(o: { name: string; operation: string; sampled: SentrySampleDecision; sampleRate: number; sampleRand: number; });

	constructor(o: { name: string; operation: string; traceId: SentryId; spanId: SentrySpanId; parentSpanId: SentrySpanId; parentSampled: SentrySampleDecision; parentSampleRate: number; parentSampleRand: number; });

	initWithNameOperation(name: string, operation: string): this;

	initWithNameOperationSampledSampleRateSampleRand(name: string, operation: string, sampled: SentrySampleDecision, sampleRate: number, sampleRand: number): this;

	initWithNameOperationTraceIdSpanIdParentSpanIdParentSampledParentSampleRateParentSampleRand(name: string, operation: string, traceId: SentryId, spanId: SentrySpanId, parentSpanId: SentrySpanId, parentSampled: SentrySampleDecision, parentSampleRate: number, parentSampleRand: number): this;
}

declare const enum SentryTransactionNameSource {

	kSentryTransactionNameSourceCustom = 0,

	kSentryTransactionNameSourceUrl = 1,

	kSentryTransactionNameSourceRoute = 2,

	kSentryTransactionNameSourceView = 3,

	kSentryTransactionNameSourceComponent = 4,

	kSentryTransactionNameSourceTask = 5
}

interface SentryUIDeviceWrapper {

	batteryLevel: number;

	batteryState: UIDeviceBatteryState;

	currentDevice: UIDevice;

	isBatteryMonitoringEnabled: boolean;

	orientation: UIDeviceOrientation;

	getSystemVersion(): string;

	start(): void;

	stop(): void;
}
declare var SentryUIDeviceWrapper: {

	prototype: SentryUIDeviceWrapper;
};

interface SentryUIViewControllerDescriptor extends NSObjectProtocol {

	sentryName: string;
}
declare var SentryUIViewControllerDescriptor: {

	prototype: SentryUIViewControllerDescriptor;
};

declare class SentryUIViewControllerPerformanceTracker extends NSObject {

	static alloc(): SentryUIViewControllerPerformanceTracker; // inherited from NSObject

	static new(): SentryUIViewControllerPerformanceTracker; // inherited from NSObject

	alwaysWaitForFullDisplay: boolean;

	inAppLogic: SentryInAppLogic;

	reportFullyDisplayed(): void;

	startTimeToDisplayTrackerForScreenWaitForFullDisplayTransactionId(screenName: string, waitForFullDisplay: boolean, transactionId: SentrySpanId): SentrySwiftUISpanHelper;

	viewControllerLoadViewCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewDidAppearCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewDidLayoutSubViewsCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewDidLoadCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewWillAppearCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewWillDisappearCallbackToOrigin(controller: UIViewController, callback: () => void): void;

	viewControllerViewWillLayoutSubViewsCallbackToOrigin(controller: UIViewController, callback: () => void): void;
}

declare class SentryUser extends NSObject implements NSCopying, SentrySerializable {

	static alloc(): SentryUser; // inherited from NSObject

	static new(): SentryUser; // inherited from NSObject

	data: NSDictionary<string, any>;

	email: string;

	geo: SentryGeo;

	ipAddress: string;

	name: string;

	userId: string;

	username: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { userId: string; });

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

declare class SentryUserFeedbackConfiguration extends NSObject {

	static alloc(): SentryUserFeedbackConfiguration; // inherited from NSObject

	static new(): SentryUserFeedbackConfiguration; // inherited from NSObject

	animations: boolean;

	configureDarkTheme: (p1: SentryUserFeedbackThemeConfiguration) => void;

	configureForm: (p1: SentryUserFeedbackFormConfiguration) => void;

	configureTheme: (p1: SentryUserFeedbackThemeConfiguration) => void;

	configureWidget: (p1: SentryUserFeedbackWidgetConfiguration) => void;

	customButton: UIButton;

	onFormClose: () => void;

	onFormOpen: () => void;

	onSubmitError: (p1: NSError) => void;

	onSubmitSuccess: (p1: NSDictionary<string, any>) => void;

	showFormForScreenshots: boolean;

	tags: NSDictionary<string, any>;

	useShakeGesture: boolean;
}

declare class SentryUserFeedbackFormConfiguration extends NSObject {

	static alloc(): SentryUserFeedbackFormConfiguration; // inherited from NSObject

	static new(): SentryUserFeedbackFormConfiguration; // inherited from NSObject

	cancelButtonAccessibilityLabel: string;

	cancelButtonLabel: string;

	emailLabel: string;

	emailPlaceholder: string;

	emailTextFieldAccessibilityLabel: string;

	formTitle: string;

	isEmailRequired: boolean;

	isNameRequired: boolean;

	isRequiredLabel: string;

	messageLabel: string;

	messagePlaceholder: string;

	messageTextViewAccessibilityLabel: string;

	nameLabel: string;

	namePlaceholder: string;

	nameTextFieldAccessibilityLabel: string;

	removeScreenshotButtonAccessibilityLabel: string;

	removeScreenshotButtonLabel: string;

	showBranding: boolean;

	showEmail: boolean;

	showName: boolean;

	submitButtonAccessibilityLabel: string;

	submitButtonLabel: string;

	unexpectedErrorText: string;

	useSentryUser: boolean;

	validationErrorMessage: (p1: boolean) => string;
}

declare class SentryUserFeedbackFormController extends UIViewController implements UIAdaptivePresentationControllerDelegate, UITextFieldDelegate, UITextViewDelegate {

	static alloc(): SentryUserFeedbackFormController; // inherited from NSObject

	static new(): SentryUserFeedbackFormController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

	/**
	 * @since 8.3
	 */
	adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	/**
	 * @since 13.0
	 */
	presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

	/**
	 * @since 13.0
	 */
	presentationControllerDidDismiss(presentationController: UIPresentationController): void;

	/**
	 * @since 15.0
	 */
	presentationControllerPrepareAdaptivePresentationController(presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController): void;

	/**
	 * @since 13.0
	 */
	presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

	presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	/**
	 * @since 13.0
	 */
	presentationControllerWillDismiss(presentationController: UIPresentationController): void;

	/**
	 * @since 8.3
	 */
	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	/**
	 * @since 11.0
	 */
	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	/**
	 * @since 3.2
	 */
	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	/**
	 * @since 5.0
	 */
	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	/**
	 * @since 13.0
	 */
	textFieldDidChangeSelection(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	/**
	 * @since 10.0
	 */
	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	/**
	 * @since 16.0
	 * @deprecated 100000
	 */
	textFieldEditMenuForCharactersInRangeSuggestedActions(textField: UITextField, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 26.0
	 */
	textFieldEditMenuForCharactersInRangesSuggestedActions(textField: UITextField, ranges: NSArray<NSValue> | NSValue[], suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 18.4
	 */
	textFieldInsertInputSuggestion(textField: UITextField, inputSuggestion: UIInputSuggestion): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	/**
	 * @since 2.0
	 * @deprecated 100000
	 */
	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	/**
	 * @since 26.0
	 */
	textFieldShouldChangeCharactersInRangesReplacementString(textField: UITextField, ranges: NSArray<NSValue> | NSValue[], string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	/**
	 * @since 16.0
	 */
	textFieldWillDismissEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 16.0
	 */
	textFieldWillPresentEditMenuWithAnimator(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;

	textViewDidBeginEditing(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewDidBeginFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewDidEndFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 * @deprecated 100000
	 */
	textViewEditMenuForTextInRangeSuggestedActions(textView: UITextView, range: NSRange, suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 26.0
	 */
	textViewEditMenuForTextInRangesSuggestedActions(textView: UITextView, ranges: NSArray<NSValue> | NSValue[], suggestedActions: NSArray<UIMenuElement> | UIMenuElement[]): UIMenu;

	/**
	 * @since 18.4
	 */
	textViewInsertInputSuggestion(textView: UITextView, inputSuggestion: UIInputSuggestion): void;

	/**
	 * @since 17.0
	 */
	textViewMenuConfigurationForTextItemDefaultMenu(textView: UITextView, textItem: UITextItem, defaultMenu: UIMenu): UITextItemMenuConfiguration;

	/**
	 * @since 17.0
	 */
	textViewPrimaryActionForTextItemDefaultAction(textView: UITextView, textItem: UITextItem, defaultAction: UIAction): UIAction;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	/**
	 * @since 2.0
	 * @deprecated 100000
	 */
	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	/**
	 * @since 26.0
	 */
	textViewShouldChangeTextInRangesReplacementText(textView: UITextView, ranges: NSArray<NSValue> | NSValue[], text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	/**
	 * @since 7.0
	 * @deprecated 10.0
	 */
	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	/**
	 * @since 10.0
	 * @deprecated 17.0
	 */
	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	/**
	 * @since 7.0
	 * @deprecated 10.0
	 */
	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	/**
	 * @since 10.0
	 * @deprecated 17.0
	 */
	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	/**
	 * @since 17.0
	 */
	textViewTextItemMenuWillDisplayForTextItemAnimator(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;

	/**
	 * @since 17.0
	 */
	textViewTextItemMenuWillEndForTextItemAnimator(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWillBeginFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 */
	textViewWillDismissEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWillEndFormattingWithViewController(textView: UITextView, viewController: UITextFormattingViewController): void;

	/**
	 * @since 16.0
	 */
	textViewWillPresentEditMenuWithAnimator(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsDidEnd(textView: UITextView): void;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsIgnoredRangesInEnclosingRange(textView: UITextView, enclosingRange: NSRange): NSArray<NSValue>;

	/**
	 * @since 18.0
	 */
	textViewWritingToolsWillBegin(textView: UITextView): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class SentryUserFeedbackFormViewModel extends NSObject {

	static alloc(): SentryUserFeedbackFormViewModel; // inherited from NSObject

	static new(): SentryUserFeedbackFormViewModel; // inherited from NSObject
}

declare class SentryUserFeedbackThemeConfiguration extends NSObject {

	static alloc(): SentryUserFeedbackThemeConfiguration; // inherited from NSObject

	static new(): SentryUserFeedbackThemeConfiguration; // inherited from NSObject

	background: UIColor;

	buttonBackground: UIColor;

	buttonForeground: UIColor;

	errorColor: UIColor;

	fontFamily: string;

	foreground: UIColor;

	inputBackground: UIColor;

	inputForeground: UIColor;

	outlineStyle: SentryFormElementOutlineStyle;

	submitBackground: UIColor;

	submitForeground: UIColor;
}

declare class SentryUserFeedbackWidgetConfiguration extends NSObject {

	static alloc(): SentryUserFeedbackWidgetConfiguration; // inherited from NSObject

	static new(): SentryUserFeedbackWidgetConfiguration; // inherited from NSObject

	autoInject: boolean;

	labelText: string;

	layoutUIOffset: UIOffset;

	location: NSDirectionalRectEdge;

	showIcon: boolean;

	widgetAccessibilityLabel: string;

	windowLevel: number;
}

declare var SentryVersionNumber: number;

declare var SentryVersionNumberVar: number;

declare var SentryVersionString: interop.Reference<number>;

declare var SentryVersionStringVar: interop.Reference<number>;

declare class SentryVideoInfo extends NSObject {

	static alloc(): SentryVideoInfo; // inherited from NSObject

	static new(): SentryVideoInfo; // inherited from NSObject

	readonly end: Date;

	readonly path: NSURL;

	readonly start: Date;
}

declare class SentryViewHierarchyProvider extends NSObject {

	static alloc(): SentryViewHierarchyProvider; // inherited from NSObject

	static new(): SentryViewHierarchyProvider; // inherited from NSObject

	reportAccessibilityIdentifier: boolean;

	constructor(o: { dispatchQueueWrapper: SentryDispatchQueueWrapper; applicationProvider: () => SentryApplication; });

	appViewHierarchy(): NSData;

	appViewHierarchyFromMainThread(): NSData;

	initWithDispatchQueueWrapperApplicationProvider(dispatchQueueWrapper: SentryDispatchQueueWrapper, applicationProvider: () => SentryApplication): this;

	saveViewHierarchy(filePath: string): boolean;
}

declare class SentryViewPhotographer extends NSObject implements SentryViewScreenshotProvider {

	static alloc(): SentryViewPhotographer; // inherited from NSObject

	static new(): SentryViewPhotographer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { renderer: SentryViewRenderer; redactOptions: SentryRedactOptions; enableMaskRendererV2: boolean; });

	addIgnoreClasses(classes: NSArray<typeof NSObject> | typeof NSObject[]): void;

	addRedactClasses(classes: NSArray<typeof NSObject> | typeof NSObject[]): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageWithView(view: UIView): UIImage;

	imageWithViewOnComplete(view: UIView, onComplete: (p1: UIImage) => void): void;

	initWithRendererRedactOptionsEnableMaskRendererV2(renderer: SentryViewRenderer, redactOptions: SentryRedactOptions, enableMaskRendererV2: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setIgnoreContainerClass(containerClass: typeof NSObject): void;

	setRedactContainerClass(containerClass: typeof NSObject): void;
}

interface SentryViewRenderer {

	renderWithView(view: UIView): UIImage;
}
declare var SentryViewRenderer: {

	prototype: SentryViewRenderer;
};

declare class SentryViewScreenshotOptions extends NSObject implements SentryRedactOptions {

	static alloc(): SentryViewScreenshotOptions; // inherited from NSObject

	static new(): SentryViewScreenshotOptions; // inherited from NSObject

	enableFastViewRendering: boolean;

	enableViewRendererV2: boolean;

	maskAllImages: boolean;

	maskAllText: boolean;

	maskedViewClasses: NSArray<typeof NSObject>;

	unmaskedViewClasses: NSArray<typeof NSObject>;

	readonly excludedViewClasses: NSSet<string>; // inherited from SentryRedactOptions

	readonly includedViewClasses: NSSet<string>; // inherited from SentryRedactOptions

	constructor(o: { enableViewRendererV2: boolean; enableFastViewRendering: boolean; maskAllText: boolean; maskAllImages: boolean; maskedViewClasses: NSArray<typeof NSObject> | typeof NSObject[]; unmaskedViewClasses: NSArray<typeof NSObject> | typeof NSObject[]; excludedViewClasses: NSSet<string>; includedViewClasses: NSSet<string>; });

	excludeViewTypeFromSubtreeTraversal(viewType: string): void;

	includeViewTypeInSubtreeTraversal(viewType: string): void;

	initWithEnableViewRendererV2EnableFastViewRenderingMaskAllTextMaskAllImagesMaskedViewClassesUnmaskedViewClassesExcludedViewClassesIncludedViewClasses(enableViewRendererV2: boolean, enableFastViewRendering: boolean, maskAllText: boolean, maskAllImages: boolean, maskedViewClasses: NSArray<typeof NSObject> | typeof NSObject[], unmaskedViewClasses: NSArray<typeof NSObject> | typeof NSObject[], excludedViewClasses: NSSet<string>, includedViewClasses: NSSet<string>): this;
}

interface SentryViewScreenshotProvider extends NSObjectProtocol {

	imageWithViewOnComplete(view: UIView, onComplete: (p1: UIImage) => void): void;
}
declare var SentryViewScreenshotProvider: {

	prototype: SentryViewScreenshotProvider;
};

declare class SentryWatchdogTerminationAttributesProcessor extends NSObject {

	static alloc(): SentryWatchdogTerminationAttributesProcessor; // inherited from NSObject

	static new(): SentryWatchdogTerminationAttributesProcessor; // inherited from NSObject

	clear(): void;

	setContext(context: NSDictionary<string, NSDictionary<string, any>>): void;

	setDist(dist: string): void;

	setEnvironment(environment: string): void;

	setExtras(extras: NSDictionary<string, any>): void;

	setFingerprint(fingerprint: NSArray<string> | string[]): void;

	setTags(tags: NSDictionary<string, string>): void;

	setUser(user: SentryUser): void;
}

declare class SentryWatchdogTerminationConstants extends NSObject {

	static alloc(): SentryWatchdogTerminationConstants; // inherited from NSObject

	static new(): SentryWatchdogTerminationConstants; // inherited from NSObject

	static readonly ExceptionType: string;

	static readonly ExceptionValue: string;

	static readonly MechanismType: string;
}

declare class SentryWatchdogTerminationLogic extends NSObject {

	static alloc(): SentryWatchdogTerminationLogic; // inherited from NSObject

	static new(): SentryWatchdogTerminationLogic; // inherited from NSObject

	constructor(o: { options: SentryOptions; crashAdapter: SentryCrashReporter; appStateManager: SentryAppStateManager; });

	initWithOptionsCrashAdapterAppStateManager(options: SentryOptions, crashAdapter: SentryCrashReporter, appStateManager: SentryAppStateManager): this;

	isWatchdogTermination(): boolean;
}

declare class SentryWatchdogTerminationTracker extends NSObject {

	static alloc(): SentryWatchdogTerminationTracker; // inherited from NSObject

	static new(): SentryWatchdogTerminationTracker; // inherited from NSObject

	static readonly ExceptionType: string;

	static readonly ExceptionValue: string;

	static readonly MechanismType: string;

	constructor(o: { options: SentryOptions; watchdogTerminationLogic: SentryWatchdogTerminationLogic; appStateManager: SentryAppStateManager; dispatchQueueWrapper: SentryDispatchQueueWrapper; fileManager: SentryFileManager; scopePersistentStore: SentryScopePersistentStore; });

	initWithOptionsWatchdogTerminationLogicAppStateManagerDispatchQueueWrapperFileManagerScopePersistentStore(options: SentryOptions, watchdogTerminationLogic: SentryWatchdogTerminationLogic, appStateManager: SentryAppStateManager, dispatchQueueWrapper: SentryDispatchQueueWrapper, fileManager: SentryFileManager, scopePersistentStore: SentryScopePersistentStore): this;

	start(): void;

	stop(): void;
}

declare class StandaloneAppStartTransactionHelper extends NSObject {

	static alloc(): StandaloneAppStartTransactionHelper; // inherited from NSObject

	static isStandaloneAppStartTransactionWithOperationOrigin(operation: string, origin: string): boolean;

	static new(): StandaloneAppStartTransactionHelper; // inherited from NSObject
}

declare class SwiftDescriptor extends NSObject {

	static alloc(): SwiftDescriptor; // inherited from NSObject

	static getObjectClassName(object: any): string;

	static getSwiftErrorDescription(error: NSError): string;

	static getViewControllerClassName(object: UIViewController): string;

	static new(): SwiftDescriptor; // inherited from NSObject
}

declare class URLSessionTaskHelper extends NSObject {

	static alloc(): URLSessionTaskHelper; // inherited from NSObject

	static getGraphQLOperationNameFrom(task: NSURLSessionTask): string;

	static new(): URLSessionTaskHelper; // inherited from NSObject
}

declare class UrlSanitized extends NSObject {

	static alloc(): UrlSanitized; // inherited from NSObject

	static new(): UrlSanitized; // inherited from NSObject

	readonly fragment: string;

	readonly query: string;

	readonly queryItems: NSArray<NSURLQueryItem>;

	readonly sanitizedUrl: string;

	constructor(o: { URL: NSURL; });

	initWithURL(url: NSURL): this;
}

declare var defaultMaxBreadcrumbs: number;

declare var kSentrySpanStatusNameAborted: string;

declare var kSentrySpanStatusNameAlreadyExists: string;

declare var kSentrySpanStatusNameCancelled: string;

declare var kSentrySpanStatusNameDataLoss: string;

declare var kSentrySpanStatusNameDeadlineExceeded: string;

declare var kSentrySpanStatusNameFailedPrecondition: string;

declare var kSentrySpanStatusNameInternalError: string;

declare var kSentrySpanStatusNameInvalidArgument: string;

declare var kSentrySpanStatusNameNotFound: string;

declare var kSentrySpanStatusNameOk: string;

declare var kSentrySpanStatusNameOutOfRange: string;

declare var kSentrySpanStatusNamePermissionDenied: string;

declare var kSentrySpanStatusNameResourceExhausted: string;

declare var kSentrySpanStatusNameUnauthenticated: string;

declare var kSentrySpanStatusNameUnavailable: string;

declare var kSentrySpanStatusNameUndefined: string;

declare var kSentrySpanStatusNameUnimplemented: string;

declare var kSentrySpanStatusNameUnknownError: string;

declare function nameForSentrySpanStatus(status: SentrySpanStatus): string;

declare function sentry_finishAndSaveTransaction(): void;

declare function sentry_sanitize_dictionary(dictionary: NSDictionary<any, any>): NSDictionary<any, any>;
