/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable no-redeclare */

declare namespace io {
	export namespace sentry {
		export class AsyncHttpTransportFactory extends java.lang.Object implements io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.AsyncHttpTransportFactory>;
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Attachment extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Attachment>;
			public getFilename(): string;
			public constructor(param0: androidNative.Array<number>, param1: string, param2: string);
			public getPathname(): string;
			public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: boolean);
			public constructor(param0: string, param1: string, param2: string);
			public getContentType(): string;
			public constructor(param0: io.sentry.JsonSerializable, param1: string, param2: string, param3: string, param4: boolean);
			public constructor(param0: string, param1: string);
			public getBytes(): androidNative.Array<number>;
			public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: string, param4: boolean);
			public constructor(param0: androidNative.Array<number>, param1: string);
			public getAttachmentType(): string;
			public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string);
			public static fromScreenshot(param0: androidNative.Array<number>): io.sentry.Attachment;
			public static fromViewHierarchy(param0: io.sentry.protocol.ViewHierarchy): io.sentry.Attachment;
			public constructor(param0: string, param1: string, param2: string, param3: boolean);
			public static fromThreadDump(param0: androidNative.Array<number>): io.sentry.Attachment;
			public constructor(param0: string);
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean);
			public getSerializable(): io.sentry.JsonSerializable;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class BackfillingEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.BackfillingEventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.BackfillingEventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
				process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			});
			public constructor();
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Baggage extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Baggage>;
			public setUserId(param0: string): void;
			public static fromHeader(param0: java.util.List<string>): io.sentry.Baggage;
			public constructor(param0: io.sentry.ILogger);
			public toTraceContext(): io.sentry.TraceContext;
			public setPublicKey(param0: string): void;
			public setValuesFromScope(param0: io.sentry.IScope, param1: io.sentry.SentryOptions): void;
			public getTraceId(): string;
			public setValuesFromTransaction(param0: io.sentry.ITransaction, param1: io.sentry.protocol.User, param2: io.sentry.SentryOptions, param3: io.sentry.TracesSamplingDecision): void;
			public getRelease(): string;
			public toHeaderString(param0: string): string;
			public static fromHeader(param0: string, param1: io.sentry.ILogger): io.sentry.Baggage;
			public getSampled(): string;
			public getSampleRateDouble(): java.lang.Double;
			public static fromHeader(param0: java.util.List<string>, param1: boolean, param2: io.sentry.ILogger): io.sentry.Baggage;
			public setTraceId(param0: string): void;
			public getEnvironment(): string;
			public getUserId(): string;
			public get(param0: string): string;
			public constructor(param0: java.util.Map<string,string>, param1: string, param2: boolean, param3: io.sentry.ILogger);
			public isMutable(): boolean;
			public setTransaction(param0: string): void;
			public setSampled(param0: string): void;
			public constructor(param0: io.sentry.Baggage);
			public static fromHeader(param0: java.util.List<string>, param1: io.sentry.ILogger): io.sentry.Baggage;
			public static fromEvent(param0: io.sentry.SentryEvent, param1: io.sentry.SentryOptions): io.sentry.Baggage;
			public getThirdPartyHeader(): string;
			public set(param0: string, param1: string): void;
			public getPublicKey(): string;
			public getUserSegment(): string;
			public getTransaction(): string;
			public setSampleRate(param0: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public freeze(): void;
			public setEnvironment(param0: string): void;
			public static fromHeader(param0: string): io.sentry.Baggage;
			public setRelease(param0: string): void;
			public static fromHeader(param0: string, param1: boolean, param2: io.sentry.ILogger): io.sentry.Baggage;
			public setUserSegment(param0: string): void;
			public getSampleRate(): string;
		}
		export namespace Baggage {
			export class DSCKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Baggage.DSCKeys>;
				public static TRACE_ID: string;
				public static PUBLIC_KEY: string;
				public static RELEASE: string;
				public static USER_ID: string;
				public static ENVIRONMENT: string;
				public static USER_SEGMENT: string;
				public static TRANSACTION: string;
				public static SAMPLE_RATE: string;
				public static SAMPLED: string;
				public static ALL: java.util.List<string>;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class BaggageHeader extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.BaggageHeader>;
			public static BAGGAGE_HEADER: string;
			public static fromBaggageAndOutgoingHeader(param0: io.sentry.Baggage, param1: java.util.List<string>): io.sentry.BaggageHeader;
			public getName(): string;
			public getValue(): string;
			public constructor(param0: string);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Breadcrumb extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.Breadcrumb>;
			public static userInteraction(param0: string, param1: string, param2: string): io.sentry.Breadcrumb;
			public static userInteraction(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): io.sentry.Breadcrumb;
			public equals(param0: any): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public removeData(param0: string): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public static user(param0: string, param1: string): io.sentry.Breadcrumb;
			public static query(param0: string): io.sentry.Breadcrumb;
			public getData(param0: string): any;
			public getMessage(): string;
			public static graphqlOperation(param0: string, param1: string, param2: string): io.sentry.Breadcrumb;
			public static fromMap(param0: java.util.Map<string,any>, param1: io.sentry.SentryOptions): io.sentry.Breadcrumb;
			public getData(): java.util.Map<string,any>;
			public static userInteraction(param0: string, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>): io.sentry.Breadcrumb;
			public static http(param0: string, param1: string, param2: java.lang.Integer): io.sentry.Breadcrumb;
			public getTimestamp(): java.util.Date;
			public setData(param0: string, param1: any): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public constructor(param0: java.util.Date);
			public static debug(param0: string): io.sentry.Breadcrumb;
			public setCategory(param0: string): void;
			public static info(param0: string): io.sentry.Breadcrumb;
			public static http(param0: string, param1: string): io.sentry.Breadcrumb;
			public getType(): string;
			public constructor(param0: string);
			public static error(param0: string): io.sentry.Breadcrumb;
			public static graphqlDataFetcher(param0: string, param1: string, param2: string, param3: string): io.sentry.Breadcrumb;
			public constructor();
			public static graphqlDataLoader(param0: java.lang.Iterable<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: string): io.sentry.Breadcrumb;
			public static navigation(param0: string, param1: string): io.sentry.Breadcrumb;
			public setMessage(param0: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public static transaction(param0: string): io.sentry.Breadcrumb;
			public setType(param0: string): void;
			public getLevel(): io.sentry.SentryLevel;
			public getCategory(): string;
			public hashCode(): number;
		}
		export namespace Breadcrumb {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.Breadcrumb.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.Breadcrumb;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Breadcrumb.JsonKeys>;
				public static TIMESTAMP: string;
				public static MESSAGE: string;
				public static TYPE: string;
				public static DATA: string;
				public static CATEGORY: string;
				public static LEVEL: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.BuildConfig>;
			public static SENTRY_JAVA_SDK_NAME: string;
			public static VERSION_NAME: string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class CheckIn extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.CheckIn>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getCheckInId(): io.sentry.protocol.SentryId;
			public setStatus(param0: io.sentry.CheckInStatus): void;
			public getMonitorSlug(): string;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getStatus(): string;
			public getDuration(): java.lang.Double;
			public setStatus(param0: string): void;
			public setDuration(param0: java.lang.Double): void;
			public getRelease(): string;
			public getMonitorConfig(): io.sentry.MonitorConfig;
			public setMonitorConfig(param0: io.sentry.MonitorConfig): void;
			public getUnknown(): java.util.Map<string,any>;
			public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: io.sentry.CheckInStatus);
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public constructor(param0: string, param1: io.sentry.CheckInStatus);
			public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: string);
			public setMonitorSlug(param0: string): void;
			public getEnvironment(): string;
			public getContexts(): io.sentry.MonitorContexts;
		}
		export namespace CheckIn {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.CheckIn> {
				public static class: java.lang.Class<io.sentry.CheckIn.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.CheckIn;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.CheckIn.JsonKeys>;
				public static CHECK_IN_ID: string;
				public static MONITOR_SLUG: string;
				public static STATUS: string;
				public static DURATION: string;
				public static RELEASE: string;
				public static ENVIRONMENT: string;
				public static CONTEXTS: string;
				public static MONITOR_CONFIG: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class CheckInStatus {
			public static class: java.lang.Class<io.sentry.CheckInStatus>;
			public static IN_PROGRESS: io.sentry.CheckInStatus;
			public static ERROR: io.sentry.CheckInStatus;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): androidNative.Array<io.sentry.CheckInStatus>;
			public apiName(): string;
			public static valueOf(param0: string): io.sentry.CheckInStatus;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<io.sentry.CircularFifoQueue<any>>;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public constructor(param0: java.util.Collection<any>);
			public toArray(): androidNative.Array<any>;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public toArray(param0: any /* any*/): androidNative.Array<any>;
			public element(): any;
			public iterator(): java.util.Iterator<any>;
			public isFull(): boolean;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public poll(): any;
			public isAtFullCapacity(): boolean;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public maxSize(): number;
			public forEach(param0: any /* any*/): void;
			public peek(): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public offer(param0: any): boolean;
			public remove(): any;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
			public hashCode(): number;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class CpuCollectionData extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.CpuCollectionData>;
			public getTimestampMillis(): number;
			public getCpuUsagePercentage(): number;
			public constructor(param0: number, param1: number);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class CustomSamplingContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.CustomSamplingContext>;
			public set(param0: string, param1: any): void;
			public get(param0: string): any;
			public getData(): java.util.Map<string,any>;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DataCategory {
			public static class: java.lang.Class<io.sentry.DataCategory>;
			public static All: io.sentry.DataCategory;
			public static Default: io.sentry.DataCategory;
			public static Error: io.sentry.DataCategory;
			public static Session: io.sentry.DataCategory;
			public static Attachment: io.sentry.DataCategory;
			public static Profile: io.sentry.DataCategory;
			public static Transaction: io.sentry.DataCategory;
			public static Security: io.sentry.DataCategory;
			public static UserReport: io.sentry.DataCategory;
			public static Unknown: io.sentry.DataCategory;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): io.sentry.DataCategory;
			public static values(): androidNative.Array<io.sentry.DataCategory>;
			public getCategory(): string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DateUtils extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.DateUtils>;
			public static getCurrentDateTime(): java.util.Date;
			public static millisToNanos(param0: number): number;
			public static millisToSeconds(param0: number): number;
			public static nanosToMillis(param0: number): number;
			public static toUtilDateNotNull(param0: io.sentry.SentryDate): java.util.Date;
			public static getDateTime(param0: string): java.util.Date;
			public static toUtilDate(param0: io.sentry.SentryDate): java.util.Date;
			public static getTimestamp(param0: java.util.Date): string;
			public static nanosToDate(param0: number): java.util.Date;
			public static secondsToNanos(param0: number): number;
			public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
			public static nanosToSeconds(param0: number): number;
			public static dateToSeconds(param0: java.util.Date): number;
			public static dateToNanos(param0: java.util.Date): number;
			public static getDateTime(param0: number): java.util.Date;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DeduplicateMultithreadedEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DeduplicateMultithreadedEventProcessor>;
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public constructor(param0: io.sentry.SentryOptions);
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DefaultTransactionPerformanceCollector extends java.lang.Object implements io.sentry.TransactionPerformanceCollector {
			public static class: java.lang.Class<io.sentry.DefaultTransactionPerformanceCollector>;
			public constructor(param0: io.sentry.SentryOptions);
			public start(param0: io.sentry.ITransaction): void;
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DiagnosticLogger extends java.lang.Object implements io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.DiagnosticLogger>;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public getLogger(): io.sentry.ILogger;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.ILogger);
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export abstract class DirectoryProcessor extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.DirectoryProcessor>;
			public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
			public processDirectory(param0: java.io.File): void;
			public isRelevantFileName(param0: string): boolean;
		}
		export namespace DirectoryProcessor {
			export class SendCachedEnvelopeHint extends java.lang.Object implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable, io.sentry.hints.Enqueable {
				public static class: java.lang.Class<io.sentry.DirectoryProcessor.SendCachedEnvelopeHint>;
				public isRetry(): boolean;
				public setResult(param0: boolean): void;
				public constructor(param0: number, param1: io.sentry.ILogger, param2: string, param3: java.util.Queue<string>);
				public setRetry(param0: boolean): void;
				public isSuccess(): boolean;
				public markEnqueued(): void;
				public waitFlush(): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Dsn extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Dsn>;
			public getSecretKey(): string;
			public getPublicKey(): string;
			public getPath(): string;
			public getProjectId(): string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DsnUtil extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.DsnUtil>;
			public static urlContainsDsnHost(param0: io.sentry.SentryOptions, param1: string): boolean;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class DuplicateEventDetectionEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DuplicateEventDetectionEventProcessor>;
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public constructor(param0: io.sentry.SentryOptions);
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class EnvelopeReader extends java.lang.Object implements io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.EnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public constructor(param0: io.sentry.ISerializer);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class EnvelopeSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.EnvelopeSender>;
			public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.ISerializer, param2: io.sentry.ILogger, param3: number, param4: number);
			public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class EventProcessor extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.EventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
				process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			});
			public constructor();
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ExternalOptions extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ExternalOptions>;
			public setEnableTracing(param0: java.lang.Boolean): void;
			public setEnableUncaughtExceptionHandler(param0: java.lang.Boolean): void;
			public setServerName(param0: string): void;
			public setTracesSampleRate(param0: java.lang.Double): void;
			public setProfilesSampleRate(param0: java.lang.Double): void;
			public setEnablePrettySerializationOutput(param0: java.lang.Boolean): void;
			public getRelease(): string;
			public getEnableDeduplication(): java.lang.Boolean;
			public getContextTags(): java.util.List<string>;
			public getInAppIncludes(): java.util.List<string>;
			public addBundleId(param0: string): void;
			/** @deprecated */
			public getTracingOrigins(): java.util.List<string>;
			public getProfilesSampleRate(): java.lang.Double;
			public isEnabled(): java.lang.Boolean;
			public addInAppInclude(param0: string): void;
			public setMaxRequestBodySize(param0: io.sentry.SentryOptions.RequestSize): void;
			public setProguardUuid(param0: string): void;
			public getSendClientReports(): java.lang.Boolean;
			public getProguardUuid(): string;
			public constructor();
			public getDist(): string;
			public getDebug(): java.lang.Boolean;
			public setEnvironment(param0: string): void;
			public setDebug(param0: java.lang.Boolean): void;
			public getIgnoredCheckIns(): java.util.List<string>;
			public setRelease(param0: string): void;
			public setIgnoredCheckIns(param0: java.util.List<string>): void;
			public getBundleIds(): java.util.Set<string>;
			public setEnabled(param0: java.lang.Boolean): void;
			public getServerName(): string;
			/** @deprecated */
			public addTracingOrigin(param0: string): void;
			public addContextTag(param0: string): void;
			public getIdleTimeout(): java.lang.Long;
			public isSendModules(): java.lang.Boolean;
			public getTracePropagationTargets(): java.util.List<string>;
			public addInAppExclude(param0: string): void;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public setSendModules(param0: java.lang.Boolean): void;
			public getTracesSampleRate(): java.lang.Double;
			public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
			public getTags(): java.util.Map<string,string>;
			public getInAppExcludes(): java.util.List<string>;
			public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
			public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
			public getEnvironment(): string;
			public setDist(param0: string): void;
			public setTag(param0: string, param1: string): void;
			public setIdleTimeout(param0: java.lang.Long): void;
			public getDsn(): string;
			public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
			public addTracePropagationTarget(param0: string): void;
			public setDsn(param0: string): void;
			public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
			public getEnableTracing(): java.lang.Boolean;
			public static from(param0: io.sentry.config.PropertiesProvider, param1: io.sentry.ILogger): io.sentry.ExternalOptions;
			public setSendClientReports(param0: java.lang.Boolean): void;
			public isEnablePrettySerializationOutput(): java.lang.Boolean;
			public getPrintUncaughtStackTrace(): java.lang.Boolean;
			public setPrintUncaughtStackTrace(param0: java.lang.Boolean): void;
			public setEnableDeduplication(param0: java.lang.Boolean): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class FullyDisplayedReporter extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.FullyDisplayedReporter>;
			public registerFullyDrawnListener(param0: io.sentry.FullyDisplayedReporter.FullyDisplayedReporterListener): void;
			public reportFullyDrawn(): void;
			public static getInstance(): io.sentry.FullyDisplayedReporter;
		}
		export namespace FullyDisplayedReporter {
			export class FullyDisplayedReporterListener extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class Hint extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Hint>;
			public static withAttachment(param0: io.sentry.Attachment): io.sentry.Hint;
			public clear(): void;
			public set(param0: string, param1: any): void;
			public get(param0: string): any;
			public getThreadDump(): io.sentry.Attachment;
			public clearAttachments(): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setScreenshot(param0: io.sentry.Attachment): void;
			public setThreadDump(param0: io.sentry.Attachment): void;
			public getViewHierarchy(): io.sentry.Attachment;
			public constructor();
			public static withAttachments(param0: java.util.List<io.sentry.Attachment>): io.sentry.Hint;
			public getAs(param0: string, param1: java.lang.Class<any>): any;
			public remove(param0: string): void;
			public addAttachments(param0: java.util.List<io.sentry.Attachment>): void;
			public replaceAttachments(param0: java.util.List<io.sentry.Attachment>): void;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setViewHierarchy(param0: io.sentry.Attachment): void;
			public getScreenshot(): io.sentry.Attachment;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class HostnameCache extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.HostnameCache>;
		}
		export namespace HostnameCache {
			export class HostnameCacheThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
				public static class: java.lang.Class<io.sentry.HostnameCache.HostnameCacheThreadFactory>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class HttpStatusCodeRange extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.HttpStatusCodeRange>;
			public static DEFAULT_MIN: number;
			public static DEFAULT_MAX: number;
			public isInRange(param0: number): boolean;
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Hub extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.Hub>;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public constructor(param0: io.sentry.SentryOptions);
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			/** @deprecated */
			public reportFullDisplayed(): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public clone(): any;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public popScope(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public clone(): io.sentry.IHub;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class HubAdapter extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.HubAdapter>;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			/** @deprecated */
			public reportFullDisplayed(): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public clone(): any;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.HubAdapter;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public popScope(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public clone(): io.sentry.IHub;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ICollector extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ICollector>;
			/**
			 * Constructs a new instance of the io.sentry.ICollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare namespace io {
	export namespace sentry {
		export class IConnectionStatusProvider extends java.lang.Object {
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
		export namespace IConnectionStatusProvider {
			export class ConnectionStatus {
				public static class: java.lang.Class<io.sentry.IConnectionStatusProvider.ConnectionStatus>;
				public static UNKNOWN: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static CONNECTED: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static DISCONNECTED: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static NO_PERMISSION: io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static values(): androidNative.Array<io.sentry.IConnectionStatusProvider.ConnectionStatus>;
				public static valueOf(param0: string): io.sentry.IConnectionStatusProvider.ConnectionStatus;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export class IConnectionStatusObserver extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class IEnvelopeReader extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class IEnvelopeSender extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class IHub extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IHub>;
			/**
			 * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(param0: string): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				startSession(): void;
				endSession(): void;
				close(): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				addBreadcrumb(param0: string): void;
				addBreadcrumb(param0: string, param1: string): void;
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
				pushScope(): void;
				popScope(): void;
				withScope(param0: io.sentry.ScopeCallback): void;
				configureScope(param0: io.sentry.ScopeCallback): void;
				bindClient(param0: io.sentry.ISentryClient): void;
				flush(param0: number): void;
				clone(): io.sentry.IHub;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
				startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
				traceHeaders(): io.sentry.SentryTraceHeader;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
				getSpan(): io.sentry.ISpan;
				getTransaction(): io.sentry.ITransaction;
				getOptions(): io.sentry.SentryOptions;
				isCrashedLastRun(): java.lang.Boolean;
				reportFullyDisplayed(): void;
				reportFullDisplayed(): void;
				continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
				getTraceparent(): io.sentry.SentryTraceHeader;
				getBaggage(): io.sentry.BaggageHeader;
				captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
				getRateLimiter(): io.sentry.transport.RateLimiter;
			});
			public constructor();
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			/** @deprecated */
			public reportFullDisplayed(): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public clone(): any;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public popScope(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public clone(): io.sentry.IHub;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: string): void;
			public getSpan(): io.sentry.ISpan;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ILogger extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class IMemoryCollector extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IMemoryCollector>;
			/**
			 * Constructs a new instance of the io.sentry.IMemoryCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				collect(): io.sentry.MemoryCollectionData;
			});
			public constructor();
			public collect(): io.sentry.MemoryCollectionData;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class IOptionsObserver extends java.lang.Object {
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
			});
			public constructor();
			public setTags(param0: java.util.Map<string,string>): void;
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public setProguardUuid(param0: string): void;
			public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
			public setDist(param0: string): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class IScope extends java.lang.Object {
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
				setTransaction(param0: io.sentry.ITransaction): void;
				getUser(): io.sentry.protocol.User;
				setUser(param0: io.sentry.protocol.User): void;
				getScreen(): string;
				setScreen(param0: string): void;
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
				addEventProcessor(param0: io.sentry.EventProcessor): void;
				withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
				startSession(): io.sentry.Scope.SessionPair;
				endSession(): io.sentry.Session;
				withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
				getOptions(): io.sentry.SentryOptions;
				getSession(): io.sentry.Session;
				setPropagationContext(param0: io.sentry.PropagationContext): void;
				getPropagationContext(): io.sentry.PropagationContext;
				withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
				clone(): io.sentry.IScope;
			});
			public constructor();
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: string): void;
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
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public clone(): any;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public endSession(): io.sentry.Session;
			public getSpan(): io.sentry.ISpan;
			public getSession(): io.sentry.Session;
			public removeContexts(param0: string): void;
			public getScreen(): string;
			public setExtra(param0: string, param1: string): void;
			public getTags(): java.util.Map<string,string>;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public getTransaction(): io.sentry.ITransaction;
			public clearAttachments(): void;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getLevel(): io.sentry.SentryLevel;
			public setContexts(param0: string, param1: any): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class IScopeObserver extends java.lang.Object {
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
				setTrace(param0: io.sentry.SpanContext): void;
			});
			public constructor();
			public setTags(param0: java.util.Map<string,string>): void;
			public setTrace(param0: io.sentry.SpanContext): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setExtra(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.Collection<string>): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public setTag(param0: string, param1: string): void;
			public setContexts(param0: io.sentry.protocol.Contexts): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ISentryClient extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISentryClient>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				close(): void;
				flush(param0: number): void;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
				captureSession(param0: io.sentry.Session): void;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
				captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
				getRateLimiter(): io.sentry.transport.RateLimiter;
			});
			public constructor();
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public close(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ISentryExecutorService extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class ISerializer extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class ISpan extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISpan>;
			/**
			 * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
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
			});
			public constructor();
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public isNoOp(): boolean;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setOperation(param0: string): void;
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
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ITransaction extends java.lang.Object implements io.sentry.ISpan {
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
				isSampled(): java.lang.Boolean;
				isProfileSampled(): java.lang.Boolean;
				getSamplingDecision(): io.sentry.TracesSamplingDecision;
				getLatestActiveSpan(): io.sentry.Span;
				getEventId(): io.sentry.protocol.SentryId;
				scheduleFinish(): void;
				forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
				finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
				setContext(param0: string, param1: any): void;
				getContexts(): io.sentry.protocol.Contexts;
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
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
			});
			public constructor();
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public isNoOp(): boolean;
			public getData(param0: string): any;
			public scheduleFinish(): void;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public isProfileSampled(): java.lang.Boolean;
			public setOperation(param0: string): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getTag(param0: string): string;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ITransactionProfiler extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ITransactionProfiler>;
			/**
			 * Constructs a new instance of the io.sentry.ITransactionProfiler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onTransactionStart(param0: io.sentry.ITransaction): void;
				onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
				close(): void;
			});
			public constructor();
			public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
			public onTransactionStart(param0: io.sentry.ITransaction): void;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ITransportFactory extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class Instrumenter {
			public static class: java.lang.Class<io.sentry.Instrumenter>;
			public static SENTRY: io.sentry.Instrumenter;
			public static OTEL: io.sentry.Instrumenter;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): io.sentry.Instrumenter;
			public static values(): androidNative.Array<io.sentry.Instrumenter>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Integration extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Integration>;
			/**
			 * Constructs a new instance of the io.sentry.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			});
			public constructor();
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class IpAddressUtils extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IpAddressUtils>;
			public static DEFAULT_IP_ADDRESS: string;
			public static isDefault(param0: string): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JavaMemoryCollector extends java.lang.Object implements io.sentry.ICollector {
			public static class: java.lang.Class<io.sentry.JavaMemoryCollector>;
			public setup(): void;
			public constructor();
			public collect(param0: io.sentry.PerformanceCollectionData): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonDeserializer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.JsonDeserializer<any>>;
			/**
			 * Constructs a new instance of the io.sentry.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): T;
			});
			public constructor();
			public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): T;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonObjectDeserializer extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.JsonObjectDeserializer>;
			public constructor();
			public deserialize(param0: io.sentry.JsonObjectReader): any;
		}
		export namespace JsonObjectDeserializer {
			export class NextValue extends java.lang.Object {
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
			export class Token extends java.lang.Object {
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
			export class TokenArray extends java.lang.Object implements io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenArray>;
				public getValue(): any;
			}
			export class TokenMap extends java.lang.Object implements io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenMap>;
				public getValue(): any;
			}
			export class TokenName extends java.lang.Object implements io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenName>;
				public getValue(): any;
			}
			export class TokenPrimitive extends java.lang.Object implements io.sentry.JsonObjectDeserializer.Token {
				public static class: java.lang.Class<io.sentry.JsonObjectDeserializer.TokenPrimitive>;
				public getValue(): any;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonObjectReader extends io.sentry.vendor.gson.stream.JsonReader {
			public static class: java.lang.Class<io.sentry.JsonObjectReader>;
			public nextIntegerOrNull(): java.lang.Integer;
			public nextMapOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.Map<any,any>;
			public nextLongOrNull(): java.lang.Long;
			public nextListOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): java.util.List<any>;
			public nextStringOrNull(): string;
			public nextDoubleOrNull(): java.lang.Double;
			public nextObjectOrNull(): any;
			public static dateOrNull(param0: string, param1: io.sentry.ILogger): java.util.Date;
			public nextFloat(): java.lang.Float;
			public nextOrNull(param0: io.sentry.ILogger, param1: io.sentry.JsonDeserializer<any>): any;
			public constructor(param0: java.io.Reader);
			public nextDateOrNull(param0: io.sentry.ILogger): java.util.Date;
			public nextFloatOrNull(): java.lang.Float;
			public nextTimeZoneOrNull(param0: io.sentry.ILogger): java.util.TimeZone;
			public close(): void;
			public nextBooleanOrNull(): java.lang.Boolean;
			public nextUnknown(param0: io.sentry.ILogger, param1: java.util.Map<string,any>, param2: string): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonObjectSerializer extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.JsonObjectSerializer>;
			public static OBJECT_PLACEHOLDER: string;
			public jsonReflectionObjectSerializer: io.sentry.JsonReflectionObjectSerializer;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger, param2: any): void;
			public constructor(param0: number);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonObjectWriter extends java.lang.Object implements io.sentry.ObjectWriter {
			public static class: java.lang.Class<io.sentry.JsonObjectWriter>;
			public beginObject(): io.sentry.ObjectWriter;
			public nullValue(): io.sentry.ObjectWriter;
			public endObject(): io.sentry.JsonObjectWriter;
			public nullValue(): io.sentry.JsonObjectWriter;
			public beginObject(): io.sentry.JsonObjectWriter;
			public endArray(): io.sentry.ObjectWriter;
			public name(param0: string): io.sentry.JsonObjectWriter;
			public endObject(): io.sentry.ObjectWriter;
			public value(param0: boolean): io.sentry.JsonObjectWriter;
			public beginArray(): io.sentry.ObjectWriter;
			public endArray(): io.sentry.JsonObjectWriter;
			public value(param0: number): io.sentry.JsonObjectWriter;
			public beginArray(): io.sentry.JsonObjectWriter;
			public constructor(param0: java.io.Writer, param1: number);
			public name(param0: string): io.sentry.ObjectWriter;
			public value(param0: java.lang.Boolean): io.sentry.JsonObjectWriter;
			public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
			public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
			public value(param0: java.lang.Number): io.sentry.ObjectWriter;
			public value(param0: number): io.sentry.ObjectWriter;
			public value(param0: boolean): io.sentry.ObjectWriter;
			public value(param0: io.sentry.ILogger, param1: any): io.sentry.JsonObjectWriter;
			public value(param0: string): io.sentry.JsonObjectWriter;
			public value(param0: java.lang.Number): io.sentry.JsonObjectWriter;
			public setIndent(param0: string): void;
			public value(param0: string): io.sentry.ObjectWriter;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonReflectionObjectSerializer extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.JsonReflectionObjectSerializer>;
			public serialize(param0: any, param1: io.sentry.ILogger): any;
			public serializeObject(param0: any, param1: io.sentry.ILogger): java.util.Map<string,any>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonSerializable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class JsonSerializer extends java.lang.Object implements io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.JsonSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public constructor(param0: io.sentry.SentryOptions);
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class JsonUnknown extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class MainEventProcessor extends java.lang.Object implements io.sentry.EventProcessor, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.MainEventProcessor>;
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public constructor(param0: io.sentry.SentryOptions);
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MeasurementUnit extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.MeasurementUnit>;
			/**
			 * Constructs a new instance of the io.sentry.MeasurementUnit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				apiName(): string;
			});
			public constructor();
			public static NONE: string;
			public name(): string;
			public apiName(): string;
		}
		export namespace MeasurementUnit {
			export class Custom extends java.lang.Object implements io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Custom>;
				public name(): string;
				public apiName(): string;
				public constructor(param0: string);
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
				public static valueOf(param0: string): io.sentry.MeasurementUnit.Duration;
				public name(): string;
				public apiName(): string;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export class Fraction extends io.sentry.MeasurementUnit {
				public static class: java.lang.Class<io.sentry.MeasurementUnit.Fraction>;
				public static RATIO: io.sentry.MeasurementUnit.Fraction;
				public static PERCENT: io.sentry.MeasurementUnit.Fraction;
				public static values(): androidNative.Array<io.sentry.MeasurementUnit.Fraction>;
				public name(): string;
				public static valueOf(param0: string): io.sentry.MeasurementUnit.Fraction;
				public apiName(): string;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
				public static valueOf(param0: string): io.sentry.MeasurementUnit.Information;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MemoryCollectionData extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.MemoryCollectionData>;
			public constructor(param0: number, param1: number, param2: number);
			public getTimestampMillis(): number;
			public getUsedHeapMemory(): number;
			public getUsedNativeMemory(): number;
			public constructor(param0: number, param1: number);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MonitorConfig extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.MonitorConfig>;
			public constructor(param0: io.sentry.MonitorSchedule);
			public setCheckinMargin(param0: java.lang.Long): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getSchedule(): io.sentry.MonitorSchedule;
			public setMaxRuntime(param0: java.lang.Long): void;
			public getTimezone(): string;
			public getMaxRuntime(): java.lang.Long;
			public setSchedule(param0: io.sentry.MonitorSchedule): void;
			public setTimezone(param0: string): void;
			public getCheckinMargin(): java.lang.Long;
		}
		export namespace MonitorConfig {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorConfig> {
				public static class: java.lang.Class<io.sentry.MonitorConfig.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.MonitorConfig;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.MonitorConfig.JsonKeys>;
				public static SCHEDULE: string;
				public static CHECKIN_MARGIN: string;
				public static MAX_RUNTIME: string;
				public static TIMEZONE: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MonitorContexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements io.sentry.JsonSerializable  {
			public static class: java.lang.Class<io.sentry.MonitorContexts>;
			public constructor(param0: number, param1: number, param2: number);
			public forEach(param0: number, param1: any /* any<any,any>*/): void;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrDefault(param0: any, param1: any): any;
			public static copyOf(param0: java.util.Map<any,any>): java.util.Map<any,any>;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<any>;
			public constructor(param0: number, param1: number);
			public clear(): void;
			public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any,any>;
			public setTrace(param0: io.sentry.SpanContext): void;
			public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public static entry(param0: any, param1: any): java.util.Map.Entry<any,any>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public constructor(param0: number);
			public constructor(param0: io.sentry.MonitorContexts);
			public constructor(param0: java.util.Map<any,any>);
			public constructor();
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public getTrace(): io.sentry.SpanContext;
			public remove(param0: any, param1: any): boolean;
			public static ofEntries(param0: androidNative.Array<java.util.Map.Entry<any,any>>): java.util.Map<any,any>;
			public containsKey(param0: any): boolean;
			public hashCode(): number;
		}
		export namespace MonitorContexts {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorContexts> {
				public static class: java.lang.Class<io.sentry.MonitorContexts.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.MonitorContexts;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MonitorSchedule extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.MonitorSchedule>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static crontab(param0: string): io.sentry.MonitorSchedule;
			public setUnit(param0: io.sentry.MonitorScheduleUnit): void;
			public setValue(param0: java.lang.Integer): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(param0: string, param1: string, param2: string);
			public setValue(param0: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public getUnit(): string;
			public setType(param0: string): void;
			public setUnit(param0: string): void;
			public getType(): string;
			public getValue(): string;
			public static interval(param0: java.lang.Integer, param1: io.sentry.MonitorScheduleUnit): io.sentry.MonitorSchedule;
		}
		export namespace MonitorSchedule {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.MonitorSchedule> {
				public static class: java.lang.Class<io.sentry.MonitorSchedule.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.MonitorSchedule;
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.MonitorSchedule.JsonKeys>;
				public static TYPE: string;
				public static VALUE: string;
				public static UNIT: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MonitorScheduleType {
			public static class: java.lang.Class<io.sentry.MonitorScheduleType>;
			public static CRONTAB: io.sentry.MonitorScheduleType;
			public static INTERVAL: io.sentry.MonitorScheduleType;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): io.sentry.MonitorScheduleType;
			public static values(): androidNative.Array<io.sentry.MonitorScheduleType>;
			public apiName(): string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class MonitorScheduleUnit {
			public static class: java.lang.Class<io.sentry.MonitorScheduleUnit>;
			public static MINUTE: io.sentry.MonitorScheduleUnit;
			public static HOUR: io.sentry.MonitorScheduleUnit;
			public static DAY: io.sentry.MonitorScheduleUnit;
			public static WEEK: io.sentry.MonitorScheduleUnit;
			public static MONTH: io.sentry.MonitorScheduleUnit;
			public static YEAR: io.sentry.MonitorScheduleUnit;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): androidNative.Array<io.sentry.MonitorScheduleUnit>;
			public static valueOf(param0: string): io.sentry.MonitorScheduleUnit;
			public apiName(): string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpConnectionStatusProvider extends java.lang.Object implements io.sentry.IConnectionStatusProvider {
			public static class: java.lang.Class<io.sentry.NoOpConnectionStatusProvider>;
			public removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
			public getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
			public getConnectionType(): string;
			public constructor();
			public addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpEnvelopeReader extends java.lang.Object implements io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.NoOpEnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public static getInstance(): io.sentry.NoOpEnvelopeReader;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpHub extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.NoOpHub>;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			/** @deprecated */
			public reportFullDisplayed(): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public clone(): any;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public reportFullyDisplayed(): void;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public popScope(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public clone(): io.sentry.IHub;
			public getBaggage(): io.sentry.BaggageHeader;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			/** @deprecated */
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpHub;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public setExtra(param0: string, param1: string): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.Hint, param3: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public close(): void;
			public setTag(param0: string, param1: string): void;
			public captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public startSession(): void;
			public getTransaction(): io.sentry.ITransaction;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public getTraceparent(): io.sentry.SentryTraceHeader;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpLogger extends java.lang.Object implements io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.NoOpLogger>;
			public static getInstance(): io.sentry.NoOpLogger;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpScope extends java.lang.Object implements io.sentry.IScope {
			public static class: java.lang.Class<io.sentry.NoOpScope>;
			public static getInstance(): io.sentry.NoOpScope;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: string): void;
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
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public clone(): any;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public endSession(): io.sentry.Session;
			public getSpan(): io.sentry.ISpan;
			public getSession(): io.sentry.Session;
			public removeContexts(param0: string): void;
			public getScreen(): string;
			public setExtra(param0: string, param1: string): void;
			public getTags(): java.util.Map<string,string>;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public getTransaction(): io.sentry.ITransaction;
			public clearAttachments(): void;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getLevel(): io.sentry.SentryLevel;
			public setContexts(param0: string, param1: any): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpSentryClient extends java.lang.Object implements io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.NoOpSentryClient>;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public static getInstance(): io.sentry.NoOpSentryClient;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public close(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpSentryExecutorService extends java.lang.Object implements io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.NoOpSentryExecutorService>;
			public isClosed(): boolean;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
			public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
			public static getInstance(): io.sentry.ISentryExecutorService;
			public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpSerializer extends java.lang.Object implements io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.NoOpSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public static getInstance(): io.sentry.NoOpSerializer;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserializeCollection(param0: java.io.Reader, param1: java.lang.Class<any>, param2: io.sentry.JsonDeserializer<any>): any;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpSpan extends java.lang.Object implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.NoOpSpan>;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public isNoOp(): boolean;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public static getInstance(): io.sentry.NoOpSpan;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public setOperation(param0: string): void;
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
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpTransaction extends java.lang.Object implements io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.NoOpTransaction>;
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public isNoOp(): boolean;
			public getData(param0: string): any;
			public scheduleFinish(): void;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public setContext(param0: string, param1: any): void;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public static getInstance(): io.sentry.NoOpTransaction;
			public isProfileSampled(): java.lang.Boolean;
			public setOperation(param0: string): void;
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getTag(param0: string): string;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public getFinishDate(): io.sentry.SentryDate;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpTransactionPerformanceCollector extends java.lang.Object implements io.sentry.TransactionPerformanceCollector {
			public static class: java.lang.Class<io.sentry.NoOpTransactionPerformanceCollector>;
			public static getInstance(): io.sentry.NoOpTransactionPerformanceCollector;
			public start(param0: io.sentry.ITransaction): void;
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpTransactionProfiler extends java.lang.Object implements io.sentry.ITransactionProfiler {
			public static class: java.lang.Class<io.sentry.NoOpTransactionProfiler>;
			public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
			public static getInstance(): io.sentry.NoOpTransactionProfiler;
			public onTransactionStart(param0: io.sentry.ITransaction): void;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class NoOpTransportFactory extends java.lang.Object implements io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.NoOpTransportFactory>;
			public static getInstance(): io.sentry.NoOpTransportFactory;
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ObjectWriter extends java.lang.Object {
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
				nullValue(): io.sentry.ObjectWriter;
				value(param0: boolean): io.sentry.ObjectWriter;
				value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
				value(param0: number): io.sentry.ObjectWriter;
				value(param0: number): io.sentry.ObjectWriter;
				value(param0: java.lang.Number): io.sentry.ObjectWriter;
				value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
			});
			public constructor();
			public endArray(): io.sentry.ObjectWriter;
			public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
			public value(param0: number): io.sentry.ObjectWriter;
			public value(param0: boolean): io.sentry.ObjectWriter;
			public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
			public beginObject(): io.sentry.ObjectWriter;
			public endObject(): io.sentry.ObjectWriter;
			public beginArray(): io.sentry.ObjectWriter;
			public nullValue(): io.sentry.ObjectWriter;
			public value(param0: string): io.sentry.ObjectWriter;
			public value(param0: java.lang.Number): io.sentry.ObjectWriter;
			public name(param0: string): io.sentry.ObjectWriter;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class OptionsContainer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.OptionsContainer<any>>;
			public createInstance(): T;
			public static create(param0: java.lang.Class<any>): io.sentry.OptionsContainer<any>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class OutboxSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.OutboxSender>;
			public processFile(param0: java.io.File, param1: io.sentry.Hint): void;
			public processEnvelopeFile(param0: string, param1: io.sentry.Hint): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.IEnvelopeReader, param2: io.sentry.ISerializer, param3: io.sentry.ILogger, param4: number, param5: number);
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class PerformanceCollectionData extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.PerformanceCollectionData>;
			public getCpuData(): io.sentry.CpuCollectionData;
			public addMemoryData(param0: io.sentry.MemoryCollectionData): void;
			public addCpuData(param0: io.sentry.CpuCollectionData): void;
			public constructor();
			public getMemoryData(): io.sentry.MemoryCollectionData;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class PreviousSessionFinalizer extends java.lang.Object implements java.lang.Runnable {
			public static class: java.lang.Class<io.sentry.PreviousSessionFinalizer>;
			public run(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ProfilingTraceData extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfilingTraceData>;
			public static TRUNCATION_REASON_NORMAL: string;
			public static TRUNCATION_REASON_TIMEOUT: string;
			public static TRUNCATION_REASON_BACKGROUNDED: string;
			public setCpuArchitecture(param0: string): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public setTruncationReason(param0: string): void;
			public getAndroidApiLevel(): number;
			public setSampledProfile(param0: string): void;
			public getDeviceOsVersion(): string;
			public getProfileId(): string;
			public getTraceId(): string;
			public readDeviceCpuFrequencies(): void;
			public getRelease(): string;
			public getTransactionId(): string;
			public constructor(param0: java.io.File, param1: java.util.List<io.sentry.ProfilingTransactionData>, param2: io.sentry.ITransaction, param3: string, param4: number, param5: string, param6: java.util.concurrent.Callable<java.util.List<java.lang.Integer>>, param7: string, param8: string, param9: string, param10: java.lang.Boolean, param11: string, param12: string, param13: string, param14: string, param15: string, param16: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>);
			public isDeviceIsEmulator(): boolean;
			public setDevicePhysicalMemoryBytes(param0: string): void;
			public getTransactions(): java.util.List<io.sentry.ProfilingTransactionData>;
			public setTraceId(param0: string): void;
			public setDeviceOsBuildNumber(param0: string): void;
			public setTransactionName(param0: string): void;
			public setDeviceLocale(param0: string): void;
			public getDeviceCpuFrequencies(): java.util.List<java.lang.Integer>;
			public setProfileId(param0: string): void;
			public getCpuArchitecture(): string;
			public getTransactionName(): string;
			public getDeviceOsBuildNumber(): string;
			public setEnvironment(param0: string): void;
			public setDeviceOsVersion(param0: string): void;
			public setRelease(param0: string): void;
			public getDeviceOsName(): string;
			public getDurationNs(): string;
			public getTruncationReason(): string;
			public getDeviceLocale(): string;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getPlatform(): string;
			public getSampledProfile(): string;
			public getDevicePhysicalMemoryBytes(): string;
			public setDeviceManufacturer(param0: string): void;
			public setDurationNs(param0: string): void;
			public setAndroidApiLevel(param0: number): void;
			public getMeasurementsMap(): java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>;
			public getEnvironment(): string;
			public setDeviceIsEmulator(param0: boolean): void;
			public setBuildId(param0: string): void;
			public setTransactionId(param0: string): void;
			public getTraceFile(): java.io.File;
			public constructor(param0: java.io.File, param1: io.sentry.ITransaction);
			public getBuildId(): string;
			public getDeviceModel(): string;
			public setDeviceCpuFrequencies(param0: java.util.List<java.lang.Integer>): void;
			public setDeviceModel(param0: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public getDeviceManufacturer(): string;
			public setTransactions(param0: java.util.List<io.sentry.ProfilingTransactionData>): void;
		}
		export namespace ProfilingTraceData {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTraceData> {
				public static class: java.lang.Class<io.sentry.ProfilingTraceData.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.ProfilingTraceData;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.ProfilingTraceData.JsonKeys>;
				public static ANDROID_API_LEVEL: string;
				public static DEVICE_LOCALE: string;
				public static DEVICE_MANUFACTURER: string;
				public static DEVICE_MODEL: string;
				public static DEVICE_OS_BUILD_NUMBER: string;
				public static DEVICE_OS_NAME: string;
				public static DEVICE_OS_VERSION: string;
				public static DEVICE_IS_EMULATOR: string;
				public static ARCHITECTURE: string;
				public static DEVICE_CPU_FREQUENCIES: string;
				public static DEVICE_PHYSICAL_MEMORY_BYTES: string;
				public static PLATFORM: string;
				public static BUILD_ID: string;
				public static TRANSACTION_NAME: string;
				public static DURATION_NS: string;
				public static RELEASE: string;
				public static VERSION_CODE: string;
				public static TRANSACTION_LIST: string;
				public static TRANSACTION_ID: string;
				public static TRACE_ID: string;
				public static PROFILE_ID: string;
				public static ENVIRONMENT: string;
				public static SAMPLED_PROFILE: string;
				public static TRUNCATION_REASON: string;
				public static MEASUREMENTS: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ProfilingTransactionData extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.ProfilingTransactionData>;
			public equals(param0: any): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor();
			public getRelativeStartCpuMs(): java.lang.Long;
			public getTraceId(): string;
			public getRelativeEndCpuMs(): java.lang.Long;
			public getId(): string;
			public setId(param0: string): void;
			public getUnknown(): java.util.Map<string,any>;
			public getName(): string;
			public constructor(param0: io.sentry.ITransaction, param1: java.lang.Long, param2: java.lang.Long);
			public notifyFinish(param0: java.lang.Long, param1: java.lang.Long, param2: java.lang.Long, param3: java.lang.Long): void;
			public getRelativeStartNs(): java.lang.Long;
			public setRelativeEndNs(param0: java.lang.Long): void;
			public getRelativeEndNs(): java.lang.Long;
			public setRelativeStartNs(param0: java.lang.Long): void;
			public setTraceId(param0: string): void;
			public setName(param0: string): void;
			public hashCode(): number;
		}
		export namespace ProfilingTransactionData {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.ProfilingTransactionData> {
				public static class: java.lang.Class<io.sentry.ProfilingTransactionData.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.ProfilingTransactionData;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.ProfilingTransactionData.JsonKeys>;
				public static TRACE_ID: string;
				public static NAME: string;
				public static START_NS: string;
				public static END_NS: string;
				public static START_CPU_MS: string;
				public static END_CPU_MS: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class PropagationContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.PropagationContext>;
			public getBaggage(): io.sentry.Baggage;
			public setParentSpanId(param0: io.sentry.SpanId): void;
			public traceContext(): io.sentry.TraceContext;
			public setTraceId(param0: io.sentry.protocol.SentryId): void;
			public constructor();
			public getTraceId(): io.sentry.protocol.SentryId;
			public getSpanId(): io.sentry.SpanId;
			public getParentSpanId(): io.sentry.SpanId;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: io.sentry.Baggage, param4: java.lang.Boolean);
			public setSpanId(param0: io.sentry.SpanId): void;
			public static fromHeaders(param0: io.sentry.SentryTraceHeader, param1: io.sentry.Baggage, param2: io.sentry.SpanId): io.sentry.PropagationContext;
			public isSampled(): java.lang.Boolean;
			public static fromHeaders(param0: io.sentry.ILogger, param1: string, param2: string): io.sentry.PropagationContext;
			public static fromHeaders(param0: io.sentry.ILogger, param1: string, param2: java.util.List<string>): io.sentry.PropagationContext;
			public constructor(param0: io.sentry.PropagationContext);
			public setBaggage(param0: io.sentry.Baggage): void;
			public setSampled(param0: java.lang.Boolean): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class RequestDetails extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.RequestDetails>;
			public getHeaders(): java.util.Map<string,string>;
			public constructor(param0: string, param1: java.util.Map<string,string>);
			public getUrl(): java.net.URL;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class RequestDetailsResolver extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.RequestDetailsResolver>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SamplingContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SamplingContext>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext);
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public getTransactionContext(): io.sentry.TransactionContext;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Scope extends java.lang.Object implements io.sentry.IScope {
			public static class: java.lang.Class<io.sentry.Scope>;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: string): void;
			public clearTransaction(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getUser(): io.sentry.protocol.User;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public startSession(): io.sentry.Scope.SessionPair;
			public getOptions(): io.sentry.SentryOptions;
			public constructor(param0: io.sentry.SentryOptions);
			public withPropagationContext(param0: io.sentry.Scope.IWithPropagationContext): io.sentry.PropagationContext;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public clear(): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public getAttachments(): java.util.List<io.sentry.Attachment>;
			public setFingerprint(param0: java.util.List<string>): void;
			public getTransactionName(): string;
			public clone(): io.sentry.IScope;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public getExtras(): java.util.Map<string,any>;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public clone(): any;
			public getFingerprint(): java.util.List<string>;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public withSession(param0: io.sentry.Scope.IWithSession): io.sentry.Session;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
			public endSession(): io.sentry.Session;
			public getSpan(): io.sentry.ISpan;
			public getSession(): io.sentry.Session;
			public removeContexts(param0: string): void;
			public getScreen(): string;
			public setExtra(param0: string, param1: string): void;
			public getTags(): java.util.Map<string,string>;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public setPropagationContext(param0: io.sentry.PropagationContext): void;
			public getTransaction(): io.sentry.ITransaction;
			public clearAttachments(): void;
			public removeExtra(param0: string): void;
			public setScreen(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getLevel(): io.sentry.SentryLevel;
			public setContexts(param0: string, param1: any): void;
			public getPropagationContext(): io.sentry.PropagationContext;
			public getBreadcrumbs(): java.util.Queue<io.sentry.Breadcrumb>;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
		}
		export namespace Scope {
			export class IWithPropagationContext extends java.lang.Object {
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
			export class IWithSession extends java.lang.Object {
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
			export class IWithTransaction extends java.lang.Object {
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
			export class SessionPair extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Scope.SessionPair>;
				public getCurrent(): io.sentry.Session;
				public constructor(param0: io.sentry.Session, param1: io.sentry.Session);
				public getPrevious(): io.sentry.Session;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ScopeCallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export abstract class ScopeObserverAdapter extends java.lang.Object implements io.sentry.IScopeObserver {
			public static class: java.lang.Class<io.sentry.ScopeObserverAdapter>;
			public setTags(param0: java.util.Map<string,string>): void;
			public setTrace(param0: io.sentry.SpanContext): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public constructor();
			public setUser(param0: io.sentry.protocol.User): void;
			public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setExtra(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.Collection<string>): void;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public setTag(param0: string, param1: string): void;
			public setContexts(param0: io.sentry.protocol.Contexts): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SendCachedEnvelopeFireAndForgetIntegration extends java.lang.Object implements io.sentry.Integration, io.sentry.IConnectionStatusProvider.IConnectionStatusObserver, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
			public onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
			public close(): void;
		}
		export namespace SendCachedEnvelopeFireAndForgetIntegration {
			export class SendFireAndForget extends java.lang.Object {
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
			export class SendFireAndForgetDirPath extends java.lang.Object {
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
			export class SendFireAndForgetFactory extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory>;
				/**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
					processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
					lambda$processDir$0(param0: io.sentry.ILogger, param1: string, param2: io.sentry.DirectoryProcessor, param3: java.io.File): void;
				});
				public constructor();
				public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
				public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
				public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SendFireAndForgetEnvelopeSender extends java.lang.Object implements io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetEnvelopeSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SendFireAndForgetOutboxSender extends java.lang.Object implements io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetOutboxSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Sentry extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Sentry>;
			public static withScope(param0: io.sentry.ScopeCallback): void;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>): void;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public static getBaggage(): io.sentry.BaggageHeader;
			/** @deprecated */
			public static reportFullDisplayed(): void;
			public static addBreadcrumb(param0: string, param1: string): void;
			public static setLevel(param0: io.sentry.SentryLevel): void;
			public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public static getSpan(): io.sentry.ISpan;
			public static captureMessage(param0: string): io.sentry.protocol.SentryId;
			public static getTraceparent(): io.sentry.SentryTraceHeader;
			public static flush(param0: number): void;
			public static getCurrentHub(): io.sentry.IHub;
			public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static setCurrentHub(param0: io.sentry.IHub): void;
			public static setTransaction(param0: string): void;
			public static captureException(param0: java.lang.Throwable, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static getLastEventId(): io.sentry.protocol.SentryId;
			public static captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static pushScope(): void;
			public static configureScope(param0: io.sentry.ScopeCallback): void;
			public static endSession(): void;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>, param1: boolean): void;
			public static bindClient(param0: io.sentry.ISentryClient): void;
			public static init(param0: string): void;
			public static captureException(param0: java.lang.Throwable, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static removeTag(param0: string): void;
			public static captureMessage(param0: string, param1: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static clearBreadcrumbs(): void;
			public static setUser(param0: io.sentry.protocol.User): void;
			public static cloneMainHub(): io.sentry.IHub;
			public static reportFullyDisplayed(): void;
			public static popScope(): void;
			public static startSession(): void;
			public static captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static addBreadcrumb(param0: string): void;
			public static captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public static isCrashedLastRun(): java.lang.Boolean;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			/** @deprecated */
			public static traceHeaders(): io.sentry.SentryTraceHeader;
			public static isEnabled(): boolean;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>, param2: boolean): void;
			public static startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public static captureCheckIn(param0: io.sentry.CheckIn): io.sentry.protocol.SentryId;
			public static captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public static captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public static removeExtra(param0: string): void;
			public static init(param0: io.sentry.SentryOptions): void;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb, param1: io.sentry.Hint): void;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>): void;
			public static setExtra(param0: string, param1: string): void;
			public static init(): void;
			public static setTag(param0: string, param1: string): void;
			public static close(): void;
			public static startTransaction(param0: string, param1: string, param2: string, param3: io.sentry.TransactionOptions): io.sentry.ITransaction;
			public static setFingerprint(param0: java.util.List<string>): void;
			public static captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint, param2: io.sentry.ScopeCallback): io.sentry.protocol.SentryId;
			public static continueTrace(param0: string, param1: java.util.List<string>): io.sentry.TransactionContext;
			public static startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public static startTransaction(param0: string, param1: string, param2: io.sentry.TransactionOptions): io.sentry.ITransaction;
		}
		export namespace Sentry {
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

declare namespace io {
	export namespace sentry {
		export class SentryAutoDateProvider extends java.lang.Object implements io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryAutoDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export abstract class SentryBaseEvent extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryBaseEvent>;
			public static DEFAULT_PLATFORM: string;
			public throwable: java.lang.Throwable;
			public setTags(param0: java.util.Map<string,string>): void;
			public getSdk(): io.sentry.protocol.SdkVersion;
			public getEventId(): io.sentry.protocol.SentryId;
			public getPlatform(): string;
			public setServerName(param0: string): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public getUser(): io.sentry.protocol.User;
			public addBreadcrumb(param0: string): void;
			public setDebugMeta(param0: io.sentry.protocol.DebugMeta): void;
			public setPlatform(param0: string): void;
			public setSdk(param0: io.sentry.protocol.SdkVersion): void;
			public getThrowableMechanism(): java.lang.Throwable;
			public getRelease(): string;
			public getTags(): java.util.Map<string,string>;
			public setExtra(param0: string, param1: any): void;
			public getEnvironment(): string;
			public setDist(param0: string): void;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public getExtra(param0: string): any;
			public getDebugMeta(): io.sentry.protocol.DebugMeta;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public setExtras(param0: java.util.Map<string,any>): void;
			public removeExtra(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setEventId(param0: io.sentry.protocol.SentryId): void;
			public removeTag(param0: string): void;
			public constructor();
			public getDist(): string;
			public setUser(param0: io.sentry.protocol.User): void;
			public getTag(param0: string): string;
			public getRequest(): io.sentry.protocol.Request;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getExtras(): java.util.Map<string,any>;
			public getThrowable(): java.lang.Throwable;
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public getServerName(): string;
			public setBreadcrumbs(param0: java.util.List<io.sentry.Breadcrumb>): void;
			public getBreadcrumbs(): java.util.List<io.sentry.Breadcrumb>;
		}
		export namespace SentryBaseEvent {
			export class Deserializer extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.Deserializer>;
				public deserializeValue(param0: io.sentry.SentryBaseEvent, param1: string, param2: io.sentry.JsonObjectReader, param3: io.sentry.ILogger): boolean;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.JsonKeys>;
				public static EVENT_ID: string;
				public static CONTEXTS: string;
				public static SDK: string;
				public static REQUEST: string;
				public static TAGS: string;
				public static RELEASE: string;
				public static ENVIRONMENT: string;
				public static PLATFORM: string;
				public static USER: string;
				public static SERVER_NAME: string;
				public static DIST: string;
				public static BREADCRUMBS: string;
				public static DEBUG_META: string;
				public static EXTRA: string;
				public constructor();
			}
			export class Serializer extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryBaseEvent.Serializer>;
				public serialize(param0: io.sentry.SentryBaseEvent, param1: io.sentry.ObjectWriter, param2: io.sentry.ILogger): void;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryClient extends java.lang.Object implements io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.SentryClient>;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public getRateLimiter(): io.sentry.transport.RateLimiter;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public close(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceContext, param2: io.sentry.IScope, param3: io.sentry.Hint, param4: io.sentry.ProfilingTraceData): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.IScope): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureCheckIn(param0: io.sentry.CheckIn, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.IScope, param2: io.sentry.Hint): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: io.sentry.Hint): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Hint): io.sentry.protocol.SentryId;
		}
		export namespace SentryClient {
			export class SortBreadcrumbsByDate extends java.util.Comparator<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.SentryClient.SortBreadcrumbsByDate>;
				public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
				public static reverseOrder(): java.util.Comparator<any>;
				public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
				public compare(param0: io.sentry.Breadcrumb, param1: io.sentry.Breadcrumb): number;
				public compare(param0: any, param1: any): number;
				public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
				public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
				public reversed(): java.util.Comparator<any>;
				public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
				public static comparing(param0: any /* any*/): java.util.Comparator<any>;
				public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
				public equals(param0: any): boolean;
				public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
				public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
				public static naturalOrder(): java.util.Comparator<any>;
				public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryCrashLastRunState extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryCrashLastRunState>;
			public isCrashedLastRun(param0: string, param1: boolean): java.lang.Boolean;
			public static getInstance(): io.sentry.SentryCrashLastRunState;
			public reset(): void;
			public setCrashedLastRun(param0: boolean): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export abstract class SentryDate extends java.lang.Comparable<io.sentry.SentryDate> {
			public static class: java.lang.Class<io.sentry.SentryDate>;
			public isBefore(param0: io.sentry.SentryDate): boolean;
			public nanoTimestamp(): number;
			public laterDateNanosTimestampByDiff(param0: io.sentry.SentryDate): number;
			public compareTo(param0: io.sentry.SentryDate): number;
			public constructor();
			public isAfter(param0: io.sentry.SentryDate): boolean;
			public diff(param0: io.sentry.SentryDate): number;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryDateProvider extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class SentryEnvelope extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelope>;
			public static from(param0: io.sentry.ISerializer, param1: io.sentry.ProfilingTraceData, param2: number, param3: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.SentryEnvelopeItem);
			public static from(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
			public getHeader(): io.sentry.SentryEnvelopeHeader;
			public constructor(param0: io.sentry.SentryEnvelopeHeader, param1: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: java.lang.Iterable<io.sentry.SentryEnvelopeItem>);
			public getItems(): java.lang.Iterable<io.sentry.SentryEnvelopeItem>;
			public static from(param0: io.sentry.ISerializer, param1: io.sentry.Session, param2: io.sentry.protocol.SdkVersion): io.sentry.SentryEnvelope;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryEnvelopeHeader extends java.lang.Object implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.TraceContext);
			public constructor(param0: io.sentry.protocol.SentryId);
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public getSentAt(): java.util.Date;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion);
			public setSentAt(param0: java.util.Date): void;
			public getTraceContext(): io.sentry.TraceContext;
			public constructor();
		}
		export namespace SentryEnvelopeHeader {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeHeader> {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEnvelopeHeader;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader.JsonKeys>;
				public static EVENT_ID: string;
				public static SDK: string;
				public static TRACE: string;
				public static SENT_AT: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryEnvelopeItem extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItem>;
			public static fromClientReport(param0: io.sentry.ISerializer, param1: io.sentry.clientreport.ClientReport): io.sentry.SentryEnvelopeItem;
			public static fromEvent(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent): io.sentry.SentryEnvelopeItem;
			public static fromCheckIn(param0: io.sentry.ISerializer, param1: io.sentry.CheckIn): io.sentry.SentryEnvelopeItem;
			public static fromAttachment(param0: io.sentry.ISerializer, param1: io.sentry.ILogger, param2: io.sentry.Attachment, param3: number): io.sentry.SentryEnvelopeItem;
			public static fromProfilingTrace(param0: io.sentry.ProfilingTraceData, param1: number, param2: io.sentry.ISerializer): io.sentry.SentryEnvelopeItem;
			public getData(): androidNative.Array<number>;
			public static fromSession(param0: io.sentry.ISerializer, param1: io.sentry.Session): io.sentry.SentryEnvelopeItem;
			public static fromUserFeedback(param0: io.sentry.ISerializer, param1: io.sentry.UserFeedback): io.sentry.SentryEnvelopeItem;
			public getEvent(param0: io.sentry.ISerializer): io.sentry.SentryEvent;
			public getHeader(): io.sentry.SentryEnvelopeItemHeader;
			public getTransaction(param0: io.sentry.ISerializer): io.sentry.protocol.SentryTransaction;
			public getClientReport(param0: io.sentry.ISerializer): io.sentry.clientreport.ClientReport;
		}
		export namespace SentryEnvelopeItem {
			export class CachedItem extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItem.CachedItem>;
				public getBytes(): androidNative.Array<number>;
				public constructor(param0: java.util.concurrent.Callable<androidNative.Array<number>>);
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryEnvelopeItemHeader extends java.lang.Object implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getUnknown(): java.util.Map<string,any>;
			public getLength(): number;
			public constructor(param0: io.sentry.SentryItemType, param1: number, param2: string, param3: string, param4: string);
			public getAttachmentType(): string;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getFileName(): string;
			public getType(): io.sentry.SentryItemType;
			public getContentType(): string;
		}
		export namespace SentryEnvelopeItemHeader {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEnvelopeItemHeader> {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEnvelopeItemHeader;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader.JsonKeys>;
				public static CONTENT_TYPE: string;
				public static FILENAME: string;
				public static TYPE: string;
				public static ATTACHMENT_TYPE: string;
				public static LENGTH: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryEvent extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryEvent>;
			public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(param0: java.lang.Throwable);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getLogger(): string;
			public setThreads(param0: java.util.List<io.sentry.protocol.SentryThread>): void;
			public getTimestamp(): java.util.Date;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public constructor(param0: java.util.Date);
			public setMessage(param0: io.sentry.protocol.Message): void;
			public setLogger(param0: string): void;
			public setExceptions(param0: java.util.List<io.sentry.protocol.SentryException>): void;
			public isErrored(): boolean;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setTransaction(param0: string): void;
			public setFingerprints(param0: java.util.List<string>): void;
			public constructor();
			public setTimestamp(param0: java.util.Date): void;
			public isCrashed(): boolean;
			public getExceptions(): java.util.List<io.sentry.protocol.SentryException>;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public setModule(param0: string, param1: string): void;
			public setModules(param0: java.util.Map<string,string>): void;
			public getLevel(): io.sentry.SentryLevel;
			public getUnhandledException(): io.sentry.protocol.SentryException;
			public getModule(param0: string): string;
			public getFingerprints(): java.util.List<string>;
			public removeModule(param0: string): void;
			public getMessage(): io.sentry.protocol.Message;
		}
		export namespace SentryEvent {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryEvent> {
				public static class: java.lang.Class<io.sentry.SentryEvent.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryEvent;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryEvent.JsonKeys>;
				public static TIMESTAMP: string;
				public static MESSAGE: string;
				public static LOGGER: string;
				public static THREADS: string;
				public static EXCEPTION: string;
				public static LEVEL: string;
				public static TRANSACTION: string;
				public static FINGERPRINT: string;
				public static MODULES: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryExceptionFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryExceptionFactory>;
			public getSentryExceptionsFromThread(param0: io.sentry.protocol.SentryThread, param1: io.sentry.protocol.Mechanism, param2: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
			public constructor(param0: io.sentry.SentryStackTraceFactory);
			public getSentryExceptions(param0: java.lang.Throwable): java.util.List<io.sentry.protocol.SentryException>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryExecutorService extends java.lang.Object implements io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.SentryExecutorService>;
			public isClosed(): boolean;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
			public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
			public constructor();
			public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
		}
		export namespace SentryExecutorService {
			export class SentryExecutorServiceThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
				public static class: java.lang.Class<io.sentry.SentryExecutorService.SentryExecutorServiceThreadFactory>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryInstantDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryInstantDate>;
			public nanoTimestamp(): number;
			public constructor();
			public constructor(param0: java.time.Instant);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryInstantDateProvider extends java.lang.Object implements io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryInstantDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryIntegrationPackageStorage extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryIntegrationPackageStorage>;
			public static getInstance(): io.sentry.SentryIntegrationPackageStorage;
			public addIntegration(param0: string): void;
			public getPackages(): java.util.Set<io.sentry.protocol.SentryPackage>;
			public addPackage(param0: string, param1: string): void;
			public clearStorage(): void;
			public getIntegrations(): java.util.Set<string>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryItemType extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryItemType>;
			public static Session: io.sentry.SentryItemType;
			public static Event: io.sentry.SentryItemType;
			public static UserFeedback: io.sentry.SentryItemType;
			public static Attachment: io.sentry.SentryItemType;
			public static Transaction: io.sentry.SentryItemType;
			public static Profile: io.sentry.SentryItemType;
			public static ClientReport: io.sentry.SentryItemType;
			public static ReplayEvent: io.sentry.SentryItemType;
			public static ReplayRecording: io.sentry.SentryItemType;
			public static CheckIn: io.sentry.SentryItemType;
			public static Unknown: io.sentry.SentryItemType;
			public static resolve(param0: any): io.sentry.SentryItemType;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static values(): androidNative.Array<io.sentry.SentryItemType>;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOfLabel(param0: string): io.sentry.SentryItemType;
			public getItemType(): string;
			public static valueOf(param0: string): io.sentry.SentryItemType;
		}
		export namespace SentryItemType {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryItemType> {
				public static class: java.lang.Class<io.sentry.SentryItemType.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryItemType;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryLevel extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLevel>;
			public static DEBUG: io.sentry.SentryLevel;
			public static INFO: io.sentry.SentryLevel;
			public static WARNING: io.sentry.SentryLevel;
			public static ERROR: io.sentry.SentryLevel;
			public static FATAL: io.sentry.SentryLevel;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): io.sentry.SentryLevel;
			public static values(): androidNative.Array<io.sentry.SentryLevel>;
		}
		export namespace SentryLevel {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.SentryLevel.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryLevel;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryLockReason extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SentryLockReason>;
			public static LOCKED: number;
			public static WAITING: number;
			public static SLEEPING: number;
			public static BLOCKED: number;
			public static ANY: number;
			public getType(): number;
			public setAddress(param0: string): void;
			public setClassName(param0: string): void;
			public getThreadId(): java.lang.Long;
			public equals(param0: any): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getPackageName(): string;
			public setType(param0: number): void;
			public getAddress(): string;
			public setThreadId(param0: java.lang.Long): void;
			public constructor();
			public getUnknown(): java.util.Map<string,any>;
			public constructor(param0: io.sentry.SentryLockReason);
			public getClassName(): string;
			public setPackageName(param0: string): void;
			public hashCode(): number;
		}
		export namespace SentryLockReason {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SentryLockReason> {
				public static class: java.lang.Class<io.sentry.SentryLockReason.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SentryLockReason;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryLockReason.JsonKeys>;
				public static TYPE: string;
				public static ADDRESS: string;
				public static PACKAGE_NAME: string;
				public static CLASS_NAME: string;
				public static THREAD_ID: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryLongDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryLongDate>;
			public nanoTimestamp(): number;
			public constructor(param0: number);
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryNanotimeDate extends io.sentry.SentryDate {
			public static class: java.lang.Class<io.sentry.SentryNanotimeDate>;
			public nanoTimestamp(): number;
			public constructor(param0: java.util.Date, param1: number);
			public laterDateNanosTimestampByDiff(param0: io.sentry.SentryDate): number;
			public compareTo(param0: io.sentry.SentryDate): number;
			public constructor();
			public diff(param0: io.sentry.SentryDate): number;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryNanotimeDateProvider extends java.lang.Object implements io.sentry.SentryDateProvider {
			public static class: java.lang.Class<io.sentry.SentryNanotimeDateProvider>;
			public now(): io.sentry.SentryDate;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryOptions extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryOptions>;
			public static DEFAULT_PROPAGATION_TARGETS: string;
			public getBeforeBreadcrumb(): io.sentry.SentryOptions.BeforeBreadcrumbCallback;
			public isTracingEnabled(): boolean;
			public isSendModules(): boolean;
			public setInstrumenter(param0: io.sentry.Instrumenter): void;
			public setMainThreadChecker(param0: io.sentry.util.thread.IMainThreadChecker): void;
			public addCollector(param0: io.sentry.ICollector): void;
			public setProfilesSampleRate(param0: java.lang.Double): void;
			public getMaxAttachmentSize(): number;
			public isDebug(): boolean;
			public setViewHierarchyExporters(param0: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): void;
			public setMaxSpans(param0: number): void;
			public setEnableExternalConfiguration(param0: boolean): void;
			public getRelease(): string;
			public setTransactionPerformanceCollector(param0: io.sentry.TransactionPerformanceCollector): void;
			public setMaxQueueSize(param0: number): void;
			public setLogger(param0: io.sentry.ILogger): void;
			/** @deprecated */
			public getTracingOrigins(): java.util.List<string>;
			public getMaxQueueSize(): number;
			public getProfilesSampler(): io.sentry.SentryOptions.ProfilesSamplerCallback;
			public getProfilingTracesDirPath(): string;
			public setSerializer(param0: io.sentry.ISerializer): void;
			public isSendClientReports(): boolean;
			public setEnabled(param0: boolean): void;
			public setExecutorService(param0: io.sentry.ISentryExecutorService): void;
			public getConnectionTimeoutMillis(): number;
			public getReadTimeoutMillis(): number;
			public getModulesLoader(): io.sentry.internal.modules.IModulesLoader;
			public addIntegration(param0: io.sentry.Integration): void;
			public getGestureTargetLocators(): java.util.List<io.sentry.internal.gestures.GestureTargetLocator>;
			public getDistinctId(): string;
			public getLogger(): io.sentry.ILogger;
			public getScopeObservers(): java.util.List<io.sentry.IScopeObserver>;
			public getProguardUuid(): string;
			public constructor();
			public setDistinctId(param0: string): void;
			public getDiagnosticLevel(): io.sentry.SentryLevel;
			public getDist(): string;
			public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
			public isEnableTimeToFullDisplayTracing(): boolean;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setEnvironment(param0: string): void;
			public getIgnoredCheckIns(): java.util.List<string>;
			public setTransportFactory(param0: io.sentry.ITransportFactory): void;
			public setDateProvider(param0: io.sentry.SentryDateProvider): void;
			public setMaxTraceFileSize(param0: number): void;
			public getBundleIds(): java.util.Set<string>;
			public getServerName(): string;
			public getFlushTimeoutMillis(): number;
			public isEnableUncaughtExceptionHandler(): boolean;
			public setSendDefaultPii(param0: boolean): void;
			public getIdleTimeout(): java.lang.Long;
			public getShutdownTimeoutMillis(): number;
			public setEnableUncaughtExceptionHandler(param0: boolean): void;
			public setEnableUserInteractionBreadcrumbs(param0: boolean): void;
			public setAttachServerName(param0: boolean): void;
			public merge(param0: io.sentry.ExternalOptions): void;
			/** @deprecated */
			public setTracingOrigins(param0: java.util.List<string>): void;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public isTraceOptionsRequests(): boolean;
			public isSendDefaultPii(): boolean;
			public getBeforeSendTransaction(): io.sentry.SentryOptions.BeforeSendTransactionCallback;
			public setTransportGate(param0: io.sentry.transport.ITransportGate): void;
			public setConnectionTimeoutMillis(param0: number): void;
			public setModulesLoader(param0: io.sentry.internal.modules.IModulesLoader): void;
			public getTransportGate(): io.sentry.transport.ITransportGate;
			public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
			public setAttachThreads(param0: boolean): void;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public setSendModules(param0: boolean): void;
			public setEnableAutoSessionTracking(param0: boolean): void;
			public setDist(param0: string): void;
			public getExecutorService(): io.sentry.ISentryExecutorService;
			public getMaxSpans(): number;
			/** @deprecated */
			public setTraceSampling(param0: boolean): void;
			public setTracePropagationTargets(param0: java.util.List<string>): void;
			public getDsn(): string;
			public setEnableTimeToFullDisplayTracing(param0: boolean): void;
			public setTransactionProfiler(param0: io.sentry.ITransactionProfiler): void;
			public getDateProvider(): io.sentry.SentryDateProvider;
			public setConnectionStatusProvider(param0: io.sentry.IConnectionStatusProvider): void;
			public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
			public getSampleRate(): java.lang.Double;
			public setEnablePrettySerializationOutput(param0: boolean): void;
			public setEnvelopeReader(param0: io.sentry.IEnvelopeReader): void;
			public setSampleRate(param0: java.lang.Double): void;
			public getIntegrations(): java.util.List<io.sentry.Integration>;
			public getMaxCacheItems(): number;
			public isEnabled(): boolean;
			public setMaxCacheItems(param0: number): void;
			public getMaxDepth(): number;
			public setReadTimeoutMillis(param0: number): void;
			public setMaxAttachmentSize(param0: number): void;
			public setTracesSampler(param0: io.sentry.SentryOptions.TracesSamplerCallback): void;
			public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
			/** @deprecated */
			public setProfilingEnabled(param0: boolean): void;
			public isEnableUserInteractionBreadcrumbs(): boolean;
			public setEnableTracing(param0: java.lang.Boolean): void;
			public getTracesSampler(): io.sentry.SentryOptions.TracesSamplerCallback;
			public setServerName(param0: string): void;
			public setShutdownTimeoutMillis(param0: number): void;
			public setTracesSampleRate(param0: java.lang.Double): void;
			public getViewHierarchyExporters(): java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>;
			public getContextTags(): java.util.List<string>;
			public getInAppIncludes(): java.util.List<string>;
			public addBundleId(param0: string): void;
			public getTransportFactory(): io.sentry.ITransportFactory;
			/** @deprecated */
			public getShutdownTimeout(): number;
			public setEnableShutdownHook(param0: boolean): void;
			public getOptionsObservers(): java.util.List<io.sentry.IOptionsObserver>;
			public getDebugMetaLoader(): io.sentry.internal.debugmeta.IDebugMetaLoader;
			public getProfilesSampleRate(): java.lang.Double;
			public isTraceSampling(): boolean;
			public setSentryClientName(param0: string): void;
			public isEnableExternalConfiguration(): boolean;
			public setEnableUserInteractionTracing(param0: boolean): void;
			public addInAppInclude(param0: string): void;
			public setPrintUncaughtStackTrace(param0: boolean): void;
			public setSendClientReports(param0: boolean): void;
			public setMaxRequestBodySize(param0: io.sentry.SentryOptions.RequestSize): void;
			public getCollectors(): java.util.List<io.sentry.ICollector>;
			public isEnableShutdownHook(): boolean;
			public getConnectionStatusProvider(): io.sentry.IConnectionStatusProvider;
			public getEnvelopeDiskCache(): io.sentry.cache.IEnvelopeCache;
			public getMaxBreadcrumbs(): number;
			public setProguardUuid(param0: string): void;
			public addOptionsObserver(param0: io.sentry.IOptionsObserver): void;
			public isEnableDeduplication(): boolean;
			public setAttachStacktrace(param0: boolean): void;
			public getSerializer(): io.sentry.ISerializer;
			public getOutboxPath(): string;
			public setEnvelopeDiskCache(param0: io.sentry.cache.IEnvelopeCache): void;
			public isProfilingEnabled(): boolean;
			public getEnvelopeReader(): io.sentry.IEnvelopeReader;
			public setRelease(param0: string): void;
			public setIgnoredCheckIns(param0: java.util.List<string>): void;
			public setBeforeSendTransaction(param0: io.sentry.SentryOptions.BeforeSendTransactionCallback): void;
			public isPrintUncaughtStackTrace(): boolean;
			public getSentryClientName(): string;
			public addScopeObserver(param0: io.sentry.IScopeObserver): void;
			public getCacheDirPath(): string;
			/** @deprecated */
			public addTracingOrigin(param0: string): void;
			public isEnableUserInteractionTracing(): boolean;
			public addContextTag(param0: string): void;
			public getClientReportRecorder(): io.sentry.clientreport.IClientReportRecorder;
			public setBeforeBreadcrumb(param0: io.sentry.SentryOptions.BeforeBreadcrumbCallback): void;
			public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
			public setDebug(param0: boolean): void;
			public isEnablePrettySerializationOutput(): boolean;
			public setProfilesSampler(param0: io.sentry.SentryOptions.ProfilesSamplerCallback): void;
			public getTracePropagationTargets(): java.util.List<string>;
			public addInAppExclude(param0: string): void;
			public isAttachThreads(): boolean;
			public setBeforeSend(param0: io.sentry.SentryOptions.BeforeSendCallback): void;
			public setCacheDirPath(param0: string): void;
			public getSessionTrackingIntervalMillis(): number;
			/** @deprecated */
			public setShutdownTimeout(param0: number): void;
			public setFlushTimeoutMillis(param0: number): void;
			public getTracesSampleRate(): java.lang.Double;
			public getTags(): java.util.Map<string,string>;
			public getMaxTraceFileSize(): number;
			public getInAppExcludes(): java.util.List<string>;
			public setSessionTrackingIntervalMillis(param0: number): void;
			public setMaxDepth(param0: number): void;
			public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
			public setTraceOptionsRequests(param0: boolean): void;
			public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
			public getEnvironment(): string;
			public setTag(param0: string, param1: string): void;
			public getInstrumenter(): io.sentry.Instrumenter;
			public isEnableAutoSessionTracking(): boolean;
			public setGestureTargetLocators(param0: java.util.List<io.sentry.internal.gestures.GestureTargetLocator>): void;
			public getMainThreadChecker(): io.sentry.util.thread.IMainThreadChecker;
			public setIdleTimeout(param0: java.lang.Long): void;
			public setDebugMetaLoader(param0: io.sentry.internal.debugmeta.IDebugMetaLoader): void;
			public getBeforeSend(): io.sentry.SentryOptions.BeforeSendCallback;
			public setEnableDeduplication(param0: boolean): void;
			public getTransactionPerformanceCollector(): io.sentry.TransactionPerformanceCollector;
			public setDsn(param0: string): void;
			public isAttachServerName(): boolean;
			public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
			public getTransactionProfiler(): io.sentry.ITransactionProfiler;
			public getEnableTracing(): java.lang.Boolean;
			public isAttachStacktrace(): boolean;
			public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
			public setMaxBreadcrumbs(param0: number): void;
			public setDiagnosticLevel(param0: io.sentry.SentryLevel): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public getFullyDisplayedReporter(): io.sentry.FullyDisplayedReporter;
		}
		export namespace SentryOptions {
			export class BeforeBreadcrumbCallback extends java.lang.Object {
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
			export class BeforeSendCallback extends java.lang.Object {
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
			export class BeforeSendTransactionCallback extends java.lang.Object {
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
			export class ProfilesSamplerCallback extends java.lang.Object {
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
			export class Proxy extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryOptions.Proxy>;
				public getPort(): string;
				public getPass(): string;
				public getUser(): string;
				public setPass(param0: string): void;
				public setUser(param0: string): void;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public getHost(): string;
				public setHost(param0: string): void;
				public setPort(param0: string): void;
				public constructor(param0: string, param1: string);
				public constructor();
			}
			export class RequestSize {
				public static class: java.lang.Class<io.sentry.SentryOptions.RequestSize>;
				public static NONE: io.sentry.SentryOptions.RequestSize;
				public static SMALL: io.sentry.SentryOptions.RequestSize;
				public static MEDIUM: io.sentry.SentryOptions.RequestSize;
				public static ALWAYS: io.sentry.SentryOptions.RequestSize;
				public static valueOf(param0: string): io.sentry.SentryOptions.RequestSize;
				public static values(): androidNative.Array<io.sentry.SentryOptions.RequestSize>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export class TracesSamplerCallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class SentryRuntimeEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.SentryRuntimeEventProcessor>;
			public constructor(param0: string, param1: string);
			public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentrySpanStorage extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentrySpanStorage>;
			public static getInstance(): io.sentry.SentrySpanStorage;
			public store(param0: string, param1: io.sentry.ISpan): void;
			public get(param0: string): io.sentry.ISpan;
			public removeAndGet(param0: string): io.sentry.ISpan;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryStackTraceFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryStackTraceFactory>;
			public isInApp(param0: string): java.lang.Boolean;
			public constructor(param0: io.sentry.SentryOptions);
			public getStackFrames(param0: androidNative.Array<java.lang.StackTraceElement>, param1: boolean): java.util.List<io.sentry.protocol.SentryStackFrame>;
			public getInAppCallStack(): java.util.List<io.sentry.protocol.SentryStackFrame>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryThreadFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryThreadFactory>;
			public constructor(param0: io.sentry.SentryStackTraceFactory, param1: io.sentry.SentryOptions);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryTraceHeader extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryTraceHeader>;
			public static SENTRY_TRACE_HEADER: string;
			public getName(): string;
			public isSampled(): java.lang.Boolean;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: java.lang.Boolean);
			public getValue(): string;
			public getTraceId(): io.sentry.protocol.SentryId;
			public constructor(param0: string);
			public getSpanId(): io.sentry.SpanId;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryTracer extends java.lang.Object implements io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.SentryTracer>;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub, param2: io.sentry.TransactionOptions);
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public finish(): void;
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
			public getLatestActiveSpan(): io.sentry.Span;
			public getThrowable(): java.lang.Throwable;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
			public forceFinish(param0: io.sentry.SpanStatus, param1: boolean, param2: io.sentry.Hint): void;
			public traceContext(): io.sentry.TraceContext;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate, param2: boolean, param3: io.sentry.Hint): void;
			public isNoOp(): boolean;
			public scheduleFinish(): void;
			public getData(): java.util.Map<string,any>;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getChildren(): java.util.List<io.sentry.Span>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub);
			public setContext(param0: string, param1: any): void;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public isProfileSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getName(): string;
			public setName(param0: string, param1: io.sentry.protocol.TransactionNameSource): void;
			public setName(param0: string): void;
		}
		export namespace SentryTracer {
			export class FinishStatus extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryTracer.FinishStatus>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryValues<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryValues<any>>;
			public getValues(): java.util.List<T>;
		}
		export namespace SentryValues {
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryValues.JsonKeys>;
				public static VALUES: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SentryWrapper extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryWrapper>;
			public static wrapCallable(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Callable<any>;
			public constructor();
			public static wrapSupplier(param0: any /* any*/): any /* any*/;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Session extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.Session>;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public end(): void;
			public getStarted(): java.util.Date;
			public getSessionId(): java.util.UUID;
			public errorCount(): number;
			public getIpAddress(): string;
			public getDuration(): java.lang.Double;
			public getInit(): java.lang.Boolean;
			public getRelease(): string;
			public constructor(param0: string, param1: io.sentry.protocol.User, param2: string, param3: string);
			public getSequence(): java.lang.Long;
			public constructor(param0: io.sentry.Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string, param13: string);
			public getStatus(): io.sentry.Session.State;
			public getTimestamp(): java.util.Date;
			public getEnvironment(): string;
			public end(param0: java.util.Date): void;
			public setInitAsTrue(): void;
			public getDistinctId(): string;
			public isTerminated(): boolean;
			public getUserAgent(): string;
			public getAbnormalMechanism(): string;
			public update(param0: io.sentry.Session.State, param1: string, param2: boolean): boolean;
			public update(param0: io.sentry.Session.State, param1: string, param2: boolean, param3: string): boolean;
			public getUnknown(): java.util.Map<string,any>;
			public clone(): any;
			public clone(): io.sentry.Session;
		}
		export namespace Session {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.Session> {
				public static class: java.lang.Class<io.sentry.Session.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.Session;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Session.JsonKeys>;
				public static SID: string;
				public static DID: string;
				public static INIT: string;
				public static STARTED: string;
				public static STATUS: string;
				public static SEQ: string;
				public static ERRORS: string;
				public static DURATION: string;
				public static TIMESTAMP: string;
				public static ATTRS: string;
				public static RELEASE: string;
				public static ENVIRONMENT: string;
				public static IP_ADDRESS: string;
				public static USER_AGENT: string;
				public static ABNORMAL_MECHANISM: string;
				public constructor();
			}
			export class State {
				public static class: java.lang.Class<io.sentry.Session.State>;
				public static Exited: io.sentry.Session.State;
				public static Crashed: io.sentry.Session.State;
				public static Abnormal: io.sentry.Session.State;
				public static valueOf(param0: string): io.sentry.Session.State;
				public static values(): androidNative.Array<io.sentry.Session.State>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class ShutdownHookIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.ShutdownHookIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public constructor(param0: java.lang.Runtime);
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Span extends java.lang.Object implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.Span>;
			public finish(param0: io.sentry.SpanStatus, param1: io.sentry.SentryDate): void;
			public startChild(param0: string, param1: string, param2: io.sentry.SpanOptions): io.sentry.ISpan;
			public traceContext(): io.sentry.TraceContext;
			public finish(): void;
			public isNoOp(): boolean;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getParentSpanId(): io.sentry.SpanId;
			public getData(): java.util.Map<string,any>;
			public toBaggageHeader(param0: java.util.List<string>): io.sentry.BaggageHeader;
			public isFinished(): boolean;
			public getTags(): java.util.Map<string,string>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.SentryTracer, param2: io.sentry.IHub, param3: io.sentry.SentryDate, param4: io.sentry.SpanOptions);
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setTag(param0: string, param1: string): void;
			public setThrowable(param0: java.lang.Throwable): void;
			public updateEndDate(param0: io.sentry.SentryDate): boolean;
			public isProfileSampled(): java.lang.Boolean;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public getStartDate(): io.sentry.SentryDate;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public setMeasurement(param0: string, param1: java.lang.Number): void;
			public setMeasurement(param0: string, param1: java.lang.Number, param2: io.sentry.MeasurementUnit): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getSpanId(): io.sentry.SpanId;
			public getThrowable(): java.lang.Throwable;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter): io.sentry.ISpan;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: io.sentry.SentryDate, param3: io.sentry.Instrumenter, param4: io.sentry.SpanOptions): io.sentry.ISpan;
			public getDescription(): string;
			public getFinishDate(): io.sentry.SentryDate;
			public startChild(param0: string): io.sentry.ISpan;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SpanContext extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanContext>;
			public static TYPE: string;
			public description: string;
			public status: io.sentry.SpanStatus;
			public tags: java.util.Map<string,string>;
			public origin: string;
			public getProfileSampled(): java.lang.Boolean;
			public equals(param0: any): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public constructor(param0: string, param1: io.sentry.TracesSamplingDecision);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getOrigin(): string;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: io.sentry.TracesSamplingDecision);
			public getTraceId(): io.sentry.protocol.SentryId;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getParentSpanId(): io.sentry.SpanId;
			public getTags(): java.util.Map<string,string>;
			public getStatus(): io.sentry.SpanStatus;
			public getSamplingDecision(): io.sentry.TracesSamplingDecision;
			public getOperation(): string;
			public constructor(param0: string);
			public setTag(param0: string, param1: string): void;
			public constructor(param0: io.sentry.SpanContext);
			public setOperation(param0: string): void;
			public setSamplingDecision(param0: io.sentry.TracesSamplingDecision): void;
			public getSampled(): java.lang.Boolean;
			public setDescription(param0: string): void;
			public getSpanId(): io.sentry.SpanId;
			public getUnknown(): java.util.Map<string,any>;
			public setOrigin(param0: string): void;
			public setSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: io.sentry.TracesSamplingDecision, param6: io.sentry.SpanStatus, param7: string);
			public getDescription(): string;
			public setSampled(param0: java.lang.Boolean): void;
			public hashCode(): number;
		}
		export namespace SpanContext {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanContext> {
				public static class: java.lang.Class<io.sentry.SpanContext.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanContext;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SpanContext.JsonKeys>;
				public static TRACE_ID: string;
				public static SPAN_ID: string;
				public static PARENT_SPAN_ID: string;
				public static DESCRIPTION: string;
				public static STATUS: string;
				public static TAGS: string;
				public static ORIGIN: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SpanDataConvention extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SpanDataConvention>;
			/**
			 * Constructs a new instance of the io.sentry.SpanDataConvention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static HTTP_FRAGMENT_KEY: string;
			public static BLOCKED_MAIN_THREAD_KEY: string;
			public static DB_SYSTEM_KEY: string;
			public static HTTP_METHOD_KEY: string;
			public static HTTP_STATUS_CODE_KEY: string;
			public static HTTP_QUERY_KEY: string;
			public static HTTP_RESPONSE_CONTENT_LENGTH_KEY: string;
			public static CALL_STACK_KEY: string;
			public static THREAD_ID: string;
			public static THREAD_NAME: string;
			public static DB_NAME_KEY: string;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SpanFinishedCallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class SpanId extends java.lang.Object implements io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanId>;
			public static EMPTY_ID: io.sentry.SpanId;
			public equals(param0: any): boolean;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public toString(): string;
			public constructor();
			public constructor(param0: string);
			public hashCode(): number;
		}
		export namespace SpanId {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.SpanId.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanId;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SpanOptions extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SpanOptions>;
			public isTrimStart(): boolean;
			public isIdle(): boolean;
			public setTrimEnd(param0: boolean): void;
			public constructor();
			public setIdle(param0: boolean): void;
			public setTrimStart(param0: boolean): void;
			public isTrimEnd(): boolean;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SpanStatus extends io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.SpanStatus>;
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
			public static valueOf(param0: string): io.sentry.SpanStatus;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static fromHttpStatusCode(param0: number): io.sentry.SpanStatus;
			public static fromHttpStatusCode(param0: java.lang.Integer, param1: io.sentry.SpanStatus): io.sentry.SpanStatus;
			public static values(): androidNative.Array<io.sentry.SpanStatus>;
		}
		export namespace SpanStatus {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.SpanStatus.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.SpanStatus;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class Stack extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Stack>;
			public constructor(param0: io.sentry.ILogger, param1: io.sentry.Stack.StackItem);
			public constructor(param0: io.sentry.Stack);
		}
		export namespace Stack {
			export class StackItem extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Stack.StackItem>;
				public getOptions(): io.sentry.SentryOptions;
				public getClient(): io.sentry.ISentryClient;
				public getScope(): io.sentry.IScope;
				public setClient(param0: io.sentry.ISentryClient): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SynchronizedCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SynchronizedCollection<any>>;
			public equals(param0: any): boolean;
			public iterator(): java.util.Iterator<E>;
			public decorated(): java.util.Collection<E>;
			public spliterator(): java.util.Spliterator<E>;
			public toArray(): androidNative.Array<any>;
			public contains(param0: any): boolean;
			public stream(): java.util.stream.Stream<E>;
			public toArray(param0: any /* any*/): androidNative.Array<any>;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public parallelStream(): java.util.stream.Stream<E>;
			public add(param0: E): boolean;
			public static synchronizedCollection(param0: java.util.Collection<any>): io.sentry.SynchronizedCollection<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
			public hashCode(): number;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SynchronizedQueue<E>  extends io.sentry.SynchronizedCollection<any> implements java.util.Queue<any>  {
			public static class: java.lang.Class<io.sentry.SynchronizedQueue<any>>;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(): androidNative.Array<any>;
			public decorated(): java.util.Queue<any>;
			public contains(param0: any): boolean;
			public toArray(param0: any /* any*/): androidNative.Array<any>;
			public element(): any;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public poll(): any;
			public decorated(): java.util.Collection<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public peek(): any;
			public remove(param0: any): boolean;
			public constructor(param0: java.util.Queue<any>, param1: any);
			public containsAll(param0: java.util.Collection<any>): boolean;
			public offer(param0: any): boolean;
			public remove(): any;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
			public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class SystemOutLogger extends java.lang.Object implements io.sentry.ILogger {
			public static class: java.lang.Class<io.sentry.SystemOutLogger>;
			public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
			public isEnabled(param0: io.sentry.SentryLevel): boolean;
			public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
			public constructor();
			public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TraceContext extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.TraceContext>;
			public getRelease(): string;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getPublicKey(): string;
			public getUserSegment(): string;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getSampled(): string;
			public getSampleRate(): string;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getEnvironment(): string;
			public getUserId(): string;
		}
		export namespace TraceContext {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.TraceContext> {
				public static class: java.lang.Class<io.sentry.TraceContext.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.TraceContext;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.TraceContext.JsonKeys>;
				public static TRACE_ID: string;
				public static PUBLIC_KEY: string;
				public static RELEASE: string;
				public static ENVIRONMENT: string;
				public static USER: string;
				public static USER_ID: string;
				public static USER_SEGMENT: string;
				public static TRANSACTION: string;
				public static SAMPLE_RATE: string;
				public static SAMPLED: string;
				public constructor();
			}
			export class TraceContextUser extends java.lang.Object implements io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser>;
				public getId(): string;
				public getSegment(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
			}
			export namespace TraceContextUser {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.TraceContext.TraceContextUser> {
					public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.TraceContext.TraceContextUser;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.TraceContext.TraceContextUser.JsonKeys>;
					public static SEGMENT: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TracesSampler extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TracesSampler>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TracesSamplingDecision extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TracesSamplingDecision>;
			public constructor(param0: java.lang.Boolean);
			public getProfileSampled(): java.lang.Boolean;
			public getSampled(): java.lang.Boolean;
			public getProfileSampleRate(): java.lang.Double;
			public constructor(param0: java.lang.Boolean, param1: java.lang.Double, param2: java.lang.Boolean, param3: java.lang.Double);
			public getSampleRate(): java.lang.Double;
			public constructor(param0: java.lang.Boolean, param1: java.lang.Double);
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TransactionContext extends io.sentry.SpanContext {
			public static class: java.lang.Class<io.sentry.TransactionContext>;
			public getBaggage(): io.sentry.Baggage;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public setInstrumenter(param0: io.sentry.Instrumenter): void;
			public constructor(param0: string, param1: io.sentry.TracesSamplingDecision);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public setParentSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
			public constructor(param0: string, param1: io.sentry.protocol.TransactionNameSource, param2: string, param3: io.sentry.TracesSamplingDecision);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: io.sentry.TracesSamplingDecision);
			public static fromPropagationContext(param0: io.sentry.PropagationContext): io.sentry.TransactionContext;
			public constructor(param0: string, param1: string);
			public setTransactionNameSource(param0: io.sentry.protocol.TransactionNameSource): void;
			public setParentSampled(param0: java.lang.Boolean): void;
			public constructor(param0: string);
			public getInstrumenter(): io.sentry.Instrumenter;
			public constructor(param0: io.sentry.SpanContext);
			public getTransactionNameSource(): io.sentry.protocol.TransactionNameSource;
			/** @deprecated */
			public static fromSentryTrace(param0: string, param1: string, param2: io.sentry.SentryTraceHeader): io.sentry.TransactionContext;
			public getUnknown(): java.util.Map<string,any>;
			public getName(): string;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: io.sentry.TracesSamplingDecision, param4: io.sentry.Baggage);
			public constructor(param0: string, param1: string, param2: io.sentry.TracesSamplingDecision);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: io.sentry.TracesSamplingDecision, param6: io.sentry.SpanStatus, param7: string);
			public getParentSamplingDecision(): io.sentry.TracesSamplingDecision;
			public constructor(param0: string, param1: io.sentry.protocol.TransactionNameSource, param2: string);
			public getParentSampled(): java.lang.Boolean;
			public setName(param0: string): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TransactionFinishedCallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export class TransactionOptions extends io.sentry.SpanOptions {
			public static class: java.lang.Class<io.sentry.TransactionOptions>;
			public static DEFAULT_DEADLINE_TIMEOUT_AUTO_TRANSACTION: number;
			public isBindToScope(): boolean;
			public setTransactionFinishedCallback(param0: io.sentry.TransactionFinishedCallback): void;
			public isWaitForChildren(): boolean;
			public setDeadlineTimeout(param0: java.lang.Long): void;
			public setIdleTimeout(param0: java.lang.Long): void;
			public getTransactionFinishedCallback(): io.sentry.TransactionFinishedCallback;
			public setCustomSamplingContext(param0: io.sentry.CustomSamplingContext): void;
			public getDeadlineTimeout(): java.lang.Long;
			public setStartTimestamp(param0: io.sentry.SentryDate): void;
			public constructor();
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public setWaitForChildren(param0: boolean): void;
			public getStartTimestamp(): io.sentry.SentryDate;
			public getIdleTimeout(): java.lang.Long;
			public setBindToScope(param0: boolean): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TransactionPerformanceCollector extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TransactionPerformanceCollector>;
			/**
			 * Constructs a new instance of the io.sentry.TransactionPerformanceCollector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				start(param0: io.sentry.ITransaction): void;
				stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
				close(): void;
			});
			public constructor();
			public start(param0: io.sentry.ITransaction): void;
			public stop(param0: io.sentry.ITransaction): java.util.List<io.sentry.PerformanceCollectionData>;
			public close(): void;
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class TypeCheckHint extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TypeCheckHint>;
			public static SENTRY_TYPE_CHECK_HINT: string;
			public static SENTRY_IS_FROM_HYBRID_SDK: string;
			public static SENTRY_EVENT_DROP_REASON: string;
			public static SENTRY_JAVASCRIPT_SDK_NAME: string;
			public static SENTRY_DOTNET_SDK_NAME: string;
			public static SENTRY_DART_SDK_NAME: string;
			public static SENTRY_SYNTHETIC_EXCEPTION: string;
			public static ANDROID_ACTIVITY: string;
			public static ANDROID_CONFIGURATION: string;
			public static ANDROID_INTENT: string;
			public static ANDROID_SENSOR_EVENT: string;
			public static ANDROID_MOTION_EVENT: string;
			public static ANDROID_VIEW: string;
			public static ANDROID_FRAGMENT: string;
			public static ANDROID_NAV_DESTINATION: string;
			public static ANDROID_NETWORK_CAPABILITIES: string;
			public static OKHTTP_RESPONSE: string;
			public static OKHTTP_REQUEST: string;
			public static APOLLO_RESPONSE: string;
			public static APOLLO_REQUEST: string;
			public static GRAPHQL_HANDLER_PARAMETERS: string;
			public static JUL_LOG_RECORD: string;
			public static LOG4J_LOG_EVENT: string;
			public static LOGBACK_LOGGING_EVENT: string;
			public static OPEN_FEIGN_RESPONSE: string;
			public static OPEN_FEIGN_REQUEST: string;
			public static SERVLET_REQUEST: string;
			public static SPRING_RESOLVER_RESPONSE: string;
			public static SPRING_RESOLVER_REQUEST: string;
			public static SPRING_REQUEST_FILTER_RESPONSE: string;
			public static SPRING_REQUEST_FILTER_REQUEST: string;
			public static SPRING_REQUEST_INTERCEPTOR_RESPONSE: string;
			public static SPRING_REQUEST_INTERCEPTOR_REQUEST: string;
			public static SPRING_REQUEST_INTERCEPTOR_REQUEST_BODY: string;
			public static WEBFLUX_EXCEPTION_HANDLER_RESPONSE: string;
			public static WEBFLUX_EXCEPTION_HANDLER_REQUEST: string;
			public static WEBFLUX_EXCEPTION_HANDLER_EXCHANGE: string;
			public static WEBFLUX_FILTER_RESPONSE: string;
			public static WEBFLUX_FILTER_REQUEST: string;
			public static SPRING_EXCHANGE_FILTER_RESPONSE: string;
			public static SPRING_EXCHANGE_FILTER_REQUEST: string;
			public constructor();
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class UncaughtExceptionHandler extends java.lang.Object {
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
		export namespace UncaughtExceptionHandler {
			export class Adapter extends java.lang.Object implements io.sentry.UncaughtExceptionHandler {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler.Adapter>;
				public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
				public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class UncaughtExceptionHandlerIntegration extends java.lang.Object implements io.sentry.Integration, java.lang.Thread.UncaughtExceptionHandler, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			public close(): void;
		}
		export namespace UncaughtExceptionHandlerIntegration {
			export class UncaughtExceptionHint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.SessionEnd, io.sentry.hints.TransactionEnd {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
				public markFlushed(): void;
				public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
				public setFlushable(param0: io.sentry.protocol.SentryId): void;
				public constructor(param0: number, param1: io.sentry.ILogger);
				public waitFlush(): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export class UserFeedback extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
			public static class: java.lang.Class<io.sentry.UserFeedback>;
			public setEmail(param0: string): void;
			public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setUnknown(param0: java.util.Map<string,any>): void;
			public getComments(): string;
			public setComments(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: string, param3: string);
			public getUnknown(): java.util.Map<string,any>;
			public toString(): string;
			public getName(): string;
			public setName(param0: string): void;
			public getEmail(): string;
		}
		export namespace UserFeedback {
			export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.UserFeedback> {
				public static class: java.lang.Class<io.sentry.UserFeedback.Deserializer>;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
				public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.UserFeedback;
				public constructor();
			}
			export class JsonKeys extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.UserFeedback.JsonKeys>;
				public static EVENT_ID: string;
				public static NAME: string;
				public static EMAIL: string;
				public static COMMENTS: string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.android.R>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ANRWatchDog extends java.lang.Thread {
					public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog>;
					public run(): void;
				}
				export namespace ANRWatchDog {
					export class ANRListener extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ActivityFramesTracker extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker>;
					public takeMetrics(param0: io.sentry.protocol.SentryId): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
					public isFrameMetricsAggregatorAvailable(): boolean;
					public constructor(param0: io.sentry.android.core.LoadClass, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.MainLooperHandler);
					public stop(): void;
					public addActivity(param0: globalAndroid.app.Activity): void;
					public constructor(param0: io.sentry.android.core.LoadClass, param1: io.sentry.android.core.SentryAndroidOptions);
					public setMetrics(param0: globalAndroid.app.Activity, param1: io.sentry.protocol.SentryId): void;
				}
				export namespace ActivityFramesTracker {
					export class FrameCounts extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker.FrameCounts>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ActivityLifecycleIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.ActivityLifecycleIntegration>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					public constructor(param0: globalAndroid.app.Application, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.android.core.ActivityFramesTracker);
					public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
					public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidCpuCollector extends java.lang.Object implements io.sentry.ICollector {
					public static class: java.lang.Class<io.sentry.android.core.AndroidCpuCollector>;
					public setup(): void;
					public collect(param0: io.sentry.PerformanceCollectionData): void;
					public constructor(param0: io.sentry.ILogger, param1: io.sentry.android.core.BuildInfoProvider);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidDateUtils extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AndroidDateUtils>;
					public constructor();
					public static getCurrentSentryDateTime(): io.sentry.SentryDate;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidLogger extends java.lang.Object implements io.sentry.ILogger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLogger>;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
					public constructor(param0: string);
					public constructor();
					public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
					public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
					public isEnabled(param0: io.sentry.SentryLevel): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidMemoryCollector extends java.lang.Object implements io.sentry.ICollector {
					public static class: java.lang.Class<io.sentry.android.core.AndroidMemoryCollector>;
					public setup(): void;
					public collect(param0: io.sentry.PerformanceCollectionData): void;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidOptionsInitializer extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AndroidOptionsInitializer>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidProfiler extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler>;
					public endAndCollect(param0: boolean, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.android.core.AndroidProfiler.ProfileEndData;
					public constructor(param0: string, param1: number, param2: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, param3: io.sentry.ISentryExecutorService, param4: io.sentry.ILogger, param5: io.sentry.android.core.BuildInfoProvider);
					public start(): io.sentry.android.core.AndroidProfiler.ProfileStartData;
					public close(): void;
				}
				export namespace AndroidProfiler {
					export class ProfileEndData extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler.ProfileEndData>;
						public endNanos: number;
						public endCpuMillis: number;
						public traceFile: java.io.File;
						public measurementsMap: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>;
						public didTimeout: boolean;
						public constructor(param0: number, param1: number, param2: boolean, param3: java.io.File, param4: java.util.Map<string,io.sentry.profilemeasurements.ProfileMeasurement>);
					}
					export class ProfileStartData extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.AndroidProfiler.ProfileStartData>;
						public startNanos: number;
						public startCpuMillis: number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidTransactionProfiler extends java.lang.Object implements io.sentry.ITransactionProfiler {
					public static class: java.lang.Class<io.sentry.android.core.AndroidTransactionProfiler>;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector);
					public onTransactionFinish(param0: io.sentry.ITransaction, param1: java.util.List<io.sentry.PerformanceCollectionData>): io.sentry.ProfilingTraceData;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector, param4: io.sentry.IHub);
					public close(): void;
					public onTransactionStart(param0: io.sentry.ITransaction): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AndroidTransportGate extends java.lang.Object implements io.sentry.transport.ITransportGate {
					public static class: java.lang.Class<io.sentry.android.core.AndroidTransportGate>;
					public isConnected(): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AnrIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
				export namespace AnrIntegration {
					export class AnrHint extends java.lang.Object implements io.sentry.hints.AbnormalExit, io.sentry.hints.TransactionEnd {
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

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AnrIntegrationFactory extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegrationFactory>;
					public static create(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider): io.sentry.Integration;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AnrV2EventProcessor extends java.lang.Object implements io.sentry.BackfillingEventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.AnrV2EventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.android.core.BuildInfoProvider);
					public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AnrV2Integration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
				export namespace AnrV2Integration {
					export class AnrProcessor extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrProcessor>;
						public run(): void;
					}
					export class AnrV2Hint extends io.sentry.hints.BlockingFlushHint implements io.sentry.hints.Backfillable, io.sentry.hints.AbnormalExit {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.AnrV2Hint>;
						public shouldEnrich(): boolean;
						public setFlushable(param0: io.sentry.protocol.SentryId): void;
						public ignoreCurrentThread(): boolean;
						public waitFlush(): boolean;
						public timestamp(): java.lang.Long;
						public markFlushed(): void;
						public constructor(param0: number, param1: io.sentry.ILogger, param2: number, param3: boolean, param4: boolean);
						public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
						public constructor(param0: number, param1: io.sentry.ILogger);
						public mechanism(): string;
					}
					export class ParseResult extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult>;
					}
					export namespace ParseResult {
						export class Type {
							public static class: java.lang.Class<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
							public static DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static NO_DUMP: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static ERROR: io.sentry.android.core.AnrV2Integration.ParseResult.Type;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static values(): androidNative.Array<io.sentry.android.core.AnrV2Integration.ParseResult.Type>;
							public static valueOf(param0: string): io.sentry.android.core.AnrV2Integration.ParseResult.Type;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AppComponentsBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.content.ComponentCallbacks2 {
					public static class: java.lang.Class<io.sentry.android.core.AppComponentsBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onTrimMemory(param0: number): void;
					public close(): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AppLifecycleIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.AppLifecycleIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AppStartState extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AppStartState>;
					public reset(): void;
					public isColdStart(): java.lang.Boolean;
					public getAppStartEndTime(): io.sentry.SentryDate;
					public setAppStartMillis(param0: number): void;
					public static getInstance(): io.sentry.android.core.AppStartState;
					public getAppStartInterval(): java.lang.Long;
					public getAppStartTime(): io.sentry.SentryDate;
					public getAppStartMillis(): java.lang.Long;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class AppState extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AppState>;
					public isInBackground(): java.lang.Boolean;
					public static getInstance(): io.sentry.android.core.AppState;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ApplicationNotResponding extends java.lang.RuntimeException {
					public static class: java.lang.Class<io.sentry.android.core.ApplicationNotResponding>;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static SENTRY_ANDROID_SDK_NAME: string;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class BuildInfoProvider extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.BuildInfoProvider>;
					public isEmulator(): java.lang.Boolean;
					public getModel(): string;
					public getSdkInfoVersion(): number;
					public constructor(param0: io.sentry.ILogger);
					public getBuildTags(): string;
					public getManufacturer(): string;
					public getVersionRelease(): string;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ContextUtils extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.ContextUtils>;
				}
				export namespace ContextUtils {
					export class SideLoadedInfo extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.ContextUtils.SideLoadedInfo>;
						public constructor(param0: boolean, param1: string);
						public getInstallerStore(): string;
						public asTags(): java.util.Map<string,string>;
						public isSideLoaded(): boolean;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class CurrentActivityHolder extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.CurrentActivityHolder>;
					public clearActivity(): void;
					public setActivity(param0: globalAndroid.app.Activity): void;
					public getActivity(): globalAndroid.app.Activity;
					public static getInstance(): io.sentry.android.core.CurrentActivityHolder;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class CurrentActivityIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.CurrentActivityIntegration>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
					public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public constructor(param0: globalAndroid.app.Application);
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class DefaultAndroidEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
					public getDefaultUser(param0: globalAndroid.content.Context): io.sentry.protocol.User;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.android.core.SentryAndroidOptions);
					public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class DeviceInfoUtil extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.DeviceInfoUtil>;
					public static resetInstance(): void;
					public static getInstance(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions): io.sentry.android.core.DeviceInfoUtil;
					public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions);
					public retrieveOperatingSystemInformation(): io.sentry.protocol.OperatingSystem;
					public getSideLoadedInfo(): io.sentry.android.core.ContextUtils.SideLoadedInfo;
					public collectDeviceInformation(param0: boolean, param1: boolean): io.sentry.protocol.Device;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export abstract class EmptySecureContentProvider extends globalAndroid.content.ContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.EmptySecureContentProvider>;
					public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
					public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
					public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
					public onTrimMemory(param0: number): void;
					public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): number;
					public delete(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle): number;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class EnvelopeFileObserver extends globalAndroid.os.FileObserver {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver>;
					public onEvent(param0: number, param1: string): void;
				}
				export namespace EnvelopeFileObserver {
					export class CachedEnvelopeHint extends java.lang.Object implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable, io.sentry.hints.ApplyScopeData, io.sentry.hints.Resettable {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver.CachedEnvelopeHint>;
						public isRetry(): boolean;
						public waitFlush(): boolean;
						public isSuccess(): boolean;
						public setResult(param0: boolean): void;
						public setRetry(param0: boolean): void;
						public constructor(param0: number, param1: io.sentry.ILogger);
						public reset(): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export abstract class EnvelopeFileObserverIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
					public static getOutboxFileObserver(): io.sentry.android.core.EnvelopeFileObserverIntegration;
				}
				export namespace EnvelopeFileObserverIntegration {
					export class OutboxEnvelopeFileObserverIntegration extends io.sentry.android.core.EnvelopeFileObserverIntegration {
						public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration.OutboxEnvelopeFileObserverIntegration>;
						public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
						public close(): void;
						public getPath(param0: io.sentry.SentryOptions): string;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class IDebugImagesLoader extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.IDebugImagesLoader>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IDebugImagesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
						clearDebugImages(): void;
					});
					public constructor();
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class Installation extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.Installation>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class InternalSentrySdk extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.InternalSentrySdk>;
					public static serializeScope(param0: globalAndroid.content.Context, param1: io.sentry.android.core.SentryAndroidOptions, param2: io.sentry.IScope): java.util.Map<string,any>;
					public constructor();
					public static getCurrentScope(): io.sentry.IScope;
					public static captureEnvelope(param0: androidNative.Array<number>): io.sentry.protocol.SentryId;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class LifecycleWatcher extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.LifecycleWatcher>;
					public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
					public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class LoadClass extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.LoadClass>;
					public loadClass(param0: string, param1: io.sentry.ILogger): java.lang.Class<any>;
					public isClassAvailable(param0: string, param1: io.sentry.ILogger): boolean;
					public isClassAvailable(param0: string, param1: io.sentry.SentryOptions): boolean;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class MainLooperHandler extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.MainLooperHandler>;
					public post(param0: java.lang.Runnable): void;
					public getThread(): java.lang.Thread;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ManifestMetadataReader extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.ManifestMetadataReader>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class NdkIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.NdkIntegration>;
					public static SENTRY_NDK_CLASS_NAME: string;
					public constructor(param0: java.lang.Class<any>);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class NetworkBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.ILogger);
					public close(): void;
				}
				export namespace NetworkBreadcrumbsIntegration {
					export class NetworkBreadcrumbConnectionDetail extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbConnectionDetail>;
					}
					export class NetworkBreadcrumbsNetworkCallback extends globalAndroid.net.ConnectivityManager.NetworkCallback {
						public static class: java.lang.Class<io.sentry.android.core.NetworkBreadcrumbsIntegration.NetworkBreadcrumbsNetworkCallback>;
						public onCapabilitiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.NetworkCapabilities): void;
						public onAvailable(param0: globalAndroid.net.Network): void;
						public onLost(param0: globalAndroid.net.Network): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class NoOpDebugImagesLoader extends java.lang.Object implements io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.core.NoOpDebugImagesLoader>;
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
					public static getInstance(): io.sentry.android.core.NoOpDebugImagesLoader;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class PerformanceAndroidEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.PerformanceAndroidEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
					public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class PhoneStateBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
				export namespace PhoneStateBreadcrumbsIntegration {
					export class PhoneStateChangeListener extends globalAndroid.telephony.PhoneStateListener {
						public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration.PhoneStateChangeListener>;
						public onCallStateChanged(param0: number, param1: string): void;
						/** @deprecated */
						public onCallStateChanged(param0: number, param1: string): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class R extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.R>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ScreenshotEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.ScreenshotEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
					public constructor(param0: io.sentry.android.core.SentryAndroidOptions, param1: io.sentry.android.core.BuildInfoProvider);
					public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SendCachedEnvelopeIntegration extends java.lang.Object implements io.sentry.Integration, io.sentry.IConnectionStatusProvider.IConnectionStatusObserver, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.SendCachedEnvelopeIntegration>;
					public onConnectionStatusChanged(param0: io.sentry.IConnectionStatusProvider.ConnectionStatus): void;
					public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory, param1: io.sentry.util.LazyEvaluator<java.lang.Boolean>);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryAndroid extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroid>;
					public static init(param0: globalAndroid.content.Context): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
					public static init(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.Sentry.OptionsConfiguration<io.sentry.android.core.SentryAndroidOptions>): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryAndroidDateProvider extends java.lang.Object implements io.sentry.SentryDateProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidDateProvider>;
					public constructor();
					public now(): io.sentry.SentryDate;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryAndroidOptions extends io.sentry.SentryOptions {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions>;
					public isReportHistoricalAnrs(): boolean;
					public setDebugImagesLoader(param0: io.sentry.android.core.IDebugImagesLoader): void;
					public isEnableNdk(): boolean;
					public getNativeSdkName(): string;
					public setEnableNetworkEventBreadcrumbs(param0: boolean): void;
					public setEnableNdk(param0: boolean): void;
					public isEnableActivityLifecycleBreadcrumbs(): boolean;
					public setAttachViewHierarchy(param0: boolean): void;
					public setEnableSystemEventBreadcrumbs(param0: boolean): void;
					public setEnableActivityLifecycleTracingAutoFinish(param0: boolean): void;
					public constructor();
					public getAnrTimeoutIntervalMillis(): number;
					public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
					public getDebugImagesLoader(): io.sentry.android.core.IDebugImagesLoader;
					public isEnableRootCheck(): boolean;
					public getBeforeScreenshotCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
					public setEnableAutoActivityLifecycleTracing(param0: boolean): void;
					public isEnableFramesTracking(): boolean;
					public setCollectAdditionalContext(param0: boolean): void;
					public isAttachViewHierarchy(): boolean;
					public isEnableActivityLifecycleTracingAutoFinish(): boolean;
					public isAnrEnabled(): boolean;
					public setAnrEnabled(param0: boolean): void;
					public setEnableScopeSync(param0: boolean): void;
					public isEnableAppComponentBreadcrumbs(): boolean;
					public isEnableScopeSync(): boolean;
					public isAnrReportInDebug(): boolean;
					public isEnableAutoActivityLifecycleTracing(): boolean;
					public setEnableRootCheck(param0: boolean): void;
					public setEnableAppComponentBreadcrumbs(param0: boolean): void;
					public enableAllAutoBreadcrumbs(param0: boolean): void;
					public isEnableAppLifecycleBreadcrumbs(): boolean;
					/** @deprecated */
					public setProfilingTracesIntervalMillis(param0: number): void;
					public setReportHistoricalAnrs(param0: boolean): void;
					public setAttachAnrThreadDump(param0: boolean): void;
					public setNativeSdkName(param0: string): void;
					public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
					public isCollectAdditionalContext(): boolean;
					public getBeforeViewHierarchyCaptureCallback(): io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback;
					public getStartupCrashDurationThresholdMillis(): number;
					public setBeforeViewHierarchyCaptureCallback(param0: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
					/** @deprecated */
					public getProfilingTracesIntervalMillis(): number;
					public isAttachScreenshot(): boolean;
					public isEnableNetworkEventBreadcrumbs(): boolean;
					public isEnableSystemEventBreadcrumbs(): boolean;
					public setProfilingTracesHz(param0: number): void;
					public setAnrReportInDebug(param0: boolean): void;
					public setBeforeScreenshotCaptureCallback(param0: io.sentry.android.core.SentryAndroidOptions.BeforeCaptureCallback): void;
					public setAnrTimeoutIntervalMillis(param0: number): void;
					public isAttachAnrThreadDump(): boolean;
					public setAttachScreenshot(param0: boolean): void;
					public getProfilingTracesHz(): number;
					public setEnableFramesTracking(param0: boolean): void;
				}
				export namespace SentryAndroidOptions {
					export class BeforeCaptureCallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryInitProvider extends io.sentry.android.core.EmptySecureContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryInitProvider>;
					public shutdown(): void;
					public onTrimMemory(param0: number): void;
					public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
					public constructor();
					public onCreate(): boolean;
					public getType(param0: globalAndroid.net.Uri): string;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryLogcatAdapter extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.SentryLogcatAdapter>;
					public constructor();
					public static wtf(param0: string, param1: java.lang.Throwable): number;
					public static wtf(param0: string, param1: string, param2: java.lang.Throwable): number;
					public static wtf(param0: string, param1: string): number;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SentryPerformanceProvider extends io.sentry.android.core.EmptySecureContentProvider implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.SentryPerformanceProvider>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
					public constructor();
					public onCreate(): boolean;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public getType(param0: globalAndroid.net.Uri): string;
					public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
					public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onTrimMemory(param0: number): void;
					public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
					public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
					public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class SystemEventsBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
				}
				export namespace SystemEventsBreadcrumbsIntegration {
					export class SystemEventsBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
						public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.SystemEventsBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class TempSensorBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.hardware.SensorEventListener {
					public static class: java.lang.Class<io.sentry.android.core.TempSensorBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
					public close(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class UserInteractionIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.UserInteractionIntegration>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public constructor(param0: globalAndroid.app.Application, param1: io.sentry.android.core.LoadClass);
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
					public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export class ViewHierarchyEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.ViewHierarchyEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: io.sentry.Hint): io.sentry.SentryEvent;
					public static snapshotViewHierarchy(param0: globalAndroid.app.Activity, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
					public constructor(param0: io.sentry.android.core.SentryAndroidOptions);
					public static snapshotViewHierarchy(param0: globalAndroid.view.View): io.sentry.protocol.ViewHierarchy;
					public static snapshotViewHierarchyAsData(param0: globalAndroid.app.Activity, param1: io.sentry.util.thread.IMainThreadChecker, param2: io.sentry.ISerializer, param3: io.sentry.ILogger): androidNative.Array<number>;
					public static snapshotViewHierarchy(param0: globalAndroid.view.View, param1: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>): io.sentry.protocol.ViewHierarchy;
					public static snapshotViewHierarchy(param0: globalAndroid.app.Activity, param1: java.util.List<io.sentry.internal.viewhierarchy.ViewHierarchyExporter>, param2: io.sentry.util.thread.IMainThreadChecker, param3: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
					public process(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Hint): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace cache {
					export class AndroidEnvelopeCache extends io.sentry.cache.EnvelopeCache {
						public static class: java.lang.Class<io.sentry.android.core.cache.AndroidEnvelopeCache>;
						public static LAST_ANR_REPORT: string;
						public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
						public constructor(param0: io.sentry.android.core.SentryAndroidOptions);
						public store(param0: io.sentry.SentryEnvelope): void;
						public discard(param0: io.sentry.SentryEnvelope): void;
						public getDirectory(): java.io.File;
						public static lastReportedAnr(param0: io.sentry.SentryOptions): java.lang.Long;
						public constructor(param0: io.sentry.SentryOptions, param1: string, param2: number);
						public static hasStartupCrashMarker(param0: io.sentry.SentryOptions): boolean;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace debugmeta {
						export class AssetsDebugMetaLoader extends java.lang.Object implements io.sentry.internal.debugmeta.IDebugMetaLoader {
							public static class: java.lang.Class<io.sentry.android.core.internal.debugmeta.AssetsDebugMetaLoader>;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger);
							public loadDebugMeta(): java.util.Properties;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class AndroidViewGestureTargetLocator extends java.lang.Object implements io.sentry.internal.gestures.GestureTargetLocator {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.AndroidViewGestureTargetLocator>;
							public locate(param0: any, param1: number, param2: number, param3: io.sentry.internal.gestures.UiElement.Type): io.sentry.internal.gestures.UiElement;
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class NoOpWindowCallback extends java.lang.Object implements globalAndroid.view.Window.Callback {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.NoOpWindowCallback>;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
							public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onWindowFocusChanged(param0: boolean): void;
							public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onAttachedToWindow(): void;
							public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
							public constructor();
							public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
							public onPointerCaptureChanged(param0: boolean): void;
							public onDetachedFromWindow(): void;
							public onContentChanged(): void;
							public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
							public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
							public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
							public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
							public onCreatePanelView(param0: number): globalAndroid.view.View;
							public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onSearchRequested(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class SentryGestureListener extends java.lang.Object implements globalAndroid.view.GestureDetector.OnGestureListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener>;
							public onDown(param0: globalAndroid.view.MotionEvent): boolean;
							public onUp(param0: globalAndroid.view.MotionEvent): void;
							public constructor(param0: globalAndroid.app.Activity, param1: io.sentry.IHub, param2: io.sentry.android.core.SentryAndroidOptions);
							public onLongPress(param0: globalAndroid.view.MotionEvent): void;
							public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public onShowPress(param0: globalAndroid.view.MotionEvent): void;
						}
						export namespace SentryGestureListener {
							export class GestureType {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType>;
								public static Click: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Scroll: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Swipe: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static Unknown: io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static valueOf(param0: string): io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType;
								public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
								public static values(): androidNative.Array<io.sentry.android.core.internal.gestures.SentryGestureListener.GestureType>;
							}
							export class ScrollState extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener.ScrollState>;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class SentryWindowCallback extends io.sentry.android.core.internal.gestures.WindowCallbackAdapter {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback>;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
							public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onWindowFocusChanged(param0: boolean): void;
							public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onAttachedToWindow(): void;
							public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
							public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
							public onPointerCaptureChanged(param0: boolean): void;
							public constructor(param0: globalAndroid.view.Window.Callback, param1: globalAndroid.content.Context, param2: io.sentry.android.core.internal.gestures.SentryGestureListener, param3: io.sentry.SentryOptions);
							public onDetachedFromWindow(): void;
							public stopTracking(): void;
							public onContentChanged(): void;
							public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
							public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
							public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
							public getDelegate(): globalAndroid.view.Window.Callback;
							public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
							public onCreatePanelView(param0: number): globalAndroid.view.View;
							public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onSearchRequested(param0: any): boolean;
						}
						export namespace SentryWindowCallback {
							export class MotionEventObtainer extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryWindowCallback.MotionEventObtainer>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.gestures.SentryWindowCallback$MotionEventObtainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									obtain(param0: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent;
								});
								public constructor();
								public obtain(param0: globalAndroid.view.MotionEvent): globalAndroid.view.MotionEvent;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class ViewUtils extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewUtils>;
							public constructor();
							public static getResourceId(param0: globalAndroid.view.View): string;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace gestures {
						export class WindowCallbackAdapter extends java.lang.Object implements globalAndroid.view.Window.Callback {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.WindowCallbackAdapter>;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
							public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onWindowFocusChanged(param0: boolean): void;
							public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onAttachedToWindow(): void;
							public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
							public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
							public onPointerCaptureChanged(param0: boolean): void;
							public onDetachedFromWindow(): void;
							public onContentChanged(): void;
							public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
							public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
							public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
							public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
							public onCreatePanelView(param0: number): globalAndroid.view.View;
							public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onSearchRequested(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace modules {
						export class AssetsModulesLoader extends io.sentry.internal.modules.ModulesLoader {
							public static class: java.lang.Class<io.sentry.android.core.internal.modules.AssetsModulesLoader>;
							public loadModules(): java.util.Map<string,string>;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger);
							public getOrLoadModules(): java.util.Map<string,string>;
							public constructor(param0: io.sentry.ILogger);
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace threaddump {
						export class Line extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Line>;
							public lineno: number;
							public text: string;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace threaddump {
						export class Lines extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.Lines>;
							public pos: number;
							public constructor(param0: java.util.ArrayList<any>);
							public hasNext(): boolean;
							public static readLines(param0: java.io.BufferedReader): io.sentry.android.core.internal.threaddump.Lines;
							public rewind(): void;
							public static readLines(param0: java.io.File): io.sentry.android.core.internal.threaddump.Lines;
							public next(): io.sentry.android.core.internal.threaddump.Line;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace threaddump {
						export class ThreadDumpParser extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.threaddump.ThreadDumpParser>;
							public parse(param0: io.sentry.android.core.internal.threaddump.Lines): java.util.List<io.sentry.protocol.SentryThread>;
							public constructor(param0: io.sentry.SentryOptions, param1: boolean);
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class AndroidConnectionStatusProvider extends java.lang.Object implements io.sentry.IConnectionStatusProvider {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidConnectionStatusProvider>;
							public static getConnectionType(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider): string;
							public static registerNetworkCallback(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider, param3: globalAndroid.net.ConnectivityManager.NetworkCallback): boolean;
							public getConnectionType(): string;
							public static unregisterNetworkCallback(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider, param3: globalAndroid.net.ConnectivityManager.NetworkCallback): void;
							public addConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): boolean;
							public static getConnectionType(param0: globalAndroid.net.NetworkCapabilities, param1: io.sentry.android.core.BuildInfoProvider): string;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider);
							public getConnectionStatus(): io.sentry.IConnectionStatusProvider.ConnectionStatus;
							public removeConnectionStatusObserver(param0: io.sentry.IConnectionStatusProvider.IConnectionStatusObserver): void;
							public getRegisteredCallbacks(): java.util.Map<io.sentry.IConnectionStatusProvider.IConnectionStatusObserver,globalAndroid.net.ConnectivityManager.NetworkCallback>;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class AndroidCurrentDateProvider extends java.lang.Object implements io.sentry.transport.ICurrentDateProvider {
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

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class AndroidMainThreadChecker extends java.lang.Object implements io.sentry.util.thread.IMainThreadChecker {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.AndroidMainThreadChecker>;
							public isMainThread(param0: number): boolean;
							public static getInstance(): io.sentry.android.core.internal.util.AndroidMainThreadChecker;
							public isMainThread(param0: java.lang.Thread): boolean;
							public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
							public isMainThread(): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class BreadcrumbFactory extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.BreadcrumbFactory>;
							public constructor();
							public static forSession(param0: string): io.sentry.Breadcrumb;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class ClassUtil extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ClassUtil>;
							public constructor();
							public static getClassName(param0: any): string;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class ContentProviderSecurityChecker extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ContentProviderSecurityChecker>;
							public constructor();
							public constructor(param0: io.sentry.android.core.BuildInfoProvider);
							public checkPrivilegeEscalation(param0: globalAndroid.content.ContentProvider): void;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class CpuInfoUtils extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.CpuInfoUtils>;
							public static getInstance(): io.sentry.android.core.internal.util.CpuInfoUtils;
							public readMaxFrequencies(): java.util.List<java.lang.Integer>;
							public setCpuMaxFrequencies(param0: java.util.List<java.lang.Integer>): void;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class Debouncer extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.Debouncer>;
							public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: number, param2: number);
							public checkForDebounce(): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class DeviceOrientations extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.DeviceOrientations>;
							public static getOrientation(param0: number): io.sentry.protocol.Device.DeviceOrientation;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class FirstDrawDoneListener extends java.lang.Object implements globalAndroid.view.ViewTreeObserver.OnDrawListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.FirstDrawDoneListener>;
							public static registerForNextDraw(param0: globalAndroid.view.View, param1: java.lang.Runnable, param2: io.sentry.android.core.BuildInfoProvider): void;
							public onDraw(): void;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class Permissions extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.Permissions>;
							public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class RootChecker extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.RootChecker>;
							public isDeviceRooted(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.BuildInfoProvider, param2: io.sentry.ILogger);
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class ScreenshotUtils extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ScreenshotUtils>;
							public constructor();
							public static takeScreenshot(param0: globalAndroid.app.Activity, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
							public static takeScreenshot(param0: globalAndroid.app.Activity, param1: io.sentry.util.thread.IMainThreadChecker, param2: io.sentry.ILogger, param3: io.sentry.android.core.BuildInfoProvider): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace core {
				export namespace internal {
					export namespace util {
						export class SentryFrameMetricsCollector extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector>;
							public onActivityStarted(param0: globalAndroid.app.Activity): void;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager);
							public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityResumed(param0: globalAndroid.app.Activity): void;
							public stopCollection(param0: string): void;
							public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
							public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
							public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
							public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
							public startCollection(param0: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener): string;
							public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
							public onActivityPaused(param0: globalAndroid.app.Activity): void;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.SentryOptions, param2: io.sentry.android.core.BuildInfoProvider);
							public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
							public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
							public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.BuildInfoProvider);
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.SentryOptions, param2: io.sentry.android.core.BuildInfoProvider, param3: io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager);
							public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
							public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
							public onActivityStopped(param0: globalAndroid.app.Activity): void;
						}
						export namespace SentryFrameMetricsCollector {
							export class FrameMetricsCollectorListener extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.FrameMetricsCollectorListener>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$FrameMetricsCollectorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameMetricCollected(param0: number, param1: number, param2: number): void;
								});
								public constructor();
								public onFrameMetricCollected(param0: number, param1: number, param2: number): void;
							}
							export class WindowFrameMetricsManager extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.SentryFrameMetricsCollector.WindowFrameMetricsManager>;
								/**
								 * Constructs a new instance of the io.sentry.android.core.internal.util.SentryFrameMetricsCollector$WindowFrameMetricsManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener, param2: globalAndroid.os.Handler): void;
									removeOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void;
								});
								public constructor();
								public removeOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener): void;
								public addOnFrameMetricsAvailableListener(param0: globalAndroid.view.Window, param1: globalAndroid.view.Window.OnFrameMetricsAvailableListener, param2: globalAndroid.os.Handler): void;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace fragment {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.fragment.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace fragment {
				export class FragmentLifecycleIntegration extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks, io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.fragment.FragmentLifecycleIntegration>;
					public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
					public constructor(param0: globalAndroid.app.Application, param1: boolean, param2: boolean);
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
					public close(): void;
					public constructor(param0: globalAndroid.app.Application);
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
					public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
					public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public constructor(param0: globalAndroid.app.Application, param1: java.util.Set<any>, param2: boolean);
					public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace fragment {
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
					public static valueOf(param0: string): io.sentry.android.fragment.FragmentLifecycleState;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace fragment {
				export class R extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.fragment.R>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace fragment {
				export class SentryFragmentLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.fragment.SentryFragmentLifecycleCallbacks>;
					public static FRAGMENT_LOAD_OP: string;
					public constructor(param0: boolean, param1: boolean);
					public onFragmentViewCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.view.View, param3: globalAndroid.os.Bundle): void;
					public onFragmentDetached(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public getEnableFragmentLifecycleBreadcrumbs(): boolean;
					public onFragmentPaused(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentCreated(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public getFilterFragmentLifecycleBreadcrumbs(): java.util.Set<io.sentry.android.fragment.FragmentLifecycleState>;
					public getEnableAutoFragmentLifecycleTracing(): boolean;
					public constructor(param0: io.sentry.IHub, param1: boolean, param2: boolean);
					public constructor(param0: io.sentry.IHub, param1: java.util.Set<any>, param2: boolean);
					public onFragmentStarted(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentStopped(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentSaveInstanceState(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.os.Bundle): void;
					public onFragmentViewDestroyed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentResumed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentDestroyed(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onFragmentAttached(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment, param2: globalAndroid.content.Context): void;
				}
				export namespace SentryFragmentLifecycleCallbacks {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.fragment.SentryFragmentLifecycleCallbacks.Companion>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class DebugImagesLoader extends java.lang.Object implements io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.ndk.DebugImagesLoader>;
					public constructor(param0: io.sentry.android.core.SentryAndroidOptions, param1: io.sentry.android.ndk.NativeModuleListLoader);
					public loadDebugImages(): java.util.List<io.sentry.protocol.DebugImage>;
					public clearDebugImages(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class INativeScope extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.INativeScope>;
					/**
					 * Constructs a new instance of the io.sentry.android.ndk.INativeScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setTag(param0: string, param1: string): void;
						removeTag(param0: string): void;
						setExtra(param0: string, param1: string): void;
						removeExtra(param0: string): void;
						setUser(param0: string, param1: string, param2: string, param3: string): void;
						removeUser(): void;
						addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
					});
					public constructor();
					public setUser(param0: string, param1: string, param2: string, param3: string): void;
					public setExtra(param0: string, param1: string): void;
					public removeUser(): void;
					public removeExtra(param0: string): void;
					public setTag(param0: string, param1: string): void;
					public removeTag(param0: string): void;
					public addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class NativeModuleListLoader extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.NativeModuleListLoader>;
					public static nativeClearModuleList(): void;
					public loadModuleList(): androidNative.Array<io.sentry.protocol.DebugImage>;
					public clearModuleList(): void;
					public static nativeLoadModuleList(): androidNative.Array<io.sentry.protocol.DebugImage>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class NativeScope extends java.lang.Object implements io.sentry.android.ndk.INativeScope {
					public static class: java.lang.Class<io.sentry.android.ndk.NativeScope>;
					public static nativeRemoveUser(): void;
					public static nativeRemoveTag(param0: string): void;
					public static nativeSetExtra(param0: string, param1: string): void;
					public removeUser(): void;
					public removeExtra(param0: string): void;
					public removeTag(param0: string): void;
					public addBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
					public static nativeSetTag(param0: string, param1: string): void;
					public setUser(param0: string, param1: string, param2: string, param3: string): void;
					public static nativeRemoveExtra(param0: string): void;
					public static nativeSetUser(param0: string, param1: string, param2: string, param3: string): void;
					public setExtra(param0: string, param1: string): void;
					public static nativeAddBreadcrumb(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
					public setTag(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class NdkScopeObserver extends io.sentry.ScopeObserverAdapter {
					public static class: java.lang.Class<io.sentry.android.ndk.NdkScopeObserver>;
					public setLevel(param0: io.sentry.SentryLevel): void;
					public setExtras(param0: java.util.Map<string,any>): void;
					public setUser(param0: io.sentry.protocol.User): void;
					public removeExtra(param0: string): void;
					public setTrace(param0: io.sentry.SpanContext): void;
					public removeTag(param0: string): void;
					public setTags(param0: java.util.Map<string,string>): void;
					public setExtra(param0: string, param1: string): void;
					public setContexts(param0: io.sentry.protocol.Contexts): void;
					public constructor();
					public constructor(param0: io.sentry.SentryOptions);
					public setFingerprint(param0: java.util.Collection<string>): void;
					public setTag(param0: string, param1: string): void;
					public setRequest(param0: io.sentry.protocol.Request): void;
					public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
					public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
					public setTransaction(param0: string): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class R extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.R>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class SentryNdk extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdk>;
					public static close(): void;
					public static init(param0: io.sentry.android.core.SentryAndroidOptions): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace android {
			export namespace ndk {
				export class SentryNdkUtil extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdkUtil>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export abstract class CacheStrategy extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.cache.CacheStrategy>;
				public static UTF_8: java.nio.charset.Charset;
				public options: io.sentry.SentryOptions;
				public serializer: io.sentry.ISerializer;
				public directory: java.io.File;
				public rotateCacheIfNeeded(param0: androidNative.Array<java.io.File>): void;
				public isDirectoryValid(): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export class CacheUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.cache.CacheUtils>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export class EnvelopeCache extends io.sentry.cache.CacheStrategy implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.cache.EnvelopeCache>;
				public static SUFFIX_ENVELOPE_FILE: string;
				public static PREFIX_CURRENT_SESSION_FILE: string;
				public static PREFIX_PREVIOUS_SESSION_FILE: string;
				public static CRASH_MARKER_FILE: string;
				public static NATIVE_CRASH_MARKER_FILE: string;
				public static STARTUP_CRASH_MARKER_FILE: string;
				public spliterator(): java.util.Spliterator<any>;
				public iterator(): java.util.Iterator<any>;
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
				public constructor(param0: io.sentry.SentryOptions, param1: string, param2: number);
				public discard(param0: io.sentry.SentryEnvelope): void;
				public static getCurrentSessionFile(param0: string): java.io.File;
				public flushPreviousSession(): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public waitPreviousSessionFlush(): boolean;
				public static create(param0: io.sentry.SentryOptions): io.sentry.cache.IEnvelopeCache;
				public static getPreviousSessionFile(param0: string): java.io.File;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export class IEnvelopeCache extends java.lang.Iterable<io.sentry.SentryEnvelope> {
				public static class: java.lang.Class<io.sentry.cache.IEnvelopeCache>;
				/**
				 * Constructs a new instance of the io.sentry.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
					store(param0: io.sentry.SentryEnvelope): void;
					discard(param0: io.sentry.SentryEnvelope): void;
					iterator(): java.util.Iterator<any>;
					forEach(param0: any /* any*/): void;
					spliterator(): java.util.Spliterator<any>;
				});
				public constructor();
				public discard(param0: io.sentry.SentryEnvelope): void;
				public spliterator(): java.util.Spliterator<any>;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public iterator(): java.util.Iterator<any>;
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export class PersistingOptionsObserver extends java.lang.Object implements io.sentry.IOptionsObserver {
				public static class: java.lang.Class<io.sentry.cache.PersistingOptionsObserver>;
				public static OPTIONS_CACHE: string;
				public static RELEASE_FILENAME: string;
				public static PROGUARD_UUID_FILENAME: string;
				public static SDK_VERSION_FILENAME: string;
				public static ENVIRONMENT_FILENAME: string;
				public static DIST_FILENAME: string;
				public static TAGS_FILENAME: string;
				public constructor(param0: io.sentry.SentryOptions);
				public setProguardUuid(param0: string): void;
				public setDist(param0: string): void;
				public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
				public setEnvironment(param0: string): void;
				public setTags(param0: java.util.Map<string,string>): void;
				public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>): any;
				public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>, param3: io.sentry.JsonDeserializer<any>): any;
				public setRelease(param0: string): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace cache {
			export class PersistingScopeObserver extends io.sentry.ScopeObserverAdapter {
				public static class: java.lang.Class<io.sentry.cache.PersistingScopeObserver>;
				public static SCOPE_CACHE: string;
				public static USER_FILENAME: string;
				public static BREADCRUMBS_FILENAME: string;
				public static TAGS_FILENAME: string;
				public static EXTRAS_FILENAME: string;
				public static CONTEXTS_FILENAME: string;
				public static REQUEST_FILENAME: string;
				public static LEVEL_FILENAME: string;
				public static FINGERPRINT_FILENAME: string;
				public static TRANSACTION_FILENAME: string;
				public static TRACE_FILENAME: string;
				public constructor(param0: io.sentry.SentryOptions);
				public setExtras(param0: java.util.Map<string,any>): void;
				public removeExtra(param0: string): void;
				public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				public setFingerprint(param0: java.util.Collection<string>): void;
				public setTags(param0: java.util.Map<string,string>): void;
				public constructor();
				public setTransaction(param0: string): void;
				public setContexts(param0: io.sentry.protocol.Contexts): void;
				public setExtra(param0: string, param1: string): void;
				public setUser(param0: io.sentry.protocol.User): void;
				public setRequest(param0: io.sentry.protocol.Request): void;
				public removeTag(param0: string): void;
				public setBreadcrumbs(param0: java.util.Collection<io.sentry.Breadcrumb>): void;
				public setTrace(param0: io.sentry.SpanContext): void;
				public setLevel(param0: io.sentry.SentryLevel): void;
				public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>): any;
				public static read(param0: io.sentry.SentryOptions, param1: string, param2: java.lang.Class<any>, param3: io.sentry.JsonDeserializer<any>): any;
				public setTag(param0: string, param1: string): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class AtomicClientReportStorage extends java.lang.Object implements io.sentry.clientreport.IClientReportStorage {
				public static class: java.lang.Class<io.sentry.clientreport.AtomicClientReportStorage>;
				public resetCountsAndGet(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				public addCount(param0: io.sentry.clientreport.ClientReportKey, param1: java.lang.Long): void;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class ClientReport extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReport>;
				public getTimestamp(): java.util.Date;
				public getDiscardedEvents(): java.util.List<io.sentry.clientreport.DiscardedEvent>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor(param0: java.util.Date, param1: java.util.List<io.sentry.clientreport.DiscardedEvent>);
			}
			export namespace ClientReport {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.ClientReport> {
					public static class: java.lang.Class<io.sentry.clientreport.ClientReport.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.clientreport.ClientReport;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.clientreport.ClientReport.JsonKeys>;
					public static TIMESTAMP: string;
					public static DISCARDED_EVENTS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class ClientReportKey extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReportKey>;
				public getCategory(): string;
				public getReason(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class ClientReportRecorder extends java.lang.Object implements io.sentry.clientreport.IClientReportRecorder {
				public static class: java.lang.Class<io.sentry.clientreport.ClientReportRecorder>;
				public constructor(param0: io.sentry.SentryOptions);
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class DiscardReason {
				public static class: java.lang.Class<io.sentry.clientreport.DiscardReason>;
				public static QUEUE_OVERFLOW: io.sentry.clientreport.DiscardReason;
				public static CACHE_OVERFLOW: io.sentry.clientreport.DiscardReason;
				public static RATELIMIT_BACKOFF: io.sentry.clientreport.DiscardReason;
				public static NETWORK_ERROR: io.sentry.clientreport.DiscardReason;
				public static SAMPLE_RATE: io.sentry.clientreport.DiscardReason;
				public static BEFORE_SEND: io.sentry.clientreport.DiscardReason;
				public static EVENT_PROCESSOR: io.sentry.clientreport.DiscardReason;
				public getReason(): string;
				public static values(): androidNative.Array<io.sentry.clientreport.DiscardReason>;
				public static valueOf(param0: string): io.sentry.clientreport.DiscardReason;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class DiscardedEvent extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent>;
				public getQuantity(): java.lang.Long;
				public getCategory(): string;
				public getReason(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(param0: string, param1: string, param2: java.lang.Long);
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public toString(): string;
			}
			export namespace DiscardedEvent {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.clientreport.DiscardedEvent> {
					public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.clientreport.DiscardedEvent;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.clientreport.DiscardedEvent.JsonKeys>;
					public static REASON: string;
					public static CATEGORY: string;
					public static QUANTITY: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class IClientReportRecorder extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.clientreport.IClientReportRecorder>;
				/**
				 * Constructs a new instance of the io.sentry.clientreport.IClientReportRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
					recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
					recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
					attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				});
				public constructor();
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class IClientReportStorage extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace clientreport {
			export class NoOpClientReportRecorder extends java.lang.Object implements io.sentry.clientreport.IClientReportRecorder {
				public static class: java.lang.Class<io.sentry.clientreport.NoOpClientReportRecorder>;
				public recordLostEnvelopeItem(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelopeItem): void;
				public attachReportToEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.SentryEnvelope;
				public recordLostEvent(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.DataCategory): void;
				public recordLostEnvelope(param0: io.sentry.clientreport.DiscardReason, param1: io.sentry.SentryEnvelope): void;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export abstract class AbstractPropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.AbstractPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class ClasspathPropertiesLoader extends java.lang.Object implements io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.ClasspathPropertiesLoader>;
				public constructor(param0: string, param1: java.lang.ClassLoader, param2: io.sentry.ILogger);
				public constructor(param0: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class CompositePropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.CompositePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public constructor(param0: java.util.List<io.sentry.config.PropertiesProvider>);
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class EnvironmentVariablePropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.EnvironmentVariablePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class FilesystemPropertiesLoader extends java.lang.Object implements io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.FilesystemPropertiesLoader>;
				public constructor(param0: string, param1: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class PropertiesLoader extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class PropertiesProvider extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.config.PropertiesProvider>;
				/**
				 * Constructs a new instance of the io.sentry.config.PropertiesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(param0: string): string;
					getMap(param0: string): java.util.Map<string,string>;
					getList(param0: string): java.util.List<string>;
					getProperty(param0: string, param1: string): string;
					getBooleanProperty(param0: string): java.lang.Boolean;
					getDoubleProperty(param0: string): java.lang.Double;
					getLongProperty(param0: string): java.lang.Long;
				});
				public constructor();
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class PropertiesProviderFactory extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.config.PropertiesProviderFactory>;
				public static create(): io.sentry.config.PropertiesProvider;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class SimplePropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SimplePropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace config {
			export class SystemPropertyPropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SystemPropertyPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getLongProperty(param0: string): java.lang.Long;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace exception {
			export class ExceptionMechanismException extends java.lang.RuntimeException {
				public static class: java.lang.Class<io.sentry.exception.ExceptionMechanismException>;
				public getThread(): java.lang.Thread;
				public isSnapshot(): boolean;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
				public constructor(param0: java.lang.Throwable);
				public getExceptionMechanism(): io.sentry.protocol.Mechanism;
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: io.sentry.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread, param3: boolean);
				public getThrowable(): java.lang.Throwable;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace exception {
			export class InvalidSentryTraceHeaderException extends java.lang.Exception {
				public static class: java.lang.Class<io.sentry.exception.InvalidSentryTraceHeaderException>;
				public getSentryTraceHeader(): string;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace exception {
			export class SentryEnvelopeException extends java.lang.Exception {
				public static class: java.lang.Class<io.sentry.exception.SentryEnvelopeException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace exception {
			export class SentryHttpClientException extends java.lang.Exception {
				public static class: java.lang.Class<io.sentry.exception.SentryHttpClientException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class AbnormalExit extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class ApplyScopeData extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Backfillable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export abstract class BlockingFlushHint extends java.lang.Object implements io.sentry.hints.DiskFlushNotification, io.sentry.hints.Flushable {
				public static class: java.lang.Class<io.sentry.hints.BlockingFlushHint>;
				public markFlushed(): void;
				public isFlushable(param0: io.sentry.protocol.SentryId): boolean;
				public setFlushable(param0: io.sentry.protocol.SentryId): void;
				public constructor(param0: number, param1: io.sentry.ILogger);
				public waitFlush(): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Cached extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class DiskFlushNotification extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Enqueable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class EventDropReason {
				public static class: java.lang.Class<io.sentry.hints.EventDropReason>;
				public static MULTITHREADED_DEDUPLICATION: io.sentry.hints.EventDropReason;
				public static values(): androidNative.Array<io.sentry.hints.EventDropReason>;
				public static valueOf(param0: string): io.sentry.hints.EventDropReason;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Flushable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Resettable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class Retryable extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class SessionEnd extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class SessionEndHint extends java.lang.Object implements io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEndHint>;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class SessionStart extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class SessionStartHint extends java.lang.Object implements io.sentry.hints.SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStartHint>;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class SubmissionResult extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace hints {
			export class TransactionEnd extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class FileIOSpanManager extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileIOSpanManager>;
				}
				export namespace FileIOSpanManager {
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

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class FileInputStreamInitData extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileInputStreamInitData>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class FileOutputStreamInitData extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.instrumentation.file.FileOutputStreamInitData>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class SentryFileInputStream extends java.io.FileInputStream {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream>;
					public read(): number;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.io.FileDescriptor);
					public skip(param0: number): number;
					public close(): void;
					public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public read(param0: androidNative.Array<number>): number;
					public constructor(param0: java.io.File);
				}
				export namespace SentryFileInputStream {
					export class Factory extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileInputStream.Factory>;
						public static create(param0: java.io.FileInputStream, param1: java.io.FileDescriptor): java.io.FileInputStream;
						public constructor();
						public static create(param0: java.io.FileInputStream, param1: java.io.File): java.io.FileInputStream;
						public static create(param0: java.io.FileInputStream, param1: string): java.io.FileInputStream;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class SentryFileOutputStream extends java.io.FileOutputStream {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.io.FileDescriptor);
					public write(param0: androidNative.Array<number>): void;
					public close(): void;
					public constructor(param0: string, param1: boolean);
					public write(param0: number): void;
					public flush(): void;
					public constructor(param0: java.io.File);
					public constructor(param0: java.io.File, param1: boolean);
					public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
				}
				export namespace SentryFileOutputStream {
					export class Factory extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileOutputStream.Factory>;
						public constructor();
						public static create(param0: java.io.FileOutputStream, param1: java.io.FileDescriptor): java.io.FileOutputStream;
						public static create(param0: java.io.FileOutputStream, param1: string): java.io.FileOutputStream;
						public static create(param0: java.io.FileOutputStream, param1: java.io.File): java.io.FileOutputStream;
						public static create(param0: java.io.FileOutputStream, param1: string, param2: boolean): java.io.FileOutputStream;
						public static create(param0: java.io.FileOutputStream, param1: java.io.File, param2: boolean): java.io.FileOutputStream;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class SentryFileReader extends java.io.InputStreamReader {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileReader>;
					public read(): number;
					public constructor(param0: string);
					public constructor(param0: java.io.InputStream, param1: java.nio.charset.CharsetDecoder);
					public constructor(param0: any);
					public constructor(param0: java.io.InputStream, param1: string);
					public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
					public constructor(param0: java.io.InputStream);
					public read(param0: androidNative.Array<string>, param1: number, param2: number): number;
					public constructor();
					public constructor(param0: java.io.FileDescriptor);
					public close(): void;
					public read(param0: androidNative.Array<string>): number;
					public read(param0: java.nio.CharBuffer): number;
					public constructor(param0: java.io.File);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace instrumentation {
			export namespace file {
				export class SentryFileWriter extends java.io.OutputStreamWriter {
					public static class: java.lang.Class<io.sentry.instrumentation.file.SentryFileWriter>;
					public constructor(param0: java.io.OutputStream);
					public append(param0: string): java.lang.Appendable;
					public constructor(param0: string);
					public constructor(param0: java.io.OutputStream, param1: string);
					public constructor(param0: any);
					public append(param0: string): java.io.Writer;
					public flush(): void;
					public constructor(param0: java.io.OutputStream, param1: java.nio.charset.CharsetEncoder);
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(param0: java.io.File, param1: boolean);
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public constructor();
					public constructor(param0: java.io.FileDescriptor);
					public close(): void;
					public constructor(param0: java.io.OutputStream, param1: java.nio.charset.Charset);
					public constructor(param0: string, param1: boolean);
					public constructor(param0: java.io.File);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace debugmeta {
				export class IDebugMetaLoader extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.IDebugMetaLoader>;
					/**
					 * Constructs a new instance of the io.sentry.internal.debugmeta.IDebugMetaLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadDebugMeta(): java.util.Properties;
					});
					public constructor();
					public loadDebugMeta(): java.util.Properties;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace debugmeta {
				export class NoOpDebugMetaLoader extends java.lang.Object implements io.sentry.internal.debugmeta.IDebugMetaLoader {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.NoOpDebugMetaLoader>;
					public static getInstance(): io.sentry.internal.debugmeta.NoOpDebugMetaLoader;
					public loadDebugMeta(): java.util.Properties;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace debugmeta {
				export class ResourcesDebugMetaLoader extends java.lang.Object implements io.sentry.internal.debugmeta.IDebugMetaLoader {
					public static class: java.lang.Class<io.sentry.internal.debugmeta.ResourcesDebugMetaLoader>;
					public constructor(param0: io.sentry.ILogger);
					public loadDebugMeta(): java.util.Properties;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace gestures {
				export class GestureTargetLocator extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace gestures {
				export class UiElement extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.internal.gestures.UiElement>;
					public equals(param0: any): boolean;
					public getResourceName(): string;
					public getView(): any;
					public getClassName(): string;
					public constructor(param0: any, param1: string, param2: string, param3: string, param4: string);
					public getOrigin(): string;
					public getIdentifier(): string;
					public hashCode(): number;
					public getTag(): string;
				}
				export namespace UiElement {
					export class Type {
						public static class: java.lang.Class<io.sentry.internal.gestures.UiElement.Type>;
						public static CLICKABLE: io.sentry.internal.gestures.UiElement.Type;
						public static SCROLLABLE: io.sentry.internal.gestures.UiElement.Type;
						public static values(): androidNative.Array<io.sentry.internal.gestures.UiElement.Type>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): io.sentry.internal.gestures.UiElement.Type;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export class CompositeModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.CompositeModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(param0: java.util.List<io.sentry.internal.modules.IModulesLoader>, param1: io.sentry.ILogger);
					public constructor(param0: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export class IModulesLoader extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export class ManifestModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(param0: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
				export namespace ManifestModulesLoader {
					export class Module extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.internal.modules.ManifestModulesLoader.Module>;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export abstract class ModulesLoader extends java.lang.Object implements io.sentry.internal.modules.IModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ModulesLoader>;
					public static EXTERNAL_MODULES_FILENAME: string;
					public logger: io.sentry.ILogger;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(param0: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
					public parseStream(param0: java.io.InputStream): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export class NoOpModulesLoader extends java.lang.Object implements io.sentry.internal.modules.IModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.NoOpModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public static getInstance(): io.sentry.internal.modules.NoOpModulesLoader;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace modules {
				export class ResourcesModulesLoader extends io.sentry.internal.modules.ModulesLoader {
					public static class: java.lang.Class<io.sentry.internal.modules.ResourcesModulesLoader>;
					public getOrLoadModules(): java.util.Map<string,string>;
					public constructor(param0: io.sentry.ILogger);
					public loadModules(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace internal {
			export namespace viewhierarchy {
				export class ViewHierarchyExporter extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace any {
			export class SentryContext extends java.lang.Object {
				public fold(param0: any, param1: any): any;
				public get(param0: any): any;
				public minusKey(param0: any): any;
				public constructor(param0: io.sentry.IHub);
				public updateThreadContext(param0: any): io.sentry.IHub;
				public plus(param0: any): any;
				public mergeForChild(param0: any): any;
				public restoreThreadContext(param0: any, param1: io.sentry.IHub): void;
				public constructor();
			}
			export namespace SentryContext {
				export class Key extends java.lang.Object {
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace profilemeasurements {
			export class ProfileMeasurement extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement>;
				public static ID_FROZEN_FRAME_RENDERS: string;
				public static ID_SLOW_FRAME_RENDERS: string;
				public static ID_SCREEN_FRAME_RATES: string;
				public static ID_CPU_USAGE: string;
				public static ID_MEMORY_FOOTPRINT: string;
				public static ID_MEMORY_NATIVE_FOOTPRINT: string;
				public static ID_UNKNOWN: string;
				public static UNIT_HZ: string;
				public static UNIT_NANOSECONDS: string;
				public static UNIT_BYTES: string;
				public static UNIT_PERCENT: string;
				public static UNIT_UNKNOWN: string;
				public getUnit(): string;
				public constructor(param0: string, param1: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>);
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public setUnit(param0: string): void;
				public equals(param0: any): boolean;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor();
				public getValues(): java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>;
				public setValues(param0: java.util.Collection<io.sentry.profilemeasurements.ProfileMeasurementValue>): void;
			}
			export namespace ProfileMeasurement {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurement> {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurement;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurement.JsonKeys>;
					public static UNIT: string;
					public static VALUES: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace profilemeasurements {
			export class ProfileMeasurementValue extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public constructor(param0: java.lang.Long, param1: java.lang.Number);
				public getRelativeStartNs(): string;
				public equals(param0: any): boolean;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getValue(): number;
				public constructor();
			}
			export namespace ProfileMeasurementValue {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.profilemeasurements.ProfileMeasurementValue> {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.profilemeasurements.ProfileMeasurementValue;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.profilemeasurements.ProfileMeasurementValue.JsonKeys>;
					public static VALUE: string;
					public static START_NS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class App extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.App>;
				public static TYPE: string;
				public setAppIdentifier(param0: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getAppBuild(): string;
				public getDeviceAppHash(): string;
				public constructor();
				public getBuildType(): string;
				public getAppName(): string;
				public getPermissions(): java.util.Map<string,string>;
				public hashCode(): number;
				public setBuildType(param0: string): void;
				public equals(param0: any): boolean;
				public setAppStartTime(param0: java.util.Date): void;
				public getAppIdentifier(): string;
				public setAppVersion(param0: string): void;
				public setAppBuild(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public setAppName(param0: string): void;
				public getAppStartTime(): java.util.Date;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setInForeground(param0: java.lang.Boolean): void;
				public getInForeground(): java.lang.Boolean;
				public getViewNames(): java.util.List<string>;
				public getAppVersion(): string;
				public setViewNames(param0: java.util.List<string>): void;
				public setDeviceAppHash(param0: string): void;
				public setPermissions(param0: java.util.Map<string,string>): void;
			}
			export namespace App {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.App> {
					public static class: java.lang.Class<io.sentry.protocol.App.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.App;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.App.JsonKeys>;
					public static APP_IDENTIFIER: string;
					public static APP_START_TIME: string;
					public static DEVICE_APP_HASH: string;
					public static BUILD_TYPE: string;
					public static APP_NAME: string;
					public static APP_VERSION: string;
					public static APP_BUILD: string;
					public static APP_PERMISSIONS: string;
					public static IN_FOREGROUND: string;
					public static VIEW_NAMES: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Browser extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Browser>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public constructor();
			}
			export namespace Browser {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Browser> {
					public static class: java.lang.Class<io.sentry.protocol.Browser.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Browser;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Browser.JsonKeys>;
					public static NAME: string;
					public static VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements io.sentry.JsonSerializable  {
				public static class: java.lang.Class<io.sentry.protocol.Contexts>;
				public constructor(param0: number, param1: number);
				public putAll(param0: java.util.Map<any,any>): void;
				public getOperatingSystem(): io.sentry.protocol.OperatingSystem;
				public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
				public constructor(param0: io.sentry.protocol.Contexts);
				public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
				public setApp(param0: io.sentry.protocol.App): void;
				public replaceAll(param0: any /* any<any,any,any>*/): void;
				public constructor();
				public setDevice(param0: io.sentry.protocol.Device): void;
				public remove(param0: any, param1: any): boolean;
				public getRuntime(): io.sentry.protocol.SentryRuntime;
				public getGpu(): io.sentry.protocol.Gpu;
				public putIfAbsent(param0: any, param1: any): any;
				public static copyOf(param0: java.util.Map<any,any>): java.util.Map<any,any>;
				public forEach(param0: number, param1: any /* any<any,any>*/): void;
				public setGpu(param0: io.sentry.protocol.Gpu): void;
				public remove(param0: any): any;
				public hashCode(): number;
				public compute(param0: any, param1: any /* any<any,any,any>*/): any;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
				public replace(param0: any, param1: any): any;
				public setResponse(param0: io.sentry.protocol.Response): void;
				public getDevice(): io.sentry.protocol.Device;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public getResponse(): io.sentry.protocol.Response;
				public keySet(): java.util.Set<any>;
				public size(): number;
				public put(param0: any, param1: any): any;
				public setRuntime(param0: io.sentry.protocol.SentryRuntime): void;
				public forEach(param0: any /* any<any,any>*/): void;
				public constructor(param0: number, param1: number, param2: number);
				public get(param0: any): any;
				public constructor(param0: java.util.Map<any,any>);
				public getOrDefault(param0: any, param1: any): any;
				public containsKey(param0: any): boolean;
				public getTrace(): io.sentry.SpanContext;
				public withResponse(param0: io.sentry.util.HintUtils.SentryConsumer<io.sentry.protocol.Response>): void;
				public getApp(): io.sentry.protocol.App;
				public static ofEntries(param0: androidNative.Array<java.util.Map.Entry<any,any>>): java.util.Map<any,any>;
				public setBrowser(param0: io.sentry.protocol.Browser): void;
				public clear(): void;
				public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
				public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
				public setOperatingSystem(param0: io.sentry.protocol.OperatingSystem): void;
				public replace(param0: any, param1: any, param2: any): boolean;
				public values(): java.util.Collection<any>;
				public static entry(param0: any, param1: any): java.util.Map.Entry<any,any>;
				public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setTrace(param0: io.sentry.SpanContext): void;
				public constructor(param0: number);
				public getBrowser(): io.sentry.protocol.Browser;
			}
			export namespace Contexts {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Contexts> {
					public static class: java.lang.Class<io.sentry.protocol.Contexts.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Contexts;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class DebugImage extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.DebugImage>;
				public static PROGUARD: string;
				public static JVM: string;
				public getUuid(): string;
				public setUuid(param0: string): void;
				public getType(): string;
				public setImageSize(param0: number): void;
				public setArch(param0: string): void;
				public getCodeId(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getDebugFile(): string;
				public setCodeFile(param0: string): void;
				public getDebugId(): string;
				public getImageSize(): java.lang.Long;
				public setType(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getArch(): string;
				public constructor();
				public setImageAddr(param0: string): void;
				public setImageSize(param0: java.lang.Long): void;
				public setDebugFile(param0: string): void;
				public setDebugId(param0: string): void;
				public getImageAddr(): string;
				public setCodeId(param0: string): void;
				public getCodeFile(): string;
			}
			export namespace DebugImage {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugImage> {
					public static class: java.lang.Class<io.sentry.protocol.DebugImage.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.DebugImage;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.DebugImage.JsonKeys>;
					public static UUID: string;
					public static TYPE: string;
					public static DEBUG_ID: string;
					public static DEBUG_FILE: string;
					public static CODE_ID: string;
					public static CODE_FILE: string;
					public static IMAGE_ADDR: string;
					public static IMAGE_SIZE: string;
					public static ARCH: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class DebugMeta extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.DebugMeta>;
				public getImages(): java.util.List<io.sentry.protocol.DebugImage>;
				public setImages(param0: java.util.List<io.sentry.protocol.DebugImage>): void;
				public getSdkInfo(): io.sentry.protocol.SdkInfo;
				public setSdkInfo(param0: io.sentry.protocol.SdkInfo): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor();
			}
			export namespace DebugMeta {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.DebugMeta> {
					public static class: java.lang.Class<io.sentry.protocol.DebugMeta.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.DebugMeta;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.DebugMeta.JsonKeys>;
					public static SDK_INFO: string;
					public static IMAGES: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Device extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Device>;
				public static TYPE: string;
				public setMemorySize(param0: java.lang.Long): void;
				public setCpuDescription(param0: string): void;
				public setFreeStorage(param0: java.lang.Long): void;
				public setScreenDpi(param0: java.lang.Integer): void;
				public getId(): string;
				public getFreeMemory(): java.lang.Long;
				public setCharging(param0: java.lang.Boolean): void;
				public setExternalStorageSize(param0: java.lang.Long): void;
				public setArchs(param0: androidNative.Array<string>): void;
				public getExternalStorageSize(): java.lang.Long;
				public getBrand(): string;
				public constructor();
				public setBatteryTemperature(param0: java.lang.Float): void;
				public isOnline(): java.lang.Boolean;
				public setBrand(param0: string): void;
				public hashCode(): number;
				public getScreenWidthPixels(): java.lang.Integer;
				public equals(param0: any): boolean;
				public getStorageSize(): java.lang.Long;
				public getTimezone(): java.util.TimeZone;
				public setScreenDensity(param0: java.lang.Float): void;
				public setName(param0: string): void;
				public getCpuDescription(): string;
				public setManufacturer(param0: string): void;
				public getMemorySize(): java.lang.Long;
				public setFamily(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setBatteryLevel(param0: java.lang.Float): void;
				public getArchs(): androidNative.Array<string>;
				public getLocale(): string;
				public getBootTime(): java.util.Date;
				public setLocale(param0: string): void;
				public setOnline(param0: java.lang.Boolean): void;
				public setStorageSize(param0: java.lang.Long): void;
				public isLowMemory(): java.lang.Boolean;
				public getLanguage(): string;
				public setProcessorCount(param0: java.lang.Integer): void;
				public getScreenDpi(): java.lang.Integer;
				public setModelId(param0: string): void;
				public setConnectionType(param0: string): void;
				public setFreeMemory(param0: java.lang.Long): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getModelId(): string;
				public setLowMemory(param0: java.lang.Boolean): void;
				public getScreenDensity(): java.lang.Float;
				public setModel(param0: string): void;
				public setTimezone(param0: java.util.TimeZone): void;
				public getFamily(): string;
				public setScreenHeightPixels(param0: java.lang.Integer): void;
				public setUsableMemory(param0: java.lang.Long): void;
				public isCharging(): java.lang.Boolean;
				public getProcessorCount(): java.lang.Integer;
				public getProcessorFrequency(): java.lang.Double;
				public setExternalFreeStorage(param0: java.lang.Long): void;
				public setId(param0: string): void;
				public getExternalFreeStorage(): java.lang.Long;
				public getFreeStorage(): java.lang.Long;
				public getScreenHeightPixels(): java.lang.Integer;
				public getOrientation(): io.sentry.protocol.Device.DeviceOrientation;
				public getBatteryLevel(): java.lang.Float;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getModel(): string;
				public getBatteryTemperature(): java.lang.Float;
				public setBootTime(param0: java.util.Date): void;
				public getConnectionType(): string;
				public setScreenWidthPixels(param0: java.lang.Integer): void;
				public setOrientation(param0: io.sentry.protocol.Device.DeviceOrientation): void;
				public getManufacturer(): string;
				public setSimulator(param0: java.lang.Boolean): void;
				public setLanguage(param0: string): void;
				public isSimulator(): java.lang.Boolean;
				public getUsableMemory(): java.lang.Long;
				public setProcessorFrequency(param0: java.lang.Double): void;
			}
			export namespace Device {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device> {
					public static class: java.lang.Class<io.sentry.protocol.Device.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Device;
				}
				export class DeviceOrientation extends io.sentry.JsonSerializable {
					public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation>;
					public static PORTRAIT: io.sentry.protocol.Device.DeviceOrientation;
					public static LANDSCAPE: io.sentry.protocol.Device.DeviceOrientation;
					public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
					public static valueOf(param0: string): io.sentry.protocol.Device.DeviceOrientation;
					public static values(): androidNative.Array<io.sentry.protocol.Device.DeviceOrientation>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
				export namespace DeviceOrientation {
					export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Device.DeviceOrientation> {
						public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation.Deserializer>;
						public constructor();
						public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
						public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Device.DeviceOrientation;
					}
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Device.JsonKeys>;
					public static NAME: string;
					public static MANUFACTURER: string;
					public static BRAND: string;
					public static FAMILY: string;
					public static MODEL: string;
					public static MODEL_ID: string;
					public static ARCHS: string;
					public static BATTERY_LEVEL: string;
					public static CHARGING: string;
					public static ONLINE: string;
					public static ORIENTATION: string;
					public static SIMULATOR: string;
					public static MEMORY_SIZE: string;
					public static FREE_MEMORY: string;
					public static USABLE_MEMORY: string;
					public static LOW_MEMORY: string;
					public static STORAGE_SIZE: string;
					public static FREE_STORAGE: string;
					public static EXTERNAL_STORAGE_SIZE: string;
					public static EXTERNAL_FREE_STORAGE: string;
					public static SCREEN_WIDTH_PIXELS: string;
					public static SCREEN_HEIGHT_PIXELS: string;
					public static SCREEN_DENSITY: string;
					public static SCREEN_DPI: string;
					public static BOOT_TIME: string;
					public static TIMEZONE: string;
					public static LANGUAGE: string;
					public static CONNECTION_TYPE: string;
					public static BATTERY_TEMPERATURE: string;
					public static LOCALE: string;
					public static PROCESSOR_COUNT: string;
					public static CPU_DESCRIPTION: string;
					public static PROCESSOR_FREQUENCY: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Geo extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Geo>;
				public static fromMap(param0: java.util.Map<string,any>): io.sentry.protocol.Geo;
				public setCity(param0: string): void;
				public getCity(): string;
				public setRegion(param0: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getCountryCode(): string;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor(param0: io.sentry.protocol.Geo);
				public getRegion(): string;
				public constructor();
				public setCountryCode(param0: string): void;
			}
			export namespace Geo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Geo> {
					public static class: java.lang.Class<io.sentry.protocol.Geo.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Geo;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Geo.JsonKeys>;
					public static CITY: string;
					public static COUNTRY_CODE: string;
					public static REGION: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Gpu extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Gpu>;
				public static TYPE: string;
				public setName(param0: string): void;
				public setApiType(param0: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getVendorName(): string;
				public setMemorySize(param0: java.lang.Integer): void;
				public setNpotSupport(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public isMultiThreadedRendering(): java.lang.Boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public getId(): java.lang.Integer;
				public constructor();
				public getApiType(): string;
				public getVersion(): string;
				public setId(param0: java.lang.Integer): void;
				public setMultiThreadedRendering(param0: java.lang.Boolean): void;
				public setVendorId(param0: string): void;
				public setVendorName(param0: string): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMemorySize(): java.lang.Integer;
				public getVendorId(): string;
				public getNpotSupport(): string;
			}
			export namespace Gpu {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Gpu> {
					public static class: java.lang.Class<io.sentry.protocol.Gpu.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Gpu;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Gpu.JsonKeys>;
					public static NAME: string;
					public static VENDOR_ID: string;
					public static VENDOR_NAME: string;
					public static MEMORY_SIZE: string;
					public static API_TYPE: string;
					public static MULTI_THREADED_RENDERING: string;
					public static VERSION: string;
					public static NPOT_SUPPORT: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class MeasurementValue extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.MeasurementValue>;
				public static KEY_APP_START_COLD: string;
				public static KEY_APP_START_WARM: string;
				public static KEY_FRAMES_TOTAL: string;
				public static KEY_FRAMES_SLOW: string;
				public static KEY_FRAMES_FROZEN: string;
				public static KEY_TIME_TO_INITIAL_DISPLAY: string;
				public static KEY_TIME_TO_FULL_DISPLAY: string;
				public getValue(): java.lang.Number;
				public constructor(param0: java.lang.Number, param1: string);
				public getUnit(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public constructor(param0: java.lang.Number, param1: string, param2: java.util.Map<string,any>);
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
			}
			export namespace MeasurementValue {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.MeasurementValue> {
					public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.MeasurementValue;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.MeasurementValue.JsonKeys>;
					public static VALUE: string;
					public static UNIT: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Mechanism extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Mechanism>;
				public setData(param0: java.util.Map<string,any>): void;
				public setSynthetic(param0: java.lang.Boolean): void;
				public getType(): string;
				public isHandled(): java.lang.Boolean;
				public constructor(param0: java.lang.Thread);
				public setMeta(param0: java.util.Map<string,any>): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getHelpLink(): string;
				public setType(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getDescription(): string;
				public getMeta(): java.util.Map<string,any>;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setHelpLink(param0: string): void;
				public constructor();
				public setDescription(param0: string): void;
				public setHandled(param0: java.lang.Boolean): void;
				public getSynthetic(): java.lang.Boolean;
			}
			export namespace Mechanism {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Mechanism> {
					public static class: java.lang.Class<io.sentry.protocol.Mechanism.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Mechanism;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Mechanism.JsonKeys>;
					public static TYPE: string;
					public static DESCRIPTION: string;
					public static HELP_LINK: string;
					public static HANDLED: string;
					public static META: string;
					public static DATA: string;
					public static SYNTHETIC: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Message extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Message>;
				public getFormatted(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setParams(param0: java.util.List<string>): void;
				public getUnknown(): java.util.Map<string,any>;
				public setMessage(param0: string): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getMessage(): string;
				public getParams(): java.util.List<string>;
				public setFormatted(param0: string): void;
				public constructor();
			}
			export namespace Message {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Message> {
					public static class: java.lang.Class<io.sentry.protocol.Message.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Message;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Message.JsonKeys>;
					public static FORMATTED: string;
					public static MESSAGE: string;
					public static PARAMS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class OperatingSystem extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.OperatingSystem>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getRawDescription(): string;
				public isRooted(): java.lang.Boolean;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getBuild(): string;
				public setRooted(param0: java.lang.Boolean): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public constructor();
				public getVersion(): string;
				public setBuild(param0: string): void;
				public getKernelVersion(): string;
				public setRawDescription(param0: string): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setKernelVersion(param0: string): void;
			}
			export namespace OperatingSystem {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.OperatingSystem> {
					public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.OperatingSystem;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.OperatingSystem.JsonKeys>;
					public static NAME: string;
					public static VERSION: string;
					public static RAW_DESCRIPTION: string;
					public static BUILD: string;
					public static KERNEL_VERSION: string;
					public static ROOTED: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Request extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Request>;
				public setFragment(param0: string): void;
				public setMethod(param0: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setBodySize(param0: java.lang.Long): void;
				public setHeaders(param0: java.util.Map<string,string>): void;
				public getData(): any;
				public setCookies(param0: string): void;
				public constructor();
				public setData(param0: any): void;
				public getEnvs(): java.util.Map<string,string>;
				public setEnvs(param0: java.util.Map<string,string>): void;
				public hashCode(): number;
				public constructor(param0: io.sentry.protocol.Request);
				public equals(param0: any): boolean;
				public setOthers(param0: java.util.Map<string,string>): void;
				public getCookies(): string;
				public setApiTarget(param0: string): void;
				public getBodySize(): java.lang.Long;
				public getOthers(): java.util.Map<string,string>;
				public getUnknown(): java.util.Map<string,any>;
				public getUrl(): string;
				public getApiTarget(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getMethod(): string;
				public getFragment(): string;
				public getHeaders(): java.util.Map<string,string>;
				public getQueryString(): string;
				public setQueryString(param0: string): void;
				public setUrl(param0: string): void;
			}
			export namespace Request {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Request> {
					public static class: java.lang.Class<io.sentry.protocol.Request.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Request;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Request.JsonKeys>;
					public static URL: string;
					public static METHOD: string;
					public static QUERY_STRING: string;
					public static DATA: string;
					public static COOKIES: string;
					public static HEADERS: string;
					public static ENV: string;
					public static OTHER: string;
					public static FRAGMENT: string;
					public static BODY_SIZE: string;
					public static API_TARGET: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class Response extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.Response>;
				public static TYPE: string;
				public getCookies(): string;
				public getStatusCode(): java.lang.Integer;
				public getBodySize(): java.lang.Long;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setBodySize(param0: java.lang.Long): void;
				public setHeaders(param0: java.util.Map<string,string>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setCookies(param0: string): void;
				public getData(): any;
				public constructor();
				public setData(param0: any): void;
				public getHeaders(): java.util.Map<string,string>;
				public constructor(param0: io.sentry.protocol.Response);
				public setStatusCode(param0: java.lang.Integer): void;
			}
			export namespace Response {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.Response> {
					public static class: java.lang.Class<io.sentry.protocol.Response.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.Response;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.Response.JsonKeys>;
					public static COOKIES: string;
					public static HEADERS: string;
					public static STATUS_CODE: string;
					public static BODY_SIZE: string;
					public static DATA: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SdkInfo extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SdkInfo>;
				public setSdkName(param0: string): void;
				public getVersionMinor(): java.lang.Integer;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setVersionPatchlevel(param0: java.lang.Integer): void;
				public setVersionMajor(param0: java.lang.Integer): void;
				public setVersionMinor(param0: java.lang.Integer): void;
				public getSdkName(): string;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getVersionMajor(): java.lang.Integer;
				public constructor();
				public getVersionPatchlevel(): java.lang.Integer;
			}
			export namespace SdkInfo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkInfo> {
					public static class: java.lang.Class<io.sentry.protocol.SdkInfo.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SdkInfo;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SdkInfo.JsonKeys>;
					public static SDK_NAME: string;
					public static VERSION_MAJOR: string;
					public static VERSION_MINOR: string;
					public static VERSION_PATCHLEVEL: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SdkVersion extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SdkVersion>;
				public setName(param0: string): void;
				public getIntegrationSet(): java.util.Set<string>;
				public static updateSdkVersion(param0: io.sentry.protocol.SdkVersion, param1: string, param2: string): io.sentry.protocol.SdkVersion;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public addIntegration(param0: string): void;
				public getVersion(): string;
				/** @deprecated */
				public getIntegrations(): java.util.List<string>;
				public getPackageSet(): java.util.Set<io.sentry.protocol.SentryPackage>;
				public hashCode(): number;
				/** @deprecated */
				public getPackages(): java.util.List<io.sentry.protocol.SentryPackage>;
				public equals(param0: any): boolean;
				public addPackage(param0: string, param1: string): void;
				public constructor(param0: string, param1: string);
			}
			export namespace SdkVersion {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SdkVersion> {
					public static class: java.lang.Class<io.sentry.protocol.SdkVersion.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SdkVersion;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SdkVersion.JsonKeys>;
					public static NAME: string;
					public static VERSION: string;
					public static PACKAGES: string;
					public static INTEGRATIONS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryException extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryException>;
				public getType(): string;
				public getModule(): string;
				public getMechanism(): io.sentry.protocol.Mechanism;
				public setModule(param0: string): void;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getValue(): string;
				public setType(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor();
				public setValue(param0: string): void;
				public setThreadId(param0: java.lang.Long): void;
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public setMechanism(param0: io.sentry.protocol.Mechanism): void;
				public getThreadId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
			}
			export namespace SentryException {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryException> {
					public static class: java.lang.Class<io.sentry.protocol.SentryException.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryException;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryException.JsonKeys>;
					public static TYPE: string;
					public static VALUE: string;
					public static MODULE: string;
					public static THREAD_ID: string;
					public static STACKTRACE: string;
					public static MECHANISM: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryId extends java.lang.Object implements io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryId>;
				public static EMPTY_ID: io.sentry.protocol.SentryId;
				public hashCode(): number;
				public constructor(param0: java.util.UUID);
				public equals(param0: any): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
			}
			export namespace SentryId {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryId> {
					public static class: java.lang.Class<io.sentry.protocol.SentryId.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryId;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryPackage extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryPackage>;
				public setName(param0: string): void;
				public getVersion(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public constructor(param0: string, param1: string);
			}
			export namespace SentryPackage {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryPackage> {
					public static class: java.lang.Class<io.sentry.protocol.SentryPackage.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryPackage;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryPackage.JsonKeys>;
					public static NAME: string;
					public static VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryRuntime extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryRuntime>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public getRawDescription(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setRawDescription(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVersion(param0: string): void;
				public constructor();
			}
			export namespace SentryRuntime {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryRuntime> {
					public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryRuntime;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryRuntime.JsonKeys>;
					public static NAME: string;
					public static VERSION: string;
					public static RAW_DESCRIPTION: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentrySpan extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentrySpan>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: io.sentry.protocol.SentryId, param3: io.sentry.SpanId, param4: io.sentry.SpanId, param5: string, param6: string, param7: io.sentry.SpanStatus, param8: string, param9: java.util.Map<string,string>, param10: java.util.Map<string,any>);
				public getUnknown(): java.util.Map<string,any>;
				public getDescription(): string;
				public isFinished(): boolean;
				public getData(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getSpanId(): io.sentry.SpanId;
				public getTags(): java.util.Map<string,string>;
				public getOp(): string;
				public getStartTimestamp(): java.lang.Double;
				public getTraceId(): io.sentry.protocol.SentryId;
				public getStatus(): io.sentry.SpanStatus;
				public getParentSpanId(): io.sentry.SpanId;
				public getTimestamp(): java.lang.Double;
				public constructor(param0: io.sentry.Span, param1: java.util.Map<string,any>);
				public constructor(param0: io.sentry.Span);
				public getOrigin(): string;
			}
			export namespace SentrySpan {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentrySpan> {
					public static class: java.lang.Class<io.sentry.protocol.SentrySpan.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentrySpan;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentrySpan.JsonKeys>;
					public static START_TIMESTAMP: string;
					public static TIMESTAMP: string;
					public static TRACE_ID: string;
					public static SPAN_ID: string;
					public static PARENT_SPAN_ID: string;
					public static DESCRIPTION: string;
					public static STATUS: string;
					public static ORIGIN: string;
					public static TAGS: string;
					public static DATA: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryStackFrame extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame>;
				public getSymbol(): string;
				public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
				public getModule(): string;
				public setModule(param0: string): void;
				public setPostContext(param0: java.util.List<string>): void;
				public getAbsPath(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getFunction(): string;
				public setVars(param0: java.util.Map<string,string>): void;
				public setSymbol(param0: string): void;
				public getVars(): java.util.Map<string,string>;
				public setPackage(param0: string): void;
				public getPreContext(): java.util.List<string>;
				public setAbsPath(param0: string): void;
				public constructor();
				public setColno(param0: java.lang.Integer): void;
				public setImageAddr(param0: string): void;
				public setNative(param0: java.lang.Boolean): void;
				public setRawFunction(param0: string): void;
				public getFilename(): string;
				public setPlatform(param0: string): void;
				public getPackage(): string;
				public setFunction(param0: string): void;
				public getLineno(): java.lang.Integer;
				public setInApp(param0: java.lang.Boolean): void;
				public getFramesOmitted(): java.util.List<java.lang.Integer>;
				public setSymbolAddr(param0: string): void;
				public getLock(): io.sentry.SentryLockReason;
				public getUnknown(): java.util.Map<string,any>;
				public getPostContext(): java.util.List<string>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getContextLine(): string;
				public getSymbolAddr(): string;
				public setInstructionAddr(param0: string): void;
				public getRawFunction(): string;
				public setLineno(param0: java.lang.Integer): void;
				public setContextLine(param0: string): void;
				public setLock(param0: io.sentry.SentryLockReason): void;
				public setFilename(param0: string): void;
				public getPlatform(): string;
				public getInstructionAddr(): string;
				public getImageAddr(): string;
				public setPreContext(param0: java.util.List<string>): void;
				public getColno(): java.lang.Integer;
				public isInApp(): java.lang.Boolean;
				public isNative(): java.lang.Boolean;
			}
			export namespace SentryStackFrame {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackFrame> {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryStackFrame;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame.JsonKeys>;
					public static FILENAME: string;
					public static FUNCTION: string;
					public static MODULE: string;
					public static LINENO: string;
					public static COLNO: string;
					public static ABS_PATH: string;
					public static CONTEXT_LINE: string;
					public static IN_APP: string;
					public static PACKAGE: string;
					public static NATIVE: string;
					public static PLATFORM: string;
					public static IMAGE_ADDR: string;
					public static SYMBOL_ADDR: string;
					public static INSTRUCTION_ADDR: string;
					public static RAW_FUNCTION: string;
					public static SYMBOL: string;
					public static LOCK: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryStackTrace extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setRegisters(param0: java.util.Map<string,string>): void;
				public constructor(param0: java.util.List<io.sentry.protocol.SentryStackFrame>);
				public getRegisters(): java.util.Map<string,string>;
				public setSnapshot(param0: java.lang.Boolean): void;
				public setFrames(param0: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
				public getSnapshot(): java.lang.Boolean;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor();
				public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
			}
			export namespace SentryStackTrace {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryStackTrace> {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryStackTrace;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace.JsonKeys>;
					public static FRAMES: string;
					public static REGISTERS: string;
					public static SNAPSHOT: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryThread extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryThread>;
				public setName(param0: string): void;
				public setMain(param0: java.lang.Boolean): void;
				public getPriority(): java.lang.Integer;
				public isCrashed(): java.lang.Boolean;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public setDaemon(param0: java.lang.Boolean): void;
				public setCurrent(param0: java.lang.Boolean): void;
				public getHeldLocks(): java.util.Map<string,io.sentry.SentryLockReason>;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setCrashed(param0: java.lang.Boolean): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setId(param0: java.lang.Long): void;
				public isCurrent(): java.lang.Boolean;
				public constructor();
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public getState(): string;
				public setHeldLocks(param0: java.util.Map<string,io.sentry.SentryLockReason>): void;
				public isDaemon(): java.lang.Boolean;
				public getId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
				public setState(param0: string): void;
				public isMain(): java.lang.Boolean;
				public setPriority(param0: java.lang.Integer): void;
			}
			export namespace SentryThread {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryThread> {
					public static class: java.lang.Class<io.sentry.protocol.SentryThread.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryThread;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryThread.JsonKeys>;
					public static PRIORITY: string;
					public static NAME: string;
					public static STATE: string;
					public static CRASHED: string;
					public static CURRENT: string;
					public static DAEMON: string;
					public static MAIN: string;
					public static STACKTRACE: string;
					public static HELD_LOCKS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class SentryTransaction extends io.sentry.SentryBaseEvent implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.SentryTransaction>;
				public getType(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public constructor(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.util.List<io.sentry.protocol.SentrySpan>, param4: java.util.Map<string,io.sentry.protocol.MeasurementValue>, param5: io.sentry.protocol.TransactionInfo);
				public getUnknown(): java.util.Map<string,any>;
				public isFinished(): boolean;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getSpans(): java.util.List<io.sentry.protocol.SentrySpan>;
				public getSamplingDecision(): io.sentry.TracesSamplingDecision;
				public getMeasurements(): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
				public constructor();
				public isSampled(): boolean;
				public getStartTimestamp(): java.lang.Double;
				public getStatus(): io.sentry.SpanStatus;
				public constructor(param0: io.sentry.SentryTracer);
				public getTimestamp(): java.lang.Double;
				public getTransaction(): string;
				public constructor(param0: io.sentry.protocol.SentryId);
			}
			export namespace SentryTransaction {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.SentryTransaction> {
					public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.SentryTransaction;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.SentryTransaction.JsonKeys>;
					public static TRANSACTION: string;
					public static START_TIMESTAMP: string;
					public static TIMESTAMP: string;
					public static SPANS: string;
					public static TYPE: string;
					public static MEASUREMENTS: string;
					public static TRANSACTION_INFO: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class TransactionInfo extends java.lang.Object implements io.sentry.JsonSerializable, io.sentry.JsonUnknown {
				public static class: java.lang.Class<io.sentry.protocol.TransactionInfo>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor(param0: string);
			}
			export namespace TransactionInfo {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.TransactionInfo> {
					public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.TransactionInfo;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.TransactionInfo.JsonKeys>;
					public static SOURCE: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
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
				public static valueOf(param0: string): io.sentry.protocol.TransactionNameSource;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class User extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.User>;
				public static fromMap(param0: java.util.Map<string,any>, param1: io.sentry.SentryOptions): io.sentry.protocol.User;
				public getId(): string;
				public getSegment(): string;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getIpAddress(): string;
				public getGeo(): io.sentry.protocol.Geo;
				public constructor();
				/** @deprecated */
				public getOthers(): java.util.Map<string,string>;
				public hashCode(): number;
				public setId(param0: string): void;
				public setUsername(param0: string): void;
				public equals(param0: any): boolean;
				public getUsername(): string;
				public setGeo(param0: io.sentry.protocol.Geo): void;
				public getData(): java.util.Map<string,string>;
				public setSegment(param0: string): void;
				public setName(param0: string): void;
				public getEmail(): string;
				/** @deprecated */
				public setOthers(param0: java.util.Map<string,string>): void;
				public setEmail(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public getName(): string;
				public setData(param0: java.util.Map<string,string>): void;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public constructor(param0: io.sentry.protocol.User);
				public setIpAddress(param0: string): void;
			}
			export namespace User {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.User> {
					public static class: java.lang.Class<io.sentry.protocol.User.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.User;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.User.JsonKeys>;
					public static EMAIL: string;
					public static USERNAME: string;
					public static SEGMENT: string;
					public static IP_ADDRESS: string;
					public static NAME: string;
					public static GEO: string;
					public static OTHER: string;
					public static DATA: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class ViewHierarchy extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy>;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public getRenderingSystem(): string;
				public getWindows(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
				public constructor(param0: string, param1: java.util.List<io.sentry.protocol.ViewHierarchyNode>);
			}
			export namespace ViewHierarchy {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchy> {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchy;
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchy.JsonKeys>;
					public static RENDERING_SYSTEM: string;
					public static WINDOWS: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace protocol {
			export class ViewHierarchyNode extends java.lang.Object implements io.sentry.JsonUnknown, io.sentry.JsonSerializable {
				public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode>;
				public getWidth(): java.lang.Double;
				public setUnknown(param0: java.util.Map<string,any>): void;
				public getHeight(): java.lang.Double;
				public setType(param0: string): void;
				public setWidth(param0: java.lang.Double): void;
				public getRenderingSystem(): string;
				public constructor();
				public getVisibility(): string;
				public getChildren(): java.util.List<io.sentry.protocol.ViewHierarchyNode>;
				public setAlpha(param0: java.lang.Double): void;
				public setTag(param0: string): void;
				public setHeight(param0: java.lang.Double): void;
				public getX(): java.lang.Double;
				public setChildren(param0: java.util.List<io.sentry.protocol.ViewHierarchyNode>): void;
				public setX(param0: java.lang.Double): void;
				public setY(param0: java.lang.Double): void;
				public getType(): string;
				public setIdentifier(param0: string): void;
				public getTag(): string;
				public setRenderingSystem(param0: string): void;
				public getUnknown(): java.util.Map<string,any>;
				public serialize(param0: io.sentry.ObjectWriter, param1: io.sentry.ILogger): void;
				public setVisibility(param0: string): void;
				public getAlpha(): java.lang.Double;
				public getIdentifier(): string;
				public getY(): java.lang.Double;
			}
			export namespace ViewHierarchyNode {
				export class Deserializer extends io.sentry.JsonDeserializer<io.sentry.protocol.ViewHierarchyNode> {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.Deserializer>;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): io.sentry.protocol.ViewHierarchyNode;
					public deserialize(param0: io.sentry.JsonObjectReader, param1: io.sentry.ILogger): any;
					public constructor();
				}
				export class JsonKeys extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.protocol.ViewHierarchyNode.JsonKeys>;
					public static RENDERING_SYSTEM: string;
					public static TYPE: string;
					public static IDENTIFIER: string;
					public static TAG: string;
					public static WIDTH: string;
					public static HEIGHT: string;
					public static VISIBILITY: string;
					public static ALPHA: string;
					public static CHILDREN: string;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class AsyncHttpTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport>;
				public constructor(param0: io.sentry.transport.QueuedThreadPoolExecutor, param1: io.sentry.SentryOptions, param2: io.sentry.transport.RateLimiter, param3: io.sentry.transport.ITransportGate, param4: io.sentry.transport.HttpConnection);
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.transport.RateLimiter, param2: io.sentry.transport.ITransportGate, param3: io.sentry.RequestDetails);
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public flush(param0: number): void;
			}
			export namespace AsyncHttpTransport {
				export class AsyncConnectionThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.AsyncConnectionThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
				export class EnvelopeSender extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport.EnvelopeSender>;
					public run(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class AuthenticatorWrapper extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.AuthenticatorWrapper>;
				public setDefault(param0: java.net.Authenticator): void;
				public static getInstance(): io.sentry.transport.AuthenticatorWrapper;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class CurrentDateProvider extends java.lang.Object implements io.sentry.transport.ICurrentDateProvider {
				public static class: java.lang.Class<io.sentry.transport.CurrentDateProvider>;
				public getCurrentTimeMillis(): number;
				public static getInstance(): io.sentry.transport.ICurrentDateProvider;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class HttpConnection extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.HttpConnection>;
				public send(param0: io.sentry.SentryEnvelope): io.sentry.transport.TransportResult;
				public updateRetryAfterLimits(param0: java.net.HttpURLConnection, param1: number): void;
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails, param2: io.sentry.transport.RateLimiter);
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class ICurrentDateProvider extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class ITransport extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<io.sentry.transport.ITransport>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
					send(param0: io.sentry.SentryEnvelope): void;
					flush(param0: number): void;
					getRateLimiter(): io.sentry.transport.RateLimiter;
					close(): void;
					close(): void;
				});
				public constructor();
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class ITransportGate extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class NoOpEnvelopeCache extends java.lang.Object implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.transport.NoOpEnvelopeCache>;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public spliterator(): java.util.Spliterator<any>;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public iterator(): java.util.Iterator<any>;
				public static getInstance(): io.sentry.transport.NoOpEnvelopeCache;
				public store(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class NoOpTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransport>;
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public static getInstance(): io.sentry.transport.NoOpTransport;
				public send(param0: io.sentry.SentryEnvelope): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class NoOpTransportGate extends java.lang.Object implements io.sentry.transport.ITransportGate {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransportGate>;
				public isConnected(): boolean;
				public static getInstance(): io.sentry.transport.NoOpTransportGate;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class ProxyAuthenticator extends java.net.Authenticator {
				public static class: java.lang.Class<io.sentry.transport.ProxyAuthenticator>;
				public getPasswordAuthentication(): java.net.PasswordAuthentication;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class QueuedThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
				public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor>;
				public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
				public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				public isTerminated(): boolean;
				public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: io.sentry.ILogger);
				public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.ThreadFactory, param6: java.util.concurrent.RejectedExecutionHandler);
				public invokeAny(param0: java.util.Collection<any>): any;
				public constructor();
				public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public shutdown(): void;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public isShutdown(): boolean;
				public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.ThreadFactory);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.RejectedExecutionHandler);
				public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
			}
			export namespace QueuedThreadPoolExecutor {
				export class CancelledFuture<T>  extends java.util.concurrent.Future<any> {
					public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture<any>>;
					public get(): any;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
					public cancel(param0: boolean): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class RateLimiter extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.RateLimiter>;
				public constructor(param0: io.sentry.SentryOptions);
				public isActiveForCategory(param0: io.sentry.DataCategory): boolean;
				public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: io.sentry.SentryOptions);
				public updateRetryAfterLimits(param0: string, param1: string, param2: number): void;
				public filter(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): io.sentry.SentryEnvelope;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class ReusableCountLatch extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch>;
				public waitTillZero(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public increment(): void;
				public constructor(param0: number);
				public getCount(): number;
				public decrement(): void;
				public constructor();
				public waitTillZero(): void;
			}
			export namespace ReusableCountLatch {
				export class Sync extends java.util.concurrent.locks.AbstractQueuedSynchronizer {
					public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch.Sync>;
					public tryAcquireShared(param0: number): number;
					public tryReleaseShared(param0: number): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export class StdoutTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.StdoutTransport>;
				public getRateLimiter(): io.sentry.transport.RateLimiter;
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public send(param0: io.sentry.SentryEnvelope, param1: io.sentry.Hint): void;
				public constructor(param0: io.sentry.ISerializer);
				public flush(param0: number): void;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace transport {
			export abstract class TransportResult extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.TransportResult>;
				public static success(): io.sentry.transport.TransportResult;
				public getResponseCode(): number;
				public isSuccess(): boolean;
				public static error(): io.sentry.transport.TransportResult;
				public static error(param0: number): io.sentry.transport.TransportResult;
			}
			export namespace TransportResult {
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

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class CheckInUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.CheckInUtils>;
				public static withCheckIn(param0: string, param1: io.sentry.MonitorConfig, param2: java.util.concurrent.Callable<any>): any;
				public static withCheckIn(param0: string, param1: java.util.concurrent.Callable<any>): any;
				public static isIgnored(param0: java.util.List<string>, param1: string): boolean;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class ClassLoaderUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.ClassLoaderUtils>;
				public static classLoaderOrDefault(param0: java.lang.ClassLoader): java.lang.ClassLoader;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class CollectionUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.CollectionUtils>;
				public static newArrayList(param0: java.util.List<any>): java.util.List<any>;
				public static size(param0: java.lang.Iterable<any>): number;
				public static filterListEntries(param0: java.util.List<any>, param1: io.sentry.util.CollectionUtils.Predicate<any>): java.util.List<any>;
				public static newHashMap(param0: java.util.Map<any,any>): java.util.Map<any,any>;
				public static filterMapEntries(param0: java.util.Map<any,any>, param1: io.sentry.util.CollectionUtils.Predicate<any>): java.util.Map<any,any>;
				public static map(param0: java.util.List<any>, param1: io.sentry.util.CollectionUtils.Mapper<any,any>): java.util.List<any>;
				public static newConcurrentHashMap(param0: java.util.Map<any,any>): java.util.Map<any,any>;
			}
			export namespace CollectionUtils {
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

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class DebugMetaPropertiesApplier extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.DebugMetaPropertiesApplier>;
				public static DEBUG_META_PROPERTIES_FILENAME: string;
				public static applyToOptions(param0: io.sentry.SentryOptions, param1: java.util.Properties): void;
				public static getProguardUuid(param0: java.util.Properties): string;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class ExceptionUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.ExceptionUtils>;
				public static findRootCause(param0: java.lang.Throwable): java.lang.Throwable;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class FileUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.FileUtils>;
				public static readText(param0: java.io.File): string;
				public static deleteRecursively(param0: java.io.File): boolean;
				public static readBytesFromFile(param0: string, param1: number): androidNative.Array<number>;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class HintUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.HintUtils>;
				public static runIfDoesNotHaveType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryNullableConsumer<any>): void;
				public static shouldApplyScopeData(param0: io.sentry.Hint): boolean;
				public static runIfHasType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryConsumer<any>): void;
				public static runIfHasTypeLogIfNot(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.ILogger, param3: io.sentry.util.HintUtils.SentryConsumer<any>): void;
				public static getEventDropReason(param0: io.sentry.Hint): io.sentry.hints.EventDropReason;
				public static setIsFromHybridSdk(param0: io.sentry.Hint, param1: string): void;
				public static isFromHybridSdk(param0: io.sentry.Hint): boolean;
				public static setEventDropReason(param0: io.sentry.Hint, param1: io.sentry.hints.EventDropReason): void;
				public static setTypeCheckHint(param0: io.sentry.Hint, param1: any): void;
				public static getSentrySdkHint(param0: io.sentry.Hint): any;
				public static hasType(param0: io.sentry.Hint, param1: java.lang.Class<any>): boolean;
				public static createWithTypeCheckHint(param0: any): io.sentry.Hint;
				public static runIfHasType(param0: io.sentry.Hint, param1: java.lang.Class<any>, param2: io.sentry.util.HintUtils.SentryConsumer<any>, param3: io.sentry.util.HintUtils.SentryHintFallback): void;
			}
			export namespace HintUtils {
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
				export class SentryHintFallback extends java.lang.Object {
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

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class HttpUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.HttpUtils>;
				public static COOKIE_HEADER_NAME: string;
				public static isSecurityCookie(param0: string, param1: java.util.List<string>): boolean;
				public static containsSensitiveHeader(param0: string): boolean;
				public static filterOutSecurityCookiesFromHeader(param0: java.util.Enumeration<string>, param1: string, param2: java.util.List<string>): java.util.List<string>;
				public static filterOutSecurityCookiesFromHeader(param0: java.util.List<string>, param1: string, param2: java.util.List<string>): java.util.List<string>;
				public constructor();
				public static filterOutSecurityCookies(param0: string, param1: java.util.List<string>): string;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class IntegrationUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.IntegrationUtils>;
				public static addIntegrationToSdkVersion(param0: string): void;
				public static addIntegrationToSdkVersion(param0: java.lang.Class<any>): void;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class JsonSerializationUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.JsonSerializationUtils>;
				public static atomicIntegerArrayToList(param0: java.util.concurrent.atomic.AtomicIntegerArray): java.util.List<any>;
				public static bytesFrom(param0: io.sentry.ISerializer, param1: io.sentry.ILogger, param2: io.sentry.JsonSerializable): androidNative.Array<number>;
				public constructor();
				public static calendarToMap(param0: java.util.Calendar): java.util.Map<string,any>;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class LazyEvaluator<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.LazyEvaluator<any>>;
				public getValue(): T;
				public constructor(param0: io.sentry.util.LazyEvaluator.Evaluator<T>);
			}
			export namespace LazyEvaluator {
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

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class LogUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.LogUtils>;
				public static logNotInstanceOf(param0: java.lang.Class<any>, param1: any, param2: io.sentry.ILogger): void;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class MapObjectWriter extends java.lang.Object implements io.sentry.ObjectWriter {
				public static class: java.lang.Class<io.sentry.util.MapObjectWriter>;
				public name(param0: string): io.sentry.util.MapObjectWriter;
				public nullValue(): io.sentry.ObjectWriter;
				public value(param0: boolean): io.sentry.util.MapObjectWriter;
				public beginArray(): io.sentry.util.MapObjectWriter;
				public value(param0: java.lang.Number): io.sentry.util.MapObjectWriter;
				public beginObject(): io.sentry.util.MapObjectWriter;
				public endArray(): io.sentry.util.MapObjectWriter;
				public beginObject(): io.sentry.ObjectWriter;
				public value(param0: string): io.sentry.util.MapObjectWriter;
				public name(param0: string): io.sentry.ObjectWriter;
				public nullValue(): io.sentry.util.MapObjectWriter;
				public beginArray(): io.sentry.ObjectWriter;
				public value(param0: java.lang.Boolean): io.sentry.util.MapObjectWriter;
				public value(param0: java.lang.Number): io.sentry.ObjectWriter;
				public value(param0: io.sentry.ILogger, param1: any): io.sentry.ObjectWriter;
				public value(param0: number): io.sentry.util.MapObjectWriter;
				public value(param0: java.lang.Boolean): io.sentry.ObjectWriter;
				public constructor(param0: java.util.Map<string,any>);
				public endArray(): io.sentry.ObjectWriter;
				public value(param0: boolean): io.sentry.ObjectWriter;
				public endObject(): io.sentry.util.MapObjectWriter;
				public value(param0: number): io.sentry.ObjectWriter;
				public value(param0: io.sentry.ILogger, param1: any): io.sentry.util.MapObjectWriter;
				public endObject(): io.sentry.ObjectWriter;
				public value(param0: string): io.sentry.ObjectWriter;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class Objects extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Objects>;
				public static requireNonNull(param0: any, param1: string): any;
				public equals(param0: any): boolean;
				public static hash(param0: androidNative.Array<any>): number;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class Pair<A, B>  extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Pair<any,any>>;
				public getFirst(): A;
				public constructor(param0: A, param1: B);
				public getSecond(): B;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class Platform extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Platform>;
				public static isJvm(): boolean;
				public static isJavaNinePlus(): boolean;
				public static isAndroid(): boolean;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class PropagationTargetsUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.PropagationTargetsUtils>;
				public static contain(param0: java.util.List<string>, param1: java.net.URI): boolean;
				public static contain(param0: java.util.List<string>, param1: string): boolean;
				public constructor();
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class SampleRateUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.SampleRateUtils>;
				public static isValidSampleRate(param0: java.lang.Double): boolean;
				public static isValidTracesSampleRate(param0: java.lang.Double): boolean;
				public static isValidTracesSampleRate(param0: java.lang.Double, param1: boolean): boolean;
				public constructor();
				public static isValidProfilesSampleRate(param0: java.lang.Double): boolean;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class StringUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.StringUtils>;
				public static byteCountToString(param0: number): string;
				public static removePrefix(param0: string, param1: string): string;
				public static capitalize(param0: string): string;
				public static normalizeUUID(param0: string): string;
				public static getStringAfterDot(param0: string): string;
				public static join(param0: string, param1: java.lang.Iterable<any>): string;
				public static removeSurrounding(param0: string, param1: string): string;
				public static countOf(param0: string, param1: string): number;
				public static toString(param0: any): string;
				public toString(): string;
				public static substringBefore(param0: string, param1: string): string;
				public static calculateStringHash(param0: string, param1: io.sentry.ILogger): string;
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class TracingUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.TracingUtils>;
				public static startNewTrace(param0: io.sentry.IHub): void;
				public static trace(param0: io.sentry.IHub, param1: java.util.List<string>, param2: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
				public static traceIfAllowed(param0: io.sentry.IHub, param1: string, param2: java.util.List<string>, param3: io.sentry.ISpan): io.sentry.util.TracingUtils.TracingHeaders;
				public static maybeUpdateBaggage(param0: io.sentry.IScope, param1: io.sentry.SentryOptions): io.sentry.PropagationContext;
				public constructor();
			}
			export namespace TracingUtils {
				export class PropagationContextHolder extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.TracingUtils.PropagationContextHolder>;
				}
				export class TracingHeaders extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.TracingUtils.TracingHeaders>;
					public getBaggageHeader(): io.sentry.BaggageHeader;
					public getSentryTraceHeader(): io.sentry.SentryTraceHeader;
					public constructor(param0: io.sentry.SentryTraceHeader, param1: io.sentry.BaggageHeader);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export class UrlUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.UrlUtils>;
				public static SENSITIVE_DATA_SUBSTITUTE: string;
				public static parse(param0: string): io.sentry.util.UrlUtils.UrlDetails;
				public static parseNullable(param0: string): io.sentry.util.UrlUtils.UrlDetails;
				public constructor();
			}
			export namespace UrlUtils {
				export class UrlDetails extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.UrlUtils.UrlDetails>;
					public getUrl(): string;
					public applyToSpan(param0: io.sentry.ISpan): void;
					public applyToRequest(param0: io.sentry.protocol.Request): void;
					public getQuery(): string;
					public getFragment(): string;
					public getUrlOrFallback(): string;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export namespace thread {
				export class IMainThreadChecker extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.util.thread.IMainThreadChecker>;
					/**
					 * Constructs a new instance of the io.sentry.util.thread.IMainThreadChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isMainThread(param0: number): boolean;
						isMainThread(param0: java.lang.Thread): boolean;
						isMainThread(): boolean;
						isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					});
					public constructor();
					public isMainThread(param0: java.lang.Thread): boolean;
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public isMainThread(param0: number): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export namespace thread {
				export class MainThreadChecker extends java.lang.Object implements io.sentry.util.thread.IMainThreadChecker {
					public static class: java.lang.Class<io.sentry.util.thread.MainThreadChecker>;
					public isMainThread(param0: java.lang.Thread): boolean;
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public static getInstance(): io.sentry.util.thread.MainThreadChecker;
					public isMainThread(param0: number): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace util {
			export namespace thread {
				export class NoOpMainThreadChecker extends java.lang.Object implements io.sentry.util.thread.IMainThreadChecker {
					public static class: java.lang.Class<io.sentry.util.thread.NoOpMainThreadChecker>;
					public static getInstance(): io.sentry.util.thread.NoOpMainThreadChecker;
					public isMainThread(param0: java.lang.Thread): boolean;
					public constructor();
					public isMainThread(): boolean;
					public isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
					public isMainThread(param0: number): boolean;
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export class Base64 extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.vendor.Base64>;
				public static DEFAULT: number;
				public static NO_PADDING: number;
				public static NO_WRAP: number;
				public static CRLF: number;
				public static URL_SAFE: number;
				public static NO_CLOSE: number;
				public static encode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
				public static decode(param0: string, param1: number): androidNative.Array<number>;
				public static decode(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): androidNative.Array<number>;
				public static encode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				public static encodeToString(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): string;
				public static decode(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				public static encodeToString(param0: androidNative.Array<number>, param1: number): string;
			}
			export namespace Base64 {
				export abstract class Coder extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Coder>;
					public output: androidNative.Array<number>;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
				}
				export class Decoder extends io.sentry.vendor.Base64.Coder {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Decoder>;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
					public constructor(param0: number, param1: androidNative.Array<number>);
				}
				export class Encoder extends io.sentry.vendor.Base64.Coder {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Encoder>;
					public static LINE_GROUPS: number;
					public do_padding: boolean;
					public do_newline: boolean;
					public do_cr: boolean;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
					public constructor(param0: number, param1: androidNative.Array<number>);
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace internal {
					export namespace bind {
						export namespace util {
							export class ISO8601Utils extends java.lang.Object {
								public static class: java.lang.Class<io.sentry.vendor.gson.internal.bind.util.ISO8601Utils>;
								public static TIMEZONE_UTC: java.util.TimeZone;
								public static format(param0: java.util.Date): string;
								public constructor();
								public static format(param0: java.util.Date, param1: boolean): string;
								public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
								public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
							}
						}
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace stream {
					export class JsonReader extends java.lang.Object implements java.io.Closeable {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonReader>;
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
						public setLenient(param0: boolean): void;
						public peek(): io.sentry.vendor.gson.stream.JsonToken;
						public nextInt(): number;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public constructor(param0: java.io.Reader);
						public hasNext(): boolean;
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace stream {
					export class JsonScope extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonScope>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace stream {
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
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): io.sentry.vendor.gson.stream.JsonToken;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace stream {
					export class JsonWriter extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.JsonWriter>;
						public close(): void;
						public setSerializeNulls(param0: boolean): void;
						public constructor(param0: java.io.Writer);
						public endArray(): io.sentry.vendor.gson.stream.JsonWriter;
						public isLenient(): boolean;
						public nullValue(): io.sentry.vendor.gson.stream.JsonWriter;
						public flush(): void;
						public setIndent(param0: string): void;
						public endObject(): io.sentry.vendor.gson.stream.JsonWriter;
						public getSerializeNulls(): boolean;
						public name(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
						public beginObject(): io.sentry.vendor.gson.stream.JsonWriter;
						public setLenient(param0: boolean): void;
						public jsonValue(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
						public beginArray(): io.sentry.vendor.gson.stream.JsonWriter;
						public value(param0: string): io.sentry.vendor.gson.stream.JsonWriter;
						public value(param0: java.lang.Number): io.sentry.vendor.gson.stream.JsonWriter;
						public value(param0: boolean): io.sentry.vendor.gson.stream.JsonWriter;
						public isHtmlSafe(): boolean;
						public value(param0: java.lang.Boolean): io.sentry.vendor.gson.stream.JsonWriter;
						public setHtmlSafe(param0: boolean): void;
						public value(param0: number): io.sentry.vendor.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace sentry {
		export namespace vendor {
			export namespace gson {
				export namespace stream {
					export class MalformedJsonException extends java.io.IOException {
						public static class: java.lang.Class<io.sentry.vendor.gson.stream.MalformedJsonException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare namespace org {
	export namespace nativescript {
		export namespace sentry {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<org.nativescript.sentry.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare namespace org {
	export namespace nativescript {
		export namespace sentry {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<org.nativescript.sentry.R>;
			}
		}
	}
}

//Generics information:
//io.sentry.CircularFifoQueue:1
//io.sentry.JsonDeserializer:1
//io.sentry.OptionsContainer:1
//io.sentry.Sentry.OptionsConfiguration:1
//io.sentry.SentryValues:1
//io.sentry.SynchronizedCollection:1
//io.sentry.SynchronizedQueue:1
//io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable:1
//io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1
//io.sentry.util.CollectionUtils.Mapper:2
//io.sentry.util.CollectionUtils.Predicate:1
//io.sentry.util.HintUtils.SentryConsumer:1
//io.sentry.util.HintUtils.SentryNullableConsumer:1
//io.sentry.util.LazyEvaluator:1
//io.sentry.util.LazyEvaluator.Evaluator:1
//io.sentry.util.Pair:2

