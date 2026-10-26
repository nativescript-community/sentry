/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */


declare module io {
	export module sentry {
		export class AsyncHttpTransportFactory extends io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.AsyncHttpTransportFactory>;
			public create(options: io.sentry.SentryOptions, requestDetails: io.sentry.RequestDetails): io.sentry.transport.ITransport;
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class Attachment {
			public static class: java.lang.Class<io.sentry.Attachment>;
			public constructor(pathname: string, filename: string, contentType: string, addToTransactions: boolean);
			public constructor(pathname: string, filename: string, contentType: string, addToTransactions: boolean, attachmentType: string);
			public constructor(bytes: androidNative.Array<number>, filename: string);
			public static fromViewHierarchy(viewHierarchy: io.sentry.protocol.ViewHierarchy): io.sentry.Attachment;
			public getFilename(): string;
			public getPathname(): string;
			public static fromScreenshot(screenshotBytes: androidNative.Array<number>): io.sentry.Attachment;
			public constructor(bytes: androidNative.Array<number>, filename: string, contentType: string, attachmentType: string, addToTransactions: boolean);
			public constructor(serializable: io.sentry.JsonSerializable, filename: string, contentType: string, attachmentType: string, addToTransactions: boolean);
			public getContentType(): string;
			public static fromTombstone(bytes: androidNative.Array<number>): io.sentry.Attachment;
			public constructor(pathname: string, filename: string, contentType: string, attachmentType: string, addToTransactions: boolean);
			public constructor(pathname: string);
			public static fromThreadDump(bytes: androidNative.Array<number>): io.sentry.Attachment;
			public constructor(pathname: string, filename: string);
			public getBytes(): androidNative.Array<number>;
			public static fromByteProvider(provider: java.util.concurrent.Callable<androidNative.Array<number>>, filename: string, contentType: string, addToTransactions: boolean): io.sentry.Attachment;
			public constructor(byteProvider: java.util.concurrent.Callable<androidNative.Array<number>>, filename: string, contentType: string, attachmentType: string, addToTransactions: boolean);
			public getByteProvider(): java.util.concurrent.Callable<androidNative.Array<number>>;
			public constructor(bytes: androidNative.Array<number>, filename: string, contentType: string);
			public getAttachmentType(): string;
			public constructor(bytes: androidNative.Array<number>, filename: string, contentType: string, addToTransactions: boolean);
			public constructor(pathname: string, filename: string, contentType: string);
			public getSerializable(): io.sentry.JsonSerializable;
		}
	}
}

declare module io {
	export module sentry {
		export class BackfillingEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.BackfillingEventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.BackfillingEventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
				process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
				process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
				process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
				getOrder(): java.lang.Long;
			});
			public constructor();
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class Baggage {
			public static class: java.lang.Class<io.sentry.Baggage>;
			public isShouldFreeze(): boolean;
			public static fromHeader(headerValues: java.util.List<string>, includeThirdPartyValues: boolean, logger: io.sentry.ILogger): io.sentry.Baggage;
			public setValuesFromSamplingDecision(samplingDecision: io.sentry.TracesSamplingDecision): void;
			public setOrgId(orgId: string): void;
			public setSampleRand(sampleRand: java.lang.Double): void;
			public toTraceContext(): io.sentry.TraceContext;
			public getReplayId(): string;
			public static fromEvent(event: io.sentry.SentryBaseEvent, transaction: string, options: io.sentry.SentryOptions): io.sentry.Baggage;
			public forceSetReplayId(replayId: io.sentry.protocol.SentryId): void;
			public getTraceId(): string;
			public getRelease(): string;
			public setReplayId(replayId: string): void;
			public constructor(baggage: io.sentry.Baggage);
			public setSampleRate(sampleRate: java.lang.Double): void;
			public toHeaderString(ignored: string): string;
			public setSampled(sampled: string): void;
			public getSampled(): string;
			public getEnvironment(): string;
			public getUserId(): string;
			public getOrgId(): string;
			public static fromHeader(headerValue: string): io.sentry.Baggage;
			public get(key: string): string;
			public setTransaction(transaction: string): void;
			public isMutable(): boolean;
			public setValuesFromScope(scope: io.sentry.IScope, options: io.sentry.SentryOptions): void;
			public getSampleRate(): java.lang.Double;
			public static fromHeader(headerValue: string, logger: io.sentry.ILogger): io.sentry.Baggage;
			public setTraceId(traceId: string): void;
			public setEnvironment(environment: string): void;
			public getThirdPartyHeader(): string;
			public constructor(logger: io.sentry.ILogger);
			public getPublicKey(): string;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public freeze(): void;
			public static fromHeader(separatorIndex: string, key: boolean, keyDecoded: io.sentry.ILogger): io.sentry.Baggage;
			public constructor(keyValues: java.util.concurrent.ConcurrentHashMap<string,string>, sampleRate: java.lang.Double, sampleRand: java.lang.Double, thirdPartyHeader: string, isMutable: boolean, shouldFreeze: boolean, logger: io.sentry.ILogger);
			public setPublicKey(publicKey: string): void;
			public static fromHeader(headerValues: java.util.List<string>): io.sentry.Baggage;
			public setUserId(userId: string): void;
			public set(key: string, value: string): void;
			public forceSetSampleRate(sampleRate: java.lang.Double): void;
			public setValuesFromTransaction(traceId: io.sentry.protocol.SentryId, replayId: io.sentry.protocol.SentryId, sentryOptions: io.sentry.SentryOptions, samplingDecision: io.sentry.TracesSamplingDecision, transactionName: string, transactionNameSource: io.sentry.protocol.TransactionNameSource): void;
			public static fromHeader(headerValues: java.util.List<string>, logger: io.sentry.ILogger): io.sentry.Baggage;
			public getSampleRand(): java.lang.Double;
			public setRelease(release: string): void;
		}
		export module Baggage {
			export class DSCKeys {
				public static class: java.lang.Class<io.sentry.Baggage.DSCKeys>;
				public static TRACE_ID: string = "sentry-trace_id";
				public static PUBLIC_KEY: string = "sentry-public_key";
				public static RELEASE: string = "sentry-release";
				public static USER_ID: string = "sentry-user_id";
				public static ENVIRONMENT: string = "sentry-environment";
				public static TRANSACTION: string = "sentry-transaction";
				public static SAMPLE_RATE: string = "sentry-sample_rate";
				public static SAMPLE_RAND: string = "sentry-sample_rand";
				public static SAMPLED: string = "sentry-sampled";
				public static REPLAY_ID: string = "sentry-replay_id";
				public static ORG_ID: string = "sentry-org_id";
				public static ALL: java.util.List<string>;
				public constructor();
			}
			export class DecimalFormatterThreadLocal extends java.lang.ThreadLocal<java.text.DecimalFormat> {
				public static class: java.lang.Class<io.sentry.Baggage.DecimalFormatterThreadLocal>;
				public initialValue(): java.text.DecimalFormat;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class BaggageHeader {
			public static class: java.lang.Class<io.sentry.BaggageHeader>;
			public static BAGGAGE_HEADER: string = "baggage";
			public static fromBaggageAndOutgoingHeader(baggage: io.sentry.Baggage, outgoingBaggageHeaders: java.util.List<string>): io.sentry.BaggageHeader;
			public getName(): string;
			public constructor(value: string);
			public getValue(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class Breadcrumb extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Breadcrumb>;
			public static graphqlDataLoader(key: java.lang.Iterable<any>, keys: java.lang.Class<any>, keyType: java.lang.Class<any>, valueType: string): io.sentry.Breadcrumb;
			public getData(key: string): any;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static fromMap(deserializedDate: java.util.Map<string,any>, dataEntry: io.sentry.SentryOptions): io.sentry.Breadcrumb;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getOrigin(): string;
			public static ui(category: string, message: string): io.sentry.Breadcrumb;
			public static userInteraction(subCategory: string, viewId: string, viewClass: string, additionalData: java.util.Map<string,any>): io.sentry.Breadcrumb;
			public getMessage(): string;
			public getData(): java.util.Map<string,any>;
			public setData(key: string, value: any): void;
			public static graphqlOperation(operationName: string, operationType: string, operationId: string): io.sentry.Breadcrumb;
			public static graphqlDataFetcher(path: string, field: string, type: string, objectType: string): io.sentry.Breadcrumb;
			public constructor(timestamp: number);
			public static userInteraction(entry: string, subCategory: string, viewId: string, viewClass: string, viewTag: java.util.Map<string,any>): io.sentry.Breadcrumb;
			public removeData(key: string): void;
			public setCategory(category: string): void;
			public static http(url: string, method: string): io.sentry.Breadcrumb;
			public getTimestamp(): java.util.Date;
			public static query(message: string): io.sentry.Breadcrumb;
			public static user(category: string, message: string): io.sentry.Breadcrumb;
			public static debug(message: string): io.sentry.Breadcrumb;
			public static userInteraction(subCategory: string, viewId: string, viewClass: string): io.sentry.Breadcrumb;
			public setMessage(message: string): void;
			public static navigation(from: string, to: string): io.sentry.Breadcrumb;
			public getType(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public setOrigin(origin: string): void;
			public constructor(message: string);
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public constructor(timestamp: java.util.Date);
			public static error(message: string): io.sentry.Breadcrumb;
			public compareTo(o: io.sentry.Breadcrumb): number;
			public static http(url: string, method: string, code: java.lang.Integer): io.sentry.Breadcrumb;
			public constructor();
			public setLevel(level: io.sentry.SentryLevel): void;
			public static info(message: string): io.sentry.Breadcrumb;
			public setType(type: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public equals(o: any): boolean;
			public getLevel(): io.sentry.SentryLevel;
			public static transaction(message: string): io.sentry.Breadcrumb;
			public getCategory(): string;
			public hashCode(): number;
		}
		export module Breadcrumb {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.Breadcrumb.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(deserializedData: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.Breadcrumb;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.Breadcrumb.JsonKeys>;
				public static TIMESTAMP: string = "timestamp";
				public static MESSAGE: string = "message";
				public static TYPE: string = "type";
				public static DATA: string = "data";
				public static CATEGORY: string = "category";
				public static ORIGIN: string = "origin";
				public static LEVEL: string = "level";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class BuildConfig {
			public static class: java.lang.Class<io.sentry.BuildConfig>;
			public static SENTRY_JAVA_SDK_NAME: string = "sentry.java";
			public static VERSION_NAME: string = "8.52.0";
		}
	}
}

declare module io {
	export module sentry {
		export class CancelledFuture<T>  extends java.util.concurrent.Future<any> {
			public static class: java.lang.Class<io.sentry.CancelledFuture<any>>;
			public cancel(mayInterruptIfRunning: boolean): boolean;
			public get(): any;
			public isCancelled(): boolean;
			public isDone(): boolean;
			public get(timeout: number, unit: java.util.concurrent.TimeUnit): any;
		}
	}
}

declare module io {
	export module sentry {
		export class CheckIn implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.CheckIn>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getCheckInId(): io.sentry.protocol.SentryId;
			public setMonitorConfig(monitorConfig: io.sentry.MonitorConfig): void;
			public getMonitorSlug(): string;
			public setMonitorSlug(monitorSlug: string): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(monitorSlug: string, status: io.sentry.CheckInStatus);
			public constructor(checkInId: io.sentry.protocol.SentryId, monitorSlug: string, status: string);
			public getStatus(): string;
			public setEnvironment(environment: string): void;
			public getDuration(): java.lang.Double;
			public setStatus(status: io.sentry.CheckInStatus): void;
			public getRelease(): string;
			public getMonitorConfig(): io.sentry.MonitorConfig;
			public getUnknown(): java.util.Map<string,any>;
			public constructor(id: io.sentry.protocol.SentryId, monitorSlug: string, status: io.sentry.CheckInStatus);
			public setDuration(duration: java.lang.Double): void;
			public setStatus(status: string): void;
			public getEnvironment(): string;
			public getContexts(): io.sentry.MonitorContexts;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public setRelease(release: string): void;
		}
		export module CheckIn {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.CheckIn> {
				public static class: java.lang.Class<io.sentry.CheckIn.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.CheckIn;
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.CheckIn.JsonKeys>;
				public static CHECK_IN_ID: string = "check_in_id";
				public static MONITOR_SLUG: string = "monitor_slug";
				public static STATUS: string = "status";
				public static DURATION: string = "duration";
				public static RELEASE: string = "release";
				public static ENVIRONMENT: string = "environment";
				public static CONTEXTS: string = "contexts";
				public static MONITOR_CONFIG: string = "monitor_config";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class CheckInStatus {
			public static class: java.lang.Class<io.sentry.CheckInStatus>;
			public static IN_PROGRESS: io.sentry.CheckInStatus;
			public static OK: io.sentry.CheckInStatus;
			public static ERROR: io.sentry.CheckInStatus;
			public static values(): androidNative.Array<io.sentry.CheckInStatus>;
			public static valueOf(name: string): io.sentry.CheckInStatus;
			public apiName(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<io.sentry.CircularFifoQueue<any>>;
			public isFull(): boolean;
			public add(element: any): boolean;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public poll(): any;
			public constructor(coll: java.util.Collection<any>);
			public isAtFullCapacity(): boolean;
			public constructor();
			public maxSize(): number;
			public peek(): any;
			public remove(): any;
			public get(index: number): any;
			public offer(element: any): boolean;
			public element(): any;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class CombinedContextsView extends io.sentry.protocol.Contexts {
			public static class: java.lang.Class<io.sentry.CombinedContextsView>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public set(key: string, value: any): any;
			public setRuntime(runtime: io.sentry.protocol.SentryRuntime): void;
			public setApp(app: io.sentry.protocol.App): void;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public putAll(m: java.util.Map<any,any>): void;
			public getRuntime(): io.sentry.protocol.SentryRuntime;
			public setTrace(traceContext: io.sentry.SpanContext): void;
			public withResponse(callback: io.sentry.util.HintUtils.SentryConsumer<io.sentry.protocol.Response>): void;
			public setResponse(response: io.sentry.protocol.Response): void;
			public setSpring(spring: io.sentry.protocol.Spring): void;
			public setFeatureFlags(spring: io.sentry.protocol.FeatureFlags): void;
			public constructor(entry: io.sentry.protocol.Contexts);
			public get(key: any): any;
			public putAll(contexts: io.sentry.protocol.Contexts): void;
			public setDevice(device: io.sentry.protocol.Device): void;
			public size(): number;
			public isEmpty(): boolean;
			public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
			public setBrowser(browser: io.sentry.protocol.Browser): void;
			public constructor(globalContexts: io.sentry.protocol.Contexts, isolationContexts: io.sentry.protocol.Contexts, currentContexts: io.sentry.protocol.Contexts, defaultScopeType: io.sentry.ScopeType);
			public getBrowser(): io.sentry.protocol.Browser;
			public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
			public constructor();
			public setGpu(gpu: io.sentry.protocol.Gpu): void;
			public getSpring(): io.sentry.protocol.Spring;
			public getApp(): io.sentry.protocol.App;
			public getTrace(): io.sentry.SpanContext;
			public put(key: string, value: any): any;
			public getDevice(): io.sentry.protocol.Device;
			public getGpu(): io.sentry.protocol.Gpu;
			public getResponse(): io.sentry.protocol.Response;
			public setOperatingSystem(operatingSystem: io.sentry.protocol.OperatingSystem): void;
			public keys(): java.util.Enumeration<string>;
		}
	}
}

declare module io {
	export module sentry {
		export class CombinedScopeView extends io.sentry.IScope {
			public static class: java.lang.Class<io.sentry.CombinedScopeView>;
			public setContexts(param0: string, param1: string): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public clearTransaction(): void;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getOptions(): io.sentry.SentryOptions;
			public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public clear(): void;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public setScreen(screen: string): void;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public removeAttribute(key: string): void;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public endSession(): io.sentry.Session;
			public clearSession(): void;
			public removeContexts(param0: string): void;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setContexts(key: string, value: java.lang.Boolean): void;
			public setTag(key: string, value: string): void;
			public setTransaction(transaction: string): void;
			public getTransaction(): io.sentry.ITransaction;
			public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public replaceOptions(options: io.sentry.SentryOptions): void;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public setContexts(param0: string, param1: any): void;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(key: string, value: any): void;
			public addEventProcessor(eventProcessor: io.sentry.EventProcessor): void;
			public setPropagationContext(propagationContext: io.sentry.PropagationContext): void;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public setContexts(key: string, value: androidNative.Array<any>): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public replaceOptions(param0: io.sentry.SentryOptions): void;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public getUser(): io.sentry.protocol.User;
			public setTransaction(transaction: io.sentry.ITransaction): void;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public startSession(): io.sentry.Scope.SessionPair;
			public removeExtra(key: string): void;
			public setContexts(key: string, value: java.lang.Character): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public setLastEventId(param0: io.sentry.protocol.SentryId): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public withTransaction(callback: io.sentry.Scope.IWithTransaction): void;
			public setLastEventId(lastEventId: io.sentry.protocol.SentryId): void;
			public getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			public setExtra(key: string, value: string): void;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public constructor(globalScope: io.sentry.IScope, isolationScope: io.sentry.IScope, scope: io.sentry.IScope);
			public setContexts(key: string, value: string): void;
			public setRequest(request: io.sentry.protocol.Request): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public assignTraceContext(param0: io.sentry.SentryEvent): void;
			public removeAttribute(param0: string): void;
			public getSession(): io.sentry.Session;
			public getScreen(): string;
			public getEventProcessorsWithOrder(): java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
			public bindClient(client: io.sentry.ISentryClient): void;
			public getTags(): java.util.Map<string,string>;
			public setContexts(key: string, value: java.util.Collection<any>): void;
			public addAttachment(attachment: io.sentry.Attachment): void;
			public setUser(user: io.sentry.protocol.User): void;
			public assignTraceContext(event: io.sentry.SentryEvent): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public clearAttachments(): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public withPropagationContext(callback: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public getReplayId(): io.sentry.protocol.SentryId;
			public setTransaction(param0: string): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public setAttribute(param0: string, param1: any): void;
			public setReplayId(replayId: io.sentry.protocol.SentryId): void;
			public withSession(sessionCallback: io.sentry.Scope.IWithSession): io.sentry.Session;
			public getLevel(): io.sentry.SentryLevel;
			public removeContexts(key: string): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getClient(): io.sentry.ISentryClient;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public setContexts(key: string, value: java.lang.Number): void;
			public clearFeatureFlags(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class CompositePerformanceCollector {
			public static class: java.lang.Class<io.sentry.CompositePerformanceCollector>;
			/**
			 * Constructs a new instance of the io.sentry.CompositePerformanceCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				start(param0: io.sentry.ITransaction): void;
				start(param0: string): void;
				onSpanStarted(param0: io.sentry.ISpan): void;
				onSpanFinished(param0: io.sentry.ISpan): void;
				stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
				stop(param0: string): java.util.List<io.sentry.PerformanceCollectionData>;
				close(): void;
			});
			public constructor();
			public onSpanFinished(param0: io.sentry.ISpan): void;
			public start(param0: string): void;
			public stop(param0: string): java.util.List<io.sentry.PerformanceCollectionData>;
			public start(param0: io.sentry.ITransaction): void;
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public close(): void;
			public onSpanStarted(param0: io.sentry.ISpan): void;
		}
	}
}

declare module io {
	export module sentry {
		export class CustomSamplingContext {
			public static class: java.lang.Class<io.sentry.CustomSamplingContext>;
			public get(key: string): any;
			public getData(): java.util.Map<string,any>;
			public constructor();
			public set(key: string, value: any): void;
		}
	}
}

declare module io {
	export module sentry {
		export class DataCategory {
			public static class: java.lang.Class<io.sentry.DataCategory>;
			public static All: io.sentry.DataCategory;
			public static Default: io.sentry.DataCategory;
			public static Error: io.sentry.DataCategory;
			public static Feedback: io.sentry.DataCategory;
			public static Session: io.sentry.DataCategory;
			public static Attachment: io.sentry.DataCategory;
			public static LogItem: io.sentry.DataCategory;
			public static LogByte: io.sentry.DataCategory;
			public static TraceMetric: io.sentry.DataCategory;
			public static TraceMetricByte: io.sentry.DataCategory;
			public static Monitor: io.sentry.DataCategory;
			public static Profile: io.sentry.DataCategory;
			public static ProfileChunkUi: io.sentry.DataCategory;
			public static ProfileChunk: io.sentry.DataCategory;
			public static Transaction: io.sentry.DataCategory;
			public static Replay: io.sentry.DataCategory;
			public static Span: io.sentry.DataCategory;
			public static Security: io.sentry.DataCategory;
			public static UserReport: io.sentry.DataCategory;
			public static Unknown: io.sentry.DataCategory;
			public static valueOf(name: string): io.sentry.DataCategory;
			public static values(): androidNative.Array<io.sentry.DataCategory>;
			public getCategory(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class DateUtils {
			public static class: java.lang.Class<io.sentry.DateUtils>;
			public static getCurrentDateTime(): java.util.Date;
			public static getTimestamp(date: java.util.Date): string;
			public static nanosToMillis(nanos: number): number;
			public static getDateTime(millis: number): java.util.Date;
			public static millisToSeconds(millis: number): number;
			public static millisToNanos(millis: number): number;
			public static nanosToSeconds(nanos: number): number;
			public static toUtilDate(sentryDate: io.sentry.SentryDate): java.util.Date;
			public static getDateTimeWithMillisPrecision(e: string): java.util.Date;
			public static dateToSeconds(date: java.util.Date): number;
			public static getDateTime(e: string): java.util.Date;
			public static toUtilDateNotNull(sentryDate: io.sentry.SentryDate): java.util.Date;
			public static secondsToNanos(seconds: number): number;
			public static doubleToBigDecimal(value: number): java.math.BigDecimal;
			public static nanosToDate(nanos: number): java.util.Date;
		}
	}
}

declare module io {
	export module sentry {
		export class DeduplicateMultithreadedEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DeduplicateMultithreadedEventProcessor>;
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public constructor(options: io.sentry.SentryOptions);
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class DefaultCompositePerformanceCollector extends io.sentry.CompositePerformanceCollector {
			public static class: java.lang.Class<io.sentry.DefaultCompositePerformanceCollector>;
			public onSpanFinished(param0: io.sentry.ISpan): void;
			public start(timerTask: string): void;
			public stop(id: string): java.util.List<io.sentry.PerformanceCollectionData>;
			public start(param0: string): void;
			public start(param0: io.sentry.ITransaction): void;
			public constructor(this_: io.sentry.SentryOptions);
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public onSpanFinished(this_: io.sentry.ISpan): void;
			public stop(this_: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public stop(param0: string): java.util.List<io.sentry.PerformanceCollectionData>;
			public onSpanStarted(this_: io.sentry.ISpan): void;
			public close(): void;
			public start(this_: io.sentry.ITransaction): void;
			public onSpanStarted(param0: io.sentry.ISpan): void;
		}
		export module DefaultCompositePerformanceCollector {
			export class CompositeData {
				public static class: java.lang.Class<io.sentry.DefaultCompositePerformanceCollector.CompositeData>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class DefaultScopesStorage extends io.sentry.IScopesStorage {
			public static class: java.lang.Class<io.sentry.DefaultScopesStorage>;
			public set(param0: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public init(): void;
			public constructor();
			public close(): void;
			public set(scopes: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public get(): io.sentry.IScopes;
		}
		export module DefaultScopesStorage {
			export class DefaultScopesLifecycleToken extends io.sentry.ISentryLifecycleToken {
				public static class: java.lang.Class<io.sentry.DefaultScopesStorage.DefaultScopesLifecycleToken>;
				public close(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class DefaultSpanFactory extends io.sentry.ISpanFactory {
			public static class: java.lang.Class<io.sentry.DefaultSpanFactory>;
			public createTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.IScopes, param2: io.sentry.TransactionOptions, param3: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
			public createSpan(param0: io.sentry.IScopes, param1: io.sentry.SpanOptions, param2: io.sentry.SpanContext, param3: io.sentry.ISpan): io.sentry.ISpan;
			public createSpan(scopes: io.sentry.IScopes, spanOptions: io.sentry.SpanOptions, spanContext: io.sentry.SpanContext, parentSpan: io.sentry.ISpan): io.sentry.ISpan;
			public constructor();
			public createTransaction(context: io.sentry.TransactionContext, scopes: io.sentry.IScopes, transactionOptions: io.sentry.TransactionOptions, compositePerformanceCollector: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class DefaultVersionDetector extends io.sentry.IVersionDetector {
			public static class: java.lang.Class<io.sentry.DefaultVersionDetector>;
			public checkForMixedVersions(): boolean;
			public constructor(options: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class DiagnosticLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.DiagnosticLogger>;
			public constructor(options: io.sentry.SentryOptions, logger: io.sentry.ILogger);
			public log(level: io.sentry.SentryLevel, message: string, throwable: java.lang.Throwable): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public log(level: io.sentry.SentryLevel, message: string, args: androidNative.Array<any>): void;
			public log(level: io.sentry.SentryLevel, throwable: java.lang.Throwable, message: string, args: androidNative.Array<any>): void;
			public getLogger(): io.sentry.ILogger;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
			public isEnabled(level: io.sentry.SentryLevel): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export abstract class DirectoryProcessor {
			public static class: java.lang.Class<io.sentry.DirectoryProcessor>;
			public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
			public processDirectory(rateLimiter: java.io.File): void;
			public isRelevantFileName(param0: string): boolean;
		}
		export module DirectoryProcessor {
			export class SendCachedEnvelopeHint implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable, io.sentry.hints.Enqueable {
				public static class: java.lang.Class<io.sentry.DirectoryProcessor.SendCachedEnvelopeHint>;
				public isRetry(): boolean;
				public setRetry(retry: boolean): void;
				public setResult(param0: boolean): void;
				public setRetry(param0: boolean): void;
				public isSuccess(): boolean;
				public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger, filePath: string, processedEnvelopes: java.util.Queue<string>);
				public setResult(succeeded: boolean): void;
				public markEnqueued(): void;
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class DisabledQueue<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<io.sentry.DisabledQueue<any>>;
			public add(element: any): boolean;
			public peek(): any;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public remove(): any;
			public poll(): any;
			public constructor();
			public offer(element: any): boolean;
			public element(): any;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class Dsn {
			public static class: java.lang.Class<io.sentry.Dsn>;
			public getSecretKey(): string;
			public getPublicKey(): string;
			public getPath(): string;
			public getProjectId(): string;
			public getOrgId(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class DsnUtil {
			public static class: java.lang.Class<io.sentry.DsnUtil>;
			public static urlContainsDsnHost(options: io.sentry.SentryOptions, url: string): boolean;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class DuplicateEventDetectionEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DuplicateEventDetectionEventProcessor>;
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public constructor(options: io.sentry.SentryOptions);
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public process(this_: io.sentry.SentryEvent, event: io.sentry.Hint): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeReader extends io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.EnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public constructor(serializer: io.sentry.ISerializer);
			public read(i: java.io.InputStream): io.sentry.SentryEnvelope;
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.EnvelopeSender>;
			public processEnvelopeFile(path: string, hint: io.sentry.Hint): void;
			public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
			public isRelevantFileName(fileName: string): boolean;
			public constructor(scopes: io.sentry.IScopes, serializer: io.sentry.ISerializer, logger: io.sentry.ILogger, flushTimeoutMillis: number, maxQueueSize: number);
			public processFile(is: java.io.File, e: io.sentry.Hint): void;
		}
	}
}

declare module io {
	export module sentry {
		export class EventProcessor {
			public static class: java.lang.Class<io.sentry.EventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
				process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
				process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
				process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
				getOrder(): java.lang.Long;
			});
			public constructor();
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class ExperimentalOptions {
			public static class: java.lang.Class<io.sentry.ExperimentalOptions>;
			public constructor(empty: boolean, sdkVersion: io.sentry.protocol.SdkVersion);
		}
	}
}

declare module io {
	export module sentry {
		export class ExternalOptions {
			public static class: java.lang.Class<io.sentry.ExternalOptions>;
			public setProfileLifecycle(profileLifecycle: io.sentry.ProfileLifecycle): void;
			public addBundleId(bundleId: string): void;
			public setOrgId(orgId: string): void;
			public static from(tag: io.sentry.config.PropertiesProvider, inAppInclude: io.sentry.ILogger): io.sentry.ExternalOptions;
			public addTracePropagationTarget(tracePropagationTarget: string): void;
			public isEnableSpotlight(): java.lang.Boolean;
			public setEnableUncaughtExceptionHandler(enableUncaughtExceptionHandler: java.lang.Boolean): void;
			public getRelease(): string;
			public getEnableDeduplication(): java.lang.Boolean;
			public getProfilingTracesDirPath(): string;
			public setSendClientReports(sendClientReports: java.lang.Boolean): void;
			public getSessionFlushTimeoutMillis(): java.lang.Long;
			public setProxy(proxy: io.sentry.SentryOptions.Proxy): void;
			public setProfilingTracesDirPath(profilingTracesDirPath: string): void;
			public getProguardUuid(): string;
			public constructor();
			public getDist(): string;
			public getDebug(): java.lang.Boolean;
			public getIgnoredCheckIns(): java.util.List<string>;
			public getBundleIds(): java.util.Set<string>;
			public getServerName(): string;
			public getIdleTimeout(): java.lang.Long;
			public setRelease(release: string): void;
			public setStrictTraceContinuation(strictTraceContinuation: java.lang.Boolean): void;
			public setDsn(dsn: string): void;
			public setEnabled(enabled: java.lang.Boolean): void;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public setEnableQueueTracing(enableQueueTracing: java.lang.Boolean): void;
			public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
			public setPrintUncaughtStackTrace(printUncaughtStackTrace: java.lang.Boolean): void;
			public setEnableMetrics(enableMetrics: java.lang.Boolean): void;
			public setSendDefaultPii(sendDefaultPii: java.lang.Boolean): void;
			public setTag(key: string, value: string): void;
			public getOrgId(): string;
			public setIgnoredCheckIns(ignoredCheckIns: java.util.List<string>): void;
			public setTracesSampleRate(tracesSampleRate: java.lang.Double): void;
			public getDsn(): string;
			public setDist(dist: string): void;
			public isEnableQueueTracing(): java.lang.Boolean;
			public getSampleRate(): java.lang.Double;
			public setServerName(serverName: string): void;
			public getIgnoredTransactions(): java.util.List<string>;
			public getIgnoredErrors(): java.util.List<string>;
			public getProfileLifecycle(): io.sentry.ProfileLifecycle;
			public addIgnoredExceptionForType(exceptionType: java.lang.Class<any>): void;
			public setEnableBackpressureHandling(enableBackpressureHandling: java.lang.Boolean): void;
			public setIdleTimeout(idleTimeout: java.lang.Long): void;
			public isEnableMetrics(): java.lang.Boolean;
			public isEnablePrettySerializationOutput(): java.lang.Boolean;
			public getPrintUncaughtStackTrace(): java.lang.Boolean;
			public setEnableLogs(enableLogs: java.lang.Boolean): void;
			public setEnableSpotlight(enableSpotlight: java.lang.Boolean): void;
			public setMaxRequestBodySize(maxRequestBodySize: io.sentry.SentryOptions.RequestSize): void;
			public setEnableCacheTracing(enableCacheTracing: java.lang.Boolean): void;
			public setCaptureOpenTelemetryEvents(captureOpenTelemetryEvents: java.lang.Boolean): void;
			public getContextTags(): java.util.List<string>;
			public getInAppIncludes(): java.util.List<string>;
			public getSpotlightConnectionUrl(): string;
			public setSampleRate(sampleRate: java.lang.Double): void;
			public isCaptureOpenTelemetryEvents(): java.lang.Boolean;
			public setProfilesSampleRate(profilesSampleRate: java.lang.Double): void;
			public getProfileSessionSampleRate(): java.lang.Double;
			public getProfilesSampleRate(): java.lang.Double;
			public isEnabled(): java.lang.Boolean;
			public addContextTag(contextTag: string): void;
			public getSendClientReports(): java.lang.Boolean;
			public setEnvironment(environment: string): void;
			public setEnableDeduplication(enableDeduplication: java.lang.Boolean): void;
			public isEnableDatabaseTransactionTracing(): java.lang.Boolean;
			public setIgnoredErrors(ignoredErrors: java.util.List<string>): void;
			public setGlobalHubMode(globalHubMode: java.lang.Boolean): void;
			public isStrictTraceContinuation(): java.lang.Boolean;
			public setDebug(debug: java.lang.Boolean): void;
			public setIgnoredTransactions(ignoredTransactions: java.util.List<string>): void;
			public isForceInit(): java.lang.Boolean;
			public isSendModules(): java.lang.Boolean;
			public setEnableDatabaseTransactionTracing(enableDatabaseTransactionTracing: java.lang.Boolean): void;
			public isSendDefaultPii(): java.lang.Boolean;
			public getTracePropagationTargets(): java.util.List<string>;
			public setShutdownTimeoutMillis(shutdownTimeoutMillis: java.lang.Long): void;
			public setForceInit(forceInit: java.lang.Boolean): void;
			public setProguardUuid(proguardUuid: string): void;
			public getTracesSampleRate(): java.lang.Double;
			public setCron(cron: io.sentry.SentryOptions.Cron): void;
			public getTags(): java.util.Map<string,string>;
			public getInAppExcludes(): java.util.List<string>;
			public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
			public getCron(): io.sentry.SentryOptions.Cron;
			public getEnvironment(): string;
			public addInAppExclude(exclude: string): void;
			public isGlobalHubMode(): java.lang.Boolean;
			public setEnablePrettySerializationOutput(enablePrettySerializationOutput: java.lang.Boolean): void;
			public setProfileSessionSampleRate(profileSessionSampleRate: java.lang.Double): void;
			public getShutdownTimeoutMillis(): java.lang.Long;
			public addInAppInclude(include: string): void;
			public setSendModules(sendModules: java.lang.Boolean): void;
			public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
			public setSessionFlushTimeoutMillis(sessionFlushTimeoutMillis: java.lang.Long): void;
			public setSpotlightConnectionUrl(spotlightConnectionUrl: string): void;
			public isEnableBackpressureHandling(): java.lang.Boolean;
			public isEnableCacheTracing(): java.lang.Boolean;
			public isEnableLogs(): java.lang.Boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class FeedbackApi extends io.sentry.IFeedbackApi {
			public static class: java.lang.Class<io.sentry.FeedbackApi>;
			public show(): void;
			public show(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public capture(param0: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public show(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public show(associatedEventId: io.sentry.protocol.SentryId, configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public capture(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public show(param0: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class FilterString {
			public static class: java.lang.Class<io.sentry.FilterString>;
			public equals(o: any): boolean;
			public getFilterString(): string;
			public constructor(this_: string);
			public matches(input: string): boolean;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class FullyDisplayedReporter {
			public static class: java.lang.Class<io.sentry.FullyDisplayedReporter>;
			public registerFullyDrawnListener(listener: io.sentry.FullyDisplayedReporter.FullyDisplayedReporterListener): void;
			public reportFullyDrawn(): void;
			public static getInstance(): io.sentry.FullyDisplayedReporter;
		}
		export module FullyDisplayedReporter {
			export class FullyDisplayedReporterListener {
				public static class: java.lang.Class<io.sentry.FullyDisplayedReporter.FullyDisplayedReporterListener>;
				/**
				 * Constructs a new instance of the io.sentry.FullyDisplayedReporter$FullyDisplayedReporterListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFullyDrawn(): void;
				});
				public constructor();
				public onFullyDrawn(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Hint {
			public static class: java.lang.Class<io.sentry.Hint>;
			public getAs(ignored: string, this_: java.lang.Class<any>): any;
			public clear(): void;
			public static withAttachment(attachment: io.sentry.Attachment): io.sentry.Hint;
			public static withAttachments(attachments: java.util.List<io.sentry.Attachment>): io.sentry.Hint;
			public getThreadDump(): io.sentry.Attachment;
			public clearAttachments(): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public getViewHierarchy(): io.sentry.Attachment;
			public getTombstone(): io.sentry.Attachment;
			public get(this_: string): any;
			public constructor();
			public remove(this_: string): void;
			public setScreenshot(screenshot: io.sentry.Attachment): void;
			public setTombstone(tombstone: io.sentry.Attachment): void;
			public replaceAttachments(attachments: java.util.List<io.sentry.Attachment>): void;
			public set(this_: string, name: any): void;
			public setReplayRecording(replayRecording: io.sentry.ReplayRecording): void;
			public getReplayRecording(): io.sentry.ReplayRecording;
			public addAttachments(attachments: java.util.List<io.sentry.Attachment>): void;
			public setThreadDump(threadDump: io.sentry.Attachment): void;
			public addAttachment(attachment: io.sentry.Attachment): void;
			public getScreenshot(): io.sentry.Attachment;
			public setViewHierarchy(viewHierarchy: io.sentry.Attachment): void;
		}
	}
}

declare module io {
	export module sentry {
		export class HostnameCache {
			public static class: java.lang.Class<io.sentry.HostnameCache>;
			public static getInstance(): io.sentry.HostnameCache;
			public getHostname(): string;
		}
		export module HostnameCache {
			export class HostnameCacheThreadFactory {
				public static class: java.lang.Class<io.sentry.HostnameCache.HostnameCacheThreadFactory>;
				public newThread(r: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class HttpStatusCodeRange {
			public static class: java.lang.Class<io.sentry.HttpStatusCodeRange>;
			public static DEFAULT_MIN: number = 500;
			public static DEFAULT_MAX: number = 599;
			public isInRange(statusCode: number): boolean;
			public constructor(min: number, max: number);
			public constructor(statusCode: number);
		}
	}
}

declare module io {
	export module sentry {
		export class HubAdapter extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.HubAdapter>;
			public captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public captureReplay(replay: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public static getInstance(): io.sentry.HubAdapter;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(key: string, value: string): void;
			public withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public withScope(callback: io.sentry.ScopeCallback): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public captureProfileChunk(profilingContinuousData: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public close(isRestarting: boolean): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public flush(timeoutMillis: number): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class HubScopesWrapper extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.HubScopesWrapper>;
			public captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public captureReplay(replay: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getScopes(): io.sentry.IScopes;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(key: string, value: string): void;
			public withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public withScope(callback: io.sentry.ScopeCallback): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public close(isRestarting: boolean): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public constructor(scopes: io.sentry.IScopes);
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public flush(timeoutMillis: number): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureProfileChunk(profileChunk: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class IAppStartExtender {
			public static class: java.lang.Class<io.sentry.IAppStartExtender>;
			/**
			 * Constructs a new instance of the io.sentry.IAppStartExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				extendAppStart(): void;
				finishExtendedAppStart(): void;
				getExtendedAppStartSpan(): io.sentry.ISpan;
			});
			public constructor();
			public getExtendedAppStartSpan(): io.sentry.ISpan;
			public extendAppStart(): void;
			public finishExtendedAppStart(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IConnectionStatusProvider {
			public static class: java.lang.Class<io.sentry.IConnectionStatusProvider>;
			/**
			 * Constructs a new instance of the io.sentry.IConnectionStatusProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
				getConnectionType(): string;
				addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
				removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
			});
			public constructor();
			public removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
			public getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
			public getConnectionType(): string;
			public addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
		}
		export module IConnectionStatusProvider {
			export class ConnectionStatus {
				public static class: java.lang.Class<io.sentry.IConnectionStatusProvider.ConnectionStatus>;
				public static UNKNOWN: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static CONNECTED: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static DISCONNECTED: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static NO_PERMISSION: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static valueOf(name: string): io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static values(): androidNative.Array<io.sentry.IConnectionStatusProvider.ConnectionStatus>;
			}
			export class IConnectionStatusObserver {
				public static class: java.lang.Class<io.sentry.IConnectionStatusProvider.IConnectionStatusObserver>;
				/**
				 * Constructs a new instance of the io.sentry.IConnectionStatusProvider$IConnectionStatusObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
				});
				public constructor();
				public onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class IContinuousProfiler {
			public static class: java.lang.Class<io.sentry.IContinuousProfiler>;
			/**
			 * Constructs a new instance of the io.sentry.IContinuousProfiler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isRunning(): boolean;
				startProfiler(param0: io.sentry.ProfileLifecycle, param1: io.sentry.TracesSampler): void;
				stopProfiler(param0: io.sentry.ProfileLifecycle): void;
				close(param0: boolean): void;
				reevaluateSampling(): void;
				getProfilerId(): io.sentry.protocol.SentryId;
				getChunkId(): io.sentry.protocol.SentryId;
			});
			public constructor();
			public reevaluateSampling(): void;
			public getProfilerId(): io.sentry.protocol.SentryId;
			public getChunkId(): io.sentry.protocol.SentryId;
			public stopProfiler(param0: io.sentry.ProfileLifecycle): void;
			public close(param0: boolean): void;
			public startProfiler(param0: io.sentry.ProfileLifecycle, param1: io.sentry.TracesSampler): void;
			public isRunning(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class IDistributionApi {
			public static class: java.lang.Class<io.sentry.IDistributionApi>;
			/**
			 * Constructs a new instance of the io.sentry.IDistributionApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				checkForUpdateBlocking(): io.sentry.UpdateStatus;
				checkForUpdate(): java.util.concurrent.Future<io.sentry.UpdateStatus>;
				downloadUpdate(param0: io.sentry.UpdateInfo): void;
				isEnabled(): boolean;
			});
			public constructor();
			public isEnabled(): boolean;
			public checkForUpdate(): java.util.concurrent.Future<io.sentry.UpdateStatus>;
			public downloadUpdate(param0: io.sentry.UpdateInfo): void;
			public checkForUpdateBlocking(): io.sentry.UpdateStatus;
		}
	}
}

declare module io {
	export module sentry {
		export class IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.IEnvelopeReader>;
			/**
			 * Constructs a new instance of the io.sentry.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			});
			public constructor();
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
		}
	}
}

declare module io {
	export module sentry {
		export class IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.IEnvelopeSender>;
			/**
			 * Constructs a new instance of the io.sentry.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
			});
			public constructor();
			public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IFeedbackApi {
			public static class: java.lang.Class<io.sentry.IFeedbackApi>;
			/**
			 * Constructs a new instance of the io.sentry.IFeedbackApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				show(): void;
				show(param0: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
				show(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
				capture(param0: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
				capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			});
			public constructor();
			public show(): void;
			public capture(param0: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public show(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public show(param0: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class IHub extends io.sentry.IScopes {
			public static class: java.lang.Class<io.sentry.IHub>;
			/**
			 * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(message: string): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
				captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				startSession(): void;
				endSession(): void;
				close(): void;
				close(param0: boolean): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				addBreadcrumb(message: string): void;
				addBreadcrumb(message: string, category: string): void;
				setLevel(param0: io.sentry.SentryLevel): void;
				setTransaction(param0: string): void;
				setUser(param0: io.sentry.protocol.User): void;
				setFingerprint(param0: java.util.List<string>): void;
				clearBreadcrumbs(): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
				getLastEventId(): io.sentry.protocol.SentryId;
				pushScope(): io.sentry.ISentryLifecycleToken;
				pushIsolationScope(): io.sentry.ISentryLifecycleToken;
				popScope(): void;
				withScope(param0: io.sentry.ScopeCallback): void;
				withIsolationScope(param0: io.sentry.ScopeCallback): void;
				configureScope(callback: io.sentry.ScopeCallback): void;
				configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
				bindClient(param0: io.sentry.ISentryClient): void;
				isHealthy(): boolean;
				flush(param0: number): void;
				clone(): io.sentry.IHub;
				forkedScopes(param0: string): io.sentry.IScopes;
				forkedCurrentScope(param0: string): io.sentry.IScopes;
				forkedRootScopes(param0: string): io.sentry.IScopes;
				makeCurrent(): io.sentry.ISentryLifecycleToken;
				getScope(): io.sentry.IScope;
				getIsolationScope(): io.sentry.IScope;
				getGlobalScope(): io.sentry.IScope;
				getParentScopes(): io.sentry.IScopes;
				isAncestorOf(param0: io.sentry.IScopes): boolean;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
				captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
				startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
				startTransaction(name: string, operation: string): io.sentry.ITransaction;
				startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
				startProfiler(): void;
				stopProfiler(): void;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
				getSpan(): io.sentry.ISpan;
				setActiveSpan(param0: io.sentry.ISpan): void;
				getTransaction(): io.sentry.ITransaction;
				getOptions(): io.sentry.SentryOptions;
				isCrashedLastRun(): java.lang.Boolean;
				reportFullyDisplayed(): void;
				continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
				getTraceparent(): io.sentry.SentryTraceHeader;
				getBaggage(): io.sentry.BaggageHeader;
				captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
				getRateLimiter(): io.sentry.transport.RateLimiter;
				isNoOp(): boolean;
				captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				logger(): io.sentry.logger.ILoggerApi;
				metrics(): io.sentry.metrics.IMetricsApi;
				feedback(): io.sentry.IFeedbackApi;
				setAttribute(param0: string, param1: any): void;
				setAttribute(param0: io.sentry.SentryAttribute): void;
				setAttributes(param0: io.sentry.SentryAttributes): void;
				removeAttribute(param0: string): void;
				addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			});
			public constructor();
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			public getOptions(): io.sentry.SentryOptions;
			public getIsolationScope(): io.sentry.IScope;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public isNoOp(): boolean;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			public setExtra(param0: string, param1: string): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public addBreadcrumb(message: string, category: string): void;
			public removeExtra(param0: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public isHealthy(): boolean;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ILogger {
			public static class: java.lang.Class<io.sentry.ILogger>;
			/**
			 * Constructs a new instance of the io.sentry.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
				log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
				log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
				isEnabled(param0: io.sentry.SentryLevel): boolean;
			});
			public constructor();
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IOptionsObserver {
			public static class: java.lang.Class<io.sentry.IOptionsObserver>;
			/**
			 * Constructs a new instance of the io.sentry.IOptionsObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setRelease(param0: string): void;
				setProguardUuid(param0: string): void;
				setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
				setEnvironment(param0: string): void;
				setDist(param0: string): void;
				setTags(param0: java.util.Map<string,string>): void;
				setReplayErrorSampleRate(param0: java.lang.Double): void;
			});
			public constructor();
			public setTags(param0: java.util.Map<string,string>): void;
			public setReplayErrorSampleRate(param0: java.lang.Double): void;
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public setProguardUuid(param0: string): void;
			public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
			public setDist(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IPerformanceCollector {
			public static class: java.lang.Class<io.sentry.IPerformanceCollector>;
			/**
			 * Constructs a new instance of the io.sentry.IPerformanceCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class IPerformanceContinuousCollector extends io.sentry.IPerformanceCollector {
			public static class: java.lang.Class<io.sentry.IPerformanceContinuousCollector>;
			/**
			 * Constructs a new instance of the io.sentry.IPerformanceContinuousCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onSpanStarted(param0: io.sentry.ISpan): void;
				onSpanFinished(param0: io.sentry.ISpan): void;
				clear(): void;
			});
			public constructor();
			public onSpanFinished(param0: io.sentry.ISpan): void;
			public clear(): void;
			public onSpanStarted(param0: io.sentry.ISpan): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IPerformanceSnapshotCollector extends io.sentry.IPerformanceCollector {
			public static class: java.lang.Class<io.sentry.IPerformanceSnapshotCollector>;
			/**
			 * Constructs a new instance of the io.sentry.IPerformanceSnapshotCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setup(): void;
				collect(param0: io.sentry.PerformanceCollectionData): void;
			});
			public constructor();
			public setup(): void;
			public collect(param0: io.sentry.PerformanceCollectionData): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IProfileConverter {
			public static class: java.lang.Class<io.sentry.IProfileConverter>;
			/**
			 * Constructs a new instance of the io.sentry.IProfileConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				convertFromFile(param0: string): io.sentry.protocol.profiling.SentryProfile;
			});
			public constructor();
			public convertFromFile(param0: string): io.sentry.protocol.profiling.SentryProfile;
		}
	}
}

declare module io {
	export module sentry {
		export class IReplayApi {
			public static class: java.lang.Class<io.sentry.IReplayApi>;
			/**
			 * Constructs a new instance of the io.sentry.IReplayApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				enableDebugMaskingOverlay(): void;
				disableDebugMaskingOverlay(): void;
			});
			public constructor();
			public enableDebugMaskingOverlay(): void;
			public disableDebugMaskingOverlay(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IScope {
			public static class: java.lang.Class<io.sentry.IScope>;
			/**
			 * Constructs a new instance of the io.sentry.IScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLevel(): io.sentry.SentryLevel;
				setLevel(param0: io.sentry.SentryLevel): void;
				getTransactionName(): string;
				setTransaction(param0: string): void;
				getSpan(): io.sentry.ISpan;
				setActiveSpan(param0: io.sentry.ISpan): void;
				setTransaction(param0: io.sentry.ITransaction): void;
				getUser(): io.sentry.protocol.User;
				setUser(param0: io.sentry.protocol.User): void;
				getScreen(): string;
				setScreen(param0: string): void;
				getReplayId(): io.sentry.protocol.SentryId;
				setReplayId(param0: io.sentry.protocol.SentryId): void;
				getRequest(): io.sentry.protocol.Request;
				setRequest(param0: io.sentry.protocol.Request): void;
				getFingerprint(): java.util.List<string>;
				setFingerprint(param0: java.util.List<string>): void;
				getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				clearBreadcrumbs(): void;
				clearTransaction(): void;
				getTransaction(): io.sentry.ITransaction;
				clear(): void;
				getTags(): java.util.Map<string,string>;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				getExtras(): java.util.Map<string,any>;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
				getContexts(): io.sentry.protocol.Contexts;
				setContexts(param0: string, param1: any): void;
				setContexts(param0: string, param1: java.lang.Boolean): void;
				setContexts(param0: string, param1: string): void;
				setContexts(param0: string, param1: java.lang.Number): void;
				setContexts(param0: string, param1: java.util.Collection<any>): void;
				setContexts(param0: string, param1: androidNative.Array<any>): void;
				setContexts(param0: string, param1: java.lang.Character): void;
				removeContexts(param0: string): void;
				getAttachments(): java.util.List<io.sentry.Attachment>;
				addAttachment(param0: io.sentry.Attachment): void;
				clearAttachments(): void;
				getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
				getEventProcessorsWithOrder(): java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
				addEventProcessor(param0: io.sentry.EventProcessor): void;
				withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
				startSession(): io.sentry.Scope.SessionPair;
				endSession(): io.sentry.Session;
				withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
				getOptions(): io.sentry.SentryOptions;
				getSession(): io.sentry.Session;
				clearSession(): void;
				setPropagationContext(param0: io.sentry.PropagationContext): void;
				getPropagationContext(): io.sentry.PropagationContext;
				withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
				clone(): io.sentry.IScope;
				setLastEventId(param0: io.sentry.protocol.SentryId): void;
				getLastEventId(): io.sentry.protocol.SentryId;
				bindClient(param0: io.sentry.ISentryClient): void;
				getClient(): io.sentry.ISentryClient;
				assignTraceContext(param0: io.sentry.SentryEvent): void;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
				replaceOptions(param0: io.sentry.SentryOptions): void;
				setAttribute(param0: string, param1: any): void;
				setAttribute(param0: io.sentry.SentryAttribute): void;
				setAttributes(param0: io.sentry.SentryAttributes): void;
				removeAttribute(param0: string): void;
				getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
				addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
				clearFeatureFlags(): void;
				getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			});
			public constructor();
			public replaceOptions(param0: io.sentry.SentryOptions): void;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: string): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public clearTransaction(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getUser(): io.sentry.protocol.User;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public startSession(): io.sentry.Scope.SessionPair;
			public getOptions(): io.sentry.SentryOptions;
			public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public clear(): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setLastEventId(param0: io.sentry.protocol.SentryId): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			public getFingerprint(): java.util.List<string>;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public endSession(): io.sentry.Session;
			public getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
			public getSpan(): io.sentry.ISpan;
			public clearSession(): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public assignTraceContext(param0: io.sentry.SentryEvent): void;
			public removeAttribute(param0: string): void;
			public getSession(): io.sentry.Session;
			public removeContexts(param0: string): void;
			public getScreen(): string;
			public setExtra(param0: string, param1: string): void;
			public getEventProcessorsWithOrder(): java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
			public getTags(): java.util.Map<string,string>;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public getTransaction(): io.sentry.ITransaction;
			public clearAttachments(): void;
			public removeExtra(param0: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
			public setScreen(param0: string): void;
			public setTransaction(param0: string): void;
			public getReplayId(): io.sentry.protocol.SentryId;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setAttribute(param0: string, param1: any): void;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public getLevel(): io.sentry.SentryLevel;
			public setContexts(param0: string, param1: any): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public getClient(): io.sentry.ISentryClient;
			public clearFeatureFlags(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IScopeObserver {
			public static class: java.lang.Class<io.sentry.IScopeObserver>;
			/**
			 * Constructs a new instance of the io.sentry.IScopeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setUser(param0: io.sentry.protocol.User): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setTags(param0: java.util.Map<string,string>): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
				setExtras(param0: java.util.Map<string,any>): void;
				setRequest(param0: io.sentry.protocol.Request): void;
				setFingerprint(param0: java.util.Collection<string>): void;
				setLevel(param0: io.sentry.SentryLevel): void;
				setContexts(param0: io.sentry.protocol.Contexts): void;
				setTransaction(param0: string): void;
				setTrace(param0: io.sentry.SpanContext, param1: io.sentry.IScope): void;
				setReplayId(param0: io.sentry.protocol.SentryId): void;
				addAttachment(param0: io.sentry.Attachment): void;
				clearAttachments(): void;
			});
			public constructor();
			public setTags(param0: java.util.Map<string,string>): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public clearAttachments(): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public removeExtra(param0: string): void;
			public setTrace(param0: io.sentry.SpanContext, param1: io.sentry.IScope): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setExtra(param0: string, param1: string): void;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setFingerprint(param0: java.util.Collection<string>): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public setTag(param0: string, param1: string): void;
			public setContexts(param0: io.sentry.protocol.Contexts): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IScopes {
			public static class: java.lang.Class<io.sentry.IScopes>;
			/**
			 * Constructs a new instance of the io.sentry.IScopes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(message: string): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
				captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				startSession(): void;
				endSession(): void;
				close(): void;
				close(param0: boolean): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				addBreadcrumb(message: string): void;
				addBreadcrumb(message: string, category: string): void;
				setLevel(param0: io.sentry.SentryLevel): void;
				setTransaction(param0: string): void;
				setUser(param0: io.sentry.protocol.User): void;
				setFingerprint(param0: java.util.List<string>): void;
				clearBreadcrumbs(): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
				getLastEventId(): io.sentry.protocol.SentryId;
				pushScope(): io.sentry.ISentryLifecycleToken;
				pushIsolationScope(): io.sentry.ISentryLifecycleToken;
				popScope(): void;
				withScope(param0: io.sentry.ScopeCallback): void;
				withIsolationScope(param0: io.sentry.ScopeCallback): void;
				configureScope(callback: io.sentry.ScopeCallback): void;
				configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
				bindClient(param0: io.sentry.ISentryClient): void;
				isHealthy(): boolean;
				flush(param0: number): void;
				clone(): io.sentry.IHub;
				forkedScopes(param0: string): io.sentry.IScopes;
				forkedCurrentScope(param0: string): io.sentry.IScopes;
				forkedRootScopes(param0: string): io.sentry.IScopes;
				makeCurrent(): io.sentry.ISentryLifecycleToken;
				getScope(): io.sentry.IScope;
				getIsolationScope(): io.sentry.IScope;
				getGlobalScope(): io.sentry.IScope;
				getParentScopes(): io.sentry.IScopes;
				isAncestorOf(param0: io.sentry.IScopes): boolean;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
				captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
				startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
				startTransaction(name: string, operation: string): io.sentry.ITransaction;
				startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
				startProfiler(): void;
				stopProfiler(): void;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
				getSpan(): io.sentry.ISpan;
				setActiveSpan(param0: io.sentry.ISpan): void;
				getTransaction(): io.sentry.ITransaction;
				getOptions(): io.sentry.SentryOptions;
				isCrashedLastRun(): java.lang.Boolean;
				reportFullyDisplayed(): void;
				continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
				getTraceparent(): io.sentry.SentryTraceHeader;
				getBaggage(): io.sentry.BaggageHeader;
				captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
				getRateLimiter(): io.sentry.transport.RateLimiter;
				isNoOp(): boolean;
				captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				logger(): io.sentry.logger.ILoggerApi;
				metrics(): io.sentry.metrics.IMetricsApi;
				feedback(): io.sentry.IFeedbackApi;
				setAttribute(param0: string, param1: any): void;
				setAttribute(param0: io.sentry.SentryAttribute): void;
				setAttributes(param0: io.sentry.SentryAttributes): void;
				removeAttribute(param0: string): void;
				addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			});
			public constructor();
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			public getOptions(): io.sentry.SentryOptions;
			public getIsolationScope(): io.sentry.IScope;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public isNoOp(): boolean;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			public setExtra(param0: string, param1: string): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public addBreadcrumb(message: string, category: string): void;
			public removeExtra(param0: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public isHealthy(): boolean;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IScopesStorage {
			public static class: java.lang.Class<io.sentry.IScopesStorage>;
			/**
			 * Constructs a new instance of the io.sentry.IScopesStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				init(): void;
				set(param0: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
				get(): io.sentry.IScopes;
				close(): void;
			});
			public constructor();
			public set(param0: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public init(): void;
			public close(): void;
			public get(): io.sentry.IScopes;
		}
	}
}

declare module io {
	export module sentry {
		export class IScopesStorageFactory {
			public static class: java.lang.Class<io.sentry.IScopesStorageFactory>;
			/**
			 * Constructs a new instance of the io.sentry.IScopesStorageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: io.sentry.SentryOptions): io.sentry.IScopesStorage;
			});
			public constructor();
			public create(param0: io.sentry.SentryOptions): io.sentry.IScopesStorage;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryClient {
			public static class: java.lang.Class<io.sentry.ISentryClient>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				close(): void;
				close(param0: boolean): void;
				flush(param0: number): void;
				captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureMessage(message: string, level: io.sentry.SentryLevel, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureReplayEvent(param0: io.sentry.SentryReplayEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
				captureSession(session: io.sentry.Session): void;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
				captureTransaction(transaction: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
				captureProfileChunk(param0: io.sentry.ProfileChunk, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureLog(param0: io.sentry.SentryLogEvent, param1: io.sentry.IScope): void;
				captureMetric(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): void;
				captureBatchedLogEvents(param0: io.sentry.SentryLogEvents): void;
				captureBatchedMetricsEvents(param0: io.sentry.SentryMetricsEvents): void;
				getRateLimiter(): io.sentry.transport.RateLimiter;
				isHealthy(): boolean;
			});
			public constructor();
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureBatchedMetricsEvents(param0: io.sentry.SentryMetricsEvents): void;
			public close(param0: boolean): void;
			public captureReplayEvent(param0: io.sentry.SentryReplayEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureProfileChunk(param0: io.sentry.ProfileChunk, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureLog(param0: io.sentry.SentryLogEvent, param1: io.sentry.IScope): void;
			public captureEvent(event: io.sentry.SentryEvent, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public close(): void;
			public captureMetric(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): void;
			public captureSession(session: io.sentry.Session): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public isHealthy(): boolean;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureBatchedLogEvents(param0: io.sentry.SentryLogEvents): void;
			public captureMessage(message: string, level: io.sentry.SentryLevel, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.ISentryExecutorService>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
				close(param0: number): void;
				isClosed(): boolean;
			});
			public constructor();
			public isClosed(): boolean;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
			public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
			public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryLifecycleToken {
			public static class: java.lang.Class<io.sentry.ISentryLifecycleToken>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryLifecycleToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				close(): void;
			});
			public constructor();
			public close(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISerializer {
			public static class: java.lang.Class<io.sentry.ISerializer>;
			/**
			 * Constructs a new instance of the io.sentry.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
				deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
				deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
				serialize(param0: any, param1: java.io.Writer): void;
				serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
				serialize(param0: java.util.Map<string,any>): string;
			});
			public constructor();
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISocketTagger {
			public static class: java.lang.Class<io.sentry.ISocketTagger>;
			/**
			 * Constructs a new instance of the io.sentry.ISocketTagger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				tagSockets(): void;
				untagSockets(): void;
			});
			public constructor();
			public untagSockets(): void;
			public tagSockets(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISpan {
			public static class: java.lang.Class<io.sentry.ISpan>;
			/**
			 * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				traceContext(): io.sentry.TraceContext;
				toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
				finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
				setOperation(param0: string): void;
				getOperation(): string;
				setDescription(param0: string): void;
				getDescription(): string;
				setStatus(param0: io.sentry.SpanStatus): void;
				getStatus(): io.sentry.SpanStatus;
				setThrowable(param0: java.lang.Throwable): void;
				getThrowable(): java.lang.Throwable;
				getSpanContext(): io.sentry.SpanContext;
				setTag(param0: string, param1: string): void;
				getTag(param0: string): string;
				isFinished(): boolean;
				setData(param0: string, param1: any): void;
				getData(param0: string): any;
				setMeasurement(param0: string, param1: java.lang.Number): void;
				setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
				updateEndDate(param0: io.sentry.SentryDate): boolean;
				getStartDate(): io.sentry.SentryDate;
				getFinishDate(): io.sentry.SentryDate;
				isNoOp(): boolean;
				setContext(param0: string, param1: any): void;
				getContexts(): io.sentry.protocol.Contexts;
				isSampled(): java.lang.Boolean;
				getSamplingDecision(): io.sentry.TracesSamplingDecision;
				makeCurrent(): io.sentry.ISentryLifecycleToken;
				addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			});
			public constructor();
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public isNoOp(): boolean;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setOperation(param0: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getThrowable(): java.lang.Throwable;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
		}
	}
}

declare module io {
	export module sentry {
		export class ISpanFactory {
			public static class: java.lang.Class<io.sentry.ISpanFactory>;
			/**
			 * Constructs a new instance of the io.sentry.ISpanFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.IScopes, param2: io.sentry.TransactionOptions, param3: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
				createSpan(param0: io.sentry.IScopes, param1: io.sentry.SpanOptions, param2: io.sentry.SpanContext, param3: io.sentry.ISpan): io.sentry.ISpan;
			});
			public constructor();
			public createTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.IScopes, param2: io.sentry.TransactionOptions, param3: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
			public createSpan(param0: io.sentry.IScopes, param1: io.sentry.SpanOptions, param2: io.sentry.SpanContext, param3: io.sentry.ISpan): io.sentry.ISpan;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransaction extends io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.ITransaction>;
			/**
			 * Constructs a new instance of the io.sentry.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setName(param0: string): void;
				setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
				getName(): string;
				getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
				getSpans(): java.util.List<io.sentry.Span>;
				startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
				isProfileSampled(): java.lang.Boolean;
				getLatestActiveSpan(): io.sentry.ISpan;
				scheduleFinish(): void;
				forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
				finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
				getEventId(): io.sentry.protocol.SentryId;
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				traceContext(): io.sentry.TraceContext;
				toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
				finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
				setOperation(param0: string): void;
				getOperation(): string;
				setDescription(param0: string): void;
				getDescription(): string;
				setStatus(param0: io.sentry.SpanStatus): void;
				getStatus(): io.sentry.SpanStatus;
				setThrowable(param0: java.lang.Throwable): void;
				getThrowable(): java.lang.Throwable;
				getSpanContext(): io.sentry.SpanContext;
				setTag(param0: string, param1: string): void;
				getTag(param0: string): string;
				isFinished(): boolean;
				setData(param0: string, param1: any): void;
				getData(param0: string): any;
				setMeasurement(param0: string, param1: java.lang.Number): void;
				setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
				updateEndDate(param0: io.sentry.SentryDate): boolean;
				getStartDate(): io.sentry.SentryDate;
				getFinishDate(): io.sentry.SentryDate;
				isNoOp(): boolean;
				setContext(param0: string, param1: any): void;
				getContexts(): io.sentry.protocol.Contexts;
				isSampled(): java.lang.Boolean;
				getSamplingDecision(): io.sentry.TracesSamplingDecision;
				makeCurrent(): io.sentry.ISentryLifecycleToken;
				addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			});
			public constructor();
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public finish(): void;
			public getLatestActiveSpan(): io.sentry.ISpan;
			public getContexts(): io.sentry.protocol.Contexts;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setOperation(param0: string): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public getTag(param0: string): string;
			public getThrowable(): java.lang.Throwable;
			public getSpans(): java.util.List<io.sentry.Span>;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public traceContext(): io.sentry.TraceContext;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public isNoOp(): boolean;
			public scheduleFinish(): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public isProfileSampled(): java.lang.Boolean;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getName(): string;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransactionProfiler {
			public static class: java.lang.Class<io.sentry.ITransactionProfiler>;
			/**
			 * Constructs a new instance of the io.sentry.ITransactionProfiler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isRunning(): boolean;
				start(): void;
				bindTransaction(param0: io.sentry.ITransaction): void;
				onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>, param2: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
				close(): void;
			});
			public constructor();
			public bindTransaction(param0: io.sentry.ITransaction): void;
			public close(): void;
			public start(): void;
			public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>, param2: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
			public isRunning(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransportFactory {
			public static class: java.lang.Class<io.sentry.ITransportFactory>;
			/**
			 * Constructs a new instance of the io.sentry.ITransportFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
			});
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class IVersionDetector {
			public static class: java.lang.Class<io.sentry.IVersionDetector>;
			/**
			 * Constructs a new instance of the io.sentry.IVersionDetector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				checkForMixedVersions(): boolean;
			});
			public constructor();
			public checkForMixedVersions(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class InitPriority {
			public static class: java.lang.Class<io.sentry.InitPriority>;
			public static LOWEST: io.sentry.InitPriority;
			public static LOW: io.sentry.InitPriority;
			public static MEDIUM: io.sentry.InitPriority;
			public static HIGH: io.sentry.InitPriority;
			public static HIGHEST: io.sentry.InitPriority;
			public static valueOf(name: string): io.sentry.InitPriority;
			public static values(): androidNative.Array<io.sentry.InitPriority>;
		}
	}
}

declare module io {
	export module sentry {
		export class Instrumenter {
			public static class: java.lang.Class<io.sentry.Instrumenter>;
			public static SENTRY: io.sentry.Instrumenter;
			public static OTEL: io.sentry.Instrumenter;
			public static valueOf(name: string): io.sentry.Instrumenter;
			public static values(): androidNative.Array<io.sentry.Instrumenter>;
		}
	}
}

declare module io {
	export module sentry {
		export class Integration {
			public static class: java.lang.Class<io.sentry.Integration>;
			/**
			 * Constructs a new instance of the io.sentry.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
			});
			public constructor();
			public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IpAddressUtils {
			public static class: java.lang.Class<io.sentry.IpAddressUtils>;
			public static DEFAULT_IP_ADDRESS: string = "{{auto}}";
			public static isDefault(ipAddress: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class JavaMemoryCollector extends io.sentry.IPerformanceSnapshotCollector {
			public static class: java.lang.Class<io.sentry.JavaMemoryCollector>;
			public collect(performanceCollectionData: io.sentry.PerformanceCollectionData): void;
			public setup(): void;
			public constructor();
			public collect(param0: io.sentry.PerformanceCollectionData): void;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonDeserializer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.JsonDeserializer<any>>;
			/**
			 * Constructs a new instance of the io.sentry.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): T;
			});
			public constructor();
			public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): T;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonObjectDeserializer {
			public static class: java.lang.Class<io.sentry.JsonObjectDeserializer>;
			public deserialize(reader: io.sentry.JsonObjectReader): any;
			public constructor();
		}
		export module JsonObjectDeserializer {
			export class NextValue {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.NextValue>;
				/**
				 * Constructs a new instance of the io.sentry.JsonObjectDeserializer$NextValue interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					nextValue(): any;
				});
				public constructor();
				public nextValue(): any;
			}
			export class Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.Token>;
				/**
				 * Constructs a new instance of the io.sentry.JsonObjectDeserializer$Token interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getValue(): any;
				});
				public constructor();
				public getValue(): any;
			}
			export class TokenArray extends io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenArray>;
				public getValue(): any;
			}
			export class TokenMap extends io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenMap>;
				public getValue(): any;
			}
			export class TokenName extends io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenName>;
				public getValue(): any;
			}
			export class TokenPrimitive extends io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenPrimitive>;
				public getValue(): any;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class JsonObjectReader extends io.sentry.ObjectReader {
			public static class: java.lang.Class<io.sentry.JsonObjectReader>;
			public nextIntegerOrNull(): java.lang.Integer;
			public nextMapOfListOrNull(e: io.sentry.ILogger, key: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public nextMapOfListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public nextString(): string;
			public nextListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
			public nextDoubleOrNull(): java.lang.Double;
			public nextNull(): void;
			public nextDouble(): number;
			public nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
			public constructor(in_: java.io.Reader);
			public nextTimeZoneOrNull(this_: io.sentry.ILogger): java.util.TimeZone;
			public beginObject(): void;
			public endArray(): void;
			public endObject(): void;
			public setLenient(param0: boolean): void;
			public close(): void;
			public skipValue(): void;
			public nextBooleanOrNull(): java.lang.Boolean;
			public nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public nextMapOrNull(key: io.sentry.ILogger, recoveryState: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public beginArray(): void;
			public nextBoolean(): boolean;
			public nextLongOrNull(): java.lang.Long;
			public nextStringOrNull(): string;
			public peek(): io.sentry.vendor.gson.stream.JsonToken;
			public nextListOrNull(recoveryState: io.sentry.ILogger, this_: io.sentry.JsonDeserializer<any>): java.util.List<any>;
			public nextObjectOrNull(): any;
			public hasNext(): boolean;
			public nextLong(): number;
			public nextDateOrNull(logger: io.sentry.ILogger): java.util.Date;
			public nextFloat(): number;
			public nextName(): string;
			public static dateOrNull(e: string, ignored: io.sentry.ILogger): java.util.Date;
			public nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
			public nextFloatOrNull(): java.lang.Float;
			public setLenient(lenient: boolean): void;
			public nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
			public nextInt(): number;
			public nextOrNull(logger: io.sentry.ILogger, deserializer: io.sentry.JsonDeserializer<any>): any;
			public nextUnknown(exception: io.sentry.ILogger, this_: java.util.Map<string,any>, logger: string): void;
			public nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string,any>, param2: string): void;
		}
		export module JsonObjectReader {
			export class RecoveryState {
				public static class: java.lang.Class<io.sentry.JsonObjectReader.RecoveryState>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class JsonObjectSerializer {
			public static class: java.lang.Class<io.sentry.JsonObjectSerializer>;
			public static OBJECT_PLACEHOLDER: string = "[OBJECT]";
			public serialize(bools: io.sentry.ObjectWriter, b: io.sentry.ILogger, bytes: any): void;
			public constructor(maxDepth: number);
		}
	}
}

declare module io {
	export module sentry {
		export class JsonObjectWriter extends io.sentry.ObjectWriter {
			public static class: java.lang.Class<io.sentry.JsonObjectWriter>;
			public setIndent(indent: string): void;
			public value(value: string): io.sentry.JsonObjectWriter;
			public beginObject(): io.sentry.ObjectWriter;
			public value(value: java.lang.Number): io.sentry.JsonObjectWriter;
			public nullValue(): io.sentry.ObjectWriter;
			public endObject(): io.sentry.JsonObjectWriter;
			public value(value: java.lang.Boolean): io.sentry.JsonObjectWriter;
			public getIndent(): string;
			public nullValue(): io.sentry.JsonObjectWriter;
			public beginObject(): io.sentry.JsonObjectWriter;
			public endArray(): io.sentry.ObjectWriter;
			public endObject(): io.sentry.ObjectWriter;
			public constructor(out: java.io.Writer, maxDepth: number);
			public setLenient(param0: boolean): void;
			public beginArray(): io.sentry.ObjectWriter;
			public jsonValue(param0: string): io.sentry.ObjectWriter;
			public endArray(): io.sentry.JsonObjectWriter;
			public beginArray(): io.sentry.JsonObjectWriter;
			public name(param0: string): io.sentry.ObjectWriter;
			public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
			public name(name: string): io.sentry.JsonObjectWriter;
			public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
			public value(param0: java.lang.Number): io.sentry.ObjectWriter;
			public value(value: boolean): io.sentry.JsonObjectWriter;
			public value(logger: io.sentry.ILogger, object: any): io.sentry.JsonObjectWriter;
			public value(param0: number): io.sentry.ObjectWriter;
			public jsonValue(value: string): io.sentry.ObjectWriter;
			public value(param0: boolean): io.sentry.ObjectWriter;
			public value(value: number): io.sentry.JsonObjectWriter;
			public setLenient(lenient: boolean): void;
			public setIndent(param0: string): void;
			public value(param0: string): io.sentry.ObjectWriter;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonReflectionObjectSerializer {
			public static class: java.lang.Class<io.sentry.JsonReflectionObjectSerializer>;
			public serializeObject(exception: any, fieldName: io.sentry.ILogger): java.util.Map<string,any>;
			public serialize(exception: any, visiting: io.sentry.ILogger): any;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonSerializable {
			public static class: java.lang.Class<io.sentry.JsonSerializable>;
			/**
			 * Constructs a new instance of the io.sentry.JsonSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			});
			public constructor();
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonSerializer extends io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.JsonSerializer>;
			public deserialize(deserializer: java.io.Reader, jsonObjectReader: java.lang.Class<any>): any;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
			public serialize(exception: io.sentry.SentryEnvelope, item: java.io.OutputStream): void;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
			public serialize(param0: any, param1: java.io.Writer): void;
			public deserializeEnvelope(this_: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(e: java.io.Reader, this_: java.lang.Class<any>, reader: io.sentry.JsonDeserializer<any>): any;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public constructor(options: io.sentry.SentryOptions);
			public serialize(data: java.util.Map<string,any>): string;
			public serialize(this_: any, entity: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class JsonUnknown {
			public static class: java.lang.Class<io.sentry.JsonUnknown>;
			/**
			 * Constructs a new instance of the io.sentry.JsonUnknown interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getUnknown(): java.util.Map<string,any>;
				setUnknown(param0: java.util.Map<string,any>): void;
			});
			public constructor();
			public getUnknown(): java.util.Map<string,any>;
			public setUnknown(param0: java.util.Map<string,any>): void;
		}
	}
}

declare module io {
	export module sentry {
		export class MainEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.MainEventProcessor>;
			public process(this_: io.sentry.SentryReplayEvent, event: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public close(): void;
			public constructor(options: io.sentry.SentryOptions);
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class ManifestVersionDetector extends io.sentry.IVersionDetector {
			public static class: java.lang.Class<io.sentry.ManifestVersionDetector>;
			public checkForMixedVersions(): boolean;
			public constructor(options: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class MeasurementUnit {
			public static class: java.lang.Class<io.sentry.MeasurementUnit>;
			/**
			 * Constructs a new instance of the io.sentry.MeasurementUnit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				apiName(): string;
			});
			public constructor();
			public static NONE: string = "none";
			public name(): string;
			public apiName(): string;
		}
		export module MeasurementUnit {
			export class Custom extends io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Custom>;
				public constructor(name: string);
				public name(): string;
				public apiName(): string;
			}
			export class Duration extends io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Duration>;
				public static NANOSECOND: io.sentry.MeasurementUnit.Duration;
				public static MICROSECOND: io.sentry.MeasurementUnit.Duration;
				public static MILLISECOND: io.sentry.MeasurementUnit.Duration;
				public static SECOND: io.sentry.MeasurementUnit.Duration;
				public static MINUTE: io.sentry.MeasurementUnit.Duration;
				public static HOUR: io.sentry.MeasurementUnit.Duration;
				public static DAY: io.sentry.MeasurementUnit.Duration;
				public static WEEK: io.sentry.MeasurementUnit.Duration;
				public static values(): androidNative.Array<io.sentry.MeasurementUnit.Duration>;
				public name(): string;
				public apiName(): string;
				public static valueOf(name: string): io.sentry.MeasurementUnit.Duration;
			}
			export class Fraction extends io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Fraction>;
				public static RATIO: io.sentry.MeasurementUnit.Fraction;
				public static PERCENT: io.sentry.MeasurementUnit.Fraction;
				public static values(): androidNative.Array<io.sentry.MeasurementUnit.Fraction>;
				public static valueOf(name: string): io.sentry.MeasurementUnit.Fraction;
				public name(): string;
				public apiName(): string;
			}
			export class Information extends io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Information>;
				public static BIT: io.sentry.MeasurementUnit.Information;
				public static BYTE: io.sentry.MeasurementUnit.Information;
				public static KILOBYTE: io.sentry.MeasurementUnit.Information;
				public static KIBIBYTE: io.sentry.MeasurementUnit.Information;
				public static MEGABYTE: io.sentry.MeasurementUnit.Information;
				public static MEBIBYTE: io.sentry.MeasurementUnit.Information;
				public static GIGABYTE: io.sentry.MeasurementUnit.Information;
				public static GIBIBYTE: io.sentry.MeasurementUnit.Information;
				public static TERABYTE: io.sentry.MeasurementUnit.Information;
				public static TEBIBYTE: io.sentry.MeasurementUnit.Information;
				public static PETABYTE: io.sentry.MeasurementUnit.Information;
				public static PEBIBYTE: io.sentry.MeasurementUnit.Information;
				public static EXABYTE: io.sentry.MeasurementUnit.Information;
				public static EXBIBYTE: io.sentry.MeasurementUnit.Information;
				public name(): string;
				public static values(): androidNative.Array<io.sentry.MeasurementUnit.Information>;
				public apiName(): string;
				public static valueOf(name: string): io.sentry.MeasurementUnit.Information;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class MonitorConfig implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.MonitorConfig>;
			public setRecoveryThreshold(recoveryThreshold: java.lang.Long): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getRecoveryThreshold(): java.lang.Long;
			public setSchedule(schedule: io.sentry.MonitorSchedule): void;
			public getCheckinMargin(): java.lang.Long;
			public setMaxRuntime(maxRuntime: java.lang.Long): void;
			public setCheckinMargin(checkinMargin: java.lang.Long): void;
			public getUnknown(): java.util.Map<string,any>;
			public setTimezone(timezone: string): void;
			public getFailureIssueThreshold(): java.lang.Long;
			public constructor(schedule: io.sentry.MonitorSchedule);
			public setFailureIssueThreshold(failureIssueThreshold: java.lang.Long): void;
			public getSchedule(): io.sentry.MonitorSchedule;
			public getTimezone(): string;
			public getMaxRuntime(): java.lang.Long;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module MonitorConfig {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorConfig> {
				public static class: java.lang.Class<io.sentry.MonitorConfig.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.MonitorConfig;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.MonitorConfig.JsonKeys>;
				public static SCHEDULE: string = "schedule";
				public static CHECKIN_MARGIN: string = "checkin_margin";
				public static MAX_RUNTIME: string = "max_runtime";
				public static TIMEZONE: string = "timezone";
				public static FAILURE_ISSUE_THRESHOLD: string = "failure_issue_threshold";
				public static RECOVERY_THRESHOLD: string = "recovery_threshold";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class MonitorContexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements io.sentry.JsonSerializable  {
			public static class: java.lang.Class<io.sentry.MonitorContexts>;
			public constructor(entry: io.sentry.MonitorContexts);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getTrace(): io.sentry.SpanContext;
			public setTrace(traceContext: io.sentry.SpanContext): void;
			public constructor();
		}
		export module MonitorContexts {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorContexts> {
				public static class: java.lang.Class<io.sentry.MonitorContexts.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.MonitorContexts;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class MonitorSchedule implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.MonitorSchedule>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static interval(value: java.lang.Integer, unit: io.sentry.MonitorScheduleUnit): io.sentry.MonitorSchedule;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public static crontab(value: string): io.sentry.MonitorSchedule;
			public setValue(value: java.lang.Integer): void;
			public setType(type: string): void;
			public setUnit(unit: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public serialize(value: io.sentry.ObjectWriter, key: io.sentry.ILogger): void;
			public getUnit(): string;
			public constructor(type: string, value: string, unit: string);
			public setValue(value: string): void;
			public setUnit(unit: io.sentry.MonitorScheduleUnit): void;
			public getType(): string;
			public getValue(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module MonitorSchedule {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorSchedule> {
				public static class: java.lang.Class<io.sentry.MonitorSchedule.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.MonitorSchedule;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.MonitorSchedule.JsonKeys>;
				public static TYPE: string = "type";
				public static VALUE: string = "value";
				public static UNIT: string = "unit";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class MonitorScheduleType {
			public static class: java.lang.Class<io.sentry.MonitorScheduleType>;
			public static CRONTAB: io.sentry.MonitorScheduleType;
			public static INTERVAL: io.sentry.MonitorScheduleType;
			public static valueOf(name: string): io.sentry.MonitorScheduleType;
			public static values(): androidNative.Array<io.sentry.MonitorScheduleType>;
			public apiName(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class MonitorScheduleUnit {
			public static class: java.lang.Class<io.sentry.MonitorScheduleUnit>;
			public static MINUTE: io.sentry.MonitorScheduleUnit;
			public static HOUR: io.sentry.MonitorScheduleUnit;
			public static DAY: io.sentry.MonitorScheduleUnit;
			public static WEEK: io.sentry.MonitorScheduleUnit;
			public static MONTH: io.sentry.MonitorScheduleUnit;
			public static YEAR: io.sentry.MonitorScheduleUnit;
			public static values(): androidNative.Array<io.sentry.MonitorScheduleUnit>;
			public static valueOf(name: string): io.sentry.MonitorScheduleUnit;
			public apiName(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class MovePreviousSession {
			public static class: java.lang.Class<io.sentry.MovePreviousSession>;
			public run(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpAppStartExtender extends io.sentry.IAppStartExtender {
			public static class: java.lang.Class<io.sentry.NoOpAppStartExtender>;
			public getExtendedAppStartSpan(): io.sentry.ISpan;
			public static getInstance(): io.sentry.NoOpAppStartExtender;
			public extendAppStart(): void;
			public finishExtendedAppStart(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpCompositePerformanceCollector extends io.sentry.CompositePerformanceCollector {
			public static class: java.lang.Class<io.sentry.NoOpCompositePerformanceCollector>;
			public onSpanFinished(param0: io.sentry.ISpan): void;
			public start(id: string): void;
			public stop(id: string): java.util.List<io.sentry.PerformanceCollectionData>;
			public onSpanStarted(span: io.sentry.ISpan): void;
			public start(param0: string): void;
			public start(param0: io.sentry.ITransaction): void;
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public static getInstance(): io.sentry.NoOpCompositePerformanceCollector;
			public onSpanFinished(span: io.sentry.ISpan): void;
			public stop(param0: string): java.util.List<io.sentry.PerformanceCollectionData>;
			public start(transaction: io.sentry.ITransaction): void;
			public close(): void;
			public stop(transaction: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public onSpanStarted(param0: io.sentry.ISpan): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpConnectionStatusProvider extends io.sentry.IConnectionStatusProvider {
			public static class: java.lang.Class<io.sentry.NoOpConnectionStatusProvider>;
			public addConnectionStatusObserver(observer: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
			public removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
			public getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
			public getConnectionType(): string;
			public constructor();
			public close(): void;
			public addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
			public removeConnectionStatusObserver(observer: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpContinuousProfiler extends io.sentry.IContinuousProfiler {
			public static class: java.lang.Class<io.sentry.NoOpContinuousProfiler>;
			public reevaluateSampling(): void;
			public getProfilerId(): io.sentry.protocol.SentryId;
			public getChunkId(): io.sentry.protocol.SentryId;
			public stopProfiler(param0: io.sentry.ProfileLifecycle): void;
			public close(param0: boolean): void;
			public close(isTerminating: boolean): void;
			public static getInstance(): io.sentry.NoOpContinuousProfiler;
			public stopProfiler(profileLifecycle: io.sentry.ProfileLifecycle): void;
			public startProfiler(profileLifecycle: io.sentry.ProfileLifecycle, tracesSampler: io.sentry.TracesSampler): void;
			public startProfiler(param0: io.sentry.ProfileLifecycle, param1: io.sentry.TracesSampler): void;
			public isRunning(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpDistributionApi extends io.sentry.IDistributionApi {
			public static class: java.lang.Class<io.sentry.NoOpDistributionApi>;
			public isEnabled(): boolean;
			public checkForUpdate(): java.util.concurrent.Future<io.sentry.UpdateStatus>;
			public downloadUpdate(param0: io.sentry.UpdateInfo): void;
			public static getInstance(): io.sentry.NoOpDistributionApi;
			public downloadUpdate(info: io.sentry.UpdateInfo): void;
			public checkForUpdateBlocking(): io.sentry.UpdateStatus;
		}
		export module NoOpDistributionApi {
			export class CompletedFuture<T>  extends java.util.concurrent.Future<any> {
				public static class: java.lang.Class<io.sentry.NoOpDistributionApi.CompletedFuture<any>>;
				public isDone(): boolean;
				public cancel(mayInterruptIfRunning: boolean): boolean;
				public get(): any;
				public isCancelled(): boolean;
				public get(timeout: number, unit: java.util.concurrent.TimeUnit): any;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpEnvelopeReader extends io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.NoOpEnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public read(stream: java.io.InputStream): io.sentry.SentryEnvelope;
			public static getInstance(): io.sentry.NoOpEnvelopeReader;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpFeedbackApi extends io.sentry.IFeedbackApi {
			public static class: java.lang.Class<io.sentry.NoOpFeedbackApi>;
			public show(): void;
			public show(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public capture(param0: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public show(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public show(associatedEventId: io.sentry.protocol.SentryId, configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpFeedbackApi;
			public capture(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public show(param0: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public capture(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpHub extends io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.NoOpHub>;
			public captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public setSpanContext(throwable: java.lang.Throwable, spanContext: io.sentry.ISpan, transactionName: string): void;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public captureReplay(replay: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			/** @deprecated */
			public static getInstance(): io.sentry.NoOpHub;
			public close(): void;
			public setTag(key: string, value: string): void;
			public withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public withScope(callback: io.sentry.ScopeCallback): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public close(isRestarting: boolean): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			/** @deprecated */
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public flush(timeoutMillis: number): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureProfileChunk(profileChunk: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.NoOpLogger>;
			public static getInstance(): io.sentry.NoOpLogger;
			public log(level: io.sentry.SentryLevel, message: string, throwable: java.lang.Throwable): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public log(level: io.sentry.SentryLevel, message: string, args: androidNative.Array<any>): void;
			public log(level: io.sentry.SentryLevel, throwable: java.lang.Throwable, message: string, args: androidNative.Array<any>): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
			public isEnabled(level: io.sentry.SentryLevel): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpProfileConverter extends io.sentry.IProfileConverter {
			public static class: java.lang.Class<io.sentry.NoOpProfileConverter>;
			public static getInstance(): io.sentry.NoOpProfileConverter;
			public convertFromFile(param0: string): io.sentry.protocol.profiling.SentryProfile;
			public convertFromFile(jfrFilePath: string): io.sentry.protocol.profiling.SentryProfile;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpReplayBreadcrumbConverter extends io.sentry.ReplayBreadcrumbConverter {
			public static class: java.lang.Class<io.sentry.NoOpReplayBreadcrumbConverter>;
			public static getInstance(): io.sentry.NoOpReplayBreadcrumbConverter;
			public convert(param0: io.sentry.Breadcrumb): io.sentry.rrweb.RRWebEvent;
			public convert(breadcrumb: io.sentry.Breadcrumb): io.sentry.rrweb.RRWebEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpReplayController extends io.sentry.ReplayController {
			public static class: java.lang.Class<io.sentry.NoOpReplayController>;
			public setBreadcrumbConverter(converter: io.sentry.ReplayBreadcrumbConverter): void;
			public isRecording(): boolean;
			public static getInstance(): io.sentry.NoOpReplayController;
			public getReplayId(): io.sentry.protocol.SentryId;
			public setBreadcrumbConverter(param0: io.sentry.ReplayBreadcrumbConverter): void;
			public registerTraceId(param0: io.sentry.protocol.SentryId): void;
			public enableDebugMaskingOverlay(): void;
			public isDebugMaskingOverlayEnabled(): boolean;
			public captureReplay(isTerminating: java.lang.Boolean): void;
			public registerSegmentName(segmentName: string): void;
			public pause(): void;
			public resume(): void;
			public registerTraceId(traceId: io.sentry.protocol.SentryId): void;
			public registerSegmentName(param0: string): void;
			public stop(): void;
			public captureReplay(param0: java.lang.Boolean): void;
			public disableDebugMaskingOverlay(): void;
			public start(): void;
			public getBreadcrumbConverter(): io.sentry.ReplayBreadcrumbConverter;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpScope extends io.sentry.IScope {
			public static class: java.lang.Class<io.sentry.NoOpScope>;
			public static getInstance(): io.sentry.NoOpScope;
			public setContexts(param0: string, param1: string): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public clearTransaction(): void;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getOptions(): io.sentry.SentryOptions;
			public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public clear(): void;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public setScreen(screen: string): void;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public removeAttribute(key: string): void;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public endSession(): io.sentry.Session;
			public clearSession(): void;
			public removeContexts(param0: string): void;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setContexts(key: string, value: java.lang.Boolean): void;
			public setTag(key: string, value: string): void;
			public setTransaction(transaction: string): void;
			public getTransaction(): io.sentry.ITransaction;
			public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public replaceOptions(options: io.sentry.SentryOptions): void;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public setContexts(param0: string, param1: any): void;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(key: string, value: any): void;
			public addEventProcessor(eventProcessor: io.sentry.EventProcessor): void;
			public setPropagationContext(propagationContext: io.sentry.PropagationContext): void;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public setContexts(key: string, value: androidNative.Array<any>): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public replaceOptions(param0: io.sentry.SentryOptions): void;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public getUser(): io.sentry.protocol.User;
			public setTransaction(transaction: io.sentry.ITransaction): void;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public startSession(): io.sentry.Scope.SessionPair;
			public removeExtra(key: string): void;
			public setContexts(key: string, value: java.lang.Character): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public setLastEventId(param0: io.sentry.protocol.SentryId): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public withTransaction(callback: io.sentry.Scope.IWithTransaction): void;
			public setLastEventId(lastEventId: io.sentry.protocol.SentryId): void;
			public getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			public setExtra(key: string, value: string): void;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(key: string, value: string): void;
			public setRequest(request: io.sentry.protocol.Request): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public assignTraceContext(param0: io.sentry.SentryEvent): void;
			public removeAttribute(param0: string): void;
			public getSession(): io.sentry.Session;
			public getScreen(): string;
			public getEventProcessorsWithOrder(): java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
			public bindClient(client: io.sentry.ISentryClient): void;
			public getTags(): java.util.Map<string,string>;
			public setContexts(key: string, value: java.util.Collection<any>): void;
			public addAttachment(attachment: io.sentry.Attachment): void;
			public setUser(user: io.sentry.protocol.User): void;
			public assignTraceContext(event: io.sentry.SentryEvent): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public clearAttachments(): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getReplayId(): io.sentry.protocol.SentryId;
			public withPropagationContext(callback: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public setTransaction(param0: string): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public setAttribute(param0: string, param1: any): void;
			public setReplayId(replayId: io.sentry.protocol.SentryId): void;
			public withSession(sessionCallback: io.sentry.Scope.IWithSession): io.sentry.Session;
			public getLevel(): io.sentry.SentryLevel;
			public removeContexts(key: string): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getClient(): io.sentry.ISentryClient;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public setContexts(key: string, value: java.lang.Number): void;
			public clearFeatureFlags(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpScopes extends io.sentry.IScopes {
			public static class: java.lang.Class<io.sentry.NoOpScopes>;
			public captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public setSpanContext(throwable: java.lang.Throwable, spanContext: io.sentry.ISpan, transactionName: string): void;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public captureReplay(replay: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(key: string, value: string): void;
			public withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public withScope(callback: io.sentry.ScopeCallback): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public close(isRestarting: boolean): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			/** @deprecated */
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public static getInstance(): io.sentry.NoOpScopes;
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public flush(timeoutMillis: number): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureProfileChunk(profileChunk: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpScopesLifecycleToken extends io.sentry.ISentryLifecycleToken {
			public static class: java.lang.Class<io.sentry.NoOpScopesLifecycleToken>;
			public static getInstance(): io.sentry.NoOpScopesLifecycleToken;
			public close(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpScopesStorage extends io.sentry.IScopesStorage {
			public static class: java.lang.Class<io.sentry.NoOpScopesStorage>;
			public set(param0: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public static getInstance(): io.sentry.NoOpScopesStorage;
			public init(): void;
			public close(): void;
			public set(scopes: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public get(): io.sentry.IScopes;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSentryClient extends io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.NoOpSentryClient>;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public captureReplayEvent(param0: io.sentry.SentryReplayEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureMetric(metricsEvent: io.sentry.SentryMetricsEvent, scope: io.sentry.IScope, hint: io.sentry.Hint): void;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpSentryClient;
			public captureEvent(event: io.sentry.SentryEvent, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureMetric(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): void;
			public captureBatchedLogEvents(logEvents: io.sentry.SentryLogEvents): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureBatchedLogEvents(param0: io.sentry.SentryLogEvents): void;
			public captureSession(session: io.sentry.Session, hint: io.sentry.Hint): void;
			public close(isRestarting: boolean): void;
			public captureReplayEvent(event: io.sentry.SentryReplayEvent, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureMessage(message: string, level: io.sentry.SentryLevel, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureBatchedMetricsEvents(metricsEvents: io.sentry.SentryMetricsEvents): void;
			public captureEvent(event: io.sentry.SentryEvent, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureBatchedMetricsEvents(param0: io.sentry.SentryMetricsEvents): void;
			public captureCheckIn(checkIn: io.sentry.CheckIn, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			/** @deprecated */
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureProfileChunk(param0: io.sentry.ProfileChunk, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureLog(param0: io.sentry.SentryLogEvent, param1: io.sentry.IScope): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, scope: io.sentry.IScope, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureProfileChunk(profileChunk: io.sentry.ProfileChunk, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureSession(session: io.sentry.Session): void;
			public isHealthy(): boolean;
			public isEnabled(): boolean;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public flush(timeoutMillis: number): void;
			public captureLog(logEvent: io.sentry.SentryLogEvent, scope: io.sentry.IScope): void;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSentryExecutorService extends io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.NoOpSentryExecutorService>;
			public submit(runnable: java.lang.Runnable): java.util.concurrent.Future<any>;
			public schedule(runnable: java.lang.Runnable, delayMillis: number): java.util.concurrent.Future<any>;
			public isClosed(): boolean;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(timeoutMillis: number): void;
			public close(param0: number): void;
			public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
			public static getInstance(): io.sentry.ISentryExecutorService;
			public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
			public submit(callable: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSerializer extends io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.NoOpSerializer>;
			public deserializeEnvelope(inputStream: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(reader: java.io.Reader, clazz: java.lang.Class<any>): any;
			public static getInstance(): io.sentry.NoOpSerializer;
			public serialize(entity: any, writer: java.io.Writer): void;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
			public serialize(param0: any, param1: java.io.Writer): void;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeCollection(reader: java.io.Reader, clazz: java.lang.Class<any>, elementDeserializer: io.sentry.JsonDeserializer<any>): any;
			public serialize(envelope: io.sentry.SentryEnvelope, outputStream: java.io.OutputStream): void;
			public serialize(data: java.util.Map<string,any>): string;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSocketTagger extends io.sentry.ISocketTagger {
			public static class: java.lang.Class<io.sentry.NoOpSocketTagger>;
			public untagSockets(): void;
			public static getInstance(): io.sentry.ISocketTagger;
			public tagSockets(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSpan extends io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.NoOpSpan>;
			public startChild(operation: string, description: string): io.sentry.ISpan;
			public getData(key: string): any;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter): io.sentry.ISpan;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public finish(): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public getContexts(): io.sentry.protocol.Contexts;
			public setMeasurement(name: string, value: java.lang.Number): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public setData(key: string, value: any): void;
			public toBaggageHeader(thirdPartyBaggageHeaders: java.util.List<string>): io.sentry.BaggageHeader;
			public setThrowable(throwable: java.lang.Throwable): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setDescription(description: string): void;
			public setContext(key: string, context: any): void;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(operation: string): io.sentry.ISpan;
			public setOperation(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public updateEndDate(date: io.sentry.SentryDate): boolean;
			public getTag(param0: string): string;
			public finish(status: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
			public finish(status: io.sentry.SpanStatus, timestamp: io.sentry.SentryDate): void;
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(spanContext: io.sentry.SpanContext, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public setStatus(status: io.sentry.SpanStatus): void;
			public isNoOp(): boolean;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public static getInstance(): io.sentry.NoOpSpan;
			public setTag(key: string, value: string): void;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setMeasurement(name: string, value: java.lang.Number, unit: io.sentry.MeasurementUnit): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setOperation(operation: string): void;
			public getTag(key: string): string;
			public startChild(operation: string, description: string, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSpanFactory extends io.sentry.ISpanFactory {
			public static class: java.lang.Class<io.sentry.NoOpSpanFactory>;
			public createTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.IScopes, param2: io.sentry.TransactionOptions, param3: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
			public createSpan(param0: io.sentry.IScopes, param1: io.sentry.SpanOptions, param2: io.sentry.SpanContext, param3: io.sentry.ISpan): io.sentry.ISpan;
			public createSpan(scopes: io.sentry.IScopes, spanOptions: io.sentry.SpanOptions, spanContext: io.sentry.SpanContext, parentSpan: io.sentry.ISpan): io.sentry.ISpan;
			public static getInstance(): io.sentry.NoOpSpanFactory;
			public createTransaction(context: io.sentry.TransactionContext, scopes: io.sentry.IScopes, transactionOptions: io.sentry.TransactionOptions, compositePerformanceCollector: io.sentry.CompositePerformanceCollector): io.sentry.ITransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransaction extends io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.NoOpTransaction>;
			public startChild(operation: string, description: string): io.sentry.ISpan;
			public getData(key: string): any;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter): io.sentry.ISpan;
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public finish(): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public getLatestActiveSpan(): io.sentry.ISpan;
			public getContexts(): io.sentry.protocol.Contexts;
			public setMeasurement(name: string, value: java.lang.Number): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public setData(key: string, value: any): void;
			public toBaggageHeader(thirdPartyBaggageHeaders: java.util.List<string>): io.sentry.BaggageHeader;
			public setThrowable(throwable: java.lang.Throwable): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setDescription(description: string): void;
			public setContext(key: string, context: any): void;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(operation: string): io.sentry.ISpan;
			public static getInstance(): io.sentry.NoOpTransaction;
			public setOperation(param0: string): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public forceFinish(status: io.sentry.SpanStatus, dropIfNoChildren: boolean, hint: io.sentry.Hint): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public updateEndDate(date: io.sentry.SentryDate): boolean;
			public getTag(param0: string): string;
			public finish(status: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public getSpans(): java.util.List<io.sentry.Span>;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public finish(status: io.sentry.SpanStatus, timestamp: io.sentry.SentryDate, dropIfNoChildren: boolean, hint: io.sentry.Hint): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
			public finish(status: io.sentry.SpanStatus, timestamp: io.sentry.SentryDate): void;
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(spanContext: io.sentry.SpanContext, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public setStatus(status: io.sentry.SpanStatus): void;
			public isNoOp(): boolean;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate): io.sentry.ISpan;
			public scheduleFinish(): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setTag(key: string, value: string): void;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setMeasurement(name: string, value: java.lang.Number, unit: io.sentry.MeasurementUnit): void;
			public setName(name: string, transactionNameSource: io.sentry.protocol.TransactionNameSource): void;
			public isProfileSampled(): java.lang.Boolean;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setOperation(operation: string): void;
			public getName(): string;
			public getTag(key: string): string;
			public setName(name: string): void;
			public startChild(operation: string, description: string, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransactionProfiler extends io.sentry.ITransactionProfiler {
			public static class: java.lang.Class<io.sentry.NoOpTransactionProfiler>;
			public onTransactionFinish(transaction: io.sentry.ITransaction, performanceCollectionData: java.util.List<io.sentry.PerformanceCollectionData>, options: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
			public bindTransaction(param0: io.sentry.ITransaction): void;
			public static getInstance(): io.sentry.NoOpTransactionProfiler;
			public bindTransaction(transaction: io.sentry.ITransaction): void;
			public close(): void;
			public start(): void;
			public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>, param2: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
			public isRunning(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransportFactory extends io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.NoOpTransportFactory>;
			public static getInstance(): io.sentry.NoOpTransportFactory;
			public create(options: io.sentry.SentryOptions, requestDetails: io.sentry.RequestDetails): io.sentry.transport.ITransport;
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class NoopVersionDetector extends io.sentry.IVersionDetector {
			public static class: java.lang.Class<io.sentry.NoopVersionDetector>;
			public checkForMixedVersions(): boolean;
			public static getInstance(): io.sentry.NoopVersionDetector;
		}
	}
}

declare module io {
	export module sentry {
		export class ObjectReader {
			public static class: java.lang.Class<io.sentry.ObjectReader>;
			/**
			 * Constructs a new instance of the io.sentry.ObjectReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				dateOrNull(e: string, ignored: io.sentry.ILogger): java.util.Date;
				nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string,any>, param2: string): void;
				nextListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
				nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				nextMapOfListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
				nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
				nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
				nextObjectOrNull(): any;
				peek(): io.sentry.vendor.gson.stream.JsonToken;
				nextName(): string;
				beginObject(): void;
				endObject(): void;
				beginArray(): void;
				endArray(): void;
				hasNext(): boolean;
				nextInt(): number;
				nextIntegerOrNull(): java.lang.Integer;
				nextLong(): number;
				nextLongOrNull(): java.lang.Long;
				nextString(): string;
				nextStringOrNull(): string;
				nextBoolean(): boolean;
				nextBooleanOrNull(): java.lang.Boolean;
				nextDouble(): number;
				nextDoubleOrNull(): java.lang.Double;
				nextFloat(): number;
				nextFloatOrNull(): java.lang.Float;
				nextNull(): void;
				setLenient(param0: boolean): void;
				skipValue(): void;
			});
			public constructor();
			public nextIntegerOrNull(): java.lang.Integer;
			public nextMapOfListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public nextString(): string;
			public nextListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
			public nextDoubleOrNull(): java.lang.Double;
			public nextNull(): void;
			public nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
			public nextDouble(): number;
			public beginObject(): void;
			public endArray(): void;
			public endObject(): void;
			public setLenient(param0: boolean): void;
			public skipValue(): void;
			public nextBooleanOrNull(): java.lang.Boolean;
			public nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public beginArray(): void;
			public nextBoolean(): boolean;
			public nextLongOrNull(): java.lang.Long;
			public nextStringOrNull(): string;
			public peek(): io.sentry.vendor.gson.stream.JsonToken;
			public nextObjectOrNull(): any;
			public hasNext(): boolean;
			public nextLong(): number;
			public static dateOrNull(e: string, ignored: io.sentry.ILogger): java.util.Date;
			public nextName(): string;
			public nextFloat(): number;
			public nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
			public nextFloatOrNull(): java.lang.Float;
			public nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
			public nextInt(): number;
			public nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string,any>, param2: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ObjectWriter {
			public static class: java.lang.Class<io.sentry.ObjectWriter>;
			/**
			 * Constructs a new instance of the io.sentry.ObjectWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				beginArray(): io.sentry.ObjectWriter;
				endArray(): io.sentry.ObjectWriter;
				beginObject(): io.sentry.ObjectWriter;
				endObject(): io.sentry.ObjectWriter;
				name(param0: string): io.sentry.ObjectWriter;
				value(param0: string): io.sentry.ObjectWriter;
				jsonValue(param0: string): io.sentry.ObjectWriter;
				nullValue(): io.sentry.ObjectWriter;
				value(param0: boolean): io.sentry.ObjectWriter;
				value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
				value(param0: number): io.sentry.ObjectWriter;
				value(param0: number): io.sentry.ObjectWriter;
				value(param0: java.lang.Number): io.sentry.ObjectWriter;
				value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
				setLenient(param0: boolean): void;
				setIndent(param0: string): void;
				getIndent(): string;
			});
			public constructor();
			public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
			public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
			public beginObject(): io.sentry.ObjectWriter;
			public nullValue(): io.sentry.ObjectWriter;
			public getIndent(): string;
			public value(param0: java.lang.Number): io.sentry.ObjectWriter;
			public endArray(): io.sentry.ObjectWriter;
			public value(param0: number): io.sentry.ObjectWriter;
			public value(param0: boolean): io.sentry.ObjectWriter;
			public endObject(): io.sentry.ObjectWriter;
			public setLenient(param0: boolean): void;
			public beginArray(): io.sentry.ObjectWriter;
			public jsonValue(param0: string): io.sentry.ObjectWriter;
			public setIndent(param0: string): void;
			public value(param0: string): io.sentry.ObjectWriter;
			public name(param0: string): io.sentry.ObjectWriter;
		}
	}
}

declare module io {
	export module sentry {
		export class OptionsContainer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.OptionsContainer<any>>;
			public static create(clazz: java.lang.Class<any>): io.sentry.OptionsContainer<any>;
			public createInstance(): T;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class OutboxSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.OutboxSender>;
			public processEnvelopeFile(path: string, hint: io.sentry.Hint): void;
			public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
			public constructor(scopes: io.sentry.IScopes, envelopeReader: io.sentry.IEnvelopeReader, serializer: io.sentry.ISerializer, logger: io.sentry.ILogger, flushTimeoutMillis: number, maxQueueSize: number);
			public processFile(stream: java.io.File, e: io.sentry.Hint): void;
			public isRelevantFileName(fileName: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class PerformanceCollectionData {
			public static class: java.lang.Class<io.sentry.PerformanceCollectionData>;
			public setUsedNativeMemory(usedNativeMemory: java.lang.Long): void;
			public getNanoTimestamp(): number;
			public setCpuUsagePercentage(cpuUsagePercentage: java.lang.Double): void;
			public getUsedNativeMemory(): java.lang.Long;
			public getUsedHeapMemory(): java.lang.Long;
			public constructor(nanoTimestamp: number);
			public setUsedHeapMemory(usedHeapMemory: java.lang.Long): void;
			public getCpuUsagePercentage(): java.lang.Double;
		}
	}
}

declare module io {
	export module sentry {
		export class PreviousSessionFinalizer {
			public static class: java.lang.Class<io.sentry.PreviousSessionFinalizer>;
			public run(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ProfileChunk implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfileChunk>;
			public static PLATFORM_ANDROID: string = "android";
			public static PLATFORM_JAVA: string = "java";
			public static CONTENT_TYPE_PERFETTO: string = "application/x-perfetto-trace";
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getChunkId(): io.sentry.protocol.SentryId;
			public getMeasurements(): java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getPlatform(): string;
			public getSampledProfile(): string;
			public constructor(profilerId: io.sentry.protocol.SentryId, chunkId: io.sentry.protocol.SentryId, traceFile: java.io.File, measurements: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>, timestamp: java.lang.Double, platform: string, options: io.sentry.SentryOptions);
			public setDebugMeta(debugMeta: io.sentry.protocol.DebugMeta): void;
			public getRelease(): string;
			public serialize(value: io.sentry.ObjectWriter, key: io.sentry.ILogger): void;
			public getTimestamp(): number;
			public setSampledProfile(sampledProfile: string): void;
			public getEnvironment(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public getDebugMeta(): io.sentry.protocol.DebugMeta;
			public getClientSdk(): io.sentry.protocol.SdkVersion;
			public getProfilerId(): io.sentry.protocol.SentryId;
			public getTraceFile(): java.io.File;
			public constructor();
			public getContentType(): string;
			public setSentryProfile(sentryProfile: io.sentry.protocol.profiling.SentryProfile): void;
			public getUnknown(): java.util.Map<string,any>;
			public equals(o: any): boolean;
			public getVersion(): string;
			public getSentryProfile(): io.sentry.protocol.profiling.SentryProfile;
			public hashCode(): number;
		}
		export module ProfileChunk {
			export class Builder {
				public static class: java.lang.Class<io.sentry.ProfileChunk.Builder>;
				public build(options: io.sentry.SentryOptions): io.sentry.ProfileChunk;
				public constructor(profilerId: io.sentry.protocol.SentryId, chunkId: io.sentry.protocol.SentryId, measurements: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>, traceFile: java.io.File, timestamp: io.sentry.SentryDate, platform: string);
				public setContentType(contentType: string): io.sentry.ProfileChunk.Builder;
			}
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfileChunk> {
				public static class: java.lang.Class<io.sentry.ProfileChunk.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(profilerId: io.sentry.ObjectReader, chunkId: io.sentry.ILogger): io.sentry.ProfileChunk;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.ProfileChunk.JsonKeys>;
				public static DEBUG_META: string = "debug_meta";
				public static PROFILER_ID: string = "profiler_id";
				public static CHUNK_ID: string = "chunk_id";
				public static CLIENT_SDK: string = "client_sdk";
				public static MEASUREMENTS: string = "measurements";
				public static PLATFORM: string = "platform";
				public static RELEASE: string = "release";
				public static ENVIRONMENT: string = "environment";
				public static VERSION: string = "version";
				public static SAMPLED_PROFILE: string = "sampled_profile";
				public static TIMESTAMP: string = "timestamp";
				public static SENTRY_PROFILE: string = "profile";
				public static CONTENT_TYPE: string = "content_type";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ProfileContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfileContext>;
			public static TYPE: string = "profile";
			public constructor(profilerId: io.sentry.protocol.SentryId);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getProfilerId(): io.sentry.protocol.SentryId;
			public getUnknown(): java.util.Map<string,any>;
			public equals(o: any): boolean;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(profileContext: io.sentry.ProfileContext);
			public constructor();
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public hashCode(): number;
		}
		export module ProfileContext {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfileContext> {
				public static class: java.lang.Class<io.sentry.ProfileContext.Deserializer>;
				public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.ProfileContext;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.ProfileContext.JsonKeys>;
				public static PROFILER_ID: string = "profiler_id";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ProfileLifecycle {
			public static class: java.lang.Class<io.sentry.ProfileLifecycle>;
			public static MANUAL: io.sentry.ProfileLifecycle;
			public static TRACE: io.sentry.ProfileLifecycle;
			public static valueOf(name: string): io.sentry.ProfileLifecycle;
			public static values(): androidNative.Array<io.sentry.ProfileLifecycle>;
		}
	}
}

declare module io {
	export module sentry {
		export class ProfilingTraceData implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfilingTraceData>;
			public static TRUNCATION_REASON_NORMAL: string = "normal";
			public static TRUNCATION_REASON_TIMEOUT: string = "timeout";
			public static TRUNCATION_REASON_BACKGROUNDED: string = "backgrounded";
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getAndroidApiLevel(): number;
			public getDeviceOsVersion(): string;
			public getProfileId(): string;
			public getTraceId(): string;
			public readDeviceCpuFrequencies(): void;
			public setCpuArchitecture(cpuArchitecture: string): void;
			public getRelease(): string;
			public getTransactionId(): string;
			public isDeviceIsEmulator(): boolean;
			public getTimestamp(): java.util.Date;
			public setTransactionId(transactionId: string): void;
			public getTransactions(): java.util.List<io.sentry.ProfilingTransactionData>;
			public setDeviceOsVersion(deviceOsVersion: string): void;
			public setDevicePhysicalMemoryBytes(devicePhysicalMemoryBytes: string): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setTransactionName(transactionName: string): void;
			public getDeviceCpuFrequencies(): java.util.List<java.lang.Integer>;
			public getCpuArchitecture(): string;
			public setEnvironment(environment: string): void;
			public getTransactionName(): string;
			public setDeviceManufacturer(deviceManufacturer: string): void;
			public getDeviceOsBuildNumber(): string;
			public setTransactions(transactions: java.util.List<io.sentry.ProfilingTransactionData>): void;
			public getDeviceOsName(): string;
			public getDurationNs(): string;
			public getTruncationReason(): string;
			public setDeviceOsBuildNumber(deviceOsBuildNumber: string): void;
			public getDeviceLocale(): string;
			public setDeviceCpuFrequencies(deviceCpuFrequencies: java.util.List<java.lang.Integer>): void;
			public setRelease(release: string): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getPlatform(): string;
			public getSampledProfile(): string;
			public getDevicePhysicalMemoryBytes(): string;
			public setTimestamp(timestamp: java.util.Date): void;
			public setDeviceIsEmulator(deviceIsEmulator: boolean): void;
			public setDeviceModel(deviceModel: string): void;
			public setDurationNs(durationNs: string): void;
			public setDeviceLocale(deviceLocale: string): void;
			public setSampledProfile(sampledProfile: string): void;
			public getMeasurementsMap(): java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>;
			public getEnvironment(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public getTraceFile(): java.io.File;
			public getBuildId(): string;
			public getDeviceModel(): string;
			public setTraceId(traceId: string): void;
			public constructor(traceFile: java.io.File, profileStartTimestamp: java.util.Date, transactions: java.util.List<io.sentry.ProfilingTransactionData>, transactionName: string, transactionId: string, traceId: string, durationNanos: string, sdkInt: number, cpuArchitecture: string, deviceCpuFrequenciesReader: java.util.concurrent.Callable<java.util.List<java.lang.Integer>>, deviceManufacturer: string, deviceModel: string, deviceOsVersion: string, deviceIsEmulator: java.lang.Boolean, devicePhysicalMemoryBytes: string, buildId: string, release: string, environment: string, truncationReason: string, measurementsMap: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>);
			public setBuildId(buildId: string): void;
			public setAndroidApiLevel(androidApiLevel: number): void;
			public getUnknown(): java.util.Map<string,any>;
			public getDeviceManufacturer(): string;
			public setProfileId(profileId: string): void;
			public constructor(traceFile: java.io.File, transaction: io.sentry.ITransaction);
			public setTruncationReason(truncationReason: string): void;
		}
		export module ProfilingTraceData {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTraceData> {
				public static class: java.lang.Class<io.sentry.ProfilingTraceData.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(deviceLocale: io.sentry.ObjectReader, deviceManufacturer: io.sentry.ILogger): io.sentry.ProfilingTraceData;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.ProfilingTraceData.JsonKeys>;
				public static ANDROID_API_LEVEL: string = "android_api_level";
				public static DEVICE_LOCALE: string = "device_locale";
				public static DEVICE_MANUFACTURER: string = "device_manufacturer";
				public static DEVICE_MODEL: string = "device_model";
				public static DEVICE_OS_BUILD_NUMBER: string = "device_os_build_number";
				public static DEVICE_OS_NAME: string = "device_os_name";
				public static DEVICE_OS_VERSION: string = "device_os_version";
				public static DEVICE_IS_EMULATOR: string = "device_is_emulator";
				public static ARCHITECTURE: string = "architecture";
				public static DEVICE_CPU_FREQUENCIES: string = "device_cpu_frequencies";
				public static DEVICE_PHYSICAL_MEMORY_BYTES: string = "device_physical_memory_bytes";
				public static PLATFORM: string = "platform";
				public static BUILD_ID: string = "build_id";
				public static TRANSACTION_NAME: string = "transaction_name";
				public static DURATION_NS: string = "duration_ns";
				public static RELEASE: string = "version_name";
				public static VERSION_CODE: string = "version_code";
				public static TRANSACTION_LIST: string = "transactions";
				public static TRANSACTION_ID: string = "transaction_id";
				public static TRACE_ID: string = "trace_id";
				public static PROFILE_ID: string = "profile_id";
				public static ENVIRONMENT: string = "environment";
				public static SAMPLED_PROFILE: string = "sampled_profile";
				public static TRUNCATION_REASON: string = "truncation_reason";
				public static MEASUREMENTS: string = "measurements";
				public static TIMESTAMP: string = "timestamp";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ProfilingTransactionData implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfilingTransactionData>;
			public constructor(transaction: io.sentry.ITransaction, startNs: java.lang.Long, startCpuMs: java.lang.Long);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setId(id: string): void;
			public setRelativeStartNs(relativeStartNs: java.lang.Long): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor();
			public setTraceId(traceId: string): void;
			public getRelativeStartCpuMs(): java.lang.Long;
			public getTraceId(): string;
			public getRelativeEndCpuMs(): java.lang.Long;
			public getId(): string;
			public getUnknown(): java.util.Map<string,any>;
			public getName(): string;
			public equals(o: any): boolean;
			public setRelativeEndNs(relativeEndNs: java.lang.Long): void;
			public getRelativeStartNs(): java.lang.Long;
			public getRelativeEndNs(): java.lang.Long;
			public setName(name: string): void;
			public notifyFinish(endNs: java.lang.Long, profileStartNs: java.lang.Long, endCpuMs: java.lang.Long, profileStartCpuMs: java.lang.Long): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public hashCode(): number;
		}
		export module ProfilingTransactionData {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTransactionData> {
				public static class: java.lang.Class<io.sentry.ProfilingTransactionData.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(traceId: io.sentry.ObjectReader, name: io.sentry.ILogger): io.sentry.ProfilingTransactionData;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.ProfilingTransactionData.JsonKeys>;
				public static ID: string = "id";
				public static TRACE_ID: string = "trace_id";
				public static NAME: string = "name";
				public static START_NS: string = "relative_start_ns";
				public static END_NS: string = "relative_end_ns";
				public static START_CPU_MS: string = "relative_cpu_start_ms";
				public static END_CPU_MS: string = "relative_cpu_end_ms";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class PropagationContext {
			public static class: java.lang.Class<io.sentry.PropagationContext>;
			public getBaggage(): io.sentry.Baggage;
			public toSpanContext(): io.sentry.SpanContext;
			public setSampled(sampled: java.lang.Boolean): void;
			public static fromHeaders(sentryTraceHeader: io.sentry.SentryTraceHeader, baggage: io.sentry.Baggage, spanId: io.sentry.SpanId, options: io.sentry.SentryOptions): io.sentry.PropagationContext;
			public traceContext(): io.sentry.TraceContext;
			public constructor();
			public setTraceId(traceId: io.sentry.protocol.SentryId): void;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getSpanId(): io.sentry.SpanId;
			public static fromExistingTrace(traceId: string, spanId: string, decisionSampleRate: java.lang.Double, decisionSampleRand: java.lang.Double): io.sentry.PropagationContext;
			public getParentSpanId(): io.sentry.SpanId;
			public static fromHeaders(logger: io.sentry.ILogger, sentryTraceHeader: string, baggageHeader: string, options: io.sentry.SentryOptions): io.sentry.PropagationContext;
			public static fromHeaders(traceHeader: io.sentry.ILogger, baggage: string, e: java.util.List<string>, logger: io.sentry.SentryOptions): io.sentry.PropagationContext;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, parentSpanId: io.sentry.SpanId, baggage: io.sentry.Baggage, sampled: java.lang.Boolean);
			public setParentSpanId(parentSpanId: io.sentry.SpanId): void;
			public isSampled(): java.lang.Boolean;
			public constructor(propagationContext: io.sentry.PropagationContext);
			public setSpanId(spanId: io.sentry.SpanId): void;
			public getSampleRand(): java.lang.Double;
		}
	}
}

declare module io {
	export module sentry {
		export class ReplayBreadcrumbConverter {
			public static class: java.lang.Class<io.sentry.ReplayBreadcrumbConverter>;
			/**
			 * Constructs a new instance of the io.sentry.ReplayBreadcrumbConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				convert(param0: io.sentry.Breadcrumb): io.sentry.rrweb.RRWebEvent;
			});
			public constructor();
			public convert(param0: io.sentry.Breadcrumb): io.sentry.rrweb.RRWebEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class ReplayController extends io.sentry.IReplayApi {
			public static class: java.lang.Class<io.sentry.ReplayController>;
			/**
			 * Constructs a new instance of the io.sentry.ReplayController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				start(): void;
				stop(): void;
				pause(): void;
				resume(): void;
				isRecording(): boolean;
				captureReplay(param0: java.lang.Boolean): void;
				getReplayId(): io.sentry.protocol.SentryId;
				setBreadcrumbConverter(param0: io.sentry.ReplayBreadcrumbConverter): void;
				getBreadcrumbConverter(): io.sentry.ReplayBreadcrumbConverter;
				isDebugMaskingOverlayEnabled(): boolean;
				registerTraceId(param0: io.sentry.protocol.SentryId): void;
				registerSegmentName(param0: string): void;
				enableDebugMaskingOverlay(): void;
				disableDebugMaskingOverlay(): void;
			});
			public constructor();
			public isRecording(): boolean;
			public getReplayId(): io.sentry.protocol.SentryId;
			public setBreadcrumbConverter(param0: io.sentry.ReplayBreadcrumbConverter): void;
			public registerTraceId(param0: io.sentry.protocol.SentryId): void;
			public enableDebugMaskingOverlay(): void;
			public isDebugMaskingOverlayEnabled(): boolean;
			public pause(): void;
			public resume(): void;
			public registerSegmentName(param0: string): void;
			public stop(): void;
			public captureReplay(param0: java.lang.Boolean): void;
			public disableDebugMaskingOverlay(): void;
			public start(): void;
			public getBreadcrumbConverter(): io.sentry.ReplayBreadcrumbConverter;
		}
	}
}

declare module io {
	export module sentry {
		export class ReplayRecording implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ReplayRecording>;
			public setSegmentId(segmentId: java.lang.Integer): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public getSegmentId(): java.lang.Integer;
			public setPayload(payload: java.util.List<any>): void;
			public equals(o: any): boolean;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor();
			public getPayload(): java.util.List<any>;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public hashCode(): number;
		}
		export module ReplayRecording {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ReplayRecording> {
				public static class: java.lang.Class<io.sentry.ReplayRecording.Deserializer>;
				public deserialize(interactionEvent: io.sentry.ObjectReader, interactionMoveEvent: io.sentry.ILogger): io.sentry.ReplayRecording;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.ReplayRecording.JsonKeys>;
				public static SEGMENT_ID: string = "segment_id";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetails {
			public static class: java.lang.Class<io.sentry.RequestDetails>;
			public getHeaders(): java.util.Map<string,string>;
			public constructor(this_: string, url: java.util.Map<string,string>);
			public getUrl(): java.net.URL;
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetailsResolver {
			public static class: java.lang.Class<io.sentry.RequestDetailsResolver>;
			public constructor(dsn: string, sentryClientName: string);
			public resolve(): io.sentry.RequestDetails;
			public constructor(options: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class SamplingContext {
			public static class: java.lang.Class<io.sentry.SamplingContext>;
			public constructor(transactionContext: io.sentry.TransactionContext, customSamplingContext: io.sentry.CustomSamplingContext, sampleRand: java.lang.Double, attributes: java.util.Map<string,any>);
			public getAttribute(key: string): any;
			/** @deprecated */
			public constructor(transactionContext: io.sentry.TransactionContext, customSamplingContext: io.sentry.CustomSamplingContext);
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public getTransactionContext(): io.sentry.TransactionContext;
			public getSampleRand(): java.lang.Double;
		}
	}
}

declare module io {
	export module sentry {
		export class Scope extends io.sentry.IScope {
			public static class: java.lang.Class<io.sentry.Scope>;
			public setContexts(param0: string, param1: string): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public clearTransaction(): void;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public setExtra(this_: string, key: string): void;
			public getOptions(): io.sentry.SentryOptions;
			public setScreen(observer: string): void;
			public setUser(this_: io.sentry.protocol.User): void;
			public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public constructor(options: io.sentry.SentryOptions);
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public setContexts(this_: string, key: string): void;
			public clear(): void;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public addAttachment(this_: io.sentry.Attachment): void;
			public withSession(this_: io.sentry.Scope.IWithSession): io.sentry.Session;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public setFingerprint(this_: java.util.List<string>): void;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public setContexts(this_: string, key: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public assignTraceContext(spanWeakRef: io.sentry.SentryEvent): void;
			public setTransaction(ignored: io.sentry.ITransaction): void;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public removeAttribute(key: string): void;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public endSession(): io.sentry.Session;
			public withPropagationContext(this_: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public clearSession(): void;
			public removeContexts(param0: string): void;
			public setExtra(param0: string, param1: string): void;
			public setPropagationContext(this_: io.sentry.PropagationContext): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public getTransaction(): io.sentry.ITransaction;
			public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public removeExtra(this_: string): void;
			public setAttributes(this_: io.sentry.SentryAttributes): void;
			public setContexts(this_: string, key: java.lang.Boolean): void;
			public setContexts(param0: string, param1: any): void;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public addEventProcessor(eventProcessor: io.sentry.EventProcessor): void;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public replaceOptions(param0: io.sentry.SentryOptions): void;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public replaceOptions(this_: io.sentry.SentryOptions): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public getUser(): io.sentry.protocol.User;
			public setLevel(this_: io.sentry.SentryLevel): void;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public startSession(): io.sentry.Scope.SessionPair;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public setLastEventId(param0: io.sentry.protocol.SentryId): void;
			public setContexts(this_: string, key: java.lang.Number): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public setRequest(this_: io.sentry.protocol.Request): void;
			public getTransactionName(): string;
			public setLastEventId(lastEventId: io.sentry.protocol.SentryId): void;
			public getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public withTransaction(this_: io.sentry.Scope.IWithTransaction): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public setTransaction(tx: string): void;
			public getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public setReplayId(this_: io.sentry.protocol.SentryId): void;
			public assignTraceContext(param0: io.sentry.SentryEvent): void;
			public removeAttribute(param0: string): void;
			public getSession(): io.sentry.Session;
			public getScreen(): string;
			public getEventProcessorsWithOrder(): java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
			public bindClient(client: io.sentry.ISentryClient): void;
			public getTags(): java.util.Map<string,string>;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public setContexts(this_: string, key: any): void;
			public clearAttachments(): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getReplayId(): io.sentry.protocol.SentryId;
			public setTransaction(param0: string): void;
			public setContexts(this_: string, key: java.lang.Character): void;
			public setAttribute(param0: string, param1: any): void;
			public setTag(this_: string, key: string): void;
			public getLevel(): io.sentry.SentryLevel;
			public addBreadcrumb(this_: io.sentry.Breadcrumb, breadcrumb: io.sentry.Hint): void;
			public setContexts(this_: string, key: androidNative.Array<any>): void;
			public removeContexts(key: string): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public removeTag(this_: string): void;
			public getClient(): io.sentry.ISentryClient;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public clearFeatureFlags(): void;
		}
		export module Scope {
			export class IWithPropagationContext {
				public static class: java.lang.Class<io.sentry.Scope.IWithPropagationContext>;
				/**
				 * Constructs a new instance of the io.sentry.Scope$IWithPropagationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: io.sentry.PropagationContext): void;
				});
				public constructor();
				public accept(param0: io.sentry.PropagationContext): void;
			}
			export class IWithSession {
				public static class: java.lang.Class<io.sentry.Scope.IWithSession>;
				/**
				 * Constructs a new instance of the io.sentry.Scope$IWithSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: io.sentry.Session): void;
				});
				public constructor();
				public accept(param0: io.sentry.Session): void;
			}
			export class IWithTransaction {
				public static class: java.lang.Class<io.sentry.Scope.IWithTransaction>;
				/**
				 * Constructs a new instance of the io.sentry.Scope$IWithTransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: io.sentry.ITransaction): void;
				});
				public constructor();
				public accept(param0: io.sentry.ITransaction): void;
			}
			export class SessionPair {
				public static class: java.lang.Class<io.sentry.Scope.SessionPair>;
				public constructor(current: io.sentry.Session, previous: io.sentry.Session);
				public getCurrent(): io.sentry.Session;
				public getPrevious(): io.sentry.Session;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ScopeBindingMode {
			public static class: java.lang.Class<io.sentry.ScopeBindingMode>;
			public static AUTO: io.sentry.ScopeBindingMode;
			public static ON: io.sentry.ScopeBindingMode;
			public static OFF: io.sentry.ScopeBindingMode;
			public static values(): androidNative.Array<io.sentry.ScopeBindingMode>;
			public static valueOf(name: string): io.sentry.ScopeBindingMode;
		}
	}
}

declare module io {
	export module sentry {
		export class ScopeCallback {
			public static class: java.lang.Class<io.sentry.ScopeCallback>;
			/**
			 * Constructs a new instance of the io.sentry.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				run(param0: io.sentry.IScope): void;
			});
			public constructor();
			public run(param0: io.sentry.IScope): void;
		}
	}
}

declare module io {
	export module sentry {
		export abstract class ScopeObserverAdapter extends io.sentry.IScopeObserver {
			public static class: java.lang.Class<io.sentry.ScopeObserverAdapter>;
			public setBreadcrumbs(breadcrumbs: java.util.Collection<io.sentry.Breadcrumb>): void;
			public setTags(param0: java.util.Map<string,string>): void;
			public setExtras(extras: java.util.Map<string,any>): void;
			public setReplayId(param0: io.sentry.protocol.SentryId): void;
			public setContexts(contexts: io.sentry.protocol.Contexts): void;
			public addBreadcrumb(crumb: io.sentry.Breadcrumb): void;
			public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
			public setExtra(param0: string, param1: string): void;
			public removeExtra(key: string): void;
			public setFingerprint(param0: java.util.Collection<string>): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public addAttachment(attachment: io.sentry.Attachment): void;
			public setUser(user: io.sentry.protocol.User): void;
			public setTag(key: string, value: string): void;
			public setFingerprint(fingerprint: java.util.Collection<string>): void;
			public setTag(param0: string, param1: string): void;
			public setContexts(param0: io.sentry.protocol.Contexts): void;
			public setTransaction(transaction: string): void;
			public clearAttachments(): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public removeExtra(param0: string): void;
			public setTrace(param0: io.sentry.SpanContext, param1: io.sentry.IScope): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public constructor();
			public removeTag(key: string): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setReplayId(replayId: io.sentry.protocol.SentryId): void;
			public setExtra(key: string, value: string): void;
			public setTags(tags: java.util.Map<string,string>): void;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setTrace(spanContext: io.sentry.SpanContext, scope: io.sentry.IScope): void;
			public setRequest(request: io.sentry.protocol.Request): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ScopeType {
			public static class: java.lang.Class<io.sentry.ScopeType>;
			public static CURRENT: io.sentry.ScopeType;
			public static ISOLATION: io.sentry.ScopeType;
			public static GLOBAL: io.sentry.ScopeType;
			public static COMBINED: io.sentry.ScopeType;
			public static values(): androidNative.Array<io.sentry.ScopeType>;
			public static valueOf(name: string): io.sentry.ScopeType;
		}
	}
}

declare module io {
	export module sentry {
		export class Scopes extends io.sentry.IScopes {
			public static class: java.lang.Class<io.sentry.Scopes>;
			public close(param0: boolean): void;
			public constructor(scope: io.sentry.IScope, isolationScope: io.sentry.IScope, globalScope: io.sentry.IScope, creator: string);
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(this_: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			public captureEnvelope(e: io.sentry.SentryEnvelope, this_: io.sentry.Hint): io.sentry.protocol.SentryId;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public withScope(ignored: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public captureProfileChunk(this_: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(this_: io.sentry.protocol.SentryTransaction, transaction: io.sentry.TraceContext, traceContext: io.sentry.Hint, hint: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(key: string, value: string): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			/** @deprecated */
			public captureUserFeedback(this_: io.sentry.UserFeedback): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public configureScope(this_: io.sentry.ScopeType, scopeType: io.sentry.ScopeCallback): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public getParentScopes(): io.sentry.IScopes;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public getCreator(): string;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public close(integration: boolean): void;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public captureFeedback(e: io.sentry.protocol.Feedback, this_: io.sentry.Hint, feedback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			public flush(this_: number): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public withIsolationScope(ignored: io.sentry.ScopeCallback): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public getCombinedScopeView(): io.sentry.IScope;
			public captureReplay(this_: io.sentry.SentryReplayEvent, replay: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public getClient(): io.sentry.ISentryClient;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class ScopesAdapter extends io.sentry.IScopes {
			public static class: java.lang.Class<io.sentry.ScopesAdapter>;
			public captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public close(param0: boolean): void;
			public pushScope(): io.sentry.ISentryLifecycleToken;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(message: string): void;
			public isAncestorOf(otherScopes: io.sentry.IScopes): boolean;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
			/** @deprecated */
			public clone(): io.sentry.IHub;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureProfileChunk(param0: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public logger(): io.sentry.logger.ILoggerApi;
			public captureReplay(replay: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public stopProfiler(): void;
			public captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setUser(param0: io.sentry.protocol.User): void;
			public withIsolationScope(param0: io.sentry.ScopeCallback): void;
			public startProfiler(): void;
			public setAttributes(param0: io.sentry.SentryAttributes): void;
			public reportFullyDisplayed(): void;
			public removeAttribute(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureReplay(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public isNoOp(): boolean;
			public flush(param0: number): void;
			public metrics(): io.sentry.metrics.IMetricsApi;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(key: string, value: string): void;
			public withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public setTransaction(transaction: string): void;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public forkedCurrentScope(param0: string): io.sentry.IScopes;
			public isHealthy(): boolean;
			public removeTag(param0: string): void;
			public setAttribute(key: string, value: any): void;
			public removeTag(key: string): void;
			public setSpanContext(throwable: java.lang.Throwable, span: io.sentry.ISpan, transactionName: string): void;
			public forkedRootScopes(param0: string): io.sentry.IScopes;
			public static getInstance(): io.sentry.ScopesAdapter;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public setAttributes(attributes: io.sentry.SentryAttributes): void;
			public setActiveSpan(param0: io.sentry.ISpan): void;
			public withScope(callback: io.sentry.ScopeCallback): void;
			public captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public setAttribute(attribute: io.sentry.SentryAttribute): void;
			public setActiveSpan(span: io.sentry.ISpan): void;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint, profilingTraceData: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public getParentScopes(): io.sentry.IScopes;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureMessage(message: string): io.sentry.protocol.SentryId;
			public getIsolationScope(): io.sentry.IScope;
			public removeExtra(key: string): void;
			public captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeType, param1: io.sentry.ScopeCallback): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public getScope(): io.sentry.IScope;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			public startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public setExtra(key: string, value: string): void;
			public close(isRestarting: boolean): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public setAttribute(param0: io.sentry.SentryAttribute): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public configureScope(callback: io.sentry.ScopeCallback): void;
			public removeAttribute(param0: string): void;
			/** @deprecated */
			public captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public bindClient(client: io.sentry.ISentryClient): void;
			public feedback(): io.sentry.IFeedbackApi;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public setUser(user: io.sentry.protocol.User): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public forkedScopes(param0: string): io.sentry.IScopes;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public forkedCurrentScope(creator: string): io.sentry.IScopes;
			public captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public forkedRootScopes(creator: string): io.sentry.IScopes;
			public addBreadcrumb(message: string, category: string): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public getGlobalScope(): io.sentry.IScope;
			public setTransaction(param0: string): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public isAncestorOf(param0: io.sentry.IScopes): boolean;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public setAttribute(param0: string, param1: any): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			/** @deprecated */
			public popScope(): void;
			public flush(timeoutMillis: number): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureProfileChunk(profileChunk: io.sentry.ProfileChunk): io.sentry.protocol.SentryId;
			public setFingerprint(fingerprint: java.util.List<string>): void;
			public forkedScopes(creator: string): io.sentry.IScopes;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class ScopesStorageFactory {
			public static class: java.lang.Class<io.sentry.ScopesStorageFactory>;
			public static create(loadClass: io.sentry.util.LoadClass, logger: io.sentry.ILogger): io.sentry.IScopesStorage;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class ScreenshotStrategyType {
			public static class: java.lang.Class<io.sentry.ScreenshotStrategyType>;
			public static CANVAS: io.sentry.ScreenshotStrategyType;
			public static PIXEL_COPY: io.sentry.ScreenshotStrategyType;
			public static values(): androidNative.Array<io.sentry.ScreenshotStrategyType>;
			public static valueOf(name: string): io.sentry.ScreenshotStrategyType;
		}
	}
}

declare module io {
	export module sentry {
		export class SendCachedEnvelopeFireAndForgetIntegration implements io.sentry.Integration, io.sentry.IConnectionStatusProvider.IConnectionStatusObserver {
			public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration>;
			public constructor(factory: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
			public onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
			public close(): void;
			public onConnectionStatusChanged(status: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
			public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
			public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
		}
		export module SendCachedEnvelopeFireAndForgetIntegration {
			export class SendFireAndForget {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(): void;
				});
				public constructor();
				public send(): void;
			}
			export class SendFireAndForgetDirPath {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetDirPath interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDirPath(): string;
				});
				public constructor();
				public getDirPath(): string;
			}
			export class SendFireAndForgetFactory {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					hasValidPath(dirPath: string, logger: io.sentry.ILogger): boolean;
					processDir(directoryProcessor: io.sentry.DirectoryProcessor, dirPath: string, logger: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					lambda$processDir$0(logger: io.sentry.ILogger, dirPath: string, directoryProcessor: io.sentry.DirectoryProcessor, dirFile: java.io.File): void;
				});
				public constructor();
				public processDir(directoryProcessor: io.sentry.DirectoryProcessor, dirPath: string, logger: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
				public hasValidPath(dirPath: string, logger: io.sentry.ILogger): boolean;
				public create(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SendFireAndForgetEnvelopeSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetEnvelopeSender>;
			public constructor(sendFireAndForgetDirPath: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public create(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public processDir(directoryProcessor: io.sentry.DirectoryProcessor, dirPath: string, logger: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public hasValidPath(dirPath: string, logger: io.sentry.ILogger): boolean;
			public create(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
		}
	}
}

declare module io {
	export module sentry {
		export class SendFireAndForgetOutboxSender extends io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetOutboxSender>;
			public constructor(sendFireAndForgetDirPath: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public create(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public processDir(directoryProcessor: io.sentry.DirectoryProcessor, dirPath: string, logger: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public hasValidPath(dirPath: string, logger: io.sentry.ILogger): boolean;
			public create(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
		}
	}
}

declare module io {
	export module sentry {
		export class Sentry {
			public static class: java.lang.Class<io.sentry.Sentry>;
			public static APP_START_PROFILING_CONFIG_FILE_NAME: string = "app_start_profiling_config";
			public static withScope(callback: io.sentry.ScopeCallback): void;
			/** @deprecated */
			public static captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static stopProfiler(): void;
			public static getBaggage(): io.sentry.BaggageHeader;
			public static setAttributes(attributes: io.sentry.SentryAttributes): void;
			/** @deprecated */
			public static captureFeedback(feedback: io.sentry.protocol.Feedback): io.sentry.protocol.SentryId;
			public static addBreadcrumb(message: string): void;
			public static setAttribute(attribute: io.sentry.SentryAttribute): void;
			public static captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			/** @deprecated */
			public static popScope(): void;
			public static continueTrace(sentryTrace: string, baggageHeaders: java.util.List<string>): io.sentry.TransactionContext;
			/** @deprecated */
			public static showUserFeedbackDialog(associatedEventId: io.sentry.protocol.SentryId, configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public static logger(): io.sentry.logger.ILoggerApi;
			public static captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static getSpan(): io.sentry.ISpan;
			public static forkedCurrentScope(creator: string): io.sentry.IScopes;
			public static metrics(): io.sentry.metrics.IMetricsApi;
			public static getTraceparent(): io.sentry.SentryTraceHeader;
			/** @deprecated */
			public static showUserFeedbackDialog(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			public static setCurrentScopes(scopes: io.sentry.IScopes): io.sentry.ISentryLifecycleToken;
			public static captureMessage(message: string, level: io.sentry.SentryLevel, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static init(clazz: io.sentry.OptionsContainer<any>, optionsConfiguration: io.sentry.Sentry.OptionsConfiguration<any>): void;
			public static getExtendedAppStartSpan(): io.sentry.ISpan;
			public static getLastEventId(): io.sentry.protocol.SentryId;
			public static endSession(): void;
			public static startTransaction(name: string, operation: string, description: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public static forkedScopes(creator: string): io.sentry.IScopes;
			public static init(optionsConfiguration: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>): void;
			public static getCurrentScopes(ensureForked: boolean): io.sentry.IScopes;
			public static setAttribute(key: string, value: any): void;
			public static init(options: io.sentry.SentryOptions): void;
			public static captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static setLevel(level: io.sentry.SentryLevel): void;
			public static startTransaction(name: string, operation: string): io.sentry.ITransaction;
			public static extendAppStart(): void;
			public static addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public static captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			/** @deprecated */
			public static showUserFeedbackDialog(): void;
			public static getCurrentScopes(): io.sentry.IScopes;
			public static clearBreadcrumbs(): void;
			public static setExtra(key: string, value: string): void;
			public static captureEvent(event: io.sentry.SentryEvent, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static finishExtendedAppStart(): void;
			public static setFingerprint(fingerprint: java.util.List<string>): void;
			public static addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public static captureMessage(message: string): io.sentry.protocol.SentryId;
			public static reportFullyDisplayed(): void;
			public static captureMessage(message: string, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static pushIsolationScope(): io.sentry.ISentryLifecycleToken;
			public static startSession(): void;
			public static init(optionsConfiguration: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>, globalHubMode: boolean): void;
			public static setTransaction(transaction: string): void;
			public static withIsolationScope(callback: io.sentry.ScopeCallback): void;
			public static captureCheckIn(checkIn: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public static isCrashedLastRun(): java.lang.Boolean;
			public static replay(): io.sentry.IReplayApi;
			public static removeAttribute(key: string): void;
			public static isEnabled(): boolean;
			public static startTransaction(transactionContext: io.sentry.TransactionContext, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public static removeTag(key: string): void;
			public static forkedRootScopes(creator: string): io.sentry.IScopes;
			public static captureException(throwable: java.lang.Throwable, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static bindClient(client: io.sentry.ISentryClient): void;
			public static captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static addBreadcrumb(breadcrumb: io.sentry.Breadcrumb, hint: io.sentry.Hint): void;
			public static startProfiler(): void;
			public static setUser(user: io.sentry.protocol.User): void;
			public static setTag(key: string, value: string): void;
			public static flush(timeoutMillis: number): void;
			public static configureScope(callback: io.sentry.ScopeCallback): void;
			public static distribution(): io.sentry.IDistributionApi;
			public static configureScope(scopeType: io.sentry.ScopeType, callback: io.sentry.ScopeCallback): void;
			public static init(): void;
			public static feedback(): io.sentry.IFeedbackApi;
			public static close(): void;
			/** @deprecated */
			public static captureFeedback(feedback: io.sentry.protocol.Feedback, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static addBreadcrumb(message: string, category: string): void;
			public static captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint, callback: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static init(dsn: string): void;
			public static pushScope(): io.sentry.ISentryLifecycleToken;
			public static startTransaction(name: string, operation: string, transactionOptions: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public static isHealthy(): boolean;
			/** @deprecated */
			public static getCurrentHub(): io.sentry.IHub;
			/** @deprecated */
			public static captureUserFeedback(userFeedback: io.sentry.UserFeedback): void;
			public static getGlobalScope(): io.sentry.IScope;
			public static init(clazz: io.sentry.OptionsContainer<any>, optionsConfiguration: io.sentry.Sentry.OptionsConfiguration<any>, globalHubMode: boolean): void;
			public static removeExtra(key: string): void;
			/** @deprecated */
			public static setCurrentHub(hub: io.sentry.IHub): io.sentry.ISentryLifecycleToken;
			public static startTransaction(transactionContexts: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
		export module Sentry {
			export class OptionsConfiguration<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Sentry.OptionsConfiguration<any>>;
				/**
				 * Constructs a new instance of the io.sentry.Sentry$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					configure(param0: T): void;
				});
				public constructor();
				public configure(param0: T): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryAppStartProfilingOptions implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryAppStartProfilingOptions>;
			public setProfileLifecycle(profileLifecycle: io.sentry.ProfileLifecycle): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public isTraceSampled(): boolean;
			public setProfileSampleRate(profileSampleRate: java.lang.Double): void;
			public setContinuousProfilingEnabled(continuousProfilingEnabled: boolean): void;
			public setTraceSampled(traceSampled: boolean): void;
			public getProfilingTracesDirPath(): string;
			public isContinuousProfileSampled(): boolean;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public isContinuousProfilingEnabled(): boolean;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getTraceSampleRate(): java.lang.Double;
			public setProfilingTracesHz(profilingTracesHz: number): void;
			public setTraceSampleRate(traceSampleRate: java.lang.Double): void;
			public setProfilingTracesDirPath(profilingTracesDirPath: string): void;
			public constructor();
			public getProfileLifecycle(): io.sentry.ProfileLifecycle;
			public isEnableAppStartProfiling(): boolean;
			public setEnableLegacyProfiling(enableLegacyProfiling: boolean): void;
			public setProfilingEnabled(profilingEnabled: boolean): void;
			public setProfileSampled(profileSampled: boolean): void;
			public setContinuousProfileSampled(continuousProfileSampled: boolean): void;
			public getUnknown(): java.util.Map<string,any>;
			public isProfilingEnabled(): boolean;
			public setStartProfilerOnAppStart(startProfilerOnAppStart: boolean): void;
			public isStartProfilerOnAppStart(): boolean;
			public isEnableLegacyProfiling(): boolean;
			public getProfileSampleRate(): java.lang.Double;
			public getProfilingTracesHz(): number;
			public isProfileSampled(): boolean;
			public setEnableAppStartProfiling(enableAppStartProfiling: boolean): void;
		}
		export module SentryAppStartProfilingOptions {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryAppStartProfilingOptions> {
				public static class: java.lang.Class<io.sentry.SentryAppStartProfilingOptions.Deserializer>;
				public deserialize(profileSampleRate: io.sentry.ObjectReader, continuousProfileSampled: io.sentry.ILogger): io.sentry.SentryAppStartProfilingOptions;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryAppStartProfilingOptions.JsonKeys>;
				public static PROFILE_SAMPLED: string = "profile_sampled";
				public static PROFILE_SAMPLE_RATE: string = "profile_sample_rate";
				public static CONTINUOUS_PROFILE_SAMPLED: string = "continuous_profile_sampled";
				public static TRACE_SAMPLED: string = "trace_sampled";
				public static TRACE_SAMPLE_RATE: string = "trace_sample_rate";
				public static PROFILING_TRACES_DIR_PATH: string = "profiling_traces_dir_path";
				public static IS_PROFILING_ENABLED: string = "is_profiling_enabled";
				public static IS_CONTINUOUS_PROFILING_ENABLED: string = "is_continuous_profiling_enabled";
				public static PROFILE_LIFECYCLE: string = "profile_lifecycle";
				public static PROFILING_TRACES_HZ: string = "profiling_traces_hz";
				public static IS_ENABLE_APP_START_PROFILING: string = "is_enable_app_start_profiling";
				public static IS_START_PROFILER_ON_APP_START: string = "is_start_profiler_on_app_start";
				public static ENABLE_LEGACY_PROFILING: string = "enable_legacy_profiling";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryAttribute {
			public static class: java.lang.Class<io.sentry.SentryAttribute>;
			public getName(): string;
			public getValue(): any;
			public static integerAttribute(name: string, value: java.lang.Integer): io.sentry.SentryAttribute;
			public static doubleAttribute(name: string, value: java.lang.Double): io.sentry.SentryAttribute;
			public static arrayAttribute(name: string, value: androidNative.Array<any>): io.sentry.SentryAttribute;
			public static stringAttribute(name: string, value: string): io.sentry.SentryAttribute;
			public static arrayAttribute(name: string, value: java.util.Collection<any>): io.sentry.SentryAttribute;
			public static booleanAttribute(name: string, value: java.lang.Boolean): io.sentry.SentryAttribute;
			public static named(name: string, value: any): io.sentry.SentryAttribute;
			public getType(): io.sentry.SentryAttributeType;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryAttributeType {
			public static class: java.lang.Class<io.sentry.SentryAttributeType>;
			public static STRING: io.sentry.SentryAttributeType;
			public static BOOLEAN: io.sentry.SentryAttributeType;
			public static INTEGER: io.sentry.SentryAttributeType;
			public static DOUBLE: io.sentry.SentryAttributeType;
			public static ARRAY: io.sentry.SentryAttributeType;
			public static valueOf(name: string): io.sentry.SentryAttributeType;
			public static inferFrom(value: any): io.sentry.SentryAttributeType;
			public apiName(): string;
			public static values(): androidNative.Array<io.sentry.SentryAttributeType>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryAttributes {
			public static class: java.lang.Class<io.sentry.SentryAttributes>;
			public getAttributes(): java.util.Map<string,io.sentry.SentryAttribute>;
			public add(attribute: io.sentry.SentryAttribute): void;
			public static of(attribute: androidNative.Array<io.sentry.SentryAttribute>): io.sentry.SentryAttributes;
			public static fromMap(key: java.util.Map<string,any>): io.sentry.SentryAttributes;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryAutoDateProvider extends io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryAutoDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export abstract class SentryBaseEvent {
			public static class: java.lang.Class<io.sentry.SentryBaseEvent>;
			public static DEFAULT_PLATFORM: string = "java";
			public throwable: java.lang.Throwable;
			public getSdk(): io.sentry.protocol.SdkVersion;
			public getEventId(): io.sentry.protocol.SentryId;
			public setEventId(eventId: io.sentry.protocol.SentryId): void;
			public getExtra(key: string): any;
			public getPlatform(): string;
			public getContexts(): io.sentry.protocol.Contexts;
			public getUser(): io.sentry.protocol.User;
			public setDebugMeta(debugMeta: io.sentry.protocol.DebugMeta): void;
			public getThrowableMechanism(): java.lang.Throwable;
			public addBreadcrumb(message: string): void;
			public getRelease(): string;
			public setExtras(extra: java.util.Map<string,any>): void;
			public getTags(): java.util.Map<string,string>;
			public removeExtra(key: string): void;
			public setThrowable(throwable: java.lang.Throwable): void;
			public setUser(user: io.sentry.protocol.User): void;
			public setTag(key: string, value: string): void;
			public getEnvironment(): string;
			public constructor(eventId: io.sentry.protocol.SentryId);
			public getDebugMeta(): io.sentry.protocol.DebugMeta;
			public addBreadcrumb(breadcrumb: io.sentry.Breadcrumb): void;
			public setDist(dist: string): void;
			public setExtra(key: string, value: any): void;
			public setSdk(sdk: io.sentry.protocol.SdkVersion): void;
			public setServerName(serverName: string): void;
			public constructor();
			public setEnvironment(environment: string): void;
			public removeTag(key: string): void;
			public getDist(): string;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getThrowable(): java.lang.Throwable;
			public getTag(key: string): string;
			public setTags(tags: java.util.Map<string,string>): void;
			public setPlatform(platform: string): void;
			public getServerName(): string;
			public getBreadcrumbs(): java.util.List<io.sentry.Breadcrumb>;
			public setRequest(request: io.sentry.protocol.Request): void;
			public setRelease(release: string): void;
			public setBreadcrumbs(breadcrumbs: java.util.List<io.sentry.Breadcrumb>): void;
		}
		export module SentryBaseEvent {
			export class Deserializer {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.Deserializer>;
				public deserializeValue(deserializedTags: io.sentry.SentryBaseEvent, deserializedExtra: string, this_: io.sentry.ObjectReader, baseEvent: io.sentry.ILogger): boolean;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.JsonKeys>;
				public static EVENT_ID: string = "event_id";
				public static CONTEXTS: string = "contexts";
				public static SDK: string = "sdk";
				public static REQUEST: string = "request";
				public static TAGS: string = "tags";
				public static RELEASE: string = "release";
				public static ENVIRONMENT: string = "environment";
				public static PLATFORM: string = "platform";
				public static USER: string = "user";
				public static SERVER_NAME: string = "server_name";
				public static DIST: string = "dist";
				public static BREADCRUMBS: string = "breadcrumbs";
				public static DEBUG_META: string = "debug_meta";
				public static EXTRA: string = "extra";
				public constructor();
			}
			export class Serializer {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.Serializer>;
				public serialize(baseEvent: io.sentry.SentryBaseEvent, writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryClient extends io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.SentryClient>;
			public captureBatchedLogEvents(e: io.sentry.SentryLogEvents): void;
			public captureTransaction(envelope: io.sentry.protocol.SentryTransaction, e: io.sentry.TraceContext, trace: io.sentry.IScope, segmentName: io.sentry.Hint, this_: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureLog(tmpLogEvent: io.sentry.SentryLogEvent, this_: io.sentry.IScope): void;
			public close(param0: boolean): void;
			public captureMetric(tmpMetricsEvent: io.sentry.SentryMetricsEvent, this_: io.sentry.IScope, metricsEvent: io.sentry.Hint): void;
			public captureReplayEvent(param0: io.sentry.SentryReplayEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureException(throwable: java.lang.Throwable, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public constructor(options: io.sentry.SentryOptions);
			public captureMetric(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureEvent(ignored: io.sentry.SentryEvent, e: io.sentry.IScope, baggage: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(throwable: java.lang.Throwable, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureProfileChunk(envelopeItem: io.sentry.ProfileChunk, envelope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureBatchedLogEvents(param0: io.sentry.SentryLogEvents): void;
			/** @deprecated */
			public captureUserFeedback(e: io.sentry.UserFeedback): void;
			public captureMessage(message: string, level: io.sentry.SentryLevel, scope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureSession(e: io.sentry.Session, this_: io.sentry.Hint): void;
			public captureEvent(event: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureBatchedMetricsEvents(param0: io.sentry.SentryMetricsEvents): void;
			public captureEnvelope(this_: io.sentry.SentryEnvelope, envelope: io.sentry.Hint): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public close(e: boolean): void;
			public captureException(throwable: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureProfileChunk(param0: io.sentry.ProfileChunk, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureLog(param0: io.sentry.SentryLogEvent, param1: io.sentry.IScope): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public close(): void;
			public captureSession(session: io.sentry.Session): void;
			public captureBatchedMetricsEvents(e: io.sentry.SentryMetricsEvents): void;
			public isHealthy(): boolean;
			public captureReplayEvent(cleanupReplayFolder: io.sentry.SentryReplayEvent, envelope: io.sentry.IScope, e: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(envelope: io.sentry.CheckIn, e: io.sentry.IScope, this_: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureMessage(message: string, level: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			/** @deprecated */
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureFeedback(traceContext: io.sentry.protocol.Feedback, attachments: io.sentry.Hint, envelope: io.sentry.IScope): io.sentry.protocol.SentryId;
			public flush(timeoutMillis: number): void;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureFeedback(param0: io.sentry.protocol.Feedback, param1: io.sentry.Hint, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(transaction: io.sentry.protocol.SentryTransaction, traceContext: io.sentry.TraceContext, scope: io.sentry.IScope, hint: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
		export module SentryClient {
			export class SortBreadcrumbsByDate extends java.util.Comparator<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.SentryClient.SortBreadcrumbsByDate>;
				public compare(b1: io.sentry.Breadcrumb, b2: io.sentry.Breadcrumb): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryCrashLastRunState {
			public static class: java.lang.Class<io.sentry.SentryCrashLastRunState>;
			public static getInstance(): io.sentry.SentryCrashLastRunState;
			public isCrashedLastRun(nativeMarker: string, exists: boolean): java.lang.Boolean;
			public reset(): void;
			public setCrashedLastRun(this_: boolean): void;
		}
	}
}

declare module io {
	export module sentry {
		export abstract class SentryDate extends java.lang.Comparable<io.sentry.SentryDate> {
			public static class: java.lang.Class<io.sentry.SentryDate>;
			public nanoTimestamp(): number;
			public diff(otherDate: io.sentry.SentryDate): number;
			public laterDateNanosTimestampByDiff(otherDate: io.sentry.SentryDate): number;
			public isBefore(otherDate: io.sentry.SentryDate): boolean;
			public constructor();
			public compareTo(otherDate: io.sentry.SentryDate): number;
			public isAfter(otherDate: io.sentry.SentryDate): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryDateProvider>;
			/**
			 * Constructs a new instance of the io.sentry.SentryDateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				now(): io.sentry.SentryDate;
			});
			public constructor();
			public now(): io.sentry.SentryDate;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelope {
			public static class: java.lang.Class<io.sentry.SentryEnvelope>;
			public constructor(eventId: io.sentry.protocol.SentryId, sdkVersion: io.sentry.protocol.SdkVersion, items: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public static from(serializer: io.sentry.ISerializer, event: io.sentry.SentryBaseEvent, sdkVersion: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public static from(serializer: io.sentry.ISerializer, profilingTraceData: io.sentry.ProfilingTraceData, maxTraceFileSize: number, sdkVersion: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public constructor(eventId: io.sentry.protocol.SentryId, sdkVersion: io.sentry.protocol.SdkVersion, item: io.sentry.SentryEnvelopeItem);
			public getHeader(): io.sentry.SentryEnvelopeHeader;
			public static from(serializer: io.sentry.ISerializer, session: io.sentry.Session, sdkVersion: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public constructor(header: io.sentry.SentryEnvelopeHeader, items: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public getItems(): java.lang.Iterable<io.sentry.SentryEnvelopeItem>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeHeader implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader>;
			public setSentAt(sentAt: java.util.Date): void;
			public constructor(eventId: io.sentry.protocol.SentryId);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getEventId(): io.sentry.protocol.SentryId;
			public getSentAt(): java.util.Date;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(eventId: io.sentry.protocol.SentryId, sdkVersion: io.sentry.protocol.SdkVersion, traceContext: io.sentry.TraceContext);
			public constructor(eventId: io.sentry.protocol.SentryId, sdkVersion: io.sentry.protocol.SdkVersion);
			public getTraceContext(): io.sentry.TraceContext;
			public constructor();
			public getUnknown(): java.util.Map<string,any>;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryEnvelopeHeader {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeHeader> {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.Deserializer>;
				public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.SentryEnvelopeHeader;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.JsonKeys>;
				public static EVENT_ID: string = "event_id";
				public static SDK: string = "sdk";
				public static TRACE: string = "trace";
				public static SENT_AT: string = "sent_at";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItem {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItem>;
			/** @deprecated */
			public static fromUserFeedback(serializer: io.sentry.ISerializer, userFeedback: io.sentry.UserFeedback): io.sentry.SentryEnvelopeItem;
			public getData(): androidNative.Array<number>;
			public static fromEvent(serializer: io.sentry.ISerializer, event: io.sentry.SentryBaseEvent): io.sentry.SentryEnvelopeItem;
			public static fromClientReport(serializer: io.sentry.ISerializer, clientReport: io.sentry.clientreport.ClientReport): io.sentry.SentryEnvelopeItem;
			public getClientReport(this_: io.sentry.ISerializer): io.sentry.clientreport.ClientReport;
			public static fromLogs(serializer: io.sentry.ISerializer, logEvents: io.sentry.SentryLogEvents): io.sentry.SentryEnvelopeItem;
			public static fromReplay(serializer: io.sentry.ISerializer, logger: io.sentry.ILogger, replayEvent: io.sentry.SentryReplayEvent, replayRecording: io.sentry.ReplayRecording, cleanupReplayFolder: boolean): io.sentry.SentryEnvelopeItem;
			public static fromProfilingTrace(profilingTraceData: io.sentry.ProfilingTraceData, maxTraceFileSize: number, serializer: io.sentry.ISerializer): io.sentry.SentryEnvelopeItem;
			public getMetrics(this_: io.sentry.ISerializer): io.sentry.SentryMetricsEvents;
			public static fromProfileChunk(profileChunk: io.sentry.ProfileChunk, serializer: io.sentry.ISerializer): io.sentry.SentryEnvelopeItem;
			public getLogs(this_: io.sentry.ISerializer): io.sentry.SentryLogEvents;
			public getTransaction(this_: io.sentry.ISerializer): io.sentry.protocol.SentryTransaction;
			public static fromAttachment(serializer: io.sentry.ISerializer, logger: io.sentry.ILogger, attachment: io.sentry.Attachment, maxAttachmentSize: number): io.sentry.SentryEnvelopeItem;
			public static fromMetrics(serializer: io.sentry.ISerializer, metricsEvents: io.sentry.SentryMetricsEvents): io.sentry.SentryEnvelopeItem;
			public static fromCheckIn(serializer: io.sentry.ISerializer, checkIn: io.sentry.CheckIn): io.sentry.SentryEnvelopeItem;
			public getEvent(this_: io.sentry.ISerializer): io.sentry.SentryEvent;
			public static fromSession(serializer: io.sentry.ISerializer, session: io.sentry.Session): io.sentry.SentryEnvelopeItem;
			public static fromProfileChunk(profileChunk: io.sentry.ProfileChunk, serializer: io.sentry.ISerializer, profileConverter: io.sentry.IProfileConverter): io.sentry.SentryEnvelopeItem;
			public getHeader(): io.sentry.SentryEnvelopeItemHeader;
			public static fromPerfettoProfileChunk(profileChunk: io.sentry.ProfileChunk, serializer: io.sentry.ISerializer): io.sentry.SentryEnvelopeItem;
		}
		export module SentryEnvelopeItem {
			export class CachedItem {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItem.CachedItem>;
				public constructor(dataFactory: java.util.concurrent.Callable<androidNative.Array<number>>);
				public getBytes(): androidNative.Array<number>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItemHeader implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(type: io.sentry.SentryItemType, length: number, contentType: string, fileName: string, attachmentType: string, platform: string, itemCount: java.lang.Integer);
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getLength(): number;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getPlatform(): string;
			public getType(): io.sentry.SentryItemType;
			public getContentType(): string;
			public getUnknown(): java.util.Map<string,any>;
			public getItemCount(): java.lang.Integer;
			public getAttachmentType(): string;
			public getFileName(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryEnvelopeItemHeader {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeItemHeader> {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.Deserializer>;
				public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.SentryEnvelopeItemHeader;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.JsonKeys>;
				public static CONTENT_TYPE: string = "content_type";
				public static FILENAME: string = "filename";
				public static TYPE: string = "type";
				public static ATTACHMENT_TYPE: string = "attachment_type";
				public static LENGTH: string = "length";
				public static PLATFORM: string = "platform";
				public static ITEM_COUNT: string = "item_count";
				public static META_LENGTH: string = "meta_length";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEvent extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryEvent>;
			public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
			public setExceptions(exception: java.util.List<io.sentry.protocol.SentryException>): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(throwable: java.lang.Throwable);
			public setMessage(message: io.sentry.protocol.Message): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public removeModule(key: string): void;
			public getLogger(): string;
			public setTimestamp(timestamp: java.util.Date): void;
			public setModule(key: string, value: string): void;
			public getTimestamp(): java.util.Date;
			public setFingerprints(fingerprint: java.util.List<string>): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public setLogger(logger: string): void;
			public constructor(eventId: io.sentry.protocol.SentryId);
			public setTransaction(transaction: string): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public constructor(timestamp: java.util.Date);
			public isErrored(): boolean;
			public constructor();
			public getModule(key: string): string;
			public isCrashed(): boolean;
			public setModules(modules: java.util.Map<string,string>): void;
			public setLevel(level: io.sentry.SentryLevel): void;
			public setThreads(threads: java.util.List<io.sentry.protocol.SentryThread>): void;
			public getExceptions(): java.util.List<io.sentry.protocol.SentryException>;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public getLevel(): io.sentry.SentryLevel;
			public getUnhandledException(): io.sentry.protocol.SentryException;
			public getFingerprints(): java.util.List<string>;
			public getMessage(): io.sentry.protocol.Message;
		}
		export module SentryEvent {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEvent> {
				public static class: java.lang.Class<io.sentry.SentryEvent.Deserializer>;
				public deserialize(deserializedFingerprint: io.sentry.ObjectReader, deserializedModules: io.sentry.ILogger): io.sentry.SentryEvent;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryEvent.JsonKeys>;
				public static TIMESTAMP: string = "timestamp";
				public static MESSAGE: string = "message";
				public static LOGGER: string = "logger";
				public static THREADS: string = "threads";
				public static EXCEPTION: string = "exception";
				public static LEVEL: string = "level";
				public static TRANSACTION: string = "transaction";
				public static FINGERPRINT: string = "fingerprint";
				public static MODULES: string = "modules";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExceptionFactory {
			public static class: java.lang.Class<io.sentry.SentryExceptionFactory>;
			public constructor(sentryStackTraceFactory: io.sentry.SentryStackTraceFactory);
			public getSentryExceptions(throwable: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
			public getSentryExceptionsFromThread(thread: io.sentry.protocol.SentryThread, mechanism: io.sentry.protocol.Mechanism, throwable: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExecutorService extends io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.SentryExecutorService>;
			public submit(runnable: java.lang.Runnable): java.util.concurrent.Future<any>;
			public schedule(runnable: java.lang.Runnable, delayMillis: number): java.util.concurrent.Future<any>;
			public isClosed(): boolean;
			public static isSentryExecutorThread(): boolean;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(ignored: number): void;
			public close(param0: number): void;
			public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
			public constructor();
			public constructor(options: io.sentry.SentryOptions);
			public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
			public submit(callable: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
		}
		export module SentryExecutorService {
			export class SentryExecutorServiceThread {
				public static class: java.lang.Class<io.sentry.SentryExecutorService.SentryExecutorServiceThread>;
			}
			export class SentryExecutorServiceThreadFactory {
				public static class: java.lang.Class<io.sentry.SentryExecutorService.SentryExecutorServiceThreadFactory>;
				public newThread(r: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryFeedbackOptions {
			public static class: java.lang.Class<io.sentry.SentryFeedbackOptions>;
			public isShowBranding(): boolean;
			public getSubmitButtonLabel(): string;
			public setMessagePlaceholder(messagePlaceholder: string): void;
			public setFormHandler(iFormHandler: io.sentry.SentryFeedbackOptions.IFormHandler): void;
			public setShowBranding(showBranding: boolean): void;
			public getIsRequiredLabel(): string;
			public setOnSubmitError(onSubmitError: io.sentry.SentryFeedbackOptions.SentryFeedbackCallback): void;
			public setSuccessMessageText(successMessageText: string): void;
			public getNamePlaceholder(): string;
			public isEmailRequired(): boolean;
			public setEmailLabel(emailLabel: string): void;
			public getMessageLabel(): string;
			public setEmailRequired(isEmailRequired: boolean): void;
			public getFormTitle(): string;
			public getSuccessMessageText(): string;
			public setUseShakeGesture(useShakeGesture: boolean): void;
			public setUseSentryUser(useSentryUser: boolean): void;
			public getOnSubmitError(): io.sentry.SentryFeedbackOptions.SentryFeedbackCallback;
			public setNameRequired(isNameRequired: boolean): void;
			public getEmailLabel(): string;
			public setShowName(showName: boolean): void;
			public constructor(other: io.sentry.SentryFeedbackOptions);
			public setOnFormOpen(onFormOpen: java.lang.Runnable): void;
			public isShowEmail(): boolean;
			public getNameLabel(): string;
			public setNameLabel(nameLabel: string): void;
			public getFormHandler(): io.sentry.SentryFeedbackOptions.IFormHandler;
			public setIsRequiredLabel(isRequiredLabel: string): void;
			public setOnSubmitSuccess(onSubmitSuccess: io.sentry.SentryFeedbackOptions.SentryFeedbackCallback): void;
			public setShowEmail(showEmail: boolean): void;
			public isShowName(): boolean;
			public setSubmitButtonLabel(submitButtonLabel: string): void;
			public setEmailPlaceholder(emailPlaceholder: string): void;
			public getOnSubmitSuccess(): io.sentry.SentryFeedbackOptions.SentryFeedbackCallback;
			public getOnFormOpen(): java.lang.Runnable;
			public setFormTitle(formTitle: string): void;
			public isUseSentryUser(): boolean;
			public getEmailPlaceholder(): string;
			public setOnFormClose(onFormClose: java.lang.Runnable): void;
			public isNameRequired(): boolean;
			public setMessageLabel(messageLabel: string): void;
			public toString(): string;
			public isUseShakeGesture(): boolean;
			public getMessagePlaceholder(): string;
			public getCancelButtonLabel(): string;
			public setNamePlaceholder(namePlaceholder: string): void;
			public getOnFormClose(): java.lang.Runnable;
			public setCancelButtonLabel(cancelButtonLabel: string): void;
		}
		export module SentryFeedbackOptions {
			export class IFormHandler {
				public static class: java.lang.Class<io.sentry.SentryFeedbackOptions.IFormHandler>;
				/**
				 * Constructs a new instance of the io.sentry.SentryFeedbackOptions$IFormHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					showForm(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
				});
				public constructor();
				public showForm(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
			}
			export class OptionsConfigurator {
				public static class: java.lang.Class<io.sentry.SentryFeedbackOptions.OptionsConfigurator>;
				/**
				 * Constructs a new instance of the io.sentry.SentryFeedbackOptions$OptionsConfigurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					configure(param0: io.sentry.SentryFeedbackOptions): void;
				});
				public constructor();
				public configure(param0: io.sentry.SentryFeedbackOptions): void;
			}
			export class SentryFeedbackCallback {
				public static class: java.lang.Class<io.sentry.SentryFeedbackOptions.SentryFeedbackCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryFeedbackOptions$SentryFeedbackCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: io.sentry.protocol.Feedback): void;
				});
				public constructor();
				public call(param0: io.sentry.protocol.Feedback): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryInstantDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryInstantDate>;
			public nanoTimestamp(): number;
			public constructor(date: java.time.Instant);
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryInstantDateProvider extends io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryInstantDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryIntegrationPackageStorage {
			public static class: java.lang.Class<io.sentry.SentryIntegrationPackageStorage>;
			public addPackage(this_: string, name: string): void;
			public static getInstance(): io.sentry.SentryIntegrationPackageStorage;
			public addIntegration(integration: string): void;
			public getPackages(): java.util.Set<io.sentry.protocol.SentryPackage>;
			public clearStorage(): void;
			public checkForMixedVersions(sdkVersion: io.sentry.ILogger): boolean;
			public getIntegrations(): java.util.Set<string>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryItemType extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryItemType>;
			public static Session: io.sentry.SentryItemType;
			public static Event: io.sentry.SentryItemType;
			public static UserFeedback: io.sentry.SentryItemType;
			public static Attachment: io.sentry.SentryItemType;
			public static Transaction: io.sentry.SentryItemType;
			public static Profile: io.sentry.SentryItemType;
			public static ProfileChunk: io.sentry.SentryItemType;
			public static ClientReport: io.sentry.SentryItemType;
			public static ReplayEvent: io.sentry.SentryItemType;
			public static ReplayRecording: io.sentry.SentryItemType;
			public static ReplayVideo: io.sentry.SentryItemType;
			public static CheckIn: io.sentry.SentryItemType;
			public static Feedback: io.sentry.SentryItemType;
			public static Log: io.sentry.SentryItemType;
			public static TraceMetric: io.sentry.SentryItemType;
			public static Span: io.sentry.SentryItemType;
			public static Unknown: io.sentry.SentryItemType;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public static values(): androidNative.Array<io.sentry.SentryItemType>;
			public static resolve(item: any): io.sentry.SentryItemType;
			public static valueOfLabel(sentryItemType: string): io.sentry.SentryItemType;
			public getItemType(): string;
			public static valueOf(name: string): io.sentry.SentryItemType;
		}
		export module SentryItemType {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryItemType> {
				public static class: java.lang.Class<io.sentry.SentryItemType.Deserializer>;
				public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SentryItemType;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLevel extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLevel>;
			public static DEBUG: io.sentry.SentryLevel;
			public static INFO: io.sentry.SentryLevel;
			public static WARNING: io.sentry.SentryLevel;
			public static ERROR: io.sentry.SentryLevel;
			public static FATAL: io.sentry.SentryLevel;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public static valueOf(name: string): io.sentry.SentryLevel;
			public static values(): androidNative.Array<io.sentry.SentryLevel>;
		}
		export module SentryLevel {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.SentryLevel.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SentryLevel;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLockReason implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLockReason>;
			public static LOCKED: number = 1;
			public static WAITING: number = 2;
			public static SLEEPING: number = 4;
			public static BLOCKED: number = 8;
			public static ANY: number = 15;
			public getType(): number;
			public setClassName(className: string): void;
			public getThreadId(): java.lang.Long;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setThreadId(threadId: java.lang.Long): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getPackageName(): string;
			public getAddress(): string;
			public constructor();
			public setAddress(address: string): void;
			public setPackageName(packageName: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public equals(o: any): boolean;
			public getClassName(): string;
			public setType(type: number): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public constructor(other: io.sentry.SentryLockReason);
			public hashCode(): number;
		}
		export module SentryLockReason {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLockReason> {
				public static class: java.lang.Class<io.sentry.SentryLockReason.Deserializer>;
				public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.SentryLockReason;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryLockReason.JsonKeys>;
				public static TYPE: string = "type";
				public static ADDRESS: string = "address";
				public static PACKAGE_NAME: string = "package_name";
				public static CLASS_NAME: string = "class_name";
				public static THREAD_ID: string = "thread_id";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLogEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLogEvent>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setTimestamp(timestamp: java.lang.Double): void;
			public setBody(body: string): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(traceId: io.sentry.protocol.SentryId, timestamp: java.lang.Double, body: string, level: io.sentry.SentryLogLevel);
			public setLevel(level: io.sentry.SentryLogLevel): void;
			public setTraceId(traceId: io.sentry.protocol.SentryId): void;
			public setAttributes(attributes: java.util.Map<string,io.sentry.SentryLogEventAttributeValue>): void;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getLevel(): io.sentry.SentryLogLevel;
			public getAttributes(): java.util.Map<string,io.sentry.SentryLogEventAttributeValue>;
			public getSpanId(): io.sentry.SpanId;
			public getTimestamp(): java.lang.Double;
			public getUnknown(): java.util.Map<string,any>;
			public getSeverityNumber(): java.lang.Integer;
			public setAttribute(key: string, value: io.sentry.SentryLogEventAttributeValue): void;
			public setSpanId(spanId: io.sentry.SpanId): void;
			public constructor(traceId: io.sentry.protocol.SentryId, timestamp: io.sentry.SentryDate, body: string, level: io.sentry.SentryLogLevel);
			public getBody(): string;
			public setSeverityNumber(severityNumber: java.lang.Integer): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryLogEvent {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLogEvent> {
				public static class: java.lang.Class<io.sentry.SentryLogEvent.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SentryLogEvent;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryLogEvent.JsonKeys>;
				public static TIMESTAMP: string = "timestamp";
				public static TRACE_ID: string = "trace_id";
				public static SPAN_ID: string = "span_id";
				public static LEVEL: string = "level";
				public static SEVERITY_NUMBER: string = "severity_number";
				public static BODY: string = "body";
				public static ATTRIBUTES: string = "attributes";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLogEventAttributeValue implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLogEventAttributeValue>;
			public constructor(type: string, value: any);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public getValue(): any;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(type: io.sentry.SentryAttributeType, value: any);
			public static fromAttribute(attribute: io.sentry.SentryAttribute): io.sentry.SentryLogEventAttributeValue;
			public getType(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryLogEventAttributeValue {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLogEventAttributeValue> {
				public static class: java.lang.Class<io.sentry.SentryLogEventAttributeValue.Deserializer>;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SentryLogEventAttributeValue;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryLogEventAttributeValue.JsonKeys>;
				public static TYPE: string = "type";
				public static VALUE: string = "value";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLogEvents implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLogEvents>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public constructor(items: java.util.List<io.sentry.SentryLogEvent>);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getItems(): java.util.List<io.sentry.SentryLogEvent>;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryLogEvents {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLogEvents> {
				public static class: java.lang.Class<io.sentry.SentryLogEvents.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SentryLogEvents;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryLogEvents.JsonKeys>;
				public static ITEMS: string = "items";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLogLevel extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLogLevel>;
			public static TRACE: io.sentry.SentryLogLevel;
			public static DEBUG: io.sentry.SentryLogLevel;
			public static INFO: io.sentry.SentryLogLevel;
			public static WARN: io.sentry.SentryLogLevel;
			public static ERROR: io.sentry.SentryLogLevel;
			public static FATAL: io.sentry.SentryLogLevel;
			public getSeverityNumber(): number;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static values(): androidNative.Array<io.sentry.SentryLogLevel>;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public static valueOf(name: string): io.sentry.SentryLogLevel;
		}
		export module SentryLogLevel {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLogLevel> {
				public static class: java.lang.Class<io.sentry.SentryLogLevel.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SentryLogLevel;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLongDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryLongDate>;
			public constructor(nanos: number);
			public nanoTimestamp(): number;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export abstract class SentryMaskingOptions {
			public static class: java.lang.Class<io.sentry.SentryMaskingOptions>;
			public static TEXT_VIEW_CLASS_NAME: string = "android.widget.TextView";
			public static IMAGE_VIEW_CLASS_NAME: string = "android.widget.ImageView";
			public static WEB_VIEW_CLASS_NAME: string = "android.webkit.WebView";
			public static VIDEO_VIEW_CLASS_NAME: string = "android.widget.VideoView";
			public static CAMERAX_PREVIEW_VIEW_CLASS_NAME: string = "androidx.camera.view.PreviewView";
			public static ANDROIDX_MEDIA_VIEW_CLASS_NAME: string = "androidx.media3.ui.PlayerView";
			public static EXOPLAYER_CLASS_NAME: string = "com.google.android.exoplayer2.ui.PlayerView";
			public static EXOPLAYER_STYLED_CLASS_NAME: string = "com.google.android.exoplayer2.ui.StyledPlayerView";
			public maskViewClasses: java.util.Set<string>;
			public unmaskViewClasses: java.util.Set<string>;
			public maskViewContainerClass: string;
			public unmaskViewContainerClass: string;
			public getUnmaskViewClasses(): java.util.Set<string>;
			public setMaskViewContainerClass(containerClass: string): void;
			public trackCustomMasking(): void;
			public setMaskAllText(maskAllText: boolean): void;
			public addUnmaskViewClass(className: string): void;
			public addMaskViewClass(className: string): void;
			public getMaskViewContainerClass(): string;
			public getMaskViewClasses(): java.util.Set<string>;
			public constructor();
			public setUnmaskViewContainerClass(containerClass: string): void;
			public setMaskAllImages(maskAllImages: boolean): void;
			public getUnmaskViewContainerClass(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryMetricsEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryMetricsEvent>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(traceId: io.sentry.protocol.SentryId, timestamp: java.lang.Double, name: string, type: string, value: java.lang.Double);
			public setTimestamp(timestamp: java.lang.Double): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setValue(value: java.lang.Double): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getValue(): java.lang.Double;
			public setTraceId(traceId: io.sentry.protocol.SentryId): void;
			public getTraceId(): io.sentry.protocol.SentryId;
			public setAttributes(attributes: java.util.Map<string,io.sentry.SentryLogEventAttributeValue>): void;
			public constructor(traceId: io.sentry.protocol.SentryId, timestamp: io.sentry.SentryDate, name: string, type: string, value: java.lang.Double);
			public getAttributes(): java.util.Map<string,io.sentry.SentryLogEventAttributeValue>;
			public getSpanId(): io.sentry.SpanId;
			public getTimestamp(): java.lang.Double;
			public setType(type: string): void;
			public setUnit(unit: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public getUnit(): string;
			public getName(): string;
			public setName(name: string): void;
			public setSpanId(spanId: io.sentry.SpanId): void;
			public setAttribute(key: string, value: io.sentry.SentryLogEventAttributeValue): void;
			public getType(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryMetricsEvent {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryMetricsEvent> {
				public static class: java.lang.Class<io.sentry.SentryMetricsEvent.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SentryMetricsEvent;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryMetricsEvent.JsonKeys>;
				public static TIMESTAMP: string = "timestamp";
				public static TRACE_ID: string = "trace_id";
				public static SPAN_ID: string = "span_id";
				public static NAME: string = "name";
				public static TYPE: string = "type";
				public static UNIT: string = "unit";
				public static VALUE: string = "value";
				public static ATTRIBUTES: string = "attributes";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryMetricsEvents implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryMetricsEvents>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getItems(): java.util.List<io.sentry.SentryMetricsEvent>;
			public constructor(items: java.util.List<io.sentry.SentryMetricsEvent>);
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module SentryMetricsEvents {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryMetricsEvents> {
				public static class: java.lang.Class<io.sentry.SentryMetricsEvents.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SentryMetricsEvents;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryMetricsEvents.JsonKeys>;
				public static ITEMS: string = "items";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryNanotimeDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryNanotimeDate>;
			/** @deprecated */
			public constructor(date: java.util.Date, nanos: number);
			public nanoTimestamp(): number;
			public laterDateNanosTimestampByDiff(this_: io.sentry.SentryDate): number;
			public constructor(unixDateMillis: number, nanos: number);
			public compareTo(thisDateMillis: io.sentry.SentryDate): number;
			public constructor();
			public diff(this_: io.sentry.SentryDate): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryNanotimeDateProvider extends io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryNanotimeDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryOpenTelemetryMode {
			public static class: java.lang.Class<io.sentry.SentryOpenTelemetryMode>;
			public static AUTO: io.sentry.SentryOpenTelemetryMode;
			public static OFF: io.sentry.SentryOpenTelemetryMode;
			public static AGENT: io.sentry.SentryOpenTelemetryMode;
			public static AGENTLESS: io.sentry.SentryOpenTelemetryMode;
			public static AGENTLESS_SPRING: io.sentry.SentryOpenTelemetryMode;
			public static values(): androidNative.Array<io.sentry.SentryOpenTelemetryMode>;
			public static valueOf(name: string): io.sentry.SentryOpenTelemetryMode;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryOptions {
			public static class: java.lang.Class<io.sentry.SentryOptions>;
			public static DEFAULT_PROPAGATION_TARGETS: string = ".*";
			public static MAX_EVENT_SIZE_BYTES: number = 1048576;
			public lock: io.sentry.util.AutoClosableReentrantLock;
			public getBeforeBreadcrumb(): io.sentry.SentryOptions.BeforeBreadcrumbCallback;
			public setProfileLifecycle(profileLifecycle: io.sentry.ProfileLifecycle): void;
			public isSendModules(): boolean;
			public getIgnoredSpanOrigins(): java.util.List<io.sentry.FilterString>;
			public getFeedbackOptions(): io.sentry.SentryFeedbackOptions;
			public isEnableQueueTracing(): boolean;
			public getMaxAttachmentSize(): number;
			public setEnableShutdownHook(enableShutdownHook: boolean): void;
			public setDistinctId(distinctId: string): void;
			public getProfilingTracesDirPath(): string;
			public setConnectionTimeoutMillis(connectionTimeoutMillis: number): void;
			public getIgnoredErrors(): java.util.List<io.sentry.FilterString>;
			public setReadTimeoutMillis(readTimeoutMillis: number): void;
			public getReadTimeoutMillis(): number;
			public getModulesLoader(): io.sentry.internal.modules.IModulesLoader;
			public setTransactionProfiler(transactionProfiler: io.sentry.ITransactionProfiler): void;
			public setEnableBackpressureHandling(enableBackpressureHandling: boolean): void;
			public setConnectionStatusProvider(connectionStatusProvider: io.sentry.IConnectionStatusProvider): void;
			public getLogger(): io.sentry.ILogger;
			public setProxy(proxy: io.sentry.SentryOptions.Proxy): void;
			public setMetrics(metrics: io.sentry.SentryOptions.Metrics): void;
			public setCacheDirPath(cacheDirPath: string): void;
			public getScopeObservers(): java.util.List<io.sentry.IScopeObserver>;
			public setProfilingTracesDirPath(profilingTracesDirPath: string): void;
			public setEnableCacheTracing(enableCacheTracing: boolean): void;
			public getDiagnosticLevel(): io.sentry.SentryLevel;
			public getDist(): string;
			public setIgnoredSpanOrigins(filtered: java.util.List<string>): void;
			public merge(inAppInclude: io.sentry.ExternalOptions): void;
			public setOnOversizedEvent(onOversizedEvent: io.sentry.SentryOptions.OnOversizedEventCallback): void;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public getServerName(): string;
			public getFlushTimeoutMillis(): number;
			/** @deprecated */
			public setInstrumenter(instrumenter: io.sentry.Instrumenter): void;
			public isEnableUncaughtExceptionHandler(): boolean;
			public getIdleTimeout(): java.lang.Long;
			public setEnablePrettySerializationOutput(enablePrettySerializationOutput: boolean): void;
			public setGestureTargetLocators(locators: java.util.List<io.sentry.internal.gestures.GestureTargetLocator>): void;
			public getShutdownTimeoutMillis(): number;
			public getBeforeSendFeedback(): io.sentry.SentryOptions.BeforeSendCallback;
			public setRelease(release: string): void;
			public isEnableScopePersistence(): boolean;
			public setDsn(dsn: string): void;
			public getAppStartExtender(): io.sentry.IAppStartExtender;
			public setEnableUserInteractionBreadcrumbs(enableUserInteractionBreadcrumbs: boolean): void;
			public getThreadChecker(): io.sentry.util.thread.IThreadChecker;
			public setEnabled(enabled: boolean): void;
			public setThreadChecker(threadChecker: io.sentry.util.thread.IThreadChecker): void;
			public setBackpressureMonitor(backpressureMonitor: io.sentry.backpressure.IBackpressureMonitor): void;
			public getOpenTelemetryMode(): io.sentry.SentryOpenTelemetryMode;
			public isTraceOptionsRequests(): boolean;
			public addIgnoredTransaction(ignoredTransaction: string): void;
			public isSendDefaultPii(): boolean;
			public setSessionReplay(sessionReplayOptions: io.sentry.SentryReplayOptions): void;
			public getBeforeSendTransaction(): io.sentry.SentryOptions.BeforeSendTransactionCallback;
			public addIntegration(integration: io.sentry.Integration): void;
			public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
			public setExecutorService(executorService: io.sentry.ISentryExecutorService): void;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public isEnableBackpressureHandling(): boolean;
			public setReplayController(replayController: io.sentry.ReplayController): void;
			public setEnableTimeToFullDisplayTracing(enableTimeToFullDisplayTracing: boolean): void;
			public getLogs(): io.sentry.SentryOptions.Logs;
			public isEnableEventSizeLimiting(): boolean;
			public setDist(dist: string): void;
			public getDateProvider(): io.sentry.SentryDateProvider;
			public setServerName(serverName: string): void;
			public getProfileLifecycle(): io.sentry.ProfileLifecycle;
			public setProfilerConverter(profilerConverter: io.sentry.IProfileConverter): void;
			public addIgnoredExceptionForType(exceptionType: java.lang.Class<any>): void;
			public getSessionFlushTimeoutMillis(): number;
			public addScopeObserver(observer: io.sentry.IScopeObserver): void;
			public getIntegrations(): java.util.List<io.sentry.Integration>;
			public setBeforeSendFeedback(beforeSendFeedback: io.sentry.SentryOptions.BeforeSendCallback): void;
			public getMaxCacheItems(): number;
			public isEnabled(): boolean;
			/** @deprecated */
			public setTraceSampling(traceSampling: boolean): void;
			public setStartProfilerOnAppStart(startProfilerOnAppStart: boolean): void;
			public getMaxDepth(): number;
			public setFeedbackOptions(feedbackOptions: io.sentry.SentryFeedbackOptions): void;
			public getInitPriority(): io.sentry.InitPriority;
			public setTransportFactory(transportFactory: io.sentry.ITransportFactory): void;
			public setFullyDisplayedReporter(fullyDisplayedReporter: io.sentry.FullyDisplayedReporter): void;
			public addEventProcessor(eventProcessor: io.sentry.EventProcessor): void;
			public getEffectiveOrgId(): string;
			public isEnableUserInteractionBreadcrumbs(): boolean;
			public addOptionsObserver(observer: io.sentry.IOptionsObserver): void;
			public static empty(): io.sentry.SentryOptions;
			public isCaptureOpenTelemetryEvents(): boolean;
			public activate(): void;
			public setEnableDeduplication(enableDeduplication: boolean): void;
			public addIgnoredCheckIn(ignoredCheckIn: string): void;
			public setMaxRequestBodySize(maxRequestBodySize: io.sentry.SentryOptions.RequestSize): void;
			public getFatalLogger(): io.sentry.ILogger;
			public setAppStartExtender(appStartExtender: io.sentry.IAppStartExtender): void;
			public setOnDiscard(onDiscard: io.sentry.SentryOptions.OnDiscardCallback): void;
			public getOnOversizedEvent(): io.sentry.SentryOptions.OnOversizedEventCallback;
			public setMaxDepth(maxDepth: number): void;
			public setAttachServerName(attachServerName: boolean): void;
			public setEnableUserInteractionTracing(enableUserInteractionTracing: boolean): void;
			public setProfilesSampleRate(profilesSampleRate: java.lang.Double): void;
			public isEnableScreenTracking(): boolean;
			public getProfileSessionSampleRate(): java.lang.Double;
			public setPropagateTraceparent(propagateTraceparent: boolean): void;
			public isTraceSampling(): boolean;
			public setMaxQueueSize(maxQueueSize: number): void;
			public isEnableShutdownHook(): boolean;
			public addContextTag(contextTag: string): void;
			public getConnectionStatusProvider(): io.sentry.IConnectionStatusProvider;
			public getEnvelopeDiskCache(): io.sentry.cache.IEnvelopeCache;
			public getMaxBreadcrumbs(): number;
			public setDebugMetaLoader(debugMetaLoader: io.sentry.internal.debugmeta.IDebugMetaLoader): void;
			public setCaptureOpenTelemetryEvents(captureOpenTelemetryEvents: boolean): void;
			public isEnableDeduplication(): boolean;
			public setEnableLegacyProfiling(enableLegacyProfiling: boolean): void;
			public getOutboxPath(): string;
			public isProfilingEnabled(): boolean;
			public setGlobalHubMode(globalHubMode: java.lang.Boolean): void;
			public getProfilingTracesHz(): number;
			public getSentryClientName(): string;
			public setTransportGate(transportGate: io.sentry.transport.ITransportGate): void;
			public isEnableUserInteractionTracing(): boolean;
			public getClientReportRecorder(): io.sentry.clientreport.IClientReportRecorder;
			public getCompositePerformanceCollector(): io.sentry.CompositePerformanceCollector;
			public getOnDiscard(): io.sentry.SentryOptions.OnDiscardCallback;
			public setPrintUncaughtStackTrace(printUncaughtStackTrace: boolean): void;
			public setContinuousProfiler(continuousProfiler: io.sentry.IContinuousProfiler): void;
			public getTracePropagationTargets(): java.util.List<string>;
			public isAttachThreads(): boolean;
			public setDistribution(distribution: io.sentry.SentryOptions.DistributionOptions): void;
			public setAttachThreads(attachThreads: boolean): void;
			public getMaxTraceFileSize(): number;
			public addBundleId(this_: string): void;
			public getBackpressureMonitor(): io.sentry.backpressure.IBackpressureMonitor;
			public isStrictTraceContinuation(): boolean;
			public getCron(): io.sentry.SentryOptions.Cron;
			public addIgnoredSpanOrigin(ignoredSpanOrigin: string): void;
			public setInitPriority(initPriority: io.sentry.InitPriority): void;
			public findPersistingScopeObserver(): io.sentry.cache.PersistingScopeObserver;
			public getBeforeSendReplay(): io.sentry.SentryOptions.BeforeSendReplayCallback;
			public getIgnoredTransactions(): java.util.List<io.sentry.FilterString>;
			public setEnableScreenTracking(enableScreenTracking: boolean): void;
			public getSessionReplay(): io.sentry.SentryReplayOptions;
			public isAttachStacktrace(): boolean;
			public getMetrics(): io.sentry.SentryOptions.Metrics;
			public setEnableAppStartProfiling(enableAppStartProfiling: boolean): void;
			public getFullyDisplayedReporter(): io.sentry.FullyDisplayedReporter;
			public isTracingEnabled(): boolean;
			public setOrgId(orgId: string): void;
			public setFatalLogger(logger: io.sentry.ILogger): void;
			public setAttachStacktrace(attachStacktrace: boolean): void;
			public setTimerExecutorService(timerExecutorService: io.sentry.ISentryExecutorService): void;
			public setLogger(logger: io.sentry.ILogger): void;
			public setBeforeBreadcrumb(beforeBreadcrumb: io.sentry.SentryOptions.BeforeBreadcrumbCallback): void;
			public isDebug(): boolean;
			public getSocketTagger(): io.sentry.ISocketTagger;
			public setMaxBreadcrumbs(maxBreadcrumbs: number): void;
			public getRelease(): string;
			public setStrictTraceContinuation(strictTraceContinuation: boolean): void;
			public setIgnoredErrors(patterns: java.util.List<string>): void;
			public isPropagateTraceparent(): boolean;
			public getMaxQueueSize(): number;
			public getProfilesSampler(): io.sentry.SentryOptions.ProfilesSamplerCallback;
			public setEnableAutoSessionTracking(enableAutoSessionTracking: boolean): void;
			public isSendClientReports(): boolean;
			public getConnectionTimeoutMillis(): number;
			public setEnableUncaughtExceptionHandler(enableUncaughtExceptionHandler: boolean): void;
			public setSendDefaultPii(sendDefaultPii: boolean): void;
			public getGestureTargetLocators(): java.util.List<io.sentry.internal.gestures.GestureTargetLocator>;
			public setDateProvider(dateProvider: io.sentry.SentryDateProvider): void;
			public getDistinctId(): string;
			public getProguardUuid(): string;
			public isEnableAppStartProfiling(): boolean;
			public constructor();
			public isEnableTimeToFullDisplayTracing(): boolean;
			public setEnableExternalConfiguration(enableExternalConfiguration: boolean): void;
			public setShutdownTimeoutMillis(shutdownTimeoutMillis: number): void;
			public setIgnoredTransactions(filtered: java.util.List<string>): void;
			public setBeforeSendTransaction(beforeSendTransaction: io.sentry.SentryOptions.BeforeSendTransactionCallback): void;
			public setTraceOptionsRequests(traceOptionsRequests: boolean): void;
			public getBundleIds(): java.util.Set<string>;
			public getIgnoredCheckIns(): java.util.List<io.sentry.FilterString>;
			public getExperimental(): io.sentry.ExperimentalOptions;
			public addIgnoredError(pattern: string): void;
			public getBeforeEnvelopeCallback(): io.sentry.SentryOptions.BeforeEnvelopeCallback;
			public setBeforeEnvelopeCallback(beforeEnvelopeCallback: io.sentry.SentryOptions.BeforeEnvelopeCallback): void;
			public setSerializer(serializer: io.sentry.ISerializer): void;
			public getReplayController(): io.sentry.ReplayController;
			public setMaxTraceFileSize(maxTraceFileSize: number): void;
			public getVersionDetector(): io.sentry.IVersionDetector;
			public setSdkVersion(sdkVersion: io.sentry.protocol.SdkVersion): void;
			public setTracePropagationTargets(filteredTracePropagationTargets: java.util.List<string>): void;
			public setDebug(debug: boolean): void;
			public setLogs(logs: io.sentry.SentryOptions.Logs): void;
			public getPerformanceCollectors(): java.util.List<io.sentry.IPerformanceCollector>;
			public setMaxSpans(maxSpans: number): void;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public setEnableScopePersistence(enableScopePersistence: boolean): void;
			public getTransportGate(): io.sentry.transport.ITransportGate;
			public getDefaultScopeType(): io.sentry.ScopeType;
			public setEnvelopeDiskCache(envelopeDiskCache: io.sentry.cache.IEnvelopeCache): void;
			public setTag(key: string, value: string): void;
			public getOrgId(): string;
			public isContinuousProfilingEnabled(): boolean;
			public getMaxFeatureFlags(): number;
			public setEnableQueueTracing(enableQueueTracing: boolean): void;
			public setScopesStorageFactory(scopesStorageFactory: io.sentry.IScopesStorageFactory): void;
			public setTracesSampleRate(tracesSampleRate: java.lang.Double): void;
			public getExecutorService(): io.sentry.ISentryExecutorService;
			public getMaxSpans(): number;
			public setProfilingTracesHz(profilingTracesHz: number): void;
			public getDeadlineTimeout(): number;
			public getDsn(): string;
			public getSampleRate(): java.lang.Double;
			public setSslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): void;
			public setDistributionController(distributionController: io.sentry.IDistributionApi): void;
			public setSpanFactory(spanFactory: io.sentry.ISpanFactory): void;
			public setIdleTimeout(idleTimeout: java.lang.Long): void;
			public setEnableSpotlight(enableSpotlight: boolean): void;
			public isEnableCacheTracing(): boolean;
			public isStartProfilerOnAppStart(): boolean;
			public setDiagnosticLevel(diagnosticLevel: io.sentry.SentryLevel): void;
			public setViewHierarchyExporters(exporters: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): void;
			public setBeforeSend(beforeSend: io.sentry.SentryOptions.BeforeSendCallback): void;
			public setBeforeSendReplay(beforeSendReplay: io.sentry.SentryOptions.BeforeSendReplayCallback): void;
			public getTracesSampler(): io.sentry.SentryOptions.TracesSamplerCallback;
			public setSessionFlushTimeoutMillis(sessionFlushTimeoutMillis: number): void;
			public setMaxFeatureFlags(maxFeatureFlags: number): void;
			public setVersionDetector(versionDetector: io.sentry.IVersionDetector): void;
			public getViewHierarchyExporters(): java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>;
			public setOpenTelemetryMode(openTelemetryMode: io.sentry.SentryOpenTelemetryMode): void;
			public setMaxAttachmentSize(maxAttachmentSize: number): void;
			public getContextTags(): java.util.List<string>;
			public getInAppIncludes(): java.util.List<string>;
			public getSpotlightConnectionUrl(): string;
			public isEnableSpotlight(): boolean;
			public setSampleRate(sampleRate: java.lang.Double): void;
			public getInternalTracesSampler(): io.sentry.TracesSampler;
			public getTransportFactory(): io.sentry.ITransportFactory;
			public getScopesStorageFactory(): io.sentry.IScopesStorageFactory;
			public setFlushTimeoutMillis(flushTimeoutMillis: number): void;
			public addPerformanceCollector(collector: io.sentry.IPerformanceCollector): void;
			public getOptionsObservers(): java.util.List<io.sentry.IOptionsObserver>;
			public setDeadlineTimeout(deadlineTimeout: number): void;
			public getDebugMetaLoader(): io.sentry.internal.debugmeta.IDebugMetaLoader;
			public getProfilesSampleRate(): java.lang.Double;
			public isEnableExternalConfiguration(): boolean;
			public setSocketTagger(socketTagger: io.sentry.ISocketTagger): void;
			public isForceInit(): boolean;
			public setEnvironment(environment: string): void;
			public getSerializer(): io.sentry.ISerializer;
			public getEnvelopeReader(): io.sentry.IEnvelopeReader;
			public setEnableDatabaseTransactionTracing(enableDatabaseTransactionTracing: boolean): void;
			public setSessionTrackingIntervalMillis(sessionTrackingIntervalMillis: number): void;
			public isPrintUncaughtStackTrace(): boolean;
			public getCacheDirPath(): string;
			public setSendClientReports(sendClientReports: boolean): void;
			public isEnablePrettySerializationOutput(): boolean;
			public setMaxCacheItems(maxCacheItems: number): void;
			public getDistribution(): io.sentry.SentryOptions.DistributionOptions;
			public setDefaultScopeType(scopeType: io.sentry.ScopeType): void;
			public setProguardUuid(proguardUuid: string): void;
			public setCompositePerformanceCollector(compositePerformanceCollector: io.sentry.CompositePerformanceCollector): void;
			public getSessionTrackingIntervalMillis(): number;
			public setForceInit(forceInit: boolean): void;
			public getTracesSampleRate(): java.lang.Double;
			public setCron(cron: io.sentry.SentryOptions.Cron): void;
			public getTags(): java.util.Map<string,string>;
			public getInAppExcludes(): java.util.List<string>;
			public getContinuousProfiler(): io.sentry.IContinuousProfiler;
			public getEnvironment(): string;
			public addInAppExclude(exclude: string): void;
			public isGlobalHubMode(): java.lang.Boolean;
			public getProfilerConverter(): io.sentry.IProfileConverter;
			public getInstrumenter(): io.sentry.Instrumenter;
			public setSendModules(sendModules: boolean): void;
			public isEnableAutoSessionTracking(): boolean;
			public setProfilesSampler(profilesSampler: io.sentry.SentryOptions.ProfilesSamplerCallback): void;
			public setProfileSessionSampleRate(profileSessionSampleRate: java.lang.Double): void;
			public getTimerExecutorService(): io.sentry.ISentryExecutorService;
			public getBeforeSend(): io.sentry.SentryOptions.BeforeSendCallback;
			public setModulesLoader(modulesLoader: io.sentry.internal.modules.IModulesLoader): void;
			public getSpanFactory(): io.sentry.ISpanFactory;
			public addInAppInclude(include: string): void;
			public setTracesSampler(tracesSampler: io.sentry.SentryOptions.TracesSamplerCallback): void;
			public setEnableEventSizeLimiting(enableEventSizeLimiting: boolean): void;
			public isAttachServerName(): boolean;
			public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
			public getTransactionProfiler(): io.sentry.ITransactionProfiler;
			public setSpotlightConnectionUrl(spotlightConnectionUrl: string): void;
			public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
			public isEnableLegacyProfiling(): boolean;
			public setSentryClientName(sentryClientName: string): void;
			public getDistributionController(): io.sentry.IDistributionApi;
			public isEnableDatabaseTransactionTracing(): boolean;
			public setIgnoredCheckIns(filteredIgnoredCheckIns: java.util.List<string>): void;
			public setEnvelopeReader(envelopeReader: io.sentry.IEnvelopeReader): void;
		}
		export module SentryOptions {
			export class BeforeBreadcrumbCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeBreadcrumbCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): io.sentry.Breadcrumb;
				});
				public constructor();
				public execute(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): io.sentry.Breadcrumb;
			}
			export class BeforeEnvelopeCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeEnvelopeCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeEnvelopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
			}
			export class BeforeSendCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
			}
			export class BeforeSendReplayCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendReplayCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendReplayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.SentryReplayEvent;
				});
				public constructor();
				public execute(param0: io.sentry.SentryReplayEvent, param1: io.sentry.Hint): io.sentry.SentryReplayEvent;
			}
			export class BeforeSendTransactionCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendTransactionCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendTransactionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				});
				public constructor();
				public execute(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			}
			export class Cron {
				public static class: java.lang.Class<io.sentry.SentryOptions.Cron>;
				public getDefaultMaxRuntime(): java.lang.Long;
				public getDefaultTimezone(): string;
				public setDefaultTimezone(defaultTimezone: string): void;
				public setDefaultCheckinMargin(defaultCheckinMargin: java.lang.Long): void;
				public getDefaultRecoveryThreshold(): java.lang.Long;
				public getDefaultFailureIssueThreshold(): java.lang.Long;
				public setDefaultFailureIssueThreshold(defaultFailureIssueThreshold: java.lang.Long): void;
				public getDefaultCheckinMargin(): java.lang.Long;
				public setDefaultMaxRuntime(defaultMaxRuntime: java.lang.Long): void;
				public setDefaultRecoveryThreshold(defaultRecoveryThreshold: java.lang.Long): void;
				public constructor();
			}
			export class DistributionOptions {
				public static class: java.lang.Class<io.sentry.SentryOptions.DistributionOptions>;
				public orgAuthToken: string;
				public orgSlug: string;
				public projectSlug: string;
				public sentryBaseUrl: string;
				public buildConfiguration: string;
				public installGroupsOverride: java.util.List<string>;
				public constructor();
			}
			export class Logs {
				public static class: java.lang.Class<io.sentry.SentryOptions.Logs>;
				public setBeforeSend(beforeSendLog: io.sentry.SentryOptions.Logs.BeforeSendLogCallback): void;
				public setLoggerBatchProcessorFactory(loggerBatchProcessorFactory: io.sentry.logger.ILoggerBatchProcessorFactory): void;
				public getBeforeSend(): io.sentry.SentryOptions.Logs.BeforeSendLogCallback;
				public isEnabled(): boolean;
				public setEnabled(enableLogs: boolean): void;
				public getLoggerBatchProcessorFactory(): io.sentry.logger.ILoggerBatchProcessorFactory;
				public constructor();
			}
			export module Logs {
				export class BeforeSendLogCallback {
					public static class: java.lang.Class<io.sentry.SentryOptions.Logs.BeforeSendLogCallback>;
					/**
					 * Constructs a new instance of the io.sentry.SentryOptions$Logs$BeforeSendLogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					});
					public constructor();
					public execute(param0: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
				}
			}
			export class Metrics {
				public static class: java.lang.Class<io.sentry.SentryOptions.Metrics>;
				public setMetricsBatchProcessorFactory(metricsBatchProcessorFactory: io.sentry.metrics.IMetricsBatchProcessorFactory): void;
				public getMetricsBatchProcessorFactory(): io.sentry.metrics.IMetricsBatchProcessorFactory;
				public isEnabled(): boolean;
				public setBeforeSend(beforeSend: io.sentry.SentryOptions.Metrics.BeforeSendMetricCallback): void;
				public getBeforeSend(): io.sentry.SentryOptions.Metrics.BeforeSendMetricCallback;
				public constructor();
				public setEnabled(enableMetrics: boolean): void;
			}
			export module Metrics {
				export class BeforeSendMetricCallback {
					public static class: java.lang.Class<io.sentry.SentryOptions.Metrics.BeforeSendMetricCallback>;
					/**
					 * Constructs a new instance of the io.sentry.SentryOptions$Metrics$BeforeSendMetricCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					});
					public constructor();
					public execute(param0: io.sentry.SentryMetricsEvent, param1: io.sentry.Hint): io.sentry.SentryMetricsEvent;
				}
			}
			export class OnDiscardCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.OnDiscardCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$OnDiscardCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: java.lang.Long): void;
				});
				public constructor();
				public execute(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: java.lang.Long): void;
			}
			export class OnOversizedEventCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.OnOversizedEventCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$OnOversizedEventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
			}
			export class ProfilesSamplerCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.ProfilesSamplerCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$ProfilesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					sample(param0: io.sentry.SamplingContext): java.lang.Double;
				});
				public constructor();
				public sample(param0: io.sentry.SamplingContext): java.lang.Double;
			}
			export class Proxy {
				public static class: java.lang.Class<io.sentry.SentryOptions.Proxy>;
				public getPort(): string;
				public getPass(): string;
				public getUser(): string;
				public getType(): java.net.Proxy.Type;
				public constructor(host: string, port: string, type: java.net.Proxy.Type);
				public setUser(user: string): void;
				public setPort(port: string): void;
				public setType(type: java.net.Proxy.Type): void;
				public constructor();
				public setHost(host: string): void;
				public constructor(host: string, port: string, type: java.net.Proxy.Type, user: string, pass: string);
				public getHost(): string;
				public constructor(host: string, port: string, user: string, pass: string);
				public constructor(host: string, port: string);
				public setPass(pass: string): void;
			}
			export class RequestSize {
				public static class: java.lang.Class<io.sentry.SentryOptions.RequestSize>;
				public static NONE: io.sentry.SentryOptions.RequestSize;
				public static SMALL: io.sentry.SentryOptions.RequestSize;
				public static MEDIUM: io.sentry.SentryOptions.RequestSize;
				public static ALWAYS: io.sentry.SentryOptions.RequestSize;
				public static valueOf(name: string): io.sentry.SentryOptions.RequestSize;
				public static values(): androidNative.Array<io.sentry.SentryOptions.RequestSize>;
			}
			export class TracesSamplerCallback {
				public static class: java.lang.Class<io.sentry.SentryOptions.TracesSamplerCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$TracesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					sample(param0: io.sentry.SamplingContext): java.lang.Double;
				});
				public constructor();
				public sample(param0: io.sentry.SamplingContext): java.lang.Double;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryReplayEvent extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryReplayEvent>;
			public static REPLAY_VIDEO_MAX_SIZE: number = 10485760;
			public static REPLAY_EVENT_TYPE: string = "replay_event";
			public setErrorIds(errorIds: java.util.List<string>): void;
			public setTraceIds(traceIds: java.util.List<string>): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getSegmentNames(): java.util.List<string>;
			public setSegmentNames(segmentNames: java.util.List<string>): void;
			public getVideoFile(): java.io.File;
			public setTimestamp(timestamp: java.util.Date): void;
			public getTimestamp(): java.util.Date;
			public getType(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public getUrls(): java.util.List<string>;
			public constructor(eventId: io.sentry.protocol.SentryId);
			public getTraceIds(): java.util.List<string>;
			public getReplayType(): io.sentry.SentryReplayEvent.ReplayType;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getReplayId(): io.sentry.protocol.SentryId;
			public setVideoFile(videoFile: java.io.File): void;
			public constructor();
			public setSegmentId(segmentId: number): void;
			public getErrorIds(): java.util.List<string>;
			public setType(type: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public setReplayId(replayId: io.sentry.protocol.SentryId): void;
			public getReplayStartTimestamp(): java.util.Date;
			public equals(o: any): boolean;
			public setReplayType(replayType: io.sentry.SentryReplayEvent.ReplayType): void;
			public setReplayStartTimestamp(replayStartTimestamp: java.util.Date): void;
			public getSegmentId(): number;
			public setUrls(urls: java.util.List<string>): void;
			public hashCode(): number;
		}
		export module SentryReplayEvent {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryReplayEvent> {
				public static class: java.lang.Class<io.sentry.SentryReplayEvent.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.SentryReplayEvent;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryReplayEvent.JsonKeys>;
				public static TYPE: string = "type";
				public static REPLAY_TYPE: string = "replay_type";
				public static REPLAY_ID: string = "replay_id";
				public static SEGMENT_ID: string = "segment_id";
				public static TIMESTAMP: string = "timestamp";
				public static REPLAY_START_TIMESTAMP: string = "replay_start_timestamp";
				public static URLS: string = "urls";
				public static ERROR_IDS: string = "error_ids";
				public static TRACE_IDS: string = "trace_ids";
				public static SEGMENT_NAMES: string = "segment_names";
				public constructor();
			}
			export class ReplayType extends io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.SentryReplayEvent.ReplayType>;
				public static SESSION: io.sentry.SentryReplayEvent.ReplayType;
				public static BUFFER: io.sentry.SentryReplayEvent.ReplayType;
				public static valueOf(name: string): io.sentry.SentryReplayEvent.ReplayType;
				public static values(): androidNative.Array<io.sentry.SentryReplayEvent.ReplayType>;
				public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			}
			export module ReplayType {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryReplayEvent.ReplayType> {
					public static class: java.lang.Class<io.sentry.SentryReplayEvent.ReplayType.Deserializer>;
					public constructor();
					public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SentryReplayEvent.ReplayType;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryReplayOptions extends io.sentry.SentryMaskingOptions {
			public static class: java.lang.Class<io.sentry.SentryReplayOptions>;
			public static MAX_NETWORK_BODY_SIZE: number = 153600;
			public setScreenshotStrategy(screenshotStrategy: io.sentry.ScreenshotStrategyType): void;
			public getQuality(): io.sentry.SentryReplayOptions.SentryReplayQuality;
			public trackCustomMasking(): void;
			public setNetworkDetailAllowUrls(networkDetailAllowUrls: java.util.List<string>): void;
			public isNetworkCaptureBodies(): boolean;
			public setSdkVersion(sdkVersion: io.sentry.protocol.SdkVersion): void;
			public setDebug(debug: boolean): void;
			public setNetworkCaptureBodies(networkCaptureBodies: boolean): void;
			public getNetworkResponseHeaders(): java.util.List<string>;
			public isDebug(): boolean;
			public setNetworkDetailDenyUrls(networkDetailDenyUrls: java.util.List<string>): void;
			public setCaptureSurfaceViews(captureSurfaceViews: boolean): void;
			public getFrameObserver(): io.sentry.SentryReplayOptions.ReplayFrameObserver;
			public setMaskAllText(maskAllText: boolean): void;
			public setQuality(quality: io.sentry.SentryReplayOptions.SentryReplayQuality): void;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public setNetworkRequestHeaders(networkRequestHeaders: java.util.List<string>): void;
			public getNetworkRequestHeaders(): java.util.List<string>;
			public getFrameRate(): number;
			public getNetworkDetailAllowUrls(): java.util.List<string>;
			public isSessionReplayForErrorsEnabled(): boolean;
			public getSessionDuration(): number;
			public setOnErrorSampleRate(onErrorSampleRate: java.lang.Double): void;
			public setMaskAllImages(maskAllImages: boolean): void;
			public getErrorReplayDuration(): number;
			public isTrackConfiguration(): boolean;
			public addUnmaskViewClass(className: string): void;
			public setFrameObserver(frameObserver: io.sentry.SentryReplayOptions.ReplayFrameObserver): void;
			public getOnErrorSampleRate(): java.lang.Double;
			public getScreenshotStrategy(): io.sentry.ScreenshotStrategyType;
			public setTrackConfiguration(trackConfiguration: boolean): void;
			public setSessionSampleRate(sessionSampleRate: java.lang.Double): void;
			public getNetworkDetailDenyUrls(): java.util.List<string>;
			public constructor();
			public constructor(empty: boolean, sdkVersion: io.sentry.protocol.SdkVersion);
			public getSessionSampleRate(): java.lang.Double;
			public constructor(sessionSampleRate: java.lang.Double, onErrorSampleRate: java.lang.Double, sdkVersion: io.sentry.protocol.SdkVersion);
			public setNetworkResponseHeaders(networkResponseHeaders: java.util.List<string>): void;
			public getSessionSegmentDuration(): number;
			public setBeforeErrorSampling(beforeErrorSampling: io.sentry.SentryReplayOptions.BeforeErrorSamplingCallback): void;
			public isCaptureSurfaceViews(): boolean;
			public addMaskViewClass(className: string): void;
			public getBeforeErrorSampling(): io.sentry.SentryReplayOptions.BeforeErrorSamplingCallback;
			public static getNetworkDetailsDefaultHeaders(): java.util.List<string>;
			public isSessionReplayEnabled(): boolean;
		}
		export module SentryReplayOptions {
			export class BeforeErrorSamplingCallback {
				public static class: java.lang.Class<io.sentry.SentryReplayOptions.BeforeErrorSamplingCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryReplayOptions$BeforeErrorSamplingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): boolean;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): boolean;
			}
			export class ReplayFrameObserver {
				public static class: java.lang.Class<io.sentry.SentryReplayOptions.ReplayFrameObserver>;
				/**
				 * Constructs a new instance of the io.sentry.SentryReplayOptions$ReplayFrameObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMaskedFrameCaptured(param0: io.sentry.Hint, param1: number, param2: string): void;
				});
				public constructor();
				public onMaskedFrameCaptured(param0: io.sentry.Hint, param1: number, param2: string): void;
			}
			export class SentryReplayQuality {
				public static class: java.lang.Class<io.sentry.SentryReplayOptions.SentryReplayQuality>;
				public static LOW: io.sentry.SentryReplayOptions.SentryReplayQuality;
				public static MEDIUM: io.sentry.SentryReplayOptions.SentryReplayQuality;
				public static HIGH: io.sentry.SentryReplayOptions.SentryReplayQuality;
				public sizeScale: number;
				public bitRate: number;
				public screenshotQuality: number;
				public static values(): androidNative.Array<io.sentry.SentryReplayOptions.SentryReplayQuality>;
				public static valueOf(name: string): io.sentry.SentryReplayOptions.SentryReplayQuality;
				public serializedName(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryRuntimeEventProcessor extends io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.SentryRuntimeEventProcessor>;
			public getOrder(): java.lang.Long;
			public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
			public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
			public constructor(javaVersion: string, javaVendor: string);
			public constructor();
			public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
			public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
			public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
		}
	}
}

declare module io {
	export module sentry {
		export class SentrySpanStorage {
			public static class: java.lang.Class<io.sentry.SentrySpanStorage>;
			public static getInstance(): io.sentry.SentrySpanStorage;
			public store(spanId: string, span: io.sentry.ISpan): void;
			public removeAndGet(spanId: string): io.sentry.ISpan;
			public get(spanId: string): io.sentry.ISpan;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryStackTraceFactory {
			public static class: java.lang.Class<io.sentry.SentryStackTraceFactory>;
			public isInApp(className: string): java.lang.Boolean;
			public getStackFrames(sentryStackFrame: androidNative.Array<java.lang.StackTraceElement>, item: boolean): java.util.List<io.sentry.protocol.SentryStackFrame>;
			public static isInApp(include: string, exclude: java.util.List<string>, className: java.util.List<string>): java.lang.Boolean;
			public constructor(options: io.sentry.SentryOptions);
			public getInAppCallStack(): java.util.List<io.sentry.protocol.SentryStackFrame>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryThreadFactory {
			public static class: java.lang.Class<io.sentry.SentryThreadFactory>;
			public constructor(sentryStackTraceFactory: io.sentry.SentryStackTraceFactory);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryTraceHeader {
			public static class: java.lang.Class<io.sentry.SentryTraceHeader>;
			public static SENTRY_TRACE_HEADER: string = "sentry-trace";
			public getName(): string;
			public isSampled(): java.lang.Boolean;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, sampled: java.lang.Boolean);
			public constructor(value: string);
			public getValue(): string;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getSpanId(): io.sentry.SpanId;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryTracer extends io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.SentryTracer>;
			public startChild(operation: string, description: string): io.sentry.ISpan;
			public getData(key: string): any;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter): io.sentry.ISpan;
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public finish(): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public finish(status: io.sentry.SpanStatus, finishDate: io.sentry.SentryDate): void;
			public getLatestActiveSpan(): io.sentry.ISpan;
			public getContexts(): io.sentry.protocol.Contexts;
			public setMeasurement(name: string, value: java.lang.Number): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public setData(key: string, value: any): void;
			public toBaggageHeader(this_: java.util.List<string>): io.sentry.BaggageHeader;
			public setThrowable(throwable: java.lang.Throwable): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public setMeasurementFromChild(name: string, value: java.lang.Number, unit: io.sentry.MeasurementUnit): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setDescription(description: string): void;
			public setContext(key: string, context: any): void;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(operation: string): io.sentry.ISpan;
			public setOperation(param0: string): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public updateEndDate(date: io.sentry.SentryDate): boolean;
			public getTag(param0: string): string;
			public finish(ignored: io.sentry.SpanStatus, performanceCollectionData: io.sentry.SentryDate, oldCallback: boolean, profilingTraceData: io.sentry.Hint): void;
			public finish(status: io.sentry.SpanStatus): void;
			public constructor(context: io.sentry.TransactionContext, scopes: io.sentry.IScopes);
			public getThrowable(): java.lang.Throwable;
			public getSpans(): java.util.List<io.sentry.Span>;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(spanContext: io.sentry.SpanContext, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public setStatus(status: io.sentry.SpanStatus): void;
			public isNoOp(): boolean;
			public forceFinish(this_: io.sentry.SpanStatus, status: boolean, dropIfNoChildren: io.sentry.Hint): void;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate): io.sentry.ISpan;
			public scheduleFinish(): void;
			public getData(): java.util.Map<string,any>;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getChildren(): java.util.List<io.sentry.Span>;
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public setTag(key: string, value: string): void;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setMeasurement(name: string, value: java.lang.Number, unit: io.sentry.MeasurementUnit): void;
			public isProfileSampled(): java.lang.Boolean;
			public setName(name: string, transactionNameSource: io.sentry.protocol.TransactionNameSource): void;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public constructor(context: io.sentry.TransactionContext, scopes: io.sentry.IScopes, transactionOptions: io.sentry.TransactionOptions);
			public setDescription(param0: string): void;
			public setMeasurementFromChild(name: string, value: java.lang.Number): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setOperation(operation: string): void;
			public getName(): string;
			public getTag(key: string): string;
			public setName(name: string): void;
			public startChild(operation: string, description: string, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
		export module SentryTracer {
			export class FinishStatus {
				public static class: java.lang.Class<io.sentry.SentryTracer.FinishStatus>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryUUID {
			public static class: java.lang.Class<io.sentry.SentryUUID>;
			public static generateSpanId(): string;
			public static generateSentryId(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryValues<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryValues<any>>;
			public getValues(): java.util.List<T>;
		}
		export module SentryValues {
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SentryValues.JsonKeys>;
				public static VALUES: string = "values";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryWrapper {
			public static class: java.lang.Class<io.sentry.SentryWrapper>;
			public static wrapRunnable(runnable: java.lang.Runnable): java.lang.Runnable;
			public static wrapCallable(callable: java.util.concurrent.Callable<any>): java.util.concurrent.Callable<any>;
			public static wrapSupplier(supplier: any /* any*/): any /* any*/;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class Session implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.Session>;
			public update(ignored: io.sentry.Session.State, this_: string, status: boolean, userAgent: string): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public end(): void;
			public constructor(distinctId: string, user: io.sentry.protocol.User, environment: string, release: string);
			public getStarted(): java.util.Date;
			public errorCount(): number;
			public getIpAddress(): string;
			public getDuration(): java.lang.Double;
			public getInit(): java.lang.Boolean;
			public getRelease(): string;
			public getSequence(): java.lang.Long;
			public getStatus(): io.sentry.Session.State;
			public getTimestamp(): java.util.Date;
			public constructor(status: io.sentry.Session.State, started: java.util.Date, timestamp: java.util.Date, errorCount: number, distinctId: string, sessionId: string, init: java.lang.Boolean, sequence: java.lang.Long, duration: java.lang.Double, ipAddress: string, userAgent: string, environment: string, release: string, abnormalMechanism: string);
			public getEnvironment(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public update(status: io.sentry.Session.State, userAgent: string, addErrorsCount: boolean): boolean;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public setInitAsTrue(): void;
			public end(this_: java.util.Date): void;
			public getDistinctId(): string;
			public isTerminated(): boolean;
			public getUserAgent(): string;
			public getSessionId(): string;
			public getAbnormalMechanism(): string;
			public getUnknown(): java.util.Map<string,any>;
			public clone(): io.sentry.Session;
		}
		export module Session {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Session> {
				public static class: java.lang.Class<io.sentry.Session.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(statusValue: io.sentry.ObjectReader, nextAttrName: io.sentry.ILogger): io.sentry.Session;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.Session.JsonKeys>;
				public static SID: string = "sid";
				public static DID: string = "did";
				public static INIT: string = "init";
				public static STARTED: string = "started";
				public static STATUS: string = "status";
				public static SEQ: string = "seq";
				public static ERRORS: string = "errors";
				public static DURATION: string = "duration";
				public static TIMESTAMP: string = "timestamp";
				public static ATTRS: string = "attrs";
				public static RELEASE: string = "release";
				public static ENVIRONMENT: string = "environment";
				public static IP_ADDRESS: string = "ip_address";
				public static USER_AGENT: string = "user_agent";
				public static ABNORMAL_MECHANISM: string = "abnormal_mechanism";
				public constructor();
			}
			export class State {
				public static class: java.lang.Class<io.sentry.Session.State>;
				public static Ok: io.sentry.Session.State;
				public static Exited: io.sentry.Session.State;
				public static Crashed: io.sentry.Session.State;
				public static Abnormal: io.sentry.Session.State;
				public static valueOf(name: string): io.sentry.Session.State;
				public static values(): androidNative.Array<io.sentry.Session.State>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class ShutdownHookIntegration extends io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.ShutdownHookIntegration>;
			public constructor(runtime: java.lang.Runtime);
			public constructor();
			public close(): void;
			public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
			public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
		}
	}
}

declare module io {
	export module sentry {
		export class Span extends io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.Span>;
			public startChild(operation: string, description: string): io.sentry.ISpan;
			public getData(key: string): any;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter): io.sentry.ISpan;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public finish(): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public getContexts(): io.sentry.protocol.Contexts;
			public finish(minChildStart: io.sentry.SpanStatus, maxChildEnd: io.sentry.SentryDate): void;
			public setMeasurement(name: string, value: java.lang.Number): void;
			public getData(param0: string): any;
			public getParentSpanId(): io.sentry.SpanId;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public setData(key: string, value: any): void;
			public toBaggageHeader(thirdPartyBaggageHeaders: java.util.List<string>): io.sentry.BaggageHeader;
			public setThrowable(throwable: java.lang.Throwable): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setDescription(description: string): void;
			public setContext(key: string, context: any): void;
			public startChild(operation: string, description: string, timestamp: io.sentry.SentryDate, instrumenter: io.sentry.Instrumenter, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(operation: string): io.sentry.ISpan;
			public setOperation(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public updateEndDate(date: io.sentry.SentryDate): boolean;
			public getTag(param0: string): string;
			public finish(status: io.sentry.SpanStatus): void;
			public constructor(context: io.sentry.TransactionContext, sentryTracer: io.sentry.SentryTracer, scopes: io.sentry.IScopes, options: io.sentry.SpanOptions);
			public getThrowable(): java.lang.Throwable;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public getMeasurements(): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
			public startChild(param0: io.sentry.SpanContext, param1: io.sentry.SpanOptions): io.sentry.ISpan;
			public startChild(spanContext: io.sentry.SpanContext, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public setStatus(status: io.sentry.SpanStatus): void;
			public isNoOp(): boolean;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getData(): java.util.Map<string,any>;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getTags(): java.util.Map<string,string>;
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public setTag(key: string, value: string): void;
			public makeCurrent(): io.sentry.ISentryLifecycleToken;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setMeasurement(name: string, value: java.lang.Number, unit: io.sentry.MeasurementUnit): void;
			public isProfileSampled(): java.lang.Boolean;
			public addFeatureFlag(param0: string, param1: java.lang.Boolean): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public setOperation(operation: string): void;
			public getSpanId(): io.sentry.SpanId;
			public getTag(key: string): string;
			public startChild(operation: string, description: string, spanOptions: io.sentry.SpanOptions): io.sentry.ISpan;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanContext>;
			public static TYPE: string = "trace";
			public static DEFAULT_ORIGIN: string = "manual";
			public op: string;
			public description: string;
			public status: io.sentry.SpanStatus;
			public tags: java.util.Map<string,string>;
			public origin: string;
			public data: java.util.Map<string,any>;
			public baggage: io.sentry.Baggage;
			public featureFlags: io.sentry.featureflags.IFeatureFlagBuffer;
			public constructor(spanContext: io.sentry.SpanContext);
			public getProfileSampled(): java.lang.Boolean;
			public getBaggage(): io.sentry.Baggage;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, operation: string, parentSpanId: io.sentry.SpanId, samplingDecision: io.sentry.TracesSamplingDecision);
			public setProfilerId(profilerId: io.sentry.protocol.SentryId): void;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, parentSpanId: io.sentry.SpanId, operation: string, description: string, samplingDecision: io.sentry.TracesSamplingDecision, status: io.sentry.SpanStatus, origin: string);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getOrigin(): string;
			public addFeatureFlag(flag: string, result: java.lang.Boolean): void;
			public constructor(operation: string, samplingDecision: io.sentry.TracesSamplingDecision);
			public setStatus(status: io.sentry.SpanStatus): void;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getParentSpanId(): io.sentry.SpanId;
			public getData(): java.util.Map<string,any>;
			public setData(key: string, value: any): void;
			public copyForChild(operation: string, parentSpanId: io.sentry.SpanId, spanId: io.sentry.SpanId): io.sentry.SpanContext;
			public getTags(): java.util.Map<string,string>;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public getOperation(): string;
			public setDescription(description: string): void;
			public setSampled(sampled: java.lang.Boolean, profileSampled: java.lang.Boolean): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public setOrigin(origin: string): void;
			public getInstrumenter(): io.sentry.Instrumenter;
			public setSampled(sampled: java.lang.Boolean): void;
			public getProfilerId(): io.sentry.protocol.SentryId;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getSampled(): java.lang.Boolean;
			public setTag(name: string, value: string): void;
			public setOperation(operation: string): void;
			public getSpanId(): io.sentry.SpanId;
			public setInstrumenter(instrumenter: io.sentry.Instrumenter): void;
			public getUnknown(): java.util.Map<string,any>;
			public getFeatureFlagBuffer(): io.sentry.featureflags.IFeatureFlagBuffer;
			public equals(o: any): boolean;
			public setSamplingDecision(samplingDecision: io.sentry.TracesSamplingDecision): void;
			public constructor(operation: string);
			public getDescription(): string;
			public hashCode(): number;
		}
		export module SpanContext {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanContext> {
				public static class: java.lang.Class<io.sentry.SpanContext.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.SpanContext;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.SpanContext.JsonKeys>;
				public static TRACE_ID: string = "trace_id";
				public static SPAN_ID: string = "span_id";
				public static PARENT_SPAN_ID: string = "parent_span_id";
				public static OP: string = "op";
				public static DESCRIPTION: string = "description";
				public static STATUS: string = "status";
				public static TAGS: string = "tags";
				public static ORIGIN: string = "origin";
				public static DATA: string = "data";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SpanDataConvention {
			public static class: java.lang.Class<io.sentry.SpanDataConvention>;
			/**
			 * Constructs a new instance of the io.sentry.SpanDataConvention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static CACHE_WRITE: string = "cache.write";
			public static BLOCKED_MAIN_THREAD_KEY: string = "blocked_main_thread";
			public static HTTP_STATUS_CODE_KEY: string = "http.response.status_code";
			public static FRAMES_TOTAL: string = "frames.total";
			public static FRAMES_SLOW: string = "frames.slow";
			public static MESSAGING_MESSAGE_BODY_SIZE: string = "messaging.message.body.size";
			public static DB_SYSTEM_KEY: string = "db.system";
			public static MESSAGING_MESSAGE_RETRY_COUNT: string = "messaging.message.retry.count";
			public static MESSAGING_MESSAGE_ENVELOPE_SIZE: string = "messaging.message.envelope.size";
			public static PROFILER_ID: string = "profiler_id";
			public static MESSAGING_OPERATION_TYPE: string = "messaging.operation.type";
			public static THREAD_ID: string = "thread.id";
			public static CONTRIBUTES_TTID: string = "ui.contributes_to_ttid";
			public static MESSAGING_MESSAGE_RECEIVE_LATENCY: string = "messaging.message.receive.latency";
			public static DB_NAME_KEY: string = "db.name";
			public static HTTP_RESPONSE_CONTENT_LENGTH_KEY: string = "http.response_content_length";
			public static CALL_STACK_KEY: string = "call_stack";
			public static CACHE_HIT: string = "cache.hit";
			public static FRAMES_DELAY: string = "frames.delay";
			public static HTTP_END_TIMESTAMP: string = "http.end_timestamp";
			public static HTTP_FRAGMENT_KEY: string = "http.fragment";
			public static HTTP_METHOD_KEY: string = "http.request.method";
			public static MESSAGING_SYSTEM: string = "messaging.system";
			public static MESSAGING_DESTINATION_NAME: string = "messaging.destination.name";
			public static HTTP_QUERY_KEY: string = "http.query";
			public static FRAMES_FROZEN: string = "frames.frozen";
			public static MESSAGING_MESSAGE_ID: string = "messaging.message.id";
			public static CACHE_OPERATION: string = "cache.operation";
			public static CACHE_KEY: string = "cache.key";
			public static THREAD_NAME: string = "thread.name";
			public static HTTP_START_TIMESTAMP: string = "http.start_timestamp";
			public static CONTRIBUTES_TTFD: string = "ui.contributes_to_ttfd";
		}
	}
}

declare module io {
	export module sentry {
		export class SpanFactoryFactory {
			public static class: java.lang.Class<io.sentry.SpanFactoryFactory>;
			public static create(otelSpanFactory: io.sentry.util.LoadClass, otelSpanFactoryClazz: io.sentry.ILogger): io.sentry.ISpanFactory;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SpanFinishedCallback {
			public static class: java.lang.Class<io.sentry.SpanFinishedCallback>;
			/**
			 * Constructs a new instance of the io.sentry.SpanFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				execute(param0: io.sentry.Span): void;
			});
			public constructor();
			public execute(param0: io.sentry.Span): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanId extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanId>;
			public static EMPTY_ID: io.sentry.SpanId;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public toString(): string;
			public equals(o: any): boolean;
			public constructor();
			public constructor(value: string);
			public hashCode(): number;
		}
		export module SpanId {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.SpanId.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SpanId;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SpanOptions {
			public static class: java.lang.Class<io.sentry.SpanOptions>;
			public origin: string;
			public setOrigin(origin: string): void;
			public isTrimStart(): boolean;
			public getOrigin(): string;
			public isIdle(): boolean;
			public constructor();
			public getScopeBindingMode(): io.sentry.ScopeBindingMode;
			public getStartTimestamp(): io.sentry.SentryDate;
			public setStartTimestamp(startTimestamp: io.sentry.SentryDate): void;
			public setTrimStart(trimStart: boolean): void;
			public setScopeBindingMode(scopeBindingMode: io.sentry.ScopeBindingMode): void;
			public setIdle(idle: boolean): void;
			public setTrimEnd(trimEnd: boolean): void;
			public isTrimEnd(): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanStatus extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanStatus>;
			public static OK: io.sentry.SpanStatus;
			public static CANCELLED: io.sentry.SpanStatus;
			public static INTERNAL_ERROR: io.sentry.SpanStatus;
			public static UNKNOWN: io.sentry.SpanStatus;
			public static UNKNOWN_ERROR: io.sentry.SpanStatus;
			public static INVALID_ARGUMENT: io.sentry.SpanStatus;
			public static DEADLINE_EXCEEDED: io.sentry.SpanStatus;
			public static NOT_FOUND: io.sentry.SpanStatus;
			public static ALREADY_EXISTS: io.sentry.SpanStatus;
			public static PERMISSION_DENIED: io.sentry.SpanStatus;
			public static RESOURCE_EXHAUSTED: io.sentry.SpanStatus;
			public static FAILED_PRECONDITION: io.sentry.SpanStatus;
			public static ABORTED: io.sentry.SpanStatus;
			public static OUT_OF_RANGE: io.sentry.SpanStatus;
			public static UNIMPLEMENTED: io.sentry.SpanStatus;
			public static UNAVAILABLE: io.sentry.SpanStatus;
			public static DATA_LOSS: io.sentry.SpanStatus;
			public static UNAUTHENTICATED: io.sentry.SpanStatus;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
			public static valueOf(name: string): io.sentry.SpanStatus;
			public static fromHttpStatusCode(status: number): io.sentry.SpanStatus;
			public apiName(): string;
			public static fromHttpStatusCode(httpStatusCode: java.lang.Integer, defaultStatus: io.sentry.SpanStatus): io.sentry.SpanStatus;
			public static fromApiNameSafely(ex: string): io.sentry.SpanStatus;
			public static values(): androidNative.Array<io.sentry.SpanStatus>;
		}
		export module SpanStatus {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.SpanStatus.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.SpanStatus;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Stack {
			public static class: java.lang.Class<io.sentry.Stack>;
			public constructor(stack: io.sentry.Stack);
			public constructor(logger: io.sentry.ILogger, rootStackItem: io.sentry.Stack.StackItem);
		}
		export module Stack {
			export class StackItem {
				public static class: java.lang.Class<io.sentry.Stack.StackItem>;
				public getOptions(): io.sentry.SentryOptions;
				public getClient(): io.sentry.ISentryClient;
				public getScope(): io.sentry.IScope;
				public setClient(client: io.sentry.ISentryClient): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SynchronizedCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SynchronizedCollection<any>>;
			public add(this_: E): boolean;
			public clear(): void;
			public toArray(this_: androidNative.Array<any>): androidNative.Array<any>;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<E>;
			public size(): number;
			public decorated(): java.util.Collection<E>;
			public static synchronizedCollection(coll: java.util.Collection<any>): io.sentry.SynchronizedCollection<any>;
			public contains(this_: any): boolean;
			public toArray(): androidNative.Array<any>;
			public equals(this_: any): boolean;
			public addAll(this_: java.util.Collection<any>): boolean;
			public remove(this_: any): boolean;
			public toString(): string;
			public removeAll(this_: java.util.Collection<any>): boolean;
			public retainAll(this_: java.util.Collection<any>): boolean;
			public containsAll(this_: java.util.Collection<any>): boolean;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SynchronizedQueue<E>  extends io.sentry.SynchronizedCollection<any> implements java.util.Queue<any>  {
			public static class: java.lang.Class<io.sentry.SynchronizedQueue<any>>;
			public toArray(this_: androidNative.Array<any>): androidNative.Array<any>;
			public poll(): any;
			public offer(this_: any): boolean;
			public decorated(): java.util.Collection<any>;
			public constructor(queue: java.util.Queue<any>, lock: io.sentry.util.AutoClosableReentrantLock);
			public peek(): any;
			public toArray(): androidNative.Array<any>;
			public decorated(): java.util.Queue<any>;
			public equals(this_: any): boolean;
			public remove(this_: any): boolean;
			public remove(): any;
			public element(): any;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SystemOutLogger extends io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.SystemOutLogger>;
			public log(level: io.sentry.SentryLevel, message: string, throwable: java.lang.Throwable): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public log(level: io.sentry.SentryLevel, message: string, args: androidNative.Array<any>): void;
			public log(level: io.sentry.SentryLevel, throwable: java.lang.Throwable, message: string, args: androidNative.Array<any>): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public constructor();
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
			public isEnabled(level: io.sentry.SentryLevel): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class TraceContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.TraceContext>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getSampleRand(): string;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getReplayId(): io.sentry.protocol.SentryId;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getRelease(): string;
			public getPublicKey(): string;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public getSampled(): string;
			public getSampleRate(): string;
			public getEnvironment(): string;
			public getUserId(): string;
			public setUnknown(unknown: java.util.Map<string,any>): void;
		}
		export module TraceContext {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.TraceContext> {
				public static class: java.lang.Class<io.sentry.TraceContext.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.TraceContext;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.TraceContext.JsonKeys>;
				public static TRACE_ID: string = "trace_id";
				public static PUBLIC_KEY: string = "public_key";
				public static RELEASE: string = "release";
				public static ENVIRONMENT: string = "environment";
				public static USER_ID: string = "user_id";
				public static TRANSACTION: string = "transaction";
				public static SAMPLE_RATE: string = "sample_rate";
				public static SAMPLE_RAND: string = "sample_rand";
				public static SAMPLED: string = "sampled";
				public static REPLAY_ID: string = "replay_id";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class TracesSampler {
			public static class: java.lang.Class<io.sentry.TracesSampler>;
			public sampleSessionProfile(sampleRand: number): boolean;
			public sample(t: io.sentry.SamplingContext): io.sentry.TracesSamplingDecision;
			public constructor(options: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class TracesSamplingDecision {
			public static class: java.lang.Class<io.sentry.TracesSamplingDecision>;
			public getProfileSampled(): java.lang.Boolean;
			public constructor(sampled: java.lang.Boolean, sampleRate: java.lang.Double, sampleRand: java.lang.Double);
			public constructor(sampled: java.lang.Boolean, sampleRate: java.lang.Double, sampleRand: java.lang.Double, profileSampled: java.lang.Boolean, profileSampleRate: java.lang.Double);
			public getSampled(): java.lang.Boolean;
			public getProfileSampleRate(): java.lang.Double;
			public constructor(sampled: java.lang.Boolean, sampleRate: java.lang.Double, profileSampled: java.lang.Boolean, profileSampleRate: java.lang.Double);
			public constructor(sampled: java.lang.Boolean);
			public getSampleRate(): java.lang.Double;
			public constructor(sampled: java.lang.Boolean, sampleRate: java.lang.Double);
			public getSampleRand(): java.lang.Double;
		}
	}
}

declare module io {
	export module sentry {
		export class TransactionContext extends io.sentry.SpanContext {
			public static class: java.lang.Class<io.sentry.TransactionContext>;
			public static DEFAULT_TRANSACTION_NAME: string = "<unlabeled transaction>";
			public constructor(spanContext: io.sentry.SpanContext);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, operation: string, parentSpanId: io.sentry.SpanId, samplingDecision: io.sentry.TracesSamplingDecision);
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, parentSpanId: io.sentry.SpanId, operation: string, description: string, samplingDecision: io.sentry.TracesSamplingDecision, status: io.sentry.SpanStatus, origin: string);
			public setParentSampled(parentSampled: java.lang.Boolean, parentProfileSampled: java.lang.Boolean): void;
			public setParentSampled(parentSampled: java.lang.Boolean): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public static fromPropagationContext(propagationContext: io.sentry.PropagationContext): io.sentry.TransactionContext;
			public constructor(operation: string, samplingDecision: io.sentry.TracesSamplingDecision);
			public setForNextAppStart(forNextAppStart: boolean): void;
			public getUnknown(): java.util.Map<string,any>;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, parentSpanId: io.sentry.SpanId, parentSamplingDecision: io.sentry.TracesSamplingDecision, baggage: io.sentry.Baggage);
			public getName(): string;
			public isForNextAppStart(): boolean;
			public constructor(operation: string);
			public constructor(name: string, operation: string, samplingDecision: io.sentry.TracesSamplingDecision);
			public constructor(name: string, transactionNameSource: io.sentry.protocol.TransactionNameSource, operation: string, samplingDecision: io.sentry.TracesSamplingDecision);
			public setTransactionNameSource(transactionNameSource: io.sentry.protocol.TransactionNameSource): void;
			public constructor(name: string, operation: string);
			public setName(name: string): void;
			public constructor(name: string, transactionNameSource: io.sentry.protocol.TransactionNameSource, operation: string);
			public getParentSamplingDecision(): io.sentry.TracesSamplingDecision;
			public getParentSampled(): java.lang.Boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class TransactionFinishedCallback {
			public static class: java.lang.Class<io.sentry.TransactionFinishedCallback>;
			/**
			 * Constructs a new instance of the io.sentry.TransactionFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				execute(param0: io.sentry.ITransaction): void;
			});
			public constructor();
			public execute(param0: io.sentry.ITransaction): void;
		}
	}
}

declare module io {
	export module sentry {
		export class TransactionOptions extends io.sentry.SpanOptions {
			public static class: java.lang.Class<io.sentry.TransactionOptions>;
			public static DEFAULT_DEADLINE_TIMEOUT_AUTO_TRANSACTION: number = 30000;
			public isBindToScope(): boolean;
			public setBindToScope(bindToScope: boolean): void;
			public setDeadlineTimeout(deadlineTimeoutMs: java.lang.Long): void;
			public setCustomSamplingContext(customSamplingContext: io.sentry.CustomSamplingContext): void;
			public isWaitForChildren(): boolean;
			public setTransactionFinishedCallback(transactionFinishedCallback: io.sentry.TransactionFinishedCallback): void;
			public getTransactionFinishedCallback(): io.sentry.TransactionFinishedCallback;
			public getDeadlineTimeout(): java.lang.Long;
			public constructor();
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public getSpanFactory(): io.sentry.ISpanFactory;
			public setSpanFactory(spanFactory: io.sentry.ISpanFactory): void;
			public setIdleTimeout(idleTimeout: java.lang.Long): void;
			public setAppStartTransaction(appStartTransaction: boolean): void;
			public setWaitForChildren(waitForChildren: boolean): void;
			public isAppStartTransaction(): boolean;
			public getIdleTimeout(): java.lang.Long;
		}
	}
}

declare module io {
	export module sentry {
		export class TypeCheckHint {
			public static class: java.lang.Class<io.sentry.TypeCheckHint>;
			public static SENTRY_TYPE_CHECK_HINT: string = "sentry:typeCheckHint";
			public static SENTRY_IS_FROM_HYBRID_SDK: string = "sentry:isFromHybridSdk";
			public static SENTRY_EVENT_DROP_REASON: string = "sentry:eventDropReason";
			public static SENTRY_REPLAY_NETWORK_DETAILS: string = "sentry:replayNetworkDetails";
			public static SENTRY_JAVASCRIPT_SDK_NAME: string = "sentry.javascript";
			public static SENTRY_DOTNET_SDK_NAME: string = "sentry.dotnet";
			public static SENTRY_DART_SDK_NAME: string = "sentry.dart";
			public static SENTRY_SYNTHETIC_EXCEPTION: string = "syntheticException";
			public static ANDROID_ACTIVITY: string = "android:activity";
			public static ANDROID_CONFIGURATION: string = "android:configuration";
			public static ANDROID_INTENT: string = "android:intent";
			public static ANDROID_SENSOR_EVENT: string = "android:sensorEvent";
			public static ANDROID_MOTION_EVENT: string = "android:motionEvent";
			public static ANDROID_VIEW: string = "android:view";
			public static ANDROID_FRAGMENT: string = "android:fragment";
			public static ANDROID_NAV_DESTINATION: string = "android:navigationDestination";
			public static ANDROID_NETWORK_CAPABILITIES: string = "android:networkCapabilities";
			public static OKHTTP_RESPONSE: string = "okHttp:response";
			public static OKHTTP_REQUEST: string = "okHttp:request";
			public static APOLLO_RESPONSE: string = "apollo:response";
			public static APOLLO_REQUEST: string = "apollo:request";
			public static GRAPHQL_HANDLER_PARAMETERS: string = "graphql:handlerParameters";
			public static GRAPHQL_DATA_FETCHING_ENVIRONMENT: string = "graphql:dataFetchingEnvironment";
			public static JUL_LOG_RECORD: string = "jul:logRecord";
			public static LOG4J_LOG_EVENT: string = "log4j:logEvent";
			public static LOGBACK_LOGGING_EVENT: string = "logback:loggingEvent";
			public static OPEN_FEIGN_RESPONSE: string = "openFeign:response";
			public static OPEN_FEIGN_REQUEST: string = "openFeign:request";
			public static SERVLET_REQUEST: string = "servlet:request";
			public static SPRING_RESOLVER_RESPONSE: string = "springResolver:response";
			public static SPRING_RESOLVER_REQUEST: string = "springResolver:request";
			public static SPRING_REQUEST_FILTER_RESPONSE: string = "springRequestFilter:response";
			public static SPRING_REQUEST_FILTER_REQUEST: string = "springRequestFilter:request";
			public static SPRING_REQUEST_INTERCEPTOR_RESPONSE: string = "springRequestInterceptor:response";
			public static SPRING_REQUEST_INTERCEPTOR_REQUEST: string = "springRequestInterceptor:request";
			public static SPRING_REQUEST_INTERCEPTOR_REQUEST_BODY: string = "springRequestInterceptor:requestBody";
			public static WEBFLUX_EXCEPTION_HANDLER_RESPONSE: string = "webFluxExceptionHandler:response";
			public static WEBFLUX_EXCEPTION_HANDLER_REQUEST: string = "webFluxExceptionHandler:request";
			public static WEBFLUX_EXCEPTION_HANDLER_EXCHANGE: string = "webFluxExceptionHandler:exchange";
			public static WEBFLUX_FILTER_RESPONSE: string = "webFluxFilter:response";
			public static WEBFLUX_FILTER_REQUEST: string = "webFluxFilter:request";
			public static SPRING_EXCHANGE_FILTER_RESPONSE: string = "springExchangeFilter:response";
			public static SPRING_EXCHANGE_FILTER_REQUEST: string = "springExchangeFilter:request";
			public static KTOR_CLIENT_RESPONSE: string = "ktorClient:response";
			public static KTOR_CLIENT_REQUEST: string = "ktorClient:request";
			public static REPLAY_FRAME_BITMAP: string = "replay:frameBitmap";
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class UncaughtExceptionHandler {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler>;
			/**
			 * Constructs a new instance of the io.sentry.UncaughtExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
				setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
			});
			public constructor();
			public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
		}
		export module UncaughtExceptionHandler {
			export class Adapter extends io.sentry.UncaughtExceptionHandler {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler.Adapter>;
				public setDefaultUncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): void;
				public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
				public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UncaughtExceptionHandlerIntegration extends io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration>;
			public constructor();
			public uncaughtException(throwable: java.lang.Thread, event: java.lang.Throwable): void;
			public close(): void;
			public register(currentHandler: io.sentry.IScopes, ignored: io.sentry.SentryOptions): void;
			public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
		}
		export module UncaughtExceptionHandlerIntegration {
			export class UncaughtExceptionHint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.SessionEnd, io.sentry.hints.TransactionEnd {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
				public markFlushed(): void;
				public setFlushable(eventId: io.sentry.protocol.SentryId): void;
				public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
				public setFlushable(param0: io.sentry.protocol.SentryId): void;
				public isFlushable(eventId: io.sentry.protocol.SentryId): boolean;
				public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger);
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UpdateInfo {
			public static class: java.lang.Class<io.sentry.UpdateInfo>;
			public getId(): string;
			public getInstallGroups(): java.util.List<string>;
			public getDownloadUrl(): string;
			public toString(): string;
			public getBuildNumber(): number;
			public getBuildVersion(): string;
			public constructor(id: string, buildVersion: string, buildNumber: number, downloadUrl: string, appName: string, createdDate: string, installGroups: java.util.List<string>);
			public getCreatedDate(): string;
			public getAppName(): string;
		}
	}
}

declare module io {
	export module sentry {
		export abstract class UpdateStatus {
			public static class: java.lang.Class<io.sentry.UpdateStatus>;
			public constructor();
		}
		export module UpdateStatus {
			export class NewRelease extends io.sentry.UpdateStatus {
				public static class: java.lang.Class<io.sentry.UpdateStatus.NewRelease>;
				public constructor(info: io.sentry.UpdateInfo);
				public toString(): string;
				public constructor();
				public getInfo(): io.sentry.UpdateInfo;
			}
			export class NoNetwork extends io.sentry.UpdateStatus {
				public static class: java.lang.Class<io.sentry.UpdateStatus.NoNetwork>;
				public constructor(message: string);
				public getMessage(): string;
				public toString(): string;
				public constructor();
			}
			export class UpToDate extends io.sentry.UpdateStatus {
				public static class: java.lang.Class<io.sentry.UpdateStatus.UpToDate>;
				public static getInstance(): io.sentry.UpdateStatus.UpToDate;
				public toString(): string;
			}
			export class UpdateError extends io.sentry.UpdateStatus {
				public static class: java.lang.Class<io.sentry.UpdateStatus.UpdateError>;
				public constructor(message: string);
				public getMessage(): string;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UserFeedback implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.UserFeedback>;
			public constructor(eventId: io.sentry.protocol.SentryId);
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
			public getEventId(): io.sentry.protocol.SentryId;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getComments(): string;
			public setComments(comments: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public toString(): string;
			public getName(): string;
			public setName(name: string): void;
			public setEmail(email: string): void;
			public setUnknown(unknown: java.util.Map<string,any>): void;
			public constructor(eventId: io.sentry.protocol.SentryId, name: string, email: string, comments: string);
			public getEmail(): string;
		}
		export module UserFeedback {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.UserFeedback> {
				public static class: java.lang.Class<io.sentry.UserFeedback.Deserializer>;
				public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.UserFeedback;
				public constructor();
			}
			export class JsonKeys {
				public static class: java.lang.Class<io.sentry.UserFeedback.JsonKeys>;
				public static EVENT_ID: string = "event_id";
				public static NAME: string = "name";
				public static EMAIL: string = "email";
				public static COMMENTS: string = "comments";
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export class W3CTraceparentHeader {
			public static class: java.lang.Class<io.sentry.W3CTraceparentHeader>;
			public static TRACEPARENT_HEADER: string = "traceparent";
			public getName(): string;
			public constructor(traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, sampled: java.lang.Boolean);
			public getValue(): string;
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ANRWatchDog {
					public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog>;
					public run(): void;
				}
				export module ANRWatchDog {
					export class ANRListener {
						public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog.ANRListener>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.ANRWatchDog$ANRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void;
						});
						public constructor();
						public onAppNotResponding(param0: io.sentry.android.core.ApplicationNotResponding): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.ActivityBreadcrumbsIntegration>;
					public onActivityPaused(this_: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(this_: globalAndroid.app.Activity, activity: globalAndroid.os.Bundle): void;
					public close(): void;
					public onActivityStarted(this_: globalAndroid.app.Activity): void;
					public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
					public onActivityDestroyed(this_: globalAndroid.app.Activity): void;
					public onActivityCreated(this_: globalAndroid.app.Activity, activity: globalAndroid.os.Bundle): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onActivityResumed(this_: globalAndroid.app.Activity): void;
					public constructor(application: globalAndroid.app.Application);
					public onActivityStopped(this_: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityFramesTracker {
					public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker>;
					public lock: io.sentry.util.AutoClosableReentrantLock;
					public takeMetrics(ignored: io.sentry.protocol.SentryId): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
					public isFrameMetricsAggregatorAvailable(): boolean;
					public constructor(loadClass: io.sentry.util.LoadClass, options: io.sentry.android.core.SentryAndroidOptions);
					public constructor(loadClass: io.sentry.util.LoadClass, options: io.sentry.android.core.SentryAndroidOptions, handler: io.sentry.android.core.MainLooperHandler);
					public stop(): void;
					public addActivity(this_: globalAndroid.app.Activity): void;
					public setMetrics(tfValues: globalAndroid.app.Activity, sfValues: io.sentry.protocol.SentryId): void;
				}
				export module ActivityFramesTracker {
					export class FrameCounts {
						public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker.FrameCounts>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityLifecycleIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.ActivityLifecycleIntegration>;
					public onActivityResumed(ttfdSpan: globalAndroid.app.Activity): void;
					public onActivityPrePaused(activity: globalAndroid.app.Activity): void;
					public onActivityPreCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
					public onActivityStarted(this_: globalAndroid.app.Activity): void;
					public onActivityPostCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
					public onActivityPostStarted(activity: globalAndroid.app.Activity): void;
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onActivityPaused(this_: globalAndroid.app.Activity): void;
					public constructor(application: globalAndroid.app.Application, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, activityFramesTracker: io.sentry.android.core.ActivityFramesTracker);
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public onActivityDestroyed(ttfdSpan: globalAndroid.app.Activity): void;
					public close(): void;
					public onActivityCreated(ttidSpan: globalAndroid.app.Activity, ttfdSpan: globalAndroid.os.Bundle): void;
					public onActivityPreStarted(activity: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
					public onActivityPostResumed(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidContinuousProfiler implements io.sentry.IContinuousProfiler, io.sentry.transport.RateLimiter.IRateLimitObserver {
					public static class: java.lang.Class<io.sentry.android.core.AndroidContinuousProfiler>;
					public getProfilerId(): io.sentry.protocol.SentryId;
					public reevaluateSampling(): void;
					public getRootSpanCounter(): number;
					public startProfiler(param0: io.sentry.ProfileLifecycle, param1: io.sentry.TracesSampler): void;
					public onRateLimitChanged(rateLimiter: io.sentry.transport.RateLimiter): void;
					public close(param0: boolean): void;
					public constructor(buildInfoProvider: io.sentry.android.core.BuildInfoProvider, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, logger: io.sentry.ILogger, profilingTracesDirPath: string, profilingTracesHz: number, executorServiceSupplier: io.sentry.util.LazyEvaluator.Evaluator<io.sentry.ISentryExecutorService>);
					public close(this_: boolean): void;
					public isRunning(): boolean;
					public onRateLimitChanged(param0: io.sentry.transport.RateLimiter): void;
					public getChunkId(): io.sentry.protocol.SentryId;
					public startProfiler(this_: io.sentry.ProfileLifecycle, profileLifecycle: io.sentry.TracesSampler): void;
					public stopProfiler(this_: io.sentry.ProfileLifecycle): void;
					public stopProfiler(param0: io.sentry.ProfileLifecycle): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidCpuCollector extends io.sentry.IPerformanceSnapshotCollector {
					public static class: java.lang.Class<io.sentry.android.core.AndroidCpuCollector>;
					public setup(): void;
					public collect(param0: io.sentry.PerformanceCollectionData): void;
					public collect(performanceCollectionData: io.sentry.PerformanceCollectionData): void;
					public constructor(logger: io.sentry.ILogger);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidDateUtils {
					public static class: java.lang.Class<io.sentry.android.core.AndroidDateUtils>;
					public constructor();
					public static getCurrentSentryDateTime(): io.sentry.SentryDate;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidFatalLogger extends io.sentry.ILogger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidFatalLogger>;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
					public log(level: io.sentry.SentryLevel, throwable: java.lang.Throwable, message: string, args: androidNative.Array<any>): void;
					public constructor();
					public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
					public isEnabled(level: io.sentry.SentryLevel): boolean;
					public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
					public constructor(tag: string);
					public log(level: io.sentry.SentryLevel, message: string, throwable: java.lang.Throwable): void;
					public isEnabled(param0: io.sentry.SentryLevel): boolean;
					public log(level: io.sentry.SentryLevel, message: string, args: androidNative.Array<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidLogger extends io.sentry.ILogger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLogger>;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
					public log(level: io.sentry.SentryLevel, throwable: java.lang.Throwable, message: string, args: androidNative.Array<any>): void;
					public constructor();
					public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
					public isEnabled(level: io.sentry.SentryLevel): boolean;
					public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
					public constructor(tag: string);
					public log(level: io.sentry.SentryLevel, message: string, throwable: java.lang.Throwable): void;
					public isEnabled(param0: io.sentry.SentryLevel): boolean;
					public log(level: io.sentry.SentryLevel, message: string, args: androidNative.Array<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidLoggerBatchProcessor extends io.sentry.logger.LoggerBatchProcessor implements io.sentry.android.core.AppState.AppStateListener {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLoggerBatchProcessor>;
					public onForeground(): void;
					public close(param0: boolean): void;
					public onBackground(): void;
					public close(isRestarting: boolean): void;
					public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient);
					public flush(param0: number): void;
					public add(param0: io.sentry.SentryLogEvent): void;
					public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient, executorService: io.sentry.ISentryExecutorService);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidLoggerBatchProcessorFactory extends io.sentry.logger.ILoggerBatchProcessorFactory {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLoggerBatchProcessorFactory>;
					public constructor();
					public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
					public create(options: io.sentry.SentryOptions, client: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidMemoryCollector extends io.sentry.IPerformanceSnapshotCollector {
					public static class: java.lang.Class<io.sentry.android.core.AndroidMemoryCollector>;
					public setup(): void;
					public collect(param0: io.sentry.PerformanceCollectionData): void;
					public constructor();
					public collect(performanceCollectionData: io.sentry.PerformanceCollectionData): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidMetricsBatchProcessor extends io.sentry.metrics.MetricsBatchProcessor implements io.sentry.android.core.AppState.AppStateListener {
					public static class: java.lang.Class<io.sentry.android.core.AndroidMetricsBatchProcessor>;
					public onForeground(): void;
					public close(param0: boolean): void;
					public onBackground(): void;
					public add(param0: io.sentry.SentryMetricsEvent): void;
					public close(isRestarting: boolean): void;
					public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient);
					public flush(param0: number): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidMetricsBatchProcessorFactory extends io.sentry.metrics.IMetricsBatchProcessorFactory {
					public static class: java.lang.Class<io.sentry.android.core.AndroidMetricsBatchProcessorFactory>;
					public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
					public constructor();
					public create(options: io.sentry.SentryOptions, client: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidOptionsInitializer {
					public static class: java.lang.Class<io.sentry.android.core.AndroidOptionsInitializer>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidProfiler {
					public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler>;
					public lock: io.sentry.util.AutoClosableReentrantLock;
					public start(): io.sentry.android.core.AndroidProfiler.ProfileStartData;
					public close(): void;
					public constructor(tracesFilesDirPath: string, intervalUs: number, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, timeoutExecutorServiceSupplier: io.sentry.util.LazyEvaluator.Evaluator<io.sentry.ISentryExecutorService>, logger: io.sentry.ILogger);
					public endAndCollect(transactionEndNanos: boolean, transactionEndCpuMillis: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.android.core.AndroidProfiler.ProfileEndData;
				}
				export module AndroidProfiler {
					export class ProfileEndData {
						public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler.ProfileEndData>;
						public endNanos: number;
						public endCpuMillis: number;
						public traceFile: java.io.File;
						public measurementsMap: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>;
						public didTimeout: boolean;
						public constructor(endNanos: number, endCpuMillis: number, didTimeout: boolean, traceFile: java.io.File, measurementsMap: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>);
					}
					export class ProfileStartData {
						public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler.ProfileStartData>;
						public startNanos: number;
						public startCpuMillis: number;
						public startTimestamp: java.util.Date;
						public constructor(startNanos: number, startCpuMillis: number, startTimestamp: java.util.Date);
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidSocketTagger extends io.sentry.ISocketTagger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidSocketTagger>;
					public static getInstance(): io.sentry.android.core.AndroidSocketTagger;
					public untagSockets(): void;
					public tagSockets(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidTransactionProfiler extends io.sentry.ITransactionProfiler {
					public static class: java.lang.Class<io.sentry.android.core.AndroidTransactionProfiler>;
					public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>, param2: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
					public constructor(context: globalAndroid.content.Context, sentryAndroidOptions: io.sentry.android.core.SentryAndroidOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector);
					public isRunning(): boolean;
					public close(): void;
					public constructor(context: globalAndroid.content.Context, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, logger: io.sentry.ILogger, profilingTracesDirPath: string, isProfilingEnabled: boolean, profilingTracesHz: number, executorService: io.sentry.ISentryExecutorService);
					public constructor(context: globalAndroid.content.Context, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, logger: io.sentry.ILogger, profilingTracesDirPath: string, isProfilingEnabled: boolean, profilingTracesHz: number, executorServiceSupplier: io.sentry.util.LazyEvaluator.Evaluator<io.sentry.ISentryExecutorService>);
					public start(): void;
					public bindTransaction(this_: io.sentry.ITransaction): void;
					public bindTransaction(param0: io.sentry.ITransaction): void;
					public onTransactionFinish(transaction: io.sentry.ITransaction, performanceCollectionData: java.util.List<io.sentry.PerformanceCollectionData>, options: io.sentry.SentryOptions): io.sentry.ProfilingTraceData;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidTransportGate extends io.sentry.transport.ITransportGate {
					public static class: java.lang.Class<io.sentry.android.core.AndroidTransportGate>;
					public isConnected(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AnrIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegration>;
					public static watchDogLock: io.sentry.util.AutoClosableReentrantLock;
					public close(): void;
					public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
					public constructor(context: globalAndroid.content.Context);
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module AnrIntegration {
					export class AnrHint implements io.sentry.hints.AbnormalExit, io.sentry.hints.TransactionEnd {
						public static class: java.lang.Class<io.sentry.android.core.AnrIntegration.AnrHint>;
						public ignoreCurrentThread(): boolean;
						public timestamp(): java.lang.Long;
						public mechanism(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AnrIntegrationFactory {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegrationFactory>;
					public constructor();
					public static create(context: globalAndroid.content.Context, buildInfoProvider: io.sentry.android.core.BuildInfoProvider): io.sentry.Integration;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AnrV2Integration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public close(): void;
					public constructor(context: globalAndroid.content.Context);
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module AnrV2Integration {
					export class AnrV2Hint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.Backfillable, io.sentry.hints.AbnormalExit {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrV2Hint>;
						public shouldEnrich(): boolean;
						public setFlushable(eventId: io.sentry.protocol.SentryId): void;
						public setFlushable(param0: io.sentry.protocol.SentryId): void;
						public ignoreCurrentThread(): boolean;
						public waitFlush(): boolean;
						public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger);
						public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger, timestamp: number, shouldEnrich: boolean, isBackgroundAnr: boolean);
						public timestamp(): java.lang.Long;
						public markFlushed(): void;
						public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
						public isFlushable(eventId: io.sentry.protocol.SentryId): boolean;
						public mechanism(): string;
					}
					export class AnrV2Policy extends io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.ApplicationExitInfoPolicy {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrV2Policy>;
						public getLastReportedTimestamp(): java.lang.Long;
						public buildReport(debugMeta: globalAndroid.app.ApplicationExitInfo, this_: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						public getLabel(): string;
						public buildReport(param0: globalAndroid.app.ApplicationExitInfo, param1: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						public shouldReportHistorical(): boolean;
						public getTargetReason(): number;
					}
					export class ParseResult {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult>;
					}
					export module ParseResult {
						export class Type {
							public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
							public static DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static NO_DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static ERROR: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static values(): androidNative.Array<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
							public static valueOf(name: string): io.sentry.android.core.AnrV2Integration.ParseResult.Type;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppComponentsBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AppComponentsBreadcrumbsIntegration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public onTrimMemory(level: number): void;
					public onConfigurationChanged(newConfig: globalAndroid.content.res.Configuration): void;
					public close(): void;
					public constructor(context: globalAndroid.content.Context);
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppLifecycleIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.AppLifecycleIntegration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppStartExtension extends io.sentry.IAppStartExtender {
					public static class: java.lang.Class<io.sentry.android.core.AppStartExtension>;
					public setExtendAppStartListener(this_: io.sentry.android.core.AppStartExtension.ExtendAppStartListener): void;
					public finishExtendedAppStart(): void;
					public isExtended(): boolean;
					public isActive(): boolean;
					public getExtendedAppStartSpan(): io.sentry.ISpan;
					public setData(this_: string, key: any): void;
					public clear(): void;
					public getExtendedEndTime(): io.sentry.SentryDate;
					public constructor(metrics: io.sentry.android.core.performance.AppStartMetrics);
					public finishTransaction(spanEnd: io.sentry.SentryDate): void;
					public extendAppStart(): void;
				}
				export module AppStartExtension {
					export class ExtendAppStartListener {
						public static class: java.lang.Class<io.sentry.android.core.AppStartExtension.ExtendAppStartListener>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.AppStartExtension$ExtendAppStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onExtendAppStartRequested(): io.sentry.android.core.AppStartExtension.ExtendedAppStart;
						});
						public constructor();
						public onExtendAppStartRequested(): io.sentry.android.core.AppStartExtension.ExtendedAppStart;
					}
					export class ExtendedAppStart {
						public static class: java.lang.Class<io.sentry.android.core.AppStartExtension.ExtendedAppStart>;
						public transaction: io.sentry.ITransaction;
						public span: io.sentry.ISpan;
						public constructor(transaction: io.sentry.ITransaction, span: io.sentry.ISpan);
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppState {
					public static class: java.lang.Class<io.sentry.android.core.AppState>;
					public registerLifecycleObserver(this_: io.sentry.SentryOptions): void;
					public addAppStateListener(this_: io.sentry.android.core.AppState.AppStateListener): void;
					public resetInstance(): void;
					public isInBackground(): java.lang.Boolean;
					public close(): void;
					public static getInstance(): io.sentry.android.core.AppState;
					public unregisterLifecycleObserver(): void;
					public removeAppStateListener(this_: io.sentry.android.core.AppState.AppStateListener): void;
					public getLifecycleObserver(): io.sentry.android.core.AppState.LifecycleObserver;
				}
				export module AppState {
					export class AppStateListener {
						public static class: java.lang.Class<io.sentry.android.core.AppState.AppStateListener>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.AppState$AppStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onForeground(): void;
							onBackground(): void;
						});
						public constructor();
						public onForeground(): void;
						public onBackground(): void;
					}
					export class LifecycleObserver {
						public static class: java.lang.Class<io.sentry.android.core.AppState.LifecycleObserver>;
						public constructor(this$0: io.sentry.android.core.AppState);
						public onStart(this_: androidx.lifecycle.LifecycleOwner): void;
						public onStop(this_: androidx.lifecycle.LifecycleOwner): void;
						public getListeners(): java.util.List<io.sentry.android.core.AppState.AppStateListener>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ApplicationExitInfoEventProcessor extends io.sentry.BackfillingEventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoEventProcessor>;
					public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					public getOrder(): java.lang.Long;
					public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
					public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
					public constructor(context: globalAndroid.content.Context, options: io.sentry.android.core.SentryAndroidOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider);
					public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
				export module ApplicationExitInfoEventProcessor {
					export class AnrHintEnricher extends io.sentry.android.core.ApplicationExitInfoEventProcessor.HintEnricher {
						public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoEventProcessor.AnrHintEnricher>;
						public supports(param0: any): boolean;
						public applyPostEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any, param3: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource): void;
						public applyPostEnrichment(event: io.sentry.SentryEvent, hint: io.sentry.hints.Backfillable, rawHint: any, optionsSource: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource): void;
						public applyPreEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any): void;
						public applyPreEnrichment(event: io.sentry.SentryEvent, hint: io.sentry.hints.Backfillable, rawHint: any): void;
						public supports(hint: any): boolean;
					}
					export class HintEnricher {
						public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoEventProcessor.HintEnricher>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.ApplicationExitInfoEventProcessor$HintEnricher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							supports(param0: any): boolean;
							applyPreEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any): void;
							applyPostEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any, param3: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource): void;
						});
						public constructor();
						public supports(param0: any): boolean;
						public applyPostEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any, param3: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource): void;
						public applyPreEnrichment(param0: io.sentry.SentryEvent, param1: io.sentry.hints.Backfillable, param2: any): void;
					}
					export class OptionsSource {
						public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource>;
						public static CURRENT: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource;
						public static PERSISTED: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource;
						public static PERSISTED_WITH_CURRENT_FALLBACK: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource;
						public static NONE: io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource;
						public static valueOf(name: string): io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource;
						public static values(): androidNative.Array<io.sentry.android.core.ApplicationExitInfoEventProcessor.OptionsSource>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ApplicationExitInfoHistoryDispatcher {
					public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoHistoryDispatcher>;
					public run(): void;
				}
				export module ApplicationExitInfoHistoryDispatcher {
					export class ApplicationExitInfoPolicy {
						public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.ApplicationExitInfoPolicy>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.ApplicationExitInfoHistoryDispatcher$ApplicationExitInfoPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLabel(): string;
							getTargetReason(): number;
							shouldReportHistorical(): boolean;
							getLastReportedTimestamp(): java.lang.Long;
							buildReport(param0: globalAndroid.app.ApplicationExitInfo, param1: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						});
						public constructor();
						public getLastReportedTimestamp(): java.lang.Long;
						public getLabel(): string;
						public buildReport(param0: globalAndroid.app.ApplicationExitInfo, param1: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						public shouldReportHistorical(): boolean;
						public getTargetReason(): number;
					}
					export class Report {
						public static class: java.lang.Class<io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report>;
						public getEvent(): io.sentry.SentryEvent;
						public getHint(): io.sentry.Hint;
						public getFlushHint(): io.sentry.hints.BlockingFlushHint;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ApplicationNotResponding {
					public static class: java.lang.Class<io.sentry.android.core.ApplicationNotResponding>;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class BuildConfig {
					public static class: java.lang.Class<io.sentry.android.core.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = "io.sentry.android.core";
					public static BUILD_TYPE: string = "release";
					public static SENTRY_ANDROID_SDK_NAME: string = "sentry.java.android";
					public static VERSION_NAME: string = "8.52.0";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class BuildInfoProvider {
					public static class: java.lang.Class<io.sentry.android.core.BuildInfoProvider>;
					public isEmulator(): java.lang.Boolean;
					public getModel(): string;
					public getSdkInfoVersion(): number;
					public constructor(logger: io.sentry.ILogger);
					public getBuildTags(): string;
					public getManufacturer(): string;
					public getVersionRelease(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ContextUtils {
					public static class: java.lang.Class<io.sentry.android.core.ContextUtils>;
					public static isForegroundImportance(): boolean;
					public static getApplicationContext(context: globalAndroid.content.Context): globalAndroid.content.Context;
					public static appIsLibraryForComposePreview(component: globalAndroid.content.Context): boolean;
				}
				export module ContextUtils {
					export class SideLoadedInfo {
						public static class: java.lang.Class<io.sentry.android.core.ContextUtils.SideLoadedInfo>;
						public getInstallerStore(): string;
						public asTags(): java.util.Map<string,string>;
						public constructor(isSideLoaded: boolean, installerStore: string);
						public isSideLoaded(): boolean;
					}
					export class SplitApksInfo {
						public static class: java.lang.Class<io.sentry.android.core.ContextUtils.SplitApksInfo>;
						public constructor(isSplitApks: boolean, splitNames: androidNative.Array<string>);
						public getSplitNames(): androidNative.Array<string>;
						public isSplitApks(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class CurrentActivityHolder {
					public static class: java.lang.Class<io.sentry.android.core.CurrentActivityHolder>;
					public clearActivity(): void;
					public getActivity(): globalAndroid.app.Activity;
					public setActivity(activity: globalAndroid.app.Activity): void;
					public static getInstance(): io.sentry.android.core.CurrentActivityHolder;
					public clearActivity(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class DefaultAndroidEventProcessor extends io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor>;
					public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					public constructor(e: globalAndroid.content.Context, this_: io.sentry.android.core.BuildInfoProvider, context: io.sentry.android.core.SentryAndroidOptions);
					public getOrder(): java.lang.Long;
					public getDefaultUser(context: globalAndroid.content.Context): io.sentry.protocol.User;
					public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
					public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
					public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
				export module DefaultAndroidEventProcessor {
					export class DeviceInfoCacheThreadFactory {
						public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor.DeviceInfoCacheThreadFactory>;
						public newThread(r: java.lang.Runnable): java.lang.Thread;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class DeviceInfoUtil {
					public static class: java.lang.Class<io.sentry.android.core.DeviceInfoUtil>;
					public constructor(context: globalAndroid.content.Context, options: io.sentry.android.core.SentryAndroidOptions);
					public static resetInstance(): void;
					public static getBatteryLevel(level: globalAndroid.content.Intent, scale: io.sentry.SentryOptions): java.lang.Float;
					public static isCharging(plugged: globalAndroid.content.Intent, e: io.sentry.SentryOptions): java.lang.Boolean;
					public collectDeviceInformation(collectDeviceIO: boolean, collectDynamicData: boolean): io.sentry.protocol.Device;
					public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
					public getSideLoadedInfo(): io.sentry.android.core.ContextUtils.SideLoadedInfo;
					public getSplitApksInfo(): io.sentry.android.core.ContextUtils.SplitApksInfo;
					public getTotalMemory(): java.lang.Long;
					public static getInstance(ignored: globalAndroid.content.Context, context: io.sentry.android.core.SentryAndroidOptions): io.sentry.android.core.DeviceInfoUtil;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export abstract class EmptySecureContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.EmptySecureContentProvider>;
					public query(uri: globalAndroid.net.Uri, strings: androidNative.Array<string>, s: string, strings1: androidNative.Array<string>, s1: string): globalAndroid.database.Cursor;
					public insert(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
					public delete(uri: globalAndroid.net.Uri, s: string, strings: androidNative.Array<string>): number;
					public update(uri: globalAndroid.net.Uri, contentValues: globalAndroid.content.ContentValues, s: string, strings: androidNative.Array<string>): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class EnvelopeFileObserver {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver>;
					public onEvent(eventType: number, relativePath: string): void;
				}
				export module EnvelopeFileObserver {
					export class CachedEnvelopeHint implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable, io.sentry.hints.ApplyScopeData, io.sentry.hints.Resettable {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver.CachedEnvelopeHint>;
						public isRetry(): boolean;
						public waitFlush(): boolean;
						public setResult(succeeded: boolean): void;
						public setRetry(retry: boolean): void;
						public isSuccess(): boolean;
						public setResult(param0: boolean): void;
						public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger);
						public setRetry(param0: boolean): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export abstract class EnvelopeFileObserverIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration>;
					public startLock: io.sentry.util.AutoClosableReentrantLock;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
					public static getOutboxFileObserver(): io.sentry.android.core.EnvelopeFileObserverIntegration;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module EnvelopeFileObserverIntegration {
					export class OutboxEnvelopeFileObserverIntegration extends io.sentry.android.core.EnvelopeFileObserverIntegration {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration.OutboxEnvelopeFileObserverIntegration>;
						public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
						public getPath(options: io.sentry.SentryOptions): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class FeedbackShakeIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.FeedbackShakeIntegration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public close(): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onActivityPaused(activity: globalAndroid.app.Activity): void;
					public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
					public constructor(application: globalAndroid.app.Application);
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
					public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.core.IDebugImagesLoader>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IDebugImagesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
						loadDebugImagesForAddresses(param0: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
						clearDebugImages(): void;
					});
					public constructor();
					public loadDebugImagesForAddresses(param0: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class Installation {
					public static class: java.lang.Class<io.sentry.android.core.Installation>;
					public static staticLock: io.sentry.util.AutoClosableReentrantLock;
					public static id(e: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class InternalSentrySdk {
					public static class: java.lang.Class<io.sentry.android.core.InternalSentrySdk>;
					public static serializeScope(e: globalAndroid.content.Context, logger: io.sentry.android.core.SentryAndroidOptions, writer: io.sentry.IScope): java.util.Map<string,any>;
					public static captureEnvelope(event: androidNative.Array<number>, item: boolean): io.sentry.protocol.SentryId;
					public constructor();
					public static setTrace(traceId: string, spanId: string, sampleRate: java.lang.Double, sampleRand: java.lang.Double): void;
					public static getAppStartMeasurement(): java.util.Map<string,any>;
					public static getCurrentScope(): io.sentry.IScope;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LifecycleWatcher extends io.sentry.android.core.AppState.AppStateListener {
					public static class: java.lang.Class<io.sentry.android.core.LifecycleWatcher>;
					public onForeground(): void;
					public onBackground(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LoadClass extends io.sentry.util.LoadClass {
					public static class: java.lang.Class<io.sentry.android.core.LoadClass>;
					public loadClass(clazz: string, logger: io.sentry.ILogger): java.lang.Class<any>;
					public constructor();
					public isClassAvailable(clazz: string, options: io.sentry.SentryOptions): boolean;
					public isClassAvailable(clazz: string, logger: io.sentry.ILogger): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class MainLooperHandler {
					public static class: java.lang.Class<io.sentry.android.core.MainLooperHandler>;
					public post(runnable: java.lang.Runnable): void;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ManifestMetadataReader {
					public static class: java.lang.Class<io.sentry.android.core.ManifestMetadataReader>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NativeEventCollector {
					public static class: java.lang.Class<io.sentry.android.core.NativeEventCollector>;
					public deleteNativeEventFile(this_: io.sentry.android.core.NativeEventCollector.NativeEventData): boolean;
					public findAndRemoveMatchingNativeEvent(metadata: number): io.sentry.android.core.NativeEventCollector.NativeEventData;
					public collect(): void;
					public constructor(options: io.sentry.android.core.SentryAndroidOptions);
				}
				export module NativeEventCollector {
					export class BoundedInputStream {
						public static class: java.lang.Class<io.sentry.android.core.NativeEventCollector.BoundedInputStream>;
						public read(): number;
						public close(): void;
						public read(b: androidNative.Array<number>, off: number, len: number): number;
						public skip(n: number): number;
						public available(): number;
					}
					export class ItemHeaderInfo {
						public static class: java.lang.Class<io.sentry.android.core.NativeEventCollector.ItemHeaderInfo>;
					}
					export class NativeEnvelopeMetadata {
						public static class: java.lang.Class<io.sentry.android.core.NativeEventCollector.NativeEnvelopeMetadata>;
					}
					export class NativeEventData {
						public static class: java.lang.Class<io.sentry.android.core.NativeEventCollector.NativeEventData>;
						public getEnvelope(): io.sentry.SentryEnvelope;
						public getEvent(): io.sentry.SentryEvent;
						public getFile(): java.io.File;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NdkHandlerStrategy {
					public static class: java.lang.Class<io.sentry.android.core.NdkHandlerStrategy>;
					public static SENTRY_HANDLER_STRATEGY_DEFAULT: io.sentry.android.core.NdkHandlerStrategy;
					public static SENTRY_HANDLER_STRATEGY_CHAIN_AT_START: io.sentry.android.core.NdkHandlerStrategy;
					public static values(): androidNative.Array<io.sentry.android.core.NdkHandlerStrategy>;
					public static valueOf(name: string): io.sentry.android.core.NdkHandlerStrategy;
					public getValue(): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NdkIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.NdkIntegration>;
					public static SENTRY_NDK_CLASS_NAME: string = "io.sentry.android.ndk.SentryNdk";
					public register(args: io.sentry.IScopes, e: io.sentry.SentryOptions): void;
					public constructor(sentryNdkClass: java.lang.Class<any>);
					public close(): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NetworkBreadcrumbsIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration>;
					public constructor(context: globalAndroid.content.Context, buildInfoProvider: io.sentry.android.core.BuildInfoProvider);
					public close(): void;
					public register(ignored: io.sentry.IScopes, this_: io.sentry.SentryOptions): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module NetworkBreadcrumbsIntegration {
					export class NetworkBreadcrumbConnectionDetail {
						public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbConnectionDetail>;
					}
					export class NetworkBreadcrumbsNetworkCallback {
						public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbsNetworkCallback>;
						public onAvailable(network: globalAndroid.net.Network): void;
						public onCapabilitiesChanged(network: globalAndroid.net.Network, networkCapabilities: globalAndroid.net.NetworkCapabilities): void;
						public onLost(network: globalAndroid.net.Network): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class NoOpDebugImagesLoader extends io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.core.NoOpDebugImagesLoader>;
					public loadDebugImagesForAddresses(param0: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
					public loadDebugImagesForAddresses(addresses: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
					public static getInstance(): io.sentry.android.core.NoOpDebugImagesLoader;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PerfettoContinuousProfiler implements io.sentry.IContinuousProfiler, io.sentry.transport.RateLimiter.IRateLimitObserver {
					public static class: java.lang.Class<io.sentry.android.core.PerfettoContinuousProfiler>;
					public getProfilerId(): io.sentry.protocol.SentryId;
					public reevaluateSampling(): void;
					public startProfiler(param0: io.sentry.ProfileLifecycle, param1: io.sentry.TracesSampler): void;
					public constructor(logger: io.sentry.ILogger, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, executorServiceSupplier: io.sentry.util.LazyEvaluator.Evaluator<io.sentry.ISentryExecutorService>, perfettoProfilerFactory: any /* any*/);
					public close(param0: boolean): void;
					public close(this_: boolean): void;
					public isRunning(): boolean;
					public onRateLimitChanged(param0: io.sentry.transport.RateLimiter): void;
					public getChunkId(): io.sentry.protocol.SentryId;
					public startProfiler(this_: io.sentry.ProfileLifecycle, profileLifecycle: io.sentry.TracesSampler): void;
					public stopProfiler(this_: io.sentry.ProfileLifecycle): void;
					public onRateLimitChanged(this_: io.sentry.transport.RateLimiter): void;
					public stopProfiler(param0: io.sentry.ProfileLifecycle): void;
				}
				export module PerfettoContinuousProfiler {
					export class ChunkMeasurementCollector {
						public static class: java.lang.Class<io.sentry.android.core.PerfettoContinuousProfiler.ChunkMeasurementCollector>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PerfettoProfiler {
					public static class: java.lang.Class<io.sentry.android.core.PerfettoProfiler>;
					public endAndCollect(e: any /* any*/): void;
					public start(this_: number): boolean;
					public constructor(context: globalAndroid.content.Context, logger: io.sentry.ILogger, executorService: io.sentry.ISentryExecutorService);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PerformanceAndroidEventProcessor extends io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.PerformanceAndroidEventProcessor>;
					public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					public getOrder(): java.lang.Long;
					public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
					public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
					public process(appStartUpDurationMs: io.sentry.protocol.SentryTransaction, shouldAttachAppStartSpans: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
					public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PersistingOptionsCacheGenerationObserver extends io.sentry.IOptionsObserver {
					public static class: java.lang.Class<io.sentry.android.core.PersistingOptionsCacheGenerationObserver>;
					public setEnvironment(environment: string): void;
					public setTags(tags: java.util.Map<string,string>): void;
					public setReplayErrorSampleRate(param0: java.lang.Double): void;
					public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
					public setDist(param0: string): void;
					public setTags(param0: java.util.Map<string,string>): void;
					public setProguardUuid(proguardUuid: string): void;
					public setSdkVersion(sdkVersion: io.sentry.protocol.SdkVersion): void;
					public setRelease(param0: string): void;
					public setReplayErrorSampleRate(replayErrorSampleRate: java.lang.Double): void;
					public setProguardUuid(param0: string): void;
					public setRelease(release: string): void;
					public setDist(dist: string): void;
					public setEnvironment(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ScreenshotEventProcessor extends io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.ScreenshotEventProcessor>;
					public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					public getOrder(): java.lang.Long;
					public constructor(options: io.sentry.android.core.SentryAndroidOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, isReplayAvailable: boolean);
					public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					public process(masked: io.sentry.SentryEvent, this_: io.sentry.Hint): io.sentry.SentryEvent;
					public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
					public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
					public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SendCachedEnvelopeIntegration implements io.sentry.Integration, io.sentry.IConnectionStatusProvider.IConnectionStatusObserver {
					public static class: java.lang.Class<io.sentry.android.core.SendCachedEnvelopeIntegration>;
					public onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
					public constructor(factory: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory, startupCrashMarkerEvaluator: io.sentry.util.LazyEvaluator<java.lang.Boolean>);
					public onConnectionStatusChanged(status: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
					public close(): void;
					public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroid {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroid>;
					public static staticLock: io.sentry.util.AutoClosableReentrantLock;
					public static init(context: globalAndroid.content.Context, logger: io.sentry.ILogger): void;
					public static init(context: globalAndroid.content.Context): void;
					public static init(sessionStarted: globalAndroid.content.Context, scopes: io.sentry.ILogger, ignored: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
					public static init(context: globalAndroid.content.Context, configuration: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroidDateProvider extends io.sentry.SentryDateProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidDateProvider>;
					public constructor();
					public now(): io.sentry.SentryDate;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroidOptions extends io.sentry.SentryOptions {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions>;
					public isReportHistoricalAnrs(): boolean;
					public setEnableNdkAppHangTracking(enableNdkAppHangTracking: boolean): void;
					public setEnableActivityLifecycleBreadcrumbs(enableActivityLifecycleBreadcrumbs: boolean): void;
					public getFrameMetricsCollector(): io.sentry.android.core.internal.util.SentryFrameMetricsCollector;
					public setEnableSystemEventBreadcrumbs(enableSystemEventBreadcrumbs: boolean): void;
					public isEnableNdk(): boolean;
					public getNativeSdkName(): string;
					public setAttachAnrThreadDump(attachAnrThreadDump: boolean): void;
					public setEnableAutoActivityLifecycleTracing(enableAutoActivityLifecycleTracing: boolean): void;
					public isAnrProfilingEnabled(): boolean;
					public isEnableAnrFingerprinting(): boolean;
					public setNativeHandlerStrategy(ndkHandlerStrategy: io.sentry.android.core.NdkHandlerStrategy): void;
					public setTombstoneEnabled(enableTombstone: boolean): void;
					public isEnableActivityLifecycleBreadcrumbs(): boolean;
					public setBeforeViewHierarchyCaptureCallback(beforeViewHierarchyCaptureCallback: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
					public isCollectExternalStorageContext(): boolean;
					public getAnrProfilingSampleRate(): java.lang.Double;
					public isEnableNdkAppHangTracking(): boolean;
					public constructor();
					public setAnrEnabled(anrEnabled: boolean): void;
					public getAnrTimeoutIntervalMillis(): number;
					public getScreenshot(): io.sentry.android.core.SentryScreenshotOptions;
					public isTombstoneEnabled(): boolean;
					public isReportHistoricalTombstones(): boolean;
					public isAttachRawTombstone(): boolean;
					public setEnableScopeSync(enableScopeSync: boolean): void;
					public setAnrTimeoutIntervalMillis(anrTimeoutIntervalMillis: number): void;
					public setBeforeScreenshotCaptureCallback(beforeScreenshotCaptureCallback: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
					public isEnableStandaloneAppStartTracing(): boolean;
					public getDebugImagesLoader(): io.sentry.android.core.IDebugImagesLoader;
					public isEnableRootCheck(): boolean;
					public getBeforeScreenshotCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
					public isEnableFramesTracking(): boolean;
					public setNativeSdkName(nativeSdkName: string): void;
					public setAnrReportInDebug(anrReportInDebug: boolean): void;
					public setFrameMetricsCollector(frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector): void;
					public setEnableAnrFingerprinting(enableAnrFingerprinting: boolean): void;
					public setNdkAppHangTimeoutIntervalMillis(ndkAppHangTimeoutIntervalMillis: number): void;
					public isEnablePerformanceV2(): boolean;
					public setAnrProfilingSampleRate(anrProfilingSampleRate: java.lang.Double): void;
					public isAttachViewHierarchy(): boolean;
					public isEnableActivityLifecycleTracingAutoFinish(): boolean;
					public isAnrEnabled(): boolean;
					public setEnableActivityLifecycleTracingAutoFinish(enableActivityLifecycleTracingAutoFinish: boolean): void;
					public enableAllAutoBreadcrumbs(enable: boolean): void;
					public setEnableNdk(enableNdk: boolean): void;
					public isEnableAppComponentBreadcrumbs(): boolean;
					public setCollectAdditionalContext(collectAdditionalContext: boolean): void;
					public isEnableScopeSync(): boolean;
					public isAnrReportInDebug(): boolean;
					public isEnableAutoActivityLifecycleTracing(): boolean;
					public setReportHistoricalAnrs(reportHistoricalAnrs: boolean): void;
					public setEnableNetworkEventBreadcrumbs(enableNetworkEventBreadcrumbs: boolean): void;
					public setEnableRootCheck(enableRootCheck: boolean): void;
					public isEnableAppLifecycleBreadcrumbs(): boolean;
					public getNdkHandlerStrategy(): number;
					public setEnableStandaloneAppStartTracing(enableStandaloneAppStartTracing: boolean): void;
					public isEnableAutoTraceIdGeneration(): boolean;
					public isCollectAdditionalContext(): boolean;
					public setReportHistoricalTombstones(reportHistoricalTombstones: boolean): void;
					public isEnableSystemEventBreadcrumbsExtras(): boolean;
					public getBeforeViewHierarchyCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
					public getStartupCrashDurationThresholdMillis(): number;
					public setEnableAutoTraceIdGeneration(enableAutoTraceIdGeneration: boolean): void;
					public isAttachScreenshot(): boolean;
					public isEnableNetworkEventBreadcrumbs(): boolean;
					public setAttachScreenshot(attachScreenshot: boolean): void;
					public setEnableFramesTracking(enableFramesTracking: boolean): void;
					public setEnableSystemEventBreadcrumbsExtras(enableSystemEventBreadcrumbsExtras: boolean): void;
					public setEnableAppComponentBreadcrumbs(enableAppComponentBreadcrumbs: boolean): void;
					public getNdkAppHangTimeoutIntervalMillis(): number;
					public isEnableSystemEventBreadcrumbs(): boolean;
					public setDebugImagesLoader(debugImagesLoader: io.sentry.android.core.IDebugImagesLoader): void;
					public setAttachRawTombstone(attachRawTombstone: boolean): void;
					public setEnableAppLifecycleBreadcrumbs(enableAppLifecycleBreadcrumbs: boolean): void;
					public isAttachAnrThreadDump(): boolean;
					public setAttachViewHierarchy(attachViewHierarchy: boolean): void;
					public setEnablePerformanceV2(enablePerformanceV2: boolean): void;
					public setCollectExternalStorageContext(collectExternalStorageContext: boolean): void;
				}
				export module SentryAndroidOptions {
					export class AndroidUserFeedbackFormHandler extends io.sentry.SentryFeedbackOptions.IFormHandler {
						public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions.AndroidUserFeedbackFormHandler>;
						public showForm(param0: io.sentry.protocol.SentryId, param1: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
						public showForm(associatedEventId: io.sentry.protocol.SentryId, configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): void;
					}
					export class BeforeCaptureCallback {
						public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.SentryAndroidOptions$BeforeCaptureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: boolean): boolean;
						});
						public constructor();
						public execute(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroidOptionsContainer extends io.sentry.OptionsContainer<io.sentry.android.core.SentryAndroidOptions> {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptionsContainer>;
					public createInstance(): any;
					public createInstance(): io.sentry.android.core.SentryAndroidOptions;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryFrameMetrics {
					public static class: java.lang.Class<io.sentry.android.core.SentryFrameMetrics>;
					public getSlowFrozenFrameCount(): number;
					public getTotalDurationNanos(): number;
					public duplicate(): io.sentry.android.core.SentryFrameMetrics;
					public getSlowFrameCount(): number;
					public constructor(slowFrameCount: number, slowFrameDelayNanos: number, frozenFrameCount: number, frozenFrameDelayNanos: number, totalDurationNanos: number);
					public addFrame(durationNanos: number, delayNanos: number, isSlow: boolean, isFrozen: boolean): void;
					public diffTo(other: io.sentry.android.core.SentryFrameMetrics): io.sentry.android.core.SentryFrameMetrics;
					public getFrozenFrameCount(): number;
					public getFrozenFrameDelayNanos(): number;
					public constructor();
					public clear(): void;
					public getSlowFrameDelayNanos(): number;
					public containsValidData(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryFramesDelayResult {
					public static class: java.lang.Class<io.sentry.android.core.SentryFramesDelayResult>;
					public getDelaySeconds(): number;
					public constructor(delaySeconds: number, framesContributingToDelayCount: number);
					public getFramesContributingToDelayCount(): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryInitProvider extends io.sentry.android.core.EmptySecureContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryInitProvider>;
					public getType(uri: globalAndroid.net.Uri): string;
					public shutdown(): void;
					public attachInfo(context: globalAndroid.content.Context, info: globalAndroid.content.pm.ProviderInfo): void;
					public constructor();
					public onCreate(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryLogcatAdapter {
					public static class: java.lang.Class<io.sentry.android.core.SentryLogcatAdapter>;
					public static wtf(tag: string, msg: string): number;
					public static v(tag: string, msg: string): number;
					public static v(tag: string, msg: string, tr: java.lang.Throwable): number;
					public static e(tag: string, msg: string, tr: java.lang.Throwable): number;
					public static wtf(tag: string, msg: string, tr: java.lang.Throwable): number;
					public static d(tag: string, msg: string): number;
					public static e(tag: string, msg: string): number;
					public static w(tag: string, tr: java.lang.Throwable): number;
					public static i(tag: string, msg: string): number;
					public static w(tag: string, msg: string): number;
					public static w(tag: string, msg: string, tr: java.lang.Throwable): number;
					public static i(tag: string, msg: string, tr: java.lang.Throwable): number;
					public constructor();
					public static wtf(tag: string, tr: java.lang.Throwable): number;
					public static d(tag: string, msg: string, tr: java.lang.Throwable): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryPerformanceProvider extends io.sentry.android.core.EmptySecureContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryPerformanceProvider>;
					public getType(uri: globalAndroid.net.Uri): string;
					public attachInfo(context: globalAndroid.content.Context, info: globalAndroid.content.pm.ProviderInfo): void;
					public shutdown(): void;
					public constructor();
					public onCreate(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryScreenshotOptions extends io.sentry.SentryMaskingOptions {
					public static class: java.lang.Class<io.sentry.android.core.SentryScreenshotOptions>;
					public setMaskAllImages(maskAllImages: boolean): void;
					public trackCustomMasking(): void;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryShakeDetector {
					public static class: java.lang.Class<io.sentry.android.core.SentryShakeDetector>;
					public onSensorChanged(this_: globalAndroid.hardware.SensorEvent): void;
					public start(context: globalAndroid.content.Context, shakeListener: io.sentry.android.core.SentryShakeDetector.Listener): void;
					public close(): void;
					public stop(): void;
					public constructor(logger: io.sentry.ILogger);
					public onAccuracyChanged(sensor: globalAndroid.hardware.Sensor, accuracy: number): void;
				}
				export module SentryShakeDetector {
					export class Listener {
						public static class: java.lang.Class<io.sentry.android.core.SentryShakeDetector.Listener>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.SentryShakeDetector$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShake(): void;
						});
						public constructor();
						public onShake(): void;
					}
					export class Sample {
						public static class: java.lang.Class<io.sentry.android.core.SentryShakeDetector.Sample>;
					}
					export class SamplePool {
						public static class: java.lang.Class<io.sentry.android.core.SentryShakeDetector.SamplePool>;
					}
					export class SampleQueue {
						public static class: java.lang.Class<io.sentry.android.core.SentryShakeDetector.SampleQueue>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryUserFeedbackButton {
					public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackButton>;
					/** @deprecated */
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					/** @deprecated */
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public setOnClickListener(listener: globalAndroid.view.View.OnClickListener): void;
					/** @deprecated */
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					/** @deprecated */
					public constructor(context: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryUserFeedbackDialog extends io.sentry.android.core.SentryUserFeedbackForm {
					public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackDialog>;
				}
				export module SentryUserFeedbackDialog {
					export class Builder extends io.sentry.android.core.SentryUserFeedbackForm.Builder {
						public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackDialog.Builder>;
						/** @deprecated */
						public constructor(context: globalAndroid.content.Context);
						/** @deprecated */
						public constructor(context: globalAndroid.content.Context, configuration: io.sentry.android.core.SentryUserFeedbackDialog.OptionsConfiguration);
						/** @deprecated */
						public associatedEventId(associatedEventId: io.sentry.protocol.SentryId): io.sentry.android.core.SentryUserFeedbackDialog.Builder;
						public associatedEventId(associatedEventId: io.sentry.protocol.SentryId): io.sentry.android.core.SentryUserFeedbackForm.Builder;
						public configurator(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): io.sentry.android.core.SentryUserFeedbackForm.Builder;
						public create(): io.sentry.android.core.SentryUserFeedbackForm;
						public constructor(context: globalAndroid.content.Context, themeResId: number, configuration: io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration);
						/** @deprecated */
						public create(): io.sentry.android.core.SentryUserFeedbackDialog;
						/** @deprecated */
						public constructor(context: globalAndroid.content.Context, themeResId: number, configuration: io.sentry.android.core.SentryUserFeedbackDialog.OptionsConfiguration);
						public constructor(context: globalAndroid.content.Context, themeResId: number);
						public constructor(context: globalAndroid.content.Context, configuration: io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration);
						/** @deprecated */
						public constructor(context: globalAndroid.content.Context, themeResId: number);
						/** @deprecated */
						public configurator(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): io.sentry.android.core.SentryUserFeedbackDialog.Builder;
					}
					export class OptionsConfiguration extends io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration {
						public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackDialog.OptionsConfiguration>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.SentryUserFeedbackDialog$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							configure(param0: globalAndroid.content.Context, param1: io.sentry.SentryFeedbackOptions): void;
						});
						public constructor();
						public configure(param0: globalAndroid.content.Context, param1: io.sentry.SentryFeedbackOptions): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryUserFeedbackForm {
					public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackForm>;
					public onStart(): void;
					public show(): void;
					public onCreate(this_: globalAndroid.os.Bundle): void;
					public setCancelable(cancelable: boolean): void;
					public setOnDismissListener(listener: globalAndroid.content.DialogInterface.OnDismissListener): void;
				}
				export module SentryUserFeedbackForm {
					export class Builder {
						public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackForm.Builder>;
						public create(): io.sentry.android.core.SentryUserFeedbackForm;
						public constructor(context: globalAndroid.content.Context, themeResId: number, configuration: io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration);
						public associatedEventId(associatedEventId: io.sentry.protocol.SentryId): io.sentry.android.core.SentryUserFeedbackForm.Builder;
						public constructor(context: globalAndroid.content.Context, themeResId: number);
						public constructor(context: globalAndroid.content.Context, configuration: io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration);
						public constructor(context: globalAndroid.content.Context);
						public configurator(configurator: io.sentry.SentryFeedbackOptions.OptionsConfigurator): io.sentry.android.core.SentryUserFeedbackForm.Builder;
					}
					export class OptionsConfiguration {
						public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackForm.OptionsConfiguration>;
						/**
						 * Constructs a new instance of the io.sentry.android.core.SentryUserFeedbackForm$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							configure(param0: globalAndroid.content.Context, param1: io.sentry.SentryFeedbackOptions): void;
						});
						public constructor();
						public configure(param0: globalAndroid.content.Context, param1: io.sentry.SentryFeedbackOptions): void;
					}
					export class ShakeLifecycleCallbacks {
						public static class: java.lang.Class<io.sentry.android.core.SentryUserFeedbackForm.ShakeLifecycleCallbacks>;
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
						public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
						public onActivityStarted(activity: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SpanFrameMetricsCollector implements io.sentry.IPerformanceContinuousCollector, io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener {
					public static class: java.lang.Class<io.sentry.android.core.SpanFrameMetricsCollector>;
					public lock: io.sentry.util.AutoClosableReentrantLock;
					public onSpanFinished(oldestSpan: io.sentry.ISpan): void;
					public onFrameMetricCollected(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean, param6: number): void;
					public clear(): void;
					public onSpanStarted(this_: io.sentry.ISpan): void;
					public onSpanFinished(param0: io.sentry.ISpan): void;
					public onFrameMetricCollected(frameStartNanos: number, frameEndNanos: number, durationNanos: number, delayNanos: number, isSlow: boolean, isFrozen: boolean, refreshRate: number): void;
					public onSpanStarted(param0: io.sentry.ISpan): void;
					public constructor(options: io.sentry.android.core.SentryAndroidOptions, frameMetricsCollector: io.sentry.android.core.internal.util.SentryFrameMetricsCollector);
				}
				export module SpanFrameMetricsCollector {
					export class Frame extends java.lang.Comparable<io.sentry.android.core.SpanFrameMetricsCollector.Frame> {
						public static class: java.lang.Class<io.sentry.android.core.SpanFrameMetricsCollector.Frame>;
						public compareTo(o: io.sentry.android.core.SpanFrameMetricsCollector.Frame): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SystemEventsBreadcrumbsIntegration implements io.sentry.Integration, io.sentry.android.core.AppState.AppStateListener {
					public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration>;
					public static getDefaultActions(): java.util.List<string>;
					public onForeground(): void;
					public constructor(context: globalAndroid.content.Context, handler: globalAndroid.os.Handler);
					public onBackground(): void;
					public constructor(context: globalAndroid.content.Context, actions: java.util.List<string>);
					public close(): void;
					public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
					public constructor(context: globalAndroid.content.Context);
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module SystemEventsBreadcrumbsIntegration {
					export class BatteryState {
						public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.BatteryState>;
						public equals(other: any): boolean;
						public hashCode(): number;
					}
					export class SystemEventsBroadcastReceiver {
						public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.SystemEventsBroadcastReceiver>;
						public onReceive(currentBatteryLevel: globalAndroid.content.Context, currentChargingState: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class TombstoneIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.TombstoneIntegration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public close(): void;
					public constructor(context: globalAndroid.content.Context);
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
				}
				export module TombstoneIntegration {
					export class TombstoneHint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.Backfillable, io.sentry.hints.NativeCrashExit {
						public static class: java.lang.Class<io.sentry.android.core.TombstoneIntegration.TombstoneHint>;
						public shouldEnrich(): boolean;
						public setFlushable(eventId: io.sentry.protocol.SentryId): void;
						public setFlushable(param0: io.sentry.protocol.SentryId): void;
						public waitFlush(): boolean;
						public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger);
						public timestamp(): java.lang.Long;
						public markFlushed(): void;
						public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
						public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger, tombstoneTimestamp: number, shouldEnrich: boolean);
						public isFlushable(eventId: io.sentry.protocol.SentryId): boolean;
					}
					export class TombstonePolicy extends io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.ApplicationExitInfoPolicy {
						public static class: java.lang.Class<io.sentry.android.core.TombstoneIntegration.TombstonePolicy>;
						public getLastReportedTimestamp(): java.lang.Long;
						public buildReport(parser: globalAndroid.app.ApplicationExitInfo, parserInput: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						public getLabel(): string;
						public buildReport(param0: globalAndroid.app.ApplicationExitInfo, param1: boolean): io.sentry.android.core.ApplicationExitInfoHistoryDispatcher.Report;
						public constructor(options: io.sentry.android.core.SentryAndroidOptions, context: globalAndroid.content.Context);
						public shouldReportHistorical(): boolean;
						public getTargetReason(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class UserInteractionIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.core.UserInteractionIntegration>;
					public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
					public close(): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public constructor(application: globalAndroid.app.Application, classLoader: io.sentry.util.LoadClass);
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onActivityPaused(activity: globalAndroid.app.Activity): void;
					public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
					public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ViewHierarchyEventProcessor extends io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.ViewHierarchyEventProcessor>;
					public process(event: io.sentry.SentryLogEvent): io.sentry.SentryLogEvent;
					public static snapshotViewHierarchy(view: globalAndroid.view.View): io.sentry.protocol.ViewHierarchy;
					public getOrder(): java.lang.Long;
					public process(event: io.sentry.SentryMetricsEvent, hint: io.sentry.Hint): io.sentry.SentryMetricsEvent;
					public constructor(options: io.sentry.android.core.SentryAndroidOptions);
					public static snapshotViewHierarchy(activity: globalAndroid.app.Activity, logger: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
					public static snapshotViewHierarchy(view: globalAndroid.view.View, exporters: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): io.sentry.protocol.ViewHierarchy;
					public process(event: io.sentry.SentryReplayEvent, hint: io.sentry.Hint): io.sentry.SentryReplayEvent;
					public static snapshotViewHierarchyAsData(activity: globalAndroid.app.Activity, threadChecker: io.sentry.util.thread.IThreadChecker, serializer: io.sentry.ISerializer, logger: io.sentry.ILogger): androidNative.Array<number>;
					public static snapshotViewHierarchy(latch: globalAndroid.app.Activity, viewHierarchy: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>, t: io.sentry.util.thread.IThreadChecker, activity: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
					public process(event: io.sentry.SentryEvent, hint: io.sentry.Hint): io.sentry.SentryEvent;
					public process(transaction: io.sentry.protocol.SentryTransaction, hint: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AggregatedStackTrace {
						public static class: java.lang.Class<io.sentry.android.core.anr.AggregatedStackTrace>;
						public addOccurrence(timestampMs: number): void;
						public constructor(stack: androidNative.Array<java.lang.StackTraceElement>, stackStartIdx: number, stackEndIdx: number, timestampMs: number, quality: number);
						public getStack(): androidNative.Array<java.lang.StackTraceElement>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrCulpritIdentifier {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrCulpritIdentifier>;
						public static identify(topMostClassName: java.util.List<io.sentry.android.core.anr.AnrStackTrace>): io.sentry.android.core.anr.AggregatedStackTrace;
						public static isSystemFrame(systemPackage: string): boolean;
						public constructor();
					}
					export module AnrCulpritIdentifier {
						export class StackTraceKey {
							public static class: java.lang.Class<io.sentry.android.core.anr.AnrCulpritIdentifier.StackTraceKey>;
							public hashCode(): number;
							public equals(this_: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrProfile {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrProfile>;
						public stacks: java.util.List<io.sentry.android.core.anr.AnrStackTrace>;
						public startTimeMs: number;
						public endTimeMs: number;
						public constructor(this_: java.util.List<io.sentry.android.core.anr.AnrStackTrace>);
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrProfileManager {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrProfileManager>;
						public constructor(options: io.sentry.SentryOptions);
						public close(): void;
						public add(trace: io.sentry.android.core.anr.AnrStackTrace): void;
						public constructor(e: io.sentry.SentryOptions, this_: java.io.File);
						public clear(): void;
						public load(): io.sentry.android.core.anr.AnrProfile;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrProfileRotationHelper {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrProfileRotationHelper>;
						public constructor();
						public static getFileForRecording(cacheDir: java.io.File): java.io.File;
						public static deleteLastFile(cacheDir: java.io.File): boolean;
						public static getLastFile(cacheDir: java.io.File): java.io.File;
						public static rotate(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrProfilingIntegration implements io.sentry.Integration, io.sentry.android.core.AppState.AppStateListener {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrProfilingIntegration>;
						public static POLLING_INTERVAL_MS: number = 66;
						public static THRESHOLD_ANR_MS: number = 4000;
						public constructor();
						public run(): void;
						public close(): void;
						public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
						public onForeground(): void;
						public getState(): io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState;
						public onBackground(): void;
						public checkMainThread(sampleRate: java.lang.Thread): void;
						public register(this_: io.sentry.IScopes, scopes: io.sentry.SentryOptions): void;
						public getProfileManager(): io.sentry.android.core.anr.AnrProfileManager;
					}
					export module AnrProfilingIntegration {
						export class MainThreadState {
							public static class: java.lang.Class<io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState>;
							public static IDLE: io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState;
							public static SUSPICIOUS: io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState;
							public static ANR_DETECTED: io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState;
							public static valueOf(name: string): io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState;
							public static values(): androidNative.Array<io.sentry.android.core.anr.AnrProfilingIntegration.MainThreadState>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class AnrStackTrace extends java.lang.Comparable<io.sentry.android.core.anr.AnrStackTrace> {
						public static class: java.lang.Class<io.sentry.android.core.anr.AnrStackTrace>;
						public stack: androidNative.Array<java.lang.StackTraceElement>;
						public timestampMs: number;
						public static deserialize(className: java.io.DataInputStream): io.sentry.android.core.anr.AnrStackTrace;
						public constructor(timestampMs: number, stack: androidNative.Array<java.lang.StackTraceElement>);
						public serialize(element: java.io.DataOutputStream): void;
						public compareTo(o: io.sentry.android.core.anr.AnrStackTrace): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module anr {
					export class StackTraceConverter {
						public static class: java.lang.Class<io.sentry.android.core.anr.StackTraceConverter>;
						public static convert(frameSignature: io.sentry.android.core.anr.AnrProfile): io.sentry.protocol.profiling.SentryProfile;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module cache {
					export class AndroidEnvelopeCache extends io.sentry.cache.EnvelopeCache {
						public static class: java.lang.Class<io.sentry.android.core.cache.AndroidEnvelopeCache>;
						public static LAST_ANR_REPORT: string = "last_anr_report";
						public static LAST_TOMBSTONE_REPORT: string = "last_tombstone_report";
						public static LAST_TOMBSTONE_MARKER_LABEL: string = "Tombstone";
						public static LAST_ANR_MARKER_LABEL: string = "ANR";
						public constructor(options: io.sentry.android.core.SentryAndroidOptions);
						public static lastReportedTombstone(options: io.sentry.SentryOptions): java.lang.Long;
						public static hasStartupCrashMarker(exists: io.sentry.SentryOptions): boolean;
						/** @deprecated */
						public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
						public discard(param0: io.sentry.SentryEnvelope): void;
						public store(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): void;
						public getDirectory(): java.io.File;
						public static lastReportedAnr(options: io.sentry.SentryOptions): java.lang.Long;
						/** @deprecated */
						public store(envelope: io.sentry.SentryEnvelope): void;
						public storeEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): boolean;
						public constructor(options: io.sentry.SentryOptions, cacheDirPath: string, maxCacheItems: number);
					}
					export module AndroidEnvelopeCache {
						export class TimestampMarkerHandler<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.cache.AndroidEnvelopeCache.TimestampMarkerHandler<any>>;
						}
						export module TimestampMarkerHandler {
							export class TimestampExtractor<T>  extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.android.core.cache.AndroidEnvelopeCache.TimestampMarkerHandler.TimestampExtractor<any>>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.cache.AndroidEnvelopeCache$TimestampMarkerHandler$TimestampExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									extract(param0: T): java.lang.Long;
								});
								public constructor();
								public extract(param0: T): java.lang.Long;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module debugmeta {
						export class AssetsDebugMetaLoader extends io.sentry.internal.debugmeta.IDebugMetaLoader {
							public static class: java.lang.Class<io.sentry.android.core.internal.debugmeta.AssetsDebugMetaLoader>;
							public constructor(context: globalAndroid.content.Context, logger: io.sentry.ILogger);
							public loadDebugMeta(): java.util.List<java.util.Properties>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class AndroidViewGestureTargetLocator extends io.sentry.internal.gestures.GestureTargetLocator {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.AndroidViewGestureTargetLocator>;
							public locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
							public constructor(isAndroidXAvailable: io.sentry.util.LazyEvaluator<java.lang.Boolean>);
							public locate(root: any, x: number, y: number, targetType: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class NoOpWindowCallback {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.NoOpWindowCallback>;
							public constructor();
							public dispatchPopulateAccessibilityEvent(accessibilityEvent: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onCreatePanelMenu(i: number, menu: globalAndroid.view.Menu): boolean;
							public onDetachedFromWindow(): void;
							public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, i: number): globalAndroid.view.ActionMode;
							public dispatchKeyShortcutEvent(keyEvent: globalAndroid.view.KeyEvent): boolean;
							public onPanelClosed(i: number, menu: globalAndroid.view.Menu): void;
							public onPreparePanel(i: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
							public onActionModeStarted(actionMode: globalAndroid.view.ActionMode): void;
							public onContentChanged(): void;
							public onWindowAttributesChanged(layoutParams: globalAndroid.view.WindowManager.LayoutParams): void;
							public dispatchKeyEvent(keyEvent: globalAndroid.view.KeyEvent): boolean;
							public dispatchTrackballEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onActionModeFinished(actionMode: globalAndroid.view.ActionMode): void;
							public onSearchRequested(searchEvent: any): boolean;
							public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public dispatchGenericMotionEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public dispatchTouchEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onWindowFocusChanged(b: boolean): void;
							public onAttachedToWindow(): void;
							public onMenuOpened(i: number, menu: globalAndroid.view.Menu): boolean;
							public onCreatePanelView(i: number): globalAndroid.view.View;
							public onMenuItemSelected(i: number, menuItem: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class SentryGestureDetector {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureDetector>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class SentryGestureListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener>;
							public onUp(motionEvent: globalAndroid.view.MotionEvent): void;
							public constructor(currentActivity: globalAndroid.app.Activity, scopes: io.sentry.IScopes, options: io.sentry.android.core.SentryAndroidOptions);
							public onSingleTapUp(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onScroll(this_: globalAndroid.view.MotionEvent, firstEvent: globalAndroid.view.MotionEvent, currentEvent: number, distX: number): boolean;
							public onFling(motionEvent: globalAndroid.view.MotionEvent, motionEvent1: globalAndroid.view.MotionEvent, v: number, v1: number): boolean;
							public onLongPress(motionEvent: globalAndroid.view.MotionEvent): void;
							public onDown(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onShowPress(motionEvent: globalAndroid.view.MotionEvent): void;
						}
						export module SentryGestureListener {
							export class GestureType {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType>;
								public static Click: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Scroll: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Swipe: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Unknown: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static valueOf(name: string): io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static values(): androidNative.Array<io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType>;
							}
							export class ScrollState {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener.ScrollState>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class SentryWindowCallback extends io.sentry.android.core.internal.gestures.WindowCallbackAdapter {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback>;
							public constructor(delegate: globalAndroid.view.Window.Callback, context: globalAndroid.content.Context, gestureListener: io.sentry.android.core.internal.gestures.SentryGestureListener, options: io.sentry.SentryOptions);
							public getDelegate(): globalAndroid.view.Window.Callback;
							public constructor(delegate: globalAndroid.view.Window.Callback);
							public stopTracking(): void;
							public dispatchTouchEvent(copy: globalAndroid.view.MotionEvent): boolean;
						}
						export module SentryWindowCallback {
							export class MotionEventObtainer {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback.MotionEventObtainer>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.gestures.SentryWindowCallback$MotionEventObtainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									obtain(origin: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent;
								});
								public constructor();
								public obtain(origin: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class ViewUtils {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewUtils>;
							public constructor();
							public static getResourceIdOrNull(e: globalAndroid.view.View): string;
						}
						export module ViewUtils {
							export class ViewWithLocation {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewUtils.ViewWithLocation>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class WindowCallbackAdapter {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.WindowCallbackAdapter>;
							public dispatchPopulateAccessibilityEvent(accessibilityEvent: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onCreatePanelMenu(i: number, menu: globalAndroid.view.Menu): boolean;
							public onDetachedFromWindow(): void;
							public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback, i: number): globalAndroid.view.ActionMode;
							public dispatchKeyShortcutEvent(keyEvent: globalAndroid.view.KeyEvent): boolean;
							public onPanelClosed(i: number, menu: globalAndroid.view.Menu): void;
							public constructor(delegate: globalAndroid.view.Window.Callback);
							public onPreparePanel(i: number, view: globalAndroid.view.View, menu: globalAndroid.view.Menu): boolean;
							public onActionModeStarted(actionMode: globalAndroid.view.ActionMode): void;
							public onContentChanged(): void;
							public onWindowAttributesChanged(layoutParams: globalAndroid.view.WindowManager.LayoutParams): void;
							public dispatchKeyEvent(keyEvent: globalAndroid.view.KeyEvent): boolean;
							public dispatchTrackballEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onActionModeFinished(actionMode: globalAndroid.view.ActionMode): void;
							public onSearchRequested(searchEvent: any): boolean;
							public onWindowStartingActionMode(callback: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public dispatchGenericMotionEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public dispatchTouchEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
							public onWindowFocusChanged(b: boolean): void;
							public onAttachedToWindow(): void;
							public onMenuOpened(i: number, menu: globalAndroid.view.Menu): boolean;
							public onCreatePanelView(i: number): globalAndroid.view.View;
							public onMenuItemSelected(i: number, menuItem: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module modules {
						export class AssetsModulesLoader extends io.sentry.internal.modules.ModulesLoader {
							public static class: java.lang.Class<io.sentry.android.core.internal.modules.AssetsModulesLoader>;
							public constructor(this_: globalAndroid.content.Context, context: io.sentry.SentryOptions);
							public loadModules(): java.util.Map<string,string>;
							public constructor(logger: io.sentry.ILogger);
							public getOrLoadModules(): java.util.Map<string,string>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module threaddump {
						export class ArtContextParser {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.ArtContextParser>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module threaddump {
						export class Line {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Line>;
							public lineno: number;
							public text: string;
							public constructor(lineno: number, text: string);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module threaddump {
						export class Lines {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Lines>;
							public pos: number;
							public static readLines(in_: java.io.BufferedReader): io.sentry.android.core.internal.threaddump.Lines;
							public hasNext(): boolean;
							public rewind(): void;
							public constructor(list: java.util.ArrayList<any>);
							public static readLines(reader: java.io.File): io.sentry.android.core.internal.threaddump.Lines;
							public next(): io.sentry.android.core.internal.threaddump.Line;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module threaddump {
						export class ThreadDumpParser {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.ThreadDumpParser>;
							public getDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
							public constructor(options: io.sentry.SentryOptions, isBackground: boolean);
							public getArtContext(): io.sentry.protocol.ArtContext;
							public parse(line: io.sentry.android.core.internal.threaddump.Lines): void;
							public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module tombstone {
						export class NativeExceptionMechanism {
							public static class: java.lang.Class<io.sentry.android.core.internal.tombstone.NativeExceptionMechanism>;
							public static TOMBSTONE: io.sentry.android.core.internal.tombstone.NativeExceptionMechanism;
							public static SIGNAL_HANDLER: io.sentry.android.core.internal.tombstone.NativeExceptionMechanism;
							public static TOMBSTONE_MERGED: io.sentry.android.core.internal.tombstone.NativeExceptionMechanism;
							public static values(): androidNative.Array<io.sentry.android.core.internal.tombstone.NativeExceptionMechanism>;
							public getValue(): string;
							public static valueOf(name: string): io.sentry.android.core.internal.tombstone.NativeExceptionMechanism;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module tombstone {
						export class TombstoneParser {
							public static class: java.lang.Class<io.sentry.android.core.internal.tombstone.TombstoneParser>;
							public constructor(inAppIncludes: java.util.List<string>, inAppExcludes: java.util.List<string>, nativeLibraryDir: string);
							public close(): void;
							public parse(): io.sentry.SentryEvent;
							public parse(tombstone: com.abovevacant.epitaph.core.Tombstone): io.sentry.SentryEvent;
							public constructor(tombstoneStream: java.io.InputStream, inAppIncludes: java.util.List<string>, inAppExcludes: java.util.List<string>, nativeLibraryDir: string);
						}
						export module TombstoneParser {
							export class ModuleAccumulator {
								public static class: java.lang.Class<io.sentry.android.core.internal.tombstone.TombstoneParser.ModuleAccumulator>;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class AndroidConnectionStatusProvider implements io.sentry.IConnectionStatusProvider, io.sentry.android.core.AppState.AppStateListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidConnectionStatusProvider>;
							public static getChildCallbacks(): java.util.List<globalAndroid.net.ConnectivityManager.NetworkCallback>;
							public close(): void;
							public getConnectionType(): string;
							public getNetworkCallback(): globalAndroid.net.ConnectivityManager.NetworkCallback;
							public addConnectionStatusObserver(this_: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
							public static removeNetworkCallback(ignored: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
							public removeConnectionStatusObserver(this_: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
							public onBackground(): void;
							public static addNetworkCallback(ignored: globalAndroid.content.Context, context: io.sentry.ILogger, logger: io.sentry.android.core.BuildInfoProvider, buildInfoProvider: globalAndroid.net.ConnectivityManager.NetworkCallback): boolean;
							public static getConnectionType(networkCapabilities: globalAndroid.net.NetworkCapabilities): string;
							public getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
							public static getConnectionType(activeNetwork: globalAndroid.content.Context, networkCapabilities: io.sentry.ILogger, activeNetworkInfo: io.sentry.android.core.BuildInfoProvider): string;
							public getStatusObservers(): java.util.List<io.sentry.IConnectionStatusProvider.IConnectionStatusObserver>;
							public constructor(context: globalAndroid.content.Context, options: io.sentry.SentryOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, timeProvider: io.sentry.transport.ICurrentDateProvider);
							public constructor(context: globalAndroid.content.Context, options: io.sentry.SentryOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, timeProvider: io.sentry.transport.ICurrentDateProvider, handler: globalAndroid.os.Handler);
							public addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
							public removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
							public getCachedNetworkCapabilities(): globalAndroid.net.NetworkCapabilities;
							public onForeground(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class AndroidCurrentDateProvider extends io.sentry.transport.ICurrentDateProvider {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidCurrentDateProvider>;
							public static getInstance(): io.sentry.transport.ICurrentDateProvider;
							public getCurrentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class AndroidThreadChecker extends io.sentry.util.thread.IThreadChecker {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidThreadChecker>;
							public static mainThreadSystemId: number;
							public static getThreadId(thread: java.lang.Thread): number;
							public isMainThread(param0: number): boolean;
							public static getInstance(): io.sentry.android.core.internal.util.AndroidThreadChecker;
							public getCurrentThreadName(): string;
							public isMainThread(thread: java.lang.Thread): boolean;
							public isMainThread(sentryThread: io.sentry.protocol.SentryThread): boolean;
							public isMainThread(threadId: number): boolean;
							public isMainThread(param0: java.lang.Thread): boolean;
							public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
							public isMainThread(): boolean;
							public currentThreadSystemId(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class BreadcrumbFactory {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.BreadcrumbFactory>;
							public constructor();
							public static forSession(state: string): io.sentry.Breadcrumb;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class ClassUtil {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ClassUtil>;
							public constructor();
							public static getClassName(object: any): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class ContentProviderSecurityChecker {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ContentProviderSecurityChecker>;
							public constructor();
							public constructor(buildInfoProvider: io.sentry.android.core.BuildInfoProvider);
							public checkPrivilegeEscalation(appPackage: globalAndroid.content.ContentProvider): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class CpuInfoUtils {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.CpuInfoUtils>;
							public static getInstance(): io.sentry.android.core.internal.util.CpuInfoUtils;
							public readMaxFrequencies(): java.util.List<java.lang.Integer>;
							public setCpuMaxFrequencies(this_: java.util.List<java.lang.Integer>): void;
							public clear(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class Debouncer {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.Debouncer>;
							public constructor(timeProvider: io.sentry.transport.ICurrentDateProvider, waitTimeMs: number, maxExecutions: number);
							public checkForDebounce(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class DeviceOrientations {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.DeviceOrientations>;
							public static getOrientation(orientation: number): io.sentry.protocol.Device.DeviceOrientation;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class FirstDrawDoneListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.FirstDrawDoneListener>;
							public static registerForNextDraw(view: globalAndroid.view.View, drawDoneCallback: java.lang.Runnable, buildInfoProvider: io.sentry.android.core.BuildInfoProvider): void;
							public static registerForNextDraw(oldCallback: globalAndroid.app.Activity, decorView: java.lang.Runnable, activity: io.sentry.android.core.BuildInfoProvider): void;
							public onDraw(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class NativeEventUtils {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.NativeEventUtils>;
							public constructor();
							public static readBytes(nRead: java.io.InputStream): androidNative.Array<number>;
							public static buildIdToDebugId(buf: string): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class Permissions {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.Permissions>;
							public static hasPermission(context: globalAndroid.content.Context, permission: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class RootChecker {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.RootChecker>;
							public isDeviceRooted(): boolean;
							public constructor(context: globalAndroid.content.Context, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, logger: io.sentry.ILogger);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class ScreenshotUtils {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ScreenshotUtils>;
							public constructor();
							public static takeScreenshot(activity: globalAndroid.app.Activity, threadChecker: io.sentry.util.thread.IThreadChecker, logger: io.sentry.ILogger, buildInfoProvider: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
							public static takeScreenshot(activity: globalAndroid.app.Activity, logger: io.sentry.ILogger, buildInfoProvider: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
							public static captureScreenshot(handler: globalAndroid.app.Activity, completed: io.sentry.util.thread.IThreadChecker, e: io.sentry.ILogger, thread: io.sentry.android.core.BuildInfoProvider): globalAndroid.graphics.Bitmap;
							public static compressBitmapToPng(byteArrayOutputStream: globalAndroid.graphics.Bitmap, e: io.sentry.ILogger): androidNative.Array<number>;
							public static captureScreenshot(activity: globalAndroid.app.Activity, logger: io.sentry.ILogger, buildInfoProvider: io.sentry.android.core.BuildInfoProvider): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class SentryFrameMetricsCollector {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector>;
							public constructor(context: globalAndroid.content.Context, options: io.sentry.SentryOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider);
							public onActivityPaused(activity: globalAndroid.app.Activity): void;
							public getLastKnownFrameStartTimeNanos(): number;
							public getFramesDelay(delayStart: number, delayEnd: number): io.sentry.android.core.SentryFramesDelayResult;
							public constructor(context: globalAndroid.content.Context, logger: io.sentry.ILogger, buildInfoProvider: io.sentry.android.core.BuildInfoProvider);
							public onActivityResumed(activity: globalAndroid.app.Activity): void;
							public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
							public stopCollection(listenerId: string): void;
							public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
							public constructor(context: globalAndroid.content.Context, logger: io.sentry.ILogger, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, windowFrameMetricsManager: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager);
							public constructor(context: globalAndroid.content.Context, options: io.sentry.SentryOptions, buildInfoProvider: io.sentry.android.core.BuildInfoProvider, windowFrameMetricsManager: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager);
							public static isSlow(frameDuration: number, expectedFrameDuration: number): boolean;
							public static isFrozen(frameDuration: number): boolean;
							public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
							public onActivityStopped(activity: globalAndroid.app.Activity): void;
							public onActivityStarted(activity: globalAndroid.app.Activity): void;
							public startCollection(listener: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener): string;
						}
						export module SentryFrameMetricsCollector {
							export class DelayedFrame extends java.lang.Comparable<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.DelayedFrame> {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.DelayedFrame>;
								public compareTo(o: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.DelayedFrame): number;
							}
							export class FrameMetricsCollectorListener {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$FrameMetricsCollectorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameMetricCollected(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean, param6: number): void;
								});
								public constructor();
								public onFrameMetricCollected(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean, param6: number): void;
							}
							export class WindowFrameMetricsManager {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$WindowFrameMetricsManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addOnFrameMetricsAvailableListener(window: globalAndroid.view.Window, frameMetricsAvailableListener: globalAndroid.view.Window.OnFrameMetricsAvailableListener, handler: globalAndroid.os.Handler): void;
									removeOnFrameMetricsAvailableListener(window: globalAndroid.view.Window, frameMetricsAvailableListener: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void;
								});
								public constructor();
								public removeOnFrameMetricsAvailableListener(window: globalAndroid.view.Window, frameMetricsAvailableListener: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void;
								public addOnFrameMetricsAvailableListener(window: globalAndroid.view.Window, frameMetricsAvailableListener: globalAndroid.view.Window.OnFrameMetricsAvailableListener, handler: globalAndroid.os.Handler): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class ActivityLifecycleCallbacksAdapter {
						public static class: java.lang.Class<io.sentry.android.core.performance.ActivityLifecycleCallbacksAdapter>;
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public constructor();
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
						public onActivityStarted(activity: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class ActivityLifecycleSpanHelper {
						public static class: java.lang.Class<io.sentry.android.core.performance.ActivityLifecycleSpanHelper>;
						public setOnStartStartTimestamp(onStartStartTimestamp: io.sentry.SentryDate): void;
						public createAndStopOnCreateSpan(parentSpan: io.sentry.ISpan): void;
						public setOnCreateStartTimestamp(onCreateStartTimestamp: io.sentry.SentryDate): void;
						public createAndStopOnStartSpan(parentSpan: io.sentry.ISpan): void;
						public saveSpanToAppStartMetrics(): void;
						public getOnCreateSpan(): io.sentry.ISpan;
						public getOnCreateStartTimestamp(): io.sentry.SentryDate;
						public clear(): void;
						public constructor(activityName: string);
						public getOnStartSpan(): io.sentry.ISpan;
						public getOnStartStartTimestamp(): io.sentry.SentryDate;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class ActivityLifecycleTimeSpan extends java.lang.Comparable<io.sentry.android.core.performance.ActivityLifecycleTimeSpan> {
						public static class: java.lang.Class<io.sentry.android.core.performance.ActivityLifecycleTimeSpan>;
						public compareTo(o: io.sentry.android.core.performance.ActivityLifecycleTimeSpan): number;
						public constructor();
						public getOnCreate(): io.sentry.android.core.performance.TimeSpan;
						public getOnStart(): io.sentry.android.core.performance.TimeSpan;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class AppStartMetrics extends io.sentry.android.core.performance.ActivityLifecycleCallbacksAdapter {
						public static class: java.lang.Class<io.sentry.android.core.performance.AppStartMetrics>;
						public static staticLock: io.sentry.util.AutoClosableReentrantLock;
						public getAppStartTimeSpanWithFallback(sdkInitTimeSpan: io.sentry.android.core.SentryAndroidOptions): io.sentry.android.core.performance.TimeSpan;
						public static onContentProviderCreate(contentProvider: globalAndroid.content.ContentProvider): void;
						public getAppStartProfiler(): io.sentry.ITransactionProfiler;
						public setAppStartSentryTraceHeader(appStartSentryTraceHeader: string): void;
						public setAppStartSamplingDecision(appStartSamplingDecision: io.sentry.TracesSamplingDecision): void;
						public onActivityStarted(activity: globalAndroid.app.Activity): void;
						public registerLifecycleCallbacks(historicalProcessStartReasons: globalAndroid.app.Application): void;
						public setAppStartProfiler(appStartProfiler: io.sentry.ITransactionProfiler): void;
						public setAppStartContinuousProfiler(appStartContinuousProfiler: io.sentry.IContinuousProfiler): void;
						public getAppStartType(): io.sentry.android.core.performance.AppStartMetrics.AppStartType;
						public shouldSendStartMeasurements(ignoreForegroundCheck: boolean): boolean;
						public setAppStartTraceId(traceId: io.sentry.protocol.SentryId): void;
						public getAppStartBaggageHeader(): string;
						public onActivityResumed(activity: globalAndroid.app.Activity): void;
						public constructor();
						public getAppStartTraceId(): io.sentry.protocol.SentryId;
						public getActivityLifecycleTimeSpans(): java.util.List<io.sentry.android.core.performance.ActivityLifecycleTimeSpan>;
						public static onContentProviderPostCreate(contentProvider: globalAndroid.content.ContentProvider): void;
						public onActivityPaused(activity: globalAndroid.app.Activity): void;
						public getApplicationOnCreateTimeSpan(): io.sentry.android.core.performance.TimeSpan;
						public onAppStartSpansSent(): void;
						public setAppStartBaggageHeader(appStartBaggageHeader: string): void;
						public static onApplicationPostCreate(application: globalAndroid.app.Application): void;
						public getAppStartExtension(): io.sentry.android.core.AppStartExtension;
						public clear(): void;
						public static onApplicationCreate(application: globalAndroid.app.Application): void;
						public isAppLaunchedInForeground(): boolean;
						public setAppStartEndTime(appStartEndTime: io.sentry.SentryDate): void;
						public canExtendAppStart(): boolean;
						public getAppStartContinuousProfiler(): io.sentry.IContinuousProfiler;
						public onActivityCreated(durationSinceAppStartMillis: globalAndroid.app.Activity, this_: globalAndroid.os.Bundle): void;
						public setAppStartType(appStartType: io.sentry.android.core.performance.AppStartMetrics.AppStartType): void;
						public createProcessInitSpan(): io.sentry.android.core.performance.TimeSpan;
						public static getInstance(): io.sentry.android.core.performance.AppStartMetrics;
						public getAppStartSamplingDecision(): io.sentry.TracesSamplingDecision;
						public getAppStartSentryTraceHeader(): string;
						public getAppStartEndTime(): io.sentry.SentryDate;
						public setClassLoadedUptimeMs(classLoadedUptimeMs: number): void;
						public setCachedStartInfo(cachedStartInfo: globalAndroid.app.ApplicationStartInfo): void;
						public onActivityStopped(activity: globalAndroid.app.Activity): void;
						public getSdkInitTimeSpan(): io.sentry.android.core.performance.TimeSpan;
						public getContentProviderOnCreateTimeSpans(): java.util.List<io.sentry.android.core.performance.TimeSpan>;
						public getAppStartReason(): string;
						public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
						public addActivityLifecycleTimeSpans(timeSpan: io.sentry.android.core.performance.ActivityLifecycleTimeSpan): void;
						public getAppStartTimeSpan(): io.sentry.android.core.performance.TimeSpan;
						public getAppStartTimeSpanForHeadless(): io.sentry.android.core.performance.TimeSpan;
						public getClassLoadedUptimeMs(): number;
						public setHeadlessAppStartListener(listener: io.sentry.android.core.performance.AppStartMetrics.HeadlessAppStartListener): void;
						public setAppLaunchedInForeground(appLaunchedInForeground: boolean): void;
						public shouldSendStartMeasurements(): boolean;
					}
					export module AppStartMetrics {
						export class AppStartType {
							public static class: java.lang.Class<io.sentry.android.core.performance.AppStartMetrics.AppStartType>;
							public static UNKNOWN: io.sentry.android.core.performance.AppStartMetrics.AppStartType;
							public static COLD: io.sentry.android.core.performance.AppStartMetrics.AppStartType;
							public static WARM: io.sentry.android.core.performance.AppStartMetrics.AppStartType;
							public static valueOf(name: string): io.sentry.android.core.performance.AppStartMetrics.AppStartType;
							public static values(): androidNative.Array<io.sentry.android.core.performance.AppStartMetrics.AppStartType>;
						}
						export class HeadlessAppStartListener {
							public static class: java.lang.Class<io.sentry.android.core.performance.AppStartMetrics.HeadlessAppStartListener>;
							/**
							 * Constructs a new instance of the io.sentry.android.core.performance.AppStartMetrics$HeadlessAppStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onHeadlessAppStart(): void;
							});
							public constructor();
							public onHeadlessAppStart(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class TimeSpan extends java.lang.Comparable<io.sentry.android.core.performance.TimeSpan> {
						public static class: java.lang.Class<io.sentry.android.core.performance.TimeSpan>;
						public getStartTimestampMs(): number;
						public constructor();
						public setDescription(description: string): void;
						public hasStarted(): boolean;
						public stop(): void;
						public setStoppedAt(uptimeMs: number): void;
						public getStartTimestampSecs(): number;
						public getStartUptimeMs(): number;
						public getProjectedStopTimestampSecs(): number;
						public setup(description: string, startUnixTimeMs: number, startUptimeMs: number, stopUptimeMs: number): void;
						public getDurationMs(): number;
						public compareTo(o: io.sentry.android.core.performance.TimeSpan): number;
						public setStartedAt(uptimeMs: number): void;
						public hasStopped(): boolean;
						public getProjectedStopTimestampMs(): number;
						public setStartUnixTimeMs(startUnixTimeMs: number): void;
						public start(): void;
						public hasNotStopped(): boolean;
						public getStartTimestamp(): io.sentry.SentryDate;
						public getDescription(): string;
						public hasNotStarted(): boolean;
						public getProjectedStopTimestamp(): io.sentry.SentryDate;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module performance {
					export class WindowContentChangedCallback extends io.sentry.android.core.internal.gestures.WindowCallbackAdapter {
						public static class: java.lang.Class<io.sentry.android.core.performance.WindowContentChangedCallback>;
						public constructor(delegate: globalAndroid.view.Window.Callback, callback: java.lang.Runnable);
						public constructor(delegate: globalAndroid.view.Window.Callback);
						public onContentChanged(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module util {
					export class AndroidLazyEvaluator<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.util.AndroidLazyEvaluator<any>>;
						public constructor(evaluator: io.sentry.android.core.util.AndroidLazyEvaluator.AndroidEvaluator<T>);
						public setValue(value: T): void;
						public resetValue(): void;
						public getValue(context: globalAndroid.content.Context): T;
					}
					export module AndroidLazyEvaluator {
						export class AndroidEvaluator<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.util.AndroidLazyEvaluator.AndroidEvaluator<any>>;
							/**
							 * Constructs a new instance of the io.sentry.android.core.util.AndroidLazyEvaluator$AndroidEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								evaluate(param0: globalAndroid.content.Context): T;
							});
							public constructor();
							public evaluate(param0: globalAndroid.content.Context): T;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module fragment {
				export class BuildConfig {
					public static class: java.lang.Class<io.sentry.android.fragment.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = "io.sentry.android.fragment";
					public static BUILD_TYPE: string = "release";
					public static VERSION_NAME: string = "8.52.0";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module fragment {
				export class FragmentLifecycleIntegration extends io.sentry.Integration {
					public static class: java.lang.Class<io.sentry.android.fragment.FragmentLifecycleIntegration>;
					public constructor(it: globalAndroid.app.Application, this_: boolean, application: boolean);
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public register(param0: io.sentry.IScopes, param1: io.sentry.SentryOptions): void;
					public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
					public constructor(application: globalAndroid.app.Application);
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
					public constructor(application: globalAndroid.app.Application, filterFragmentLifecycleBreadcrumbs: java.util.Set<any>, enableAutoFragmentLifecycleTracing: boolean);
					public close(): void;
					public register(scopes: io.sentry.IScopes, options: io.sentry.SentryOptions): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public onActivityPaused(activity: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
					public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				}
				export module FragmentLifecycleIntegration {
					export class Companion {
						public static class: java.lang.Class<io.sentry.android.fragment.FragmentLifecycleIntegration.Companion>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module fragment {
				export class FragmentLifecycleState {
					public static class: java.lang.Class<io.sentry.android.fragment.FragmentLifecycleState>;
					public static ATTACHED: io.sentry.android.fragment.FragmentLifecycleState;
					public static SAVE_INSTANCE_STATE: io.sentry.android.fragment.FragmentLifecycleState;
					public static CREATED: io.sentry.android.fragment.FragmentLifecycleState;
					public static VIEW_CREATED: io.sentry.android.fragment.FragmentLifecycleState;
					public static STARTED: io.sentry.android.fragment.FragmentLifecycleState;
					public static RESUMED: io.sentry.android.fragment.FragmentLifecycleState;
					public static PAUSED: io.sentry.android.fragment.FragmentLifecycleState;
					public static STOPPED: io.sentry.android.fragment.FragmentLifecycleState;
					public static VIEW_DESTROYED: io.sentry.android.fragment.FragmentLifecycleState;
					public static DESTROYED: io.sentry.android.fragment.FragmentLifecycleState;
					public static DETACHED: io.sentry.android.fragment.FragmentLifecycleState;
					public getBreadcrumbName$sentry_android_fragment_release(): string;
					public static values(): androidNative.Array<io.sentry.android.fragment.FragmentLifecycleState>;
					public static valueOf(value: string): io.sentry.android.fragment.FragmentLifecycleState;
				}
				export module FragmentLifecycleState {
					export class Companion {
						public static class: java.lang.Class<io.sentry.android.fragment.FragmentLifecycleState.Companion>;
						public getStates(): java.util.Set<io.sentry.android.fragment.FragmentLifecycleState>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module fragment {
				export class SentryFragmentLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.fragment.SentryFragmentLifecycleCallbacks>;
					public static FRAGMENT_LOAD_OP: string = "ui.load";
					public constructor(it: boolean, this_: boolean);
					public getFilterFragmentLifecycleBreadcrumbs$sentry_android_fragment_release(): java.util.Set<io.sentry.android.fragment.FragmentLifecycleState>;
					public onFragmentSaveInstanceState(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment, outState: globalAndroid.os.Bundle): void;
					public onFragmentResumed(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public getEnableFragmentLifecycleBreadcrumbs(): boolean;
					public onFragmentCreated(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentViewDestroyed(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public onFragmentPaused(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public getEnableAutoFragmentLifecycleTracing$sentry_android_fragment_release(): boolean;
					public onFragmentStarted(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public constructor(scopes: io.sentry.IScopes, filterFragmentLifecycleBreadcrumbs: java.util.Set<any>, enableAutoFragmentLifecycleTracing: boolean);
					public onFragmentViewCreated(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment, view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
					public onFragmentDestroyed(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public onFragmentDetached(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public onFragmentStopped(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
					public constructor(it: io.sentry.IScopes, this_: boolean, scopes: boolean);
					public onFragmentAttached(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment, context: globalAndroid.content.Context): void;
				}
				export module SentryFragmentLifecycleCallbacks {
					export class Companion {
						public static class: java.lang.Class<io.sentry.android.fragment.SentryFragmentLifecycleCallbacks.Companion>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class BuildConfig {
					public static class: java.lang.Class<io.sentry.android.ndk.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = "io.sentry.android.ndk";
					public static BUILD_TYPE: string = "release";
					public static VERSION_NAME: string = "8.52.0";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class DebugImagesLoader extends io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.ndk.DebugImagesLoader>;
					public static debugImagesLock: io.sentry.util.AutoClosableReentrantLock;
					public loadDebugImagesForAddresses(param0: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
					public loadDebugImagesForAddresses(referencedImages: java.util.Set<string>): java.util.Set<io.sentry.protocol.DebugImage>;
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
					public constructor(options: io.sentry.android.core.SentryAndroidOptions, moduleListLoader: io.sentry.ndk.NativeModuleListLoader);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class NdkScopeObserver extends io.sentry.ScopeObserverAdapter {
					public static class: java.lang.Class<io.sentry.android.ndk.NdkScopeObserver>;
					public removeExtra(this_: string): void;
					public addAttachment(param0: io.sentry.Attachment): void;
					public setTag(this_: string, key: string): void;
					public setExtras(param0: java.util.Map<string,any>): void;
					public setUser(param0: io.sentry.protocol.User): void;
					public constructor(options: io.sentry.SentryOptions);
					public setTrace(this_: io.sentry.SpanContext, spanContext: io.sentry.IScope): void;
					public constructor();
					public setFingerprint(param0: java.util.Collection<string>): void;
					public setTag(param0: string, param1: string): void;
					public setExtra(this_: string, key: string): void;
					public setTransaction(param0: string): void;
					public setReplayId(param0: io.sentry.protocol.SentryId): void;
					public setTrace(param0: io.sentry.SpanContext, param1: io.sentry.IScope): void;
					public setLevel(param0: io.sentry.SentryLevel): void;
					public clearAttachments(): void;
					public addBreadcrumb(this_: io.sentry.Breadcrumb): void;
					public removeExtra(param0: string): void;
					public removeTag(param0: string): void;
					public setTags(param0: java.util.Map<string,string>): void;
					public setExtra(param0: string, param1: string): void;
					public setContexts(param0: io.sentry.protocol.Contexts): void;
					public removeTag(this_: string): void;
					public addAttachment(e: io.sentry.Attachment): void;
					public setRequest(param0: io.sentry.protocol.Request): void;
					public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
					public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
					public setUser(this_: io.sentry.protocol.User): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class SentryNdk {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdk>;
					public static init(ndkOptions: io.sentry.android.core.SentryAndroidOptions): void;
					public static close(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class SentryNdkUtil {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdkUtil>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module backpressure {
			export class BackpressureMonitor extends io.sentry.backpressure.IBackpressureMonitor {
				public static class: java.lang.Class<io.sentry.backpressure.BackpressureMonitor>;
				public constructor(sentryOptions: io.sentry.SentryOptions, scopes: io.sentry.IScopes);
				public close(): void;
				public run(): void;
				public start(): void;
				public getDownsampleFactor(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module backpressure {
			export class IBackpressureMonitor {
				public static class: java.lang.Class<io.sentry.backpressure.IBackpressureMonitor>;
				/**
				 * Constructs a new instance of the io.sentry.backpressure.IBackpressureMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					start(): void;
					getDownsampleFactor(): number;
					close(): void;
				});
				public constructor();
				public close(): void;
				public start(): void;
				public getDownsampleFactor(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module backpressure {
			export class NoOpBackpressureMonitor extends io.sentry.backpressure.IBackpressureMonitor {
				public static class: java.lang.Class<io.sentry.backpressure.NoOpBackpressureMonitor>;
				public close(): void;
				public static getInstance(): io.sentry.backpressure.NoOpBackpressureMonitor;
				public start(): void;
				public getDownsampleFactor(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export abstract class CacheStrategy {
				public static class: java.lang.Class<io.sentry.cache.CacheStrategy>;
				public static UTF_8: java.nio.charset.Charset;
				public options: io.sentry.SentryOptions;
				public serializer: io.sentry.util.LazyEvaluator<io.sentry.ISerializer>;
				public directory: io.sentry.util.LazyDirectory;
				public rotateCacheIfNeeded(i: androidNative.Array<java.io.File>): void;
				public isDirectoryValid(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class CacheUtils {
				public static class: java.lang.Class<io.sentry.cache.CacheUtils>;
				public static store(writer: io.sentry.SentryOptions, outputStream: any, e: string, options: string): void;
				public static read(reader: io.sentry.SentryOptions, e: string, options: string, dirName: java.lang.Class<any>, fileName: io.sentry.JsonDeserializer<any>): any;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class EnvelopeCache extends io.sentry.cache.CacheStrategy implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.cache.EnvelopeCache>;
				public static SUFFIX_ENVELOPE_FILE: string = ".envelope";
				public static PREFIX_CURRENT_SESSION_FILE: string = "session";
				public static PREFIX_PREVIOUS_SESSION_FILE: string = "previous_session";
				public static CRASH_MARKER_FILE: string = "last_crash";
				public static NATIVE_CRASH_MARKER_FILE: string = ".sentry-native/last_crash";
				public static STARTUP_CRASH_MARKER_FILE: string = "startup_crash";
				public cacheLock: io.sentry.util.AutoClosableReentrantLock;
				public sessionLock: io.sentry.util.AutoClosableReentrantLock;
				public store(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): void;
				public static getPreviousSessionFile(cacheDirPath: string): java.io.File;
				public static getCurrentSessionFile(cacheDirPath: string): java.io.File;
				/** @deprecated */
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
				public discard(envelope: io.sentry.SentryEnvelope): void;
				public constructor(options: io.sentry.SentryOptions, cacheDirPath: string, maxCacheItems: number);
				/** @deprecated */
				public store(envelope: io.sentry.SentryEnvelope): void;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public storeEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): boolean;
				public flushPreviousSession(): void;
				public static create(options: io.sentry.SentryOptions): io.sentry.cache.IEnvelopeCache;
				public waitPreviousSessionFlush(): boolean;
				public movePreviousSession(e: java.io.File, ignored: java.io.File): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class IEnvelopeCache extends java.lang.Iterable<io.sentry.SentryEnvelope> {
				public static class: java.lang.Class<io.sentry.cache.IEnvelopeCache>;
				/**
				 * Constructs a new instance of the io.sentry.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
					storeEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): boolean;
					store(envelope: io.sentry.SentryEnvelope): void;
					discard(param0: io.sentry.SentryEnvelope): void;
				});
				public constructor();
				/** @deprecated */
				public store(envelope: io.sentry.SentryEnvelope): void;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public storeEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): boolean;
				/** @deprecated */
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class PersistingOptionsObserver extends io.sentry.IOptionsObserver {
				public static class: java.lang.Class<io.sentry.cache.PersistingOptionsObserver>;
				public static OPTIONS_CACHE: string = ".options-cache";
				public static RELEASE_FILENAME: string = "release.json";
				public static PROGUARD_UUID_FILENAME: string = "proguard-uuid.json";
				public static SDK_VERSION_FILENAME: string = "sdk-version.json";
				public static ENVIRONMENT_FILENAME: string = "environment.json";
				public static DIST_FILENAME: string = "dist.json";
				public static TAGS_FILENAME: string = "tags.json";
				public static REPLAY_ERROR_SAMPLE_RATE_FILENAME: string = "replay-error-sample-rate.json";
				public setEnvironment(environment: string): void;
				public setDist(dist: string): void;
				public static read(options: io.sentry.SentryOptions, fileName: string, clazz: java.lang.Class<any>, elementDeserializer: io.sentry.JsonDeserializer<any>): any;
				public setSdkVersion(sdkVersion: io.sentry.protocol.SdkVersion): void;
				public setTags(param0: java.util.Map<string,string>): void;
				public setRelease(release: string): void;
				public setProguardUuid(proguardUuid: string): void;
				public setProguardUuid(param0: string): void;
				public setReplayErrorSampleRate(replayErrorSampleRate: java.lang.Double): void;
				public setDist(param0: string): void;
				public setTags(tags: java.util.Map<string,string>): void;
				public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
				public setEnvironment(param0: string): void;
				public setReplayErrorSampleRate(param0: java.lang.Double): void;
				public constructor(options: io.sentry.SentryOptions);
				public static read(options: io.sentry.SentryOptions, fileName: string, clazz: java.lang.Class<any>): any;
				public setRelease(param0: string): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export class PersistingScopeObserver extends io.sentry.ScopeObserverAdapter {
				public static class: java.lang.Class<io.sentry.cache.PersistingScopeObserver>;
				public static SCOPE_CACHE: string = ".scope-cache";
				public static USER_FILENAME: string = "user.json";
				public static BREADCRUMBS_FILENAME: string = "breadcrumbs.json";
				public static TAGS_FILENAME: string = "tags.json";
				public static EXTRAS_FILENAME: string = "extras.json";
				public static CONTEXTS_FILENAME: string = "contexts.json";
				public static REQUEST_FILENAME: string = "request.json";
				public static LEVEL_FILENAME: string = "level.json";
				public static FINGERPRINT_FILENAME: string = "fingerprint.json";
				public static TRANSACTION_FILENAME: string = "transaction.json";
				public static TRACE_FILENAME: string = "trace.json";
				public static REPLAY_FILENAME: string = "replay.json";
				public setExtras(param0: java.util.Map<string,any>): void;
				public clearAttachments(): void;
				public setUser(user: io.sentry.protocol.User): void;
				public setFingerprint(fingerprint: java.util.Collection<string>): void;
				public removeExtra(param0: string): void;
				public setReplayId(replayId: io.sentry.protocol.SentryId): void;
				public setTags(param0: java.util.Map<string,string>): void;
				public constructor();
				public setLevel(level: io.sentry.SentryLevel): void;
				public setContexts(param0: io.sentry.protocol.Contexts): void;
				public setExtra(param0: string, param1: string): void;
				public setUser(param0: io.sentry.protocol.User): void;
				public removeTag(param0: string): void;
				public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
				public addBreadcrumb(crumb: io.sentry.Breadcrumb): void;
				public setTags(tags: java.util.Map<string,string>): void;
				public setLevel(param0: io.sentry.SentryLevel): void;
				public setContexts(contexts: io.sentry.protocol.Contexts): void;
				public setExtras(extras: java.util.Map<string,any>): void;
				public constructor(options: io.sentry.SentryOptions);
				public setTag(param0: string, param1: string): void;
				public resetCache(): void;
				public setTransaction(transaction: string): void;
				public static store(options: io.sentry.SentryOptions, entity: any, fileName: string): void;
				public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				public addAttachment(param0: io.sentry.Attachment): void;
				public setFingerprint(param0: java.util.Collection<string>): void;
				public setTransaction(param0: string): void;
				public setTrace(param0: io.sentry.SpanContext, param1: io.sentry.IScope): void;
				public setTrace(spanContext: io.sentry.SpanContext, scope: io.sentry.IScope): void;
				public setRequest(param0: io.sentry.protocol.Request): void;
				public setReplayId(param0: io.sentry.protocol.SentryId): void;
				public read(this_: io.sentry.SentryOptions, options: string, fileName: java.lang.Class<any>): any;
				public setRequest(request: io.sentry.protocol.Request): void;
				public setBreadcrumbs(breadcrumbs: java.util.Collection<io.sentry.Breadcrumb>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export module tape {
				export class EmptyObjectQueue<T>  extends io.sentry.cache.tape.ObjectQueue<any> {
					public static class: java.lang.Class<io.sentry.cache.tape.EmptyObjectQueue<any>>;
					public iterator(): java.util.Iterator<any>;
					public add(entry: any): void;
					public peek(): any;
					public remove(n: number): void;
					public close(): void;
					public file(): io.sentry.cache.tape.QueueFile;
					public size(): number;
					public peek(this_: number): java.util.List<any>;
					public remove(): void;
				}
				export module EmptyObjectQueue {
					export class EmptyIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<io.sentry.cache.tape.EmptyObjectQueue.EmptyIterator<any>>;
						public next(): any;
						public hasNext(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export module tape {
				export class FileObjectQueue<T>  extends io.sentry.cache.tape.ObjectQueue<any> {
					public static class: java.lang.Class<io.sentry.cache.tape.FileObjectQueue<any>>;
					public isEmpty(): boolean;
					public add(entry: any): void;
					public peek(): any;
					public file(): io.sentry.cache.tape.QueueFile;
					public size(): number;
					public peek(this_: number): java.util.List<any>;
					public remove(): void;
					public iterator(): java.util.Iterator<any>;
					public toString(): string;
					public remove(n: number): void;
					public sync(): void;
					public clear(): void;
					public close(): void;
					public remove(param0: number): void;
				}
				export module FileObjectQueue {
					export class DirectByteArrayOutputStream {
						public static class: java.lang.Class<io.sentry.cache.tape.FileObjectQueue.DirectByteArrayOutputStream>;
					}
					export class QueueFileIterator extends java.util.Iterator<any> {
						public static class: java.lang.Class<io.sentry.cache.tape.FileObjectQueue.QueueFileIterator>;
						public next(): any;
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export module tape {
				export abstract class ObjectQueue<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.cache.tape.ObjectQueue<any>>;
					public isEmpty(): boolean;
					public static createEmpty(): io.sentry.cache.tape.ObjectQueue<any>;
					public file(): io.sentry.cache.tape.QueueFile;
					public size(): number;
					public asList(): java.util.List<T>;
					public add(param0: T): void;
					public remove(): void;
					public peek(): T;
					public static create(qf: io.sentry.cache.tape.QueueFile, converter: io.sentry.cache.tape.ObjectQueue.Converter<any>): io.sentry.cache.tape.ObjectQueue<any>;
					public constructor();
					public peek(this_: number): java.util.List<T>;
					public sync(): void;
					public clear(): void;
					public remove(param0: number): void;
				}
				export module ObjectQueue {
					export class Converter<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.cache.tape.ObjectQueue.Converter<any>>;
						/**
						 * Constructs a new instance of the io.sentry.cache.tape.ObjectQueue$Converter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							from(param0: androidNative.Array<number>): T;
							toStream(param0: T, param1: java.io.OutputStream): void;
						});
						public constructor();
						public toStream(param0: T, param1: java.io.OutputStream): void;
						public from(param0: androidNative.Array<number>): T;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
			export module tape {
				export class QueueFile extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.cache.tape.QueueFile>;
					public remove(i: number): void;
					public isEmpty(): boolean;
					public add(data: androidNative.Array<number>): void;
					public size(): number;
					public remove(): void;
					public file(): java.io.File;
					public toString(): string;
					public add(data: androidNative.Array<number>, offset: number, count: number): void;
					public isAtFullCapacity(): boolean;
					public peek(): androidNative.Array<number>;
					public sync(): void;
					public clear(): void;
					public close(): void;
					public iterator(): java.util.Iterator<androidNative.Array<number>>;
				}
				export module QueueFile {
					export class Builder {
						public static class: java.lang.Class<io.sentry.cache.tape.QueueFile.Builder>;
						public size(size: number): io.sentry.cache.tape.QueueFile.Builder;
						public constructor(file: java.io.File);
						public build(): io.sentry.cache.tape.QueueFile;
						public zero(zero: boolean): io.sentry.cache.tape.QueueFile.Builder;
						public synchronousWrites(synchronousWrites: boolean): io.sentry.cache.tape.QueueFile.Builder;
					}
					export class Element {
						public static class: java.lang.Class<io.sentry.cache.tape.QueueFile.Element>;
						public toString(): string;
					}
					export class ElementIterator extends java.util.Iterator<androidNative.Array<number>> {
						public static class: java.lang.Class<io.sentry.cache.tape.QueueFile.ElementIterator>;
						public hasNext(): boolean;
						public next(): androidNative.Array<number>;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class AtomicClientReportStorage extends io.sentry.clientreport.IClientReportStorage {
				public static class: java.lang.Class<io.sentry.clientreport.AtomicClientReportStorage>;
				public resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				public addCount(key: io.sentry.clientreport.ClientReportKey, count: java.lang.Long): void;
				public addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class ClientReport implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReport>;
				public getTimestamp(): java.util.Date;
				public getDiscardedEvents(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor(timestamp: java.util.Date, discardedEvents: java.util.List<io.sentry.clientreport.DiscardedEvent>);
			}
			export module ClientReport {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.ClientReport> {
					public static class: java.lang.Class<io.sentry.clientreport.ClientReport.Deserializer>;
					public constructor();
					public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.clientreport.ClientReport;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.clientreport.ClientReport.JsonKeys>;
					public static TIMESTAMP: string = "timestamp";
					public static DISCARDED_EVENTS: string = "discarded_events";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class ClientReportKey {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReportKey>;
				public getCategory(): string;
				public getReason(): string;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class ClientReportRecorder extends io.sentry.clientreport.IClientReportRecorder {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReportRecorder>;
				public recordLostEnvelope(e: io.sentry.clientreport.DiscardReason, this_: io.sentry.SentryEnvelope): void;
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEvent(this_: io.sentry.clientreport.DiscardReason, reason: io.sentry.DataCategory, category: number): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEvent(reason: io.sentry.clientreport.DiscardReason, category: io.sentry.DataCategory): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: number): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
				public attachReportToEnvelope(items: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEnvelopeItem(e: io.sentry.clientreport.DiscardReason, spans: io.sentry.SentryEnvelopeItem): void;
				public constructor(options: io.sentry.SentryOptions);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class DiscardReason {
				public static class: java.lang.Class<io.sentry.clientreport.DiscardReason>;
				public static QUEUE_OVERFLOW: io.sentry.clientreport.DiscardReason;
				public static CACHE_OVERFLOW: io.sentry.clientreport.DiscardReason;
				public static RATELIMIT_BACKOFF: io.sentry.clientreport.DiscardReason;
				public static NETWORK_ERROR: io.sentry.clientreport.DiscardReason;
				public static SEND_ERROR: io.sentry.clientreport.DiscardReason;
				public static SAMPLE_RATE: io.sentry.clientreport.DiscardReason;
				public static BEFORE_SEND: io.sentry.clientreport.DiscardReason;
				public static EVENT_PROCESSOR: io.sentry.clientreport.DiscardReason;
				public static BACKPRESSURE: io.sentry.clientreport.DiscardReason;
				public static valueOf(name: string): io.sentry.clientreport.DiscardReason;
				public getReason(): string;
				public static values(): androidNative.Array<io.sentry.clientreport.DiscardReason>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class DiscardedEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent>;
				public getQuantity(): java.lang.Long;
				public getCategory(): string;
				public getReason(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(reason: string, category: string, quantity: java.lang.Long);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public toString(): string;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module DiscardedEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.DiscardedEvent> {
					public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.clientreport.DiscardedEvent;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.JsonKeys>;
					public static REASON: string = "reason";
					public static CATEGORY: string = "category";
					public static QUANTITY: string = "quantity";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class IClientReportRecorder {
				public static class: java.lang.Class<io.sentry.clientreport.IClientReportRecorder>;
				/**
				 * Constructs a new instance of the io.sentry.clientreport.IClientReportRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
					recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
					recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
					recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: number): void;
					attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				});
				public constructor();
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: number): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class IClientReportStorage {
				public static class: java.lang.Class<io.sentry.clientreport.IClientReportStorage>;
				/**
				 * Constructs a new instance of the io.sentry.clientreport.IClientReportStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
					resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				});
				public constructor();
				public resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				public addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module clientreport {
			export class NoOpClientReportRecorder extends io.sentry.clientreport.IClientReportRecorder {
				public static class: java.lang.Class<io.sentry.clientreport.NoOpClientReportRecorder>;
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEnvelopeItem(reason: io.sentry.clientreport.DiscardReason, envelopeItem: io.sentry.SentryEnvelopeItem): void;
				public recordLostEnvelope(reason: io.sentry.clientreport.DiscardReason, envelope: io.sentry.SentryEnvelope): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEvent(reason: io.sentry.clientreport.DiscardReason, category: io.sentry.DataCategory): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory, param2: number): void;
				public recordLostEvent(reason: io.sentry.clientreport.DiscardReason, category: io.sentry.DataCategory, count: number): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
				public attachReportToEnvelope(envelope: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export abstract class AbstractPropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.AbstractPropertiesProvider>;
				public getProperty(property: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public constructor(prefix: string, properties: java.util.Properties);
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public constructor(properties: java.util.Properties);
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
				public getMap(key: string): java.util.Map<string,string>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class ClasspathPropertiesLoader extends io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.ClasspathPropertiesLoader>;
				public constructor(fileName: string, classLoader: java.lang.ClassLoader, logger: io.sentry.ILogger);
				public load(): java.util.Properties;
				public constructor(logger: io.sentry.ILogger);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class CompositePropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.CompositePropertiesProvider>;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public constructor(providers: java.util.List<io.sentry.config.PropertiesProvider>);
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getMap(this_: string): java.util.Map<string,string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
				public getProperty(provider: string): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class EnvironmentVariablePropertiesProvider extends io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.EnvironmentVariablePropertiesProvider>;
				public getProperty(property: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
				public getMap(key: string): java.util.Map<string,string>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class FilesystemPropertiesLoader extends io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.FilesystemPropertiesLoader>;
				public constructor(filePath: string, logger: io.sentry.ILogger);
				public load(): java.util.Properties;
				public constructor(filePath: string, logger: io.sentry.ILogger, logNonExisting: boolean);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.PropertiesLoader>;
				/**
				 * Constructs a new instance of the io.sentry.config.PropertiesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(): java.util.Properties;
				});
				public constructor();
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.PropertiesProvider>;
				/**
				 * Constructs a new instance of the io.sentry.config.PropertiesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(param0: string): string;
					getMap(param0: string): java.util.Map<string,string>;
					getList(property: string): java.util.List<string>;
					getListOrNull(property: string): java.util.List<string>;
					getProperty(property: string, defaultValue: string): string;
					getBooleanProperty(property: string): java.lang.Boolean;
					getDoubleProperty(property: string): java.lang.Double;
					getLongProperty(property: string): java.lang.Long;
				});
				public constructor();
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesProviderFactory {
				public static class: java.lang.Class<io.sentry.config.PropertiesProviderFactory>;
				public static create(): io.sentry.config.PropertiesProvider;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class SimplePropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SimplePropertiesProvider>;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public constructor(prefix: string, properties: java.util.Properties);
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public constructor(properties: java.util.Properties);
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class SystemPropertyPropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SystemPropertyPropertiesProvider>;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(property: string): java.lang.Long;
				public constructor(prefix: string, properties: java.util.Properties);
				public getDoubleProperty(property: string): java.lang.Double;
				public getProperty(param0: string): string;
				public constructor(properties: java.util.Properties);
				public getProperty(property: string, defaultValue: string): string;
				public getListOrNull(property: string): java.util.List<string>;
				public getList(property: string): java.util.List<string>;
				public getBooleanProperty(property: string): java.lang.Boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class ExceptionMechanismException {
				public static class: java.lang.Class<io.sentry.exception.ExceptionMechanismException>;
				public getThread(): java.lang.Thread;
				public constructor(mechanism: io.sentry.protocol.Mechanism, throwable: java.lang.Throwable, thread: java.lang.Thread);
				public isSnapshot(): boolean;
				public constructor(mechanism: io.sentry.protocol.Mechanism, throwable: java.lang.Throwable, thread: java.lang.Thread, snapshot: boolean);
				public getExceptionMechanism(): io.sentry.protocol.Mechanism;
				public getThrowable(): java.lang.Throwable;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class InvalidSentryTraceHeaderException {
				public static class: java.lang.Class<io.sentry.exception.InvalidSentryTraceHeaderException>;
				public constructor(sentryTraceHeader: string, cause: java.lang.Throwable);
				public getSentryTraceHeader(): string;
				public constructor(sentryTraceHeader: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class SentryEnvelopeException {
				public static class: java.lang.Class<io.sentry.exception.SentryEnvelopeException>;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module exception {
			export class SentryHttpClientException {
				public static class: java.lang.Class<io.sentry.exception.SentryHttpClientException>;
				public constructor(message: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module featureflags {
			export class FeatureFlagBuffer extends io.sentry.featureflags.IFeatureFlagBuffer {
				public static class: java.lang.Class<io.sentry.featureflags.FeatureFlagBuffer>;
				public static merged(options: io.sentry.SentryOptions, globalBuffer: io.sentry.featureflags.IFeatureFlagBuffer, isolationBuffer: io.sentry.featureflags.IFeatureFlagBuffer, currentBuffer: io.sentry.featureflags.IFeatureFlagBuffer): io.sentry.featureflags.IFeatureFlagBuffer;
				public add(param0: string, param1: java.lang.Boolean): void;
				public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				public clone(): io.sentry.featureflags.IFeatureFlagBuffer;
				public static create(options: io.sentry.SentryOptions): io.sentry.featureflags.IFeatureFlagBuffer;
				public clear(): void;
				public add(i: string, size: java.lang.Boolean): void;
			}
			export module FeatureFlagBuffer {
				export class FeatureFlagEntry {
					public static class: java.lang.Class<io.sentry.featureflags.FeatureFlagBuffer.FeatureFlagEntry>;
					public toFeatureFlag(): io.sentry.protocol.FeatureFlag;
					public constructor(flag: string, result: boolean, nanos: java.lang.Long);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module featureflags {
			export class IFeatureFlagBuffer {
				public static class: java.lang.Class<io.sentry.featureflags.IFeatureFlagBuffer>;
				/**
				 * Constructs a new instance of the io.sentry.featureflags.IFeatureFlagBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					add(param0: string, param1: java.lang.Boolean): void;
					clear(): void;
					getFeatureFlags(): io.sentry.protocol.FeatureFlags;
					clone(): io.sentry.featureflags.IFeatureFlagBuffer;
				});
				public constructor();
				public add(param0: string, param1: java.lang.Boolean): void;
				public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				public clone(): io.sentry.featureflags.IFeatureFlagBuffer;
				public clear(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module featureflags {
			export class NoOpFeatureFlagBuffer extends io.sentry.featureflags.IFeatureFlagBuffer {
				public static class: java.lang.Class<io.sentry.featureflags.NoOpFeatureFlagBuffer>;
				public add(param0: string, param1: java.lang.Boolean): void;
				public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				public clone(): io.sentry.featureflags.IFeatureFlagBuffer;
				public static getInstance(): io.sentry.featureflags.NoOpFeatureFlagBuffer;
				public clear(): void;
				public add(flag: string, result: java.lang.Boolean): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module featureflags {
			export class SpanFeatureFlagBuffer extends io.sentry.featureflags.IFeatureFlagBuffer {
				public static class: java.lang.Class<io.sentry.featureflags.SpanFeatureFlagBuffer>;
				public add(param0: string, param1: java.lang.Boolean): void;
				public add(this_: string, flag: java.lang.Boolean): void;
				public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				public static create(): io.sentry.featureflags.IFeatureFlagBuffer;
				public clone(): io.sentry.featureflags.IFeatureFlagBuffer;
				public clear(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class AbnormalExit {
				public static class: java.lang.Class<io.sentry.hints.AbnormalExit>;
				/**
				 * Constructs a new instance of the io.sentry.hints.AbnormalExit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					mechanism(): string;
					ignoreCurrentThread(): boolean;
					timestamp(): java.lang.Long;
				});
				public constructor();
				public mechanism(): string;
				public timestamp(): java.lang.Long;
				public ignoreCurrentThread(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class ApplyScopeData {
				public static class: java.lang.Class<io.sentry.hints.ApplyScopeData>;
				/**
				 * Constructs a new instance of the io.sentry.hints.ApplyScopeData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Backfillable {
				public static class: java.lang.Class<io.sentry.hints.Backfillable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Backfillable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldEnrich(): boolean;
				});
				public constructor();
				public shouldEnrich(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export abstract class BlockingFlushHint implements io.sentry.hints.DiskFlushNotification, io.sentry.hints.Flushable {
				public static class: java.lang.Class<io.sentry.hints.BlockingFlushHint>;
				public markFlushed(): void;
				public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
				public setFlushable(param0: io.sentry.protocol.SentryId): void;
				public constructor(flushTimeoutMillis: number, logger: io.sentry.ILogger);
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Cached {
				public static class: java.lang.Class<io.sentry.hints.Cached>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Cached interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class DiskFlushNotification {
				public static class: java.lang.Class<io.sentry.hints.DiskFlushNotification>;
				/**
				 * Constructs a new instance of the io.sentry.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					markFlushed(): void;
					isFlushable(param0: io.sentry.protocol.SentryId): boolean;
					setFlushable(param0: io.sentry.protocol.SentryId): void;
				});
				public constructor();
				public markFlushed(): void;
				public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
				public setFlushable(param0: io.sentry.protocol.SentryId): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Enqueable {
				public static class: java.lang.Class<io.sentry.hints.Enqueable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Enqueable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					markEnqueued(): void;
				});
				public constructor();
				public markEnqueued(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class EventDropReason {
				public static class: java.lang.Class<io.sentry.hints.EventDropReason>;
				public static MULTITHREADED_DEDUPLICATION: io.sentry.hints.EventDropReason;
				public static values(): androidNative.Array<io.sentry.hints.EventDropReason>;
				public static valueOf(name: string): io.sentry.hints.EventDropReason;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Flushable {
				public static class: java.lang.Class<io.sentry.hints.Flushable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Flushable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					waitFlush(): boolean;
				});
				public constructor();
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class NativeCrashExit {
				public static class: java.lang.Class<io.sentry.hints.NativeCrashExit>;
				/**
				 * Constructs a new instance of the io.sentry.hints.NativeCrashExit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					timestamp(): java.lang.Long;
				});
				public constructor();
				public timestamp(): java.lang.Long;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Resettable {
				public static class: java.lang.Class<io.sentry.hints.Resettable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Resettable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					reset(): void;
				});
				public constructor();
				public reset(): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class Retryable {
				public static class: java.lang.Class<io.sentry.hints.Retryable>;
				/**
				 * Constructs a new instance of the io.sentry.hints.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRetry(): boolean;
					setRetry(param0: boolean): void;
				});
				public constructor();
				public isRetry(): boolean;
				public setRetry(param0: boolean): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEnd>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SessionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionEndHint extends io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEndHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStart>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SessionStart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SessionStartHint extends io.sentry.hints.SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStartHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class SubmissionResult {
				public static class: java.lang.Class<io.sentry.hints.SubmissionResult>;
				/**
				 * Constructs a new instance of the io.sentry.hints.SubmissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setResult(param0: boolean): void;
					isSuccess(): boolean;
				});
				public constructor();
				public setResult(param0: boolean): void;
				public isSuccess(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
			export class TransactionEnd {
				public static class: java.lang.Class<io.sentry.hints.TransactionEnd>;
				/**
				 * Constructs a new instance of the io.sentry.hints.TransactionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class FileIOSpanManager {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileIOSpanManager>;
				}
				export module FileIOSpanManager {
					export class FileIOCallable<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable<any>>;
						/**
						 * Constructs a new instance of the io.sentry.instrumentation.file.FileIOSpanManager$FileIOCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(): T;
						});
						public constructor();
						public call(): T;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class FileInputStreamInitData {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileInputStreamInitData>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class FileOutputStreamInitData {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileOutputStreamInitData>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class SentryFileInputStream {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream>;
					public read(): number;
					public read(b: androidNative.Array<number>): number;
					public constructor(name: string);
					public close(): void;
					public constructor(file: java.io.File);
					public constructor(fdObj: java.io.FileDescriptor);
					public read(b: androidNative.Array<number>, off: number, len: number): number;
					public skip(n: number): number;
				}
				export module SentryFileInputStream {
					export class Factory {
						public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream.Factory>;
						public constructor();
						public static create(delegate: java.io.FileInputStream, name: string): java.io.FileInputStream;
						public static create(delegate: java.io.FileInputStream, descriptor: java.io.FileDescriptor): java.io.FileInputStream;
						public static create(delegate: java.io.FileInputStream, file: java.io.File): java.io.FileInputStream;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class SentryFileOutputStream {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream>;
					public constructor(name: string);
					public write(b: number): void;
					public constructor(name: string, append: boolean);
					public write(b: androidNative.Array<number>): void;
					public close(): void;
					public constructor(file: java.io.File);
					public constructor(file: java.io.File, append: boolean);
					public write(b: androidNative.Array<number>, off: number, len: number): void;
					public constructor(fdObj: java.io.FileDescriptor);
				}
				export module SentryFileOutputStream {
					export class Factory {
						public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream.Factory>;
						public static create(delegate: java.io.FileOutputStream, file: java.io.File, append: boolean): java.io.FileOutputStream;
						public static create(delegate: java.io.FileOutputStream, name: string): java.io.FileOutputStream;
						public constructor();
						public static create(delegate: java.io.FileOutputStream, file: java.io.File): java.io.FileOutputStream;
						public static create(delegate: java.io.FileOutputStream, file: java.io.File, scopes: io.sentry.IScopes): java.io.FileOutputStream;
						public static create(delegate: java.io.FileOutputStream, fdObj: java.io.FileDescriptor): java.io.FileOutputStream;
						public static create(delegate: java.io.FileOutputStream, name: string, append: boolean): java.io.FileOutputStream;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class SentryFileReader {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileReader>;
					public constructor(fileName: string);
					public constructor(file: java.io.File);
					public constructor(fd: java.io.FileDescriptor);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class SentryFileWriter {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileWriter>;
					public constructor(fileName: string);
					public constructor(fileName: string, append: boolean);
					public constructor(file: java.io.File);
					public constructor(file: java.io.File, append: boolean);
					public constructor(fd: java.io.FileDescriptor);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export class ManifestVersionReader {
				public static class: java.lang.Class<io.sentry.internal.ManifestVersionReader>;
				public readManifestFiles(): void;
				public static getInstance(): io.sentry.internal.ManifestVersionReader;
				public readOpenTelemetryVersion(): io.sentry.internal.ManifestVersionReader.VersionInfoHolder;
			}
			export module ManifestVersionReader {
				export class VersionInfoHolder {
					public static class: java.lang.Class<io.sentry.internal.ManifestVersionReader.VersionInfoHolder>;
					public getSdkVersion(): string;
					public constructor();
					public getSdkName(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module debugmeta {
				export class IDebugMetaLoader {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.IDebugMetaLoader>;
					/**
					 * Constructs a new instance of the io.sentry.internal.debugmeta.IDebugMetaLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadDebugMeta(): java.util.List<java.util.Properties>;
					});
					public constructor();
					public loadDebugMeta(): java.util.List<java.util.Properties>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module debugmeta {
				export class NoOpDebugMetaLoader extends io.sentry.internal.debugmeta.IDebugMetaLoader {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.NoOpDebugMetaLoader>;
					public loadDebugMeta(): java.util.List<java.util.Properties>;
					public static getInstance(): io.sentry.internal.debugmeta.NoOpDebugMetaLoader;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module debugmeta {
				export class ResourcesDebugMetaLoader extends io.sentry.internal.debugmeta.IDebugMetaLoader {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.ResourcesDebugMetaLoader>;
					public loadDebugMeta(): java.util.List<java.util.Properties>;
					public constructor(logger: io.sentry.ILogger);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module eventprocessor {
				export class EventProcessorAndOrder extends java.lang.Comparable<io.sentry.internal.eventprocessor.EventProcessorAndOrder> {
					public static class: java.lang.Class<io.sentry.internal.eventprocessor.EventProcessorAndOrder>;
					public getOrder(): java.lang.Long;
					public compareTo(o: io.sentry.internal.eventprocessor.EventProcessorAndOrder): number;
					public constructor(eventProcessor: io.sentry.EventProcessor, order: java.lang.Long);
					public getEventProcessor(): io.sentry.EventProcessor;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module gestures {
				export class GestureTargetLocator {
					public static class: java.lang.Class<io.sentry.internal.gestures.GestureTargetLocator>;
					/**
					 * Constructs a new instance of the io.sentry.internal.gestures.GestureTargetLocator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
					});
					public constructor();
					public locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module gestures {
				export class UiElement {
					public static class: java.lang.Class<io.sentry.internal.gestures.UiElement>;
					public getResourceName(): string;
					public getView(): any;
					public getClassName(): string;
					public getOrigin(): string;
					public constructor(view: any, className: string, resourceName: string, tag: string, origin: string);
					public getIdentifier(): string;
					public equals(o: any): boolean;
					public hashCode(): number;
					public getTag(): string;
				}
				export module UiElement {
					export class Type {
						public static class: java.lang.Class<io.sentry.internal.gestures.UiElement.Type>;
						public static CLICKABLE: io.sentry.internal.gestures.UiElement.Type;
						public static SCROLLABLE: io.sentry.internal.gestures.UiElement.Type;
						public static values(): androidNative.Array<io.sentry.internal.gestures.UiElement.Type>;
						public static valueOf(name: string): io.sentry.internal.gestures.UiElement.Type;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export class CompositeModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.CompositeModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(loaders: java.util.List<io.sentry.internal.modules.IModulesLoader>, logger: io.sentry.ILogger);
					public constructor(logger: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export class IModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.IModulesLoader>;
					/**
					 * Constructs a new instance of the io.sentry.internal.modules.IModulesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOrLoadModules(): java.util.Map<string,string>;
					});
					public constructor();
					public getOrLoadModules(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export class ManifestModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(logger: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
				export module ManifestModulesLoader {
					export class Module {
						public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader.Module>;
						public constructor(name: string, version: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export abstract class ModulesLoader extends io.sentry.internal.modules.IModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ModulesLoader>;
					public static EXTERNAL_MODULES_FILENAME: string = "sentry-external-modules.txt";
					public logger: io.sentry.ILogger;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(logger: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
					public parseStream(group: java.io.InputStream): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export class NoOpModulesLoader extends io.sentry.internal.modules.IModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.NoOpModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public static getInstance(): io.sentry.internal.modules.NoOpModulesLoader;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module modules {
				export class ResourcesModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ResourcesModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(logger: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module internal {
			export module viewhierarchy {
				export class ViewHierarchyExporter {
					public static class: java.lang.Class<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>;
					/**
					 * Constructs a new instance of the io.sentry.internal.viewhierarchy.ViewHierarchyExporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						export(param0: io.sentry.protocol.ViewHierarchyNode, param1: any): boolean;
					});
					public constructor();
					public export(param0: io.sentry.protocol.ViewHierarchyNode, param1: any): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class DefaultLoggerBatchProcessorFactory extends io.sentry.logger.ILoggerBatchProcessorFactory {
				public static class: java.lang.Class<io.sentry.logger.DefaultLoggerBatchProcessorFactory>;
				public create(options: io.sentry.SentryOptions, client: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
				public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class ILoggerApi {
				public static class: java.lang.Class<io.sentry.logger.ILoggerApi>;
				/**
				 * Constructs a new instance of the io.sentry.logger.ILoggerApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					trace(param0: string, param1: androidNative.Array<any>): void;
					debug(param0: string, param1: androidNative.Array<any>): void;
					info(param0: string, param1: androidNative.Array<any>): void;
					warn(param0: string, param1: androidNative.Array<any>): void;
					error(param0: string, param1: androidNative.Array<any>): void;
					fatal(param0: string, param1: androidNative.Array<any>): void;
					log(param0: io.sentry.SentryLogLevel, param1: string, param2: androidNative.Array<any>): void;
					log(param0: io.sentry.SentryLogLevel, param1: io.sentry.SentryDate, param2: string, param3: androidNative.Array<any>): void;
					log(param0: io.sentry.SentryLogLevel, param1: io.sentry.logger.SentryLogParameters, param2: string, param3: androidNative.Array<any>): void;
				});
				public constructor();
				public warn(param0: string, param1: androidNative.Array<any>): void;
				public info(param0: string, param1: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.logger.SentryLogParameters, param2: string, param3: androidNative.Array<any>): void;
				public error(param0: string, param1: androidNative.Array<any>): void;
				public debug(param0: string, param1: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.SentryDate, param2: string, param3: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: string, param2: androidNative.Array<any>): void;
				public trace(param0: string, param1: androidNative.Array<any>): void;
				public fatal(param0: string, param1: androidNative.Array<any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class ILoggerBatchProcessor {
				public static class: java.lang.Class<io.sentry.logger.ILoggerBatchProcessor>;
				/**
				 * Constructs a new instance of the io.sentry.logger.ILoggerBatchProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					add(param0: io.sentry.SentryLogEvent): void;
					close(param0: boolean): void;
					flush(param0: number): void;
				});
				public constructor();
				public close(param0: boolean): void;
				public add(param0: io.sentry.SentryLogEvent): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class ILoggerBatchProcessorFactory {
				public static class: java.lang.Class<io.sentry.logger.ILoggerBatchProcessorFactory>;
				/**
				 * Constructs a new instance of the io.sentry.logger.ILoggerBatchProcessorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
				});
				public constructor();
				public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.logger.ILoggerBatchProcessor;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class LoggerApi extends io.sentry.logger.ILoggerApi {
				public static class: java.lang.Class<io.sentry.logger.LoggerApi>;
				public warn(param0: string, param1: androidNative.Array<any>): void;
				public error(message: string, args: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, timestamp: io.sentry.SentryDate, message: string, args: androidNative.Array<any>): void;
				public error(param0: string, param1: androidNative.Array<any>): void;
				public debug(param0: string, param1: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, message: string, args: androidNative.Array<any>): void;
				public info(message: string, args: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: string, param2: androidNative.Array<any>): void;
				public fatal(message: string, args: androidNative.Array<any>): void;
				public warn(message: string, args: androidNative.Array<any>): void;
				public trace(message: string, args: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, params: io.sentry.logger.SentryLogParameters, message: string, args: androidNative.Array<any>): void;
				public info(param0: string, param1: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.logger.SentryLogParameters, param2: string, param3: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.SentryDate, param2: string, param3: androidNative.Array<any>): void;
				public constructor(scopes: io.sentry.Scopes);
				public debug(message: string, args: androidNative.Array<any>): void;
				public trace(param0: string, param1: androidNative.Array<any>): void;
				public fatal(param0: string, param1: androidNative.Array<any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class LoggerBatchProcessor extends io.sentry.logger.ILoggerBatchProcessor {
				public static class: java.lang.Class<io.sentry.logger.LoggerBatchProcessor>;
				public static FLUSH_AFTER_MS: number = 5000;
				public static MAX_BATCH_SIZE: number = 100;
				public static MAX_QUEUE_SIZE: number = 1000;
				public options: io.sentry.SentryOptions;
				public flush(this_: number): void;
				public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient);
				public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient, executorService: io.sentry.ISentryExecutorService);
				public close(param0: boolean): void;
				public add(this_: io.sentry.SentryLogEvent): void;
				public close(isRestarting: boolean): void;
				public add(param0: io.sentry.SentryLogEvent): void;
				public flush(param0: number): void;
			}
			export module LoggerBatchProcessor {
				export class BatchRunnable {
					public static class: java.lang.Class<io.sentry.logger.LoggerBatchProcessor.BatchRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class NoOpLoggerApi extends io.sentry.logger.ILoggerApi {
				public static class: java.lang.Class<io.sentry.logger.NoOpLoggerApi>;
				public warn(param0: string, param1: androidNative.Array<any>): void;
				public error(message: string, args: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, timestamp: io.sentry.SentryDate, message: string, args: androidNative.Array<any>): void;
				public static getInstance(): io.sentry.logger.NoOpLoggerApi;
				public error(param0: string, param1: androidNative.Array<any>): void;
				public debug(param0: string, param1: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, message: string, args: androidNative.Array<any>): void;
				public info(message: string, args: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: string, param2: androidNative.Array<any>): void;
				public fatal(message: string, args: androidNative.Array<any>): void;
				public warn(message: string, args: androidNative.Array<any>): void;
				public trace(message: string, args: androidNative.Array<any>): void;
				public log(level: io.sentry.SentryLogLevel, params: io.sentry.logger.SentryLogParameters, message: string, args: androidNative.Array<any>): void;
				public info(param0: string, param1: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.logger.SentryLogParameters, param2: string, param3: androidNative.Array<any>): void;
				public log(param0: io.sentry.SentryLogLevel, param1: io.sentry.SentryDate, param2: string, param3: androidNative.Array<any>): void;
				public debug(message: string, args: androidNative.Array<any>): void;
				public trace(param0: string, param1: androidNative.Array<any>): void;
				public fatal(param0: string, param1: androidNative.Array<any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class NoOpLoggerBatchProcessor extends io.sentry.logger.ILoggerBatchProcessor {
				public static class: java.lang.Class<io.sentry.logger.NoOpLoggerBatchProcessor>;
				public add(event: io.sentry.SentryLogEvent): void;
				public close(param0: boolean): void;
				public static getInstance(): io.sentry.logger.NoOpLoggerBatchProcessor;
				public close(isRestarting: boolean): void;
				public flush(timeoutMillis: number): void;
				public add(param0: io.sentry.SentryLogEvent): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module logger {
			export class SentryLogParameters {
				public static class: java.lang.Class<io.sentry.logger.SentryLogParameters>;
				public static create(timestamp: io.sentry.SentryDate, attributes: io.sentry.SentryAttributes): io.sentry.logger.SentryLogParameters;
				public setTimestamp(timestamp: io.sentry.SentryDate): void;
				public setAttributes(attributes: io.sentry.SentryAttributes): void;
				public setOrigin(origin: string): void;
				public getTimestamp(): io.sentry.SentryDate;
				public static create(attributes: io.sentry.SentryAttributes): io.sentry.logger.SentryLogParameters;
				public constructor();
				public getAttributes(): io.sentry.SentryAttributes;
				public getOrigin(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class DefaultMetricsBatchProcessorFactory extends io.sentry.metrics.IMetricsBatchProcessorFactory {
				public static class: java.lang.Class<io.sentry.metrics.DefaultMetricsBatchProcessorFactory>;
				public create(options: io.sentry.SentryOptions, client: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
				public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class IMetricsApi {
				public static class: java.lang.Class<io.sentry.metrics.IMetricsApi>;
				/**
				 * Constructs a new instance of the io.sentry.metrics.IMetricsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(param0: string): void;
					count(param0: string, param1: java.lang.Double): void;
					count(param0: string, param1: string): void;
					count(param0: string, param1: java.lang.Double, param2: string): void;
					count(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
					distribution(param0: string, param1: java.lang.Double): void;
					distribution(param0: string, param1: java.lang.Double, param2: string): void;
					distribution(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
					gauge(param0: string, param1: java.lang.Double): void;
					gauge(param0: string, param1: java.lang.Double, param2: string): void;
					gauge(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				});
				public constructor();
				public count(param0: string, param1: java.lang.Double): void;
				public count(param0: string, param1: string): void;
				public gauge(param0: string, param1: java.lang.Double): void;
				public count(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public count(param0: string): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public count(param0: string, param1: java.lang.Double, param2: string): void;
				public distribution(param0: string, param1: java.lang.Double): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class IMetricsBatchProcessor {
				public static class: java.lang.Class<io.sentry.metrics.IMetricsBatchProcessor>;
				/**
				 * Constructs a new instance of the io.sentry.metrics.IMetricsBatchProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					add(param0: io.sentry.SentryMetricsEvent): void;
					close(param0: boolean): void;
					flush(param0: number): void;
				});
				public constructor();
				public close(param0: boolean): void;
				public add(param0: io.sentry.SentryMetricsEvent): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class IMetricsBatchProcessorFactory {
				public static class: java.lang.Class<io.sentry.metrics.IMetricsBatchProcessorFactory>;
				/**
				 * Constructs a new instance of the io.sentry.metrics.IMetricsBatchProcessorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
				});
				public constructor();
				public create(param0: io.sentry.SentryOptions, param1: io.sentry.SentryClient): io.sentry.metrics.IMetricsBatchProcessor;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class MetricsApi extends io.sentry.metrics.IMetricsApi {
				public static class: java.lang.Class<io.sentry.metrics.MetricsApi>;
				public count(param0: string, param1: string): void;
				public count(name: string, unit: string): void;
				public gauge(name: string, value: java.lang.Double, unit: string): void;
				public count(param0: string): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string): void;
				public distribution(name: string, value: java.lang.Double): void;
				public count(param0: string, param1: java.lang.Double, param2: string): void;
				public count(param0: string, param1: java.lang.Double): void;
				public count(name: string): void;
				public count(name: string, value: java.lang.Double): void;
				public count(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double): void;
				public gauge(name: string, value: java.lang.Double): void;
				public count(name: string, value: java.lang.Double, unit: string): void;
				public count(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public constructor(scopes: io.sentry.Scopes);
				public distribution(name: string, value: java.lang.Double, unit: string): void;
				public gauge(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public distribution(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public distribution(param0: string, param1: java.lang.Double): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class MetricsBatchProcessor extends io.sentry.metrics.IMetricsBatchProcessor {
				public static class: java.lang.Class<io.sentry.metrics.MetricsBatchProcessor>;
				public static FLUSH_AFTER_MS: number = 5000;
				public static MAX_BATCH_SIZE: number = 1000;
				public static MAX_QUEUE_SIZE: number = 10000;
				public options: io.sentry.SentryOptions;
				public flush(this_: number): void;
				public constructor(options: io.sentry.SentryOptions, client: io.sentry.ISentryClient);
				public close(param0: boolean): void;
				public add(this_: io.sentry.SentryMetricsEvent): void;
				public close(isRestarting: boolean): void;
				public add(param0: io.sentry.SentryMetricsEvent): void;
				public flush(param0: number): void;
			}
			export module MetricsBatchProcessor {
				export class BatchRunnable {
					public static class: java.lang.Class<io.sentry.metrics.MetricsBatchProcessor.BatchRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class MetricsUnit {
				public static class: java.lang.Class<io.sentry.metrics.MetricsUnit>;
			}
			export module MetricsUnit {
				export class Duration {
					public static class: java.lang.Class<io.sentry.metrics.MetricsUnit.Duration>;
					public static NANOSECOND: string = "nanosecond";
					public static MICROSECOND: string = "microsecond";
					public static MILLISECOND: string = "millisecond";
					public static SECOND: string = "second";
					public static MINUTE: string = "minute";
					public static HOUR: string = "hour";
					public static DAY: string = "day";
					public static WEEK: string = "week";
				}
				export class Fraction {
					public static class: java.lang.Class<io.sentry.metrics.MetricsUnit.Fraction>;
					public static RATIO: string = "ratio";
					public static PERCENT: string = "percent";
				}
				export class Information {
					public static class: java.lang.Class<io.sentry.metrics.MetricsUnit.Information>;
					public static BIT: string = "bit";
					public static BYTE: string = "byte";
					public static KILOBYTE: string = "kilobyte";
					public static KIBIBYTE: string = "kibibyte";
					public static MEGABYTE: string = "megabyte";
					public static MEBIBYTE: string = "mebibyte";
					public static GIGABYTE: string = "gigabyte";
					public static GIBIBYTE: string = "gibibyte";
					public static TERABYTE: string = "terabyte";
					public static TEBIBYTE: string = "tebibyte";
					public static PETABYTE: string = "petabyte";
					public static PEBIBYTE: string = "pebibyte";
					public static EXABYTE: string = "exabyte";
					public static EXBIBYTE: string = "exbibyte";
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class NoOpMetricsApi extends io.sentry.metrics.IMetricsApi {
				public static class: java.lang.Class<io.sentry.metrics.NoOpMetricsApi>;
				public count(param0: string, param1: string): void;
				public static getInstance(): io.sentry.metrics.NoOpMetricsApi;
				public count(name: string, unit: string): void;
				public gauge(name: string, value: java.lang.Double, unit: string): void;
				public count(param0: string): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string): void;
				public distribution(name: string, value: java.lang.Double): void;
				public count(param0: string, param1: java.lang.Double, param2: string): void;
				public count(param0: string, param1: java.lang.Double): void;
				public count(name: string): void;
				public count(name: string, value: java.lang.Double): void;
				public count(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double): void;
				public gauge(name: string, value: java.lang.Double): void;
				public count(name: string, value: java.lang.Double, unit: string): void;
				public count(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public distribution(name: string, value: java.lang.Double, unit: string): void;
				public gauge(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public distribution(name: string, value: java.lang.Double, unit: string, params: io.sentry.metrics.SentryMetricsParameters): void;
				public distribution(param0: string, param1: java.lang.Double): void;
				public distribution(param0: string, param1: java.lang.Double, param2: string, param3: io.sentry.metrics.SentryMetricsParameters): void;
				public gauge(param0: string, param1: java.lang.Double, param2: string): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class NoOpMetricsBatchProcessor extends io.sentry.metrics.IMetricsBatchProcessor {
				public static class: java.lang.Class<io.sentry.metrics.NoOpMetricsBatchProcessor>;
				public static getInstance(): io.sentry.metrics.NoOpMetricsBatchProcessor;
				public add(event: io.sentry.SentryMetricsEvent): void;
				public close(param0: boolean): void;
				public close(isRestarting: boolean): void;
				public flush(timeoutMillis: number): void;
				public add(param0: io.sentry.SentryMetricsEvent): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module metrics {
			export class SentryMetricsParameters {
				public static class: java.lang.Class<io.sentry.metrics.SentryMetricsParameters>;
				public static create(attributes: io.sentry.SentryAttributes): io.sentry.metrics.SentryMetricsParameters;
				public setHint(hint: io.sentry.Hint): void;
				public static create(timestamp: io.sentry.SentryDate, attributes: io.sentry.SentryAttributes): io.sentry.metrics.SentryMetricsParameters;
				public static create(attributes: java.util.Map<string,any>): io.sentry.metrics.SentryMetricsParameters;
				public setTimestamp(timestamp: io.sentry.SentryDate): void;
				public setAttributes(attributes: io.sentry.SentryAttributes): void;
				public setOrigin(origin: string): void;
				public getHint(): io.sentry.Hint;
				public getTimestamp(): io.sentry.SentryDate;
				public constructor();
				public getAttributes(): io.sentry.SentryAttributes;
				public getOrigin(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module opentelemetry {
			export class OpenTelemetryUtil {
				public static class: java.lang.Class<io.sentry.opentelemetry.OpenTelemetryUtil>;
				public static applyIgnoredSpanOrigins(origin: io.sentry.SentryOptions): void;
				public static updateOpenTelemetryModeIfAuto(options: io.sentry.SentryOptions, loadClass: io.sentry.util.LoadClass): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module profilemeasurements {
			export class ProfileMeasurement implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement>;
				public static ID_FROZEN_FRAME_RENDERS: string = "frozen_frame_renders";
				public static ID_SLOW_FRAME_RENDERS: string = "slow_frame_renders";
				public static ID_SCREEN_FRAME_RATES: string = "screen_frame_rates";
				public static ID_CPU_USAGE: string = "cpu_usage";
				public static ID_MEMORY_FOOTPRINT: string = "memory_footprint";
				public static ID_MEMORY_NATIVE_FOOTPRINT: string = "memory_native_footprint";
				public static ID_UNKNOWN: string = "unknown";
				public static UNIT_HZ: string = "hz";
				public static UNIT_NANOSECONDS: string = "nanosecond";
				public static UNIT_BYTES: string = "byte";
				public static UNIT_PERCENT: string = "percent";
				public static UNIT_UNKNOWN: string = "unknown";
				public constructor(unit: string, values: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>);
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public setValues(values: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getUnit(): string;
				public hashCode(): number;
				public setUnit(unit: string): void;
				public equals(o: any): boolean;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getValues(): java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>;
			}
			export module ProfileMeasurement {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurement> {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.Deserializer>;
					public deserialize(values: io.sentry.ObjectReader, nextName: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurement;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.JsonKeys>;
					public static UNIT: string = "unit";
					public static VALUES: string = "values";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module profilemeasurements {
			export class ProfileMeasurementValue implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(relativeStartNs: java.lang.Long, value: java.lang.Number, nanoTimestamp: number);
				public hashCode(): number;
				public getRelativeStartNs(): string;
				public getUnknown(): java.util.Map<string,any>;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getValue(): number;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getTimestamp(): number;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
			}
			export module ProfileMeasurementValue {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurementValue> {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.Deserializer>;
					public deserialize(startNs: io.sentry.ObjectReader, timestamp: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurementValue;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.JsonKeys>;
					public static VALUE: string = "value";
					public static START_NS: string = "elapsed_since_start_ns";
					public static TIMESTAMP: string = "timestamp";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module profiling {
			export class JavaContinuousProfilerProvider {
				public static class: java.lang.Class<io.sentry.profiling.JavaContinuousProfilerProvider>;
				/**
				 * Constructs a new instance of the io.sentry.profiling.JavaContinuousProfilerProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getContinuousProfiler(param0: io.sentry.ILogger, param1: string, param2: number, param3: io.sentry.ISentryExecutorService): io.sentry.IContinuousProfiler;
				});
				public constructor();
				public getContinuousProfiler(param0: io.sentry.ILogger, param1: string, param2: number, param3: io.sentry.ISentryExecutorService): io.sentry.IContinuousProfiler;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module profiling {
			export class JavaProfileConverterProvider {
				public static class: java.lang.Class<io.sentry.profiling.JavaProfileConverterProvider>;
				/**
				 * Constructs a new instance of the io.sentry.profiling.JavaProfileConverterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProfileConverter(): io.sentry.IProfileConverter;
				});
				public constructor();
				public getProfileConverter(): io.sentry.IProfileConverter;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module profiling {
			export class ProfilingServiceLoader {
				public static class: java.lang.Class<io.sentry.profiling.ProfilingServiceLoader>;
				public static loadProfileConverter(): io.sentry.IProfileConverter;
				public static loadContinuousProfiler(provider: io.sentry.ILogger, t: string, logger: number, profilingTracesDirPath: io.sentry.ISentryExecutorService): io.sentry.IContinuousProfiler;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class App implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.App>;
				public static TYPE: string = "app";
				public setAppBuild(appBuild: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getStartType(): string;
				public setAppName(appName: string): void;
				public getAppBuild(): string;
				public getDeviceAppHash(): string;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setDeviceAppHash(deviceAppHash: string): void;
				public setInForeground(inForeground: java.lang.Boolean): void;
				public setViewNames(viewNames: java.util.List<string>): void;
				public getBuildType(): string;
				public getAppName(): string;
				public setAppVersion(appVersion: string): void;
				public getPermissions(): java.util.Map<string,string>;
				public hashCode(): number;
				public getSplitApks(): java.lang.Boolean;
				public getSplitNames(): java.util.List<string>;
				public equals(o: any): boolean;
				public setAppIdentifier(appIdentifier: string): void;
				public setAppStartTime(appStartTime: java.util.Date): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getAppIdentifier(): string;
				public getUnknown(): java.util.Map<string,any>;
				public getAppStartTime(): java.util.Date;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getInForeground(): java.lang.Boolean;
				public getViewNames(): java.util.List<string>;
				public setBuildType(buildType: string): void;
				public getAppVersion(): string;
				public setSplitNames(splitNames: java.util.List<string>): void;
				public setSplitApks(splitApks: java.lang.Boolean): void;
				public setStartType(startType: string): void;
				public setPermissions(permissions: java.util.Map<string,string>): void;
			}
			export module App {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.App> {
					public static class: java.lang.Class<io.sentry.protocol.App.Deserializer>;
					public deserialize(splitNames: io.sentry.ObjectReader, nextName: io.sentry.ILogger): io.sentry.protocol.App;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.App.JsonKeys>;
					public static APP_IDENTIFIER: string = "app_identifier";
					public static APP_START_TIME: string = "app_start_time";
					public static DEVICE_APP_HASH: string = "device_app_hash";
					public static BUILD_TYPE: string = "build_type";
					public static APP_NAME: string = "app_name";
					public static APP_VERSION: string = "app_version";
					public static APP_BUILD: string = "app_build";
					public static APP_PERMISSIONS: string = "permissions";
					public static IN_FOREGROUND: string = "in_foreground";
					public static VIEW_NAMES: string = "view_names";
					public static START_TYPE: string = "start_type";
					public static IS_SPLIT_APKS: string = "is_split_apks";
					public static SPLIT_NAMES: string = "split_names";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class ArtContext implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.ArtContext>;
				public static TYPE: string = "art";
				public getGcTotalCount(): java.lang.Long;
				public setGcBlockingCount(gcBlockingCount: java.lang.Long): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getFreeMemory(): java.lang.Long;
				public getFreeMemoryUntilOome(): java.lang.Long;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setGcTotalCount(gcTotalCount: java.lang.Long): void;
				public constructor();
				public getGcBlockingTime(): java.lang.Double;
				public setGcPreOomeCount(gcPreOomeCount: java.lang.Long): void;
				public getGcBlockingCount(): java.lang.Long;
				public getFreeMemoryUntilGc(): java.lang.Long;
				public setTotalMemory(totalMemory: java.lang.Long): void;
				public getGcWaitingTime(): java.lang.Double;
				public hashCode(): number;
				public getGcTotalTime(): java.lang.Double;
				public equals(o: any): boolean;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setFreeMemory(freeMemory: java.lang.Long): void;
				public getMaxMemory(): java.lang.Long;
				public setFreeMemoryUntilOome(freeMemoryUntilOome: java.lang.Long): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setGcTotalTime(gcTotalTime: java.lang.Double): void;
				public setGcBlockingTime(gcBlockingTime: java.lang.Double): void;
				public setGcWaitingTime(gcWaitingTime: java.lang.Double): void;
				public getGcPreOomeCount(): java.lang.Long;
				public setFreeMemoryUntilGc(freeMemoryUntilGc: java.lang.Long): void;
				public getTotalMemory(): java.lang.Long;
				public setMaxMemory(maxMemory: java.lang.Long): void;
			}
			export module ArtContext {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ArtContext> {
					public static class: java.lang.Class<io.sentry.protocol.ArtContext.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.ArtContext;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.ArtContext.JsonKeys>;
					public static GC_TOTAL_COUNT: string = "gc.total_count";
					public static GC_TOTAL_TIME: string = "gc.total_time";
					public static GC_BLOCKING_COUNT: string = "gc.blocking_count";
					public static GC_BLOCKING_TIME: string = "gc.blocking_time";
					public static GC_PRE_OOME_COUNT: string = "gc.pre_oome_count";
					public static GC_WAITING_TIME: string = "gc.waiting_time";
					public static FREE_MEMORY: string = "memory.free";
					public static FREE_MEMORY_UNTIL_GC: string = "memory.free_until_gc";
					public static FREE_MEMORY_UNTIL_OOME: string = "memory.free_until_oome";
					public static TOTAL_MEMORY: string = "memory.total";
					public static MAX_MEMORY: string = "memory.max";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Browser implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Browser>;
				public static TYPE: string = "browser";
				public getVersion(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public setName(name: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setVersion(version: string): void;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
			}
			export module Browser {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Browser> {
					public static class: java.lang.Class<io.sentry.protocol.Browser.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.Browser;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Browser.JsonKeys>;
					public static NAME: string = "name";
					public static VERSION: string = "version";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Contexts extends io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Contexts>;
				public static REPLAY_ID: string = "replay_id";
				public responseLock: io.sentry.util.AutoClosableReentrantLock;
				public getFeatureFlags(): io.sentry.protocol.FeatureFlags;
				public setDevice(device: io.sentry.protocol.Device): void;
				public containsKey(key: any): boolean;
				public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
				public setRuntime(runtime: io.sentry.protocol.SentryRuntime): void;
				public setResponse(this_: io.sentry.protocol.Response): void;
				public setOperatingSystem(operatingSystem: io.sentry.protocol.OperatingSystem): void;
				public getProfile(): io.sentry.ProfileContext;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getRuntime(): io.sentry.protocol.SentryRuntime;
				public getGpu(): io.sentry.protocol.Gpu;
				public getTrace(): io.sentry.SpanContext;
				public keys(): java.util.Enumeration<string>;
				public put(key: string, value: any): any;
				public getApp(): io.sentry.protocol.App;
				public getSize(): number;
				public hashCode(): number;
				public getFeedback(): io.sentry.protocol.Feedback;
				public setArt(art: io.sentry.protocol.ArtContext): void;
				public isEmpty(): boolean;
				public getSpring(): io.sentry.protocol.Spring;
				public setSpring(spring: io.sentry.protocol.Spring): void;
				public constructor(entry: io.sentry.protocol.Contexts);
				public set(key: string, value: any): any;
				public getArt(): io.sentry.protocol.ArtContext;
				public putAll(contexts: io.sentry.protocol.Contexts): void;
				public getDevice(): io.sentry.protocol.Device;
				public remove(key: any): any;
				public get(key: any): any;
				public putAll(this_: java.util.Map<any,any>): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setGpu(gpu: io.sentry.protocol.Gpu): void;
				public getResponse(): io.sentry.protocol.Response;
				public size(): number;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
				public equals(this_: any): boolean;
				public setBrowser(browser: io.sentry.protocol.Browser): void;
				public withResponse(response: io.sentry.util.HintUtils.SentryConsumer<io.sentry.protocol.Response>): void;
				public setFeedback(feedback: io.sentry.protocol.Feedback): void;
				public setTrace(traceContext: io.sentry.SpanContext): void;
				public setApp(app: io.sentry.protocol.App): void;
				public getBrowser(): io.sentry.protocol.Browser;
				public setProfile(profileContext: io.sentry.ProfileContext): void;
				public setFeatureFlags(featureFlags: io.sentry.protocol.FeatureFlags): void;
			}
			export module Contexts {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Contexts> {
					public static class: java.lang.Class<io.sentry.protocol.Contexts.Deserializer>;
					public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.protocol.Contexts;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugImage implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.DebugImage>;
				public static PROGUARD: string = "proguard";
				public static JVM: string = "jvm";
				public setArch(arch: string): void;
				public setImageSize(imageSize: java.lang.Long): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setImageAddr(imageAddr: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getCodeFile(): string;
				public setCodeFile(codeFile: string): void;
				public getUuid(): string;
				public getType(): string;
				public getCodeId(): string;
				public setDebugId(debugId: string): void;
				public getDebugFile(): string;
				public getDebugId(): string;
				public getImageSize(): java.lang.Long;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getArch(): string;
				public setDebugFile(debugFile: string): void;
				public setImageSize(imageSize: number): void;
				public setType(type: string): void;
				public getImageAddr(): string;
				public setUuid(uuid: string): void;
				public setCodeId(codeId: string): void;
			}
			export module DebugImage {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugImage> {
					public static class: java.lang.Class<io.sentry.protocol.DebugImage.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.DebugImage;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.DebugImage.JsonKeys>;
					public static UUID: string = "uuid";
					public static TYPE: string = "type";
					public static DEBUG_ID: string = "debug_id";
					public static DEBUG_FILE: string = "debug_file";
					public static CODE_ID: string = "code_id";
					public static CODE_FILE: string = "code_file";
					public static IMAGE_ADDR: string = "image_addr";
					public static IMAGE_SIZE: string = "image_size";
					public static ARCH: string = "arch";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugMeta implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.DebugMeta>;
				public getImages(): java.util.List<io.sentry.protocol.DebugImage>;
				public getSdkInfo(): io.sentry.protocol.SdkInfo;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setSdkInfo(sdkInfo: io.sentry.protocol.SdkInfo): void;
				public getUnknown(): java.util.Map<string,any>;
				public static buildDebugMeta(eventDebugMeta: io.sentry.protocol.DebugMeta, options: io.sentry.SentryOptions): io.sentry.protocol.DebugMeta;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setImages(images: java.util.List<io.sentry.protocol.DebugImage>): void;
				public constructor();
			}
			export module DebugMeta {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugMeta> {
					public static class: java.lang.Class<io.sentry.protocol.DebugMeta.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.DebugMeta;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.DebugMeta.JsonKeys>;
					public static SDK_INFO: string = "sdk_info";
					public static IMAGES: string = "images";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Device implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Device>;
				public static TYPE: string = "device";
				public getId(): string;
				public setOnline(online: java.lang.Boolean): void;
				public getFreeMemory(): java.lang.Long;
				public setProcessorFrequency(processorFrequency: java.lang.Double): void;
				public setUsableMemory(usableMemory: java.lang.Long): void;
				public getExternalStorageSize(): java.lang.Long;
				public getBrand(): string;
				public setProcessorCount(processorCount: java.lang.Integer): void;
				public setBatteryLevel(batteryLevel: java.lang.Float): void;
				public constructor();
				public isOnline(): java.lang.Boolean;
				public hashCode(): number;
				public getScreenWidthPixels(): java.lang.Integer;
				public getStorageSize(): java.lang.Long;
				public getTimezone(): java.util.TimeZone;
				public setScreenHeightPixels(screenHeightPixels: java.lang.Integer): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getCpuDescription(): string;
				public getMemorySize(): java.lang.Long;
				public setLocale(locale: string): void;
				public setCpuDescription(cpuDescription: string): void;
				public setId(id: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setBootTime(bootTime: java.util.Date): void;
				public setModelId(modelId: string): void;
				public getArchs(): androidNative.Array<string>;
				public getChipset(): string;
				public getLocale(): string;
				public getBootTime(): java.util.Date;
				public setScreenWidthPixels(screenWidthPixels: java.lang.Integer): void;
				public setBatteryTemperature(batteryTemperature: java.lang.Float): void;
				public setScreenDpi(screenDpi: java.lang.Integer): void;
				public setSimulator(simulator: java.lang.Boolean): void;
				public isLowMemory(): java.lang.Boolean;
				public setScreenDensity(screenDensity: java.lang.Float): void;
				public setExternalStorageSize(externalStorageSize: java.lang.Long): void;
				public getScreenDpi(): java.lang.Integer;
				public setCharging(charging: java.lang.Boolean): void;
				public setMemorySize(memorySize: java.lang.Long): void;
				public setFreeStorage(freeStorage: java.lang.Long): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getModelId(): string;
				public setName(name: string): void;
				public getScreenDensity(): java.lang.Float;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getFamily(): string;
				public isCharging(): java.lang.Boolean;
				public getProcessorCount(): java.lang.Integer;
				public getProcessorFrequency(): java.lang.Double;
				public setFamily(family: string): void;
				public setOrientation(orientation: io.sentry.protocol.Device.DeviceOrientation): void;
				public setChipset(chipset: string): void;
				public getExternalFreeStorage(): java.lang.Long;
				public equals(o: any): boolean;
				public getFreeStorage(): java.lang.Long;
				public getScreenHeightPixels(): java.lang.Integer;
				public setFreeMemory(freeMemory: java.lang.Long): void;
				public getOrientation(): io.sentry.protocol.Device.DeviceOrientation;
				public getBatteryLevel(): java.lang.Float;
				public setManufacturer(manufacturer: string): void;
				public setArchs(archs: androidNative.Array<string>): void;
				public setConnectionType(connectionType: string): void;
				public setBrand(brand: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getModel(): string;
				public getBatteryTemperature(): java.lang.Float;
				public setTimezone(timezone: java.util.TimeZone): void;
				public getConnectionType(): string;
				public getManufacturer(): string;
				public setModel(model: string): void;
				public isSimulator(): java.lang.Boolean;
				public getUsableMemory(): java.lang.Long;
				public setLowMemory(lowMemory: java.lang.Boolean): void;
				public setStorageSize(storageSize: java.lang.Long): void;
				public setExternalFreeStorage(externalFreeStorage: java.lang.Long): void;
			}
			export module Device {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device> {
					public static class: java.lang.Class<io.sentry.protocol.Device.Deserializer>;
					public constructor();
					public deserialize(archsList: io.sentry.ObjectReader, nextName: io.sentry.ILogger): io.sentry.protocol.Device;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class DeviceOrientation extends io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation>;
					public static PORTRAIT: io.sentry.protocol.Device.DeviceOrientation;
					public static LANDSCAPE: io.sentry.protocol.Device.DeviceOrientation;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public static values(): androidNative.Array<io.sentry.protocol.Device.DeviceOrientation>;
					public static valueOf(name: string): io.sentry.protocol.Device.DeviceOrientation;
					public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				}
				export module DeviceOrientation {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device.DeviceOrientation> {
						public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation.Deserializer>;
						public constructor();
						public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.protocol.Device.DeviceOrientation;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Device.JsonKeys>;
					public static NAME: string = "name";
					public static MANUFACTURER: string = "manufacturer";
					public static BRAND: string = "brand";
					public static FAMILY: string = "family";
					public static MODEL: string = "model";
					public static MODEL_ID: string = "model_id";
					public static ARCHS: string = "archs";
					public static BATTERY_LEVEL: string = "battery_level";
					public static CHARGING: string = "charging";
					public static ONLINE: string = "online";
					public static ORIENTATION: string = "orientation";
					public static SIMULATOR: string = "simulator";
					public static MEMORY_SIZE: string = "memory_size";
					public static FREE_MEMORY: string = "free_memory";
					public static USABLE_MEMORY: string = "usable_memory";
					public static LOW_MEMORY: string = "low_memory";
					public static STORAGE_SIZE: string = "storage_size";
					public static FREE_STORAGE: string = "free_storage";
					public static EXTERNAL_STORAGE_SIZE: string = "external_storage_size";
					public static EXTERNAL_FREE_STORAGE: string = "external_free_storage";
					public static SCREEN_WIDTH_PIXELS: string = "screen_width_pixels";
					public static SCREEN_HEIGHT_PIXELS: string = "screen_height_pixels";
					public static SCREEN_DENSITY: string = "screen_density";
					public static SCREEN_DPI: string = "screen_dpi";
					public static BOOT_TIME: string = "boot_time";
					public static TIMEZONE: string = "timezone";
					public static ID: string = "id";
					public static CONNECTION_TYPE: string = "connection_type";
					public static BATTERY_TEMPERATURE: string = "battery_temperature";
					public static LOCALE: string = "locale";
					public static PROCESSOR_COUNT: string = "processor_count";
					public static CPU_DESCRIPTION: string = "cpu_description";
					public static PROCESSOR_FREQUENCY: string = "processor_frequency";
					public static CHIPSET: string = "chipset";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class FeatureFlag implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.FeatureFlag>;
				public static DATA_PREFIX: string = "flag.evaluation.";
				public setFlag(flag: string): void;
				public getResult(): java.lang.Boolean;
				public setResult(result: java.lang.Boolean): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getFlag(): string;
				public hashCode(): number;
				public getUnknown(): java.util.Map<string,any>;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor(flag: string, result: boolean);
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module FeatureFlag {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.FeatureFlag> {
					public static class: java.lang.Class<io.sentry.protocol.FeatureFlag.Deserializer>;
					public constructor();
					public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.protocol.FeatureFlag;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.FeatureFlag.JsonKeys>;
					public static FLAG: string = "flag";
					public static RESULT: string = "result";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class FeatureFlags implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.FeatureFlags>;
				public static TYPE: string = "flags";
				public setValues(values: java.util.List<io.sentry.protocol.FeatureFlag>): void;
				public constructor(values: java.util.List<io.sentry.protocol.FeatureFlag>);
				public getValues(): java.util.List<io.sentry.protocol.FeatureFlag>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public getUnknown(): java.util.Map<string,any>;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
			}
			export module FeatureFlags {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.FeatureFlags> {
					public static class: java.lang.Class<io.sentry.protocol.FeatureFlags.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.FeatureFlags;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.FeatureFlags.JsonKeys>;
					public static VALUES: string = "values";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Feedback implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Feedback>;
				public static TYPE: string = "feedback";
				public setContactEmail(contactEmail: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getReplayId(): io.sentry.protocol.SentryId;
				public setName(name: string): void;
				public constructor(message: string);
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public getUrl(): string;
				public setMessage(message: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setReplayId(replayId: io.sentry.protocol.SentryId): void;
				public toString(): string;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUrl(url: string): void;
				public setAssociatedEventId(associatedEventId: io.sentry.protocol.SentryId): void;
				public constructor(feedback: io.sentry.protocol.Feedback);
				public getContactEmail(): string;
				public hashCode(): number;
				public getAssociatedEventId(): io.sentry.protocol.SentryId;
				public equals(o: any): boolean;
				public getMessage(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module Feedback {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Feedback> {
					public static class: java.lang.Class<io.sentry.protocol.Feedback.Deserializer>;
					public constructor();
					public deserialize(errorMessage: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.protocol.Feedback;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Feedback.JsonKeys>;
					public static MESSAGE: string = "message";
					public static CONTACT_EMAIL: string = "contact_email";
					public static NAME: string = "name";
					public static ASSOCIATED_EVENT_ID: string = "associated_event_id";
					public static REPLAY_ID: string = "replay_id";
					public static URL: string = "url";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Geo implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Geo>;
				public constructor(geo: io.sentry.protocol.Geo);
				public setCity(city: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setCountryCode(countryCode: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setRegion(region: string): void;
				public getCity(): string;
				public static fromMap(value: java.util.Map<string,any>): io.sentry.protocol.Geo;
				public getCountryCode(): string;
				public getRegion(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module Geo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Geo> {
					public static class: java.lang.Class<io.sentry.protocol.Geo.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.Geo;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Geo.JsonKeys>;
					public static CITY: string = "city";
					public static COUNTRY_CODE: string = "country_code";
					public static REGION: string = "region";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Gpu implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Gpu>;
				public static TYPE: string = "gpu";
				public setNpotSupport(npotSupport: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setName(name: string): void;
				public isMultiThreadedRendering(): java.lang.Boolean;
				public setVersion(version: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getId(): java.lang.Integer;
				public constructor();
				public getApiType(): string;
				public hashCode(): number;
				public equals(o: any): boolean;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setApiType(apiType: string): void;
				public setVendorId(vendorId: string): void;
				public setMultiThreadedRendering(multiThreadedRendering: java.lang.Boolean): void;
				public getVendorName(): string;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getVersion(): string;
				public setMemorySize(memorySize: java.lang.Integer): void;
				public setId(id: java.lang.Integer): void;
				public setVendorName(vendorName: string): void;
				public getMemorySize(): java.lang.Integer;
				public getVendorId(): string;
				public getNpotSupport(): string;
			}
			export module Gpu {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Gpu> {
					public static class: java.lang.Class<io.sentry.protocol.Gpu.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.Gpu;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Gpu.JsonKeys>;
					public static NAME: string = "name";
					public static ID: string = "id";
					public static VENDOR_ID: string = "vendor_id";
					public static VENDOR_NAME: string = "vendor_name";
					public static MEMORY_SIZE: string = "memory_size";
					public static API_TYPE: string = "api_type";
					public static MULTI_THREADED_RENDERING: string = "multi_threaded_rendering";
					public static VERSION: string = "version";
					public static NPOT_SUPPORT: string = "npot_support";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class MeasurementValue implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.MeasurementValue>;
				public static KEY_APP_START_COLD: string = "app_start_cold";
				public static KEY_APP_START_WARM: string = "app_start_warm";
				public static KEY_FRAMES_TOTAL: string = "frames_total";
				public static KEY_FRAMES_SLOW: string = "frames_slow";
				public static KEY_FRAMES_FROZEN: string = "frames_frozen";
				public static KEY_FRAMES_DELAY: string = "frames_delay";
				public static KEY_TIME_TO_INITIAL_DISPLAY: string = "time_to_initial_display";
				public static KEY_TIME_TO_FULL_DISPLAY: string = "time_to_full_display";
				public getValue(): java.lang.Number;
				public constructor(value: java.lang.Number, unit: string);
				public getUnit(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(value: java.lang.Number, unit: string, unknown: java.util.Map<string,any>);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module MeasurementValue {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.MeasurementValue> {
					public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.Deserializer>;
					public deserialize(message: io.sentry.ObjectReader, ex: io.sentry.ILogger): io.sentry.protocol.MeasurementValue;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.JsonKeys>;
					public static VALUE: string = "value";
					public static UNIT: string = "unit";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Mechanism implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Mechanism>;
				public constructor(thread: java.lang.Thread);
				public isHandled(): java.lang.Boolean;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getHelpLink(): string;
				public getDescription(): string;
				public getMeta(): java.util.Map<string,any>;
				public setSynthetic(synthetic: java.lang.Boolean): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getParentId(): java.lang.Integer;
				public constructor();
				public setData(data: java.util.Map<string,any>): void;
				public setExceptionGroup(exceptionGroup: java.lang.Boolean): void;
				public setHandled(handled: java.lang.Boolean): void;
				public getSynthetic(): java.lang.Boolean;
				public setMeta(meta: java.util.Map<string,any>): void;
				public getExceptionId(): java.lang.Integer;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public isExceptionGroup(): java.lang.Boolean;
				public getType(): string;
				public setExceptionId(exceptionId: java.lang.Integer): void;
				public getUnknown(): java.util.Map<string,any>;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setParentId(parentId: java.lang.Integer): void;
				public setDescription(description: string): void;
				public setType(type: string): void;
				public setHelpLink(helpLink: string): void;
			}
			export module Mechanism {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Mechanism> {
					public static class: java.lang.Class<io.sentry.protocol.Mechanism.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.Mechanism;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Mechanism.JsonKeys>;
					public static TYPE: string = "type";
					public static DESCRIPTION: string = "description";
					public static HELP_LINK: string = "help_link";
					public static HANDLED: string = "handled";
					public static META: string = "meta";
					public static DATA: string = "data";
					public static SYNTHETIC: string = "synthetic";
					public static EXCEPTION_ID: string = "exception_id";
					public static PARENT_ID: string = "parent_id";
					public static IS_EXCEPTION_GROUP: string = "is_exception_group";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Message implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Message>;
				public getFormatted(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setFormatted(formatted: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public setMessage(message: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getMessage(): string;
				public getParams(): java.util.List<string>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
				public setParams(params: java.util.List<string>): void;
			}
			export module Message {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Message> {
					public static class: java.lang.Class<io.sentry.protocol.Message.Deserializer>;
					public constructor();
					public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.protocol.Message;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Message.JsonKeys>;
					public static FORMATTED: string = "formatted";
					public static MESSAGE: string = "message";
					public static PARAMS: string = "params";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class OperatingSystem implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.OperatingSystem>;
				public static TYPE: string = "os";
				public getRawDescription(): string;
				public setKernelVersion(kernelVersion: string): void;
				public isRooted(): java.lang.Boolean;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getBuild(): string;
				public setName(name: string): void;
				public setRooted(rooted: java.lang.Boolean): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setVersion(version: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getVersion(): string;
				public getKernelVersion(): string;
				public hashCode(): number;
				public setBuild(build: string): void;
				public equals(o: any): boolean;
				public setRawDescription(rawDescription: string): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module OperatingSystem {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.OperatingSystem> {
					public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.OperatingSystem;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.JsonKeys>;
					public static NAME: string = "name";
					public static VERSION: string = "version";
					public static RAW_DESCRIPTION: string = "raw_description";
					public static BUILD: string = "build";
					public static KERNEL_VERSION: string = "kernel_version";
					public static ROOTED: string = "rooted";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Request implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Request>;
				public setEnvs(env: java.util.Map<string,string>): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUrl(url: string): void;
				public getData(): any;
				public setHeaders(headers: java.util.Map<string,string>): void;
				public constructor();
				public getEnvs(): java.util.Map<string,string>;
				public hashCode(): number;
				public setBodySize(bodySize: java.lang.Long): void;
				public equals(o: any): boolean;
				public setApiTarget(apiTarget: string): void;
				public setMethod(method: string): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getCookies(): string;
				public getBodySize(): java.lang.Long;
				public setOthers(other: java.util.Map<string,string>): void;
				public getOthers(): java.util.Map<string,string>;
				public setQueryString(queryString: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getUrl(): string;
				public getApiTarget(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setCookies(cookies: string): void;
				public getMethod(): string;
				public getFragment(): string;
				public constructor(request: io.sentry.protocol.Request);
				public setFragment(fragment: string): void;
				public getHeaders(): java.util.Map<string,string>;
				public getQueryString(): string;
				public setData(data: any): void;
			}
			export module Request {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Request> {
					public static class: java.lang.Class<io.sentry.protocol.Request.Deserializer>;
					public deserialize(deserializedEnv: io.sentry.ObjectReader, deserializedOther: io.sentry.ILogger): io.sentry.protocol.Request;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Request.JsonKeys>;
					public static URL: string = "url";
					public static METHOD: string = "method";
					public static QUERY_STRING: string = "query_string";
					public static DATA: string = "data";
					public static COOKIES: string = "cookies";
					public static HEADERS: string = "headers";
					public static ENV: string = "env";
					public static OTHER: string = "other";
					public static FRAGMENT: string = "fragment";
					public static BODY_SIZE: string = "body_size";
					public static API_TARGET: string = "api_target";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Response implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Response>;
				public static TYPE: string = "response";
				public getCookies(): string;
				public getStatusCode(): java.lang.Integer;
				public getBodySize(): java.lang.Long;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor(response: io.sentry.protocol.Response);
				public setStatusCode(statusCode: java.lang.Integer): void;
				public setHeaders(headers: java.util.Map<string,string>): void;
				public getData(): any;
				public constructor();
				public setCookies(cookies: string): void;
				public getHeaders(): java.util.Map<string,string>;
				public setBodySize(bodySize: java.lang.Long): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setData(data: any): void;
			}
			export module Response {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Response> {
					public static class: java.lang.Class<io.sentry.protocol.Response.Deserializer>;
					public constructor();
					public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.protocol.Response;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Response.JsonKeys>;
					public static COOKIES: string = "cookies";
					public static HEADERS: string = "headers";
					public static STATUS_CODE: string = "status_code";
					public static BODY_SIZE: string = "body_size";
					public static DATA: string = "data";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkInfo implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SdkInfo>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getSdkName(): string;
				public setSdkName(sdkName: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public setVersionMinor(versionMinor: java.lang.Integer): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getVersionMajor(): java.lang.Integer;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setVersionMajor(versionMajor: java.lang.Integer): void;
				public constructor();
				public setVersionPatchlevel(versionPatchlevel: java.lang.Integer): void;
				public getVersionMinor(): java.lang.Integer;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getVersionPatchlevel(): java.lang.Integer;
			}
			export module SdkInfo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkInfo> {
					public static class: java.lang.Class<io.sentry.protocol.SdkInfo.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.SdkInfo;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SdkInfo.JsonKeys>;
					public static SDK_NAME: string = "sdk_name";
					public static VERSION_MAJOR: string = "version_major";
					public static VERSION_MINOR: string = "version_minor";
					public static VERSION_PATCHLEVEL: string = "version_patchlevel";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkVersion implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SdkVersion>;
				public getIntegrationSet(): java.util.Set<string>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(name: string, version: string);
				public setName(name: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public setVersion(version: string): void;
				public getName(): string;
				public addIntegration(integration: string): void;
				public static updateSdkVersion(sdk: io.sentry.protocol.SdkVersion, name: string, version: string): io.sentry.protocol.SdkVersion;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public addPackage(name: string, version: string): void;
				public getVersion(): string;
				public getPackageSet(): java.util.Set<io.sentry.protocol.SentryPackage>;
				public hashCode(): number;
				public equals(o: any): boolean;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module SdkVersion {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkVersion> {
					public static class: java.lang.Class<io.sentry.protocol.SdkVersion.Deserializer>;
					public constructor();
					public deserialize(deserializedIntegrations: io.sentry.ObjectReader, nextName: io.sentry.ILogger): io.sentry.protocol.SdkVersion;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SdkVersion.JsonKeys>;
					public static NAME: string = "name";
					public static VERSION: string = "version";
					public static PACKAGES: string = "packages";
					public static INTEGRATIONS: string = "integrations";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryException implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryException>;
				public getType(): string;
				public getModule(): string;
				public getMechanism(): io.sentry.protocol.Mechanism;
				public setMechanism(mechanism: io.sentry.protocol.Mechanism): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getValue(): string;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setModule(module: string): void;
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public setStacktrace(stacktrace: io.sentry.protocol.SentryStackTrace): void;
				public setType(type: string): void;
				public setThreadId(threadId: java.lang.Long): void;
				public getThreadId(): java.lang.Long;
				public setValue(value: string): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module SentryException {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryException> {
					public static class: java.lang.Class<io.sentry.protocol.SentryException.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.SentryException;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryException.JsonKeys>;
					public static TYPE: string = "type";
					public static VALUE: string = "value";
					public static MODULE: string = "module";
					public static THREAD_ID: string = "thread_id";
					public static STACKTRACE: string = "stacktrace";
					public static MECHANISM: string = "mechanism";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryId extends io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryId>;
				public static EMPTY_ID: io.sentry.protocol.SentryId;
				public constructor(sentryIdString: string);
				public hashCode(): number;
				public constructor(uuid: java.util.UUID);
				public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public toString(): string;
				public constructor();
			}
			export module SentryId {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryId> {
					public static class: java.lang.Class<io.sentry.protocol.SentryId.Deserializer>;
					public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.protocol.SentryId;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryPackage implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryPackage>;
				public getVersion(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public constructor(name: string, version: string);
				public setName(name: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setVersion(version: string): void;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module SentryPackage {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryPackage> {
					public static class: java.lang.Class<io.sentry.protocol.SentryPackage.Deserializer>;
					public deserialize(message: io.sentry.ObjectReader, exception: io.sentry.ILogger): io.sentry.protocol.SentryPackage;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryPackage.JsonKeys>;
					public static NAME: string = "name";
					public static VERSION: string = "version";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryRuntime implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryRuntime>;
				public static TYPE: string = "runtime";
				public getVersion(): string;
				public getRawDescription(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setName(name: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setVersion(version: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setRawDescription(rawDescription: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
			}
			export module SentryRuntime {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryRuntime> {
					public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.SentryRuntime;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.JsonKeys>;
					public static NAME: string = "name";
					public static VERSION: string = "version";
					public static RAW_DESCRIPTION: string = "raw_description";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentrySpan implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentrySpan>;
				public constructor(startTimestamp: java.lang.Double, timestamp: java.lang.Double, traceId: io.sentry.protocol.SentryId, spanId: io.sentry.SpanId, parentSpanId: io.sentry.SpanId, op: string, description: string, status: io.sentry.SpanStatus, origin: string, tags: java.util.Map<string,string>, measurements: java.util.Map<string,io.sentry.protocol.MeasurementValue>, data: java.util.Map<string,any>);
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(span: io.sentry.Span);
				public getUnknown(): java.util.Map<string,any>;
				public getDescription(): string;
				public isFinished(): boolean;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getMeasurements(): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
				public getSpanId(): io.sentry.SpanId;
				public getTags(): java.util.Map<string,string>;
				public setData(data: java.util.Map<string,any>): void;
				public getOp(): string;
				public getStartTimestamp(): java.lang.Double;
				public getTraceId(): io.sentry.protocol.SentryId;
				public getStatus(): io.sentry.SpanStatus;
				public getParentSpanId(): io.sentry.SpanId;
				public constructor(this_: io.sentry.Span, span: java.util.Map<string,any>);
				public getTimestamp(): java.lang.Double;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getOrigin(): string;
			}
			export module SentrySpan {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentrySpan> {
					public static class: java.lang.Class<io.sentry.protocol.SentrySpan.Deserializer>;
					public constructor();
					public deserialize(e: io.sentry.ObjectReader, date: io.sentry.ILogger): io.sentry.protocol.SentrySpan;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentrySpan.JsonKeys>;
					public static START_TIMESTAMP: string = "start_timestamp";
					public static TIMESTAMP: string = "timestamp";
					public static TRACE_ID: string = "trace_id";
					public static SPAN_ID: string = "span_id";
					public static PARENT_SPAN_ID: string = "parent_span_id";
					public static OP: string = "op";
					public static DESCRIPTION: string = "description";
					public static STATUS: string = "status";
					public static ORIGIN: string = "origin";
					public static TAGS: string = "tags";
					public static MEASUREMENTS: string = "measurements";
					public static DATA: string = "data";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackFrame implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame>;
				public setFunction(function_: string): void;
				public getAbsPath(): string;
				public setInApp(inApp: java.lang.Boolean): void;
				public setPlatform(platform: string): void;
				public setLineno(lineno: java.lang.Integer): void;
				public constructor();
				public setContextLine(contextLine: string): void;
				public hashCode(): number;
				public setSymbol(symbol: string): void;
				public getFilename(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setVars(vars: java.util.Map<string,any>): void;
				public setPreContext(preContext: java.util.List<string>): void;
				public getLineno(): java.lang.Integer;
				public getFramesOmitted(): java.util.List<java.lang.Integer>;
				public getLock(): io.sentry.SentryLockReason;
				public getUnknown(): java.util.Map<string,any>;
				public getPostContext(): java.util.List<string>;
				public setInstructionAddr(instructionAddr: string): void;
				public setFramesOmitted(framesOmitted: java.util.List<java.lang.Integer>): void;
				public getInstructionAddr(): string;
				public isNative(): java.lang.Boolean;
				public getAddrMode(): string;
				public getSymbol(): string;
				public getModule(): string;
				public setRawFunction(rawFunction: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getFunction(): string;
				public setImageAddr(imageAddr: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getPreContext(): java.util.List<string>;
				public getVars(): java.util.Map<string,any>;
				public setPostContext(postContext: java.util.List<string>): void;
				public setAbsPath(absPath: string): void;
				public equals(o: any): boolean;
				public setNative(_native: java.lang.Boolean): void;
				public setFilename(filename: string): void;
				public setPackage(_package: string): void;
				public getPackage(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getContextLine(): string;
				public getSymbolAddr(): string;
				public setModule(module: string): void;
				public getRawFunction(): string;
				public setSymbolAddr(symbolAddr: string): void;
				public setAddrMode(addrMode: string): void;
				public getPlatform(): string;
				public setLock(lock: io.sentry.SentryLockReason): void;
				public setColno(colno: java.lang.Integer): void;
				public getImageAddr(): string;
				public getColno(): java.lang.Integer;
				public isInApp(): java.lang.Boolean;
			}
			export module SentryStackFrame {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackFrame> {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.SentryStackFrame;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.JsonKeys>;
					public static FILENAME: string = "filename";
					public static FUNCTION: string = "function";
					public static MODULE: string = "module";
					public static LINENO: string = "lineno";
					public static COLNO: string = "colno";
					public static ABS_PATH: string = "abs_path";
					public static CONTEXT_LINE: string = "context_line";
					public static IN_APP: string = "in_app";
					public static PACKAGE: string = "package";
					public static NATIVE: string = "native";
					public static PLATFORM: string = "platform";
					public static IMAGE_ADDR: string = "image_addr";
					public static SYMBOL_ADDR: string = "symbol_addr";
					public static INSTRUCTION_ADDR: string = "instruction_addr";
					public static ADDR_MODE: string = "addr_mode";
					public static RAW_FUNCTION: string = "raw_function";
					public static SYMBOL: string = "symbol";
					public static LOCK: string = "lock";
					public static PRE_CONTEXT: string = "pre_context";
					public static POST_CONTEXT: string = "post_context";
					public static VARS: string = "vars";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackTrace implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace>;
				public setSnapshot(snapshot: java.lang.Boolean): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getInstructionAddressAdjustment(): io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
				public constructor();
				public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
				public setInstructionAddressAdjustment(instructionAddressAdjustment: io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment): void;
				public setRegisters(registers: java.util.Map<string,string>): void;
				public getRegisters(): java.util.Map<string,string>;
				public getSnapshot(): java.lang.Boolean;
				public setFrames(frames: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor(frames: java.util.List<io.sentry.protocol.SentryStackFrame>);
			}
			export module SentryStackTrace {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackTrace> {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.SentryStackTrace;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class InstructionAddressAdjustment extends io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment>;
					public static AUTO: io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
					public static ALL: io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
					public static ALL_BUT_FIRST: io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
					public static NONE: io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
					public static valueOf(name: string): io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
					public static values(): androidNative.Array<io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment>;
				}
				export module InstructionAddressAdjustment {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment> {
						public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment.Deserializer>;
						public constructor();
						public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.protocol.SentryStackTrace.InstructionAddressAdjustment;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.JsonKeys>;
					public static FRAMES: string = "frames";
					public static REGISTERS: string = "registers";
					public static SNAPSHOT: string = "snapshot";
					public static INSTRUCTION_ADDRESS_ADJUSTMENT: string = "instruction_addr_adjustment";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryThread implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryThread>;
				public setPriority(priority: java.lang.Integer): void;
				public getPriority(): java.lang.Integer;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setName(name: string): void;
				public getHeldLocks(): java.util.Map<string,io.sentry.SentryLockReason>;
				public isCurrent(): java.lang.Boolean;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public setDaemon(daemon: java.lang.Boolean): void;
				public getState(): string;
				public getId(): java.lang.Long;
				public setCurrent(current: java.lang.Boolean): void;
				public setCrashed(crashed: java.lang.Boolean): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setId(id: java.lang.Long): void;
				public isCrashed(): java.lang.Boolean;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setHeldLocks(heldLocks: java.util.Map<string,io.sentry.SentryLockReason>): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setState(state: string): void;
				public setStacktrace(stacktrace: io.sentry.protocol.SentryStackTrace): void;
				public setMain(main: java.lang.Boolean): void;
				public isDaemon(): java.lang.Boolean;
				public isMain(): java.lang.Boolean;
			}
			export module SentryThread {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryThread> {
					public static class: java.lang.Class<io.sentry.protocol.SentryThread.Deserializer>;
					public constructor();
					public deserialize(nextName: io.sentry.ObjectReader, this_: io.sentry.ILogger): io.sentry.protocol.SentryThread;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryThread.JsonKeys>;
					public static ID: string = "id";
					public static PRIORITY: string = "priority";
					public static NAME: string = "name";
					public static STATE: string = "state";
					public static CRASHED: string = "crashed";
					public static CURRENT: string = "current";
					public static DAEMON: string = "daemon";
					public static MAIN: string = "main";
					public static STACKTRACE: string = "stacktrace";
					public static HELD_LOCKS: string = "held_locks";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryTransaction extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryTransaction>;
				public getType(): string;
				public constructor(tag: io.sentry.SentryTracer);
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(eventId: io.sentry.protocol.SentryId);
				public constructor(this_: string, transaction: java.lang.Double, startTimestamp: java.lang.Double, timestamp: java.util.List<io.sentry.protocol.SentrySpan>, spans: java.util.Map<string,io.sentry.protocol.MeasurementValue>, measurements: io.sentry.protocol.TransactionInfo);
				public getUnknown(): java.util.Map<string,any>;
				public isFinished(): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getSpans(): java.util.List<io.sentry.protocol.SentrySpan>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public getSamplingDecision(): io.sentry.TracesSamplingDecision;
				public getMeasurements(): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
				public constructor();
				public isSampled(): boolean;
				public getStartTimestamp(): java.lang.Double;
				public getStatus(): io.sentry.SpanStatus;
				public getTimestamp(): java.lang.Double;
				public getTransaction(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module SentryTransaction {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryTransaction> {
					public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.Deserializer>;
					public constructor();
					public deserialize(date: io.sentry.ObjectReader, e: io.sentry.ILogger): io.sentry.protocol.SentryTransaction;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.JsonKeys>;
					public static TRANSACTION: string = "transaction";
					public static START_TIMESTAMP: string = "start_timestamp";
					public static TIMESTAMP: string = "timestamp";
					public static SPANS: string = "spans";
					public static TYPE: string = "type";
					public static MEASUREMENTS: string = "measurements";
					public static TRANSACTION_INFO: string = "transaction_info";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Spring implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Spring>;
				public static TYPE: string = "spring";
				public getActiveProfiles(): androidNative.Array<string>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public constructor(spring: io.sentry.protocol.Spring);
				public setActiveProfiles(activeProfiles: androidNative.Array<string>): void;
				public getUnknown(): java.util.Map<string,any>;
				public equals(o: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor();
			}
			export module Spring {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Spring> {
					public static class: java.lang.Class<io.sentry.protocol.Spring.Deserializer>;
					public constructor();
					public deserialize(activeProfilesList: io.sentry.ObjectReader, nextName: io.sentry.ILogger): io.sentry.protocol.Spring;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.Spring.JsonKeys>;
					public static ACTIVE_PROFILES: string = "active_profiles";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class TransactionInfo implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.protocol.TransactionInfo>;
				public constructor(source: string);
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module TransactionInfo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.TransactionInfo> {
					public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.TransactionInfo;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.JsonKeys>;
					public static SOURCE: string = "source";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class TransactionNameSource {
				public static class: java.lang.Class<io.sentry.protocol.TransactionNameSource>;
				public static CUSTOM: io.sentry.protocol.TransactionNameSource;
				public static URL: io.sentry.protocol.TransactionNameSource;
				public static ROUTE: io.sentry.protocol.TransactionNameSource;
				public static VIEW: io.sentry.protocol.TransactionNameSource;
				public static COMPONENT: io.sentry.protocol.TransactionNameSource;
				public static TASK: io.sentry.protocol.TransactionNameSource;
				public apiName(): string;
				public static values(): androidNative.Array<io.sentry.protocol.TransactionNameSource>;
				public static valueOf(name: string): io.sentry.protocol.TransactionNameSource;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class User implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.User>;
				public getId(): string;
				public getEmail(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setEmail(email: string): void;
				public getIpAddress(): string;
				public getGeo(): io.sentry.protocol.Geo;
				public setId(id: string): void;
				public setUsername(username: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setIpAddress(ipAddress: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setGeo(geo: io.sentry.protocol.Geo): void;
				/** @deprecated */
				public setName(name: string): void;
				public constructor();
				public static fromMap(geoEntry: java.util.Map<string,any>, geoData: io.sentry.SentryOptions): io.sentry.protocol.User;
				public setData(data: java.util.Map<string,string>): void;
				public hashCode(): number;
				public getUsername(): string;
				public equals(o: any): boolean;
				/** @deprecated */
				public getName(): string;
				public getData(): java.util.Map<string,string>;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor(user: io.sentry.protocol.User);
			}
			export module User {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.User> {
					public static class: java.lang.Class<io.sentry.protocol.User.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.User;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.User.JsonKeys>;
					public static EMAIL: string = "email";
					public static ID: string = "id";
					public static USERNAME: string = "username";
					public static IP_ADDRESS: string = "ip_address";
					public static NAME: string = "name";
					public static GEO: string = "geo";
					public static DATA: string = "data";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class ViewHierarchy implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getRenderingSystem(): string;
				public getWindows(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor(renderingSystem: string, windows: java.util.List<io.sentry.protocol.ViewHierarchyNode>);
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module ViewHierarchy {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchy> {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.JsonKeys>;
					public static RENDERING_SYSTEM: string = "rendering_system";
					public static WINDOWS: string = "windows";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class ViewHierarchyNode implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode>;
				public getWidth(): java.lang.Double;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getHeight(): java.lang.Double;
				public getRenderingSystem(): string;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setRenderingSystem(renderingSystem: string): void;
				public setY(y: java.lang.Double): void;
				public constructor();
				public getVisibility(): string;
				public getChildren(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
				public setAlpha(alpha: java.lang.Double): void;
				public setIdentifier(identifier: string): void;
				public setVisibility(visibility: string): void;
				public setWidth(width: java.lang.Double): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getX(): java.lang.Double;
				public getType(): string;
				public setHeight(height: java.lang.Double): void;
				public getTag(): string;
				public getUnknown(): java.util.Map<string,any>;
				public setX(x: java.lang.Double): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTag(tag: string): void;
				public setType(type: string): void;
				public setChildren(children: java.util.List<io.sentry.protocol.ViewHierarchyNode>): void;
				public getAlpha(): java.lang.Double;
				public getIdentifier(): string;
				public getY(): java.lang.Double;
			}
			export module ViewHierarchyNode {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchyNode> {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.ViewHierarchyNode;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.JsonKeys>;
					public static RENDERING_SYSTEM: string = "rendering_system";
					public static TYPE: string = "type";
					public static IDENTIFIER: string = "identifier";
					public static TAG: string = "tag";
					public static WIDTH: string = "width";
					public static HEIGHT: string = "height";
					public static X: string = "x";
					public static Y: string = "y";
					public static VISIBILITY: string = "visibility";
					public static ALPHA: string = "alpha";
					public static CHILDREN: string = "children";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export module profiling {
				export class SentryProfile implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.profiling.SentryProfile>;
					public setStacks(stacks: java.util.List<java.util.List<java.lang.Integer>>): void;
					public getThreadMetadata(): java.util.Map<string,io.sentry.protocol.profiling.SentryThreadMetadata>;
					public setSamples(samples: java.util.List<io.sentry.protocol.profiling.SentrySample>): void;
					public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
					public setUnknown(param0: java.util.Map<string,any>): void;
					public setFrames(frames: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
					public setThreadMetadata(threadMetadata: java.util.Map<string,io.sentry.protocol.profiling.SentryThreadMetadata>): void;
					public getUnknown(): java.util.Map<string,any>;
					public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public constructor();
					public setUnknown(unknown: java.util.Map<string,any>): void;
					public getSamples(): java.util.List<io.sentry.protocol.profiling.SentrySample>;
					public getStacks(): java.util.List<java.util.List<java.lang.Integer>>;
				}
				export module SentryProfile {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.profiling.SentryProfile> {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentryProfile.Deserializer>;
						public deserialize(sentrySamples: io.sentry.ObjectReader, threadMetadata: io.sentry.ILogger): io.sentry.protocol.profiling.SentryProfile;
						public constructor();
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
					export class JsonKeys {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentryProfile.JsonKeys>;
						public static SAMPLES: string = "samples";
						public static STACKS: string = "stacks";
						public static FRAMES: string = "frames";
						public static THREAD_METADATA: string = "thread_metadata";
						public constructor();
					}
					export class NestedIntegerListDeserializer extends io.sentry.JsonDeserializer<java.util.List<java.util.List<java.lang.Integer>>> {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentryProfile.NestedIntegerListDeserializer>;
						public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): java.util.List<java.util.List<java.lang.Integer>>;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export module profiling {
				export class SentrySample implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.profiling.SentrySample>;
					public getThreadId(): string;
					public setStackId(stackId: number): void;
					public setThreadId(threadId: string): void;
					public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
					public setUnknown(param0: java.util.Map<string,any>): void;
					public setTimestamp(timestamp: number): void;
					public constructor(sample: io.sentry.protocol.profiling.SentrySample);
					public getUnknown(): java.util.Map<string,any>;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public constructor();
					public getTimestamp(): number;
					public setUnknown(unknown: java.util.Map<string,any>): void;
					public getStackId(): number;
				}
				export module SentrySample {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.profiling.SentrySample> {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentrySample.Deserializer>;
						public constructor();
						public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.profiling.SentrySample;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
					export class JsonKeys {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentrySample.JsonKeys>;
						public static TIMESTAMP: string = "timestamp";
						public static STACK_ID: string = "stack_id";
						public static THREAD_ID: string = "thread_id";
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export module profiling {
				export class SentryThreadMetadata implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.profiling.SentryThreadMetadata>;
					public getPriority(): number;
					public getUnknown(): java.util.Map<string,any>;
					public setName(name: string): void;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public constructor();
					public getName(): string;
					public setUnknown(unknown: java.util.Map<string,any>): void;
					public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
					public setUnknown(param0: java.util.Map<string,any>): void;
					public setPriority(priority: number): void;
				}
				export module SentryThreadMetadata {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.profiling.SentryThreadMetadata> {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentryThreadMetadata.Deserializer>;
						public constructor();
						public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.protocol.profiling.SentryThreadMetadata;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
					export class JsonKeys {
						public static class: java.lang.Class<io.sentry.protocol.profiling.SentryThreadMetadata.JsonKeys>;
						public static NAME: string = "name";
						public static PRIORITY: string = "priority";
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebBreadcrumbEvent extends io.sentry.rrweb.RRWebEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebBreadcrumbEvent>;
				public static EVENT_TAG: string = "breadcrumb";
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setMessage(message: string): void;
				public getPayloadUnknown(): java.util.Map<string,any>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setLevel(level: io.sentry.SentryLevel): void;
				public getBreadcrumbTimestamp(): number;
				public getDataUnknown(): java.util.Map<string,any>;
				public getCategory(): string;
				public setData(data: java.util.Map<string,any>): void;
				public setCategory(category: string): void;
				public getLevel(): io.sentry.SentryLevel;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public getMessage(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public setPayloadUnknown(payloadUnknown: java.util.Map<string,any>): void;
				public getTag(): string;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public getBreadcrumbType(): string;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTag(tag: string): void;
				public setBreadcrumbType(breadcrumbType: string): void;
				public setBreadcrumbTimestamp(breadcrumbTimestamp: number): void;
			}
			export module RRWebBreadcrumbEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebBreadcrumbEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebBreadcrumbEvent.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebBreadcrumbEvent;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebBreadcrumbEvent.JsonKeys>;
					public static DATA: string = "data";
					public static PAYLOAD: string = "payload";
					public static TIMESTAMP: string = "timestamp";
					public static TYPE: string = "type";
					public static CATEGORY: string = "category";
					public static MESSAGE: string = "message";
					public static LEVEL: string = "level";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export abstract class RRWebEvent {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebEvent>;
				public getType(): io.sentry.rrweb.RRWebEventType;
				public setTimestamp(timestamp: number): void;
				public hashCode(): number;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public equals(o: any): boolean;
				public getTimestamp(): number;
				public setType(type: io.sentry.rrweb.RRWebEventType): void;
				public constructor();
			}
			export module RRWebEvent {
				export class Deserializer {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebEvent.Deserializer>;
					public constructor();
					public deserializeValue(baseEvent: io.sentry.rrweb.RRWebEvent, nextName: string, reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): boolean;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebEvent.JsonKeys>;
					public static TYPE: string = "type";
					public static TIMESTAMP: string = "timestamp";
					public static TAG: string = "tag";
					public constructor();
				}
				export class Serializer {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebEvent.Serializer>;
					public constructor();
					public serialize(baseEvent: io.sentry.rrweb.RRWebEvent, writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebEventType extends io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebEventType>;
				public static DomContentLoaded: io.sentry.rrweb.RRWebEventType;
				public static Load: io.sentry.rrweb.RRWebEventType;
				public static FullSnapshot: io.sentry.rrweb.RRWebEventType;
				public static IncrementalSnapshot: io.sentry.rrweb.RRWebEventType;
				public static Meta: io.sentry.rrweb.RRWebEventType;
				public static Custom: io.sentry.rrweb.RRWebEventType;
				public static Plugin: io.sentry.rrweb.RRWebEventType;
				public static valueOf(name: string): io.sentry.rrweb.RRWebEventType;
				public static values(): androidNative.Array<io.sentry.rrweb.RRWebEventType>;
				public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			}
			export module RRWebEventType {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebEventType> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebEventType.Deserializer>;
					public constructor();
					public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.rrweb.RRWebEventType;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export abstract class RRWebIncrementalSnapshotEvent extends io.sentry.rrweb.RRWebEvent {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent>;
				public getSource(): io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public constructor(source: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource);
				public setSource(source: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource): void;
				public constructor();
			}
			export module RRWebIncrementalSnapshotEvent {
				export class Deserializer {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.Deserializer>;
					public constructor();
					public deserializeValue(baseEvent: io.sentry.rrweb.RRWebIncrementalSnapshotEvent, nextName: string, reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): boolean;
				}
				export class IncrementalSource extends io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource>;
					public static Mutation: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static MouseMove: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static MouseInteraction: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Scroll: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static ViewportResize: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Input: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static TouchMove: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static MediaInteraction: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static StyleSheetRule: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static CanvasMutation: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Font: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Log: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Drag: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static StyleDeclaration: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static Selection: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static AdoptedStyleSheet: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static CustomElement: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static valueOf(name: string): io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
					public static values(): androidNative.Array<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource>;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				}
				export module IncrementalSource {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource> {
						public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource.Deserializer>;
						public constructor();
						public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.JsonKeys>;
					public static SOURCE: string = "source";
					public constructor();
				}
				export class Serializer {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebIncrementalSnapshotEvent.Serializer>;
					public constructor();
					public serialize(baseEvent: io.sentry.rrweb.RRWebIncrementalSnapshotEvent, writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebInteractionEvent extends io.sentry.rrweb.RRWebIncrementalSnapshotEvent implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionEvent>;
				public setInteractionType(type: io.sentry.rrweb.RRWebInteractionEvent.InteractionType): void;
				public setPointerType(pointerType: number): void;
				public setPointerId(pointerId: number): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getId(): number;
				public getY(): number;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setX(x: number): void;
				public constructor();
				public getPointerId(): number;
				public getDataUnknown(): java.util.Map<string,any>;
				public setId(id: number): void;
				public getX(): number;
				public getInteractionType(): io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
				public setY(y: number): void;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public getPointerType(): number;
				public constructor(source: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource);
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module RRWebInteractionEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebInteractionEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionEvent.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebInteractionEvent;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class InteractionType extends io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionEvent.InteractionType>;
					public static MouseUp: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static MouseDown: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static Click: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static ContextMenu: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static DblClick: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static Focus: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static Blur: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static TouchStart: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static TouchMove_Departed: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static TouchEnd: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static TouchCancel: io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public static values(): androidNative.Array<io.sentry.rrweb.RRWebInteractionEvent.InteractionType>;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public static valueOf(name: string): io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
					public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				}
				export module InteractionType {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebInteractionEvent.InteractionType> {
						public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionEvent.InteractionType.Deserializer>;
						public deserialize(reader: io.sentry.ObjectReader, logger: io.sentry.ILogger): io.sentry.rrweb.RRWebInteractionEvent.InteractionType;
						public constructor();
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionEvent.JsonKeys>;
					public static DATA: string = "data";
					public static TYPE: string = "type";
					public static ID: string = "id";
					public static X: string = "x";
					public static Y: string = "y";
					public static POINTER_TYPE: string = "pointerType";
					public static POINTER_ID: string = "pointerId";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebInteractionMoveEvent extends io.sentry.rrweb.RRWebIncrementalSnapshotEvent implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent>;
				public setPointerId(pointerId: number): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setPositions(positions: java.util.List<io.sentry.rrweb.RRWebInteractionMoveEvent.Position>): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getDataUnknown(): java.util.Map<string,any>;
				public getPointerId(): number;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public constructor(source: io.sentry.rrweb.RRWebIncrementalSnapshotEvent.IncrementalSource);
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getPositions(): java.util.List<io.sentry.rrweb.RRWebInteractionMoveEvent.Position>;
			}
			export module RRWebInteractionMoveEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebInteractionMoveEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebInteractionMoveEvent;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent.JsonKeys>;
					public static DATA: string = "data";
					public static POSITIONS: string = "positions";
					public static POINTER_ID: string = "pointerId";
					public constructor();
				}
				export class Position implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent.Position>;
					public setY(y: number): void;
					public getX(): number;
					public getId(): number;
					public setTimeOffset(timeOffset: number): void;
					public getY(): number;
					public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
					public setUnknown(param0: java.util.Map<string,any>): void;
					public getUnknown(): java.util.Map<string,any>;
					public setX(x: number): void;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public constructor();
					public setId(id: number): void;
					public setUnknown(unknown: java.util.Map<string,any>): void;
					public getTimeOffset(): number;
				}
				export module Position {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebInteractionMoveEvent.Position> {
						public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent.Position.Deserializer>;
						public constructor();
						public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebInteractionMoveEvent.Position;
						public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
					}
					export class JsonKeys {
						public static class: java.lang.Class<io.sentry.rrweb.RRWebInteractionMoveEvent.Position.JsonKeys>;
						public static ID: string = "id";
						public static X: string = "x";
						public static Y: string = "y";
						public static TIME_OFFSET: string = "timeOffset";
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebMetaEvent extends io.sentry.rrweb.RRWebEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebMetaEvent>;
				public getHeight(): number;
				public setWidth(width: number): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setHeight(height: number): void;
				public constructor();
				public getDataUnknown(): java.util.Map<string,any>;
				public getWidth(): number;
				public hashCode(): number;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public serialize(writer: io.sentry.ObjectWriter, logger: io.sentry.ILogger): void;
				public setHref(href: string): void;
				public equals(o: any): boolean;
				public getHref(): string;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module RRWebMetaEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebMetaEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebMetaEvent.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebMetaEvent;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebMetaEvent.JsonKeys>;
					public static DATA: string = "data";
					public static HREF: string = "href";
					public static HEIGHT: string = "height";
					public static WIDTH: string = "width";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebOptionsEvent extends io.sentry.rrweb.RRWebEvent implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebOptionsEvent>;
				public static EVENT_TAG: string = "options";
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getTag(): string;
				public setOptionsPayload(optionsPayload: java.util.Map<string,any>): void;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public getOptionsPayload(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTag(tag: string): void;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public getDataUnknown(): java.util.Map<string,any>;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public constructor(options: io.sentry.SentryOptions);
			}
			export module RRWebOptionsEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebOptionsEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebOptionsEvent.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebOptionsEvent;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebOptionsEvent.JsonKeys>;
					public static DATA: string = "data";
					public static PAYLOAD: string = "payload";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebSpanEvent extends io.sentry.rrweb.RRWebEvent implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebSpanEvent>;
				public static EVENT_TAG: string = "performanceSpan";
				public setPayloadUnknown(payloadUnknown: java.util.Map<string,any>): void;
				public setEndTimestamp(endTimestamp: number): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getTag(): string;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public getUnknown(): java.util.Map<string,any>;
				public getDescription(): string;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTag(tag: string): void;
				public getPayloadUnknown(): java.util.Map<string,any>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public constructor();
				public setStartTimestamp(startTimestamp: number): void;
				public getDataUnknown(): java.util.Map<string,any>;
				public setData(data: java.util.Map<string,any>): void;
				public getOp(): string;
				public setDescription(description: string): void;
				public getStartTimestamp(): number;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public getEndTimestamp(): number;
				public setOp(op: string): void;
				public setUnknown(unknown: java.util.Map<string,any>): void;
			}
			export module RRWebSpanEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebSpanEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebSpanEvent.Deserializer>;
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebSpanEvent;
					public constructor();
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebSpanEvent.JsonKeys>;
					public static DATA: string = "data";
					public static PAYLOAD: string = "payload";
					public static OP: string = "op";
					public static DESCRIPTION: string = "description";
					public static START_TIMESTAMP: string = "startTimestamp";
					public static END_TIMESTAMP: string = "endTimestamp";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module rrweb {
			export class RRWebVideoEvent extends io.sentry.rrweb.RRWebEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.rrweb.RRWebVideoEvent>;
				public static EVENT_TAG: string = "video";
				public static REPLAY_ENCODING: string = "h264";
				public static REPLAY_CONTAINER: string = "mp4";
				public static REPLAY_FRAME_RATE_TYPE_CONSTANT: string = "constant";
				public static REPLAY_FRAME_RATE_TYPE_VARIABLE: string = "variable";
				public setEncoding(encoding: string): void;
				public getContainer(): string;
				public getHeight(): number;
				public setWidth(width: number): void;
				public getSegmentId(): number;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getPayloadUnknown(): java.util.Map<string,any>;
				public serialize(key: io.sentry.ObjectWriter, this_: io.sentry.ILogger): void;
				public setDurationMs(durationMs: number): void;
				public setTop(top: number): void;
				public constructor();
				public getDataUnknown(): java.util.Map<string,any>;
				public getDurationMs(): number;
				public setSegmentId(segmentId: number): void;
				public getSize(): number;
				public getLeft(): number;
				public setLeft(left: number): void;
				public hashCode(): number;
				public setDataUnknown(dataUnknown: java.util.Map<string,any>): void;
				public equals(o: any): boolean;
				public setUnknown(unknown: java.util.Map<string,any>): void;
				public getEncoding(): string;
				public setPayloadUnknown(payloadUnknown: java.util.Map<string,any>): void;
				public getTag(): string;
				public getFrameRate(): number;
				public constructor(type: io.sentry.rrweb.RRWebEventType);
				public setFrameCount(frameCount: number): void;
				public getUnknown(): java.util.Map<string,any>;
				public getFrameCount(): number;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTag(tag: string): void;
				public setHeight(height: number): void;
				public getTop(): number;
				public getWidth(): number;
				public getFrameRateType(): string;
				public setFrameRateType(frameRateType: string): void;
				public setSize(size: number): void;
				public setContainer(container: string): void;
				public setFrameRate(frameRate: number): void;
			}
			export module RRWebVideoEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.rrweb.RRWebVideoEvent> {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebVideoEvent.Deserializer>;
					public constructor();
					public deserialize(this_: io.sentry.ObjectReader, reader: io.sentry.ILogger): io.sentry.rrweb.RRWebVideoEvent;
					public deserialize(param0: io.sentry.ObjectReader, param1: io.sentry.ILogger): any;
				}
				export class JsonKeys {
					public static class: java.lang.Class<io.sentry.rrweb.RRWebVideoEvent.JsonKeys>;
					public static DATA: string = "data";
					public static PAYLOAD: string = "payload";
					public static SEGMENT_ID: string = "segmentId";
					public static SIZE: string = "size";
					public static DURATION: string = "duration";
					public static ENCODING: string = "encoding";
					public static CONTAINER: string = "container";
					public static HEIGHT: string = "height";
					public static WIDTH: string = "width";
					public static FRAME_COUNT: string = "frameCount";
					public static FRAME_RATE_TYPE: string = "frameRateType";
					public static FRAME_RATE: string = "frameRate";
					public static LEFT: string = "left";
					public static TOP: string = "top";
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class AsyncHttpTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport>;
				public constructor(executor: io.sentry.transport.QueuedThreadPoolExecutor, options: io.sentry.SentryOptions, rateLimiter: io.sentry.transport.RateLimiter, transportGate: io.sentry.transport.ITransportGate, httpConnection: io.sentry.transport.HttpConnection);
				public send(envelopeThatMayIncludeClientReport: io.sentry.SentryEnvelope, future: io.sentry.Hint): void;
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public close(param0: boolean): void;
				public close(e: boolean): void;
				public flush(timeoutMillis: number): void;
				public isHealthy(): boolean;
				public send(envelope: io.sentry.SentryEnvelope): void;
				public constructor(options: io.sentry.SentryOptions, rateLimiter: io.sentry.transport.RateLimiter, transportGate: io.sentry.transport.ITransportGate, requestDetails: io.sentry.RequestDetails);
				public flush(param0: number): void;
			}
			export module AsyncHttpTransport {
				export class AsyncConnectionThreadFactory {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.AsyncConnectionThreadFactory>;
					public newThread(r: java.lang.Runnable): java.lang.Thread;
				}
				export class EnvelopeSender {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.EnvelopeSender>;
					public run(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class AuthenticatorWrapper {
				public static class: java.lang.Class<io.sentry.transport.AuthenticatorWrapper>;
				public static getInstance(): io.sentry.transport.AuthenticatorWrapper;
				public setDefault(authenticator: java.net.Authenticator): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class CurrentDateProvider extends io.sentry.transport.ICurrentDateProvider {
				public static class: java.lang.Class<io.sentry.transport.CurrentDateProvider>;
				public getCurrentTimeMillis(): number;
				public static getInstance(): io.sentry.transport.ICurrentDateProvider;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class HttpConnection {
				public static class: java.lang.Class<io.sentry.transport.HttpConnection>;
				public constructor(options: io.sentry.SentryOptions, requestDetails: io.sentry.RequestDetails, rateLimiter: io.sentry.transport.RateLimiter);
				public updateRetryAfterLimits(connection: java.net.HttpURLConnection, responseCode: number): void;
				public send(outputStream: io.sentry.SentryEnvelope): io.sentry.transport.TransportResult;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ICurrentDateProvider {
				public static class: java.lang.Class<io.sentry.transport.ICurrentDateProvider>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ICurrentDateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCurrentTimeMillis(): number;
				});
				public constructor();
				public getCurrentTimeMillis(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ITransport {
				public static class: java.lang.Class<io.sentry.transport.ITransport>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
					send(envelope: io.sentry.SentryEnvelope): void;
					isHealthy(): boolean;
					flush(param0: number): void;
					getRateLimiter(): io.sentry.transport.RateLimiter;
					close(param0: boolean): void;
				});
				public constructor();
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public close(param0: boolean): void;
				public send(envelope: io.sentry.SentryEnvelope): void;
				public isHealthy(): boolean;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ITransportGate {
				public static class: java.lang.Class<io.sentry.transport.ITransportGate>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransportGate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isConnected(): boolean;
				});
				public constructor();
				public isConnected(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpEnvelopeCache extends io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.transport.NoOpEnvelopeCache>;
				public store(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): void;
				public discard(envelope: io.sentry.SentryEnvelope): void;
				/** @deprecated */
				public store(envelope: io.sentry.SentryEnvelope): void;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public storeEnvelope(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): boolean;
				/** @deprecated */
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public static getInstance(): io.sentry.transport.NoOpEnvelopeCache;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransport>;
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public static getInstance(): io.sentry.transport.NoOpTransport;
				public send(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public close(param0: boolean): void;
				public close(isRestarting: boolean): void;
				public flush(timeoutMillis: number): void;
				public send(envelope: io.sentry.SentryEnvelope): void;
				public isHealthy(): boolean;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpTransportGate extends io.sentry.transport.ITransportGate {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransportGate>;
				public isConnected(): boolean;
				public static getInstance(): io.sentry.transport.NoOpTransportGate;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ProxyAuthenticator {
				public static class: java.lang.Class<io.sentry.transport.ProxyAuthenticator>;
				public getPasswordAuthentication(): java.net.PasswordAuthentication;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class QueuedThreadPoolExecutor {
				public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor>;
				public afterExecute(r: java.lang.Runnable, t: java.lang.Throwable): void;
				public submit(this_: java.lang.Runnable): java.util.concurrent.Future<any>;
				public didRejectRecently(): boolean;
				public constructor(corePoolSize: number, maxQueueSize: number, threadFactory: java.util.concurrent.ThreadFactory, rejectedExecutionHandler: java.util.concurrent.RejectedExecutionHandler, logger: io.sentry.ILogger, dateProvider: io.sentry.SentryDateProvider);
				public isSchedulingAllowed(): boolean;
			}
			export module QueuedThreadPoolExecutor {
				export class CancelledFuture<T>  extends java.util.concurrent.Future<any> {
					public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture<any>>;
					public get(): any;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public get(timeout: number, unit: java.util.concurrent.TimeUnit): any;
					public cancel(mayInterruptIfRunning: boolean): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class RateLimiter {
				public static class: java.lang.Class<io.sentry.transport.RateLimiter>;
				public close(): void;
				public addRateLimitObserver(observer: io.sentry.transport.RateLimiter.IRateLimitObserver): void;
				public updateRetryAfterLimits(e: string, dataCategory: string, catItem: number): void;
				public removeRateLimitObserver(observer: io.sentry.transport.RateLimiter.IRateLimitObserver): void;
				public constructor(currentDateProvider: io.sentry.transport.ICurrentDateProvider, options: io.sentry.SentryOptions);
				public isActiveForCategory(dataCategory: io.sentry.DataCategory): boolean;
				public isAnyRateLimitActive(): boolean;
				public constructor(options: io.sentry.SentryOptions);
				public filter(item: io.sentry.SentryEnvelope, toSend: io.sentry.Hint): io.sentry.SentryEnvelope;
			}
			export module RateLimiter {
				export class IRateLimitObserver {
					public static class: java.lang.Class<io.sentry.transport.RateLimiter.IRateLimitObserver>;
					/**
					 * Constructs a new instance of the io.sentry.transport.RateLimiter$IRateLimitObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRateLimitChanged(param0: io.sentry.transport.RateLimiter): void;
					});
					public constructor();
					public onRateLimitChanged(param0: io.sentry.transport.RateLimiter): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class ReusableCountLatch {
				public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch>;
				public increment(): void;
				public constructor(initialCount: number);
				public waitTillZero(timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
				public getCount(): number;
				public decrement(): void;
				public constructor();
				public waitTillZero(): void;
			}
			export module ReusableCountLatch {
				export class Sync {
					public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch.Sync>;
					public tryReleaseShared(newCount: number): boolean;
					public tryAcquireShared(acquires: number): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class StdoutTransport extends io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.StdoutTransport>;
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public send(envelope: io.sentry.SentryEnvelope, hint: io.sentry.Hint): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public close(param0: boolean): void;
				public constructor(serializer: io.sentry.ISerializer);
				public close(isRestarting: boolean): void;
				public flush(timeoutMillis: number): void;
				public send(envelope: io.sentry.SentryEnvelope): void;
				public isHealthy(): boolean;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export abstract class TransportResult {
				public static class: java.lang.Class<io.sentry.transport.TransportResult>;
				public static success(): io.sentry.transport.TransportResult;
				public static error(responseCode: number): io.sentry.transport.TransportResult;
				public getResponseCode(): number;
				public isSuccess(): boolean;
				public static error(): io.sentry.transport.TransportResult;
			}
			export module TransportResult {
				export class ErrorTransportResult extends io.sentry.transport.TransportResult {
					public static class: java.lang.Class<io.sentry.transport.TransportResult.ErrorTransportResult>;
					public getResponseCode(): number;
					public isSuccess(): boolean;
				}
				export class SuccessTransportResult extends io.sentry.transport.TransportResult {
					public static class: java.lang.Class<io.sentry.transport.TransportResult.SuccessTransportResult>;
					public getResponseCode(): number;
					public isSuccess(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class AutoClosableReentrantLock extends io.sentry.ISentryLifecycleToken {
				public static class: java.lang.Class<io.sentry.util.AutoClosableReentrantLock>;
				public close(): void;
				public acquire(): io.sentry.ISentryLifecycleToken;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class CheckInUtils {
				public static class: java.lang.Class<io.sentry.util.CheckInUtils>;
				public static withCheckIn(monitorSlug: string, monitorConfig: io.sentry.MonitorConfig, callable: java.util.concurrent.Callable<any>): any;
				public static withCheckIn(status: string, checkIn: string, t: io.sentry.MonitorConfig, status: java.util.concurrent.Callable<any>): any;
				public static isIgnored(ignoredSlug: java.util.List<io.sentry.FilterString>, ignoredSlug: string): boolean;
				public static withCheckIn(monitorSlug: string, environment: string, callable: java.util.concurrent.Callable<any>): any;
				public static withCheckIn(monitorSlug: string, callable: java.util.concurrent.Callable<any>): any;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class ClassLoaderUtils {
				public static class: java.lang.Class<io.sentry.util.ClassLoaderUtils>;
				public static classLoaderOrDefault(contextClassLoader: java.lang.ClassLoader): java.lang.ClassLoader;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class CollectionUtils {
				public static class: java.lang.Class<io.sentry.util.CollectionUtils>;
				public static reverseListIterator(list: java.util.concurrent.CopyOnWriteArrayList<any>): java.util.ListIterator<any>;
				public static size(ignored: java.lang.Iterable<any>): number;
				public static filterMapEntries(entry: java.util.Map<any,any>, map: io.sentry.util.CollectionUtils.Predicate<any>): java.util.Map<any,any>;
				public static newHashMap(map: java.util.Map<any,any>): java.util.Map<any,any>;
				public static newArrayList(list: java.util.List<any>): java.util.List<any>;
				public static filterListEntries(entry: java.util.List<any>, list: io.sentry.util.CollectionUtils.Predicate<any>): java.util.List<any>;
				public static contains(t: androidNative.Array<any>, array: any): boolean;
				public static toSortedStringArray(source: java.util.Enumeration<string>, size: number): androidNative.Array<string>;
				public static newConcurrentHashMap(entry: java.util.Map<any,any>): java.util.Map<any,any>;
				public static map(t: java.util.List<any>, list: io.sentry.util.CollectionUtils.Mapper<any,any>): java.util.List<any>;
			}
			export module CollectionUtils {
				export class Mapper<T, R>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.CollectionUtils.Mapper<any,any>>;
					/**
					 * Constructs a new instance of the io.sentry.util.CollectionUtils$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						map(param0: T): R;
					});
					public constructor();
					public map(param0: T): R;
				}
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.CollectionUtils.Predicate<any>>;
					/**
					 * Constructs a new instance of the io.sentry.util.CollectionUtils$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						test(param0: T): boolean;
					});
					public constructor();
					public test(param0: T): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class DebugMetaPropertiesApplier {
				public static class: java.lang.Class<io.sentry.util.DebugMetaPropertiesApplier>;
				public static DEBUG_META_PROPERTIES_FILENAME: string;
				public static apply(options: io.sentry.SentryOptions, debugMetaProperties: java.util.List<java.util.Properties>): void;
				public static getBuildTool(debugMetaProperties: java.util.Properties): string;
				public static getBuildToolVersion(debugMetaProperties: java.util.Properties): string;
				public static getProguardUuid(debugMetaProperties: java.util.Properties): string;
				public static applyToOptions(options: io.sentry.SentryOptions, debugMetaProperties: java.util.List<java.util.Properties>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class ErrorUtils {
				public static class: java.lang.Class<io.sentry.util.ErrorUtils>;
				public static isIgnored(stringMessage: java.util.List<io.sentry.FilterString>, formattedMessage: io.sentry.SentryEvent): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class EventProcessorUtils {
				public static class: java.lang.Class<io.sentry.util.EventProcessorUtils>;
				public static unwrap(eventProcessorAndOrder: java.util.List<io.sentry.internal.eventprocessor.EventProcessorAndOrder>): java.util.List<io.sentry.EventProcessor>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class EventSizeLimitingUtils {
				public static class: java.lang.Class<io.sentry.util.EventSizeLimitingUtils>;
				public static limitEventSize(e: io.sentry.SentryEvent, reducedEvent: io.sentry.Hint, callback: io.sentry.SentryOptions): io.sentry.SentryEvent;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class ExceptionUtils {
				public static class: java.lang.Class<io.sentry.util.ExceptionUtils>;
				public static findRootCause(throwable: java.lang.Throwable): java.lang.Throwable;
				public static isIgnored(ignoredExceptionsForType: java.util.Set<java.lang.Class<any>>, throwable: java.lang.Throwable): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class FileUtils {
				public static class: java.lang.Class<io.sentry.util.FileUtils>;
				public static createDirectory(directory: java.io.File): boolean;
				public static readBytesFromFile(bytes: string, length: number): androidNative.Array<number>;
				public static readText(line: java.io.File): string;
				public static deleteRecursively(f: java.io.File): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class HintUtils {
				public static class: java.lang.Class<io.sentry.util.HintUtils>;
				public static shouldApplyScopeData(hint: io.sentry.Hint): boolean;
				public static isFromHybridSdk(hint: io.sentry.Hint): boolean;
				public static runIfHasType(hint: io.sentry.Hint, clazz: java.lang.Class<any>, lambda: io.sentry.util.HintUtils.SentryConsumer<any>, fallbackLambda: io.sentry.util.HintUtils.SentryHintFallback): void;
				public static runIfHasType(hint: io.sentry.Hint, clazz: java.lang.Class<any>, lambda: io.sentry.util.HintUtils.SentryConsumer<any>): void;
				public static runIfHasTypeLogIfNot(hint: io.sentry.Hint, clazz: java.lang.Class<any>, logger: io.sentry.ILogger, lambda: io.sentry.util.HintUtils.SentryConsumer<any>): void;
				public static setTypeCheckHint(hint: io.sentry.Hint, typeCheckHint: any): void;
				public static getSentrySdkHint(hint: io.sentry.Hint): any;
				public static getEventDropReason(hint: io.sentry.Hint): io.sentry.hints.EventDropReason;
				public static setIsFromHybridSdk(hint: io.sentry.Hint, sdkName: string): void;
				public static createWithTypeCheckHint(typeCheckHint: any): io.sentry.Hint;
				public static runIfDoesNotHaveType(hint: io.sentry.Hint, clazz: java.lang.Class<any>, lambda: io.sentry.util.HintUtils.SentryNullableConsumer<any>): void;
				public static hasType(hint: io.sentry.Hint, clazz: java.lang.Class<any>): boolean;
				public static setEventDropReason(hint: io.sentry.Hint, eventDropReason: io.sentry.hints.EventDropReason): void;
			}
			export module HintUtils {
				export class SentryConsumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.HintUtils.SentryConsumer<any>>;
					/**
					 * Constructs a new instance of the io.sentry.util.HintUtils$SentryConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						accept(param0: T): void;
					});
					public constructor();
					public accept(param0: T): void;
				}
				export class SentryHintFallback {
					public static class: java.lang.Class<io.sentry.util.HintUtils.SentryHintFallback>;
					/**
					 * Constructs a new instance of the io.sentry.util.HintUtils$SentryHintFallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						accept(param0: any, param1: java.lang.Class<any>): void;
					});
					public constructor();
					public accept(param0: any, param1: java.lang.Class<any>): void;
				}
				export class SentryNullableConsumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.HintUtils.SentryNullableConsumer<any>>;
					/**
					 * Constructs a new instance of the io.sentry.util.HintUtils$SentryNullableConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						accept(param0: T): void;
					});
					public constructor();
					public accept(param0: T): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class HttpUtils {
				public static class: java.lang.Class<io.sentry.util.HttpUtils>;
				public static COOKIE_HEADER_NAME: string = "Cookie";
				public static filterOutSecurityCookiesFromHeader(header: java.util.List<string>, headers: string, headerName: java.util.List<string>): java.util.List<string>;
				public static filterOutSecurityCookiesFromHeader(headers: java.util.Enumeration<string>, headerName: string, additionalCookieNamesToFilter: java.util.List<string>): java.util.List<string>;
				public static filterOutSecurityCookies(cookieParts: string, cookieName: java.util.List<string>): string;
				public static containsSensitiveHeader(header: string): boolean;
				public static isHttpClientError(statusCode: number): boolean;
				public static isHttpServerError(statusCode: number): boolean;
				public static isSecurityCookie(additionalCookieName: string, cookieName: java.util.List<string>): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class InitUtil {
				public static class: java.lang.Class<io.sentry.util.InitUtil>;
				public static initializeProfiler(profilingTracesDirPath: io.sentry.SentryOptions): io.sentry.IContinuousProfiler;
				public static shouldInit(docsUrl: io.sentry.SentryOptions, previousOptions: io.sentry.SentryOptions, newOptions: boolean): boolean;
				public constructor();
				public static initializeProfileConverter(options: io.sentry.SentryOptions): io.sentry.IProfileConverter;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class IntegrationUtils {
				public static class: java.lang.Class<io.sentry.util.IntegrationUtils>;
				public static addIntegrationToSdkVersion(name: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class JsonSerializationUtils {
				public static class: java.lang.Class<io.sentry.util.JsonSerializationUtils>;
				public static calendarToMap(calendar: java.util.Calendar): java.util.Map<string,any>;
				public static byteSizeOf(writer: io.sentry.ISerializer, t: io.sentry.ILogger, serializer: io.sentry.JsonSerializable): number;
				public static atomicIntegerArrayToList(i: java.util.concurrent.atomic.AtomicIntegerArray): java.util.List<any>;
				public static bytesFrom(writer: io.sentry.ISerializer, stream: io.sentry.ILogger, t: io.sentry.JsonSerializable): androidNative.Array<number>;
				public constructor();
			}
			export module JsonSerializationUtils {
				export class ByteCountingWriter {
					public static class: java.lang.Class<io.sentry.util.JsonSerializationUtils.ByteCountingWriter>;
					public write(this_: androidNative.Array<string>, cbuf: number, off: number): void;
					public write(c: number): void;
					public write(this_: string, str: number, off: number): void;
					public close(): void;
					public getByteCount(): number;
					public flush(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LazyDirectory {
				public static class: java.lang.Class<io.sentry.util.LazyDirectory>;
				public getOrCreate(): java.io.File;
				public constructor(path: string);
				public getFile(): java.io.File;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LazyEvaluator<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.LazyEvaluator<any>>;
				public resetValue(): void;
				public getValue(): T;
				public constructor(evaluator: io.sentry.util.LazyEvaluator.Evaluator<T>);
				public setValue(this_: T): void;
			}
			export module LazyEvaluator {
				export class Evaluator<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.LazyEvaluator.Evaluator<any>>;
					/**
					 * Constructs a new instance of the io.sentry.util.LazyEvaluator$Evaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						evaluate(): T;
					});
					public constructor();
					public evaluate(): T;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LifecycleHelper {
				public static class: java.lang.Class<io.sentry.util.LifecycleHelper>;
				public static close(token: any): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LoadClass {
				public static class: java.lang.Class<io.sentry.util.LoadClass>;
				public isClassAvailable(clazz: string, options: io.sentry.SentryOptions): boolean;
				public isClassAvailable(this_: string, clazz: io.sentry.ILogger): boolean;
				public isClassAvailableLazy(clazz: string, options: io.sentry.SentryOptions): io.sentry.util.LazyEvaluator<java.lang.Boolean>;
				public loadClass(clazz: string, logger: io.sentry.ILogger): java.lang.Class<any>;
				public isClassAvailableLazy(clazz: string, logger: io.sentry.ILogger): io.sentry.util.LazyEvaluator<java.lang.Boolean>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LogUtils {
				public static class: java.lang.Class<io.sentry.util.LogUtils>;
				public static logNotInstanceOf(expectedClass: java.lang.Class<any>, sentrySdkHint: any, logger: io.sentry.ILogger): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LoggerPropertiesUtil {
				public static class: java.lang.Class<io.sentry.util.LoggerPropertiesUtil>;
				public static applyPropertiesToEvent(value: io.sentry.SentryEvent, key: java.util.List<string>, event: java.util.Map<string,string>, targetKeys: string): void;
				public static applyPropertiesToEvent(event: io.sentry.SentryEvent, targetKeys: java.util.List<string>, properties: java.util.Map<string,string>): void;
				public constructor();
				public static applyPropertiesToAttributes(value: io.sentry.SentryAttributes, key: java.util.List<string>, attributes: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class MapObjectReader extends io.sentry.ObjectReader {
				public static class: java.lang.Class<io.sentry.util.MapObjectReader>;
				public nextBooleanOrNull(): java.lang.Boolean;
				public nextObjectOrNull(): any;
				public nextNull(): void;
				public nextListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
				public nextListOrNull(stackSizeBefore: io.sentry.ILogger, list: io.sentry.JsonDeserializer<any>): java.util.List<any>;
				public nextStringOrNull(): string;
				public beginObject(): void;
				public endArray(): void;
				public nextDouble(): number;
				public nextInt(): number;
				public nextLong(): number;
				public nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
				public nextMapOrNull(key: io.sentry.ILogger, stackSizeBefore: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				public endObject(): void;
				public nextDoubleOrNull(): java.lang.Double;
				public nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				public nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
				public static dateOrNull(e: string, ignored: io.sentry.ILogger): java.util.Date;
				public nextFloat(): number;
				public nextDateOrNull(logger: io.sentry.ILogger): java.util.Date;
				public nextName(): string;
				public nextOrNull(logger: io.sentry.ILogger, deserializer: io.sentry.JsonDeserializer<any>): any;
				public nextBoolean(): boolean;
				public nextMapOfListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				public peek(): io.sentry.vendor.gson.stream.JsonToken;
				public nextIntegerOrNull(): java.lang.Integer;
				public close(): void;
				public nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string,any>, param2: string): void;
				public nextUnknown(this_: io.sentry.ILogger, logger: java.util.Map<string,any>, unknown: string): void;
				public nextFloatOrNull(): java.lang.Float;
				public nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
				public beginArray(): void;
				public nextMapOfListOrNull(e: io.sentry.ILogger, key: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
				public nextString(): string;
				public setLenient(lenient: boolean): void;
				public setLenient(param0: boolean): void;
				public nextTimeZoneOrNull(logger: io.sentry.ILogger): java.util.TimeZone;
				public skipValue(): void;
				public hasNext(): boolean;
				public constructor(root: java.util.Map<string,any>);
				public nextLongOrNull(): java.lang.Long;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class MapObjectWriter extends io.sentry.ObjectWriter {
				public static class: java.lang.Class<io.sentry.util.MapObjectWriter>;
				public value(value: java.lang.Number): io.sentry.util.MapObjectWriter;
				public name(name: string): io.sentry.util.MapObjectWriter;
				public nullValue(): io.sentry.ObjectWriter;
				public value(logger: io.sentry.ILogger, object: any): io.sentry.util.MapObjectWriter;
				public jsonValue(param0: string): io.sentry.ObjectWriter;
				public beginArray(): io.sentry.util.MapObjectWriter;
				public beginObject(): io.sentry.util.MapObjectWriter;
				public setIndent(param0: string): void;
				public endArray(): io.sentry.util.MapObjectWriter;
				public beginObject(): io.sentry.ObjectWriter;
				public value(value: number): io.sentry.util.MapObjectWriter;
				public name(param0: string): io.sentry.ObjectWriter;
				public nullValue(): io.sentry.util.MapObjectWriter;
				public setIndent(indent: string): void;
				public beginArray(): io.sentry.ObjectWriter;
				public value(value: string): io.sentry.util.MapObjectWriter;
				public value(param0: java.lang.Number): io.sentry.ObjectWriter;
				public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
				public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
				public getIndent(): string;
				public setLenient(lenient: boolean): void;
				public setLenient(param0: boolean): void;
				public endArray(): io.sentry.ObjectWriter;
				public value(param0: boolean): io.sentry.ObjectWriter;
				public endObject(): io.sentry.util.MapObjectWriter;
				public constructor(root: java.util.Map<string,any>);
				public jsonValue(value: string): io.sentry.ObjectWriter;
				public value(value: boolean): io.sentry.util.MapObjectWriter;
				public value(value: java.lang.Boolean): io.sentry.util.MapObjectWriter;
				public value(param0: number): io.sentry.ObjectWriter;
				public endObject(): io.sentry.ObjectWriter;
				public value(param0: string): io.sentry.ObjectWriter;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Objects {
				public static class: java.lang.Class<io.sentry.util.Objects>;
				public static requireNonNull(obj: any, message: string): any;
				public static equals(a: any, b: any): boolean;
				public static hash(values: androidNative.Array<any>): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Pair<A, B>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Pair<any,any>>;
				public getFirst(): A;
				public getSecond(): B;
				public constructor(first: A, second: B);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Platform {
				public static class: java.lang.Class<io.sentry.util.Platform>;
				public static isJvm(): boolean;
				public static isJavaNinePlus(): boolean;
				public static isAndroid(): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class PropagationTargetsUtils {
				public static class: java.lang.Class<io.sentry.util.PropagationTargetsUtils>;
				public static contain(origin: java.util.List<string>, origins: string): boolean;
				public static contain(origins: java.util.List<string>, uri: java.net.URI): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Random {
				public static class: java.lang.Class<io.sentry.util.Random>;
				public nextDouble(this_: boolean, includeZero: boolean): number;
				public nextShort(): number;
				public nextByte(): number;
				public nextInt(this_: number): number;
				public nextBoolean(probability: number): boolean;
				public nextDouble(): number;
				public constructor();
				public setSeed(seed: number, streamNumber: number): void;
				public nextInt(): number;
				public nextLong(): number;
				public nextFloat(): number;
				public constructor(seed: number, streamNumber: number);
				public nextLong(j: number): number;
				public nextFloat(includeZero: boolean, includeOne: boolean): number;
				public nextBoolean(): boolean;
				public nextBytes(this_: androidNative.Array<number>): void;
				public nextChar(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class SampleRateUtils {
				public static class: java.lang.Class<io.sentry.util.SampleRateUtils>;
				public static isValidSampleRate(sampleRate: java.lang.Double): boolean;
				public static isValidProfilesSampleRate(profilesSampleRate: java.lang.Double): boolean;
				public static isValidTracesSampleRate(tracesSampleRate: java.lang.Double, allowNull: boolean): boolean;
				public static backfilledSampleRand(sampleRand: java.lang.Double, sampleRate: java.lang.Double, sampled: java.lang.Boolean): java.lang.Double;
				public static isValidTracesSampleRate(tracesSampleRate: java.lang.Double): boolean;
				public static backfilledSampleRand(samplingDecision: io.sentry.TracesSamplingDecision): io.sentry.TracesSamplingDecision;
				public static isValidContinuousProfilesSampleRate(profilesSampleRate: java.lang.Double): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class ScopesUtil {
				public static class: java.lang.Class<io.sentry.util.ScopesUtil>;
				public static printScopesChain(scopes: io.sentry.IScopes): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class SentryCallbackReentrancyGuard {
				public static class: java.lang.Class<io.sentry.util.SentryCallbackReentrancyGuard>;
				public static isActive(): boolean;
				public static enter(): io.sentry.ISentryLifecycleToken;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class SentryRandom {
				public static class: java.lang.Class<io.sentry.util.SentryRandom>;
				public static current(): io.sentry.util.Random;
				public constructor();
			}
			export module SentryRandom {
				export class SentryRandomThreadLocal extends java.lang.ThreadLocal<io.sentry.util.Random> {
					public static class: java.lang.Class<io.sentry.util.SentryRandom.SentryRandomThreadLocal>;
					public initialValue(): io.sentry.util.Random;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class SpanUtils {
				public static class: java.lang.Class<io.sentry.util.SpanUtils>;
				public static isIgnored(ignoredOrigin: java.util.List<io.sentry.FilterString>, ignoredOrigin: string): boolean;
				public static ignoredSpanOriginsForOpenTelemetry(mode: io.sentry.SentryOpenTelemetryMode): java.util.List<string>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<io.sentry.util.StringUtils>;
				public static PROPER_NIL_UUID: string = "00000000-0000-0000-0000-000000000000";
				public static substringBefore(string: string, separator: string): string;
				public static byteCountToString(bytes: number): string;
				public static removeSurrounding(str: string, delimiter: string): string;
				public static calculateStringHash(md: string, messageDigest: io.sentry.ILogger): string;
				public static getStringAfterDot(lastDotIndex: string): string;
				public static join(delimiter: string, elements: java.lang.Iterable<any>): string;
				public static countOf(i: string, str: string): number;
				public static normalizeUUID(uuidString: string): string;
				public static getOrEmpty(str: string): string;
				public static removePrefix(string: string, prefix: string): string;
				public static camelCase(w: string): string;
				public static toString(object: any): string;
				public static capitalize(str: string): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class TracingUtils {
				public static class: java.lang.Class<io.sentry.util.TracingUtils>;
				public static traceIfAllowed(scopes: io.sentry.IScopes, requestUrl: string, thirdPartyBaggageHeaders: java.util.List<string>, span: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
				public static ensureBaggage(baggageSampleRate: io.sentry.Baggage, sampleRateMaybe: java.lang.Boolean, sampleRand: java.lang.Double, incomingBaggage: java.lang.Double): io.sentry.Baggage;
				public static trace(spanContext: io.sentry.IScopes, sentryTraceHeader: java.util.List<string>, baggageHeader: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
				public static setTrace(scopes: io.sentry.IScopes, propagationContext: io.sentry.PropagationContext): void;
				public static maybeUpdateBaggage(scope: io.sentry.IScope, sentryOptions: io.sentry.SentryOptions): io.sentry.PropagationContext;
				public static ensureBaggage(incomingBaggage: io.sentry.Baggage, decision: io.sentry.TracesSamplingDecision): io.sentry.Baggage;
				public static shouldContinueTrace(options: io.sentry.SentryOptions, baggage: io.sentry.Baggage): boolean;
				public constructor();
				public static startNewTrace(scopes: io.sentry.IScopes): void;
				public static isIgnored(ignoredTransaction: java.util.List<io.sentry.FilterString>, ignoredTransaction: string): boolean;
			}
			export module TracingUtils {
				export class PropagationContextHolder {
					public static class: java.lang.Class<io.sentry.util.TracingUtils.PropagationContextHolder>;
				}
				export class TracingHeaders {
					public static class: java.lang.Class<io.sentry.util.TracingUtils.TracingHeaders>;
					public getBaggageHeader(): io.sentry.BaggageHeader;
					public constructor(sentryTraceHeader: io.sentry.SentryTraceHeader, baggageHeader: io.sentry.BaggageHeader, w3cTraceparentHeader: io.sentry.W3CTraceparentHeader);
					public getSentryTraceHeader(): io.sentry.SentryTraceHeader;
					public getW3cTraceparentHeader(): io.sentry.W3CTraceparentHeader;
					public constructor(sentryTraceHeader: io.sentry.SentryTraceHeader, baggageHeader: io.sentry.BaggageHeader);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class UUIDGenerator {
				public static class: java.lang.Class<io.sentry.util.UUIDGenerator>;
				public static randomUUID(): java.util.UUID;
				public static randomHalfLengthUUID(): number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class UUIDStringUtils {
				public static class: java.lang.Class<io.sentry.util.UUIDStringUtils>;
				public static toSentryIdString(mostSignificantBits: number, leastSignificantBits: number): string;
				public static toSentryIdString(uuid: java.util.UUID): string;
				public static toSentrySpanIdString(mostSignificantBits: number): string;
				public constructor();
				public static toSentrySpanIdString(uuid: java.util.UUID): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class UrlUtils {
				public static class: java.lang.Class<io.sentry.util.UrlUtils>;
				public static SENSITIVE_DATA_SUBSTITUTE: string = "[Filtered]";
				public static parseNullable(url: string): io.sentry.util.UrlUtils.UrlDetails;
				public static parse(uri: string): io.sentry.util.UrlUtils.UrlDetails;
				public constructor();
			}
			export module UrlUtils {
				export class UrlDetails {
					public static class: java.lang.Class<io.sentry.util.UrlUtils.UrlDetails>;
					public applyToSpan(span: io.sentry.ISpan): void;
					public getUrl(): string;
					public getQuery(): string;
					public getFragment(): string;
					public constructor(url: string, query: string, fragment: string);
					public getUrlOrFallback(): string;
					public applyToRequest(request: io.sentry.protocol.Request): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module network {
				export class NetworkBody {
					public static class: java.lang.Class<io.sentry.util.network.NetworkBody>;
					public constructor(body: any, warnings: java.util.List<io.sentry.util.network.NetworkBody.NetworkBodyWarning>);
					public constructor(body: any);
					public toString(): string;
					public getWarnings(): java.util.List<io.sentry.util.network.NetworkBody.NetworkBodyWarning>;
					public getBody(): any;
				}
				export module NetworkBody {
					export class NetworkBodyWarning {
						public static class: java.lang.Class<io.sentry.util.network.NetworkBody.NetworkBodyWarning>;
						public static JSON_TRUNCATED: io.sentry.util.network.NetworkBody.NetworkBodyWarning;
						public static TEXT_TRUNCATED: io.sentry.util.network.NetworkBody.NetworkBodyWarning;
						public static INVALID_JSON: io.sentry.util.network.NetworkBody.NetworkBodyWarning;
						public static BODY_PARSE_ERROR: io.sentry.util.network.NetworkBody.NetworkBodyWarning;
						public static values(): androidNative.Array<io.sentry.util.network.NetworkBody.NetworkBodyWarning>;
						public static valueOf(name: string): io.sentry.util.network.NetworkBody.NetworkBodyWarning;
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module network {
				export class NetworkBodyParser {
					public static class: java.lang.Class<io.sentry.util.network.NetworkBodyParser>;
					public static fromBytes(effectiveCharset: androidNative.Array<number>, size: string, content: string, parsed: number, e: io.sentry.ILogger): io.sentry.util.network.NetworkBody;
				}
				export module NetworkBodyParser {
					export class SaferJsonParser {
						public static class: java.lang.Class<io.sentry.util.network.NetworkBodyParser.SaferJsonParser>;
						public static parse(reader: io.sentry.vendor.gson.stream.JsonReader): io.sentry.util.network.NetworkBodyParser.SaferJsonParser.Result;
					}
					export module SaferJsonParser {
						export class Result {
							public static class: java.lang.Class<io.sentry.util.network.NetworkBodyParser.SaferJsonParser.Result>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module network {
				export class NetworkDetailCaptureUtils {
					public static class: java.lang.Class<io.sentry.util.network.NetworkDetailCaptureUtils>;
					public static initializeForUrl(url: string, method: string, networkDetailAllowUrls: java.util.List<string>, networkDetailDenyUrls: java.util.List<string>): io.sentry.util.network.NetworkRequestData;
					public static createRequest(httpObject: any, bodySize: java.lang.Long, networkCaptureBodies: boolean, bodyExtractor: io.sentry.util.network.NetworkDetailCaptureUtils.NetworkBodyExtractor<any>, networkRequestHeaders: java.util.List<any>, headerExtractor: io.sentry.util.network.NetworkDetailCaptureUtils.NetworkHeaderExtractor<any>): io.sentry.util.network.ReplayNetworkRequestOrResponse;
					public static createResponse(httpObject: any, bodySize: java.lang.Long, networkCaptureBodies: boolean, bodyExtractor: io.sentry.util.network.NetworkDetailCaptureUtils.NetworkBodyExtractor<any>, networkResponseHeaders: java.util.List<any>, headerExtractor: io.sentry.util.network.NetworkDetailCaptureUtils.NetworkHeaderExtractor<any>): io.sentry.util.network.ReplayNetworkRequestOrResponse;
				}
				export module NetworkDetailCaptureUtils {
					export class NetworkBodyExtractor<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.util.network.NetworkDetailCaptureUtils.NetworkBodyExtractor<any>>;
						/**
						 * Constructs a new instance of the io.sentry.util.network.NetworkDetailCaptureUtils$NetworkBodyExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extract(param0: T): io.sentry.util.network.NetworkBody;
						});
						public constructor();
						public extract(param0: T): io.sentry.util.network.NetworkBody;
					}
					export class NetworkHeaderExtractor<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.util.network.NetworkDetailCaptureUtils.NetworkHeaderExtractor<any>>;
						/**
						 * Constructs a new instance of the io.sentry.util.network.NetworkDetailCaptureUtils$NetworkHeaderExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extract(param0: T): java.util.Map<string,string>;
						});
						public constructor();
						public extract(param0: T): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module network {
				export class NetworkRequestData {
					public static class: java.lang.Class<io.sentry.util.network.NetworkRequestData>;
					public getStatusCode(): java.lang.Integer;
					public setRequestDetails(requestData: io.sentry.util.network.ReplayNetworkRequestOrResponse): void;
					public toString(): string;
					public getRequest(): io.sentry.util.network.ReplayNetworkRequestOrResponse;
					public getResponseBodySize(): java.lang.Long;
					public setResponseDetails(statusCode: number, responseData: io.sentry.util.network.ReplayNetworkRequestOrResponse): void;
					public getRequestBodySize(): java.lang.Long;
					public getResponse(): io.sentry.util.network.ReplayNetworkRequestOrResponse;
					public constructor(method: string);
					public getMethod(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module network {
				export class ReplayNetworkRequestOrResponse {
					public static class: java.lang.Class<io.sentry.util.network.ReplayNetworkRequestOrResponse>;
					public getHeaders(): java.util.Map<string,string>;
					public toString(): string;
					public getSize(): java.lang.Long;
					public constructor(size: java.lang.Long, body: io.sentry.util.network.NetworkBody, headers: java.util.Map<string,string>);
					public getBody(): io.sentry.util.network.NetworkBody;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module thread {
				export class IThreadChecker {
					public static class: java.lang.Class<io.sentry.util.thread.IThreadChecker>;
					/**
					 * Constructs a new instance of the io.sentry.util.thread.IThreadChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isMainThread(param0: number): boolean;
						isMainThread(param0: java.lang.Thread): boolean;
						isMainThread(): boolean;
						isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
						getCurrentThreadName(): string;
						currentThreadSystemId(): number;
					});
					public constructor();
					public isMainThread(param0: java.lang.Thread): boolean;
					public getCurrentThreadName(): string;
					public currentThreadSystemId(): number;
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public isMainThread(param0: number): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module thread {
				export class NoOpThreadChecker extends io.sentry.util.thread.IThreadChecker {
					public static class: java.lang.Class<io.sentry.util.thread.NoOpThreadChecker>;
					public isMainThread(param0: java.lang.Thread): boolean;
					public getCurrentThreadName(): string;
					public static getInstance(): io.sentry.util.thread.NoOpThreadChecker;
					public currentThreadSystemId(): number;
					public constructor();
					public isMainThread(threadId: number): boolean;
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public isMainThread(param0: number): boolean;
					public isMainThread(thread: java.lang.Thread): boolean;
					public isMainThread(sentryThread: io.sentry.protocol.SentryThread): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export module thread {
				export class ThreadChecker extends io.sentry.util.thread.IThreadChecker {
					public static class: java.lang.Class<io.sentry.util.thread.ThreadChecker>;
					public isMainThread(param0: java.lang.Thread): boolean;
					public getCurrentThreadName(): string;
					public currentThreadSystemId(): number;
					public static getInstance(): io.sentry.util.thread.ThreadChecker;
					public isMainThread(threadId: number): boolean;
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public isMainThread(param0: number): boolean;
					public isMainThread(thread: java.lang.Thread): boolean;
					public isMainThread(sentryThread: io.sentry.protocol.SentryThread): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export class Base64 {
				public static class: java.lang.Class<io.sentry.vendor.Base64>;
				public static DEFAULT: number = 0;
				public static NO_PADDING: number = 1;
				public static NO_WRAP: number = 2;
				public static CRLF: number = 4;
				public static URL_SAFE: number = 8;
				public static NO_CLOSE: number = 16;
				public static decode(str: string, flags: number): androidNative.Array<number>;
				public static encodeToString(e: androidNative.Array<number>, input: number): string;
				public static decode(input: androidNative.Array<number>, flags: number): androidNative.Array<number>;
				public static encodeToString(e: androidNative.Array<number>, input: number, offset: number, len: number): string;
				public static decode(input: androidNative.Array<number>, offset: number, len: number, flags: number): androidNative.Array<number>;
				public static encode(input: androidNative.Array<number>, offset: number, len: number, flags: number): androidNative.Array<number>;
				public static encode(input: androidNative.Array<number>, flags: number): androidNative.Array<number>;
			}
			export module Base64 {
				export abstract class Coder {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Coder>;
					public output: androidNative.Array<number>;
					public op: number;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
				}
				export class Decoder extends io.sentry.vendor.Base64.Coder {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Decoder>;
					public constructor(flags: number, output: androidNative.Array<number>);
					public maxOutputSize(len: number): number;
					public process(this_: androidNative.Array<number>, input: number, offset: number, len: boolean): boolean;
				}
				export class Encoder extends io.sentry.vendor.Base64.Coder {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Encoder>;
					public static LINE_GROUPS: number = 19;
					public do_padding: boolean;
					public do_newline: boolean;
					public do_cr: boolean;
					public process(t: androidNative.Array<number>, this_: number, input: number, offset: boolean): boolean;
					public constructor(flags: number, output: androidNative.Array<number>);
					public maxOutputSize(len: number): number;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export class SentryIso8601Utils {
				public static class: java.lang.Class<io.sentry.vendor.SentryIso8601Utils>;
				public static parseTimestamp(timezoneIndicator: string): number;
				public static formatTimestamp(millis: number): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export class SentryMath {
				public static class: java.lang.Class<io.sentry.vendor.SentryMath>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module internal {
					export module bind {
						export module util {
							export class ISO8601Utils {
								public static class: java.lang.Class<io.sentry.vendor.gson.internal.bind.util.ISO8601Utils>;
								public static TIMEZONE_UTC: java.util.TimeZone;
								public static format(date: java.util.Date): string;
								public static format(date: java.util.Date, millis: boolean): string;
								public static format(hours: java.util.Date, minutes: boolean, date: java.util.TimeZone): string;
								public static parse(calendar: string, endOffset: java.text.ParsePosition): java.util.Date;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module stream {
					export class JsonReader {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonReader>;
						public setLenient(lenient: boolean): void;
						public nextNull(): void;
						public beginObject(): void;
						public nextBoolean(): boolean;
						public close(): void;
						public isLenient(): boolean;
						public endArray(): void;
						public getPath(): string;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public peek(): io.sentry.vendor.gson.stream.JsonToken;
						public nextInt(): number;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public hasNext(): boolean;
						public constructor(in_: java.io.Reader);
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module stream {
					export class JsonScope {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonScope>;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module stream {
					export class JsonToken {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonToken>;
						public static BEGIN_ARRAY: io.sentry.vendor.gson.stream.JsonToken;
						public static END_ARRAY: io.sentry.vendor.gson.stream.JsonToken;
						public static BEGIN_OBJECT: io.sentry.vendor.gson.stream.JsonToken;
						public static END_OBJECT: io.sentry.vendor.gson.stream.JsonToken;
						public static NAME: io.sentry.vendor.gson.stream.JsonToken;
						public static STRING: io.sentry.vendor.gson.stream.JsonToken;
						public static NUMBER: io.sentry.vendor.gson.stream.JsonToken;
						public static BOOLEAN: io.sentry.vendor.gson.stream.JsonToken;
						public static NULL: io.sentry.vendor.gson.stream.JsonToken;
						public static END_DOCUMENT: io.sentry.vendor.gson.stream.JsonToken;
						public static values(): androidNative.Array<io.sentry.vendor.gson.stream.JsonToken>;
						public static valueOf(name: string): io.sentry.vendor.gson.stream.JsonToken;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module stream {
					export class JsonWriter {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonWriter>;
						public setLenient(lenient: boolean): void;
						public value(value: string): io.sentry.vendor.gson.stream.JsonWriter;
						public getIndent(): string;
						public value(value: java.lang.Number): io.sentry.vendor.gson.stream.JsonWriter;
						public close(): void;
						public endArray(): io.sentry.vendor.gson.stream.JsonWriter;
						public isLenient(): boolean;
						public nullValue(): io.sentry.vendor.gson.stream.JsonWriter;
						public flush(): void;
						public setIndent(indent: string): void;
						public endObject(): io.sentry.vendor.gson.stream.JsonWriter;
						public jsonValue(value: string): io.sentry.vendor.gson.stream.JsonWriter;
						public getSerializeNulls(): boolean;
						public setSerializeNulls(serializeNulls: boolean): void;
						public beginObject(): io.sentry.vendor.gson.stream.JsonWriter;
						public value(value: number): io.sentry.vendor.gson.stream.JsonWriter;
						public name(name: string): io.sentry.vendor.gson.stream.JsonWriter;
						public beginArray(): io.sentry.vendor.gson.stream.JsonWriter;
						public isHtmlSafe(): boolean;
						public value(value: boolean): io.sentry.vendor.gson.stream.JsonWriter;
						public constructor(out: java.io.Writer);
						public setHtmlSafe(htmlSafe: boolean): void;
						public value(value: java.lang.Boolean): io.sentry.vendor.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
			export module gson {
				export module stream {
					export class MalformedJsonException {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.MalformedJsonException>;
						public constructor(msg: string, throwable: java.lang.Throwable);
						public constructor(throwable: java.lang.Throwable);
						public constructor(msg: string);
					}
				}
			}
		}
	}
}

//Generics information:
//io.sentry.CancelledFuture:1
//io.sentry.CircularFifoQueue:1
//io.sentry.DisabledQueue:1
//io.sentry.JsonDeserializer:1
//io.sentry.NoOpDistributionApi.CompletedFuture:1
//io.sentry.OptionsContainer:1
//io.sentry.Sentry.OptionsConfiguration:1
//io.sentry.SentryValues:1
//io.sentry.SynchronizedCollection:1
//io.sentry.SynchronizedQueue:1
//io.sentry.android.core.cache.AndroidEnvelopeCache.TimestampMarkerHandler:1
//io.sentry.android.core.cache.AndroidEnvelopeCache.TimestampMarkerHandler.TimestampExtractor:1
//io.sentry.android.core.util.AndroidLazyEvaluator:1
//io.sentry.android.core.util.AndroidLazyEvaluator.AndroidEvaluator:1
//io.sentry.cache.tape.EmptyObjectQueue:1
//io.sentry.cache.tape.EmptyObjectQueue.EmptyIterator:1
//io.sentry.cache.tape.FileObjectQueue:1
//io.sentry.cache.tape.ObjectQueue:1
//io.sentry.cache.tape.ObjectQueue.Converter:1
//io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable:1
//io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1
//io.sentry.util.CollectionUtils.Mapper:2
//io.sentry.util.CollectionUtils.Predicate:1
//io.sentry.util.HintUtils.SentryConsumer:1
//io.sentry.util.HintUtils.SentryNullableConsumer:1
//io.sentry.util.LazyEvaluator:1
//io.sentry.util.LazyEvaluator.Evaluator:1
//io.sentry.util.Pair:2
//io.sentry.util.network.NetworkDetailCaptureUtils.NetworkBodyExtractor:1
//io.sentry.util.network.NetworkDetailCaptureUtils.NetworkHeaderExtractor:1

