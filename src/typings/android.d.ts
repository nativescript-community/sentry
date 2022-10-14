declare namespace io {
    export namespace sentry {
        export class AsyncHttpTransportFactory extends java.lang.Object implements ITransportFactory {
            public static class: java.lang.Class<AsyncHttpTransportFactory>;
            public constructor();
            public create(param0: SentryOptions, param1: RequestDetails): transport.ITransport;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Attachment extends java.lang.Object {
            public static class: java.lang.Class<Attachment>;
            public getFilename(): string;
            public constructor(param0: androidNative.Array<number>, param1: string, param2: string);
            public getPathname(): string;
            public constructor(param0: androidNative.Array<number>, param1: string, param2: string, param3: boolean);
            public constructor(param0: string, param1: string, param2: string);
            public getContentType(): string;
            public constructor(param0: string, param1: string);
            public getBytes(): androidNative.Array<number>;
            public constructor(param0: androidNative.Array<number>, param1: string);
            public getAttachmentType(): string;
            public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string);
            public static fromScreenshot(param0: androidNative.Array<number>): Attachment;
            public constructor(param0: string, param1: string, param2: string, param3: boolean);
            public constructor(param0: string);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Baggage extends java.lang.Object {
            public static class: java.lang.Class<Baggage>;
            public setUserId(param0: string): void;
            public static fromHeader(param0: java.util.List<string>): Baggage;
            public constructor(param0: ILogger);
            public toTraceContext(): TraceContext;
            public setPublicKey(param0: string): void;
            public getTraceId(): string;
            public setValuesFromTransaction(param0: ITransaction, param1: protocol.User, param2: SentryOptions, param3: TracesSamplingDecision): void;
            public getRelease(): string;
            public toHeaderString(param0: string): string;
            public static fromHeader(param0: string, param1: ILogger): Baggage;
            public getSampleRateDouble(): java.lang.Double;
            public static fromHeader(param0: java.util.List<string>, param1: boolean, param2: ILogger): Baggage;
            public setTraceId(param0: string): void;
            public getEnvironment(): string;
            public getUserId(): string;
            public get(param0: string): string;
            public constructor(param0: java.util.Map<string,string>, param1: string, param2: boolean, param3: ILogger);
            public isMutable(): boolean;
            public setTransaction(param0: string): void;
            public static fromHeader(param0: java.util.List<string>, param1: ILogger): Baggage;
            public getThirdPartyHeader(): string;
            public set(param0: string, param1: string): void;
            public getPublicKey(): string;
            public getUserSegment(): string;
            public getTransaction(): string;
            public setSampleRate(param0: string): void;
            public freeze(): void;
            public setEnvironment(param0: string): void;
            public static fromHeader(param0: string): Baggage;
            public setRelease(param0: string): void;
            public static fromHeader(param0: string, param1: boolean, param2: ILogger): Baggage;
            public setUserSegment(param0: string): void;
            public getSampleRate(): string;
        }
        export namespace Baggage {
            export class DSCKeys extends java.lang.Object {
                public static class: java.lang.Class<DSCKeys>;
                public static TRACE_ID: string;
                public static PUBLIC_KEY: string;
                public static RELEASE: string;
                public static USER_ID: string;
                public static ENVIRONMENT: string;
                public static USER_SEGMENT: string;
                public static TRANSACTION: string;
                public static SAMPLE_RATE: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class BaggageHeader extends java.lang.Object {
            public static class: java.lang.Class<BaggageHeader>;
            public static BAGGAGE_HEADER: string;
            public static fromBaggageAndOutgoingHeader(param0: Baggage, param1: java.util.List<string>): BaggageHeader;
            public getName(): string;
            public getValue(): string;
            public constructor(param0: string);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Breadcrumb extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<Breadcrumb>;
            public static userInteraction(param0: string, param1: string, param2: string): Breadcrumb;
            public static userInteraction(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): Breadcrumb;
            public removeData(param0: string): void;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public static user(param0: string, param1: string): Breadcrumb;
            public static query(param0: string): Breadcrumb;
            public getData(param0: string): any;
            public getMessage(): string;
            public static ui(param0: string, param1: string): Breadcrumb;
            public getData(): java.util.Map<string,any>;
            public static http(param0: string, param1: string, param2: java.lang.Integer): Breadcrumb;
            public getTimestamp(): java.util.Date;
            public setData(param0: string, param1: any): void;
            public setLevel(param0: SentryLevel): void;
            public constructor(param0: java.util.Date);
            public static debug(param0: string): Breadcrumb;
            public setCategory(param0: string): void;
            public static info(param0: string): Breadcrumb;
            public static http(param0: string, param1: string): Breadcrumb;
            public getType(): string;
            public constructor(param0: string);
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public static error(param0: string): Breadcrumb;
            public constructor();
            public static navigation(param0: string, param1: string): Breadcrumb;
            public setMessage(param0: string): void;
            public getUnknown(): java.util.Map<string,any>;
            public static transaction(param0: string): Breadcrumb;
            public setType(param0: string): void;
            public getLevel(): SentryLevel;
            public getCategory(): string;
        }
        export namespace Breadcrumb {
            export class Deserializer extends JsonDeserializer<Breadcrumb> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): Breadcrumb;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
            public static class: java.lang.Class<BuildConfig>;
            public static SENTRY_JAVA_SDK_NAME: string;
            public static VERSION_NAME: string;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
            public static class: java.lang.Class<CircularFifoQueue<any>>;
            public equals(param0: any): boolean;
            public stream(): java.util.stream.Stream<any>;
            public constructor(param0: java.util.Collection<any>);
            public toArray(): androidNative.Array<any>;
            public contains(param0: any): boolean;
            public get(param0: number): any;
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
        export class CustomSamplingContext extends java.lang.Object {
            public static class: java.lang.Class<CustomSamplingContext>;
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
            public static class: java.lang.Class<DataCategory>;
            public static All: DataCategory;
            public static Default: DataCategory;
            public static Error: DataCategory;
            public static Session: DataCategory;
            public static Attachment: DataCategory;
            public static Transaction: DataCategory;
            public static Security: DataCategory;
            public static UserReport: DataCategory;
            public static Unknown: DataCategory;
            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            public static valueOf(param0: string): DataCategory;
            public static values(): androidNative.Array<DataCategory>;
            public getCategory(): string;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class DateUtils extends java.lang.Object {
            public static class: java.lang.Class<DateUtils>;
            public static getCurrentDateTime(): java.util.Date;
            public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
            public static millisToSeconds(param0: number): number;
            public static nanosToMillis(param0: number): number;
            public static getDateTime(param0: string): java.util.Date;
            public static getTimestamp(param0: java.util.Date): string;
            public static dateToSeconds(param0: java.util.Date): number;
            public static getDateTime(param0: number): java.util.Date;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class DiagnosticLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<DiagnosticLogger>;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public isEnabled(param0: SentryLevel): boolean;
            public getLogger(): ILogger;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
            public constructor(param0: SentryOptions, param1: ILogger);
            public log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export abstract class DirectoryProcessor extends java.lang.Object {
            public static class: java.lang.Class<DirectoryProcessor>;
            public processFile(param0: java.io.File, param1: Hint): void;
            public processDirectory(param0: java.io.File): void;
            public isRelevantFileName(param0: string): boolean;
        }
        export namespace DirectoryProcessor {
            export class SendCachedEnvelopeHint extends java.lang.Object implements hints.Cached, hints.Retryable, hints.SubmissionResult, hints.Flushable {
                public static class: java.lang.Class<SendCachedEnvelopeHint>;
                public isRetry(): boolean;
                public setResult(param0: boolean): void;
                public constructor(param0: number, param1: ILogger);
                public setRetry(param0: boolean): void;
                public isSuccess(): boolean;
                public waitFlush(): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Dsn extends java.lang.Object {
            public static class: java.lang.Class<Dsn>;
            public getSecretKey(): string;
            public getPublicKey(): string;
            public getPath(): string;
            public getProjectId(): string;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class DuplicateEventDetectionEventProcessor extends java.lang.Object implements EventProcessor {
            public static class: java.lang.Class<DuplicateEventDetectionEventProcessor>;
            public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
            public constructor(param0: SentryOptions);
            public process(param0: SentryEvent, param1: Hint): SentryEvent;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class EnvelopeReader extends java.lang.Object implements IEnvelopeReader {
            public static class: java.lang.Class<EnvelopeReader>;
            public read(param0: java.io.InputStream): SentryEnvelope;
            public constructor(param0: ISerializer);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class EnvelopeSender extends DirectoryProcessor implements IEnvelopeSender {
            public static class: java.lang.Class<EnvelopeSender>;
            public processFile(param0: java.io.File, param1: Hint): void;
            public constructor(param0: IHub, param1: ISerializer, param2: ILogger, param3: number);
            public processEnvelopeFile(param0: string, param1: Hint): void;
            public isRelevantFileName(param0: string): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class EventProcessor extends java.lang.Object {
            public static class: java.lang.Class<EventProcessor>;
            /**
			 * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                process(param0: SentryEvent, param1: Hint): SentryEvent;
                process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
            });
            public constructor();
            public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
            public process(param0: SentryEvent, param1: Hint): SentryEvent;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ExternalOptions extends java.lang.Object {
            public static class: java.lang.Class<ExternalOptions>;
            public setEnableUncaughtExceptionHandler(param0: java.lang.Boolean): void;
            public setServerName(param0: string): void;
            public setTracesSampleRate(param0: java.lang.Double): void;
            public setProfilesSampleRate(param0: java.lang.Double): void;
            public getTracePropagationTargets(): java.util.List<string>;
            public addInAppExclude(param0: string): void;
            public getProxy(): SentryOptions.Proxy;
            public getRelease(): string;
            public getEnableDeduplication(): java.lang.Boolean;
            public getContextTags(): java.util.List<string>;
            public getTracesSampleRate(): java.lang.Double;
            public getInAppIncludes(): java.util.List<string>;
            public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
            public getTags(): java.util.Map<string,string>;
            public getInAppExcludes(): java.util.List<string>;
            public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
            /** @deprecated */
            public getTracingOrigins(): java.util.List<string>;
            public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
            public getEnvironment(): string;
            public setDist(param0: string): void;
            public getProfilesSampleRate(): java.lang.Double;
            public setTag(param0: string, param1: string): void;
            public addInAppInclude(param0: string): void;
            public setMaxRequestBodySize(param0: SentryOptions.RequestSize): void;
            public setProguardUuid(param0: string): void;
            public setIdleTimeout(param0: java.lang.Long): void;
            public getDsn(): string;
            public getSendClientReports(): java.lang.Boolean;
            public setProxy(param0: SentryOptions.Proxy): void;
            public addTracePropagationTarget(param0: string): void;
            public getProguardUuid(): string;
            public constructor();
            public getDist(): string;
            public setDsn(param0: string): void;
            public getDebug(): java.lang.Boolean;
            public getMaxRequestBodySize(): SentryOptions.RequestSize;
            public setEnvironment(param0: string): void;
            public setDebug(param0: java.lang.Boolean): void;
            public setRelease(param0: string): void;
            public static from(param0: config.PropertiesProvider, param1: ILogger): ExternalOptions;
            public setSendClientReports(param0: java.lang.Boolean): void;
            public getServerName(): string;
            /** @deprecated */
            public addTracingOrigin(param0: string): void;
            public addContextTag(param0: string): void;
            public getPrintUncaughtStackTrace(): java.lang.Boolean;
            public setPrintUncaughtStackTrace(param0: java.lang.Boolean): void;
            public getIdleTimeout(): java.lang.Long;
            public setEnableDeduplication(param0: java.lang.Boolean): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Hint extends java.lang.Object {
            public static class: java.lang.Class<Hint>;
            public static withAttachment(param0: Attachment): Hint;
            public set(param0: string, param1: any): void;
            public get(param0: string): any;
            public clearAttachments(): void;
            public getAttachments(): java.util.List<Attachment>;
            public setScreenshot(param0: Attachment): void;
            public constructor();
            public static withAttachments(param0: java.util.List<Attachment>): Hint;
            public getAs(param0: string, param1: java.lang.Class<any>): any;
            public remove(param0: string): void;
            public addAttachments(param0: java.util.List<Attachment>): void;
            public replaceAttachments(param0: java.util.List<Attachment>): void;
            public addAttachment(param0: Attachment): void;
            public getScreenshot(): Attachment;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class HostnameCache extends java.lang.Object {
            public static class: java.lang.Class<HostnameCache>;
        }
        export namespace HostnameCache {
            export class HostnameCacheThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
                public static class: java.lang.Class<HostnameCacheThreadFactory>;
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Hub extends java.lang.Object implements IHub {
            public static class: java.lang.Class<Hub>;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryId;
            public captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
            public isCrashedLastRun(): java.lang.Boolean;
            public getOptions(): SentryOptions;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
            public constructor(param0: SentryOptions);
            public captureMessage(param0: string): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
            public addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
            public configureScope(param0: ScopeCallback): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
            public clone(): any;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public bindClient(param0: ISentryClient): void;
            public traceHeaders(): SentryTraceHeader;
            public popScope(): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public clone(): IHub;
            public captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
            public getSpan(): ISpan;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
            public setExtra(param0: string, param1: string): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint, param3: ProfilingTraceData): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public startSession(): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public removeTag(param0: string): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
            public setSpanContext(param0: java.lang.Throwable, param1: ISpan, param2: string): void;
            public startTransaction(param0: string, param1: string): ITransaction;
            public captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public startTransaction(param0: TransactionContext): ITransaction;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class HubAdapter extends java.lang.Object implements IHub {
            public static class: java.lang.Class<HubAdapter>;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryId;
            public captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
            public isCrashedLastRun(): java.lang.Boolean;
            public getOptions(): SentryOptions;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
            public captureMessage(param0: string): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
            public addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
            public configureScope(param0: ScopeCallback): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
            public clone(): any;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public static getInstance(): HubAdapter;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public bindClient(param0: ISentryClient): void;
            public traceHeaders(): SentryTraceHeader;
            public popScope(): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public clone(): IHub;
            public captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
            public getSpan(): ISpan;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
            public setExtra(param0: string, param1: string): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint, param3: ProfilingTraceData): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public startSession(): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public removeTag(param0: string): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
            public setSpanContext(param0: java.lang.Throwable, param1: ISpan, param2: string): void;
            public startTransaction(param0: string, param1: string): ITransaction;
            public captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public startTransaction(param0: TransactionContext): ITransaction;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IEnvelopeReader extends java.lang.Object {
            public static class: java.lang.Class<IEnvelopeReader>;
            /**
			 * Constructs a new instance of the io.sentry.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                read(param0: java.io.InputStream): SentryEnvelope;
            });
            public constructor();
            public read(param0: java.io.InputStream): SentryEnvelope;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IEnvelopeSender extends java.lang.Object {
            public static class: java.lang.Class<IEnvelopeSender>;
            /**
			 * Constructs a new instance of the io.sentry.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                processEnvelopeFile(param0: string, param1: Hint): void;
            });
            public constructor();
            public processEnvelopeFile(param0: string, param1: Hint): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IHub extends java.lang.Object {
            public static class: java.lang.Class<IHub>;
            /**
			 * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                isEnabled(): boolean;
                captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
                captureEvent(param0: SentryEvent): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
                captureMessage(param0: string): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
                captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
                captureException(param0: java.lang.Throwable): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
                captureUserFeedback(param0: UserFeedback): void;
                startSession(): void;
                endSession(): void;
                close(): void;
                addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
                addBreadcrumb(param0: Breadcrumb): void;
                addBreadcrumb(param0: string): void;
                addBreadcrumb(param0: string, param1: string): void;
                setLevel(param0: SentryLevel): void;
                setTransaction(param0: string): void;
                setUser(param0: protocol.User): void;
                setFingerprint(param0: java.util.List<string>): void;
                clearBreadcrumbs(): void;
                setTag(param0: string, param1: string): void;
                removeTag(param0: string): void;
                setExtra(param0: string, param1: string): void;
                removeExtra(param0: string): void;
                getLastEventId(): protocol.SentryId;
                pushScope(): void;
                popScope(): void;
                withScope(param0: ScopeCallback): void;
                configureScope(param0: ScopeCallback): void;
                bindClient(param0: ISentryClient): void;
                flush(param0: number): void;
                clone(): IHub;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint, param3: ProfilingTraceData): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
                startTransaction(param0: TransactionContext): ITransaction;
                startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
                startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
                startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
                startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
                startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
                startTransaction(param0: string, param1: string): ITransaction;
                startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
                startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
                traceHeaders(): SentryTraceHeader;
                setSpanContext(param0: java.lang.Throwable, param1: ISpan, param2: string): void;
                getSpan(): ISpan;
                getOptions(): SentryOptions;
                isCrashedLastRun(): java.lang.Boolean;
            });
            public constructor();
            public captureTransaction(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryId;
            public captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
            public isCrashedLastRun(): java.lang.Boolean;
            public getOptions(): SentryOptions;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
            public captureMessage(param0: string): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
            public addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
            public configureScope(param0: ScopeCallback): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
            public clone(): any;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public bindClient(param0: ISentryClient): void;
            public traceHeaders(): SentryTraceHeader;
            public popScope(): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public clone(): IHub;
            public captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
            public addBreadcrumb(param0: string): void;
            public getSpan(): ISpan;
            public captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public setExtra(param0: string, param1: string): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint, param3: ProfilingTraceData): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public startSession(): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public removeTag(param0: string): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
            public setSpanContext(param0: java.lang.Throwable, param1: ISpan, param2: string): void;
            public startTransaction(param0: string, param1: string): ITransaction;
            public captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public startTransaction(param0: TransactionContext): ITransaction;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ILogger extends java.lang.Object {
            public static class: java.lang.Class<ILogger>;
            /**
			 * Constructs a new instance of the io.sentry.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
                log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
                isEnabled(param0: SentryLevel): boolean;
            });
            public constructor();
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public isEnabled(param0: SentryLevel): boolean;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
            public log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IScopeObserver extends java.lang.Object {
            public static class: java.lang.Class<IScopeObserver>;
            /**
			 * Constructs a new instance of the io.sentry.IScopeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                setUser(param0: protocol.User): void;
                addBreadcrumb(param0: Breadcrumb): void;
                setTag(param0: string, param1: string): void;
                removeTag(param0: string): void;
                setExtra(param0: string, param1: string): void;
                removeExtra(param0: string): void;
            });
            public constructor();
            public addBreadcrumb(param0: Breadcrumb): void;
            public setExtra(param0: string, param1: string): void;
            public removeExtra(param0: string): void;
            public removeTag(param0: string): void;
            public setUser(param0: protocol.User): void;
            public setTag(param0: string, param1: string): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ISentryClient extends java.lang.Object {
            public static class: java.lang.Class<ISentryClient>;
            /**
			 * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                isEnabled(): boolean;
                captureEvent(param0: SentryEvent, param1: Scope, param2: Hint): protocol.SentryId;
                close(): void;
                flush(param0: number): void;
                captureEvent(param0: SentryEvent): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                captureException(param0: java.lang.Throwable): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Scope, param2: Hint): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
                captureUserFeedback(param0: UserFeedback): void;
                captureSession(param0: Session, param1: Hint): void;
                captureSession(param0: Session): void;
                captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: Scope, param2: Hint): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint, param4: ProfilingTraceData): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
                captureTransaction(param0: protocol.SentryTransaction): protocol.SentryId;
            });
            public constructor();
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Scope, param2: Hint): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint, param4: ProfilingTraceData): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: Hint): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public isEnabled(): boolean;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public captureSession(param0: Session, param1: Hint): void;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction): protocol.SentryId;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ISentryExecutorService extends java.lang.Object {
            public static class: java.lang.Class<ISentryExecutorService>;
            /**
			 * Constructs a new instance of the io.sentry.ISentryExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
                close(param0: number): void;
            });
            public constructor();
            public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
            public close(param0: number): void;
            public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ISerializer extends java.lang.Object {
            public static class: java.lang.Class<ISerializer>;
            /**
			 * Constructs a new instance of the io.sentry.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
                deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
                serialize(param0: any, param1: java.io.Writer): void;
                serialize(param0: SentryEnvelope, param1: java.io.OutputStream): void;
                serialize(param0: java.util.Map<string,any>): string;
            });
            public constructor();
            public serialize(param0: SentryEnvelope, param1: java.io.OutputStream): void;
            public serialize(param0: java.util.Map<string,any>): string;
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
            public serialize(param0: any, param1: java.io.Writer): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ISpan extends java.lang.Object {
            public static class: java.lang.Class<ISpan>;
            /**
			 * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                startChild(param0: string): ISpan;
                startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
                startChild(param0: string, param1: string): ISpan;
                toSentryTrace(): SentryTraceHeader;
                traceContext(): TraceContext;
                toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
                finish(): void;
                finish(param0: SpanStatus): void;
                setOperation(param0: string): void;
                getOperation(): string;
                setDescription(param0: string): void;
                getDescription(): string;
                setStatus(param0: SpanStatus): void;
                getStatus(): SpanStatus;
                setThrowable(param0: java.lang.Throwable): void;
                getThrowable(): java.lang.Throwable;
                getSpanContext(): SpanContext;
                setTag(param0: string, param1: string): void;
                getTag(param0: string): string;
                isFinished(): boolean;
                setData(param0: string, param1: any): void;
                getData(param0: string): any;
                setMeasurement(param0: string, param1: java.lang.Number): void;
                setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            });
            public constructor();
            public setOperation(param0: string): void;
            public startChild(param0: string, param1: string): ISpan;
            public traceContext(): TraceContext;
            public finish(): void;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getTag(param0: string): string;
            public getData(param0: string): any;
            public setStatus(param0: SpanStatus): void;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public getThrowable(): java.lang.Throwable;
            public isFinished(): boolean;
            public getStatus(): SpanStatus;
            public setData(param0: string, param1: any): void;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ITransaction extends java.lang.Object implements ISpan {
            public static class: java.lang.Class<ITransaction>;
            /**
			 * Constructs a new instance of the io.sentry.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                setName(param0: string): void;
                setName(param0: string, param1: protocol.TransactionNameSource): void;
                getName(): string;
                getTransactionNameSource(): protocol.TransactionNameSource;
                getSpans(): java.util.List<Span>;
                isSampled(): java.lang.Boolean;
                isProfileSampled(): java.lang.Boolean;
                getSamplingDecision(): TracesSamplingDecision;
                getLatestActiveSpan(): Span;
                getEventId(): protocol.SentryId;
                scheduleFinish(): void;
                startChild(param0: string): ISpan;
                startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
                startChild(param0: string, param1: string): ISpan;
                toSentryTrace(): SentryTraceHeader;
                traceContext(): TraceContext;
                toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
                finish(): void;
                finish(param0: SpanStatus): void;
                setOperation(param0: string): void;
                getOperation(): string;
                setDescription(param0: string): void;
                getDescription(): string;
                setStatus(param0: SpanStatus): void;
                getStatus(): SpanStatus;
                setThrowable(param0: java.lang.Throwable): void;
                getThrowable(): java.lang.Throwable;
                getSpanContext(): SpanContext;
                setTag(param0: string, param1: string): void;
                getTag(param0: string): string;
                isFinished(): boolean;
                setData(param0: string, param1: any): void;
                getData(param0: string): any;
                setMeasurement(param0: string, param1: java.lang.Number): void;
                setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            });
            public constructor();
            public getEventId(): protocol.SentryId;
            public traceContext(): TraceContext;
            public finish(): void;
            public getData(param0: string): any;
            public scheduleFinish(): void;
            public setStatus(param0: SpanStatus): void;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public isFinished(): boolean;
            public getSamplingDecision(): TracesSamplingDecision;
            public getStatus(): SpanStatus;
            public setData(param0: string, param1: any): void;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public isProfileSampled(): java.lang.Boolean;
            public setOperation(param0: string): void;
            public getTransactionNameSource(): protocol.TransactionNameSource;
            public startChild(param0: string, param1: string): ISpan;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getLatestActiveSpan(): Span;
            public getTag(param0: string): string;
            public getThrowable(): java.lang.Throwable;
            public getName(): string;
            public getSpans(): java.util.List<Span>;
            public isSampled(): java.lang.Boolean;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
            public setName(param0: string, param1: protocol.TransactionNameSource): void;
            public setName(param0: string): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ITransactionProfiler extends java.lang.Object {
            public static class: java.lang.Class<ITransactionProfiler>;
            /**
			 * Constructs a new instance of the io.sentry.ITransactionProfiler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                onTransactionStart(param0: ITransaction): void;
                onTransactionFinish(param0: ITransaction): ProfilingTraceData;
            });
            public constructor();
            public onTransactionFinish(param0: ITransaction): ProfilingTraceData;
            public onTransactionStart(param0: ITransaction): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ITransportFactory extends java.lang.Object {
            public static class: java.lang.Class<ITransportFactory>;
            /**
			 * Constructs a new instance of the io.sentry.ITransportFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                create(param0: SentryOptions, param1: RequestDetails): transport.ITransport;
            });
            public constructor();
            public create(param0: SentryOptions, param1: RequestDetails): transport.ITransport;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Integration extends java.lang.Object {
            public static class: java.lang.Class<Integration>;
            /**
			 * Constructs a new instance of the io.sentry.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                register(param0: IHub, param1: SentryOptions): void;
            });
            public constructor();
            public register(param0: IHub, param1: SentryOptions): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IpAddressUtils extends java.lang.Object {
            public static class: java.lang.Class<IpAddressUtils>;
            public static isDefault(param0: string): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonDeserializer<T>  extends java.lang.Object {
            public static class: java.lang.Class<JsonDeserializer<any>>;
            /**
			 * Constructs a new instance of the io.sentry.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                deserialize(param0: JsonObjectReader, param1: ILogger): T;
            });
            public constructor();
            public deserialize(param0: JsonObjectReader, param1: ILogger): T;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonObjectDeserializer extends java.lang.Object {
            public static class: java.lang.Class<JsonObjectDeserializer>;
            public constructor();
            public deserialize(param0: JsonObjectReader): any;
        }
        export namespace JsonObjectDeserializer {
            export class NextValue extends java.lang.Object {
                public static class: java.lang.Class<NextValue>;
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
                public static class: java.lang.Class<Token>;
                /**
				 * Constructs a new instance of the io.sentry.JsonObjectDeserializer$Token interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    getValue(): any;
                });
                public constructor();
                public getValue(): any;
            }
            export class TokenArray extends java.lang.Object implements Token {
                public static class: java.lang.Class<TokenArray>;
                public getValue(): any;
            }
            export class TokenMap extends java.lang.Object implements Token {
                public static class: java.lang.Class<TokenMap>;
                public getValue(): any;
            }
            export class TokenName extends java.lang.Object implements Token {
                public static class: java.lang.Class<TokenName>;
                public getValue(): any;
            }
            export class TokenPrimitive extends java.lang.Object implements Token {
                public static class: java.lang.Class<TokenPrimitive>;
                public getValue(): any;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonObjectReader extends vendor.gson.stream.JsonReader {
            public static class: java.lang.Class<JsonObjectReader>;
            public nextIntegerOrNull(): java.lang.Integer;
            public nextMapOrNull(param0: ILogger, param1: JsonDeserializer<any>): java.util.Map<any,any>;
            public nextLongOrNull(): java.lang.Long;
            public nextStringOrNull(): string;
            public nextDoubleOrNull(): java.lang.Double;
            public nextObjectOrNull(): any;
            public nextFloat(): java.lang.Float;
            public nextOrNull(param0: ILogger, param1: JsonDeserializer<any>): any;
            public constructor(param0: java.io.Reader);
            public nextDateOrNull(param0: ILogger): java.util.Date;
            public nextFloatOrNull(): java.lang.Float;
            public nextTimeZoneOrNull(param0: ILogger): java.util.TimeZone;
            public nextList(param0: ILogger, param1: JsonDeserializer<any>): java.util.List<any>;
            public close(): void;
            public nextBooleanOrNull(): java.lang.Boolean;
            public nextUnknown(param0: ILogger, param1: java.util.Map<string,any>, param2: string): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonObjectSerializer extends java.lang.Object {
            public static class: java.lang.Class<JsonObjectSerializer>;
            public static OBJECT_PLACEHOLDER: string;
            public jsonReflectionObjectSerializer: JsonReflectionObjectSerializer;
            public constructor(param0: number);
            public serialize(param0: JsonObjectWriter, param1: ILogger, param2: any): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonObjectWriter extends vendor.gson.stream.JsonWriter {
            public static class: java.lang.Class<JsonObjectWriter>;
            public constructor(param0: java.io.Writer);
            public flush(): void;
            public name(param0: string): JsonObjectWriter;
            public value(param0: boolean): vendor.gson.stream.JsonWriter;
            public value(param0: ILogger, param1: any): JsonObjectWriter;
            public value(param0: java.lang.Boolean): vendor.gson.stream.JsonWriter;
            public value(param0: java.lang.Number): vendor.gson.stream.JsonWriter;
            public name(param0: string): vendor.gson.stream.JsonWriter;
            public value(param0: string): vendor.gson.stream.JsonWriter;
            public close(): void;
            public constructor(param0: java.io.Writer, param1: number);
            public value(param0: number): vendor.gson.stream.JsonWriter;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonReflectionObjectSerializer extends java.lang.Object {
            public static class: java.lang.Class<JsonReflectionObjectSerializer>;
            public serialize(param0: any, param1: ILogger): any;
            public serializeObject(param0: any, param1: ILogger): java.util.Map<string,any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonSerializable extends java.lang.Object {
            public static class: java.lang.Class<JsonSerializable>;
            /**
			 * Constructs a new instance of the io.sentry.JsonSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                serialize(param0: JsonObjectWriter, param1: ILogger): void;
            });
            public constructor();
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonSerializer extends java.lang.Object implements ISerializer {
            public static class: java.lang.Class<JsonSerializer>;
            public serialize(param0: SentryEnvelope, param1: java.io.OutputStream): void;
            public serialize(param0: java.util.Map<string,any>): string;
            public constructor(param0: SentryOptions);
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
            public serialize(param0: any, param1: java.io.Writer): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class JsonUnknown extends java.lang.Object {
            public static class: java.lang.Class<JsonUnknown>;
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
        export class MainEventProcessor extends java.lang.Object implements EventProcessor, java.io.Closeable {
            public static class: java.lang.Class<MainEventProcessor>;
            public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
            public constructor(param0: SentryOptions);
            public process(param0: SentryEvent, param1: Hint): SentryEvent;
            public close(): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class MeasurementUnit extends java.lang.Object {
            public static class: java.lang.Class<MeasurementUnit>;
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
            export class Custom extends java.lang.Object implements MeasurementUnit {
                public static class: java.lang.Class<Custom>;
                public name(): string;
                public apiName(): string;
                public constructor(param0: string);
            }
            export class Duration extends MeasurementUnit {
                public static class: java.lang.Class<Duration>;
                public static NANOSECOND: Duration;
                public static MICROSECOND: Duration;
                public static MILLISECOND: Duration;
                public static SECOND: Duration;
                public static MINUTE: Duration;
                public static HOUR: Duration;
                public static DAY: Duration;
                public static WEEK: Duration;
                public static values(): androidNative.Array<Duration>;
                public static valueOf(param0: string): Duration;
                public name(): string;
                public apiName(): string;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export class Fraction extends MeasurementUnit {
                public static class: java.lang.Class<Fraction>;
                public static RATIO: Fraction;
                public static PERCENT: Fraction;
                public static values(): androidNative.Array<Fraction>;
                public name(): string;
                public static valueOf(param0: string): Fraction;
                public apiName(): string;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export class Information extends MeasurementUnit {
                public static class: java.lang.Class<Information>;
                public static BIT: Information;
                public static BYTE: Information;
                public static KILOBYTE: Information;
                public static KIBIBYTE: Information;
                public static MEGABYTE: Information;
                public static MEBIBYTE: Information;
                public static GIGABYTE: Information;
                public static GIBIBYTE: Information;
                public static TERABYTE: Information;
                public static TEBIBYTE: Information;
                public static PETABYTE: Information;
                public static PEBIBYTE: Information;
                public static EXABYTE: Information;
                public static EXBIBYTE: Information;
                public name(): string;
                public static values(): androidNative.Array<Information>;
                public apiName(): string;
                public static valueOf(param0: string): Information;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpEnvelopeReader extends java.lang.Object implements IEnvelopeReader {
            public static class: java.lang.Class<NoOpEnvelopeReader>;
            public read(param0: java.io.InputStream): SentryEnvelope;
            public static getInstance(): NoOpEnvelopeReader;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpHub extends java.lang.Object implements IHub {
            public static class: java.lang.Class<NoOpHub>;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryId;
            public captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
            public isCrashedLastRun(): java.lang.Boolean;
            public getOptions(): SentryOptions;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
            public captureMessage(param0: string): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
            public addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
            public configureScope(param0: ScopeCallback): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
            public clone(): any;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public bindClient(param0: ISentryClient): void;
            public traceHeaders(): SentryTraceHeader;
            public popScope(): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public clone(): IHub;
            public captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
            public static getInstance(): NoOpHub;
            public startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
            public getSpan(): ISpan;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
            public setExtra(param0: string, param1: string): void;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Hint, param3: ProfilingTraceData): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public startSession(): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public removeTag(param0: string): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
            public setSpanContext(param0: java.lang.Throwable, param1: ISpan, param2: string): void;
            public startTransaction(param0: string, param1: string): ITransaction;
            public captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public startTransaction(param0: TransactionContext): ITransaction;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<NoOpLogger>;
            public static getInstance(): NoOpLogger;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public isEnabled(param0: SentryLevel): boolean;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
            public log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSentryClient extends java.lang.Object implements ISentryClient {
            public static class: java.lang.Class<NoOpSentryClient>;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Scope, param2: Hint): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint, param4: ProfilingTraceData): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public static getInstance(): NoOpSentryClient;
            public captureUserFeedback(param0: UserFeedback): void;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: Hint): protocol.SentryId;
            public isEnabled(): boolean;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureSession(param0: Session, param1: Hint): void;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction): protocol.SentryId;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSentryExecutorService extends java.lang.Object implements ISentryExecutorService {
            public static class: java.lang.Class<NoOpSentryExecutorService>;
            public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
            public close(param0: number): void;
            public static getInstance(): ISentryExecutorService;
            public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSerializer extends java.lang.Object implements ISerializer {
            public static class: java.lang.Class<NoOpSerializer>;
            public serialize(param0: SentryEnvelope, param1: java.io.OutputStream): void;
            public static getInstance(): NoOpSerializer;
            public serialize(param0: java.util.Map<string,any>): string;
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public deserialize(param0: java.io.Reader, param1: java.lang.Class<any>): any;
            public serialize(param0: any, param1: java.io.Writer): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSpan extends java.lang.Object implements ISpan {
            public static class: java.lang.Class<NoOpSpan>;
            public traceContext(): TraceContext;
            public finish(): void;
            public getData(param0: string): any;
            public setStatus(param0: SpanStatus): void;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public isFinished(): boolean;
            public getStatus(): SpanStatus;
            public setData(param0: string, param1: any): void;
            public static getInstance(): NoOpSpan;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public setOperation(param0: string): void;
            public startChild(param0: string, param1: string): ISpan;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getTag(param0: string): string;
            public getThrowable(): java.lang.Throwable;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpTransaction extends java.lang.Object implements ITransaction {
            public static class: java.lang.Class<NoOpTransaction>;
            public getEventId(): protocol.SentryId;
            public traceContext(): TraceContext;
            public finish(): void;
            public getData(param0: string): any;
            public scheduleFinish(): void;
            public setStatus(param0: SpanStatus): void;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public isFinished(): boolean;
            public getStatus(): SpanStatus;
            public getSamplingDecision(): TracesSamplingDecision;
            public setData(param0: string, param1: any): void;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public static getInstance(): NoOpTransaction;
            public isProfileSampled(): java.lang.Boolean;
            public setOperation(param0: string): void;
            public getTransactionNameSource(): protocol.TransactionNameSource;
            public startChild(param0: string, param1: string): ISpan;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getLatestActiveSpan(): Span;
            public getTag(param0: string): string;
            public getThrowable(): java.lang.Throwable;
            public getName(): string;
            public getSpans(): java.util.List<Span>;
            public isSampled(): java.lang.Boolean;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
            public setName(param0: string, param1: protocol.TransactionNameSource): void;
            public setName(param0: string): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpTransactionProfiler extends java.lang.Object implements ITransactionProfiler {
            public static class: java.lang.Class<NoOpTransactionProfiler>;
            public onTransactionFinish(param0: ITransaction): ProfilingTraceData;
            public static getInstance(): NoOpTransactionProfiler;
            public onTransactionStart(param0: ITransaction): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpTransportFactory extends java.lang.Object implements ITransportFactory {
            public static class: java.lang.Class<NoOpTransportFactory>;
            public static getInstance(): NoOpTransportFactory;
            public create(param0: SentryOptions, param1: RequestDetails): transport.ITransport;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class OptionsContainer<T>  extends java.lang.Object {
            public static class: java.lang.Class<OptionsContainer<any>>;
            public createInstance(): T;
            public static create(param0: java.lang.Class<any>): OptionsContainer<any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class OutboxSender extends DirectoryProcessor implements IEnvelopeSender {
            public static class: java.lang.Class<OutboxSender>;
            public processFile(param0: java.io.File, param1: Hint): void;
            public processEnvelopeFile(param0: string, param1: Hint): void;
            public constructor(param0: IHub, param1: IEnvelopeReader, param2: ISerializer, param3: ILogger, param4: number);
            public isRelevantFileName(param0: string): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ProfilingTraceData extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<ProfilingTraceData>;
            public static TRUNCATION_REASON_NORMAL: string;
            public static TRUNCATION_REASON_TIMEOUT: string;
            public static TRUNCATION_REASON_BACKGROUNDED: string;
            public setCpuArchitecture(param0: string): void;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public getAndroidApiLevel(): number;
            public setSampledProfile(param0: string): void;
            public getDeviceOsVersion(): string;
            public getProfileId(): string;
            public getTraceId(): string;
            public readDeviceCpuFrequencies(): void;
            public getTransactionId(): string;
            public isDeviceIsEmulator(): boolean;
            public setDevicePhysicalMemoryBytes(param0: string): void;
            public getTransactions(): java.util.List<ProfilingTransactionData>;
            public setTraceId(param0: string): void;
            public setDeviceOsBuildNumber(param0: string): void;
            public setTransactionName(param0: string): void;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public setDeviceLocale(param0: string): void;
            public getDeviceCpuFrequencies(): java.util.List<java.lang.Integer>;
            public setProfileId(param0: string): void;
            public constructor(param0: java.io.File, param1: java.util.List<ProfilingTransactionData>, param2: ITransaction, param3: string, param4: number, param5: string, param6: java.util.concurrent.Callable<java.util.List<java.lang.Integer>>, param7: string, param8: string, param9: string, param10: java.lang.Boolean, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string);
            public getCpuArchitecture(): string;
            public getTransactionName(): string;
            public getDeviceOsBuildNumber(): string;
            public getVersionCode(): string;
            public setEnvironment(param0: string): void;
            public setDeviceOsVersion(param0: string): void;
            public getDeviceOsName(): string;
            public getVersionName(): string;
            public getDurationNs(): string;
            public getTruncationReason(): string;
            public setVersionCode(param0: string): void;
            public getDeviceLocale(): string;
            public getPlatform(): string;
            public getSampledProfile(): string;
            public getDevicePhysicalMemoryBytes(): string;
            public setDeviceManufacturer(param0: string): void;
            public setDurationNs(param0: string): void;
            public setAndroidApiLevel(param0: number): void;
            public setVersionName(param0: string): void;
            public getEnvironment(): string;
            public setDeviceIsEmulator(param0: boolean): void;
            public setBuildId(param0: string): void;
            public setTransactionId(param0: string): void;
            public getTraceFile(): java.io.File;
            public constructor(param0: java.io.File, param1: ITransaction);
            public getBuildId(): string;
            public getDeviceModel(): string;
            public setDeviceCpuFrequencies(param0: java.util.List<java.lang.Integer>): void;
            public setDeviceModel(param0: string): void;
            public getUnknown(): java.util.Map<string,any>;
            public getDeviceManufacturer(): string;
        }
        export namespace ProfilingTraceData {
            export class Deserializer extends JsonDeserializer<ProfilingTraceData> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): ProfilingTraceData;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
                public static VERSION_NAME: string;
                public static VERSION_CODE: string;
                public static TRANSACTION_LIST: string;
                public static TRANSACTION_ID: string;
                public static TRACE_ID: string;
                public static PROFILE_ID: string;
                public static ENVIRONMENT: string;
                public static SAMPLED_PROFILE: string;
                public static TRUNCATION_REASON: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ProfilingTransactionData extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<ProfilingTransactionData>;
            public equals(param0: any): boolean;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public constructor();
            public getRelativeStartCpuMs(): java.lang.Long;
            public getTraceId(): string;
            public getRelativeEndCpuMs(): java.lang.Long;
            public getId(): string;
            public setId(param0: string): void;
            public getUnknown(): java.util.Map<string,any>;
            public getName(): string;
            public constructor(param0: ITransaction, param1: java.lang.Long, param2: java.lang.Long);
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
            export class Deserializer extends JsonDeserializer<ProfilingTransactionData> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): ProfilingTransactionData;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static ID: string;
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
        export class RequestDetails extends java.lang.Object {
            public static class: java.lang.Class<RequestDetails>;
            public getHeaders(): java.util.Map<string,string>;
            public constructor(param0: string, param1: java.util.Map<string,string>);
            public getUrl(): java.net.URL;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class RequestDetailsResolver extends java.lang.Object {
            public static class: java.lang.Class<RequestDetailsResolver>;
            public constructor(param0: SentryOptions);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SamplingContext extends java.lang.Object {
            public static class: java.lang.Class<SamplingContext>;
            public constructor(param0: TransactionContext, param1: CustomSamplingContext);
            public getCustomSamplingContext(): CustomSamplingContext;
            public getTransactionContext(): TransactionContext;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Scope extends java.lang.Object {
            public static class: java.lang.Class<Scope>;
            public setContexts(param0: string, param1: java.util.Collection<any>): void;
            public setContexts(param0: string, param1: string): void;
            public clearTransaction(): void;
            public getContexts(): protocol.Contexts;
            public setContexts(param0: string, param1: java.lang.Boolean): void;
            public getUser(): protocol.User;
            public getSpan(): ISpan;
            public removeContexts(param0: string): void;
            public withTransaction(param0: Scope.IWithTransaction): void;
            public setExtra(param0: string, param1: string): void;
            public constructor(param0: SentryOptions);
            public getTags(): java.util.Map<string,string>;
            public setLevel(param0: SentryLevel): void;
            public clearBreadcrumbs(): void;
            public addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public setTag(param0: string, param1: string): void;
            public clear(): void;
            public setRequest(param0: protocol.Request): void;
            public getTransaction(): ITransaction;
            public clearAttachments(): void;
            public setTransaction(param0: ITransaction): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public getTransactionName(): string;
            public setUser(param0: protocol.User): void;
            public getRequest(): protocol.Request;
            public addBreadcrumb(param0: Breadcrumb): void;
            public getLevel(): SentryLevel;
            public addAttachment(param0: Attachment): void;
            public setContexts(param0: string, param1: any): void;
            public setContexts(param0: string, param1: java.lang.Number): void;
            public setContexts(param0: string, param1: java.lang.Character): void;
            public addEventProcessor(param0: EventProcessor): void;
            public setContexts(param0: string, param1: androidNative.Array<any>): void;
        }
        export namespace Scope {
            export class IWithSession extends java.lang.Object {
                public static class: java.lang.Class<IWithSession>;
                /**
				 * Constructs a new instance of the io.sentry.Scope$IWithSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    accept(param0: Session): void;
                });
                public constructor();
                public accept(param0: Session): void;
            }
            export class IWithTransaction extends java.lang.Object {
                public static class: java.lang.Class<IWithTransaction>;
                /**
				 * Constructs a new instance of the io.sentry.Scope$IWithTransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    accept(param0: ITransaction): void;
                });
                public constructor();
                public accept(param0: ITransaction): void;
            }
            export class SessionPair extends java.lang.Object {
                public static class: java.lang.Class<SessionPair>;
                public getCurrent(): Session;
                public constructor(param0: Session, param1: Session);
                public getPrevious(): Session;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ScopeCallback extends java.lang.Object {
            public static class: java.lang.Class<ScopeCallback>;
            /**
			 * Constructs a new instance of the io.sentry.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                run(param0: Scope): void;
            });
            public constructor();
            public run(param0: Scope): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SendCachedEnvelopeFireAndForgetIntegration extends java.lang.Object implements Integration {
            public static class: java.lang.Class<SendCachedEnvelopeFireAndForgetIntegration>;
            public register(param0: IHub, param1: SentryOptions): void;
            public constructor(param0: SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
        }
        export namespace SendCachedEnvelopeFireAndForgetIntegration {
            export class SendFireAndForget extends java.lang.Object {
                public static class: java.lang.Class<SendFireAndForget>;
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
                public static class: java.lang.Class<SendFireAndForgetDirPath>;
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
                public static class: java.lang.Class<SendFireAndForgetFactory>;
                /**
				 * Constructs a new instance of the io.sentry.SendCachedEnvelopeFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    create(param0: IHub, param1: SentryOptions): SendFireAndForget;
                    hasValidPath(param0: string, param1: ILogger): boolean;
                    processDir(param0: DirectoryProcessor, param1: string, param2: ILogger): SendFireAndForget;
                    lambda$processDir$0(param0: ILogger, param1: string, param2: DirectoryProcessor, param3: java.io.File): void;
                });
                public constructor();
                public hasValidPath(param0: string, param1: ILogger): boolean;
                public create(param0: IHub, param1: SentryOptions): SendFireAndForget;
                public processDir(param0: DirectoryProcessor, param1: string, param2: ILogger): SendFireAndForget;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SendFireAndForgetEnvelopeSender extends java.lang.Object implements SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
            public static class: java.lang.Class<SendFireAndForgetEnvelopeSender>;
            public processDir(param0: DirectoryProcessor, param1: string, param2: ILogger): SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
            public create(param0: IHub, param1: SentryOptions): SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
            public constructor(param0: SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
            public hasValidPath(param0: string, param1: ILogger): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SendFireAndForgetOutboxSender extends java.lang.Object implements SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
            public static class: java.lang.Class<SendFireAndForgetOutboxSender>;
            public processDir(param0: DirectoryProcessor, param1: string, param2: ILogger): SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
            public create(param0: IHub, param1: SentryOptions): SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
            public constructor(param0: SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
            public hasValidPath(param0: string, param1: ILogger): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Sentry extends java.lang.Object {
            public static class: java.lang.Class<Sentry>;
            public static withScope(param0: ScopeCallback): void;
            public static init(param0: Sentry.OptionsConfiguration<SentryOptions>): void;
            public static startTransaction(param0: TransactionContext, param1: TransactionOptions): ITransaction;
            public static addBreadcrumb(param0: string, param1: string): void;
            public static setLevel(param0: SentryLevel): void;
            public static captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public static captureUserFeedback(param0: UserFeedback): void;
            public static startTransaction(param0: TransactionContext, param1: CustomSamplingContext): ITransaction;
            public static getSpan(): ISpan;
            public static startTransaction(param0: string, param1: string, param2: boolean): ITransaction;
            public static captureMessage(param0: string): protocol.SentryId;
            public static flush(param0: number): void;
            public static getCurrentHub(): IHub;
            public static captureEvent(param0: SentryEvent, param1: ScopeCallback): protocol.SentryId;
            public static startTransaction(param0: string, param1: string, param2: CustomSamplingContext): ITransaction;
            public static setCurrentHub(param0: IHub): void;
            public static setTransaction(param0: string): void;
            public static startTransaction(param0: string, param1: string, param2: string): ITransaction;
            public static captureException(param0: java.lang.Throwable, param1: ScopeCallback): protocol.SentryId;
            public static getLastEventId(): protocol.SentryId;
            public static captureMessage(param0: string, param1: SentryLevel, param2: ScopeCallback): protocol.SentryId;
            public static pushScope(): void;
            public static configureScope(param0: ScopeCallback): void;
            public static endSession(): void;
            public static init(param0: Sentry.OptionsConfiguration<SentryOptions>, param1: boolean): void;
            public static startTransaction(param0: TransactionContext, param1: boolean): ITransaction;
            public static bindClient(param0: ISentryClient): void;
            public static init(param0: string): void;
            public static captureException(param0: java.lang.Throwable, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public static removeTag(param0: string): void;
            public static captureMessage(param0: string, param1: ScopeCallback): protocol.SentryId;
            public static traceHeaders(): SentryTraceHeader;
            public static clearBreadcrumbs(): void;
            public static setUser(param0: protocol.User): void;
            public static popScope(): void;
            public static startSession(): void;
            public static captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public static startTransaction(param0: string, param1: string, param2: string, param3: boolean): ITransaction;
            public static addBreadcrumb(param0: string): void;
            public static captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public static isCrashedLastRun(): java.lang.Boolean;
            public static addBreadcrumb(param0: Breadcrumb): void;
            public static isEnabled(): boolean;
            public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>, param2: boolean): void;
            public static startTransaction(param0: TransactionContext): ITransaction;
            public static startTransaction(param0: TransactionContext, param1: CustomSamplingContext, param2: boolean): ITransaction;
            public static captureEvent(param0: SentryEvent): protocol.SentryId;
            public static captureException(param0: java.lang.Throwable): protocol.SentryId;
            public static removeExtra(param0: string): void;
            public static init(param0: SentryOptions): void;
            public static addBreadcrumb(param0: Breadcrumb, param1: Hint): void;
            public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>): void;
            public static setExtra(param0: string, param1: string): void;
            public static init(): void;
            public static startTransaction(param0: string, param1: string, param2: CustomSamplingContext, param3: boolean): ITransaction;
            public static setTag(param0: string, param1: string): void;
            public static close(): void;
            public static setFingerprint(param0: java.util.List<string>): void;
            public static captureEvent(param0: SentryEvent, param1: Hint, param2: ScopeCallback): protocol.SentryId;
            public static startTransaction(param0: string, param1: string): ITransaction;
        }
        export namespace Sentry {
            export class OptionsConfiguration<T>  extends java.lang.Object {
                public static class: java.lang.Class<OptionsConfiguration<any>>;
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
        export abstract class SentryBaseEvent extends java.lang.Object {
            public static class: java.lang.Class<SentryBaseEvent>;
            public static DEFAULT_PLATFORM: string;
            public throwable: java.lang.Throwable;
            public setTags(param0: java.util.Map<string,string>): void;
            public getSdk(): protocol.SdkVersion;
            public getEventId(): protocol.SentryId;
            public getPlatform(): string;
            public setServerName(param0: string): void;
            public getContexts(): protocol.Contexts;
            public getUser(): protocol.User;
            public addBreadcrumb(param0: string): void;
            public setPlatform(param0: string): void;
            public setSdk(param0: protocol.SdkVersion): void;
            public getRelease(): string;
            public getTags(): java.util.Map<string,string>;
            public setExtra(param0: string, param1: any): void;
            public getEnvironment(): string;
            public setDist(param0: string): void;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public getExtra(param0: string): any;
            public setRequest(param0: protocol.Request): void;
            public setExtras(param0: java.util.Map<string,any>): void;
            public removeExtra(param0: string): void;
            public constructor(param0: protocol.SentryId);
            public setEventId(param0: protocol.SentryId): void;
            public removeTag(param0: string): void;
            public constructor();
            public getDist(): string;
            public setUser(param0: protocol.User): void;
            public getTag(param0: string): string;
            public getRequest(): protocol.Request;
            public addBreadcrumb(param0: Breadcrumb): void;
            public getThrowable(): java.lang.Throwable;
            public setEnvironment(param0: string): void;
            public setRelease(param0: string): void;
            public getServerName(): string;
            public setBreadcrumbs(param0: java.util.List<Breadcrumb>): void;
            public getBreadcrumbs(): java.util.List<Breadcrumb>;
        }
        export namespace SentryBaseEvent {
            export class Deserializer extends java.lang.Object {
                public static class: java.lang.Class<Deserializer>;
                public deserializeValue(param0: SentryBaseEvent, param1: string, param2: JsonObjectReader, param3: ILogger): boolean;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
                public static EXTRA: string;
                public constructor();
            }
            export class Serializer extends java.lang.Object {
                public static class: java.lang.Class<Serializer>;
                public serialize(param0: SentryBaseEvent, param1: JsonObjectWriter, param2: ILogger): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryClient extends java.lang.Object implements ISentryClient {
            public static class: java.lang.Class<SentryClient>;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext): protocol.SentryId;
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: Hint): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: Scope, param2: Hint): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction, param1: TraceContext, param2: Scope, param3: Hint, param4: ProfilingTraceData): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: Hint): protocol.SentryId;
            public isEnabled(): boolean;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Hint): protocol.SentryId;
            public captureSession(param0: Session, param1: Hint): void;
            public captureEnvelope(param0: SentryEnvelope, param1: Hint): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: Hint): protocol.SentryId;
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureTransaction(param0: protocol.SentryTransaction): protocol.SentryId;
        }
        export namespace SentryClient {
            export class SortBreadcrumbsByDate extends java.util.Comparator<Breadcrumb> {
                public static class: java.lang.Class<SortBreadcrumbsByDate>;
                public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
                public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
                public static reverseOrder(): java.util.Comparator<any>;
                public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
                public compare(param0: Breadcrumb, param1: Breadcrumb): number;
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
            public static class: java.lang.Class<SentryCrashLastRunState>;
            public isCrashedLastRun(param0: string, param1: boolean): java.lang.Boolean;
            public static getInstance(): SentryCrashLastRunState;
            public reset(): void;
            public setCrashedLastRun(param0: boolean): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelope extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelope>;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion, param2: SentryEnvelopeItem);
            public static from(param0: ISerializer, param1: SentryBaseEvent, param2: protocol.SdkVersion): SentryEnvelope;
            public getHeader(): SentryEnvelopeHeader;
            public constructor(param0: SentryEnvelopeHeader, param1: java.lang.Iterable<SentryEnvelopeItem>);
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion, param2: java.lang.Iterable<SentryEnvelopeItem>);
            public getItems(): java.lang.Iterable<SentryEnvelopeItem>;
            public static from(param0: ISerializer, param1: Session, param2: protocol.SdkVersion): SentryEnvelope;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeHeader extends java.lang.Object implements JsonSerializable, JsonUnknown {
            public static class: java.lang.Class<SentryEnvelopeHeader>;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public getUnknown(): java.util.Map<string,any>;
            public getEventId(): protocol.SentryId;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion, param2: TraceContext);
            public constructor(param0: protocol.SentryId);
            public getSdkVersion(): protocol.SdkVersion;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion);
            public getTraceContext(): TraceContext;
            public constructor();
        }
        export namespace SentryEnvelopeHeader {
            export class Deserializer extends JsonDeserializer<SentryEnvelopeHeader> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SentryEnvelopeHeader;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static EVENT_ID: string;
                public static SDK: string;
                public static TRACE: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeItem extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelopeItem>;
            public static fromAttachment(param0: Attachment, param1: number): SentryEnvelopeItem;
            public static fromClientReport(param0: ISerializer, param1: clientreport.ClientReport): SentryEnvelopeItem;
            public static fromEvent(param0: ISerializer, param1: SentryBaseEvent): SentryEnvelopeItem;
            public static fromProfilingTrace(param0: ProfilingTraceData, param1: number, param2: ISerializer): SentryEnvelopeItem;
            public getData(): androidNative.Array<number>;
            public static fromSession(param0: ISerializer, param1: Session): SentryEnvelopeItem;
            public static fromUserFeedback(param0: ISerializer, param1: UserFeedback): SentryEnvelopeItem;
            public getEvent(param0: ISerializer): SentryEvent;
            public getHeader(): SentryEnvelopeItemHeader;
            public getTransaction(param0: ISerializer): protocol.SentryTransaction;
            public getClientReport(param0: ISerializer): clientreport.ClientReport;
        }
        export namespace SentryEnvelopeItem {
            export class CachedItem extends java.lang.Object {
                public static class: java.lang.Class<CachedItem>;
                public getBytes(): androidNative.Array<number>;
                public constructor(param0: java.util.concurrent.Callable<androidNative.Array<number>>);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeItemHeader extends java.lang.Object implements JsonSerializable, JsonUnknown {
            public static class: java.lang.Class<SentryEnvelopeItemHeader>;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public getUnknown(): java.util.Map<string,any>;
            public getLength(): number;
            public constructor(param0: SentryItemType, param1: number, param2: string, param3: string, param4: string);
            public getAttachmentType(): string;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public getFileName(): string;
            public getType(): SentryItemType;
            public getContentType(): string;
        }
        export namespace SentryEnvelopeItemHeader {
            export class Deserializer extends JsonDeserializer<SentryEnvelopeItemHeader> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SentryEnvelopeItemHeader;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
        export class SentryEvent extends SentryBaseEvent implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<SentryEvent>;
            public getThreads(): java.util.List<protocol.SentryThread>;
            public constructor(param0: java.lang.Throwable);
            public setUnknown(param0: java.util.Map<string,any>): void;
            public getLogger(): string;
            public setDebugMeta(param0: protocol.DebugMeta): void;
            public setThreads(param0: java.util.List<protocol.SentryThread>): void;
            public getTimestamp(): java.util.Date;
            public setLevel(param0: SentryLevel): void;
            public constructor(param0: java.util.Date);
            public setMessage(param0: protocol.Message): void;
            public setLogger(param0: string): void;
            public getDebugMeta(): protocol.DebugMeta;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public setExceptions(param0: java.util.List<protocol.SentryException>): void;
            public isErrored(): boolean;
            public constructor(param0: protocol.SentryId);
            public setTransaction(param0: string): void;
            public setFingerprints(param0: java.util.List<string>): void;
            public constructor();
            public isCrashed(): boolean;
            public getExceptions(): java.util.List<protocol.SentryException>;
            public getTransaction(): string;
            public getUnknown(): java.util.Map<string,any>;
            public setModule(param0: string, param1: string): void;
            public setModules(param0: java.util.Map<string,string>): void;
            public getLevel(): SentryLevel;
            public getModule(param0: string): string;
            public getFingerprints(): java.util.List<string>;
            public removeModule(param0: string): void;
            public getMessage(): protocol.Message;
        }
        export namespace SentryEvent {
            export class Deserializer extends JsonDeserializer<SentryEvent> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SentryEvent;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static TIMESTAMP: string;
                public static MESSAGE: string;
                public static LOGGER: string;
                public static THREADS: string;
                public static EXCEPTION: string;
                public static LEVEL: string;
                public static TRANSACTION: string;
                public static FINGERPRINT: string;
                public static MODULES: string;
                public static DEBUG_META: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryExceptionFactory extends java.lang.Object {
            public static class: java.lang.Class<SentryExceptionFactory>;
            public constructor(param0: SentryStackTraceFactory);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryExecutorService extends java.lang.Object implements ISentryExecutorService {
            public static class: java.lang.Class<SentryExecutorService>;
            public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
            public close(param0: number): void;
            public schedule(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryItemType extends JsonSerializable {
            public static class: java.lang.Class<SentryItemType>;
            public static Session: SentryItemType;
            public static Event: SentryItemType;
            public static UserFeedback: SentryItemType;
            public static Attachment: SentryItemType;
            public static Transaction: SentryItemType;
            public static Profile: SentryItemType;
            public static ClientReport: SentryItemType;
            public static Unknown: SentryItemType;
            public static resolve(param0: any): SentryItemType;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public static values(): androidNative.Array<SentryItemType>;
            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            public static valueOfLabel(param0: string): SentryItemType;
            public getItemType(): string;
            public static valueOf(param0: string): SentryItemType;
        }
        export namespace SentryItemType {
            export class Deserializer extends JsonDeserializer<SentryItemType> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SentryItemType;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryLevel extends JsonSerializable {
            public static class: java.lang.Class<SentryLevel>;
            public static DEBUG: SentryLevel;
            public static INFO: SentryLevel;
            public static WARNING: SentryLevel;
            public static ERROR: SentryLevel;
            public static FATAL: SentryLevel;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            public static valueOf(param0: string): SentryLevel;
            public static values(): androidNative.Array<SentryLevel>;
        }
        export namespace SentryLevel {
            export class Deserializer extends JsonDeserializer<SentryLevel> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SentryLevel;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryOptions extends java.lang.Object {
            public static class: java.lang.Class<SentryOptions>;
            public getBeforeBreadcrumb(): SentryOptions.BeforeBreadcrumbCallback;
            public isTracingEnabled(): boolean;
            public setProfilesSampleRate(param0: java.lang.Double): void;
            public getMaxAttachmentSize(): number;
            public isDebug(): boolean;
            public setMaxSpans(param0: number): void;
            public setEnableExternalConfiguration(param0: boolean): void;
            public getRelease(): string;
            public setEnableScopeSync(param0: boolean): void;
            public setMaxQueueSize(param0: number): void;
            public setLogger(param0: ILogger): void;
            /** @deprecated */
            public getTracingOrigins(): java.util.List<string>;
            public getMaxQueueSize(): number;
            public getProfilesSampler(): SentryOptions.ProfilesSamplerCallback;
            public getProfilingTracesDirPath(): string;
            public setSerializer(param0: ISerializer): void;
            public isSendClientReports(): boolean;
            public getConnectionTimeoutMillis(): number;
            public getReadTimeoutMillis(): number;
            public addIntegration(param0: Integration): void;
            public getDistinctId(): string;
            public getLogger(): ILogger;
            public getProguardUuid(): string;
            public constructor();
            public setDistinctId(param0: string): void;
            public getDiagnosticLevel(): SentryLevel;
            public getDist(): string;
            public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
            public getEventProcessors(): java.util.List<EventProcessor>;
            public setEnvironment(param0: string): void;
            public setTransportFactory(param0: ITransportFactory): void;
            public setMaxTraceFileSize(param0: number): void;
            public getServerName(): string;
            public getFlushTimeoutMillis(): number;
            public isEnableUncaughtExceptionHandler(): boolean;
            public setSendDefaultPii(param0: boolean): void;
            public getIdleTimeout(): java.lang.Long;
            public getShutdownTimeoutMillis(): number;
            public setEnableUncaughtExceptionHandler(param0: boolean): void;
            public setAttachServerName(param0: boolean): void;
            public merge(param0: ExternalOptions): void;
            /** @deprecated */
            public setTracingOrigins(param0: java.util.List<string>): void;
            public getProxy(): SentryOptions.Proxy;
            public isSendDefaultPii(): boolean;
            public setTransportGate(param0: transport.ITransportGate): void;
            public setConnectionTimeoutMillis(param0: number): void;
            public getTransportGate(): transport.ITransportGate;
            public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
            public setAttachThreads(param0: boolean): void;
            public getSdkVersion(): protocol.SdkVersion;
            public setEnableAutoSessionTracking(param0: boolean): void;
            public setDist(param0: string): void;
            public getExecutorService(): ISentryExecutorService;
            public getMaxSpans(): number;
            /** @deprecated */
            public setTraceSampling(param0: boolean): void;
            public setTracePropagationTargets(param0: java.util.List<string>): void;
            public getDsn(): string;
            public setTransactionProfiler(param0: ITransactionProfiler): void;
            public setProxy(param0: SentryOptions.Proxy): void;
            public getSampleRate(): java.lang.Double;
            public setEnvelopeReader(param0: IEnvelopeReader): void;
            public setSampleRate(param0: java.lang.Double): void;
            public getIntegrations(): java.util.List<Integration>;
            public getMaxCacheItems(): number;
            public setMaxCacheItems(param0: number): void;
            public getMaxDepth(): number;
            public setReadTimeoutMillis(param0: number): void;
            public setMaxAttachmentSize(param0: number): void;
            public setEnableNdk(param0: boolean): void;
            public setTracesSampler(param0: SentryOptions.TracesSamplerCallback): void;
            public setSdkVersion(param0: protocol.SdkVersion): void;
            /** @deprecated */
            public setProfilingEnabled(param0: boolean): void;
            public getTracesSampler(): SentryOptions.TracesSamplerCallback;
            public setServerName(param0: string): void;
            public setShutdownTimeoutMillis(param0: number): void;
            public setTracesSampleRate(param0: java.lang.Double): void;
            public getContextTags(): java.util.List<string>;
            public getInAppIncludes(): java.util.List<string>;
            public getTransportFactory(): ITransportFactory;
            /** @deprecated */
            public getShutdownTimeout(): number;
            public setEnableShutdownHook(param0: boolean): void;
            public getProfilesSampleRate(): java.lang.Double;
            public isTraceSampling(): boolean;
            public setSentryClientName(param0: string): void;
            public isEnableExternalConfiguration(): boolean;
            public addInAppInclude(param0: string): void;
            public setPrintUncaughtStackTrace(param0: boolean): void;
            public setSendClientReports(param0: boolean): void;
            public setMaxRequestBodySize(param0: SentryOptions.RequestSize): void;
            public isEnableShutdownHook(): boolean;
            public getEnvelopeDiskCache(): cache.IEnvelopeCache;
            public getMaxBreadcrumbs(): number;
            public setProguardUuid(param0: string): void;
            public isEnableNdk(): boolean;
            public isEnableDeduplication(): boolean;
            public setAttachStacktrace(param0: boolean): void;
            public isEnableScopeSync(): boolean;
            public getSerializer(): ISerializer;
            public getOutboxPath(): string;
            public setEnvelopeDiskCache(param0: cache.IEnvelopeCache): void;
            public isProfilingEnabled(): boolean;
            public getEnvelopeReader(): IEnvelopeReader;
            public setRelease(param0: string): void;
            public isPrintUncaughtStackTrace(): boolean;
            public getSentryClientName(): string;
            public addScopeObserver(param0: IScopeObserver): void;
            public getCacheDirPath(): string;
            /** @deprecated */
            public addTracingOrigin(param0: string): void;
            public addContextTag(param0: string): void;
            public getClientReportRecorder(): clientreport.IClientReportRecorder;
            public setBeforeBreadcrumb(param0: SentryOptions.BeforeBreadcrumbCallback): void;
            public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
            public setDebug(param0: boolean): void;
            public setProfilesSampler(param0: SentryOptions.ProfilesSamplerCallback): void;
            public getTracePropagationTargets(): java.util.List<string>;
            public addInAppExclude(param0: string): void;
            public isAttachThreads(): boolean;
            public setBeforeSend(param0: SentryOptions.BeforeSendCallback): void;
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
            public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
            public getEnvironment(): string;
            public setTag(param0: string, param1: string): void;
            public isEnableAutoSessionTracking(): boolean;
            public setIdleTimeout(param0: java.lang.Long): void;
            public getBeforeSend(): SentryOptions.BeforeSendCallback;
            public setEnableDeduplication(param0: boolean): void;
            public setDsn(param0: string): void;
            public isAttachServerName(): boolean;
            public getMaxRequestBodySize(): SentryOptions.RequestSize;
            public getTransactionProfiler(): ITransactionProfiler;
            public isAttachStacktrace(): boolean;
            public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
            public setMaxBreadcrumbs(param0: number): void;
            public setDiagnosticLevel(param0: SentryLevel): void;
            public addEventProcessor(param0: EventProcessor): void;
        }
        export namespace SentryOptions {
            export class BeforeBreadcrumbCallback extends java.lang.Object {
                public static class: java.lang.Class<BeforeBreadcrumbCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    execute(param0: Breadcrumb, param1: Hint): Breadcrumb;
                });
                public constructor();
                public execute(param0: Breadcrumb, param1: Hint): Breadcrumb;
            }
            export class BeforeSendCallback extends java.lang.Object {
                public static class: java.lang.Class<BeforeSendCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    execute(param0: SentryEvent, param1: Hint): SentryEvent;
                });
                public constructor();
                public execute(param0: SentryEvent, param1: Hint): SentryEvent;
            }
            export class ProfilesSamplerCallback extends java.lang.Object {
                public static class: java.lang.Class<ProfilesSamplerCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$ProfilesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    sample(param0: SamplingContext): java.lang.Double;
                });
                public constructor();
                public sample(param0: SamplingContext): java.lang.Double;
            }
            export class Proxy extends java.lang.Object {
                public static class: java.lang.Class<Proxy>;
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
                public static class: java.lang.Class<RequestSize>;
                public static NONE: RequestSize;
                public static SMALL: RequestSize;
                public static MEDIUM: RequestSize;
                public static ALWAYS: RequestSize;
                public static valueOf(param0: string): RequestSize;
                public static values(): androidNative.Array<RequestSize>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
            export class TracesSamplerCallback extends java.lang.Object {
                public static class: java.lang.Class<TracesSamplerCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$TracesSamplerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    sample(param0: SamplingContext): java.lang.Double;
                });
                public constructor();
                public sample(param0: SamplingContext): java.lang.Double;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryRuntimeEventProcessor extends java.lang.Object implements EventProcessor {
            public static class: java.lang.Class<SentryRuntimeEventProcessor>;
            public constructor(param0: string, param1: string);
            public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
            public process(param0: SentryEvent, param1: Hint): SentryEvent;
            public constructor();
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryStackTraceFactory extends java.lang.Object {
            public static class: java.lang.Class<SentryStackTraceFactory>;
            public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryThreadFactory extends java.lang.Object {
            public static class: java.lang.Class<SentryThreadFactory>;
            public constructor(param0: SentryStackTraceFactory, param1: SentryOptions);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryTraceHeader extends java.lang.Object {
            public static class: java.lang.Class<SentryTraceHeader>;
            public static SENTRY_TRACE_HEADER: string;
            public getName(): string;
            public isSampled(): java.lang.Boolean;
            public constructor(param0: protocol.SentryId, param1: SpanId, param2: java.lang.Boolean);
            public getValue(): string;
            public getTraceId(): protocol.SentryId;
            public constructor(param0: string);
            public getSpanId(): SpanId;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryTracer extends java.lang.Object implements ITransaction {
            public static class: java.lang.Class<SentryTracer>;
            public constructor(param0: TransactionContext, param1: IHub, param2: boolean, param3: TransactionFinishedCallback);
            public getEventId(): protocol.SentryId;
            public finish(): void;
            public traceContext(): TraceContext;
            public getData(param0: string): any;
            public scheduleFinish(): void;
            public setStatus(param0: SpanStatus): void;
            public getData(): java.util.Map<string,any>;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public isFinished(): boolean;
            public getChildren(): java.util.List<Span>;
            public constructor(param0: TransactionContext, param1: IHub);
            public getStatus(): SpanStatus;
            public setData(param0: string, param1: any): void;
            public getSamplingDecision(): TracesSamplingDecision;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public getStartTimestamp(): java.util.Date;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public isProfileSampled(): java.lang.Boolean;
            public setOperation(param0: string): void;
            public startChild(param0: string, param1: string): ISpan;
            public getTransactionNameSource(): protocol.TransactionNameSource;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getHighPrecisionTimestamp(): java.lang.Double;
            public getTag(param0: string): string;
            public getLatestActiveSpan(): Span;
            public getTimestamp(): java.lang.Double;
            public getThrowable(): java.lang.Throwable;
            public getName(): string;
            public getSpans(): java.util.List<Span>;
            public isSampled(): java.lang.Boolean;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
            public setName(param0: string, param1: protocol.TransactionNameSource): void;
            public setName(param0: string): void;
        }
        export namespace SentryTracer {
            export class FinishStatus extends java.lang.Object {
                public static class: java.lang.Class<FinishStatus>;
            }
            export class SpanByTimestampComparator extends java.util.Comparator<Span> {
                public static class: java.lang.Class<SpanByTimestampComparator>;
                public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
                public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
                public static reverseOrder(): java.util.Comparator<any>;
                public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
                public compare(param0: any, param1: any): number;
                public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
                public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
                public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
                public compare(param0: Span, param1: Span): number;
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
        export class SentryValues<T>  extends java.lang.Object {
            public static class: java.lang.Class<SentryValues<any>>;
            public getValues(): java.util.List<T>;
        }
        export namespace SentryValues {
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static VALUES: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Session extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<Session>;
            public end(param0: java.util.Date): void;
            public constructor(param0: Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string);
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public setInitAsTrue(): void;
            public getDistinctId(): string;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public end(): void;
            public getUserAgent(): string;
            public getStarted(): java.util.Date;
            public getSessionId(): java.util.UUID;
            public errorCount(): number;
            public update(param0: Session.State, param1: string, param2: boolean): boolean;
            public getIpAddress(): string;
            public getDuration(): java.lang.Double;
            public getInit(): java.lang.Boolean;
            public getRelease(): string;
            public constructor(param0: string, param1: protocol.User, param2: string, param3: string);
            public getUnknown(): java.util.Map<string,any>;
            public clone(): any;
            public getSequence(): java.lang.Long;
            public getStatus(): Session.State;
            public getTimestamp(): java.util.Date;
            public clone(): Session;
            public getEnvironment(): string;
        }
        export namespace Session {
            export class Deserializer extends JsonDeserializer<Session> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): Session;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
                public constructor();
            }
            export class State {
                public static class: java.lang.Class<State>;
                public static Ok: State;
                public static Exited: State;
                public static Crashed: State;
                public static Abnormal: State;
                public static valueOf(param0: string): State;
                public static values(): androidNative.Array<State>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ShutdownHookIntegration extends java.lang.Object implements Integration, java.io.Closeable {
            public static class: java.lang.Class<ShutdownHookIntegration>;
            public register(param0: IHub, param1: SentryOptions): void;
            public constructor();
            public constructor(param0: java.lang.Runtime);
            public close(): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Span extends java.lang.Object implements ISpan {
            public static class: java.lang.Class<Span>;
            public constructor(param0: TransactionContext, param1: SentryTracer, param2: IHub, param3: java.util.Date);
            public traceContext(): TraceContext;
            public finish(): void;
            public getTraceId(): protocol.SentryId;
            public getData(param0: string): any;
            public setStatus(param0: SpanStatus): void;
            public getParentSpanId(): SpanId;
            public getData(): java.util.Map<string,any>;
            public toBaggageHeader(param0: java.util.List<string>): BaggageHeader;
            public isFinished(): boolean;
            public getTags(): java.util.Map<string,string>;
            public getStatus(): SpanStatus;
            public getSamplingDecision(): TracesSamplingDecision;
            public setData(param0: string, param1: any): void;
            public toSentryTrace(): SentryTraceHeader;
            public getOperation(): string;
            public getStartTimestamp(): java.util.Date;
            public setTag(param0: string, param1: string): void;
            public setThrowable(param0: java.lang.Throwable): void;
            public isProfileSampled(): java.lang.Boolean;
            public setOperation(param0: string): void;
            public startChild(param0: string, param1: string): ISpan;
            public setDescription(param0: string): void;
            public finish(param0: SpanStatus): void;
            public setMeasurement(param0: string, param1: java.lang.Number): void;
            public setMeasurement(param0: string, param1: java.lang.Number, param2: MeasurementUnit): void;
            public getSpanContext(): SpanContext;
            public getHighPrecisionTimestamp(): java.lang.Double;
            public getTag(param0: string): string;
            public getSpanId(): SpanId;
            public getTimestamp(): java.lang.Double;
            public getThrowable(): java.lang.Throwable;
            public isSampled(): java.lang.Boolean;
            public startChild(param0: string, param1: string, param2: java.util.Date): ISpan;
            public getDescription(): string;
            public startChild(param0: string): ISpan;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SpanContext extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<SpanContext>;
            public static TYPE: string;
            public op: string;
            public description: string;
            public status: SpanStatus;
            public tags: java.util.Map<string,string>;
            public getProfileSampled(): java.lang.Boolean;
            public constructor(param0: string, param1: TracesSamplingDecision);
            public setUnknown(param0: java.util.Map<string,any>): void;
            public constructor(param0: protocol.SentryId, param1: SpanId, param2: string, param3: SpanId, param4: TracesSamplingDecision);
            public getTraceId(): protocol.SentryId;
            public setStatus(param0: SpanStatus): void;
            public getParentSpanId(): SpanId;
            public getTags(): java.util.Map<string,string>;
            public getStatus(): SpanStatus;
            public getSamplingDecision(): TracesSamplingDecision;
            public getOperation(): string;
            public constructor(param0: string);
            public constructor(param0: protocol.SentryId, param1: SpanId, param2: SpanId, param3: string, param4: string, param5: TracesSamplingDecision, param6: SpanStatus);
            public setTag(param0: string, param1: string): void;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public constructor(param0: SpanContext);
            public setOperation(param0: string): void;
            public setSamplingDecision(param0: TracesSamplingDecision): void;
            public getSampled(): java.lang.Boolean;
            public setDescription(param0: string): void;
            public getSpanId(): SpanId;
            public getUnknown(): java.util.Map<string,any>;
            public setSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
            public getDescription(): string;
            public setSampled(param0: java.lang.Boolean): void;
        }
        export namespace SpanContext {
            export class Deserializer extends JsonDeserializer<SpanContext> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SpanContext;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static TRACE_ID: string;
                public static SPAN_ID: string;
                public static PARENT_SPAN_ID: string;
                public static OP: string;
                public static DESCRIPTION: string;
                public static STATUS: string;
                public static TAGS: string;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SpanFinishedCallback extends java.lang.Object {
            public static class: java.lang.Class<SpanFinishedCallback>;
            /**
			 * Constructs a new instance of the io.sentry.SpanFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                execute(param0: Span): void;
            });
            public constructor();
            public execute(param0: Span): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SpanId extends java.lang.Object implements JsonSerializable {
            public static class: java.lang.Class<SpanId>;
            public static EMPTY_ID: SpanId;
            public equals(param0: any): boolean;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public toString(): string;
            public constructor();
            public constructor(param0: string);
            public hashCode(): number;
        }
        export namespace SpanId {
            export class Deserializer extends JsonDeserializer<SpanId> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SpanId;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SpanStatus extends JsonSerializable {
            public static class: java.lang.Class<SpanStatus>;
            public static OK: SpanStatus;
            public static CANCELLED: SpanStatus;
            public static INTERNAL_ERROR: SpanStatus;
            public static UNKNOWN: SpanStatus;
            public static UNKNOWN_ERROR: SpanStatus;
            public static INVALID_ARGUMENT: SpanStatus;
            public static DEADLINE_EXCEEDED: SpanStatus;
            public static NOT_FOUND: SpanStatus;
            public static ALREADY_EXISTS: SpanStatus;
            public static PERMISSION_DENIED: SpanStatus;
            public static RESOURCE_EXHAUSTED: SpanStatus;
            public static FAILED_PRECONDITION: SpanStatus;
            public static ABORTED: SpanStatus;
            public static OUT_OF_RANGE: SpanStatus;
            public static UNIMPLEMENTED: SpanStatus;
            public static UNAVAILABLE: SpanStatus;
            public static DATA_LOSS: SpanStatus;
            public static UNAUTHENTICATED: SpanStatus;
            public static valueOf(param0: string): SpanStatus;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            public static fromHttpStatusCode(param0: number): SpanStatus;
            public static fromHttpStatusCode(param0: java.lang.Integer, param1: SpanStatus): SpanStatus;
            public static values(): androidNative.Array<SpanStatus>;
        }
        export namespace SpanStatus {
            export class Deserializer extends JsonDeserializer<SpanStatus> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): SpanStatus;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Stack extends java.lang.Object {
            public static class: java.lang.Class<Stack>;
            public constructor(param0: ILogger, param1: Stack.StackItem);
            public constructor(param0: Stack);
        }
        export namespace Stack {
            export class StackItem extends java.lang.Object {
                public static class: java.lang.Class<StackItem>;
                public getOptions(): SentryOptions;
                public getClient(): ISentryClient;
                public getScope(): Scope;
                public setClient(param0: ISentryClient): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SynchronizedCollection<E>  extends java.lang.Object {
            public static class: java.lang.Class<SynchronizedCollection<any>>;
            public equals(param0: any): boolean;
            public iterator(): java.util.Iterator<E>;
            public decorated(): java.util.Collection<E>;
            public spliterator(): java.util.Spliterator<E>;
            public toArray(): androidNative.Array<any>;
            public contains(param0: any): boolean;
            public stream(): java.util.stream.Stream<E>;
            public iterator(): java.util.Iterator<any>;
            public clear(): void;
            public isEmpty(): boolean;
            public size(): number;
            public parallelStream(): java.util.stream.Stream<E>;
            public add(param0: E): boolean;
            public static synchronizedCollection(param0: java.util.Collection<any>): SynchronizedCollection<any>;
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
        export class SynchronizedQueue<E>  extends SynchronizedCollection<any> implements java.util.Queue<any>  {
            public static class: java.lang.Class<SynchronizedQueue<any>>;
            public equals(param0: any): boolean;
            public stream(): java.util.stream.Stream<any>;
            public toArray(): androidNative.Array<any>;
            public decorated(): java.util.Queue<any>;
            public contains(param0: any): boolean;
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
        export class SystemOutLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<SystemOutLogger>;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public isEnabled(param0: SentryLevel): boolean;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
            public constructor();
            public log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TraceContext extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<TraceContext>;
            public getRelease(): string;
            public getPublicKey(): string;
            public getUserSegment(): string;
            public getTransaction(): string;
            public getUnknown(): java.util.Map<string,any>;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public getSampleRate(): string;
            public getTraceId(): protocol.SentryId;
            public getEnvironment(): string;
            public getUserId(): string;
        }
        export namespace TraceContext {
            export class Deserializer extends JsonDeserializer<TraceContext> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): TraceContext;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
                public static TRACE_ID: string;
                public static PUBLIC_KEY: string;
                public static RELEASE: string;
                public static ENVIRONMENT: string;
                public static USER: string;
                public static USER_ID: string;
                public static USER_SEGMENT: string;
                public static TRANSACTION: string;
                public static SAMPLE_RATE: string;
                public constructor();
            }
            export class TraceContextUser extends java.lang.Object implements JsonUnknown {
                public static class: java.lang.Class<TraceContextUser>;
                public getId(): string;
                public getSegment(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public getUnknown(): java.util.Map<string,any>;
            }
            export namespace TraceContextUser {
                export class Deserializer extends JsonDeserializer<TraceContextUser> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): TraceContextUser;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static ID: string;
                    public static SEGMENT: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TracePropagationTargets extends java.lang.Object {
            public static class: java.lang.Class<TracePropagationTargets>;
            public static contain(param0: java.util.List<string>, param1: string): boolean;
            public constructor();
            public static contain(param0: java.util.List<string>, param1: java.net.URI): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TracesSampler extends java.lang.Object {
            public static class: java.lang.Class<TracesSampler>;
            public constructor(param0: SentryOptions);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TracesSamplingDecision extends java.lang.Object {
            public static class: java.lang.Class<TracesSamplingDecision>;
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
        export class TransactionContext extends SpanContext {
            public static class: java.lang.Class<TransactionContext>;
            public getBaggage(): Baggage;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public constructor(param0: SpanContext);
            public constructor(param0: string, param1: TracesSamplingDecision);
            public getTransactionNameSource(): protocol.TransactionNameSource;
            public setUnknown(param0: java.util.Map<string,any>): void;
            public static fromSentryTrace(param0: string, param1: protocol.TransactionNameSource, param2: string, param3: SentryTraceHeader): TransactionContext;
            public setParentSampled(param0: java.lang.Boolean, param1: java.lang.Boolean): void;
            public constructor(param0: string, param1: protocol.TransactionNameSource, param2: string, param3: TracesSamplingDecision);
            public constructor(param0: protocol.SentryId, param1: SpanId, param2: string, param3: SpanId, param4: TracesSamplingDecision);
            public static fromSentryTrace(param0: string, param1: string, param2: SentryTraceHeader): TransactionContext;
            public constructor(param0: string, param1: string);
            public getUnknown(): java.util.Map<string,any>;
            public getName(): string;
            public constructor(param0: string, param1: string, param2: TracesSamplingDecision);
            public getParentSamplingDecision(): TracesSamplingDecision;
            public setParentSampled(param0: java.lang.Boolean): void;
            public constructor(param0: string, param1: protocol.TransactionNameSource, param2: string);
            public getParentSampled(): java.lang.Boolean;
            public constructor(param0: string);
            public static fromSentryTrace(param0: string, param1: protocol.TransactionNameSource, param2: string, param3: SentryTraceHeader, param4: Baggage): TransactionContext;
            public constructor(param0: protocol.SentryId, param1: SpanId, param2: SpanId, param3: string, param4: string, param5: TracesSamplingDecision, param6: SpanStatus);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TransactionFinishedCallback extends java.lang.Object {
            public static class: java.lang.Class<TransactionFinishedCallback>;
            /**
			 * Constructs a new instance of the io.sentry.TransactionFinishedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
            public constructor(implementation: {
                execute(param0: ITransaction): void;
            });
            public constructor();
            public execute(param0: ITransaction): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TransactionOptions extends java.lang.Object {
            public static class: java.lang.Class<TransactionOptions>;
            public isBindToScope(): boolean;
            public setTransactionFinishedCallback(param0: TransactionFinishedCallback): void;
            public isWaitForChildren(): boolean;
            public setIdleTimeout(param0: java.lang.Long): void;
            public getTransactionFinishedCallback(): TransactionFinishedCallback;
            public setCustomSamplingContext(param0: CustomSamplingContext): void;
            public setTrimEnd(param0: boolean): void;
            public constructor();
            public getCustomSamplingContext(): CustomSamplingContext;
            public setWaitForChildren(param0: boolean): void;
            public setStartTimestamp(param0: java.util.Date): void;
            public getStartTimestamp(): java.util.Date;
            public getIdleTimeout(): java.lang.Long;
            public isTrimEnd(): boolean;
            public setBindToScope(param0: boolean): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class TypeCheckHint extends java.lang.Object {
            public static class: java.lang.Class<TypeCheckHint>;
            public static SENTRY_TYPE_CHECK_HINT: string;
            public static SENTRY_SYNTHETIC_EXCEPTION: string;
            public static ANDROID_ACTIVITY: string;
            public static ANDROID_CONFIGURATION: string;
            public static ANDROID_INTENT: string;
            public static ANDROID_SENSOR_EVENT: string;
            public static ANDROID_MOTION_EVENT: string;
            public static ANDROID_VIEW: string;
            public static ANDROID_FRAGMENT: string;
            public static ANDROID_NAV_DESTINATION: string;
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
            public static class: java.lang.Class<UncaughtExceptionHandler>;
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
            export class Adapter extends java.lang.Object implements UncaughtExceptionHandler {
                public static class: java.lang.Class<Adapter>;
                public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
                public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class UncaughtExceptionHandlerIntegration extends java.lang.Object implements Integration, java.lang.Thread.UncaughtExceptionHandler, java.io.Closeable {
            public static class: java.lang.Class<UncaughtExceptionHandlerIntegration>;
            public register(param0: IHub, param1: SentryOptions): void;
            public constructor();
            public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
            public close(): void;
        }
        export namespace UncaughtExceptionHandlerIntegration {
            export class UncaughtExceptionHint extends java.lang.Object implements hints.DiskFlushNotification, hints.Flushable, hints.SessionEnd {
                public static class: java.lang.Class<UncaughtExceptionHint>;
                public markFlushed(): void;
                public waitFlush(): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class UserFeedback extends java.lang.Object implements JsonUnknown, JsonSerializable {
            public static class: java.lang.Class<UserFeedback>;
            public setEmail(param0: string): void;
            public serialize(param0: JsonObjectWriter, param1: ILogger): void;
            public getEventId(): protocol.SentryId;
            public constructor(param0: protocol.SentryId);
            public setUnknown(param0: java.util.Map<string,any>): void;
            public getComments(): string;
            public setComments(param0: string): void;
            public constructor(param0: protocol.SentryId, param1: string, param2: string, param3: string);
            public getUnknown(): java.util.Map<string,any>;
            public toString(): string;
            public getName(): string;
            public setName(param0: string): void;
            public getEmail(): string;
        }
        export namespace UserFeedback {
            export class Deserializer extends JsonDeserializer<UserFeedback> {
                public static class: java.lang.Class<Deserializer>;
                public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                public deserialize(param0: JsonObjectReader, param1: ILogger): UserFeedback;
                public constructor();
            }
            export class JsonKeys extends java.lang.Object {
                public static class: java.lang.Class<JsonKeys>;
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
                public static class: java.lang.Class<R>;
            }
            export namespace R {
                export class anim extends java.lang.Object {
                    public static class: java.lang.Class<anim>;
                    public static fragment_fast_out_extra_slow_in: number;
                }
                export class animator extends java.lang.Object {
                    public static class: java.lang.Class<animator>;
                    public static fragment_close_enter: number;
                    public static fragment_close_exit: number;
                    public static fragment_fade_enter: number;
                    public static fragment_fade_exit: number;
                    public static fragment_open_enter: number;
                    public static fragment_open_exit: number;
                }
                export class attr extends java.lang.Object {
                    public static class: java.lang.Class<attr>;
                    public static alpha: number;
                    public static font: number;
                    public static fontProviderAuthority: number;
                    public static fontProviderCerts: number;
                    public static fontProviderFetchStrategy: number;
                    public static fontProviderFetchTimeout: number;
                    public static fontProviderPackage: number;
                    public static fontProviderQuery: number;
                    public static fontStyle: number;
                    public static fontVariationSettings: number;
                    public static fontWeight: number;
                    public static ttcIndex: number;
                }
                export class color extends java.lang.Object {
                    public static class: java.lang.Class<color>;
                    public static androidx_core_ripple_material_light: number;
                    public static androidx_core_secondary_text_default_material_light: number;
                    public static notification_action_color_filter: number;
                    public static notification_icon_bg_color: number;
                    public static ripple_material_light: number;
                    public static secondary_text_default_material_light: number;
                }
                export class dimen extends java.lang.Object {
                    public static class: java.lang.Class<dimen>;
                    public static compat_button_inset_horizontal_material: number;
                    public static compat_button_inset_vertical_material: number;
                    public static compat_button_padding_horizontal_material: number;
                    public static compat_button_padding_vertical_material: number;
                    public static compat_control_corner_material: number;
                    public static compat_notification_large_icon_max_height: number;
                    public static compat_notification_large_icon_max_width: number;
                    public static notification_action_icon_size: number;
                    public static notification_action_text_size: number;
                    public static notification_big_circle_margin: number;
                    public static notification_content_margin_start: number;
                    public static notification_large_icon_height: number;
                    public static notification_large_icon_width: number;
                    public static notification_main_column_padding_top: number;
                    public static notification_media_narrow_margin: number;
                    public static notification_right_icon_size: number;
                    public static notification_right_side_padding_top: number;
                    public static notification_small_icon_background_padding: number;
                    public static notification_small_icon_size_as_large: number;
                    public static notification_subtext_size: number;
                    public static notification_top_pad: number;
                    public static notification_top_pad_large_text: number;
                }
                export class drawable extends java.lang.Object {
                    public static class: java.lang.Class<drawable>;
                    public static notification_action_background: number;
                    public static notification_bg: number;
                    public static notification_bg_low: number;
                    public static notification_bg_low_normal: number;
                    public static notification_bg_low_pressed: number;
                    public static notification_bg_normal: number;
                    public static notification_bg_normal_pressed: number;
                    public static notification_icon_background: number;
                    public static notification_template_icon_bg: number;
                    public static notification_template_icon_low_bg: number;
                    public static notification_tile_bg: number;
                    public static notify_panel_notification_icon_bg: number;
                }
                export class id extends java.lang.Object {
                    public static class: java.lang.Class<id>;
                    public static accessibility_action_clickable_span: number;
                    public static accessibility_custom_action_0: number;
                    public static accessibility_custom_action_1: number;
                    public static accessibility_custom_action_10: number;
                    public static accessibility_custom_action_11: number;
                    public static accessibility_custom_action_12: number;
                    public static accessibility_custom_action_13: number;
                    public static accessibility_custom_action_14: number;
                    public static accessibility_custom_action_15: number;
                    public static accessibility_custom_action_16: number;
                    public static accessibility_custom_action_17: number;
                    public static accessibility_custom_action_18: number;
                    public static accessibility_custom_action_19: number;
                    public static accessibility_custom_action_2: number;
                    public static accessibility_custom_action_20: number;
                    public static accessibility_custom_action_21: number;
                    public static accessibility_custom_action_22: number;
                    public static accessibility_custom_action_23: number;
                    public static accessibility_custom_action_24: number;
                    public static accessibility_custom_action_25: number;
                    public static accessibility_custom_action_26: number;
                    public static accessibility_custom_action_27: number;
                    public static accessibility_custom_action_28: number;
                    public static accessibility_custom_action_29: number;
                    public static accessibility_custom_action_3: number;
                    public static accessibility_custom_action_30: number;
                    public static accessibility_custom_action_31: number;
                    public static accessibility_custom_action_4: number;
                    public static accessibility_custom_action_5: number;
                    public static accessibility_custom_action_6: number;
                    public static accessibility_custom_action_7: number;
                    public static accessibility_custom_action_8: number;
                    public static accessibility_custom_action_9: number;
                    public static action_container: number;
                    public static action_divider: number;
                    public static action_image: number;
                    public static action_text: number;
                    public static actions: number;
                    public static async: number;
                    public static blocking: number;
                    public static chronometer: number;
                    public static dialog_button: number;
                    public static forever: number;
                    public static fragment_container_view_tag: number;
                    public static icon: number;
                    public static icon_group: number;
                    public static info: number;
                    public static italic: number;
                    public static line1: number;
                    public static line3: number;
                    public static normal: number;
                    public static notification_background: number;
                    public static notification_main_column: number;
                    public static notification_main_column_container: number;
                    public static right_icon: number;
                    public static right_side: number;
                    public static special_effects_controller_view_tag: number;
                    public static tag_accessibility_actions: number;
                    public static tag_accessibility_clickable_spans: number;
                    public static tag_accessibility_heading: number;
                    public static tag_accessibility_pane_title: number;
                    public static tag_screen_reader_focusable: number;
                    public static tag_transition_group: number;
                    public static tag_unhandled_key_event_manager: number;
                    public static tag_unhandled_key_listeners: number;
                    public static text: number;
                    public static text2: number;
                    public static time: number;
                    public static title: number;
                    public static view_tree_lifecycle_owner: number;
                    public static view_tree_saved_state_registry_owner: number;
                    public static view_tree_view_model_store_owner: number;
                    public static visible_removing_fragment_view_tag: number;
                }
                export class integer extends java.lang.Object {
                    public static class: java.lang.Class<integer>;
                    public static status_bar_notification_info_maxnum: number;
                }
                export class layout extends java.lang.Object {
                    public static class: java.lang.Class<layout>;
                    public static custom_dialog: number;
                    public static notification_action: number;
                    public static notification_action_tombstone: number;
                    public static notification_template_custom_big: number;
                    public static notification_template_icon_group: number;
                    public static notification_template_part_chronometer: number;
                    public static notification_template_part_time: number;
                }
                export class style extends java.lang.Object {
                    public static class: java.lang.Class<style>;
                    public static TextAppearance_Compat_Notification: number;
                    public static TextAppearance_Compat_Notification_Info: number;
                    public static TextAppearance_Compat_Notification_Line2: number;
                    public static TextAppearance_Compat_Notification_Time: number;
                    public static TextAppearance_Compat_Notification_Title: number;
                    public static Widget_Compat_NotificationActionContainer: number;
                    public static Widget_Compat_NotificationActionText: number;
                }
                export class styleable extends java.lang.Object {
                    public static class: java.lang.Class<styleable>;
                    public static ColorStateListItem: androidNative.Array<number>;
                    public static ColorStateListItem_alpha: number;
                    public static ColorStateListItem_android_alpha: number;
                    public static ColorStateListItem_android_color: number;
                    public static FontFamily: androidNative.Array<number>;
                    public static FontFamily_fontProviderAuthority: number;
                    public static FontFamily_fontProviderCerts: number;
                    public static FontFamily_fontProviderFetchStrategy: number;
                    public static FontFamily_fontProviderFetchTimeout: number;
                    public static FontFamily_fontProviderPackage: number;
                    public static FontFamily_fontProviderQuery: number;
                    public static FontFamilyFont: androidNative.Array<number>;
                    public static FontFamilyFont_android_font: number;
                    public static FontFamilyFont_android_fontStyle: number;
                    public static FontFamilyFont_android_fontVariationSettings: number;
                    public static FontFamilyFont_android_fontWeight: number;
                    public static FontFamilyFont_android_ttcIndex: number;
                    public static FontFamilyFont_font: number;
                    public static FontFamilyFont_fontStyle: number;
                    public static FontFamilyFont_fontVariationSettings: number;
                    public static FontFamilyFont_fontWeight: number;
                    public static FontFamilyFont_ttcIndex: number;
                    public static Fragment: androidNative.Array<number>;
                    public static Fragment_android_id: number;
                    public static Fragment_android_name: number;
                    public static Fragment_android_tag: number;
                    public static FragmentContainerView: androidNative.Array<number>;
                    public static FragmentContainerView_android_name: number;
                    public static FragmentContainerView_android_tag: number;
                    public static GradientColor: androidNative.Array<number>;
                    public static GradientColor_android_centerColor: number;
                    public static GradientColor_android_centerX: number;
                    public static GradientColor_android_centerY: number;
                    public static GradientColor_android_endColor: number;
                    public static GradientColor_android_endX: number;
                    public static GradientColor_android_endY: number;
                    public static GradientColor_android_gradientRadius: number;
                    public static GradientColor_android_startColor: number;
                    public static GradientColor_android_startX: number;
                    public static GradientColor_android_startY: number;
                    public static GradientColor_android_tileMode: number;
                    public static GradientColor_android_type: number;
                    public static GradientColorItem: androidNative.Array<number>;
                    public static GradientColorItem_android_color: number;
                    public static GradientColorItem_android_offset: number;
                    public static <clinit>(): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class ANRWatchDog extends java.lang.Thread {
                    public static class: java.lang.Class<ANRWatchDog>;
                    public run(): void;
                }
                export namespace ANRWatchDog {
                    export class ANRListener extends java.lang.Object {
                        public static class: java.lang.Class<ANRListener>;
                        /**
						 * Constructs a new instance of the io.sentry.android.core.ANRWatchDog$ANRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
                        public constructor(implementation: {
                            onAppNotResponding(param0: ApplicationNotResponding): void;
                        });
                        public constructor();
                        public onAppNotResponding(param0: ApplicationNotResponding): void;
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
                    public static class: java.lang.Class<ActivityFramesTracker>;
                    public takeMetrics(param0: protocol.SentryId): java.util.Map<string,protocol.MeasurementValue>;
                    public constructor(param0: LoadClass, param1: ILogger);
                    public constructor(param0: LoadClass, param1: ILogger, param2: MainLooperHandler);
                    public constructor(param0: LoadClass);
                    public stop(): void;
                    public addActivity(param0: globalAndroid.app.Activity): void;
                    public setMetrics(param0: globalAndroid.app.Activity, param1: protocol.SentryId): void;
                }
                export namespace ActivityFramesTracker {
                    export class FrameCounts extends java.lang.Object {
                        public static class: java.lang.Class<FrameCounts>;
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
                export class ActivityLifecycleIntegration extends java.lang.Object implements Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
                    public static class: java.lang.Class<ActivityLifecycleIntegration>;
                    public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public register(param0: IHub, param1: SentryOptions): void;
                    public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
                    public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
                    public constructor(param0: globalAndroid.app.Application, param1: BuildInfoProvider, param2: ActivityFramesTracker);
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
                export class AndroidLogger extends java.lang.Object implements ILogger {
                    public static class: java.lang.Class<AndroidLogger>;
                    public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                    public log(param0: SentryLevel, param1: string, param2: androidNative.Array<any>): void;
                    public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
                    public isEnabled(param0: SentryLevel): boolean;
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
                    public static class: java.lang.Class<AndroidOptionsInitializer>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class AndroidTransactionProfiler extends java.lang.Object implements ITransactionProfiler {
                    public static class: java.lang.Class<AndroidTransactionProfiler>;
                    public constructor(param0: globalAndroid.content.Context, param1: SentryAndroidOptions, param2: BuildInfoProvider);
                    public onTransactionFinish(param0: ITransaction): ProfilingTraceData;
                    public onTransactionStart(param0: ITransaction): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class AndroidTransportGate extends java.lang.Object implements transport.ITransportGate {
                    public static class: java.lang.Class<AndroidTransportGate>;
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
                export class AnrIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<AnrIntegration>;
                    public constructor(param0: globalAndroid.content.Context);
                    public register(param0: IHub, param1: SentryOptions): void;
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
                export class AppComponentsBreadcrumbsIntegration extends java.lang.Object implements Integration, java.io.Closeable, globalAndroid.content.ComponentCallbacks2 {
                    public static class: java.lang.Class<AppComponentsBreadcrumbsIntegration>;
                    public constructor(param0: globalAndroid.content.Context);
                    public register(param0: IHub, param1: SentryOptions): void;
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
                export class AppLifecycleIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<AppLifecycleIntegration>;
                    public register(param0: IHub, param1: SentryOptions): void;
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
                    public static class: java.lang.Class<AppStartState>;
                    public isColdStart(): java.lang.Boolean;
                    public getAppStartTime(): java.util.Date;
                    public static getInstance(): AppStartState;
                    public getAppStartInterval(): java.lang.Long;
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
                    public static class: java.lang.Class<ApplicationNotResponding>;
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
                    public static class: java.lang.Class<BuildConfig>;
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
                    public static class: java.lang.Class<BuildInfoProvider>;
                    public isEmulator(): java.lang.Boolean;
                    public getModel(): string;
                    public getSdkInfoVersion(): number;
                    public constructor(param0: ILogger);
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
                    public static class: java.lang.Class<ContextUtils>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class DefaultAndroidEventProcessor extends java.lang.Object implements EventProcessor {
                    public static class: java.lang.Class<DefaultAndroidEventProcessor>;
                    public process(param0: SentryEvent, param1: Hint): SentryEvent;
                    public getDefaultUser(): protocol.User;
                    public constructor(param0: globalAndroid.content.Context, param1: BuildInfoProvider, param2: SentryAndroidOptions);
                    public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
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
                    public static class: java.lang.Class<EnvelopeFileObserver>;
                    public onEvent(param0: number, param1: string): void;
                }
                export namespace EnvelopeFileObserver {
                    export class CachedEnvelopeHint extends java.lang.Object implements hints.Cached, hints.Retryable, hints.SubmissionResult, hints.Flushable, hints.ApplyScopeData, hints.Resettable {
                        public static class: java.lang.Class<CachedEnvelopeHint>;
                        public isRetry(): boolean;
                        public waitFlush(): boolean;
                        public isSuccess(): boolean;
                        public setResult(param0: boolean): void;
                        public setRetry(param0: boolean): void;
                        public constructor(param0: number, param1: ILogger);
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
                export abstract class EnvelopeFileObserverIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<EnvelopeFileObserverIntegration>;
                    public register(param0: IHub, param1: SentryOptions): void;
                    public constructor();
                    public close(): void;
                    public static getOutboxFileObserver(): EnvelopeFileObserverIntegration;
                }
                export namespace EnvelopeFileObserverIntegration {
                    export class OutboxEnvelopeFileObserverIntegration extends EnvelopeFileObserverIntegration {
                        public static class: java.lang.Class<OutboxEnvelopeFileObserverIntegration>;
                        public register(param0: IHub, param1: SentryOptions): void;
                        public close(): void;
                        public getPath(param0: SentryOptions): string;
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
                    public static class: java.lang.Class<IDebugImagesLoader>;
                    /**
					 * Constructs a new instance of the io.sentry.android.core.IDebugImagesLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        loadDebugImages(): java.util.List<protocol.DebugImage>;
                        clearDebugImages(): void;
                    });
                    public constructor();
                    public loadDebugImages(): java.util.List<protocol.DebugImage>;
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
                    public static class: java.lang.Class<Installation>;
                    public static id(param0: globalAndroid.content.Context): string;
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
                    public static class: java.lang.Class<LifecycleWatcher>;
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
                    public static class: java.lang.Class<LoadClass>;
                    public loadClass(param0: string, param1: ILogger): java.lang.Class<any>;
                    public isClassAvailable(param0: string, param1: ILogger): boolean;
                    public isClassAvailable(param0: string, param1: SentryOptions): boolean;
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
                    public static class: java.lang.Class<MainLooperHandler>;
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
                    public static class: java.lang.Class<ManifestMetadataReader>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class NdkIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<NdkIntegration>;
                    public static SENTRY_NDK_CLASS_NAME: string;
                    public constructor(param0: java.lang.Class<any>);
                    public register(param0: IHub, param1: SentryOptions): void;
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
                export class NoOpDebugImagesLoader extends java.lang.Object implements IDebugImagesLoader {
                    public static class: java.lang.Class<NoOpDebugImagesLoader>;
                    public loadDebugImages(): java.util.List<protocol.DebugImage>;
                    public clearDebugImages(): void;
                    public static getInstance(): NoOpDebugImagesLoader;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class PerformanceAndroidEventProcessor extends java.lang.Object implements EventProcessor {
                    public static class: java.lang.Class<PerformanceAndroidEventProcessor>;
                    public process(param0: SentryEvent, param1: Hint): SentryEvent;
                    public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class PhoneStateBreadcrumbsIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<PhoneStateBreadcrumbsIntegration>;
                    public constructor(param0: globalAndroid.content.Context);
                    public register(param0: IHub, param1: SentryOptions): void;
                    public close(): void;
                }
                export namespace PhoneStateBreadcrumbsIntegration {
                    export class PhoneStateChangeListener extends globalAndroid.telephony.PhoneStateListener {
                        public static class: java.lang.Class<PhoneStateChangeListener>;
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
                    public static class: java.lang.Class<R>;
                }
                export namespace R {
                    export class anim extends java.lang.Object {
                        public static class: java.lang.Class<anim>;
                        public static fragment_fast_out_extra_slow_in: number;
                    }
                    export class animator extends java.lang.Object {
                        public static class: java.lang.Class<animator>;
                        public static fragment_close_enter: number;
                        public static fragment_close_exit: number;
                        public static fragment_fade_enter: number;
                        public static fragment_fade_exit: number;
                        public static fragment_open_enter: number;
                        public static fragment_open_exit: number;
                    }
                    export class attr extends java.lang.Object {
                        public static class: java.lang.Class<attr>;
                        public static alpha: number;
                        public static font: number;
                        public static fontProviderAuthority: number;
                        public static fontProviderCerts: number;
                        public static fontProviderFetchStrategy: number;
                        public static fontProviderFetchTimeout: number;
                        public static fontProviderPackage: number;
                        public static fontProviderQuery: number;
                        public static fontStyle: number;
                        public static fontVariationSettings: number;
                        public static fontWeight: number;
                        public static ttcIndex: number;
                    }
                    export class color extends java.lang.Object {
                        public static class: java.lang.Class<color>;
                        public static androidx_core_ripple_material_light: number;
                        public static androidx_core_secondary_text_default_material_light: number;
                        public static notification_action_color_filter: number;
                        public static notification_icon_bg_color: number;
                        public static ripple_material_light: number;
                        public static secondary_text_default_material_light: number;
                    }
                    export class dimen extends java.lang.Object {
                        public static class: java.lang.Class<dimen>;
                        public static compat_button_inset_horizontal_material: number;
                        public static compat_button_inset_vertical_material: number;
                        public static compat_button_padding_horizontal_material: number;
                        public static compat_button_padding_vertical_material: number;
                        public static compat_control_corner_material: number;
                        public static compat_notification_large_icon_max_height: number;
                        public static compat_notification_large_icon_max_width: number;
                        public static notification_action_icon_size: number;
                        public static notification_action_text_size: number;
                        public static notification_big_circle_margin: number;
                        public static notification_content_margin_start: number;
                        public static notification_large_icon_height: number;
                        public static notification_large_icon_width: number;
                        public static notification_main_column_padding_top: number;
                        public static notification_media_narrow_margin: number;
                        public static notification_right_icon_size: number;
                        public static notification_right_side_padding_top: number;
                        public static notification_small_icon_background_padding: number;
                        public static notification_small_icon_size_as_large: number;
                        public static notification_subtext_size: number;
                        public static notification_top_pad: number;
                        public static notification_top_pad_large_text: number;
                    }
                    export class drawable extends java.lang.Object {
                        public static class: java.lang.Class<drawable>;
                        public static notification_action_background: number;
                        public static notification_bg: number;
                        public static notification_bg_low: number;
                        public static notification_bg_low_normal: number;
                        public static notification_bg_low_pressed: number;
                        public static notification_bg_normal: number;
                        public static notification_bg_normal_pressed: number;
                        public static notification_icon_background: number;
                        public static notification_template_icon_bg: number;
                        public static notification_template_icon_low_bg: number;
                        public static notification_tile_bg: number;
                        public static notify_panel_notification_icon_bg: number;
                    }
                    export class id extends java.lang.Object {
                        public static class: java.lang.Class<id>;
                        public static accessibility_action_clickable_span: number;
                        public static accessibility_custom_action_0: number;
                        public static accessibility_custom_action_1: number;
                        public static accessibility_custom_action_10: number;
                        public static accessibility_custom_action_11: number;
                        public static accessibility_custom_action_12: number;
                        public static accessibility_custom_action_13: number;
                        public static accessibility_custom_action_14: number;
                        public static accessibility_custom_action_15: number;
                        public static accessibility_custom_action_16: number;
                        public static accessibility_custom_action_17: number;
                        public static accessibility_custom_action_18: number;
                        public static accessibility_custom_action_19: number;
                        public static accessibility_custom_action_2: number;
                        public static accessibility_custom_action_20: number;
                        public static accessibility_custom_action_21: number;
                        public static accessibility_custom_action_22: number;
                        public static accessibility_custom_action_23: number;
                        public static accessibility_custom_action_24: number;
                        public static accessibility_custom_action_25: number;
                        public static accessibility_custom_action_26: number;
                        public static accessibility_custom_action_27: number;
                        public static accessibility_custom_action_28: number;
                        public static accessibility_custom_action_29: number;
                        public static accessibility_custom_action_3: number;
                        public static accessibility_custom_action_30: number;
                        public static accessibility_custom_action_31: number;
                        public static accessibility_custom_action_4: number;
                        public static accessibility_custom_action_5: number;
                        public static accessibility_custom_action_6: number;
                        public static accessibility_custom_action_7: number;
                        public static accessibility_custom_action_8: number;
                        public static accessibility_custom_action_9: number;
                        public static action_container: number;
                        public static action_divider: number;
                        public static action_image: number;
                        public static action_text: number;
                        public static actions: number;
                        public static async: number;
                        public static blocking: number;
                        public static chronometer: number;
                        public static dialog_button: number;
                        public static forever: number;
                        public static fragment_container_view_tag: number;
                        public static icon: number;
                        public static icon_group: number;
                        public static info: number;
                        public static italic: number;
                        public static line1: number;
                        public static line3: number;
                        public static normal: number;
                        public static notification_background: number;
                        public static notification_main_column: number;
                        public static notification_main_column_container: number;
                        public static right_icon: number;
                        public static right_side: number;
                        public static special_effects_controller_view_tag: number;
                        public static tag_accessibility_actions: number;
                        public static tag_accessibility_clickable_spans: number;
                        public static tag_accessibility_heading: number;
                        public static tag_accessibility_pane_title: number;
                        public static tag_screen_reader_focusable: number;
                        public static tag_transition_group: number;
                        public static tag_unhandled_key_event_manager: number;
                        public static tag_unhandled_key_listeners: number;
                        public static text: number;
                        public static text2: number;
                        public static time: number;
                        public static title: number;
                        public static view_tree_lifecycle_owner: number;
                        public static view_tree_saved_state_registry_owner: number;
                        public static view_tree_view_model_store_owner: number;
                        public static visible_removing_fragment_view_tag: number;
                    }
                    export class integer extends java.lang.Object {
                        public static class: java.lang.Class<integer>;
                        public static status_bar_notification_info_maxnum: number;
                    }
                    export class layout extends java.lang.Object {
                        public static class: java.lang.Class<layout>;
                        public static custom_dialog: number;
                        public static notification_action: number;
                        public static notification_action_tombstone: number;
                        public static notification_template_custom_big: number;
                        public static notification_template_icon_group: number;
                        public static notification_template_part_chronometer: number;
                        public static notification_template_part_time: number;
                    }
                    export class style extends java.lang.Object {
                        public static class: java.lang.Class<style>;
                        public static TextAppearance_Compat_Notification: number;
                        public static TextAppearance_Compat_Notification_Info: number;
                        public static TextAppearance_Compat_Notification_Line2: number;
                        public static TextAppearance_Compat_Notification_Time: number;
                        public static TextAppearance_Compat_Notification_Title: number;
                        public static Widget_Compat_NotificationActionContainer: number;
                        public static Widget_Compat_NotificationActionText: number;
                    }
                    export class styleable extends java.lang.Object {
                        public static class: java.lang.Class<styleable>;
                        public static ColorStateListItem: androidNative.Array<number>;
                        public static ColorStateListItem_alpha: number;
                        public static ColorStateListItem_android_alpha: number;
                        public static ColorStateListItem_android_color: number;
                        public static FontFamily: androidNative.Array<number>;
                        public static FontFamily_fontProviderAuthority: number;
                        public static FontFamily_fontProviderCerts: number;
                        public static FontFamily_fontProviderFetchStrategy: number;
                        public static FontFamily_fontProviderFetchTimeout: number;
                        public static FontFamily_fontProviderPackage: number;
                        public static FontFamily_fontProviderQuery: number;
                        public static FontFamilyFont: androidNative.Array<number>;
                        public static FontFamilyFont_android_font: number;
                        public static FontFamilyFont_android_fontStyle: number;
                        public static FontFamilyFont_android_fontVariationSettings: number;
                        public static FontFamilyFont_android_fontWeight: number;
                        public static FontFamilyFont_android_ttcIndex: number;
                        public static FontFamilyFont_font: number;
                        public static FontFamilyFont_fontStyle: number;
                        public static FontFamilyFont_fontVariationSettings: number;
                        public static FontFamilyFont_fontWeight: number;
                        public static FontFamilyFont_ttcIndex: number;
                        public static Fragment: androidNative.Array<number>;
                        public static Fragment_android_id: number;
                        public static Fragment_android_name: number;
                        public static Fragment_android_tag: number;
                        public static FragmentContainerView: androidNative.Array<number>;
                        public static FragmentContainerView_android_name: number;
                        public static FragmentContainerView_android_tag: number;
                        public static GradientColor: androidNative.Array<number>;
                        public static GradientColor_android_centerColor: number;
                        public static GradientColor_android_centerX: number;
                        public static GradientColor_android_centerY: number;
                        public static GradientColor_android_endColor: number;
                        public static GradientColor_android_endX: number;
                        public static GradientColor_android_endY: number;
                        public static GradientColor_android_gradientRadius: number;
                        public static GradientColor_android_startColor: number;
                        public static GradientColor_android_startX: number;
                        public static GradientColor_android_startY: number;
                        public static GradientColor_android_tileMode: number;
                        public static GradientColor_android_type: number;
                        public static GradientColorItem: androidNative.Array<number>;
                        public static GradientColorItem_android_color: number;
                        public static GradientColorItem_android_offset: number;
                        public static <clinit>(): void;
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
                export class ScreenshotEventProcessor extends java.lang.Object implements EventProcessor, globalAndroid.app.Application.ActivityLifecycleCallbacks, java.io.Closeable {
                    public static class: java.lang.Class<ScreenshotEventProcessor>;
                    public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
                    public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
                    public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
                    public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
                    public process(param0: SentryEvent, param1: Hint): SentryEvent;
                    public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
                    public close(): void;
                    public onActivityResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityPaused(param0: globalAndroid.app.Activity): void;
                    public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
                    public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
                    public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public process(param0: protocol.SentryTransaction, param1: Hint): protocol.SentryTransaction;
                    public onActivityStopped(param0: globalAndroid.app.Activity): void;
                    public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
                    public onActivityPreSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public constructor(param0: globalAndroid.app.Application, param1: SentryAndroidOptions, param2: BuildInfoProvider);
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
                export class SentryAndroid extends java.lang.Object {
                    public static class: java.lang.Class<SentryAndroid>;
                    public static init(param0: globalAndroid.content.Context): void;
                    public static init(param0: globalAndroid.content.Context, param1: ILogger): void;
                    public static init(param0: globalAndroid.content.Context, param1: Sentry.OptionsConfiguration<SentryAndroidOptions>): void;
                    public static init(param0: globalAndroid.content.Context, param1: ILogger, param2: Sentry.OptionsConfiguration<SentryAndroidOptions>): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class SentryAndroidOptions extends SentryOptions {
                    public static class: java.lang.Class<SentryAndroidOptions>;
                    public isEnableUserInteractionTracing(): boolean;
                    public isAnrReportInDebug(): boolean;
                    public setDebugImagesLoader(param0: IDebugImagesLoader): void;
                    public isEnableAutoActivityLifecycleTracing(): boolean;
                    public setEnableAppComponentBreadcrumbs(param0: boolean): void;
                    public enableAllAutoBreadcrumbs(param0: boolean): void;
                    public isEnableAppLifecycleBreadcrumbs(): boolean;
                    public isEnableActivityLifecycleBreadcrumbs(): boolean;
                    public isEnableUserInteractionBreadcrumbs(): boolean;
                    public setEnableSystemEventBreadcrumbs(param0: boolean): void;
                    public setEnableUserInteractionBreadcrumbs(param0: boolean): void;
                    /** @deprecated */
                    public setProfilingTracesIntervalMillis(param0: number): void;
                    public setEnableActivityLifecycleTracingAutoFinish(param0: boolean): void;
                    public constructor();
                    public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
                    public isCollectAdditionalContext(): boolean;
                    public getAnrTimeoutIntervalMillis(): number;
                    public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
                    public getDebugImagesLoader(): IDebugImagesLoader;
                    public setEnableAutoActivityLifecycleTracing(param0: boolean): void;
                    public setCollectAdditionalContext(param0: boolean): void;
                    /** @deprecated */
                    public getProfilingTracesIntervalMillis(): number;
                    public isAttachScreenshot(): boolean;
                    public isEnableSystemEventBreadcrumbs(): boolean;
                    public setProfilingTracesHz(param0: number): void;
                    public setAnrReportInDebug(param0: boolean): void;
                    public setAnrTimeoutIntervalMillis(param0: number): void;
                    public isEnableActivityLifecycleTracingAutoFinish(): boolean;
                    public isAnrEnabled(): boolean;
                    public setAttachScreenshot(param0: boolean): void;
                    public setEnableUserInteractionTracing(param0: boolean): void;
                    public setAnrEnabled(param0: boolean): void;
                    public getProfilingTracesHz(): number;
                    public isEnableAppComponentBreadcrumbs(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class SentryInitProvider extends globalAndroid.content.ContentProvider {
                    public static class: java.lang.Class<SentryInitProvider>;
                    public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
                    public getType(param0: globalAndroid.net.Uri): string;
                    public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
                    public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): number;
                    public delete(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle): number;
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public shutdown(): void;
                    public onTrimMemory(param0: number): void;
                    public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
                    public constructor();
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
                    public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
                    public onCreate(): boolean;
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
                export class SentryPerformanceProvider extends globalAndroid.content.ContentProvider implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
                    public static class: java.lang.Class<SentryPerformanceProvider>;
                    public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
                    public onActivityPreDestroyed(param0: globalAndroid.app.Activity): void;
                    public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityPostStopped(param0: globalAndroid.app.Activity): void;
                    public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityPreStopped(param0: globalAndroid.app.Activity): void;
                    public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
                    public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public onActivityPostDestroyed(param0: globalAndroid.app.Activity): void;
                    public constructor();
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
                    public onCreate(): boolean;
                    public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
                    public onActivityResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityPaused(param0: globalAndroid.app.Activity): void;
                    public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
                    public getType(param0: globalAndroid.net.Uri): string;
                    public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
                    public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: globalAndroid.os.Bundle): number;
                    public delete(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle): number;
                    public onActivityPostPaused(param0: globalAndroid.app.Activity): void;
                    public onActivityPostSaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public onActivityStopped(param0: globalAndroid.app.Activity): void;
                    public onTrimMemory(param0: number): void;
                    public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
                    public onActivityPrePaused(param0: globalAndroid.app.Activity): void;
                    public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
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
                export class SystemEventsBreadcrumbsIntegration extends java.lang.Object implements Integration, java.io.Closeable {
                    public static class: java.lang.Class<SystemEventsBreadcrumbsIntegration>;
                    public constructor(param0: globalAndroid.content.Context);
                    public register(param0: IHub, param1: SentryOptions): void;
                    public close(): void;
                    public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
                }
                export namespace SystemEventsBreadcrumbsIntegration {
                    export class SystemEventsBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
                        public static class: java.lang.Class<SystemEventsBroadcastReceiver>;
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
                export class TempSensorBreadcrumbsIntegration extends java.lang.Object implements Integration, java.io.Closeable, globalAndroid.hardware.SensorEventListener {
                    public static class: java.lang.Class<TempSensorBreadcrumbsIntegration>;
                    public constructor(param0: globalAndroid.content.Context);
                    public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
                    public register(param0: IHub, param1: SentryOptions): void;
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
                export class UserInteractionIntegration extends java.lang.Object implements Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
                    public static class: java.lang.Class<UserInteractionIntegration>;
                    public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
                    public constructor(param0: globalAndroid.app.Application, param1: LoadClass);
                    public onActivityStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public register(param0: IHub, param1: SentryOptions): void;
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
                export namespace internal {
                    export namespace gestures {
                        export class NoOpWindowCallback extends java.lang.Object implements globalAndroid.view.Window.Callback {
                            public static class: java.lang.Class<NoOpWindowCallback>;
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
                            public static class: java.lang.Class<SentryGestureListener>;
                            public onDown(param0: globalAndroid.view.MotionEvent): boolean;
                            public onUp(param0: globalAndroid.view.MotionEvent): void;
                            public constructor(param0: globalAndroid.app.Activity, param1: IHub, param2: SentryAndroidOptions, param3: boolean);
                            public onLongPress(param0: globalAndroid.view.MotionEvent): void;
                            public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                            public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                            public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
                            public onShowPress(param0: globalAndroid.view.MotionEvent): void;
                        }
                        export namespace SentryGestureListener {
                            export class ScrollState extends java.lang.Object {
                                public static class: java.lang.Class<ScrollState>;
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
                        export class SentryWindowCallback extends WindowCallbackAdapter {
                            public static class: java.lang.Class<SentryWindowCallback>;
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
                            public constructor(param0: globalAndroid.view.Window.Callback, param1: globalAndroid.content.Context, param2: SentryGestureListener, param3: SentryOptions);
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
                                public static class: java.lang.Class<MotionEventObtainer>;
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
                        export class ViewTargetSelector extends java.lang.Object {
                            public static class: java.lang.Class<ViewTargetSelector>;
                            /**
							 * Constructs a new instance of the io.sentry.android.core.internal.gestures.ViewTargetSelector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
                            public constructor(implementation: {
                                select(param0: globalAndroid.view.View): boolean;
                                skipChildren(): boolean;
                            });
                            public constructor();
                            public skipChildren(): boolean;
                            public select(param0: globalAndroid.view.View): boolean;
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
                            public static class: java.lang.Class<ViewUtils>;
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
                            public static class: java.lang.Class<WindowCallbackAdapter>;
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
                    export namespace util {
                        export class ConnectivityChecker extends java.lang.Object {
                            public static class: java.lang.Class<ConnectivityChecker>;
                            public static getConnectionType(param0: globalAndroid.content.Context, param1: ILogger, param2: BuildInfoProvider): string;
                            public static getConnectionStatus(param0: globalAndroid.content.Context, param1: ILogger): ConnectivityChecker.Status;
                        }
                        export namespace ConnectivityChecker {
                            export class Status {
                                public static class: java.lang.Class<Status>;
                                public static CONNECTED: Status;
                                public static NOT_CONNECTED: Status;
                                public static NO_PERMISSION: Status;
                                public static UNKNOWN: Status;
                                public static valueOf(param0: string): Status;
                                public static values(): androidNative.Array<Status>;
                                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
                    export namespace util {
                        export class CpuInfoUtils extends java.lang.Object {
                            public static class: java.lang.Class<CpuInfoUtils>;
                            public static getInstance(): CpuInfoUtils;
                            public readMaxFrequencies(): java.util.List<java.lang.Integer>;
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
                            public static class: java.lang.Class<DeviceOrientations>;
                            public static getOrientation(param0: number): protocol.Device.DeviceOrientation;
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
                        export class MainThreadChecker extends java.lang.Object {
                            public static class: java.lang.Class<MainThreadChecker>;
                            public static isMainThread(param0: protocol.SentryThread): boolean;
                            public static isMainThread(): boolean;
                            public static isMainThread(param0: java.lang.Thread): boolean;
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
                            public static class: java.lang.Class<Permissions>;
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
                            public static class: java.lang.Class<RootChecker>;
                            public isDeviceRooted(): boolean;
                            public constructor(param0: globalAndroid.content.Context, param1: BuildInfoProvider, param2: ILogger);
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
            export namespace ndk {
                export class BuildConfig extends java.lang.Object {
                    public static class: java.lang.Class<BuildConfig>;
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
                export class DebugImagesLoader extends java.lang.Object implements core.IDebugImagesLoader {
                    public static class: java.lang.Class<DebugImagesLoader>;
                    public loadDebugImages(): java.util.List<protocol.DebugImage>;
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
                    public static class: java.lang.Class<INativeScope>;
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
                    public static class: java.lang.Class<NativeModuleListLoader>;
                    public static nativeClearModuleList(): void;
                    public loadModuleList(): androidNative.Array<protocol.DebugImage>;
                    public clearModuleList(): void;
                    public static nativeLoadModuleList(): androidNative.Array<protocol.DebugImage>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace ndk {
                export class NativeScope extends java.lang.Object implements INativeScope {
                    public static class: java.lang.Class<NativeScope>;
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
                export class NdkScopeObserver extends java.lang.Object implements IScopeObserver {
                    public static class: java.lang.Class<NdkScopeObserver>;
                    public setExtra(param0: string, param1: string): void;
                    public constructor(param0: SentryOptions);
                    public setUser(param0: protocol.User): void;
                    public removeExtra(param0: string): void;
                    public setTag(param0: string, param1: string): void;
                    public removeTag(param0: string): void;
                    public addBreadcrumb(param0: Breadcrumb): void;
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
                    public static class: java.lang.Class<R>;
                }
                export namespace R {
                    export class anim extends java.lang.Object {
                        public static class: java.lang.Class<anim>;
                        public static fragment_fast_out_extra_slow_in: number;
                    }
                    export class animator extends java.lang.Object {
                        public static class: java.lang.Class<animator>;
                        public static fragment_close_enter: number;
                        public static fragment_close_exit: number;
                        public static fragment_fade_enter: number;
                        public static fragment_fade_exit: number;
                        public static fragment_open_enter: number;
                        public static fragment_open_exit: number;
                    }
                    export class attr extends java.lang.Object {
                        public static class: java.lang.Class<attr>;
                        public static alpha: number;
                        public static font: number;
                        public static fontProviderAuthority: number;
                        public static fontProviderCerts: number;
                        public static fontProviderFetchStrategy: number;
                        public static fontProviderFetchTimeout: number;
                        public static fontProviderPackage: number;
                        public static fontProviderQuery: number;
                        public static fontStyle: number;
                        public static fontVariationSettings: number;
                        public static fontWeight: number;
                        public static ttcIndex: number;
                    }
                    export class color extends java.lang.Object {
                        public static class: java.lang.Class<color>;
                        public static androidx_core_ripple_material_light: number;
                        public static androidx_core_secondary_text_default_material_light: number;
                        public static notification_action_color_filter: number;
                        public static notification_icon_bg_color: number;
                        public static ripple_material_light: number;
                        public static secondary_text_default_material_light: number;
                    }
                    export class dimen extends java.lang.Object {
                        public static class: java.lang.Class<dimen>;
                        public static compat_button_inset_horizontal_material: number;
                        public static compat_button_inset_vertical_material: number;
                        public static compat_button_padding_horizontal_material: number;
                        public static compat_button_padding_vertical_material: number;
                        public static compat_control_corner_material: number;
                        public static compat_notification_large_icon_max_height: number;
                        public static compat_notification_large_icon_max_width: number;
                        public static notification_action_icon_size: number;
                        public static notification_action_text_size: number;
                        public static notification_big_circle_margin: number;
                        public static notification_content_margin_start: number;
                        public static notification_large_icon_height: number;
                        public static notification_large_icon_width: number;
                        public static notification_main_column_padding_top: number;
                        public static notification_media_narrow_margin: number;
                        public static notification_right_icon_size: number;
                        public static notification_right_side_padding_top: number;
                        public static notification_small_icon_background_padding: number;
                        public static notification_small_icon_size_as_large: number;
                        public static notification_subtext_size: number;
                        public static notification_top_pad: number;
                        public static notification_top_pad_large_text: number;
                    }
                    export class drawable extends java.lang.Object {
                        public static class: java.lang.Class<drawable>;
                        public static notification_action_background: number;
                        public static notification_bg: number;
                        public static notification_bg_low: number;
                        public static notification_bg_low_normal: number;
                        public static notification_bg_low_pressed: number;
                        public static notification_bg_normal: number;
                        public static notification_bg_normal_pressed: number;
                        public static notification_icon_background: number;
                        public static notification_template_icon_bg: number;
                        public static notification_template_icon_low_bg: number;
                        public static notification_tile_bg: number;
                        public static notify_panel_notification_icon_bg: number;
                    }
                    export class id extends java.lang.Object {
                        public static class: java.lang.Class<id>;
                        public static accessibility_action_clickable_span: number;
                        public static accessibility_custom_action_0: number;
                        public static accessibility_custom_action_1: number;
                        public static accessibility_custom_action_10: number;
                        public static accessibility_custom_action_11: number;
                        public static accessibility_custom_action_12: number;
                        public static accessibility_custom_action_13: number;
                        public static accessibility_custom_action_14: number;
                        public static accessibility_custom_action_15: number;
                        public static accessibility_custom_action_16: number;
                        public static accessibility_custom_action_17: number;
                        public static accessibility_custom_action_18: number;
                        public static accessibility_custom_action_19: number;
                        public static accessibility_custom_action_2: number;
                        public static accessibility_custom_action_20: number;
                        public static accessibility_custom_action_21: number;
                        public static accessibility_custom_action_22: number;
                        public static accessibility_custom_action_23: number;
                        public static accessibility_custom_action_24: number;
                        public static accessibility_custom_action_25: number;
                        public static accessibility_custom_action_26: number;
                        public static accessibility_custom_action_27: number;
                        public static accessibility_custom_action_28: number;
                        public static accessibility_custom_action_29: number;
                        public static accessibility_custom_action_3: number;
                        public static accessibility_custom_action_30: number;
                        public static accessibility_custom_action_31: number;
                        public static accessibility_custom_action_4: number;
                        public static accessibility_custom_action_5: number;
                        public static accessibility_custom_action_6: number;
                        public static accessibility_custom_action_7: number;
                        public static accessibility_custom_action_8: number;
                        public static accessibility_custom_action_9: number;
                        public static action_container: number;
                        public static action_divider: number;
                        public static action_image: number;
                        public static action_text: number;
                        public static actions: number;
                        public static async: number;
                        public static blocking: number;
                        public static chronometer: number;
                        public static dialog_button: number;
                        public static forever: number;
                        public static fragment_container_view_tag: number;
                        public static icon: number;
                        public static icon_group: number;
                        public static info: number;
                        public static italic: number;
                        public static line1: number;
                        public static line3: number;
                        public static normal: number;
                        public static notification_background: number;
                        public static notification_main_column: number;
                        public static notification_main_column_container: number;
                        public static right_icon: number;
                        public static right_side: number;
                        public static special_effects_controller_view_tag: number;
                        public static tag_accessibility_actions: number;
                        public static tag_accessibility_clickable_spans: number;
                        public static tag_accessibility_heading: number;
                        public static tag_accessibility_pane_title: number;
                        public static tag_screen_reader_focusable: number;
                        public static tag_transition_group: number;
                        public static tag_unhandled_key_event_manager: number;
                        public static tag_unhandled_key_listeners: number;
                        public static text: number;
                        public static text2: number;
                        public static time: number;
                        public static title: number;
                        public static view_tree_lifecycle_owner: number;
                        public static view_tree_saved_state_registry_owner: number;
                        public static view_tree_view_model_store_owner: number;
                        public static visible_removing_fragment_view_tag: number;
                    }
                    export class integer extends java.lang.Object {
                        public static class: java.lang.Class<integer>;
                        public static status_bar_notification_info_maxnum: number;
                    }
                    export class layout extends java.lang.Object {
                        public static class: java.lang.Class<layout>;
                        public static custom_dialog: number;
                        public static notification_action: number;
                        public static notification_action_tombstone: number;
                        public static notification_template_custom_big: number;
                        public static notification_template_icon_group: number;
                        public static notification_template_part_chronometer: number;
                        public static notification_template_part_time: number;
                    }
                    export class style extends java.lang.Object {
                        public static class: java.lang.Class<style>;
                        public static TextAppearance_Compat_Notification: number;
                        public static TextAppearance_Compat_Notification_Info: number;
                        public static TextAppearance_Compat_Notification_Line2: number;
                        public static TextAppearance_Compat_Notification_Time: number;
                        public static TextAppearance_Compat_Notification_Title: number;
                        public static Widget_Compat_NotificationActionContainer: number;
                        public static Widget_Compat_NotificationActionText: number;
                    }
                    export class styleable extends java.lang.Object {
                        public static class: java.lang.Class<styleable>;
                        public static ColorStateListItem: androidNative.Array<number>;
                        public static ColorStateListItem_alpha: number;
                        public static ColorStateListItem_android_alpha: number;
                        public static ColorStateListItem_android_color: number;
                        public static FontFamily: androidNative.Array<number>;
                        public static FontFamily_fontProviderAuthority: number;
                        public static FontFamily_fontProviderCerts: number;
                        public static FontFamily_fontProviderFetchStrategy: number;
                        public static FontFamily_fontProviderFetchTimeout: number;
                        public static FontFamily_fontProviderPackage: number;
                        public static FontFamily_fontProviderQuery: number;
                        public static FontFamilyFont: androidNative.Array<number>;
                        public static FontFamilyFont_android_font: number;
                        public static FontFamilyFont_android_fontStyle: number;
                        public static FontFamilyFont_android_fontVariationSettings: number;
                        public static FontFamilyFont_android_fontWeight: number;
                        public static FontFamilyFont_android_ttcIndex: number;
                        public static FontFamilyFont_font: number;
                        public static FontFamilyFont_fontStyle: number;
                        public static FontFamilyFont_fontVariationSettings: number;
                        public static FontFamilyFont_fontWeight: number;
                        public static FontFamilyFont_ttcIndex: number;
                        public static Fragment: androidNative.Array<number>;
                        public static Fragment_android_id: number;
                        public static Fragment_android_name: number;
                        public static Fragment_android_tag: number;
                        public static FragmentContainerView: androidNative.Array<number>;
                        public static FragmentContainerView_android_name: number;
                        public static FragmentContainerView_android_tag: number;
                        public static GradientColor: androidNative.Array<number>;
                        public static GradientColor_android_centerColor: number;
                        public static GradientColor_android_centerX: number;
                        public static GradientColor_android_centerY: number;
                        public static GradientColor_android_endColor: number;
                        public static GradientColor_android_endX: number;
                        public static GradientColor_android_endY: number;
                        public static GradientColor_android_gradientRadius: number;
                        public static GradientColor_android_startColor: number;
                        public static GradientColor_android_startX: number;
                        public static GradientColor_android_startY: number;
                        public static GradientColor_android_tileMode: number;
                        public static GradientColor_android_type: number;
                        public static GradientColorItem: androidNative.Array<number>;
                        public static GradientColorItem_android_color: number;
                        public static GradientColorItem_android_offset: number;
                        public static <clinit>(): void;
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
                export class SentryNdk extends java.lang.Object {
                    public static class: java.lang.Class<SentryNdk>;
                    public static close(): void;
                    public static init(param0: core.SentryAndroidOptions): void;
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
                    public static class: java.lang.Class<SentryNdkUtil>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace cache {
            export abstract class CacheStrategy extends java.lang.Object {
                public static class: java.lang.Class<CacheStrategy>;
                public static UTF_8: java.nio.charset.Charset;
                public options: SentryOptions;
                public serializer: ISerializer;
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
            export class EnvelopeCache extends CacheStrategy implements IEnvelopeCache {
                public static class: java.lang.Class<EnvelopeCache>;
                public static SUFFIX_ENVELOPE_FILE: string;
                public static PREFIX_CURRENT_SESSION_FILE: string;
                public static CRASH_MARKER_FILE: string;
                public static NATIVE_CRASH_MARKER_FILE: string;
                public discard(param0: SentryEnvelope): void;
                public spliterator(): java.util.Spliterator<any>;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
                public static create(param0: SentryOptions): IEnvelopeCache;
                public store(param0: SentryEnvelope, param1: Hint): void;
                public iterator(): java.util.Iterator<SentryEnvelope>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace cache {
            export class IEnvelopeCache extends java.lang.Iterable<SentryEnvelope> {
                public static class: java.lang.Class<IEnvelopeCache>;
                /**
				 * Constructs a new instance of the io.sentry.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    store(param0: SentryEnvelope, param1: Hint): void;
                    store(param0: SentryEnvelope): void;
                    discard(param0: SentryEnvelope): void;
                    iterator(): java.util.Iterator<any>;
                    forEach(param0: any /* any*/): void;
                    spliterator(): java.util.Spliterator<any>;
                });
                public constructor();
                public discard(param0: SentryEnvelope): void;
                public spliterator(): java.util.Spliterator<any>;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
                public store(param0: SentryEnvelope, param1: Hint): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class AtomicClientReportStorage extends java.lang.Object implements IClientReportStorage {
                public static class: java.lang.Class<AtomicClientReportStorage>;
                public resetCountsAndGet(): java.util.List<DiscardedEvent>;
                public addCount(param0: ClientReportKey, param1: java.lang.Long): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class ClientReport extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<ClientReport>;
                public getTimestamp(): java.util.Date;
                public getDiscardedEvents(): java.util.List<DiscardedEvent>;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public constructor(param0: java.util.Date, param1: java.util.List<DiscardedEvent>);
            }
            export namespace ClientReport {
                export class Deserializer extends JsonDeserializer<ClientReport> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): ClientReport;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
                public static class: java.lang.Class<ClientReportKey>;
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
            export class ClientReportRecorder extends java.lang.Object implements IClientReportRecorder {
                public static class: java.lang.Class<ClientReportRecorder>;
                public constructor(param0: SentryOptions);
                public attachReportToEnvelope(param0: SentryEnvelope): SentryEnvelope;
                public recordLostEnvelopeItem(param0: DiscardReason, param1: SentryEnvelopeItem): void;
                public recordLostEvent(param0: DiscardReason, param1: DataCategory): void;
                public recordLostEnvelope(param0: DiscardReason, param1: SentryEnvelope): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class DiscardReason {
                public static class: java.lang.Class<DiscardReason>;
                public static QUEUE_OVERFLOW: DiscardReason;
                public static CACHE_OVERFLOW: DiscardReason;
                public static RATELIMIT_BACKOFF: DiscardReason;
                public static NETWORK_ERROR: DiscardReason;
                public static SAMPLE_RATE: DiscardReason;
                public static BEFORE_SEND: DiscardReason;
                public static EVENT_PROCESSOR: DiscardReason;
                public getReason(): string;
                public static values(): androidNative.Array<DiscardReason>;
                public static valueOf(param0: string): DiscardReason;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class DiscardedEvent extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<DiscardedEvent>;
                public getQuantity(): java.lang.Long;
                public getCategory(): string;
                public getReason(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public constructor(param0: string, param1: string, param2: java.lang.Long);
                public getUnknown(): java.util.Map<string,any>;
                public toString(): string;
            }
            export namespace DiscardedEvent {
                export class Deserializer extends JsonDeserializer<DiscardedEvent> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): DiscardedEvent;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
                public static class: java.lang.Class<IClientReportRecorder>;
                /**
				 * Constructs a new instance of the io.sentry.clientreport.IClientReportRecorder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    recordLostEnvelope(param0: DiscardReason, param1: SentryEnvelope): void;
                    recordLostEnvelopeItem(param0: DiscardReason, param1: SentryEnvelopeItem): void;
                    recordLostEvent(param0: DiscardReason, param1: DataCategory): void;
                    attachReportToEnvelope(param0: SentryEnvelope): SentryEnvelope;
                });
                public constructor();
                public recordLostEnvelopeItem(param0: DiscardReason, param1: SentryEnvelopeItem): void;
                public attachReportToEnvelope(param0: SentryEnvelope): SentryEnvelope;
                public recordLostEvent(param0: DiscardReason, param1: DataCategory): void;
                public recordLostEnvelope(param0: DiscardReason, param1: SentryEnvelope): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class IClientReportStorage extends java.lang.Object {
                public static class: java.lang.Class<IClientReportStorage>;
                /**
				 * Constructs a new instance of the io.sentry.clientreport.IClientReportStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    addCount(param0: ClientReportKey, param1: java.lang.Long): void;
                    resetCountsAndGet(): java.util.List<DiscardedEvent>;
                });
                public constructor();
                public resetCountsAndGet(): java.util.List<DiscardedEvent>;
                public addCount(param0: ClientReportKey, param1: java.lang.Long): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace clientreport {
            export class NoOpClientReportRecorder extends java.lang.Object implements IClientReportRecorder {
                public static class: java.lang.Class<NoOpClientReportRecorder>;
                public recordLostEnvelopeItem(param0: DiscardReason, param1: SentryEnvelopeItem): void;
                public attachReportToEnvelope(param0: SentryEnvelope): SentryEnvelope;
                public recordLostEvent(param0: DiscardReason, param1: DataCategory): void;
                public recordLostEnvelope(param0: DiscardReason, param1: SentryEnvelope): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace config {
            export abstract class AbstractPropertiesProvider extends java.lang.Object implements PropertiesProvider {
                public static class: java.lang.Class<AbstractPropertiesProvider>;
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
            export class ClasspathPropertiesLoader extends java.lang.Object implements PropertiesLoader {
                public static class: java.lang.Class<ClasspathPropertiesLoader>;
                public constructor(param0: string, param1: java.lang.ClassLoader, param2: ILogger);
                public constructor(param0: ILogger);
                public load(): java.util.Properties;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace config {
            export class CompositePropertiesProvider extends java.lang.Object implements PropertiesProvider {
                public static class: java.lang.Class<CompositePropertiesProvider>;
                public getProperty(param0: string, param1: string): string;
                public getMap(param0: string): java.util.Map<string,string>;
                public getLongProperty(param0: string): java.lang.Long;
                public constructor(param0: java.util.List<PropertiesProvider>);
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
            export class EnvironmentVariablePropertiesProvider extends java.lang.Object implements PropertiesProvider {
                public static class: java.lang.Class<EnvironmentVariablePropertiesProvider>;
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
            export class FilesystemPropertiesLoader extends java.lang.Object implements PropertiesLoader {
                public static class: java.lang.Class<FilesystemPropertiesLoader>;
                public constructor(param0: string, param1: ILogger);
                public load(): java.util.Properties;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace config {
            export class PropertiesLoader extends java.lang.Object {
                public static class: java.lang.Class<PropertiesLoader>;
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
                public static class: java.lang.Class<PropertiesProvider>;
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
                public static class: java.lang.Class<PropertiesProviderFactory>;
                public static create(): PropertiesProvider;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace config {
            export class SimplePropertiesProvider extends AbstractPropertiesProvider {
                public static class: java.lang.Class<SimplePropertiesProvider>;
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
            export class SystemPropertyPropertiesProvider extends AbstractPropertiesProvider {
                public static class: java.lang.Class<SystemPropertyPropertiesProvider>;
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
                public static class: java.lang.Class<ExceptionMechanismException>;
                public getThread(): java.lang.Thread;
                public isSnapshot(): boolean;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
                public constructor(param0: java.lang.Throwable);
                public getExceptionMechanism(): protocol.Mechanism;
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
                public constructor(param0: protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread, param3: boolean);
                public getThrowable(): java.lang.Throwable;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace exception {
            export class InvalidSentryTraceHeaderException extends java.lang.Exception {
                public static class: java.lang.Class<InvalidSentryTraceHeaderException>;
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
                public static class: java.lang.Class<SentryEnvelopeException>;
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
            export class ApplyScopeData extends java.lang.Object {
                public static class: java.lang.Class<ApplyScopeData>;
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
            export class Cached extends java.lang.Object {
                public static class: java.lang.Class<Cached>;
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
                public static class: java.lang.Class<DiskFlushNotification>;
                /**
				 * Constructs a new instance of the io.sentry.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    markFlushed(): void;
                });
                public constructor();
                public markFlushed(): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace hints {
            export class Flushable extends java.lang.Object {
                public static class: java.lang.Class<Flushable>;
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
                public static class: java.lang.Class<Resettable>;
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
                public static class: java.lang.Class<Retryable>;
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
                public static class: java.lang.Class<SessionEnd>;
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
            export class SessionEndHint extends java.lang.Object implements SessionEnd {
                public static class: java.lang.Class<SessionEndHint>;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace hints {
            export class SessionStart extends java.lang.Object {
                public static class: java.lang.Class<SessionStart>;
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
            export class SessionStartHint extends java.lang.Object implements SessionStart {
                public static class: java.lang.Class<SessionStartHint>;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace hints {
            export class SubmissionResult extends java.lang.Object {
                public static class: java.lang.Class<SubmissionResult>;
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
        export namespace instrumentation {
            export namespace file {
                export class FileIOSpanManager extends java.lang.Object {
                    public static class: java.lang.Class<FileIOSpanManager>;
                }
                export namespace FileIOSpanManager {
                    export class FileIOCallable<T>  extends java.lang.Object {
                        public static class: java.lang.Class<FileIOCallable<any>>;
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
                    public static class: java.lang.Class<FileInputStreamInitData>;
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
                    public static class: java.lang.Class<FileOutputStreamInitData>;
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
                    public static class: java.lang.Class<SentryFileInputStream>;
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
                        public static class: java.lang.Class<Factory>;
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
                    public static class: java.lang.Class<SentryFileOutputStream>;
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
                        public static class: java.lang.Class<Factory>;
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
                    public static class: java.lang.Class<SentryFileReader>;
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
                    public static class: java.lang.Class<SentryFileWriter>;
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
        export namespace protocol {
            export class App extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<App>;
                public static TYPE: string;
                public setAppIdentifier(param0: string): void;
                public getAppIdentifier(): string;
                public setAppVersion(param0: string): void;
                public setAppBuild(param0: string): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getAppBuild(): string;
                public getUnknown(): java.util.Map<string,any>;
                public setAppName(param0: string): void;
                public getAppStartTime(): java.util.Date;
                public getDeviceAppHash(): string;
                public constructor();
                public getAppVersion(): string;
                public getBuildType(): string;
                public getAppName(): string;
                public getPermissions(): java.util.Map<string,string>;
                public setBuildType(param0: string): void;
                public setDeviceAppHash(param0: string): void;
                public setPermissions(param0: java.util.Map<string,string>): void;
                public setAppStartTime(param0: java.util.Date): void;
            }
            export namespace App {
                export class Deserializer extends JsonDeserializer<App> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): App;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static APP_IDENTIFIER: string;
                    public static APP_START_TIME: string;
                    public static DEVICE_APP_HASH: string;
                    public static BUILD_TYPE: string;
                    public static APP_NAME: string;
                    public static APP_VERSION: string;
                    public static APP_BUILD: string;
                    public static APP_PERMISSIONS: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Browser extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Browser>;
                public static TYPE: string;
                public setName(param0: string): void;
                public getVersion(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public setVersion(param0: string): void;
                public constructor();
            }
            export namespace Browser {
                export class Deserializer extends JsonDeserializer<Browser> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Browser;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements JsonSerializable  {
                public static class: java.lang.Class<Contexts>;
                public constructor(param0: number, param1: number);
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map<any,any>;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): java.util.Map<any,any>;
                public putAll(param0: java.util.Map<any,any>): void;
                public getOperatingSystem(): OperatingSystem;
                public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
                public constructor(param0: Contexts);
                public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
                public setApp(param0: App): void;
                public replaceAll(param0: any /* any<any,any,any>*/): void;
                public constructor();
                public setDevice(param0: Device): void;
                public remove(param0: any, param1: any): boolean;
                public getRuntime(): SentryRuntime;
                public getGpu(): Gpu;
                public putIfAbsent(param0: any, param1: any): any;
                public static copyOf(param0: java.util.Map<any,any>): java.util.Map<any,any>;
                public forEach(param0: number, param1: any /* any<any,any>*/): void;
                public setGpu(param0: Gpu): void;
                public remove(param0: any): any;
                public hashCode(): number;
                public compute(param0: any, param1: any /* any<any,any,any>*/): any;
                public equals(param0: any): boolean;
                public isEmpty(): boolean;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map<any,any>;
                public containsValue(param0: any): boolean;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map<any,any>;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): java.util.Map<any,any>;
                public replace(param0: any, param1: any): any;
                public getDevice(): Device;
                public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
                public keySet(): java.util.Set<any>;
                public size(): number;
                public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map<any,any>;
                public put(param0: any, param1: any): any;
                public setRuntime(param0: SentryRuntime): void;
                public forEach(param0: any /* any<any,any>*/): void;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any,any>;
                public constructor(param0: number, param1: number, param2: number);
                public get(param0: any): any;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public static of(param0: any, param1: any): java.util.Map<any,any>;
                public constructor(param0: java.util.Map<any,any>);
                public getOrDefault(param0: any, param1: any): any;
                public containsKey(param0: any): boolean;
                public getTrace(): SpanContext;
                public getApp(): App;
                public static ofEntries(param0: androidNative.Array<java.util.Map.Entry<any,any>>): java.util.Map<any,any>;
                public setBrowser(param0: Browser): void;
                public clear(): void;
                public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
                public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
                public setOperatingSystem(param0: OperatingSystem): void;
                public replace(param0: any, param1: any, param2: any): boolean;
                public values(): java.util.Collection<any>;
                public static entry(param0: any, param1: any): java.util.Map.Entry<any,any>;
                public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any,any>;
                public static of(): java.util.Map<any,any>;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): java.util.Map<any,any>;
                public setTrace(param0: SpanContext): void;
                public constructor(param0: number);
                public getBrowser(): Browser;
                public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): java.util.Map<any,any>;
            }
            export namespace Contexts {
                export class Deserializer extends JsonDeserializer<Contexts> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Contexts;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class DebugImage extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<DebugImage>;
                public static PROGUARD: string;
                public getUuid(): string;
                public setUuid(param0: string): void;
                public getType(): string;
                public setImageSize(param0: number): void;
                public setArch(param0: string): void;
                public getCodeId(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getDebugFile(): string;
                public setCodeFile(param0: string): void;
                public getDebugId(): string;
                public getImageSize(): java.lang.Long;
                public setType(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
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
                export class Deserializer extends JsonDeserializer<DebugImage> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): DebugImage;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class DebugMeta extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<DebugMeta>;
                public getImages(): java.util.List<DebugImage>;
                public setImages(param0: java.util.List<DebugImage>): void;
                public getSdkInfo(): SdkInfo;
                public setSdkInfo(param0: SdkInfo): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public constructor();
            }
            export namespace DebugMeta {
                export class Deserializer extends JsonDeserializer<DebugMeta> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): DebugMeta;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class Device extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Device>;
                public static TYPE: string;
                public setMemorySize(param0: java.lang.Long): void;
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
                public getScreenWidthPixels(): java.lang.Integer;
                public getStorageSize(): java.lang.Long;
                public getTimezone(): java.util.TimeZone;
                public setScreenDensity(param0: java.lang.Float): void;
                public setName(param0: string): void;
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
                public getScreenDpi(): java.lang.Integer;
                public setModelId(param0: string): void;
                public setConnectionType(param0: string): void;
                public setFreeMemory(param0: java.lang.Long): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getModelId(): string;
                public setLowMemory(param0: java.lang.Boolean): void;
                public getScreenDensity(): java.lang.Float;
                public setModel(param0: string): void;
                public setTimezone(param0: java.util.TimeZone): void;
                public getFamily(): string;
                public setScreenHeightPixels(param0: java.lang.Integer): void;
                public setUsableMemory(param0: java.lang.Long): void;
                public isCharging(): java.lang.Boolean;
                public setExternalFreeStorage(param0: java.lang.Long): void;
                public setId(param0: string): void;
                public getExternalFreeStorage(): java.lang.Long;
                public getFreeStorage(): java.lang.Long;
                public getScreenHeightPixels(): java.lang.Integer;
                public getOrientation(): Device.DeviceOrientation;
                public getBatteryLevel(): java.lang.Float;
                public getModel(): string;
                public getBatteryTemperature(): java.lang.Float;
                public setBootTime(param0: java.util.Date): void;
                public getConnectionType(): string;
                public setScreenWidthPixels(param0: java.lang.Integer): void;
                public setOrientation(param0: Device.DeviceOrientation): void;
                public getManufacturer(): string;
                public setSimulator(param0: java.lang.Boolean): void;
                public setLanguage(param0: string): void;
                public isSimulator(): java.lang.Boolean;
                public getUsableMemory(): java.lang.Long;
            }
            export namespace Device {
                export class Deserializer extends JsonDeserializer<Device> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Device;
                }
                export class DeviceOrientation extends JsonSerializable {
                    public static class: java.lang.Class<DeviceOrientation>;
                    public static PORTRAIT: DeviceOrientation;
                    public static LANDSCAPE: DeviceOrientation;
                    public static valueOf(param0: string): DeviceOrientation;
                    public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                    public static values(): androidNative.Array<DeviceOrientation>;
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
                export namespace DeviceOrientation {
                    export class Deserializer extends JsonDeserializer<DeviceOrientation> {
                        public static class: java.lang.Class<Deserializer>;
                        public constructor();
                        public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                        public deserialize(param0: JsonObjectReader, param1: ILogger): DeviceOrientation;
                    }
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
                    public static ID: string;
                    public static LANGUAGE: string;
                    public static CONNECTION_TYPE: string;
                    public static BATTERY_TEMPERATURE: string;
                    public static LOCALE: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Gpu extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Gpu>;
                public static TYPE: string;
                public setName(param0: string): void;
                public setApiType(param0: string): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public getVendorName(): string;
                public setMemorySize(param0: java.lang.Integer): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setNpotSupport(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public isMultiThreadedRendering(): java.lang.Boolean;
                public setVersion(param0: string): void;
                public getId(): java.lang.Integer;
                public constructor();
                public setVendorId(param0: java.lang.Integer): void;
                public getApiType(): string;
                public getVersion(): string;
                public setId(param0: java.lang.Integer): void;
                public setMultiThreadedRendering(param0: java.lang.Boolean): void;
                public setVendorName(param0: string): void;
                public getMemorySize(): java.lang.Integer;
                public getVendorId(): java.lang.Integer;
                public getNpotSupport(): string;
            }
            export namespace Gpu {
                export class Deserializer extends JsonDeserializer<Gpu> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Gpu;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static NAME: string;
                    public static ID: string;
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
            export class MeasurementValue extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<MeasurementValue>;
                public getValue(): java.lang.Number;
                public constructor(param0: java.lang.Number, param1: string);
                public getUnit(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public constructor(param0: java.lang.Number, param1: string, param2: java.util.Map<string,any>);
            }
            export namespace MeasurementValue {
                export class Deserializer extends JsonDeserializer<MeasurementValue> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): MeasurementValue;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class Mechanism extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Mechanism>;
                public setData(param0: java.util.Map<string,any>): void;
                public setSynthetic(param0: java.lang.Boolean): void;
                public getType(): string;
                public isHandled(): java.lang.Boolean;
                public constructor(param0: java.lang.Thread);
                public setMeta(param0: java.util.Map<string,any>): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getHelpLink(): string;
                public setType(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
                public getDescription(): string;
                public getMeta(): java.util.Map<string,any>;
                public getData(): java.util.Map<string,any>;
                public setHelpLink(param0: string): void;
                public constructor();
                public setDescription(param0: string): void;
                public setHandled(param0: java.lang.Boolean): void;
                public getSynthetic(): java.lang.Boolean;
            }
            export namespace Mechanism {
                export class Deserializer extends JsonDeserializer<Mechanism> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Mechanism;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class Message extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Message>;
                public getFormatted(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setParams(param0: java.util.List<string>): void;
                public getUnknown(): java.util.Map<string,any>;
                public setMessage(param0: string): void;
                public getMessage(): string;
                public getParams(): java.util.List<string>;
                public setFormatted(param0: string): void;
                public constructor();
            }
            export namespace Message {
                export class Deserializer extends JsonDeserializer<Message> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Message;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class OperatingSystem extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<OperatingSystem>;
                public static TYPE: string;
                public setName(param0: string): void;
                public getRawDescription(): string;
                public isRooted(): java.lang.Boolean;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getBuild(): string;
                public setRooted(param0: java.lang.Boolean): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public setVersion(param0: string): void;
                public constructor();
                public getVersion(): string;
                public setBuild(param0: string): void;
                public getKernelVersion(): string;
                public setRawDescription(param0: string): void;
                public setKernelVersion(param0: string): void;
            }
            export namespace OperatingSystem {
                export class Deserializer extends JsonDeserializer<OperatingSystem> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): OperatingSystem;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class Request extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<Request>;
                public getCookies(): string;
                public setMethod(param0: string): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getOthers(): java.util.Map<string,string>;
                public setHeaders(param0: java.util.Map<string,string>): void;
                public getUnknown(): java.util.Map<string,any>;
                public getUrl(): string;
                public getData(): any;
                public setCookies(param0: string): void;
                public constructor();
                public getMethod(): string;
                public setData(param0: any): void;
                public getEnvs(): java.util.Map<string,string>;
                public getHeaders(): java.util.Map<string,string>;
                public getQueryString(): string;
                public setEnvs(param0: java.util.Map<string,string>): void;
                public constructor(param0: Request);
                public setQueryString(param0: string): void;
                public setUrl(param0: string): void;
                public setOthers(param0: java.util.Map<string,string>): void;
            }
            export namespace Request {
                export class Deserializer extends JsonDeserializer<Request> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): Request;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static URL: string;
                    public static METHOD: string;
                    public static QUERY_STRING: string;
                    public static DATA: string;
                    public static COOKIES: string;
                    public static HEADERS: string;
                    public static ENV: string;
                    public static OTHER: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SdkInfo extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SdkInfo>;
                public setSdkName(param0: string): void;
                public getVersionMinor(): java.lang.Integer;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public setVersionPatchlevel(param0: java.lang.Integer): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setVersionMajor(param0: java.lang.Integer): void;
                public setVersionMinor(param0: java.lang.Integer): void;
                public getSdkName(): string;
                public getUnknown(): java.util.Map<string,any>;
                public getVersionMajor(): java.lang.Integer;
                public constructor();
                public getVersionPatchlevel(): java.lang.Integer;
            }
            export namespace SdkInfo {
                export class Deserializer extends JsonDeserializer<SdkInfo> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SdkInfo;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SdkVersion extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SdkVersion>;
                public setName(param0: string): void;
                public static updateSdkVersion(param0: SdkVersion, param1: string, param2: string): SdkVersion;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getIntegrations(): java.util.List<string>;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public getPackages(): java.util.List<SentryPackage>;
                public setVersion(param0: string): void;
                public addIntegration(param0: string): void;
                public getVersion(): string;
                public addPackage(param0: string, param1: string): void;
                public constructor(param0: string, param1: string);
            }
            export namespace SdkVersion {
                export class Deserializer extends JsonDeserializer<SdkVersion> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SdkVersion;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SentryException extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryException>;
                public getType(): string;
                public getModule(): string;
                public getMechanism(): Mechanism;
                public setModule(param0: string): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getValue(): string;
                public setType(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
                public constructor();
                public setValue(param0: string): void;
                public setThreadId(param0: java.lang.Long): void;
                public getStacktrace(): SentryStackTrace;
                public setMechanism(param0: Mechanism): void;
                public getThreadId(): java.lang.Long;
                public setStacktrace(param0: SentryStackTrace): void;
            }
            export namespace SentryException {
                export class Deserializer extends JsonDeserializer<SentryException> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryException;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SentryId extends java.lang.Object implements JsonSerializable {
                public static class: java.lang.Class<SentryId>;
                public static EMPTY_ID: SentryId;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public hashCode(): number;
                public constructor(param0: java.util.UUID);
                public equals(param0: any): boolean;
                public toString(): string;
                public constructor(param0: string);
                public constructor();
            }
            export namespace SentryId {
                export class Deserializer extends JsonDeserializer<SentryId> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryId;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryPackage extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryPackage>;
                public setName(param0: string): void;
                public getVersion(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public setVersion(param0: string): void;
                public constructor(param0: string, param1: string);
            }
            export namespace SentryPackage {
                export class Deserializer extends JsonDeserializer<SentryPackage> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryPackage;
                    public constructor();
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SentryRuntime extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryRuntime>;
                public static TYPE: string;
                public setName(param0: string): void;
                public getVersion(): string;
                public getRawDescription(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setRawDescription(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public setVersion(param0: string): void;
                public constructor();
            }
            export namespace SentryRuntime {
                export class Deserializer extends JsonDeserializer<SentryRuntime> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryRuntime;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SentrySpan extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentrySpan>;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public getDescription(): string;
                public isFinished(): boolean;
                public getData(): java.util.Map<string,any>;
                public getSpanId(): SpanId;
                public getTags(): java.util.Map<string,string>;
                public getOp(): string;
                public getStartTimestamp(): java.lang.Double;
                public getTraceId(): SentryId;
                public getStatus(): SpanStatus;
                public getParentSpanId(): SpanId;
                public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: SentryId, param3: SpanId, param4: SpanId, param5: string, param6: string, param7: SpanStatus, param8: java.util.Map<string,string>, param9: java.util.Map<string,any>);
                public getTimestamp(): java.lang.Double;
                public constructor(param0: Span, param1: java.util.Map<string,any>);
                public constructor(param0: Span);
            }
            export namespace SentrySpan {
                export class Deserializer extends JsonDeserializer<SentrySpan> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentrySpan;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static START_TIMESTAMP: string;
                    public static TIMESTAMP: string;
                    public static TRACE_ID: string;
                    public static SPAN_ID: string;
                    public static PARENT_SPAN_ID: string;
                    public static OP: string;
                    public static DESCRIPTION: string;
                    public static STATUS: string;
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
            export class SentryStackFrame extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryStackFrame>;
                public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
                public getModule(): string;
                public setModule(param0: string): void;
                public setPostContext(param0: java.util.List<string>): void;
                public getAbsPath(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getFunction(): string;
                public setVars(param0: java.util.Map<string,string>): void;
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
                public getUnknown(): java.util.Map<string,any>;
                public getPostContext(): java.util.List<string>;
                public getContextLine(): string;
                public getSymbolAddr(): string;
                public setInstructionAddr(param0: string): void;
                public getRawFunction(): string;
                public setLineno(param0: java.lang.Integer): void;
                public setContextLine(param0: string): void;
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
                export class Deserializer extends JsonDeserializer<SentryStackFrame> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryStackFrame;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryStackTrace extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryStackTrace>;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public setRegisters(param0: java.util.Map<string,string>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public constructor(param0: java.util.List<SentryStackFrame>);
                public getRegisters(): java.util.Map<string,string>;
                public setSnapshot(param0: java.lang.Boolean): void;
                public setFrames(param0: java.util.List<SentryStackFrame>): void;
                public getSnapshot(): java.lang.Boolean;
                public getUnknown(): java.util.Map<string,any>;
                public constructor();
                public getFrames(): java.util.List<SentryStackFrame>;
            }
            export namespace SentryStackTrace {
                export class Deserializer extends JsonDeserializer<SentryStackTrace> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryStackTrace;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class SentryThread extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryThread>;
                public setName(param0: string): void;
                public getPriority(): java.lang.Integer;
                public isCrashed(): java.lang.Boolean;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public setDaemon(param0: java.lang.Boolean): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setCurrent(param0: java.lang.Boolean): void;
                public getUnknown(): java.util.Map<string,any>;
                public getName(): string;
                public setCrashed(param0: java.lang.Boolean): void;
                public setId(param0: java.lang.Long): void;
                public isCurrent(): java.lang.Boolean;
                public constructor();
                public getStacktrace(): SentryStackTrace;
                public getState(): string;
                public isDaemon(): java.lang.Boolean;
                public getId(): java.lang.Long;
                public setStacktrace(param0: SentryStackTrace): void;
                public setState(param0: string): void;
                public setPriority(param0: java.lang.Integer): void;
            }
            export namespace SentryThread {
                export class Deserializer extends JsonDeserializer<SentryThread> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryThread;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static ID: string;
                    public static PRIORITY: string;
                    public static NAME: string;
                    public static STATE: string;
                    public static CRASHED: string;
                    public static CURRENT: string;
                    public static DAEMON: string;
                    public static STACKTRACE: string;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryTransaction extends SentryBaseEvent implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<SentryTransaction>;
                public getType(): string;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public constructor(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.util.List<SentrySpan>, param4: java.util.Map<string,MeasurementValue>, param5: TransactionInfo);
                public getUnknown(): java.util.Map<string,any>;
                public isFinished(): boolean;
                public getSpans(): java.util.List<SentrySpan>;
                public getSamplingDecision(): TracesSamplingDecision;
                public getMeasurements(): java.util.Map<string,MeasurementValue>;
                public constructor();
                public isSampled(): boolean;
                public getStartTimestamp(): java.lang.Double;
                public getStatus(): SpanStatus;
                public constructor(param0: SentryTracer);
                public getTimestamp(): java.lang.Double;
                public getTransaction(): string;
                public constructor(param0: SentryId);
            }
            export namespace SentryTransaction {
                export class Deserializer extends JsonDeserializer<SentryTransaction> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): SentryTransaction;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
            export class TransactionInfo extends java.lang.Object implements JsonSerializable, JsonUnknown {
                public static class: java.lang.Class<TransactionInfo>;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public getUnknown(): java.util.Map<string,any>;
                public constructor(param0: string);
            }
            export namespace TransactionInfo {
                export class Deserializer extends JsonDeserializer<TransactionInfo> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                    public deserialize(param0: JsonObjectReader, param1: ILogger): TransactionInfo;
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
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
                public static class: java.lang.Class<TransactionNameSource>;
                public static CUSTOM: TransactionNameSource;
                public static URL: TransactionNameSource;
                public static ROUTE: TransactionNameSource;
                public static VIEW: TransactionNameSource;
                public static COMPONENT: TransactionNameSource;
                public static TASK: TransactionNameSource;
                public apiName(): string;
                public static values(): androidNative.Array<TransactionNameSource>;
                public static valueOf(param0: string): TransactionNameSource;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class User extends java.lang.Object implements JsonUnknown, JsonSerializable {
                public static class: java.lang.Class<User>;
                public getId(): string;
                public getSegment(): string;
                public getEmail(): string;
                /** @deprecated */
                public setOthers(param0: java.util.Map<string,string>): void;
                public setUnknown(param0: java.util.Map<string,any>): void;
                public getIpAddress(): string;
                public serialize(param0: JsonObjectWriter, param1: ILogger): void;
                public setEmail(param0: string): void;
                public getUnknown(): java.util.Map<string,any>;
                public setData(param0: java.util.Map<string,string>): void;
                public constructor();
                /** @deprecated */
                public getOthers(): java.util.Map<string,string>;
                public constructor(param0: User);
                public setId(param0: string): void;
                public setUsername(param0: string): void;
                public getUsername(): string;
                public setIpAddress(param0: string): void;
                public getData(): java.util.Map<string,string>;
                public setSegment(param0: string): void;
            }
            export namespace User {
                export class Deserializer extends JsonDeserializer<User> {
                    public static class: java.lang.Class<Deserializer>;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): User;
                    public deserialize(param0: JsonObjectReader, param1: ILogger): any;
                    public constructor();
                }
                export class JsonKeys extends java.lang.Object {
                    public static class: java.lang.Class<JsonKeys>;
                    public static EMAIL: string;
                    public static ID: string;
                    public static USERNAME: string;
                    public static SEGMENT: string;
                    public static IP_ADDRESS: string;
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
        export namespace transport {
            export class AsyncHttpTransport extends java.lang.Object implements ITransport {
                public static class: java.lang.Class<AsyncHttpTransport>;
                public constructor(param0: QueuedThreadPoolExecutor, param1: SentryOptions, param2: RateLimiter, param3: ITransportGate, param4: HttpConnection);
                public constructor(param0: SentryOptions, param1: RateLimiter, param2: ITransportGate, param3: RequestDetails);
                public close(): void;
                public send(param0: SentryEnvelope): void;
                public send(param0: SentryEnvelope, param1: Hint): void;
                public flush(param0: number): void;
            }
            export namespace AsyncHttpTransport {
                export class AsyncConnectionThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
                    public static class: java.lang.Class<AsyncConnectionThreadFactory>;
                    public newThread(param0: java.lang.Runnable): java.lang.Thread;
                }
                export class EnvelopeSender extends java.lang.Object implements java.lang.Runnable {
                    public static class: java.lang.Class<EnvelopeSender>;
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
                public static class: java.lang.Class<AuthenticatorWrapper>;
                public setDefault(param0: java.net.Authenticator): void;
                public static getInstance(): AuthenticatorWrapper;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class CurrentDateProvider extends java.lang.Object implements ICurrentDateProvider {
                public static class: java.lang.Class<CurrentDateProvider>;
                public getCurrentTimeMillis(): number;
                public static getInstance(): ICurrentDateProvider;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class HttpConnection extends java.lang.Object {
                public static class: java.lang.Class<HttpConnection>;
                public send(param0: SentryEnvelope): TransportResult;
                public updateRetryAfterLimits(param0: java.net.HttpURLConnection, param1: number): void;
                public constructor(param0: SentryOptions, param1: RequestDetails, param2: RateLimiter);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class ICurrentDateProvider extends java.lang.Object {
                public static class: java.lang.Class<ICurrentDateProvider>;
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
                public static class: java.lang.Class<ITransport>;
                /**
				 * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    send(param0: SentryEnvelope, param1: Hint): void;
                    send(param0: SentryEnvelope): void;
                    flush(param0: number): void;
                    close(): void;
                    close(): void;
                });
                public constructor();
                public close(): void;
                public send(param0: SentryEnvelope): void;
                public send(param0: SentryEnvelope, param1: Hint): void;
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class ITransportGate extends java.lang.Object {
                public static class: java.lang.Class<ITransportGate>;
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
            export class NoOpEnvelopeCache extends java.lang.Object implements cache.IEnvelopeCache {
                public static class: java.lang.Class<NoOpEnvelopeCache>;
                public discard(param0: SentryEnvelope): void;
                public spliterator(): java.util.Spliterator<any>;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
                public static getInstance(): NoOpEnvelopeCache;
                public store(param0: SentryEnvelope, param1: Hint): void;
                public iterator(): java.util.Iterator<SentryEnvelope>;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class NoOpTransport extends java.lang.Object implements ITransport {
                public static class: java.lang.Class<NoOpTransport>;
                public close(): void;
                public static getInstance(): NoOpTransport;
                public send(param0: SentryEnvelope): void;
                public send(param0: SentryEnvelope, param1: Hint): void;
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class NoOpTransportGate extends java.lang.Object implements ITransportGate {
                public static class: java.lang.Class<NoOpTransportGate>;
                public isConnected(): boolean;
                public static getInstance(): NoOpTransportGate;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class ProxyAuthenticator extends java.net.Authenticator {
                public static class: java.lang.Class<ProxyAuthenticator>;
                public getPasswordAuthentication(): java.net.PasswordAuthentication;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class QueuedThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
                public static class: java.lang.Class<QueuedThreadPoolExecutor>;
                public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
                public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                public isTerminated(): boolean;
                public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: ILogger);
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
                    public static class: java.lang.Class<CancelledFuture<any>>;
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
                public static class: java.lang.Class<RateLimiter>;
                public constructor(param0: SentryOptions);
                public constructor(param0: ICurrentDateProvider, param1: SentryOptions);
                public updateRetryAfterLimits(param0: string, param1: string, param2: number): void;
                public filter(param0: SentryEnvelope, param1: Hint): SentryEnvelope;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class ReusableCountLatch extends java.lang.Object {
                public static class: java.lang.Class<ReusableCountLatch>;
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
                    public static class: java.lang.Class<Sync>;
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
            export class StdoutTransport extends java.lang.Object implements ITransport {
                public static class: java.lang.Class<StdoutTransport>;
                public close(): void;
                public send(param0: SentryEnvelope): void;
                public send(param0: SentryEnvelope, param1: Hint): void;
                public constructor(param0: ISerializer);
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export abstract class TransportResult extends java.lang.Object {
                public static class: java.lang.Class<TransportResult>;
                public static success(): TransportResult;
                public getResponseCode(): number;
                public isSuccess(): boolean;
                public static error(): TransportResult;
                public static error(param0: number): TransportResult;
            }
            export namespace TransportResult {
                export class ErrorTransportResult extends TransportResult {
                    public static class: java.lang.Class<ErrorTransportResult>;
                    public getResponseCode(): number;
                    public isSuccess(): boolean;
                }
                export class SuccessTransportResult extends TransportResult {
                    public static class: java.lang.Class<SuccessTransportResult>;
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
            export class CollectionUtils extends java.lang.Object {
                public static class: java.lang.Class<CollectionUtils>;
                public static newArrayList(param0: java.util.List<any>): java.util.List<any>;
                public static size(param0: java.lang.Iterable<any>): number;
                public static newHashMap(param0: java.util.Map<any,any>): java.util.Map<any,any>;
                public static filterMapEntries(param0: java.util.Map<any,any>, param1: CollectionUtils.Predicate<any>): java.util.Map<any,any>;
                public static map(param0: java.util.List<any>, param1: CollectionUtils.Mapper<any,any>): java.util.List<any>;
                public static newConcurrentHashMap(param0: java.util.Map<any,any>): java.util.Map<any,any>;
            }
            export namespace CollectionUtils {
                export class Mapper<T, R>  extends java.lang.Object {
                    public static class: java.lang.Class<Mapper<any,any>>;
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
                    public static class: java.lang.Class<Predicate<any>>;
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
            export class ExceptionUtils extends java.lang.Object {
                public static class: java.lang.Class<ExceptionUtils>;
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
                public static class: java.lang.Class<FileUtils>;
                public static readText(param0: java.io.File): string;
                public static deleteRecursively(param0: java.io.File): boolean;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class HintUtils extends java.lang.Object {
                public static class: java.lang.Class<HintUtils>;
                public static getSentrySdkHint(param0: Hint): any;
                public static runIfDoesNotHaveType(param0: Hint, param1: java.lang.Class<any>, param2: HintUtils.SentryNullableConsumer<any>): void;
                public static shouldApplyScopeData(param0: Hint): boolean;
                public static hasType(param0: Hint, param1: java.lang.Class<any>): boolean;
                public static runIfHasType(param0: Hint, param1: java.lang.Class<any>, param2: HintUtils.SentryConsumer<any>): void;
                public static createWithTypeCheckHint(param0: any): Hint;
                public static runIfHasTypeLogIfNot(param0: Hint, param1: java.lang.Class<any>, param2: ILogger, param3: HintUtils.SentryConsumer<any>): void;
                public static runIfHasType(param0: Hint, param1: java.lang.Class<any>, param2: HintUtils.SentryConsumer<any>, param3: HintUtils.SentryHintFallback): void;
                public static setTypeCheckHint(param0: Hint, param1: any): void;
            }
            export namespace HintUtils {
                export class SentryConsumer<T>  extends java.lang.Object {
                    public static class: java.lang.Class<SentryConsumer<any>>;
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
                    public static class: java.lang.Class<SentryHintFallback>;
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
                    public static class: java.lang.Class<SentryNullableConsumer<any>>;
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
            export class LogUtils extends java.lang.Object {
                public static class: java.lang.Class<LogUtils>;
                public static logNotInstanceOf(param0: java.lang.Class<any>, param1: any, param2: ILogger): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class Objects extends java.lang.Object {
                public static class: java.lang.Class<Objects>;
                public static requireNonNull(param0: any, param1: string): any;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class Pair<A, B>  extends java.lang.Object {
                public static class: java.lang.Class<Pair<any,any>>;
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
                public static class: java.lang.Class<Platform>;
                public static isJvm(): boolean;
                public static isAndroid(): boolean;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class SampleRateUtil extends java.lang.Object {
                public static class: java.lang.Class<SampleRateUtil>;
                public static isValidSampleRate(param0: java.lang.Double): boolean;
                public static isValidTracesSampleRate(param0: java.lang.Double): boolean;
                public static isValidTracesSampleRate(param0: java.lang.Double, param1: boolean): boolean;
                public static isValidSampleRate(param0: java.lang.Double, param1: boolean): boolean;
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
                public static class: java.lang.Class<StringUtils>;
                public static byteCountToString(param0: number): string;
                public static capitalize(param0: string): string;
                public static getStringAfterDot(param0: string): string;
                public static removeSurrounding(param0: string, param1: string): string;
                public static countOf(param0: string, param1: string): number;
                public static calculateStringHash(param0: string, param1: ILogger): string;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace vendor {
            export class Base64 extends java.lang.Object {
                public static class: java.lang.Class<Base64>;
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
                    public static class: java.lang.Class<Coder>;
                    public output: androidNative.Array<number>;
                    public op: number;
                    public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
                    public maxOutputSize(param0: number): number;
                }
                export class Decoder extends Coder {
                    public static class: java.lang.Class<Decoder>;
                    public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
                    public maxOutputSize(param0: number): number;
                    public constructor(param0: number, param1: androidNative.Array<number>);
                }
                export class Encoder extends Coder {
                    public static class: java.lang.Class<Encoder>;
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
                                public static class: java.lang.Class<ISO8601Utils>;
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
                        public static class: java.lang.Class<JsonReader>;
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
                        public peek(): JsonToken;
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
                        public static class: java.lang.Class<JsonScope>;
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
                        public static class: java.lang.Class<JsonToken>;
                        public static BEGIN_ARRAY: JsonToken;
                        public static END_ARRAY: JsonToken;
                        public static BEGIN_OBJECT: JsonToken;
                        public static END_OBJECT: JsonToken;
                        public static NAME: JsonToken;
                        public static STRING: JsonToken;
                        public static NUMBER: JsonToken;
                        public static BOOLEAN: JsonToken;
                        public static NULL: JsonToken;
                        public static END_DOCUMENT: JsonToken;
                        public static values(): androidNative.Array<JsonToken>;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): JsonToken;
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
                        public static class: java.lang.Class<JsonWriter>;
                        public close(): void;
                        public setSerializeNulls(param0: boolean): void;
                        public constructor(param0: java.io.Writer);
                        public endArray(): JsonWriter;
                        public isLenient(): boolean;
                        public nullValue(): JsonWriter;
                        public flush(): void;
                        public setIndent(param0: string): void;
                        public endObject(): JsonWriter;
                        public getSerializeNulls(): boolean;
                        public name(param0: string): JsonWriter;
                        public beginObject(): JsonWriter;
                        public setLenient(param0: boolean): void;
                        public jsonValue(param0: string): JsonWriter;
                        public beginArray(): JsonWriter;
                        public value(param0: string): JsonWriter;
                        public value(param0: java.lang.Number): JsonWriter;
                        public value(param0: boolean): JsonWriter;
                        public isHtmlSafe(): boolean;
                        public value(param0: java.lang.Boolean): JsonWriter;
                        public setHtmlSafe(param0: boolean): void;
                        public value(param0: number): JsonWriter;
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
                        public static class: java.lang.Class<MalformedJsonException>;
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
            export class R extends java.lang.Object {
                public static class: java.lang.Class<R>;
            }
        }
    }
}

// Generics information:
// io.sentry.CircularFifoQueue:1
// io.sentry.JsonDeserializer:1
// io.sentry.OptionsContainer:1
// io.sentry.Sentry.OptionsConfiguration:1
// io.sentry.SentryValues:1
// io.sentry.SynchronizedCollection:1
// io.sentry.SynchronizedQueue:1
// io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable:1
// io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1
// io.sentry.util.CollectionUtils.Mapper:2
// io.sentry.util.CollectionUtils.Predicate:1
// io.sentry.util.HintUtils.SentryConsumer:1
// io.sentry.util.HintUtils.SentryNullableConsumer:1
// io.sentry.util.Pair:2

