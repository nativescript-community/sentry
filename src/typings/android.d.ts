/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module sentry {
		export class AsyncHttpTransportFactory extends java.lang.Object implements io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.AsyncHttpTransportFactory>;
			public constructor();
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class Attachment extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Attachment>;
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
			public constructor(param0: string, param1: string, param2: string, param3: boolean);
			public constructor(param0: string);
		}
	}
}

declare module io {
	export module sentry {
		export class Breadcrumb extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
			public static class: java.lang.Class<io.sentry.Breadcrumb>;
			public static userInteraction(param0: string, param1: string, param2: string): io.sentry.Breadcrumb;
			public static userInteraction(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): io.sentry.Breadcrumb;
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			public removeData(param0: string): void;
			public static user(param0: string, param1: string): io.sentry.Breadcrumb;
			public static query(param0: string): io.sentry.Breadcrumb;
			public getData(param0: string): any;
			public getMessage(): string;
			public static ui(param0: string, param1: string): io.sentry.Breadcrumb;
			public getData(): java.util.Map<string,any>;
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
			public constructor();
			public static navigation(param0: string, param1: string): io.sentry.Breadcrumb;
			public setMessage(param0: string): void;
			public static transaction(param0: string): io.sentry.Breadcrumb;
			public setType(param0: string): void;
			public getLevel(): io.sentry.SentryLevel;
			public getCategory(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.BuildConfig>;
			public static SENTRY_JAVA_SDK_NAME: string;
			public static VERSION_NAME: string;
		}
	}
}

declare module io {
	export module sentry {
		export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<io.sentry.CircularFifoQueue<any>>;
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

declare module io {
	export module sentry {
		export class CustomSamplingContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.CustomSamplingContext>;
			public set(param0: string, param1: any): void;
			public get(param0: string): any;
			public getData(): java.util.Map<string,any>;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class DateUtils extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.DateUtils>;
			public static getCurrentDateTime(): java.util.Date;
			public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
			public static getDateTime(param0: string): java.util.Date;
			public static getTimestamp(param0: java.util.Date): string;
			public static getDateTime(param0: number): java.util.Date;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export abstract class DirectoryProcessor extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.DirectoryProcessor>;
			public processDirectory(param0: java.io.File): void;
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
		export module DirectoryProcessor {
			export class SendCachedEnvelopeHint extends java.lang.Object implements io.sentry.hints.Cached, io.sentry.hints.Retryable, io.sentry.hints.SubmissionResult, io.sentry.hints.Flushable {
				public static class: java.lang.Class<io.sentry.DirectoryProcessor.SendCachedEnvelopeHint>;
				public isRetry(): boolean;
				public setResult(param0: boolean): void;
				public constructor(param0: number, param1: io.sentry.ILogger);
				public setRetry(param0: boolean): void;
				public isSuccess(): boolean;
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Dsn extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Dsn>;
			public getSecretKey(): string;
			public getPublicKey(): string;
			public getPath(): string;
			public getProjectId(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class DuplicateEventDetectionEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.DuplicateEventDetectionEventProcessor>;
			public constructor(param0: io.sentry.SentryOptions);
			public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeReader extends java.lang.Object implements io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.EnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class EnvelopeSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.EnvelopeSender>;
			public processEnvelopeFile(param0: string, param1: any): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.ISerializer, param2: io.sentry.ILogger, param3: number);
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class EventProcessor extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.EventProcessor>;
			/**
			 * Constructs a new instance of the io.sentry.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
				process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
			});
			public constructor();
			public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class GsonSerializer extends java.lang.Object implements io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.GsonSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public constructor(param0: io.sentry.SentryOptions);
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class HostnameCache extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.HostnameCache>;
			public constructor();
		}
		export module HostnameCache {
			export class HostnameCacheThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
				public static class: java.lang.Class<io.sentry.HostnameCache.HostnameCacheThreadFactory>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class Hub extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.Hub>;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
			public constructor(param0: io.sentry.SentryOptions);
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public clone(): any;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public close(): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public setTag(param0: string, param1: string): void;
			public startSession(): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class HubAdapter extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.HubAdapter>;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public clone(): any;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
			public static getInstance(): io.sentry.HubAdapter;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public close(): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public setTag(param0: string, param1: string): void;
			public startSession(): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class IEnvelopeSender extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IEnvelopeSender>;
			/**
			 * Constructs a new instance of the io.sentry.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				processEnvelopeFile(param0: string, param1: any): void;
			});
			public constructor();
			public processEnvelopeFile(param0: string, param1: any): void;
		}
	}
}

declare module io {
	export module sentry {
		export class IHub extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IHub>;
			/**
			 * Constructs a new instance of the io.sentry.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureMessage(param0: string): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				startSession(): void;
				endSession(): void;
				close(): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
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
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
				startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
				startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
				startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
				traceHeaders(): io.sentry.SentryTraceHeader;
				setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
				getSpan(): io.sentry.ISpan;
				getOptions(): io.sentry.SentryOptions;
				isCrashedLastRun(): java.lang.Boolean;
			});
			public constructor();
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
			public isCrashedLastRun(): java.lang.Boolean;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public getOptions(): io.sentry.SentryOptions;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public clone(): any;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
			public addBreadcrumb(param0: string): void;
			public getSpan(): io.sentry.ISpan;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public close(): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public setTag(param0: string, param1: string): void;
			public startSession(): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class IScopeObserver extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IScopeObserver>;
			/**
			 * Constructs a new instance of the io.sentry.IScopeObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setUser(param0: io.sentry.protocol.User): void;
				addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				setTag(param0: string, param1: string): void;
				removeTag(param0: string): void;
				setExtra(param0: string, param1: string): void;
				removeExtra(param0: string): void;
			});
			public constructor();
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public setExtra(param0: string, param1: string): void;
			public removeExtra(param0: string): void;
			public removeTag(param0: string): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryClient extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISentryClient>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isEnabled(): boolean;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				close(): void;
				flush(param0: number): void;
				captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
				captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
				captureUserFeedback(param0: io.sentry.UserFeedback): void;
				captureSession(param0: io.sentry.Session, param1: any): void;
				captureSession(param0: io.sentry.Session): void;
				captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
				captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: io.sentry.Scope, param3: any): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
				captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			});
			public constructor();
			public captureSession(param0: io.sentry.Session): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public isEnabled(): boolean;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: io.sentry.Scope, param3: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class ISentryExecutorService extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISentryExecutorService>;
			/**
			 * Constructs a new instance of the io.sentry.ISentryExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				close(param0: number): void;
			});
			public constructor();
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISerializer extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISerializer>;
			/**
			 * Constructs a new instance of the io.sentry.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
				deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
				serialize(param0: any, param1: java.io.Writer): void;
				serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
				serialize(param0: java.util.Map<string,any>): string;
			});
			public constructor();
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ISpan extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ISpan>;
			/**
			 * Constructs a new instance of the io.sentry.ISpan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				traceState(): io.sentry.TraceState;
				toTraceStateHeader(): io.sentry.TraceStateHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
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
			});
			public constructor();
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public finish(): void;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getData(param0: string): any;
			public traceState(): io.sentry.TraceState;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class ITransaction extends java.lang.Object implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.ITransaction>;
			/**
			 * Constructs a new instance of the io.sentry.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setName(param0: string): void;
				getName(): string;
				getSpans(): java.util.List<io.sentry.Span>;
				isSampled(): java.lang.Boolean;
				getLatestActiveSpan(): io.sentry.Span;
				getEventId(): io.sentry.protocol.SentryId;
				setRequest(param0: io.sentry.protocol.Request): void;
				getRequest(): io.sentry.protocol.Request;
				getContexts(): io.sentry.protocol.Contexts;
				startChild(param0: string): io.sentry.ISpan;
				startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
				startChild(param0: string, param1: string): io.sentry.ISpan;
				toSentryTrace(): io.sentry.SentryTraceHeader;
				traceState(): io.sentry.TraceState;
				toTraceStateHeader(): io.sentry.TraceStateHeader;
				finish(): void;
				finish(param0: io.sentry.SpanStatus): void;
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
			});
			public constructor();
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			/** @deprecated */
			public getRequest(): io.sentry.protocol.Request;
			/** @deprecated */
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getTag(param0: string): string;
			public traceState(): io.sentry.TraceState;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			/** @deprecated */
			public getContexts(): io.sentry.protocol.Contexts;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class IUnknownPropertiesConsumer extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IUnknownPropertiesConsumer>;
			/**
			 * Constructs a new instance of the io.sentry.IUnknownPropertiesConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			});
			public constructor();
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class IpAddressUtils extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.IpAddressUtils>;
			public static isDefault(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class MainEventProcessor extends java.lang.Object implements io.sentry.EventProcessor, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.MainEventProcessor>;
			public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
			public close(): void;
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpEnvelopeReader extends java.lang.Object implements io.sentry.IEnvelopeReader {
			public static class: java.lang.Class<io.sentry.NoOpEnvelopeReader>;
			public read(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public static getInstance(): io.sentry.NoOpEnvelopeReader;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpHub extends java.lang.Object implements io.sentry.IHub {
			public static class: java.lang.Class<io.sentry.NoOpHub>;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
			public isCrashedLastRun(): java.lang.Boolean;
			public getOptions(): io.sentry.SentryOptions;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
			public captureMessage(param0: string): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public configureScope(param0: io.sentry.ScopeCallback): void;
			public addBreadcrumb(param0: string, param1: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public setUser(param0: io.sentry.protocol.User): void;
			public clone(): any;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
			public bindClient(param0: io.sentry.ISentryClient): void;
			public traceHeaders(): io.sentry.SentryTraceHeader;
			public popScope(): void;
			public clone(): io.sentry.IHub;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
			public static getInstance(): io.sentry.NoOpHub;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
			public getSpan(): io.sentry.ISpan;
			public addBreadcrumb(param0: string): void;
			public getLastEventId(): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public clearBreadcrumbs(): void;
			public close(): void;
			public startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public setTag(param0: string, param1: string): void;
			public startSession(): void;
			public endSession(): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public removeTag(param0: string): void;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public isEnabled(): boolean;
			public setSpanContext(param0: java.lang.Throwable, param1: io.sentry.ISpan, param2: string): void;
			public startTransaction(param0: string, param1: string): io.sentry.ITransaction;
			public withScope(param0: io.sentry.ScopeCallback): void;
			public pushScope(): void;
			public startTransaction(param0: string, param1: string, param2: java.util.Date, param3: boolean, param4: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class NoOpSentryClient extends java.lang.Object implements io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.NoOpSentryClient>;
			public captureSession(param0: io.sentry.Session): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public static getInstance(): io.sentry.NoOpSentryClient;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public close(): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: io.sentry.Scope, param3: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSentryExecutorService extends java.lang.Object implements io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.NoOpSentryExecutorService>;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
			public static getInstance(): io.sentry.ISentryExecutorService;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSerializer extends java.lang.Object implements io.sentry.ISerializer {
			public static class: java.lang.Class<io.sentry.NoOpSerializer>;
			public serialize(param0: io.sentry.SentryEnvelope, param1: java.io.OutputStream): void;
			public static getInstance(): io.sentry.NoOpSerializer;
			public serialize(param0: java.util.Map<string,any>): string;
			public deserializeEnvelope(param0: java.io.InputStream): io.sentry.SentryEnvelope;
			public deserialize(param0: java.io.Reader, param1: java.lang.Class): any;
			public serialize(param0: any, param1: java.io.Writer): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpSpan extends java.lang.Object implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.NoOpSpan>;
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public finish(): void;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getData(param0: string): any;
			public traceState(): io.sentry.TraceState;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getThrowable(): java.lang.Throwable;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public static getInstance(): io.sentry.NoOpSpan;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransaction extends java.lang.Object implements io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.NoOpTransaction>;
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			/** @deprecated */
			public getRequest(): io.sentry.protocol.Request;
			/** @deprecated */
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public isFinished(): boolean;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public static getInstance(): io.sentry.NoOpTransaction;
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getLatestActiveSpan(): io.sentry.Span;
			public getTag(param0: string): string;
			public traceState(): io.sentry.TraceState;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			/** @deprecated */
			public getContexts(): io.sentry.protocol.Contexts;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setName(param0: string): void;
		}
	}
}

declare module io {
	export module sentry {
		export class NoOpTransportFactory extends java.lang.Object implements io.sentry.ITransportFactory {
			public static class: java.lang.Class<io.sentry.NoOpTransportFactory>;
			public static getInstance(): io.sentry.NoOpTransportFactory;
			public create(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails): io.sentry.transport.ITransport;
		}
	}
}

declare module io {
	export module sentry {
		export class OptionsContainer<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.OptionsContainer<any>>;
			public createInstance(): T;
			public static create(param0: java.lang.Class): io.sentry.OptionsContainer<any>;
		}
	}
}

declare module io {
	export module sentry {
		export class OutboxSender extends io.sentry.DirectoryProcessor implements io.sentry.IEnvelopeSender {
			public static class: java.lang.Class<io.sentry.OutboxSender>;
			public processEnvelopeFile(param0: string, param1: any): void;
			public constructor(param0: io.sentry.IHub, param1: io.sentry.IEnvelopeReader, param2: io.sentry.ISerializer, param3: io.sentry.ILogger, param4: number);
			public processFile(param0: java.io.File, param1: any): void;
			public isRelevantFileName(param0: string): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetails extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.RequestDetails>;
			public getHeaders(): java.util.Map<string,string>;
			public constructor(param0: string, param1: java.util.Map<string,string>);
			public getUrl(): java.net.URL;
		}
	}
}

declare module io {
	export module sentry {
		export class RequestDetailsResolver extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.RequestDetailsResolver>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class SamplingContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SamplingContext>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext);
			public getCustomSamplingContext(): io.sentry.CustomSamplingContext;
			public getTransactionContext(): io.sentry.TransactionContext;
		}
	}
}

declare module io {
	export module sentry {
		export class Scope extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Scope>;
			public setContexts(param0: string, param1: java.util.Collection<any>): void;
			public setContexts(param0: string, param1: string): void;
			public clearTransaction(): void;
			public getContexts(): io.sentry.protocol.Contexts;
			public setContexts(param0: string, param1: java.lang.Boolean): void;
			public getUser(): io.sentry.protocol.User;
			public getSpan(): io.sentry.ISpan;
			public removeContexts(param0: string): void;
			public withTransaction(param0: io.sentry.Scope.IWithTransaction): void;
			public setExtra(param0: string, param1: string): void;
			public addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public constructor(param0: io.sentry.SentryOptions);
			public getTags(): java.util.Map<string,string>;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public clearBreadcrumbs(): void;
			public setTag(param0: string, param1: string): void;
			public clear(): void;
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getTransaction(): io.sentry.ITransaction;
			public clearAttachments(): void;
			public setTransaction(param0: io.sentry.ITransaction): void;
			public removeExtra(param0: string): void;
			public setTransaction(param0: string): void;
			public setFingerprint(param0: java.util.List<string>): void;
			public removeTag(param0: string): void;
			public getTransactionName(): string;
			public setUser(param0: io.sentry.protocol.User): void;
			public getRequest(): io.sentry.protocol.Request;
			public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public getLevel(): io.sentry.SentryLevel;
			public addAttachment(param0: io.sentry.Attachment): void;
			public setContexts(param0: string, param1: any): void;
			public setContexts(param0: string, param1: java.lang.Number): void;
			public setContexts(param0: string, param1: java.lang.Character): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
			public setContexts(param0: string, param1: androidNative.Array<any>): void;
		}
		export module Scope {
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

declare module io {
	export module sentry {
		export class ScopeCallback extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.ScopeCallback>;
			/**
			 * Constructs a new instance of the io.sentry.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				run(param0: io.sentry.Scope): void;
			});
			public constructor();
			public run(param0: io.sentry.Scope): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SendCachedEnvelopeFireAndForgetIntegration extends java.lang.Object implements io.sentry.Integration {
			public static class: java.lang.Class<io.sentry.SendCachedEnvelopeFireAndForgetIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory);
		}
		export module SendCachedEnvelopeFireAndForgetIntegration {
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

declare module io {
	export module sentry {
		export class SendFireAndForgetEnvelopeSender extends java.lang.Object implements io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetEnvelopeSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class SendFireAndForgetOutboxSender extends java.lang.Object implements io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetFactory {
			public static class: java.lang.Class<io.sentry.SendFireAndForgetOutboxSender>;
			public processDir(param0: io.sentry.DirectoryProcessor, param1: string, param2: io.sentry.ILogger): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public create(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForget;
			public constructor(param0: io.sentry.SendCachedEnvelopeFireAndForgetIntegration.SendFireAndForgetDirPath);
			public hasValidPath(param0: string, param1: io.sentry.ILogger): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class Sentry extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Sentry>;
			public static withScope(param0: io.sentry.ScopeCallback): void;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>): void;
			public static captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public static addBreadcrumb(param0: string, param1: string): void;
			public static setLevel(param0: io.sentry.SentryLevel): void;
			public static captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public static getSpan(): io.sentry.ISpan;
			public static startTransaction(param0: string, param1: string, param2: boolean): io.sentry.ITransaction;
			public static captureMessage(param0: string): io.sentry.protocol.SentryId;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb, param1: any): void;
			public static flush(param0: number): void;
			public static getCurrentHub(): io.sentry.IHub;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date): io.sentry.ITransaction;
			public static startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext): io.sentry.ITransaction;
			public static setCurrentHub(param0: io.sentry.IHub): void;
			public static setTransaction(param0: string): void;
			public static startTransaction(param0: string, param1: string, param2: string): io.sentry.ITransaction;
			public static getLastEventId(): io.sentry.protocol.SentryId;
			public static pushScope(): void;
			public static configureScope(param0: io.sentry.ScopeCallback): void;
			public static endSession(): void;
			public static init(param0: io.sentry.Sentry.OptionsConfiguration<io.sentry.SentryOptions>, param1: boolean): void;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: boolean): io.sentry.ITransaction;
			public static bindClient(param0: io.sentry.ISentryClient): void;
			public static init(param0: string): void;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean, param3: java.util.Date, param4: boolean, param5: io.sentry.TransactionFinishedCallback): io.sentry.ITransaction;
			public static removeTag(param0: string): void;
			public static traceHeaders(): io.sentry.SentryTraceHeader;
			public static clearBreadcrumbs(): void;
			public static setUser(param0: io.sentry.protocol.User): void;
			public static popScope(): void;
			public static startSession(): void;
			public static captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public static startTransaction(param0: string, param1: string, param2: string, param3: boolean): io.sentry.ITransaction;
			public static addBreadcrumb(param0: string): void;
			public static isCrashedLastRun(): java.lang.Boolean;
			public static addBreadcrumb(param0: io.sentry.Breadcrumb): void;
			public static isEnabled(): boolean;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>, param2: boolean): void;
			public static startTransaction(param0: io.sentry.TransactionContext): io.sentry.ITransaction;
			public static startTransaction(param0: io.sentry.TransactionContext, param1: io.sentry.CustomSamplingContext, param2: boolean): io.sentry.ITransaction;
			public static captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public static captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public static captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public static removeExtra(param0: string): void;
			public static init(param0: io.sentry.SentryOptions): void;
			public static init(param0: io.sentry.OptionsContainer<any>, param1: io.sentry.Sentry.OptionsConfiguration<any>): void;
			public static setExtra(param0: string, param1: string): void;
			public static init(): void;
			public static startTransaction(param0: string, param1: string, param2: io.sentry.CustomSamplingContext, param3: boolean): io.sentry.ITransaction;
			public static setTag(param0: string, param1: string): void;
			public static close(): void;
			public static setFingerprint(param0: java.util.List<string>): void;
			public static startTransaction(param0: string, param1: string): io.sentry.ITransaction;
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
			public setPlatform(param0: string): void;
			public setSdk(param0: io.sentry.protocol.SdkVersion): void;
			public getRelease(): string;
			/** @deprecated */
			public getOriginThrowable(): java.lang.Throwable;
			public getTags(): java.util.Map<string,string>;
			public setExtra(param0: string, param1: any): void;
			public getEnvironment(): string;
			public setDist(param0: string): void;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public getExtra(param0: string): any;
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
			public getThrowable(): java.lang.Throwable;
			public setEnvironment(param0: string): void;
			public setRelease(param0: string): void;
			public getServerName(): string;
			public setBreadcrumbs(param0: java.util.List<io.sentry.Breadcrumb>): void;
			public getBreadcrumbs(): java.util.List<io.sentry.Breadcrumb>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryClient extends java.lang.Object implements io.sentry.ISentryClient {
			public static class: java.lang.Class<io.sentry.SentryClient>;
			public captureSession(param0: io.sentry.Session): void;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: any): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope): io.sentry.protocol.SentryId;
			public flush(param0: number): void;
			public captureMessage(param0: string, param1: io.sentry.SentryLevel, param2: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureException(param0: java.lang.Throwable, param1: any): io.sentry.protocol.SentryId;
			public captureUserFeedback(param0: io.sentry.UserFeedback): void;
			public captureSession(param0: io.sentry.Session, param1: any): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
			public isEnabled(): boolean;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState): io.sentry.protocol.SentryId;
			public captureEnvelope(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction, param1: io.sentry.TraceState, param2: io.sentry.Scope, param3: any): io.sentry.protocol.SentryId;
			public close(): void;
			public captureException(param0: java.lang.Throwable, param1: io.sentry.Scope): io.sentry.protocol.SentryId;
			public captureTransaction(param0: io.sentry.protocol.SentryTransaction): io.sentry.protocol.SentryId;
			public captureEvent(param0: io.sentry.SentryEvent, param1: io.sentry.Scope, param2: any): io.sentry.protocol.SentryId;
		}
		export module SentryClient {
			export class SortBreadcrumbsByDate extends java.util.Comparator<io.sentry.Breadcrumb> {
				public static class: java.lang.Class<io.sentry.SentryClient.SortBreadcrumbsByDate>;
				public static comparingInt(param0: any /* any*/): java.util.Comparator;
				public static comparingLong(param0: any /* any*/): java.util.Comparator;
				public static reverseOrder(): java.util.Comparator;
				public static nullsFirst(param0: java.util.Comparator): java.util.Comparator;
				public compare(param0: io.sentry.Breadcrumb, param1: io.sentry.Breadcrumb): number;
				public compare(param0: any, param1: any): number;
				public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
				public static comparing(param0: any /* any*/, param1: java.util.Comparator): java.util.Comparator;
				public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
				public reversed(): java.util.Comparator<any>;
				public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
				public static comparing(param0: any /* any*/): java.util.Comparator;
				public thenComparing(param0: any /* any*/): java.util.Comparator;
				public equals(param0: any): boolean;
				public static comparingDouble(param0: any /* any*/): java.util.Comparator;
				public static nullsLast(param0: java.util.Comparator): java.util.Comparator;
				public static naturalOrder(): java.util.Comparator;
				public thenComparing(param0: any /* any*/, param1: java.util.Comparator): java.util.Comparator;
				public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryCrashLastRunState extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryCrashLastRunState>;
			public isCrashedLastRun(param0: string, param1: boolean): java.lang.Boolean;
			public static getInstance(): io.sentry.SentryCrashLastRunState;
			public reset(): void;
			public setCrashedLastRun(param0: boolean): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelope extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelope>;
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

declare module io {
	export module sentry {
		export class SentryEnvelopeHeader extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeader>;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion, param2: io.sentry.TraceState);
			public getEventId(): io.sentry.protocol.SentryId;
			public constructor(param0: io.sentry.protocol.SentryId);
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.protocol.SdkVersion);
			public constructor();
			public getTrace(): io.sentry.TraceState;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.SentryEnvelopeHeader> {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeHeaderAdapter>;
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.SentryEnvelopeHeader): void;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.SentryEnvelopeHeader;
			public constructor();
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItem extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItem>;
			public static fromAttachment(param0: io.sentry.Attachment, param1: number): io.sentry.SentryEnvelopeItem;
			public static fromEvent(param0: io.sentry.ISerializer, param1: io.sentry.SentryBaseEvent): io.sentry.SentryEnvelopeItem;
			public getData(): androidNative.Array<number>;
			public static fromSession(param0: io.sentry.ISerializer, param1: io.sentry.Session): io.sentry.SentryEnvelopeItem;
			public static fromUserFeedback(param0: io.sentry.ISerializer, param1: io.sentry.UserFeedback): io.sentry.SentryEnvelopeItem;
			public getEvent(param0: io.sentry.ISerializer): io.sentry.SentryEvent;
			public getHeader(): io.sentry.SentryEnvelopeItemHeader;
			public getTransaction(param0: io.sentry.ISerializer): io.sentry.protocol.SentryTransaction;
		}
		export module SentryEnvelopeItem {
			export class CachedItem extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryEnvelopeItem.CachedItem>;
				public getBytes(): androidNative.Array<number>;
				public constructor(param0: java.util.concurrent.Callable<androidNative.Array<number>>);
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItemHeader extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeader>;
			public getLength(): number;
			public getAttachmentType(): string;
			public getFileName(): string;
			public getType(): io.sentry.SentryItemType;
			public getContentType(): string;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEnvelopeItemHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.SentryEnvelopeItemHeader> {
			public static class: java.lang.Class<io.sentry.SentryEnvelopeItemHeaderAdapter>;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.SentryEnvelopeItemHeader;
			public constructor();
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.SentryEnvelopeItemHeader): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryEvent extends io.sentry.SentryBaseEvent implements io.sentry.IUnknownPropertiesConsumer {
			public static class: java.lang.Class<io.sentry.SentryEvent>;
			public getThreads(): java.util.List<io.sentry.protocol.SentryThread>;
			public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			public constructor(param0: java.lang.Throwable);
			public getLogger(): string;
			public setDebugMeta(param0: io.sentry.protocol.DebugMeta): void;
			public setThreads(param0: java.util.List<io.sentry.protocol.SentryThread>): void;
			public getTimestamp(): java.util.Date;
			public setLevel(param0: io.sentry.SentryLevel): void;
			public constructor(param0: java.util.Date);
			public setMessage(param0: io.sentry.protocol.Message): void;
			public setLogger(param0: string): void;
			public getDebugMeta(): io.sentry.protocol.DebugMeta;
			public setExceptions(param0: java.util.List<io.sentry.protocol.SentryException>): void;
			public isErrored(): boolean;
			public constructor(param0: io.sentry.protocol.SentryId);
			public setTransaction(param0: string): void;
			public setFingerprints(param0: java.util.List<string>): void;
			public constructor();
			public isCrashed(): boolean;
			public getExceptions(): java.util.List<io.sentry.protocol.SentryException>;
			public getTransaction(): string;
			public getUnknown(): java.util.Map<string,any>;
			public setModule(param0: string, param1: string): void;
			public setModules(param0: java.util.Map<string,string>): void;
			public getLevel(): io.sentry.SentryLevel;
			public getModule(param0: string): string;
			public getFingerprints(): java.util.List<string>;
			public removeModule(param0: string): void;
			public getMessage(): io.sentry.protocol.Message;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExceptionFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryExceptionFactory>;
			public constructor(param0: io.sentry.SentryStackTraceFactory);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryExecutorService extends java.lang.Object implements io.sentry.ISentryExecutorService {
			public static class: java.lang.Class<io.sentry.SentryExecutorService>;
			public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			public close(param0: number): void;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryItemType {
			public static class: java.lang.Class<io.sentry.SentryItemType>;
			public static Session: io.sentry.SentryItemType;
			public static Event: io.sentry.SentryItemType;
			public static UserFeedback: io.sentry.SentryItemType;
			public static Attachment: io.sentry.SentryItemType;
			public static Transaction: io.sentry.SentryItemType;
			public static Unknown: io.sentry.SentryItemType;
			public static resolve(param0: any): io.sentry.SentryItemType;
			public static values(): androidNative.Array<io.sentry.SentryItemType>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public getItemType(): string;
			public static valueOf(param0: string): io.sentry.SentryItemType;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryLevel {
			public static class: java.lang.Class<io.sentry.SentryLevel>;
			public static DEBUG: io.sentry.SentryLevel;
			public static INFO: io.sentry.SentryLevel;
			public static WARNING: io.sentry.SentryLevel;
			public static ERROR: io.sentry.SentryLevel;
			public static FATAL: io.sentry.SentryLevel;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): io.sentry.SentryLevel;
			public static values(): androidNative.Array<io.sentry.SentryLevel>;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryOptions extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryOptions>;
			public getBeforeBreadcrumb(): io.sentry.SentryOptions.BeforeBreadcrumbCallback;
			public isTracingEnabled(): boolean;
			public getMaxAttachmentSize(): number;
			public isDebug(): boolean;
			public setMaxSpans(param0: number): void;
			public setEnableExternalConfiguration(param0: boolean): void;
			public getRelease(): string;
			public setEnableScopeSync(param0: boolean): void;
			public setMaxQueueSize(param0: number): void;
			public setLogger(param0: io.sentry.ILogger): void;
			public getMaxQueueSize(): number;
			public setSerializer(param0: io.sentry.ISerializer): void;
			public getConnectionTimeoutMillis(): number;
			public getReadTimeoutMillis(): number;
			public addIntegration(param0: io.sentry.Integration): void;
			public getDistinctId(): string;
			public getLogger(): io.sentry.ILogger;
			public getProguardUuid(): string;
			public constructor();
			public setDistinctId(param0: string): void;
			public getDiagnosticLevel(): io.sentry.SentryLevel;
			public getDist(): string;
			public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
			public getEventProcessors(): java.util.List<io.sentry.EventProcessor>;
			public setDebug(param0: java.lang.Boolean): void;
			public setEnvironment(param0: string): void;
			public setTransportFactory(param0: io.sentry.ITransportFactory): void;
			public getServerName(): string;
			public getFlushTimeoutMillis(): number;
			public isEnableUncaughtExceptionHandler(): boolean;
			public setSendDefaultPii(param0: boolean): void;
			public getShutdownTimeout(): number;
			public setAttachServerName(param0: boolean): void;
			public static from(param0: io.sentry.config.PropertiesProvider, param1: io.sentry.ILogger): io.sentry.SentryOptions;
			public getProxy(): io.sentry.SentryOptions.Proxy;
			public isSendDefaultPii(): boolean;
			public setTransportGate(param0: io.sentry.transport.ITransportGate): void;
			public setConnectionTimeoutMillis(param0: number): void;
			public getTransportGate(): io.sentry.transport.ITransportGate;
			public getIgnoredExceptionsForType(): java.util.Set<java.lang.Class<any>>;
			public setAttachThreads(param0: boolean): void;
			public getSdkVersion(): io.sentry.protocol.SdkVersion;
			public setEnableAutoSessionTracking(param0: boolean): void;
			public setShutdownTimeout(param0: number): void;
			public setDist(param0: string): void;
			public getMaxSpans(): number;
			public getDsn(): string;
			/** @deprecated */
			public getCacheDirSize(): number;
			public setProxy(param0: io.sentry.SentryOptions.Proxy): void;
			public getSampleRate(): java.lang.Double;
			public setEnvelopeReader(param0: io.sentry.IEnvelopeReader): void;
			public setSampleRate(param0: java.lang.Double): void;
			public getIntegrations(): java.util.List<io.sentry.Integration>;
			public getMaxCacheItems(): number;
			public setMaxCacheItems(param0: number): void;
			public setReadTimeoutMillis(param0: number): void;
			public setMaxAttachmentSize(param0: number): void;
			public setEnableNdk(param0: boolean): void;
			public setTracesSampler(param0: io.sentry.SentryOptions.TracesSamplerCallback): void;
			public setSdkVersion(param0: io.sentry.protocol.SdkVersion): void;
			public getPrintUncaughtStackTrace(): java.lang.Boolean;
			public setPrintUncaughtStackTrace(param0: java.lang.Boolean): void;
			public setEnableDeduplication(param0: java.lang.Boolean): void;
			public getTracesSampler(): io.sentry.SentryOptions.TracesSamplerCallback;
			public setEnableUncaughtExceptionHandler(param0: java.lang.Boolean): void;
			public setServerName(param0: string): void;
			public addTracingOrigin(param0: string): void;
			public setTracesSampleRate(param0: java.lang.Double): void;
			public getInAppIncludes(): java.util.List<string>;
			public getTransportFactory(): io.sentry.ITransportFactory;
			public setEnableShutdownHook(param0: boolean): void;
			public getTracingOrigins(): java.util.List<string>;
			/** @deprecated */
			public isEnableSessionTracking(): boolean;
			public isTraceSampling(): boolean;
			public setSentryClientName(param0: string): void;
			public isEnableExternalConfiguration(): boolean;
			public addInAppInclude(param0: string): void;
			public setMaxRequestBodySize(param0: io.sentry.SentryOptions.RequestSize): void;
			public isEnableShutdownHook(): boolean;
			public getEnvelopeDiskCache(): io.sentry.cache.IEnvelopeCache;
			public getMaxBreadcrumbs(): number;
			public setProguardUuid(param0: string): void;
			public isEnableNdk(): boolean;
			/** @deprecated */
			public setEnableSessionTracking(param0: boolean): void;
			public isEnableDeduplication(): boolean;
			public setAttachStacktrace(param0: boolean): void;
			public isEnableScopeSync(): boolean;
			public getSerializer(): io.sentry.ISerializer;
			public getOutboxPath(): string;
			public setEnvelopeDiskCache(param0: io.sentry.cache.IEnvelopeCache): void;
			public getEnvelopeReader(): io.sentry.IEnvelopeReader;
			public setRelease(param0: string): void;
			public isPrintUncaughtStackTrace(): boolean;
			public getSentryClientName(): string;
			public addScopeObserver(param0: io.sentry.IScopeObserver): void;
			public getCacheDirPath(): string;
			public setBeforeBreadcrumb(param0: io.sentry.SentryOptions.BeforeBreadcrumbCallback): void;
			public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
			public addInAppExclude(param0: string): void;
			public isAttachThreads(): boolean;
			public setBeforeSend(param0: io.sentry.SentryOptions.BeforeSendCallback): void;
			public setCacheDirPath(param0: string): void;
			public getSessionTrackingIntervalMillis(): number;
			public setFlushTimeoutMillis(param0: number): void;
			public getTracesSampleRate(): java.lang.Double;
			public getTags(): java.util.Map<string,string>;
			public getInAppExcludes(): java.util.List<string>;
			public setSessionTrackingIntervalMillis(param0: number): void;
			public getEnableUncaughtExceptionHandler(): java.lang.Boolean;
			public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
			public addIgnoredExceptionForType(param0: java.lang.Class<any>): void;
			public getEnvironment(): string;
			public setTag(param0: string, param1: string): void;
			/** @deprecated */
			public setCacheDirSize(param0: number): void;
			public isEnableAutoSessionTracking(): boolean;
			public setTraceSampling(param0: boolean): void;
			public getBeforeSend(): io.sentry.SentryOptions.BeforeSendCallback;
			public setDsn(param0: string): void;
			public isAttachServerName(): boolean;
			public getMaxRequestBodySize(): io.sentry.SentryOptions.RequestSize;
			public isAttachStacktrace(): boolean;
			public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
			public setMaxBreadcrumbs(param0: number): void;
			public setDiagnosticLevel(param0: io.sentry.SentryLevel): void;
			public addEventProcessor(param0: io.sentry.EventProcessor): void;
		}
		export module SentryOptions {
			export class BeforeBreadcrumbCallback extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeBreadcrumbCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.Breadcrumb, param1: any): io.sentry.Breadcrumb;
				});
				public constructor();
				public execute(param0: io.sentry.Breadcrumb, param1: any): io.sentry.Breadcrumb;
			}
			export class BeforeSendCallback extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryOptions.BeforeSendCallback>;
				/**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
				});
				public constructor();
				public execute(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
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
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module io {
	export module sentry {
		export class SentryRuntimeEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
			public static class: java.lang.Class<io.sentry.SentryRuntimeEventProcessor>;
			public constructor(param0: string, param1: string);
			public constructor();
			public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
			public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
		}
	}
}

declare module io {
	export module sentry {
		export class SentryStackTraceFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryStackTraceFactory>;
			public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
		}
	}
}

declare module io {
	export module sentry {
		export class SentryThreadFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryThreadFactory>;
			public constructor(param0: io.sentry.SentryStackTraceFactory, param1: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class SentryTracer extends java.lang.Object implements io.sentry.ITransaction {
			public static class: java.lang.Class<io.sentry.SentryTracer>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub, param2: boolean, param3: io.sentry.TransactionFinishedCallback);
			public getEventId(): io.sentry.protocol.SentryId;
			public finish(): void;
			/** @deprecated */
			public getRequest(): io.sentry.protocol.Request;
			/** @deprecated */
			public setRequest(param0: io.sentry.protocol.Request): void;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getData(): java.util.Map<string,any>;
			public isFinished(): boolean;
			public getChildren(): java.util.List<io.sentry.Span>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.IHub);
			public getTimestamp(): java.util.Date;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getStartTimestamp(): java.util.Date;
			public setThrowable(param0: java.lang.Throwable): void;
			public setTag(param0: string, param1: string): void;
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getLatestActiveSpan(): io.sentry.Span;
			public traceState(): io.sentry.TraceState;
			public getThrowable(): java.lang.Throwable;
			public getName(): string;
			public getSpans(): java.util.List<io.sentry.Span>;
			public isSampled(): java.lang.Boolean;
			/** @deprecated */
			public getContexts(): io.sentry.protocol.Contexts;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
			public setName(param0: string): void;
		}
		export module SentryTracer {
			export class FinishStatus extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.SentryTracer.FinishStatus>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SentryValues<T>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SentryValues<any>>;
			public getValues(): java.util.List<T>;
		}
	}
}

declare module io {
	export module sentry {
		export class Session extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Session>;
			public end(param0: java.util.Date): void;
			public constructor(param0: io.sentry.Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string);
			public setInitAsTrue(): void;
			public getDistinctId(): string;
			public end(): void;
			public getUserAgent(): string;
			public getStarted(): java.util.Date;
			public getSessionId(): java.util.UUID;
			public errorCount(): number;
			public update(param0: io.sentry.Session.State, param1: string, param2: boolean): boolean;
			public getIpAddress(): string;
			public getDuration(): java.lang.Double;
			public getInit(): java.lang.Boolean;
			public getRelease(): string;
			public constructor(param0: string, param1: io.sentry.protocol.User, param2: string, param3: string);
			public clone(): any;
			public getSequence(): java.lang.Long;
			public getStatus(): io.sentry.Session.State;
			public getTimestamp(): java.util.Date;
			public clone(): io.sentry.Session;
			public getEnvironment(): string;
		}
		export module Session {
			export class State {
				public static class: java.lang.Class<io.sentry.Session.State>;
				public static Ok: io.sentry.Session.State;
				public static Exited: io.sentry.Session.State;
				public static Crashed: io.sentry.Session.State;
				public static Abnormal: io.sentry.Session.State;
				public static valueOf(param0: string): io.sentry.Session.State;
				public static values(): androidNative.Array<io.sentry.Session.State>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SessionAdapter extends com.google.gson.TypeAdapter<io.sentry.Session> {
			public static class: java.lang.Class<io.sentry.SessionAdapter>;
			public read(param0: com.google.gson.stream.JsonReader): io.sentry.Session;
			public write(param0: com.google.gson.stream.JsonWriter, param1: io.sentry.Session): void;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class ShutdownHookIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.ShutdownHookIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public constructor(param0: java.lang.Runtime);
			public close(): void;
		}
	}
}

declare module io {
	export module sentry {
		export class Span extends java.lang.Object implements io.sentry.ISpan {
			public static class: java.lang.Class<io.sentry.Span>;
			public constructor(param0: io.sentry.TransactionContext, param1: io.sentry.SentryTracer, param2: io.sentry.IHub, param3: java.util.Date);
			public finish(): void;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getData(param0: string): any;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getParentSpanId(): io.sentry.SpanId;
			public getData(): java.util.Map<string,any>;
			public isFinished(): boolean;
			public getTags(): java.util.Map<string,string>;
			public getTimestamp(): java.util.Date;
			public getStatus(): io.sentry.SpanStatus;
			public setData(param0: string, param1: any): void;
			public toSentryTrace(): io.sentry.SentryTraceHeader;
			public getOperation(): string;
			public getStartTimestamp(): java.util.Date;
			public setTag(param0: string, param1: string): void;
			public setThrowable(param0: java.lang.Throwable): void;
			public toTraceStateHeader(): io.sentry.TraceStateHeader;
			public setOperation(param0: string): void;
			public startChild(param0: string, param1: string): io.sentry.ISpan;
			public setDescription(param0: string): void;
			public finish(param0: io.sentry.SpanStatus): void;
			public getSpanContext(): io.sentry.SpanContext;
			public getTag(param0: string): string;
			public getSpanId(): io.sentry.SpanId;
			public traceState(): io.sentry.TraceState;
			public getThrowable(): java.lang.Throwable;
			public isSampled(): java.lang.Boolean;
			public startChild(param0: string, param1: string, param2: java.util.Date): io.sentry.ISpan;
			public getDescription(): string;
			public startChild(param0: string): io.sentry.ISpan;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanContext extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SpanContext>;
			public static TYPE: string;
			public op: string;
			public description: string;
			public status: io.sentry.SpanStatus;
			public tags: java.util.Map<string,string>;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: java.lang.Boolean);
			public constructor(param0: io.sentry.SpanContext);
			public setOperation(param0: string): void;
			public getSampled(): java.lang.Boolean;
			public setDescription(param0: string): void;
			public constructor(param0: string, param1: java.lang.Boolean);
			public getTraceId(): io.sentry.protocol.SentryId;
			public getSpanId(): io.sentry.SpanId;
			public setStatus(param0: io.sentry.SpanStatus): void;
			public getParentSpanId(): io.sentry.SpanId;
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: java.lang.Boolean, param6: io.sentry.SpanStatus);
			public getTags(): java.util.Map<string,string>;
			public getStatus(): io.sentry.SpanStatus;
			public getOperation(): string;
			public getDescription(): string;
			public constructor(param0: string);
			public setTag(param0: string, param1: string): void;
			public setSampled(param0: java.lang.Boolean): void;
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class SpanId extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SpanId>;
			public static EMPTY_ID: io.sentry.SpanId;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor();
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module io {
	export module sentry {
		export class SpanStatus {
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
			public static valueOf(param0: string): io.sentry.SpanStatus;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static fromHttpStatusCode(param0: number): io.sentry.SpanStatus;
			public static fromHttpStatusCode(param0: java.lang.Integer, param1: io.sentry.SpanStatus): io.sentry.SpanStatus;
			public static values(): androidNative.Array<io.sentry.SpanStatus>;
		}
	}
}

declare module io {
	export module sentry {
		export class Stack extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.Stack>;
			public constructor(param0: io.sentry.ILogger, param1: io.sentry.Stack.StackItem);
			public constructor(param0: io.sentry.Stack);
		}
		export module Stack {
			export class StackItem extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.Stack.StackItem>;
				public getOptions(): io.sentry.SentryOptions;
				public getClient(): io.sentry.ISentryClient;
				public getScope(): io.sentry.Scope;
				public setClient(param0: io.sentry.ISentryClient): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class SynchronizedCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.SynchronizedCollection<any>>;
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
			public static synchronizedCollection(param0: java.util.Collection): io.sentry.SynchronizedCollection<any>;
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

declare module io {
	export module sentry {
		export class SynchronizedQueue<E>  extends io.sentry.SynchronizedCollection<any> implements java.util.Queue<any>  {
			public static class: java.lang.Class<io.sentry.SynchronizedQueue<any>>;
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

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
		export class TraceState extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TraceState>;
			public getRelease(): string;
			public getPublicKey(): string;
			public getTransaction(): string;
			public getUser(): io.sentry.TraceState.TraceStateUser;
			public getTraceId(): io.sentry.protocol.SentryId;
			public getEnvironment(): string;
		}
		export module TraceState {
			export class TraceStateUser extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.TraceState.TraceStateUser>;
				public getId(): string;
				public getSegment(): string;
				public constructor(param0: io.sentry.protocol.User);
			}
		}
	}
}

declare module io {
	export module sentry {
		export class TraceStateHeader extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TraceStateHeader>;
			public static TRACE_STATE_HEADER: string;
			public getName(): string;
			public static fromTraceState(param0: io.sentry.TraceState, param1: io.sentry.ISerializer, param2: io.sentry.ILogger): io.sentry.TraceStateHeader;
			public getValue(): string;
			public constructor(param0: string);
		}
	}
}

declare module io {
	export module sentry {
		export class TracesSampler extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TracesSampler>;
			public constructor(param0: io.sentry.SentryOptions);
		}
	}
}

declare module io {
	export module sentry {
		export class TracingOrigins extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.TracingOrigins>;
			public static contain(param0: java.util.List<string>, param1: string): boolean;
			public constructor();
			public static contain(param0: java.util.List<string>, param1: java.net.URI): boolean;
		}
	}
}

declare module io {
	export module sentry {
		export class TransactionContext extends io.sentry.SpanContext {
			public static class: java.lang.Class<io.sentry.TransactionContext>;
			public static fromSentryTrace(param0: string, param1: string, param2: io.sentry.SentryTraceHeader): io.sentry.TransactionContext;
			public constructor(param0: string, param1: string);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: string, param3: io.sentry.SpanId, param4: java.lang.Boolean);
			public constructor(param0: io.sentry.protocol.SentryId, param1: io.sentry.SpanId, param2: io.sentry.SpanId, param3: string, param4: string, param5: java.lang.Boolean, param6: io.sentry.SpanStatus);
			public constructor(param0: io.sentry.SpanContext);
			public getName(): string;
			public constructor(param0: string, param1: string, param2: java.lang.Boolean);
			public constructor(param0: string, param1: java.lang.Boolean);
			public setParentSampled(param0: java.lang.Boolean): void;
			public getParentSampled(): java.lang.Boolean;
			public constructor(param0: string);
		}
	}
}

declare module io {
	export module sentry {
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

declare module io {
	export module sentry {
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
		export module UncaughtExceptionHandler {
			export class Adapter extends java.lang.Object implements io.sentry.UncaughtExceptionHandler {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandler.Adapter>;
				public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
				public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UncaughtExceptionHandlerIntegration extends java.lang.Object implements io.sentry.Integration, java.lang.Thread.UncaughtExceptionHandler, java.io.Closeable {
			public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration>;
			public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
			public constructor();
			public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			public close(): void;
		}
		export module UncaughtExceptionHandlerIntegration {
			export class UncaughtExceptionHint extends java.lang.Object implements io.sentry.hints.DiskFlushNotification, io.sentry.hints.Flushable, io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
				public markFlushed(): void;
				public waitFlush(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UnknownPropertiesTypeAdapterFactory extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.UnknownPropertiesTypeAdapterFactory>;
			public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
		}
		export module UnknownPropertiesTypeAdapterFactory {
			export class UnknownPropertiesTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
				public static class: java.lang.Class<io.sentry.UnknownPropertiesTypeAdapterFactory.UnknownPropertiesTypeAdapter<any>>;
				public read(param0: com.google.gson.stream.JsonReader): any;
				public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export class UserFeedback extends java.lang.Object {
			public static class: java.lang.Class<io.sentry.UserFeedback>;
			public setEmail(param0: string): void;
			public toString(): string;
			public getEventId(): io.sentry.protocol.SentryId;
			public getName(): string;
			public constructor(param0: io.sentry.protocol.SentryId);
			public getComments(): string;
			public setComments(param0: string): void;
			public constructor(param0: io.sentry.protocol.SentryId, param1: string, param2: string, param3: string);
			public setName(param0: string): void;
			public getEmail(): string;
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class CollectionAdapter extends com.google.gson.JsonSerializer<java.util.Collection<any>> {
				public static class: java.lang.Class<io.sentry.adapters.CollectionAdapter>;
				public serialize(param0: java.util.Collection<any>, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class ContextsDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.Contexts> {
				public static class: java.lang.Class<io.sentry.adapters.ContextsDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.Contexts;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class ContextsSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.Contexts> {
				public static class: java.lang.Class<io.sentry.adapters.ContextsSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.protocol.Contexts, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class DateDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.Date> {
				public static class: java.lang.Class<io.sentry.adapters.DateDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class DateSerializerAdapter extends com.google.gson.JsonSerializer<java.util.Date> {
				public static class: java.lang.Class<io.sentry.adapters.DateSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class MapAdapter extends com.google.gson.JsonSerializer<java.util.Map<string,any>> {
				public static class: java.lang.Class<io.sentry.adapters.MapAdapter>;
				public serialize(param0: java.util.Map<string,any>, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class OrientationDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.Device.DeviceOrientation> {
				public static class: java.lang.Class<io.sentry.adapters.OrientationDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.Device.DeviceOrientation;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class OrientationSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.Device.DeviceOrientation> {
				public static class: java.lang.Class<io.sentry.adapters.OrientationSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.protocol.Device.DeviceOrientation, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryIdDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.protocol.SentryId> {
				public static class: java.lang.Class<io.sentry.adapters.SentryIdDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.protocol.SentryId;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryIdSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.protocol.SentryId> {
				public static class: java.lang.Class<io.sentry.adapters.SentryIdSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.protocol.SentryId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryLevelDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.adapters.SentryLevelDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SentryLevel;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SentryLevelSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SentryLevel> {
				public static class: java.lang.Class<io.sentry.adapters.SentryLevelSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.SentryLevel, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanIdDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.adapters.SpanIdDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SpanId;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanIdSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SpanId> {
				public static class: java.lang.Class<io.sentry.adapters.SpanIdSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.SpanId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanStatusDeserializerAdapter extends com.google.gson.JsonDeserializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.adapters.SpanStatusDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): io.sentry.SpanStatus;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class SpanStatusSerializerAdapter extends com.google.gson.JsonSerializer<io.sentry.SpanStatus> {
				public static class: java.lang.Class<io.sentry.adapters.SpanStatusSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: io.sentry.SpanStatus, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class TimeZoneDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.TimeZone> {
				public static class: java.lang.Class<io.sentry.adapters.TimeZoneDeserializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.TimeZone;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module adapters {
			export class TimeZoneSerializerAdapter extends com.google.gson.JsonSerializer<java.util.TimeZone> {
				public static class: java.lang.Class<io.sentry.adapters.TimeZoneSerializerAdapter>;
				public constructor(param0: io.sentry.SentryOptions);
				public serialize(param0: java.util.TimeZone, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ANRWatchDog extends java.lang.Thread {
					public static class: java.lang.Class<io.sentry.android.core.ANRWatchDog>;
					public run(): void;
				}
				export module ANRWatchDog {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityFramesTracker extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.ActivityFramesTracker>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ActivityLifecycleIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.ActivityLifecycleIntegration>;
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
					public constructor(param0: globalAndroid.app.Application, param1: io.sentry.android.core.IBuildInfoProvider, param2: io.sentry.android.core.ActivityFramesTracker);
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidLogger extends java.lang.Object implements io.sentry.ILogger {
					public static class: java.lang.Class<io.sentry.android.core.AndroidLogger>;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: java.lang.Throwable): void;
					public log(param0: io.sentry.SentryLevel, param1: string, param2: androidNative.Array<any>): void;
					public log(param0: io.sentry.SentryLevel, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
					public isEnabled(param0: io.sentry.SentryLevel): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AndroidOptionsInitializer extends java.lang.Object {
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
				export class AndroidTransportGate extends java.lang.Object implements io.sentry.transport.ITransportGate {
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
				export class AnrIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.AnrIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class AppStartState extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.AppStartState>;
					public isColdStart(): java.lang.Boolean;
					public getAppStartTime(): java.util.Date;
					public static getInstance(): io.sentry.android.core.AppStartState;
					public getAppStartInterval(): java.lang.Long;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ApplicationNotResponding extends java.lang.RuntimeException {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class BuildInfoProvider extends java.lang.Object implements io.sentry.android.core.IBuildInfoProvider {
					public static class: java.lang.Class<io.sentry.android.core.BuildInfoProvider>;
					public constructor();
					public getSdkInfoVersion(): number;
					public getBuildTags(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class ContextUtils extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.ContextUtils>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class DefaultAndroidEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.DefaultAndroidEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
					public getDefaultUser(): io.sentry.protocol.User;
					public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
					public constructor(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.IBuildInfoProvider);
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class EnvelopeFileObserver extends globalAndroid.os.FileObserver {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserver>;
					public onEvent(param0: number, param1: string): void;
				}
				export module EnvelopeFileObserver {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export abstract class EnvelopeFileObserverIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.EnvelopeFileObserverIntegration>;
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public constructor();
					public close(): void;
					public static getOutboxFileObserver(): io.sentry.android.core.EnvelopeFileObserverIntegration;
				}
				export module EnvelopeFileObserverIntegration {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IBuildInfoProvider extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.IBuildInfoProvider>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IBuildInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSdkInfoVersion(): number;
						getBuildTags(): string;
					});
					public constructor();
					public getSdkInfoVersion(): number;
					public getBuildTags(): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class IHandler extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.IHandler>;
					/**
					 * Constructs a new instance of the io.sentry.android.core.IHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						post(param0: java.lang.Runnable): void;
						getThread(): java.lang.Thread;
					});
					public constructor();
					public post(param0: java.lang.Runnable): void;
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
				export class Installation extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.Installation>;
					public static id(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LifecycleWatcher extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.LifecycleWatcher>;
					public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
					public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class LoadClass extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.LoadClass>;
					public loadClass(param0: string): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class MainLooperHandler extends java.lang.Object implements io.sentry.android.core.IHandler {
					public static class: java.lang.Class<io.sentry.android.core.MainLooperHandler>;
					public post(param0: java.lang.Runnable): void;
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
				export class ManifestMetadataReader extends java.lang.Object {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PerformanceAndroidEventProcessor extends java.lang.Object implements io.sentry.EventProcessor {
					public static class: java.lang.Class<io.sentry.android.core.PerformanceAndroidEventProcessor>;
					public process(param0: io.sentry.SentryEvent, param1: any): io.sentry.SentryEvent;
					public process(param0: io.sentry.protocol.SentryTransaction, param1: any): io.sentry.protocol.SentryTransaction;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class PhoneStateBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
				}
				export module PhoneStateBreadcrumbsIntegration {
					export class PhoneStateChangeListener extends globalAndroid.telephony.PhoneStateListener {
						public static class: java.lang.Class<io.sentry.android.core.PhoneStateBreadcrumbsIntegration.PhoneStateChangeListener>;
						public onCallStateChanged(param0: number, param1: string): void;
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
				export class R extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.core.R>;
				}
				export module R {
					export class attr extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.attr>;
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
						public static class: java.lang.Class<io.sentry.android.core.R.color>;
						public static androidx_core_ripple_material_light: number;
						public static androidx_core_secondary_text_default_material_light: number;
						public static notification_action_color_filter: number;
						public static notification_icon_bg_color: number;
					}
					export class dimen extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.dimen>;
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
						public static class: java.lang.Class<io.sentry.android.core.R.drawable>;
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
						public static class: java.lang.Class<io.sentry.android.core.R.id>;
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
					}
					export class integer extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.integer>;
						public static status_bar_notification_info_maxnum: number;
					}
					export class layout extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.layout>;
						public static custom_dialog: number;
						public static notification_action: number;
						public static notification_action_tombstone: number;
						public static notification_template_custom_big: number;
						public static notification_template_icon_group: number;
						public static notification_template_part_chronometer: number;
						public static notification_template_part_time: number;
					}
					export class style extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.style>;
						public static TextAppearance_Compat_Notification: number;
						public static TextAppearance_Compat_Notification_Info: number;
						public static TextAppearance_Compat_Notification_Line2: number;
						public static TextAppearance_Compat_Notification_Time: number;
						public static TextAppearance_Compat_Notification_Title: number;
						public static Widget_Compat_NotificationActionContainer: number;
						public static Widget_Compat_NotificationActionText: number;
					}
					export class styleable extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.core.R.styleable>;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryAndroidOptions extends io.sentry.SentryOptions {
					public static class: java.lang.Class<io.sentry.android.core.SentryAndroidOptions>;
					public getDebugImagesLoader(): io.sentry.android.core.IDebugImagesLoader;
					public setEnableAutoActivityLifecycleTracing(param0: boolean): void;
					public isAnrReportInDebug(): boolean;
					public setDebugImagesLoader(param0: io.sentry.android.core.IDebugImagesLoader): void;
					public isEnableAutoActivityLifecycleTracing(): boolean;
					public setEnableAppComponentBreadcrumbs(param0: boolean): void;
					public isEnableSystemEventBreadcrumbs(): boolean;
					public enableAllAutoBreadcrumbs(param0: boolean): void;
					public isEnableAppLifecycleBreadcrumbs(): boolean;
					public isEnableActivityLifecycleBreadcrumbs(): boolean;
					public setAnrReportInDebug(param0: boolean): void;
					public isEnableUserInteractionBreadcrumbs(): boolean;
					public setAnrTimeoutIntervalMillis(param0: number): void;
					public setEnableSystemEventBreadcrumbs(param0: boolean): void;
					public setEnableUserInteractionBreadcrumbs(param0: boolean): void;
					public setEnableActivityLifecycleTracingAutoFinish(param0: boolean): void;
					public constructor();
					public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
					public isEnableActivityLifecycleTracingAutoFinish(): boolean;
					public isAnrEnabled(): boolean;
					public getAnrTimeoutIntervalMillis(): number;
					public setAnrEnabled(param0: boolean): void;
					public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
					public isEnableAppComponentBreadcrumbs(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryInitProvider extends globalAndroid.content.ContentProvider {
					public static class: java.lang.Class<io.sentry.android.core.SentryInitProvider>;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SentryPerformanceProvider extends globalAndroid.content.ContentProvider implements globalAndroid.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<io.sentry.android.core.SentryPerformanceProvider>;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export class SystemEventsBreadcrumbsIntegration extends java.lang.Object implements io.sentry.Integration, java.io.Closeable {
					public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration>;
					public constructor(param0: globalAndroid.content.Context);
					public register(param0: io.sentry.IHub, param1: io.sentry.SentryOptions): void;
					public close(): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<string>);
				}
				export module SystemEventsBreadcrumbsIntegration {
					export class SystemEventsBroadcastReceiver extends globalAndroid.content.BroadcastReceiver {
						public static class: java.lang.Class<io.sentry.android.core.SystemEventsBreadcrumbsIntegration.SystemEventsBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class SentryGestureListener extends java.lang.Object implements globalAndroid.view.GestureDetector.OnGestureListener {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.SentryGestureListener>;
							public onDown(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: java.lang.ref.WeakReference<globalAndroid.view.Window>, param1: io.sentry.IHub, param2: io.sentry.android.core.SentryAndroidOptions, param3: boolean);
							public onUp(param0: globalAndroid.view.MotionEvent): void;
							public onLongPress(param0: globalAndroid.view.MotionEvent): void;
							public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public onShowPress(param0: globalAndroid.view.MotionEvent): void;
						}
						export module SentryGestureListener {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
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
						export module SentryWindowCallback {
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class ViewTargetSelector extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewTargetSelector>;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module gestures {
						export class ViewUtils extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.gestures.ViewUtils>;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class ConnectivityChecker extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.ConnectivityChecker>;
							public static getConnectionType(param0: globalAndroid.content.Context, param1: io.sentry.ILogger, param2: io.sentry.android.core.IBuildInfoProvider): string;
							public static getConnectionStatus(param0: globalAndroid.content.Context, param1: io.sentry.ILogger): io.sentry.android.core.internal.util.ConnectivityChecker.Status;
						}
						export module ConnectivityChecker {
							export class Status {
								public static class: java.lang.Class<io.sentry.android.core.internal.util.ConnectivityChecker.Status>;
								public static CONNECTED: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
								public static NOT_CONNECTED: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
								public static NO_PERMISSION: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
								public static UNKNOWN: io.sentry.android.core.internal.util.ConnectivityChecker.Status;
								public static valueOf(param0: string): io.sentry.android.core.internal.util.ConnectivityChecker.Status;
								public static values(): androidNative.Array<io.sentry.android.core.internal.util.ConnectivityChecker.Status>;
								public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class MainThreadChecker extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.MainThreadChecker>;
							public static isMainThread(param0: io.sentry.protocol.SentryThread): boolean;
							public static isMainThread(): boolean;
							public static isMainThread(param0: java.lang.Thread): boolean;
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

declare module io {
	export module sentry {
		export module android {
			export module core {
				export module internal {
					export module util {
						export class RootChecker extends java.lang.Object {
							public static class: java.lang.Class<io.sentry.android.core.internal.util.RootChecker>;
							public isDeviceRooted(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: io.sentry.android.core.IBuildInfoProvider, param2: io.sentry.ILogger);
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
			export module ndk {
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

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class DebugImagesLoader extends java.lang.Object implements io.sentry.android.core.IDebugImagesLoader {
					public static class: java.lang.Class<io.sentry.android.ndk.DebugImagesLoader>;
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
			export module ndk {
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

declare module io {
	export module sentry {
		export module android {
			export module ndk {
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

declare module io {
	export module sentry {
		export module android {
			export module ndk {
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

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class NdkScopeObserver extends java.lang.Object implements io.sentry.IScopeObserver {
					public static class: java.lang.Class<io.sentry.android.ndk.NdkScopeObserver>;
					public setExtra(param0: string, param1: string): void;
					public constructor(param0: io.sentry.SentryOptions);
					public setUser(param0: io.sentry.protocol.User): void;
					public removeExtra(param0: string): void;
					public setTag(param0: string, param1: string): void;
					public removeTag(param0: string): void;
					public addBreadcrumb(param0: io.sentry.Breadcrumb): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class R extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.R>;
				}
				export module R {
					export class attr extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.attr>;
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
						public static class: java.lang.Class<io.sentry.android.ndk.R.color>;
						public static androidx_core_ripple_material_light: number;
						public static androidx_core_secondary_text_default_material_light: number;
						public static notification_action_color_filter: number;
						public static notification_icon_bg_color: number;
					}
					export class dimen extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.dimen>;
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
						public static class: java.lang.Class<io.sentry.android.ndk.R.drawable>;
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
						public static class: java.lang.Class<io.sentry.android.ndk.R.id>;
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
					}
					export class integer extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.integer>;
						public static status_bar_notification_info_maxnum: number;
					}
					export class layout extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.layout>;
						public static custom_dialog: number;
						public static notification_action: number;
						public static notification_action_tombstone: number;
						public static notification_template_custom_big: number;
						public static notification_template_icon_group: number;
						public static notification_template_part_chronometer: number;
						public static notification_template_part_time: number;
					}
					export class style extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.style>;
						public static TextAppearance_Compat_Notification: number;
						public static TextAppearance_Compat_Notification_Info: number;
						public static TextAppearance_Compat_Notification_Line2: number;
						public static TextAppearance_Compat_Notification_Time: number;
						public static TextAppearance_Compat_Notification_Title: number;
						public static Widget_Compat_NotificationActionContainer: number;
						public static Widget_Compat_NotificationActionText: number;
					}
					export class styleable extends java.lang.Object {
						public static class: java.lang.Class<io.sentry.android.ndk.R.styleable>;
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

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class SentryNdk extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdk>;
					public static close(): void;
					public static init(param0: io.sentry.android.core.SentryAndroidOptions): void;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module android {
			export module ndk {
				export class SentryNdkUtil extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.android.ndk.SentryNdkUtil>;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module cache {
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

declare module io {
	export module sentry {
		export module cache {
			export class EnvelopeCache extends io.sentry.cache.CacheStrategy implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.cache.EnvelopeCache>;
				public static SUFFIX_ENVELOPE_FILE: string;
				public static PREFIX_CURRENT_SESSION_FILE: string;
				public static CRASH_MARKER_FILE: string;
				public static NATIVE_CRASH_MARKER_FILE: string;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public spliterator(): java.util.Spliterator<any>;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public iterator(): java.util.Iterator<any>;
				public static create(param0: io.sentry.SentryOptions): io.sentry.cache.IEnvelopeCache;
				public iterator(): java.util.Iterator<io.sentry.SentryEnvelope>;
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
					store(param0: io.sentry.SentryEnvelope, param1: any): void;
					store(param0: io.sentry.SentryEnvelope): void;
					discard(param0: io.sentry.SentryEnvelope): void;
					iterator(): java.util.Iterator<any>;
					forEach(param0: any /* any*/): void;
					spliterator(): java.util.Spliterator<any>;
				});
				public constructor();
				public discard(param0: io.sentry.SentryEnvelope): void;
				public spliterator(): java.util.Spliterator<any>;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public iterator(): java.util.Iterator<any>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export abstract class AbstractPropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.AbstractPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class ClasspathPropertiesLoader extends java.lang.Object implements io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.ClasspathPropertiesLoader>;
				public constructor(param0: string, param1: java.lang.ClassLoader, param2: io.sentry.ILogger);
				public constructor(param0: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class CompositePropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.CompositePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public constructor(param0: java.util.List<io.sentry.config.PropertiesProvider>);
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class EnvironmentVariablePropertiesProvider extends java.lang.Object implements io.sentry.config.PropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.EnvironmentVariablePropertiesProvider>;
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class FilesystemPropertiesLoader extends java.lang.Object implements io.sentry.config.PropertiesLoader {
				public static class: java.lang.Class<io.sentry.config.FilesystemPropertiesLoader>;
				public constructor(param0: string, param1: io.sentry.ILogger);
				public load(): java.util.Properties;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
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

declare module io {
	export module sentry {
		export module config {
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
				});
				public constructor();
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class PropertiesProviderFactory extends java.lang.Object {
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
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
				public getDoubleProperty(param0: string): java.lang.Double;
				public getProperty(param0: string): string;
				public getList(param0: string): java.util.List<string>;
				public constructor(param0: java.util.Properties);
				public getBooleanProperty(param0: string): java.lang.Boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module config {
			export class SystemPropertyPropertiesProvider extends io.sentry.config.AbstractPropertiesProvider {
				public static class: java.lang.Class<io.sentry.config.SystemPropertyPropertiesProvider>;
				public constructor(param0: string, param1: java.util.Properties);
				public getProperty(param0: string, param1: string): string;
				public getMap(param0: string): java.util.Map<string,string>;
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

declare module io {
	export module sentry {
		export module exception {
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

declare module io {
	export module sentry {
		export module exception {
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

declare module io {
	export module sentry {
		export module exception {
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
			export class DiskFlushNotification extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.hints.DiskFlushNotification>;
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
			export class SessionEndHint extends java.lang.Object implements io.sentry.hints.SessionEnd {
				public static class: java.lang.Class<io.sentry.hints.SessionEndHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module hints {
			export class SessionStartHint extends java.lang.Object implements io.sentry.hints.SessionStart {
				public static class: java.lang.Class<io.sentry.hints.SessionStartHint>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module hints {
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

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
				export class FileIOSpanManager extends java.lang.Object {
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
				export class FileInputStreamInitData extends java.lang.Object {
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
				export class FileOutputStreamInitData extends java.lang.Object {
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
				export module SentryFileInputStream {
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

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
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
				export module SentryFileOutputStream {
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

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
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

declare module io {
	export module sentry {
		export module instrumentation {
			export module file {
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

declare module io {
	export module sentry {
		export module protocol {
			export class App extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.App>;
				public static TYPE: string;
				public setAppIdentifier(param0: string): void;
				public getAppIdentifier(): string;
				public setAppVersion(param0: string): void;
				public setAppBuild(param0: string): void;
				public getAppBuild(): string;
				public setAppName(param0: string): void;
				public getAppStartTime(): java.util.Date;
				public getDeviceAppHash(): string;
				public constructor();
				public getAppVersion(): string;
				public getBuildType(): string;
				public getAppName(): string;
				public setBuildType(param0: string): void;
				public setDeviceAppHash(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setAppStartTime(param0: java.util.Date): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Browser extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Browser>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> {
				public static class: java.lang.Class<io.sentry.protocol.Contexts>;
				public constructor(param0: number, param1: number);
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): java.util.Map;
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
				public forEach(param0: number, param1: any /* any<any,any>*/): void;
				public setGpu(param0: io.sentry.protocol.Gpu): void;
				public remove(param0: any): any;
				public hashCode(): number;
				public compute(param0: any, param1: any /* any<any,any,any>*/): any;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map;
				public containsValue(param0: any): boolean;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): java.util.Map;
				public replace(param0: any, param1: any): any;
				public getDevice(): io.sentry.protocol.Device;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public keySet(): java.util.Set<any>;
				public size(): number;
				public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map;
				public put(param0: any, param1: any): any;
				public setRuntime(param0: io.sentry.protocol.SentryRuntime): void;
				public forEach(param0: any /* any<any,any>*/): void;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map;
				public constructor(param0: number, param1: number, param2: number);
				public get(param0: any): any;
				public static of(param0: any, param1: any): java.util.Map;
				public constructor(param0: java.util.Map<any,any>);
				public getOrDefault(param0: any, param1: any): any;
				public containsKey(param0: any): boolean;
				public getTrace(): io.sentry.SpanContext;
				public getApp(): io.sentry.protocol.App;
				public static ofEntries(param0: androidNative.Array<java.util.Map.Entry>): java.util.Map;
				public setBrowser(param0: io.sentry.protocol.Browser): void;
				public clear(): void;
				public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
				public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
				public setOperatingSystem(param0: io.sentry.protocol.OperatingSystem): void;
				public replace(param0: any, param1: any, param2: any): boolean;
				public values(): java.util.Collection<any>;
				public static entry(param0: any, param1: any): java.util.Map.Entry;
				public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any,any>;
				public static of(): java.util.Map;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): java.util.Map;
				public setTrace(param0: io.sentry.SpanContext): void;
				public constructor(param0: number);
				public getBrowser(): io.sentry.protocol.Browser;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): java.util.Map;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugImage extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.DebugImage>;
				public static PROGUARD: string;
				public getUuid(): string;
				public setUuid(param0: string): void;
				public getType(): string;
				public setImageSize(param0: number): void;
				public setArch(param0: string): void;
				public getCodeId(): string;
				public getDebugFile(): string;
				public setCodeFile(param0: string): void;
				public getDebugId(): string;
				public getImageSize(): java.lang.Long;
				public setType(param0: string): void;
				public getArch(): string;
				public constructor();
				public setImageAddr(param0: string): void;
				public setImageSize(param0: java.lang.Long): void;
				public setDebugFile(param0: string): void;
				public setDebugId(param0: string): void;
				public getImageAddr(): string;
				public setCodeId(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getCodeFile(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class DebugMeta extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.DebugMeta>;
				public getImages(): java.util.List<io.sentry.protocol.DebugImage>;
				public setImages(param0: java.util.List<io.sentry.protocol.DebugImage>): void;
				public getSdkInfo(): io.sentry.protocol.SdkInfo;
				public setSdkInfo(param0: io.sentry.protocol.SdkInfo): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Device extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Device>;
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
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setName(param0: string): void;
				public setManufacturer(param0: string): void;
				public getMemorySize(): java.lang.Long;
				public setFamily(param0: string): void;
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
				public getOrientation(): io.sentry.protocol.Device.DeviceOrientation;
				public getBatteryLevel(): java.lang.Float;
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
			}
			export module Device {
				export class DeviceOrientation {
					public static class: java.lang.Class<io.sentry.protocol.Device.DeviceOrientation>;
					public static PORTRAIT: io.sentry.protocol.Device.DeviceOrientation;
					public static LANDSCAPE: io.sentry.protocol.Device.DeviceOrientation;
					public static valueOf(param0: string): io.sentry.protocol.Device.DeviceOrientation;
					public static values(): androidNative.Array<io.sentry.protocol.Device.DeviceOrientation>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Gpu extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Gpu>;
				public static TYPE: string;
				public setName(param0: string): void;
				public setApiType(param0: string): void;
				public getVendorName(): string;
				public setMemorySize(param0: java.lang.Integer): void;
				public setNpotSupport(param0: string): void;
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
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getNpotSupport(): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class MeasurementValue extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.protocol.MeasurementValue>;
				public constructor(param0: number);
				public getValue(): number;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Mechanism extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Mechanism>;
				public setData(param0: java.util.Map<string,any>): void;
				public setSynthetic(param0: java.lang.Boolean): void;
				public getType(): string;
				public isHandled(): java.lang.Boolean;
				public constructor(param0: java.lang.Thread);
				public setMeta(param0: java.util.Map<string,any>): void;
				public getHelpLink(): string;
				public setType(param0: string): void;
				public getDescription(): string;
				public getMeta(): java.util.Map<string,any>;
				public getData(): java.util.Map<string,any>;
				public setHelpLink(param0: string): void;
				public constructor();
				public setDescription(param0: string): void;
				public setHandled(param0: java.lang.Boolean): void;
				public getSynthetic(): java.lang.Boolean;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Message extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Message>;
				public getFormatted(): string;
				public setParams(param0: java.util.List<string>): void;
				public setMessage(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getMessage(): string;
				public getParams(): java.util.List<string>;
				public setFormatted(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class OperatingSystem extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.OperatingSystem>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getRawDescription(): string;
				public isRooted(): java.lang.Boolean;
				public getBuild(): string;
				public setRooted(param0: java.lang.Boolean): void;
				public getName(): string;
				public setVersion(param0: string): void;
				public constructor();
				public getVersion(): string;
				public setBuild(param0: string): void;
				public getKernelVersion(): string;
				public setRawDescription(param0: string): void;
				public setKernelVersion(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class Request extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.Request>;
				public getCookies(): string;
				public setMethod(param0: string): void;
				public getOthers(): java.util.Map<string,string>;
				public setHeaders(param0: java.util.Map<string,string>): void;
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
				public constructor(param0: io.sentry.protocol.Request);
				public setQueryString(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setUrl(param0: string): void;
				public setOthers(param0: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkInfo extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SdkInfo>;
				public setSdkName(param0: string): void;
				public getVersionMinor(): java.lang.Integer;
				public setVersionPatchlevel(param0: java.lang.Integer): void;
				public setVersionMajor(param0: java.lang.Integer): void;
				public setVersionMinor(param0: java.lang.Integer): void;
				public getSdkName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getVersionMajor(): java.lang.Integer;
				public constructor();
				public getVersionPatchlevel(): java.lang.Integer;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SdkVersion extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SdkVersion>;
				public getVersion(): string;
				public setName(param0: string): void;
				public static updateSdkVersion(param0: io.sentry.protocol.SdkVersion, param1: string, param2: string): io.sentry.protocol.SdkVersion;
				/** @deprecated */
				public constructor();
				public getIntegrations(): java.util.List<string>;
				public getName(): string;
				public getPackages(): java.util.List<io.sentry.protocol.SentryPackage>;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public addIntegration(param0: string): void;
				public addPackage(param0: string, param1: string): void;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryException extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryException>;
				public getType(): string;
				public getModule(): string;
				public getMechanism(): io.sentry.protocol.Mechanism;
				public setModule(param0: string): void;
				public getValue(): string;
				public setType(param0: string): void;
				public constructor();
				public setValue(param0: string): void;
				public setThreadId(param0: java.lang.Long): void;
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public setMechanism(param0: io.sentry.protocol.Mechanism): void;
				public getThreadId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryId extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.protocol.SentryId>;
				public static EMPTY_ID: io.sentry.protocol.SentryId;
				public hashCode(): number;
				public constructor(param0: java.util.UUID);
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryPackage extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryPackage>;
				public setName(param0: string): void;
				public getVersion(): string;
				/** @deprecated */
				public constructor();
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryRuntime extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryRuntime>;
				public static TYPE: string;
				public setName(param0: string): void;
				public getVersion(): string;
				public getRawDescription(): string;
				public setRawDescription(param0: string): void;
				public getName(): string;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setVersion(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentrySpan extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.protocol.SentrySpan>;
				public getTimestamp(): java.util.Date;
				public getDescription(): string;
				public isFinished(): boolean;
				public getData(): java.util.Map<string,any>;
				public getSpanId(): io.sentry.SpanId;
				public getTags(): java.util.Map<string,string>;
				public getStartTimestamp(): java.util.Date;
				public getOp(): string;
				public getTraceId(): io.sentry.protocol.SentryId;
				public getStatus(): io.sentry.SpanStatus;
				public getParentSpanId(): io.sentry.SpanId;
				public constructor(param0: io.sentry.Span, param1: java.util.Map<string,any>);
				public constructor(param0: io.sentry.Span);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackFrame extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackFrame>;
				public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
				public getModule(): string;
				public setModule(param0: string): void;
				public setPostContext(param0: java.util.List<string>): void;
				public getAbsPath(): string;
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
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public getPackage(): string;
				public setFunction(param0: string): void;
				public getLineno(): java.lang.Integer;
				public setInApp(param0: java.lang.Boolean): void;
				public getFramesOmitted(): java.util.List<java.lang.Integer>;
				public setSymbolAddr(param0: string): void;
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
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryStackTrace extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryStackTrace>;
				public setRegisters(param0: java.util.Map<string,string>): void;
				public constructor(param0: java.util.List<io.sentry.protocol.SentryStackFrame>);
				public getRegisters(): java.util.Map<string,string>;
				public setSnapshot(param0: java.lang.Boolean): void;
				public setFrames(param0: java.util.List<io.sentry.protocol.SentryStackFrame>): void;
				public getSnapshot(): java.lang.Boolean;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public constructor();
				public getFrames(): java.util.List<io.sentry.protocol.SentryStackFrame>;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryThread extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.SentryThread>;
				public setName(param0: string): void;
				public getPriority(): java.lang.Integer;
				public isCrashed(): java.lang.Boolean;
				public setDaemon(param0: java.lang.Boolean): void;
				public setCurrent(param0: java.lang.Boolean): void;
				public getName(): string;
				public setCrashed(param0: java.lang.Boolean): void;
				public setId(param0: java.lang.Long): void;
				public isCurrent(): java.lang.Boolean;
				public constructor();
				public getStacktrace(): io.sentry.protocol.SentryStackTrace;
				public getState(): string;
				public isDaemon(): java.lang.Boolean;
				public getId(): java.lang.Long;
				public setStacktrace(param0: io.sentry.protocol.SentryStackTrace): void;
				public setState(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setPriority(param0: java.lang.Integer): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class SentryTransaction extends io.sentry.SentryBaseEvent {
				public static class: java.lang.Class<io.sentry.protocol.SentryTransaction>;
				public getTimestamp(): java.util.Date;
				public getType(): string;
				public getStartTimestamp(): java.util.Date;
				public getStatus(): io.sentry.SpanStatus;
				public constructor(param0: io.sentry.SentryTracer);
				public isFinished(): boolean;
				public getSpans(): java.util.List<io.sentry.protocol.SentrySpan>;
				public getTransaction(): string;
				public getMeasurements(): java.util.Map<string,io.sentry.protocol.MeasurementValue>;
				public constructor(param0: io.sentry.protocol.SentryId);
				public constructor();
				public isSampled(): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module protocol {
			export class User extends java.lang.Object implements io.sentry.IUnknownPropertiesConsumer {
				public static class: java.lang.Class<io.sentry.protocol.User>;
				public getId(): string;
				public getEmail(): string;
				public getIpAddress(): string;
				public getOthers(): java.util.Map<string,string>;
				public setEmail(param0: string): void;
				public constructor();
				public constructor(param0: io.sentry.protocol.User);
				public setId(param0: string): void;
				public setUsername(param0: string): void;
				public getUsername(): string;
				public setIpAddress(param0: string): void;
				public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
				public setOthers(param0: java.util.Map<string,string>): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class AsyncHttpTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.AsyncHttpTransport>;
				public constructor(param0: io.sentry.transport.QueuedThreadPoolExecutor, param1: io.sentry.SentryOptions, param2: io.sentry.transport.RateLimiter, param3: io.sentry.transport.ITransportGate, param4: io.sentry.transport.HttpConnection);
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.transport.RateLimiter, param2: io.sentry.transport.ITransportGate, param3: io.sentry.RequestDetails);
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
			export module AsyncHttpTransport {
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

declare module io {
	export module sentry {
		export module transport {
			export class AuthenticatorWrapper extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.AuthenticatorWrapper>;
				public setDefault(param0: java.net.Authenticator): void;
				public static getInstance(): io.sentry.transport.AuthenticatorWrapper;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class CurrentDateProvider extends java.lang.Object implements io.sentry.transport.ICurrentDateProvider {
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
			export class HttpConnection extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.HttpConnection>;
				public send(param0: io.sentry.SentryEnvelope): io.sentry.transport.TransportResult;
				public updateRetryAfterLimits(param0: java.net.HttpURLConnection, param1: number): void;
				public constructor(param0: io.sentry.SentryOptions, param1: io.sentry.RequestDetails, param2: io.sentry.transport.RateLimiter);
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
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

declare module io {
	export module sentry {
		export module transport {
			export class ITransport extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<io.sentry.transport.ITransport>;
				/**
				 * Constructs a new instance of the io.sentry.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					send(param0: io.sentry.SentryEnvelope, param1: any): void;
					send(param0: io.sentry.SentryEnvelope): void;
					flush(param0: number): void;
					close(): void;
					close(): void;
				});
				public constructor();
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
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

declare module io {
	export module sentry {
		export module transport {
			export class NoOpEnvelopeCache extends java.lang.Object implements io.sentry.cache.IEnvelopeCache {
				public static class: java.lang.Class<io.sentry.transport.NoOpEnvelopeCache>;
				public discard(param0: io.sentry.SentryEnvelope): void;
				public spliterator(): java.util.Spliterator<any>;
				public store(param0: io.sentry.SentryEnvelope, param1: any): void;
				public store(param0: io.sentry.SentryEnvelope): void;
				public forEach(param0: any /* any*/): void;
				public iterator(): java.util.Iterator<any>;
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
			export class NoOpTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.NoOpTransport>;
				public close(): void;
				public static getInstance(): io.sentry.transport.NoOpTransport;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class NoOpTransportGate extends java.lang.Object implements io.sentry.transport.ITransportGate {
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
			export class ProxyAuthenticator extends java.net.Authenticator {
				public static class: java.lang.Class<io.sentry.transport.ProxyAuthenticator>;
				public getPasswordAuthentication(): java.net.PasswordAuthentication;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class QueuedThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
				public static class: java.lang.Class<io.sentry.transport.QueuedThreadPoolExecutor>;
				public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
				public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
				public isTerminated(): boolean;
				public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: io.sentry.ILogger);
				public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future;
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.ThreadFactory, param6: java.util.concurrent.RejectedExecutionHandler);
				public invokeAny(param0: java.util.Collection): any;
				public constructor();
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public shutdown(): void;
				public shutdownNow(): java.util.List<java.lang.Runnable>;
				public isShutdown(): boolean;
				public invokeAll(param0: java.util.Collection): java.util.List;
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.ThreadFactory);
				public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>, param5: java.util.concurrent.RejectedExecutionHandler);
				public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): any;
			}
			export module QueuedThreadPoolExecutor {
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

declare module io {
	export module sentry {
		export module transport {
			export class RateLimiter extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.RateLimiter>;
				public constructor(param0: io.sentry.ILogger);
				public filter(param0: io.sentry.SentryEnvelope, param1: any): io.sentry.SentryEnvelope;
				public constructor(param0: io.sentry.transport.ICurrentDateProvider, param1: io.sentry.ILogger);
				public updateRetryAfterLimits(param0: string, param1: string, param2: number): void;
			}
			export module RateLimiter {
				export class DataCategory {
					public static class: java.lang.Class<io.sentry.transport.RateLimiter.DataCategory>;
					public static All: io.sentry.transport.RateLimiter.DataCategory;
					public static Default: io.sentry.transport.RateLimiter.DataCategory;
					public static Error: io.sentry.transport.RateLimiter.DataCategory;
					public static Session: io.sentry.transport.RateLimiter.DataCategory;
					public static Attachment: io.sentry.transport.RateLimiter.DataCategory;
					public static Transaction: io.sentry.transport.RateLimiter.DataCategory;
					public static Security: io.sentry.transport.RateLimiter.DataCategory;
					public static Unknown: io.sentry.transport.RateLimiter.DataCategory;
					public getCategory(): string;
					public static values(): androidNative.Array<io.sentry.transport.RateLimiter.DataCategory>;
					public static valueOf(param0: string): io.sentry.transport.RateLimiter.DataCategory;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
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
			export module ReusableCountLatch {
				export class Sync extends java.util.concurrent.locks.AbstractQueuedSynchronizer {
					public static class: java.lang.Class<io.sentry.transport.ReusableCountLatch.Sync>;
					public tryAcquireShared(param0: number): number;
					public tryReleaseShared(param0: number): boolean;
				}
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export class StdoutTransport extends java.lang.Object implements io.sentry.transport.ITransport {
				public static class: java.lang.Class<io.sentry.transport.StdoutTransport>;
				public close(): void;
				public send(param0: io.sentry.SentryEnvelope, param1: any): void;
				public send(param0: io.sentry.SentryEnvelope): void;
				public constructor(param0: io.sentry.ISerializer);
				public flush(param0: number): void;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module transport {
			export abstract class TransportResult extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.transport.TransportResult>;
				public static success(): io.sentry.transport.TransportResult;
				public getResponseCode(): number;
				public isSuccess(): boolean;
				public static error(): io.sentry.transport.TransportResult;
				public static error(param0: number): io.sentry.transport.TransportResult;
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
			export class ApplyScopeUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.ApplyScopeUtils>;
				public static shouldApplyScopeData(param0: any): boolean;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class CollectionUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.CollectionUtils>;
				public static newArrayList(param0: java.util.List): java.util.List;
				public static size(param0: java.lang.Iterable<any>): number;
				public static newHashMap(param0: java.util.Map): java.util.Map;
				public static filterMapEntries(param0: java.util.Map, param1: io.sentry.util.CollectionUtils.Predicate<any>): java.util.Map;
				public static newConcurrentHashMap(param0: java.util.Map): java.util.Map;
			}
			export module CollectionUtils {
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
			export class ExceptionUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.ExceptionUtils>;
				public static findRootCause(param0: java.lang.Throwable): java.lang.Throwable;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class LogUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.LogUtils>;
				public static logIfNotRetryable(param0: io.sentry.ILogger, param1: any): void;
				public static logIfNotFlushable(param0: io.sentry.ILogger, param1: any): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Objects extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Objects>;
				public static requireNonNull(param0: any, param1: string): any;
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
				public constructor(param0: A, param1: B);
				public getSecond(): B;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class Platform extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.Platform>;
				public static isJvm(): boolean;
				public static isAndroid(): boolean;
				public constructor();
			}
		}
	}
}

declare module io {
	export module sentry {
		export module util {
			export class StringUtils extends java.lang.Object {
				public static class: java.lang.Class<io.sentry.util.StringUtils>;
				public static byteCountToString(param0: number): string;
				public static capitalize(param0: string): string;
				public static getStringAfterDot(param0: string): string;
				public static removeSurrounding(param0: string, param1: string): string;
			}
		}
	}
}

declare module io {
	export module sentry {
		export module vendor {
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
			export module Base64 {
				export abstract class Coder extends java.lang.Object {
					public static class: java.lang.Class<io.sentry.vendor.Base64.Coder>;
					public output: androidNative.Array<number>;
					public op: number;
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

declare module org {
	export module nativescript {
		export module sentry {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<org.nativescript.sentry.R>;
			}
		}
	}
}

//Generics information:
//io.sentry.CircularFifoQueue:1
//io.sentry.OptionsContainer:1
//io.sentry.Sentry.OptionsConfiguration:1
//io.sentry.SentryValues:1
//io.sentry.SynchronizedCollection:1
//io.sentry.SynchronizedQueue:1
//io.sentry.UnknownPropertiesTypeAdapterFactory.UnknownPropertiesTypeAdapter:1
//io.sentry.instrumentation.file.FileIOSpanManager.FileIOCallable:1
//io.sentry.transport.QueuedThreadPoolExecutor.CancelledFuture:1
//io.sentry.util.CollectionUtils.Predicate:1
//io.sentry.util.Pair:2

