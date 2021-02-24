
declare namespace io {
    export namespace sentry {
        export class AsyncConnectionFactory extends java.lang.Object {
            public static class: java.lang.Class<AsyncConnectionFactory>;
            public static create(param0: SentryOptions, param1: cache.IEnvelopeCache): transport.AsyncConnection;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Breadcrumb extends java.lang.Object implements java.lang.Cloneable, IUnknownPropertiesConsumer {
            public static class: java.lang.Class<Breadcrumb>;
            public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
            public removeData(param0: string): void;
            public clone(): Breadcrumb;
            public constructor();
            public getData(param0: string): any;
            public getMessage(): string;
            public setMessage(param0: string): void;
            public getData(): java.util.Map<string,any>;
            public clone(): any;
            public setType(param0: string): void;
            public getLevel(): SentryLevel;
            public getTimestamp(): java.util.Date;
            public setData(param0: string, param1: any): void;
            public setLevel(param0: SentryLevel): void;
            public constructor(param0: java.util.Date);
            public setCategory(param0: string): void;
            public static http(param0: string, param1: string): Breadcrumb;
            public getType(): string;
            public constructor(param0: string);
            public getCategory(): string;
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
            public toArray(): native.Array<any>;
            public stream(): java.util.stream.Stream<any>;
            public constructor(param0: java.util.Collection<any>);
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
            public toArray(param0: native.Array<any>): native.Array<any>;
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
            public hashCode(): number;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class CredentialsSettingConfigurator extends java.lang.Object implements transport.IConnectionConfigurator {
            public static class: java.lang.Class<CredentialsSettingConfigurator>;
            public configure(param0: java.net.HttpURLConnection): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class DateUtils extends java.lang.Object {
            public static class: java.lang.Class<DateUtils>;
            public static getCurrentDateTime(): java.util.Date;
            public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
            public static getDateTime(param0: string): java.util.Date;
            public static getTimestampIsoFormat(param0: java.util.Date): string;
            public static getTimestamp(param0: java.util.Date): string;
            public static getCurrentDateTimeOrNull(): java.util.Date;
            public static getDateTime(param0: java.util.Date): java.util.Date;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class DiagnosticLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<DiagnosticLogger>;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            public isEnabled(param0: SentryLevel): boolean;
            public getLogger(): ILogger;
            public constructor(param0: SentryOptions, param1: ILogger);
            public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export abstract class DirectoryProcessor extends java.lang.Object {
            public static class: java.lang.Class<DirectoryProcessor>;
            public processDirectory(param0: java.io.File): void;
            public processFile(param0: java.io.File, param1: any): void;
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
            public constructor(param0: SentryOptions);
            public process(param0: SentryEvent, param1: any): SentryEvent;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class EnvelopeReader extends java.lang.Object implements IEnvelopeReader {
            public static class: java.lang.Class<EnvelopeReader>;
            public read(param0: java.io.InputStream): SentryEnvelope;
            public constructor();
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class EnvelopeSender extends DirectoryProcessor implements IEnvelopeSender {
            public static class: java.lang.Class<EnvelopeSender>;
            public processEnvelopeFile(param0: string, param1: any): void;
            public constructor(param0: IHub, param1: ISerializer, param2: ILogger, param3: number);
            public processFile(param0: java.io.File, param1: any): void;
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
                process(param0: SentryEvent, param1: any): SentryEvent;
            });
            public constructor();
            public process(param0: SentryEvent, param1: any): SentryEvent;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class GsonSerializer extends java.lang.Object implements ISerializer {
            public static class: java.lang.Class<GsonSerializer>;
            public serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
            public serialize(param0: UserFeedback, param1: java.io.Writer): void;
            public serialize(param0: java.util.Map<string,any>): string;
            public deserializeUserFeedback(param0: java.io.Reader): UserFeedback;
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public serialize(param0: SentryEvent, param1: java.io.Writer): void;
            public serialize(param0: Session, param1: java.io.Writer): void;
            public constructor(param0: ILogger, param1: IEnvelopeReader);
            public deserializeEvent(param0: java.io.Reader): SentryEvent;
            public deserializeSession(param0: java.io.Reader): Session;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class HttpTransportFactory extends java.lang.Object {
            public static class: java.lang.Class<HttpTransportFactory>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Hub extends java.lang.Object implements IHub {
            public static class: java.lang.Class<Hub>;
            public popScope(): void;
            public clone(): IHub;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public setExtra(param0: string, param1: string): void;
            public addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public constructor(param0: SentryOptions);
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureMessage(param0: string): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public configureScope(param0: ScopeCallback): void;
            public startSession(): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public clone(): any;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public bindClient(param0: ISentryClient): void;
        }
        export namespace Hub {
            export class StackItem extends java.lang.Object {
                public static class: java.lang.Class<StackItem>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class HubAdapter extends java.lang.Object implements IHub {
            public static class: java.lang.Class<HubAdapter>;
            public popScope(): void;
            public clone(): IHub;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public setExtra(param0: string, param1: string): void;
            public addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureMessage(param0: string): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public configureScope(param0: ScopeCallback): void;
            public startSession(): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public clone(): any;
            public static getInstance(): HubAdapter;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public bindClient(param0: ISentryClient): void;
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
                processEnvelopeFile(param0: string, param1: any): void;
            });
            public constructor();
            public processEnvelopeFile(param0: string, param1: any): void;
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
                captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                captureEvent(param0: SentryEvent): protocol.SentryId;
                captureMessage(param0: string): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                captureException(param0: java.lang.Throwable): protocol.SentryId;
                captureUserFeedback(param0: UserFeedback): void;
                startSession(): void;
                endSession(): void;
                close(): void;
                addBreadcrumb(param0: Breadcrumb, param1: any): void;
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
            });
            public constructor();
            public popScope(): void;
            public clone(): IHub;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public setExtra(param0: string, param1: string): void;
            public addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public captureMessage(param0: string): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public configureScope(param0: ScopeCallback): void;
            public startSession(): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public clone(): any;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public bindClient(param0: ISentryClient): void;
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
                log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            });
            public constructor();
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
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
                captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
                close(): void;
                flush(param0: number): void;
                captureEvent(param0: SentryEvent): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
                captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
                captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                captureException(param0: java.lang.Throwable): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
                captureUserFeedback(param0: UserFeedback): void;
                captureSession(param0: Session, param1: any): void;
                captureSession(param0: Session): void;
                captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            });
            public constructor();
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
            public captureSession(param0: Session, param1: any): void;
            public isEnabled(): boolean;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
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
                close(param0: number): void;
            });
            public constructor();
            public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
            public close(param0: number): void;
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
                deserializeEvent(param0: java.io.Reader): SentryEvent;
                deserializeUserFeedback(param0: java.io.Reader): UserFeedback;
                deserializeSession(param0: java.io.Reader): Session;
                deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
                serialize(param0: SentryEvent, param1: java.io.Writer): void;
                serialize(param0: Session, param1: java.io.Writer): void;
                serialize(param0: UserFeedback, param1: java.io.Writer): void;
                serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
                serialize(param0: java.util.Map<string,any>): string;
            });
            public constructor();
            public serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
            public serialize(param0: UserFeedback, param1: java.io.Writer): void;
            public serialize(param0: java.util.Map<string,any>): string;
            public deserializeUserFeedback(param0: java.io.Reader): UserFeedback;
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public serialize(param0: SentryEvent, param1: java.io.Writer): void;
            public serialize(param0: Session, param1: java.io.Writer): void;
            public deserializeEvent(param0: java.io.Reader): SentryEvent;
            public deserializeSession(param0: java.io.Reader): Session;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class IUnknownPropertiesConsumer extends java.lang.Object {
            public static class: java.lang.Class<IUnknownPropertiesConsumer>;
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
        export class InvalidDsnException extends java.lang.RuntimeException {
            public static class: java.lang.Class<InvalidDsnException>;
            public constructor(param0: string, param1: string);
            public constructor(param0: java.lang.Throwable);
            public constructor(param0: string, param1: java.lang.Throwable);
            public getDsn(): string;
            public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            public constructor();
            public constructor(param0: string);
            public constructor(param0: string, param1: string, param2: java.lang.Throwable);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class MainEventProcessor extends java.lang.Object implements EventProcessor {
            public static class: java.lang.Class<MainEventProcessor>;
            public process(param0: SentryEvent, param1: any): SentryEvent;
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
            public popScope(): void;
            public clone(): IHub;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public static getInstance(): NoOpHub;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public addBreadcrumb(param0: string): void;
            public getLastEventId(): protocol.SentryId;
            public flush(param0: number): void;
            public setExtra(param0: string, param1: string): void;
            public addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public setLevel(param0: SentryLevel): void;
            public captureMessage(param0: string): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public clearBreadcrumbs(): void;
            public close(): void;
            public setTag(param0: string, param1: string): void;
            public configureScope(param0: ScopeCallback): void;
            public startSession(): void;
            public addBreadcrumb(param0: string, param1: string): void;
            public endSession(): void;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public setUser(param0: protocol.User): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public isEnabled(): boolean;
            public clone(): any;
            public withScope(param0: ScopeCallback): void;
            public pushScope(): void;
            public bindClient(param0: ISentryClient): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<NoOpLogger>;
            public static getInstance(): NoOpLogger;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSentryClient extends java.lang.Object implements ISentryClient {
            public static class: java.lang.Class<NoOpSentryClient>;
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public static getInstance(): NoOpSentryClient;
            public captureUserFeedback(param0: UserFeedback): void;
            public captureSession(param0: Session, param1: any): void;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
            public isEnabled(): boolean;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class NoOpSerializer extends java.lang.Object implements ISerializer {
            public static class: java.lang.Class<NoOpSerializer>;
            public static getInstance(): NoOpSerializer;
            public serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
            public serialize(param0: UserFeedback, param1: java.io.Writer): void;
            public serialize(param0: java.util.Map<string,any>): string;
            public deserializeUserFeedback(param0: java.io.Reader): UserFeedback;
            public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
            public serialize(param0: SentryEvent, param1: java.io.Writer): void;
            public serialize(param0: Session, param1: java.io.Writer): void;
            public deserializeEvent(param0: java.io.Reader): SentryEvent;
            public deserializeSession(param0: java.io.Reader): Session;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class OptionsContainer<T>  extends java.lang.Object {
            public static class: java.lang.Class<OptionsContainer<any>>;
            public createInstance(): T;
            public static create(param0: java.lang.Class): OptionsContainer<any>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class OutboxSender extends DirectoryProcessor implements IEnvelopeSender {
            public static class: java.lang.Class<OutboxSender>;
            public processEnvelopeFile(param0: string, param1: any): void;
            public constructor(param0: IHub, param1: IEnvelopeReader, param2: ISerializer, param3: ILogger, param4: number);
            public processFile(param0: java.io.File, param1: any): void;
            public isRelevantFileName(param0: string): boolean;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Scope extends java.lang.Object implements java.lang.Cloneable {
            public static class: java.lang.Class<Scope>;
            public setContexts(param0: string, param1: string): void;
            public getContexts(): protocol.Contexts;
            public setContexts(param0: string, param1: java.lang.Boolean): void;
            public getUser(): protocol.User;
            public removeContexts(param0: string): void;
            public setExtra(param0: string, param1: string): void;
            public addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public constructor(param0: SentryOptions);
            public setLevel(param0: SentryLevel): void;
            public clearBreadcrumbs(): void;
            public setTag(param0: string, param1: string): void;
            public clear(): void;
            public removeExtra(param0: string): void;
            public clone(): Scope;
            public setTransaction(param0: string): void;
            public setFingerprint(param0: java.util.List<string>): void;
            public removeTag(param0: string): void;
            public setUser(param0: protocol.User): void;
            public addBreadcrumb(param0: Breadcrumb): void;
            public getTransaction(): string;
            public clone(): any;
            public getLevel(): SentryLevel;
            public setContexts(param0: string, param1: any): void;
            public setContexts(param0: string, param1: java.lang.Number): void;
            public addEventProcessor(param0: EventProcessor): void;
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
            public static clearBreadcrumbs(): void;
            public static setUser(param0: protocol.User): void;
            public static captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public static popScope(): void;
            public static addBreadcrumb(param0: string, param1: string): void;
            public static startSession(): void;
            public static captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public static addBreadcrumb(param0: string): void;
            public static setLevel(param0: SentryLevel): void;
            public static addBreadcrumb(param0: Breadcrumb): void;
            public static isEnabled(): boolean;
            public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>, param2: boolean): void;
            public static captureUserFeedback(param0: UserFeedback): void;
            public static captureMessage(param0: string): protocol.SentryId;
            public static addBreadcrumb(param0: Breadcrumb, param1: any): void;
            public static captureEvent(param0: SentryEvent): protocol.SentryId;
            public static captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public static flush(param0: number): void;
            public static captureException(param0: java.lang.Throwable): protocol.SentryId;
            public static removeExtra(param0: string): void;
            public static init(param0: SentryOptions): void;
            public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>): void;
            public static setTransaction(param0: string): void;
            public static setExtra(param0: string, param1: string): void;
            public static init(): void;
            public static getLastEventId(): protocol.SentryId;
            public static setTag(param0: string, param1: string): void;
            public static pushScope(): void;
            public static configureScope(param0: ScopeCallback): void;
            public static endSession(): void;
            public static close(): void;
            public static init(param0: Sentry.OptionsConfiguration<SentryOptions>, param1: boolean): void;
            public static setFingerprint(param0: java.util.List<string>): void;
            public static bindClient(param0: ISentryClient): void;
            public static removeTag(param0: string): void;
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
        export class SentryClient extends java.lang.Object implements ISentryClient {
            public static class: java.lang.Class<SentryClient>;
            public captureSession(param0: Session): void;
            public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
            public captureException(param0: java.lang.Throwable): protocol.SentryId;
            public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
            public flush(param0: number): void;
            public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
            public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            public captureUserFeedback(param0: UserFeedback): void;
            public captureSession(param0: Session, param1: any): void;
            public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
            public isEnabled(): boolean;
            public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
            public captureEvent(param0: SentryEvent): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
            public constructor(param0: SentryOptions, param1: transport.Connection);
            public close(): void;
            public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
            public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
        }
        export namespace SentryClient {
            export class SortBreadcrumbsByDate extends java.util.Comparator<Breadcrumb> {
                public static class: java.lang.Class<SortBreadcrumbsByDate>;
                public static comparingInt(param0: any /* any*/): java.util.Comparator;
                public static comparingLong(param0: any /* any*/): java.util.Comparator;
                public static reverseOrder(): java.util.Comparator;
                public static nullsFirst(param0: java.util.Comparator): java.util.Comparator;
                public compare(param0: Breadcrumb, param1: Breadcrumb): number;
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

declare namespace io {
    export namespace sentry {
        export class SentryEnvelope extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelope>;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion, param2: SentryEnvelopeItem);
            public getHeader(): SentryEnvelopeHeader;
            public constructor(param0: SentryEnvelopeHeader, param1: java.lang.Iterable<SentryEnvelopeItem>);
            public static fromEvent(param0: ISerializer, param1: SentryEvent, param2: protocol.SdkVersion): SentryEnvelope;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion, param2: java.lang.Iterable<SentryEnvelopeItem>);
            public static fromSession(param0: ISerializer, param1: Session, param2: protocol.SdkVersion): SentryEnvelope;
            public getItems(): java.lang.Iterable<SentryEnvelopeItem>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeHeader extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelopeHeader>;
            public getEventId(): protocol.SentryId;
            public constructor(param0: protocol.SentryId);
            public getSdkVersion(): protocol.SdkVersion;
            public constructor(param0: protocol.SentryId, param1: protocol.SdkVersion);
            public constructor();
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeHeaderAdapter extends com.google.gson.TypeAdapter<SentryEnvelopeHeader> {
            public static class: java.lang.Class<SentryEnvelopeHeaderAdapter>;
            public write(param0: com.google.gson.stream.JsonWriter, param1: SentryEnvelopeHeader): void;
            public read(param0: com.google.gson.stream.JsonReader): SentryEnvelopeHeader;
            public constructor();
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeItem extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelopeItem>;
            public getData(): native.Array<number>;
            public static fromSession(param0: ISerializer, param1: Session): SentryEnvelopeItem;
            public static fromEvent(param0: ISerializer, param1: SentryEvent): SentryEnvelopeItem;
            public static fromUserFeedback(param0: ISerializer, param1: UserFeedback): SentryEnvelopeItem;
            public getEvent(param0: ISerializer): SentryEvent;
            public getHeader(): SentryEnvelopeItemHeader;
        }
        export namespace SentryEnvelopeItem {
            export class CachedItem extends java.lang.Object {
                public static class: java.lang.Class<CachedItem>;
                public constructor(param0: java.util.concurrent.Callable<native.Array<number>>);
                public getBytes(): native.Array<number>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeItemHeader extends java.lang.Object {
            public static class: java.lang.Class<SentryEnvelopeItemHeader>;
            public getLength(): number;
            public getFileName(): string;
            public getType(): SentryItemType;
            public getContentType(): string;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEnvelopeItemHeaderAdapter extends com.google.gson.TypeAdapter<SentryEnvelopeItemHeader> {
            public static class: java.lang.Class<SentryEnvelopeItemHeaderAdapter>;
            public read(param0: com.google.gson.stream.JsonReader): SentryEnvelopeItemHeader;
            public constructor();
            public write(param0: com.google.gson.stream.JsonWriter, param1: SentryEnvelopeItemHeader): void;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryEvent extends java.lang.Object implements IUnknownPropertiesConsumer {
            public static class: java.lang.Class<SentryEvent>;
            public setTags(param0: java.util.Map<string,string>): void;
            public getSdk(): protocol.SdkVersion;
            public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
            public getEventId(): protocol.SentryId;
            public setServerName(param0: string): void;
            public getContexts(): protocol.Contexts;
            public getUser(): protocol.User;
            public setDebugMeta(param0: protocol.DebugMeta): void;
            public setPlatform(param0: string): void;
            public setSdk(param0: protocol.SdkVersion): void;
            public getRelease(): string;
            public getTimestamp(): java.util.Date;
            public constructor(param0: java.util.Date);
            public setExtra(param0: string, param1: any): void;
            public setMessage(param0: protocol.Message): void;
            public getExtra(param0: string): any;
            public setLogger(param0: string): void;
            public getDebugMeta(): protocol.DebugMeta;
            public setRequest(param0: protocol.Request): void;
            public setExtras(param0: java.util.Map<string,any>): void;
            public constructor();
            public getDist(): string;
            public setUser(param0: protocol.User): void;
            public getTag(param0: string): string;
            public getRequest(): protocol.Request;
            public getExceptions(): java.util.List<protocol.SentryException>;
            public getThrowable(): java.lang.Throwable;
            public setEnvironment(param0: string): void;
            public setRelease(param0: string): void;
            public setModules(param0: java.util.Map<string,string>): void;
            public getServerName(): string;
            public getModule(param0: string): string;
            public getThreads(): java.util.List<protocol.SentryThread>;
            public constructor(param0: java.lang.Throwable);
            public getPlatform(): string;
            public getLogger(): string;
            public addBreadcrumb(param0: string): void;
            public setThreads(param0: java.util.List<protocol.SentryThread>): void;
            public setLevel(param0: SentryLevel): void;
            public setDist(param0: string): void;
            public getEnvironment(): string;
            public setThrowable(param0: java.lang.Throwable): void;
            public setTag(param0: string, param1: string): void;
            public setContexts(param0: protocol.Contexts): void;
            public setExceptions(param0: java.util.List<protocol.SentryException>): void;
            public isErrored(): boolean;
            public removeExtra(param0: string): void;
            public setTransaction(param0: string): void;
            public setFingerprints(param0: java.util.List<string>): void;
            public setEventId(param0: protocol.SentryId): void;
            public removeTag(param0: string): void;
            public isCrashed(): boolean;
            public addBreadcrumb(param0: Breadcrumb): void;
            public getTransaction(): string;
            public getUnknown(): java.util.Map<string,any>;
            public setModule(param0: string, param1: string): void;
            public getLevel(): SentryLevel;
            public setBreadcrumbs(param0: java.util.List<Breadcrumb>): void;
            public getBreadcrumbs(): java.util.List<Breadcrumb>;
            public getFingerprints(): java.util.List<string>;
            public removeModule(param0: string): void;
            public getMessage(): protocol.Message;
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
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryItemType {
            public static class: java.lang.Class<SentryItemType>;
            public static Session: SentryItemType;
            public static Event: SentryItemType;
            public static UserFeedback: SentryItemType;
            public static Attachment: SentryItemType;
            public static Transaction: SentryItemType;
            public static Unknown: SentryItemType;
            public static values(): native.Array<SentryItemType>;
            public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
            public getItemType(): string;
            public static valueOf(param0: string): SentryItemType;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryLevel {
            public static class: java.lang.Class<SentryLevel>;
            public static DEBUG: SentryLevel;
            public static INFO: SentryLevel;
            public static WARNING: SentryLevel;
            public static ERROR: SentryLevel;
            public static FATAL: SentryLevel;
            public static values(): native.Array<SentryLevel>;
            public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
            public static valueOf(param0: string): SentryLevel;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SentryOptions extends java.lang.Object {
            public static class: java.lang.Class<SentryOptions>;
            public getBeforeBreadcrumb(): SentryOptions.BeforeBreadcrumbCallback;
            public setServerName(param0: string): void;
            public isDebug(): boolean;
            public setEnableExternalConfiguration(param0: boolean): void;
            public getRelease(): string;
            public isEnableSessionTracking(): boolean;
            public setEnableScopeSync(param0: boolean): void;
            public getInAppIncludes(): java.util.List<string>;
            public setEnableSessionTracking(param0: boolean): void;
            public setMaxQueueSize(param0: number): void;
            public setLogger(param0: ILogger): void;
            public getMaxQueueSize(): number;
            public setSerializer(param0: ISerializer): void;
            public getConnectionTimeoutMillis(): number;
            public getReadTimeoutMillis(): number;
            public setSentryClientName(param0: string): void;
            public isEnableExternalConfiguration(): boolean;
            public addInAppInclude(param0: string): void;
            public addIntegration(param0: Integration): void;
            public getEnvelopeDiskCache(): cache.IEnvelopeCache;
            public getMaxBreadcrumbs(): number;
            public getDistinctId(): string;
            public getLogger(): ILogger;
            public isEnableNdk(): boolean;
            public constructor();
            public setTransport(param0: transport.ITransport): void;
            public setDistinctId(param0: string): void;
            public getDiagnosticLevel(): SentryLevel;
            public getDist(): string;
            public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
            public setAttachStacktrace(param0: boolean): void;
            public isEnableScopeSync(): boolean;
            public getSerializer(): ISerializer;
            public getOutboxPath(): string;
            public getEventProcessors(): java.util.List<EventProcessor>;
            public setEnvelopeDiskCache(param0: cache.IEnvelopeCache): void;
            public getEnvelopeReader(): IEnvelopeReader;
            public setEnvironment(param0: string): void;
            public setRelease(param0: string): void;
            public setCacheDirSize(param0: number): void;
            public getSentryClientName(): string;
            public getServerName(): string;
            public getFlushTimeoutMillis(): number;
            public addScopeObserver(param0: IScopeObserver): void;
            public getCacheDirPath(): string;
            public isEnableUncaughtExceptionHandler(): boolean;
            public setSendDefaultPii(param0: boolean): void;
            public setBeforeBreadcrumb(param0: SentryOptions.BeforeBreadcrumbCallback): void;
            public setSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
            public getShutdownTimeout(): number;
            public setEnableUncaughtExceptionHandler(param0: boolean): void;
            public setDebug(param0: boolean): void;
            public addInAppExclude(param0: string): void;
            public getProxy(): SentryOptions.Proxy;
            public isAttachThreads(): boolean;
            public setBeforeSend(param0: SentryOptions.BeforeSendCallback): void;
            public setCacheDirPath(param0: string): void;
            public isSendDefaultPii(): boolean;
            public setTransportGate(param0: transport.ITransportGate): void;
            public getSessionTrackingIntervalMillis(): number;
            public setFlushTimeoutMillis(param0: number): void;
            public setConnectionTimeoutMillis(param0: number): void;
            public getTransportGate(): transport.ITransportGate;
            public setAttachThreads(param0: boolean): void;
            public getSdkVersion(): protocol.SdkVersion;
            public getInAppExcludes(): java.util.List<string>;
            public setSessionTrackingIntervalMillis(param0: number): void;
            public getTransport(): transport.ITransport;
            public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
            public setShutdownTimeout(param0: number): void;
            public getEnvironment(): string;
            public setDist(param0: string): void;
            public getDsn(): string;
            public setProxy(param0: SentryOptions.Proxy): void;
            public getSampleRate(): java.lang.Double;
            public getBeforeSend(): SentryOptions.BeforeSendCallback;
            public getCacheDirSize(): number;
            public setEnvelopeReader(param0: IEnvelopeReader): void;
            public setSampleRate(param0: java.lang.Double): void;
            public getIntegrations(): java.util.List<Integration>;
            public setDsn(param0: string): void;
            public isAttachStacktrace(): boolean;
            public getSslSocketFactory(): javax.net.ssl.SSLSocketFactory;
            public setMaxBreadcrumbs(param0: number): void;
            public setReadTimeoutMillis(param0: number): void;
            public setEnableNdk(param0: boolean): void;
            public setSdkVersion(param0: protocol.SdkVersion): void;
            public setDiagnosticLevel(param0: SentryLevel): void;
            public addEventProcessor(param0: EventProcessor): void;
            public static from(param0: config.PropertiesProvider): SentryOptions;
        }
        export namespace SentryOptions {
            export class BeforeBreadcrumbCallback extends java.lang.Object {
                public static class: java.lang.Class<BeforeBreadcrumbCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    execute(param0: Breadcrumb, param1: any): Breadcrumb;
                });
                public constructor();
                public execute(param0: Breadcrumb, param1: any): Breadcrumb;
            }
            export class BeforeSendCallback extends java.lang.Object {
                public static class: java.lang.Class<BeforeSendCallback>;
                /**
				 * Constructs a new instance of the io.sentry.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    execute(param0: SentryEvent, param1: any): SentryEvent;
                });
                public constructor();
                public execute(param0: SentryEvent, param1: any): SentryEvent;
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
        export class SentryValues<T>  extends java.lang.Object {
            public static class: java.lang.Class<SentryValues<any>>;
            public getValues(): java.util.List<T>;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class Session extends java.lang.Object {
            public static class: java.lang.Class<Session>;
            public end(param0: java.util.Date): void;
            public constructor(param0: Session.State, param1: java.util.Date, param2: java.util.Date, param3: number, param4: string, param5: java.util.UUID, param6: java.lang.Boolean, param7: java.lang.Long, param8: java.lang.Double, param9: string, param10: string, param11: string, param12: string);
            public setInitAsTrue(): void;
            public getDistinctId(): string;
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
            public clone(): any;
            public getSequence(): java.lang.Long;
            public getStatus(): Session.State;
            public getTimestamp(): java.util.Date;
            public clone(): Session;
            public getEnvironment(): string;
        }
        export namespace Session {
            export class State {
                public static class: java.lang.Class<State>;
                public static Ok: State;
                public static Exited: State;
                public static Crashed: State;
                public static Abnormal: State;
                public static values(): native.Array<State>;
                public static valueOf(param0: string): State;
                public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SessionAdapter extends com.google.gson.TypeAdapter<Session> {
            public static class: java.lang.Class<SessionAdapter>;
            public read(param0: com.google.gson.stream.JsonReader): Session;
            public write(param0: com.google.gson.stream.JsonWriter, param1: Session): void;
            public constructor(param0: ILogger);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class ShutdownHookIntegration extends java.lang.Object implements Integration {
            public static class: java.lang.Class<ShutdownHookIntegration>;
            public register(param0: IHub, param1: SentryOptions): void;
            public constructor();
            public constructor(param0: java.lang.Runtime);
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SynchronizedCollection<E>  extends java.lang.Object {
            public static class: java.lang.Class<SynchronizedCollection<any>>;
            public equals(param0: any): boolean;
            public toArray(): native.Array<any>;
            public iterator(): java.util.Iterator<E>;
            public decorated(): java.util.Collection<E>;
            public spliterator(): java.util.Spliterator<E>;
            public contains(param0: any): boolean;
            public stream(): java.util.stream.Stream<E>;
            public iterator(): java.util.Iterator<any>;
            public clear(): void;
            public isEmpty(): boolean;
            public size(): number;
            public parallelStream(): java.util.stream.Stream<E>;
            public add(param0: E): boolean;
            public toArray(param0: native.Array<any>): native.Array<any>;
            public static synchronizedCollection(param0: java.util.Collection): SynchronizedCollection<any>;
            public addAll(param0: java.util.Collection<any>): boolean;
            public retainAll(param0: java.util.Collection<any>): boolean;
            public forEach(param0: any /* any*/): void;
            public remove(param0: any): boolean;
            public containsAll(param0: java.util.Collection<any>): boolean;
            public toString(): string;
            public removeAll(param0: java.util.Collection<any>): boolean;
            public spliterator(): java.util.Spliterator<any>;
            public removeIf(param0: any /* any*/): boolean;
            public hashCode(): number;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SynchronizedQueue<E>  extends SynchronizedCollection<any> implements java.util.Queue<any>  {
            public static class: java.lang.Class<SynchronizedQueue<any>>;
            public equals(param0: any): boolean;
            public toArray(): native.Array<any>;
            public stream(): java.util.stream.Stream<any>;
            public decorated(): java.util.Queue<any>;
            public contains(param0: any): boolean;
            public element(): any;
            public iterator(): java.util.Iterator<any>;
            public clear(): void;
            public size(): number;
            public isEmpty(): boolean;
            public poll(): any;
            public decorated(): java.util.Collection<any>;
            public toArray(param0: native.Array<any>): native.Array<any>;
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
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class SystemOutLogger extends java.lang.Object implements ILogger {
            public static class: java.lang.Class<SystemOutLogger>;
            public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
            public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            public constructor();
            public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
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
        export class UnknownPropertiesTypeAdapterFactory extends java.lang.Object {
            public static class: java.lang.Class<UnknownPropertiesTypeAdapterFactory>;
            public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
        }
        export namespace UnknownPropertiesTypeAdapterFactory {
            export class UnknownPropertiesTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
                public static class: java.lang.Class<UnknownPropertiesTypeAdapter<any>>;
                public read(param0: com.google.gson.stream.JsonReader): any;
                public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export class UserFeedback extends java.lang.Object {
            public static class: java.lang.Class<UserFeedback>;
            public setEmail(param0: string): void;
            public toString(): string;
            public getEventId(): protocol.SentryId;
            public getName(): string;
            public constructor(param0: protocol.SentryId);
            public getComments(): string;
            public setComments(param0: string): void;
            public constructor(param0: protocol.SentryId, param1: string, param2: string, param3: string);
            public setName(param0: string): void;
            public getEmail(): string;
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class ContextsDeserializerAdapter extends com.google.gson.JsonDeserializer<protocol.Contexts> {
                public static class: java.lang.Class<ContextsDeserializerAdapter>;
                public constructor(param0: ILogger);
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): protocol.Contexts;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class ContextsSerializerAdapter extends com.google.gson.JsonSerializer<protocol.Contexts> {
                public static class: java.lang.Class<ContextsSerializerAdapter>;
                public serialize(param0: protocol.Contexts, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                public constructor(param0: ILogger);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class DateDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.Date> {
                public static class: java.lang.Class<DateDeserializerAdapter>;
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
                public constructor(param0: ILogger);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class DateSerializerAdapter extends com.google.gson.JsonSerializer<java.util.Date> {
                public static class: java.lang.Class<DateSerializerAdapter>;
                public constructor(param0: ILogger);
                public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class OrientationDeserializerAdapter extends com.google.gson.JsonDeserializer<protocol.Device.DeviceOrientation> {
                public static class: java.lang.Class<OrientationDeserializerAdapter>;
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): protocol.Device.DeviceOrientation;
                public constructor(param0: ILogger);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class OrientationSerializerAdapter extends com.google.gson.JsonSerializer<protocol.Device.DeviceOrientation> {
                public static class: java.lang.Class<OrientationSerializerAdapter>;
                public constructor(param0: ILogger);
                public serialize(param0: protocol.Device.DeviceOrientation, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class SentryIdDeserializerAdapter extends com.google.gson.JsonDeserializer<protocol.SentryId> {
                public static class: java.lang.Class<SentryIdDeserializerAdapter>;
                public constructor(param0: ILogger);
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): protocol.SentryId;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class SentryIdSerializerAdapter extends com.google.gson.JsonSerializer<protocol.SentryId> {
                public static class: java.lang.Class<SentryIdSerializerAdapter>;
                public constructor(param0: ILogger);
                public serialize(param0: protocol.SentryId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class SentryLevelDeserializerAdapter extends com.google.gson.JsonDeserializer<SentryLevel> {
                public static class: java.lang.Class<SentryLevelDeserializerAdapter>;
                public constructor(param0: ILogger);
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): SentryLevel;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class SentryLevelSerializerAdapter extends com.google.gson.JsonSerializer<SentryLevel> {
                public static class: java.lang.Class<SentryLevelSerializerAdapter>;
                public constructor(param0: ILogger);
                public serialize(param0: SentryLevel, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class TimeZoneDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.TimeZone> {
                public static class: java.lang.Class<TimeZoneDeserializerAdapter>;
                public constructor(param0: ILogger);
                public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.TimeZone;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace adapters {
            export class TimeZoneSerializerAdapter extends com.google.gson.JsonSerializer<java.util.TimeZone> {
                public static class: java.lang.Class<TimeZoneSerializerAdapter>;
                public constructor(param0: ILogger);
                public serialize(param0: java.util.TimeZone, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
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
                export class ActivityBreadcrumbsIntegration extends java.lang.Object implements Integration, java.io.Closeable, globalAndroid.app.Application.ActivityLifecycleCallbacks {
                    public static class: java.lang.Class<ActivityBreadcrumbsIntegration>;
                    public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public onActivityStarted(param0: globalAndroid.app.Activity): void;
                    public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                    public register(param0: IHub, param1: SentryOptions): void;
                    public onActivityStopped(param0: globalAndroid.app.Activity): void;
                    public close(): void;
                    public constructor(param0: globalAndroid.app.Application);
                    public onActivityResumed(param0: globalAndroid.app.Activity): void;
                    public onActivityPaused(param0: globalAndroid.app.Activity): void;
                    public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
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
                    public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                    public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
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
                export class BuildInfoProvider extends java.lang.Object implements IBuildInfoProvider {
                    public static class: java.lang.Class<BuildInfoProvider>;
                    public constructor();
                    public getSdkInfoVersion(): number;
                    public getBuildTags(): string;
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
                    public process(param0: SentryEvent, param1: any): SentryEvent;
                    public getDefaultUser(): protocol.User;
                    public constructor(param0: globalAndroid.content.Context, param1: ILogger, param2: IBuildInfoProvider);
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
                    export class CachedEnvelopeHint extends java.lang.Object implements hints.Cached, hints.Retryable, hints.SubmissionResult, hints.Flushable, hints.ApplyScopeData {
                        public static class: java.lang.Class<CachedEnvelopeHint>;
                        public isRetry(): boolean;
                        public waitFlush(): boolean;
                        public isSuccess(): boolean;
                        public setResult(param0: boolean): void;
                        public setRetry(param0: boolean): void;
                        public constructor(param0: number, param1: ILogger);
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
                export class IBuildInfoProvider extends java.lang.Object {
                    public static class: java.lang.Class<IBuildInfoProvider>;
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
                export class IHandler extends java.lang.Object {
                    public static class: java.lang.Class<IHandler>;
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

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class ILoadClass extends java.lang.Object {
                    public static class: java.lang.Class<ILoadClass>;
                    /**
					 * Constructs a new instance of the io.sentry.android.core.ILoadClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
                    public constructor(implementation: {
                        loadClass(param0: string): java.lang.Class<any>;
                    });
                    public constructor();
                    public loadClass(param0: string): java.lang.Class<any>;
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
                export class LoadClass extends java.lang.Object implements ILoadClass {
                    public static class: java.lang.Class<LoadClass>;
                    public loadClass(param0: string): java.lang.Class<any>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class MainLooperHandler extends java.lang.Object implements IHandler {
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
                export class NdkIntegration extends java.lang.Object implements Integration {
                    public static class: java.lang.Class<NdkIntegration>;
                    public static SENTRY_NDK_CLASS_NAME: string;
                    public constructor(param0: java.lang.Class<any>);
                    public register(param0: IHub, param1: SentryOptions): void;
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
                    public getDebugImagesLoader(): IDebugImagesLoader;
                    public isAnrReportInDebug(): boolean;
                    public setDebugImagesLoader(param0: IDebugImagesLoader): void;
                    public setEnableAppComponentBreadcrumbs(param0: boolean): void;
                    public isEnableSystemEventBreadcrumbs(): boolean;
                    public enableAllAutoBreadcrumbs(param0: boolean): void;
                    public isEnableAppLifecycleBreadcrumbs(): boolean;
                    public isEnableActivityLifecycleBreadcrumbs(): boolean;
                    public setAnrReportInDebug(param0: boolean): void;
                    /** @deprecated */
                    public setAnrTimeoutIntervalMills(param0: number): void;
                    public setAnrTimeoutIntervalMillis(param0: number): void;
                    public setEnableSystemEventBreadcrumbs(param0: boolean): void;
                    public constructor();
                    public setEnableActivityLifecycleBreadcrumbs(param0: boolean): void;
                    public isAnrEnabled(): boolean;
                    /** @deprecated */
                    public getAnrTimeoutIntervalMills(): number;
                    public getAnrTimeoutIntervalMillis(): number;
                    public setAnrEnabled(param0: boolean): void;
                    public setEnableAppLifecycleBreadcrumbs(param0: boolean): void;
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
                    public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
                    public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
                    public shutdown(): void;
                    public onTrimMemory(param0: number): void;
                    public attachInfo(param0: globalAndroid.content.Context, param1: globalAndroid.content.pm.ProviderInfo): void;
                    public constructor();
                    public onCreate(): boolean;
                    public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: globalAndroid.os.Bundle, param3: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
                    public getType(param0: globalAndroid.net.Uri): string;
                    public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
                    public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
                    public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: globalAndroid.os.CancellationSignal): globalAndroid.database.Cursor;
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
                export namespace util {
                    export class ConnectivityChecker extends java.lang.Object {
                        public static class: java.lang.Class<ConnectivityChecker>;
                        public static getConnectionStatus(param0: globalAndroid.content.Context, param1: ILogger): ConnectivityChecker.Status;
                        public static getConnectionType(param0: globalAndroid.content.Context, param1: ILogger, param2: IBuildInfoProvider): string;
                    }
                    export namespace ConnectivityChecker {
                        export class Status {
                            public static class: java.lang.Class<Status>;
                            public static CONNECTED: Status;
                            public static NOT_CONNECTED: Status;
                            public static NO_PERMISSION: Status;
                            public static UNKNOWN: Status;
                            public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
                            public static valueOf(param0: string): Status;
                            public static values(): native.Array<Status>;
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

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export namespace util {
                    export class MainThreadChecker extends java.lang.Object {
                        public static class: java.lang.Class<MainThreadChecker>;
                        public static isMainThread(): boolean;
                        public static isMainThread(param0: java.lang.Thread): boolean;
                        public static isMainThread(param0: protocol.SentryThread): boolean;
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

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export namespace util {
                    export class RootChecker extends java.lang.Object {
                        public static class: java.lang.Class<RootChecker>;
                        public constructor(param0: globalAndroid.content.Context, param1: IBuildInfoProvider, param2: ILogger);
                        public isDeviceRooted(): boolean;
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
                    public static nativeLoadModuleList(): native.Array<protocol.DebugImage>;
                    public clearModuleList(): void;
                    public loadModuleList(): native.Array<protocol.DebugImage>;
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
                export class SentryNdk extends java.lang.Object {
                    public static class: java.lang.Class<SentryNdk>;
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
                public rotateCacheIfNeeded(param0: native.Array<java.io.File>): void;
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
                public constructor(param0: SentryOptions);
                public discard(param0: SentryEnvelope): void;
                public spliterator(): java.util.Spliterator<any>;
                public store(param0: SentryEnvelope, param1: any): void;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
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
                    store(param0: SentryEnvelope, param1: any): void;
                    store(param0: SentryEnvelope): void;
                    discard(param0: SentryEnvelope): void;
                    iterator(): java.util.Iterator<any>;
                    forEach(param0: any /* any*/): void;
                    spliterator(): java.util.Spliterator<any>;
                });
                public constructor();
                public discard(param0: SentryEnvelope): void;
                public spliterator(): java.util.Spliterator<any>;
                public store(param0: SentryEnvelope, param1: any): void;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
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
                public constructor(param0: java.util.List<PropertiesProvider>);
                public getProperty(param0: string): string;
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
                public getProperty(param0: string): string;
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
                    getProperty(param0: string, param1: string): string;
                });
                public constructor();
                public getProperty(param0: string, param1: string): string;
                public getProperty(param0: string): string;
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
            export class SimplePropertiesProvider extends java.lang.Object implements PropertiesProvider {
                public static class: java.lang.Class<SimplePropertiesProvider>;
                public getProperty(param0: string, param1: string): string;
                public getProperty(param0: string): string;
                public constructor(param0: java.util.Properties);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace config {
            export class SystemPropertyPropertiesProvider extends java.lang.Object implements PropertiesProvider {
                public static class: java.lang.Class<SystemPropertyPropertiesProvider>;
                public getProperty(param0: string, param1: string): string;
                public getProperty(param0: string): string;
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
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
                public constructor(param0: java.lang.Throwable);
                public getExceptionMechanism(): protocol.Mechanism;
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
                public getThrowable(): java.lang.Throwable;
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
        export namespace protocol {
            export class App extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<App>;
                public static TYPE: string;
                public clone(): App;
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
                public clone(): any;
                public setDeviceAppHash(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setAppStartTime(param0: java.util.Date): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Browser extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<Browser>;
                public static TYPE: string;
                public setName(param0: string): void;
                public getVersion(): string;
                public clone(): Browser;
                public clone(): any;
                public getName(): string;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setVersion(param0: string): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> implements java.lang.Cloneable  {
                public static class: java.lang.Class<Contexts>;
                public constructor(param0: number, param1: number);
                public constructor(param0: number, param1: number, param2: number);
                public get(param0: any): any;
                public putAll(param0: java.util.Map<any,any>): void;
                public getOperatingSystem(): OperatingSystem;
                public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
                public constructor(param0: java.util.Map<any,any>);
                public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
                public setApp(param0: App): void;
                public getOrDefault(param0: any, param1: any): any;
                public containsKey(param0: any): boolean;
                public replaceAll(param0: any /* any<any,any,any>*/): void;
                public constructor();
                public setDevice(param0: Device): void;
                public remove(param0: any, param1: any): boolean;
                public getRuntime(): SentryRuntime;
                public getGpu(): Gpu;
                public putIfAbsent(param0: any, param1: any): any;
                public forEach(param0: number, param1: any /* any<any,any>*/): void;
                public setGpu(param0: Gpu): void;
                public remove(param0: any): any;
                public getApp(): App;
                public hashCode(): number;
                public compute(param0: any, param1: any /* any<any,any,any>*/): any;
                public setBrowser(param0: Browser): void;
                public clone(): any;
                public clear(): void;
                public equals(param0: any): boolean;
                public isEmpty(): boolean;
                public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
                public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
                public containsValue(param0: any): boolean;
                public setOperatingSystem(param0: OperatingSystem): void;
                public replace(param0: any, param1: any, param2: any): boolean;
                public values(): java.util.Collection<any>;
                public replace(param0: any, param1: any): any;
                public getDevice(): Device;
                public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
                public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any,any>;
                public keySet(): java.util.Set<any>;
                public size(): number;
                public clone(): Contexts;
                public put(param0: any, param1: any): any;
                public constructor(param0: number);
                public setRuntime(param0: SentryRuntime): void;
                public getBrowser(): Browser;
                public forEach(param0: any /* any<any,any>*/): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class DebugImage extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<DebugImage>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class DebugMeta extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<DebugMeta>;
                public getImages(): java.util.List<DebugImage>;
                public setImages(param0: java.util.List<DebugImage>): void;
                public getSdkInfo(): SdkInfo;
                public setSdkInfo(param0: SdkInfo): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Device extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<Device>;
                public static TYPE: string;
                public setMemorySize(param0: java.lang.Long): void;
                public setFreeStorage(param0: java.lang.Long): void;
                public setScreenDpi(param0: java.lang.Integer): void;
                public getId(): string;
                public getFreeMemory(): java.lang.Long;
                public setCharging(param0: java.lang.Boolean): void;
                public getArchs(): native.Array<string>;
                public setExternalStorageSize(param0: java.lang.Long): void;
                public getExternalStorageSize(): java.lang.Long;
                public getBrand(): string;
                public constructor();
                public setBatteryTemperature(param0: java.lang.Float): void;
                public isOnline(): java.lang.Boolean;
                public setBrand(param0: string): void;
                public getScreenWidthPixels(): java.lang.Integer;
                public clone(): any;
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
                public getBootTime(): java.util.Date;
                public clone(): Device;
                public setOnline(param0: java.lang.Boolean): void;
                public setStorageSize(param0: java.lang.Long): void;
                public isLowMemory(): java.lang.Boolean;
                /** @deprecated */
                public setScreenResolution(param0: string): void;
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
                /** @deprecated */
                public setArch(param0: string): void;
                public setScreenHeightPixels(param0: java.lang.Integer): void;
                public setUsableMemory(param0: java.lang.Long): void;
                public isCharging(): java.lang.Boolean;
                public setExternalFreeStorage(param0: java.lang.Long): void;
                public setId(param0: string): void;
                public getExternalFreeStorage(): java.lang.Long;
                /** @deprecated */
                public getArch(): string;
                public getFreeStorage(): java.lang.Long;
                public setArchs(param0: native.Array<string>): void;
                public getScreenHeightPixels(): java.lang.Integer;
                public getOrientation(): Device.DeviceOrientation;
                public getBatteryLevel(): java.lang.Float;
                /** @deprecated */
                public getScreenResolution(): string;
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
                export class DeviceOrientation {
                    public static class: java.lang.Class<DeviceOrientation>;
                    public static PORTRAIT: DeviceOrientation;
                    public static LANDSCAPE: DeviceOrientation;
                    public static valueOf(param0: string): DeviceOrientation;
                    public static values(): native.Array<DeviceOrientation>;
                    public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Gpu extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<Gpu>;
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
                public clone(): Gpu;
                public getApiType(): string;
                public getVersion(): string;
                public setId(param0: java.lang.Integer): void;
                public setMultiThreadedRendering(param0: java.lang.Boolean): void;
                public setVendorName(param0: string): void;
                public clone(): any;
                public getMemorySize(): java.lang.Integer;
                public getVendorId(): java.lang.Integer;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public getNpotSupport(): string;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Mechanism extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<Mechanism>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Message extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<Message>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class OperatingSystem extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<OperatingSystem>;
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
                public clone(): OperatingSystem;
                public setRawDescription(param0: string): void;
                public clone(): any;
                public setKernelVersion(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class Request extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<Request>;
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
                public setQueryString(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setUrl(param0: string): void;
                public setOthers(param0: java.util.Map<string,string>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SdkInfo extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SdkInfo>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SdkVersion extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SdkVersion>;
                public getVersion(): string;
                public setName(param0: string): void;
                public getIntegrations(): java.util.List<string>;
                public getName(): string;
                public getPackages(): java.util.List<SentryPackage>;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setVersion(param0: string): void;
                public addIntegration(param0: string): void;
                public addPackage(param0: string, param1: string): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryException extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryException>;
                public getType(): string;
                public getModule(): string;
                public getMechanism(): Mechanism;
                public setModule(param0: string): void;
                public getValue(): string;
                public setType(param0: string): void;
                public constructor();
                public setValue(param0: string): void;
                public setThreadId(param0: java.lang.Long): void;
                public getStacktrace(): SentryStackTrace;
                public setMechanism(param0: Mechanism): void;
                public getThreadId(): java.lang.Long;
                public setStacktrace(param0: SentryStackTrace): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryId extends java.lang.Object {
                public static class: java.lang.Class<SentryId>;
                public static EMPTY_ID: SentryId;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryPackage extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryPackage>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryRuntime extends java.lang.Object implements IUnknownPropertiesConsumer, java.lang.Cloneable {
                public static class: java.lang.Class<SentryRuntime>;
                public static TYPE: string;
                public setName(param0: string): void;
                public getVersion(): string;
                public getRawDescription(): string;
                public clone(): SentryRuntime;
                public setRawDescription(param0: string): void;
                public clone(): any;
                public getName(): string;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setVersion(param0: string): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryStackFrame extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryStackFrame>;
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

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryStackTrace extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryStackTrace>;
                public setRegisters(param0: java.util.Map<string,string>): void;
                public constructor(param0: java.util.List<SentryStackFrame>);
                public getRegisters(): java.util.Map<string,string>;
                public setFrames(param0: java.util.List<SentryStackFrame>): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public constructor();
                public getFrames(): java.util.List<SentryStackFrame>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class SentryThread extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryThread>;
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
                public getStacktrace(): SentryStackTrace;
                public getState(): string;
                public isDaemon(): java.lang.Boolean;
                public getId(): java.lang.Long;
                public setStacktrace(param0: SentryStackTrace): void;
                public setState(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setPriority(param0: java.lang.Integer): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace protocol {
            export class User extends java.lang.Object implements java.lang.Cloneable, IUnknownPropertiesConsumer {
                public static class: java.lang.Class<User>;
                public getId(): string;
                public getEmail(): string;
                public getIpAddress(): string;
                public getOthers(): java.util.Map<string,string>;
                public setEmail(param0: string): void;
                public clone(): User;
                public constructor();
                public setId(param0: string): void;
                public setUsername(param0: string): void;
                public clone(): any;
                public getUsername(): string;
                public setIpAddress(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
                public setOthers(param0: java.util.Map<string,string>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class AsyncConnection extends java.lang.Object implements java.io.Closeable, Connection {
                public static class: java.lang.Class<AsyncConnection>;
                public close(): void;
                public send(param0: SentryEnvelope, param1: any): void;
                public send(param0: SentryEnvelope): void;
                public constructor(param0: ITransport, param1: ITransportGate, param2: cache.IEnvelopeCache, param3: number, param4: SentryOptions);
            }
            export namespace AsyncConnection {
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
            export class Connection extends java.lang.Object {
                public static class: java.lang.Class<Connection>;
                /**
				 * Constructs a new instance of the io.sentry.transport.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    send(param0: SentryEnvelope, param1: any): void;
                    send(param0: SentryEnvelope): void;
                    close(): void;
                });
                public constructor();
                public close(): void;
                public send(param0: SentryEnvelope, param1: any): void;
                public send(param0: SentryEnvelope): void;
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
            export class HttpTransport extends java.lang.Object implements ITransport {
                public static class: java.lang.Class<HttpTransport>;
                public send(param0: SentryEnvelope): TransportResult;
                public close(): void;
                public constructor(param0: SentryOptions, param1: IConnectionConfigurator, param2: number, param3: number, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: java.net.URL);
                public isRetryAfter(param0: string): boolean;
                public open(): java.net.HttpURLConnection;
            }
            export namespace HttpTransport {
                export class DataCategory {
                    public static class: java.lang.Class<DataCategory>;
                    public static All: DataCategory;
                    public static Default: DataCategory;
                    public static Error: DataCategory;
                    public static Session: DataCategory;
                    public static Attachment: DataCategory;
                    public static Transaction: DataCategory;
                    public static Security: DataCategory;
                    public static Unknown: DataCategory;
                    public getCategory(): string;
                    public static values(): native.Array<DataCategory>;
                    public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
                    public static valueOf(param0: string): DataCategory;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace transport {
            export class IConnectionConfigurator extends java.lang.Object {
                public static class: java.lang.Class<IConnectionConfigurator>;
                /**
				 * Constructs a new instance of the io.sentry.transport.IConnectionConfigurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
                public constructor(implementation: {
                    configure(param0: java.net.HttpURLConnection): void;
                });
                public constructor();
                public configure(param0: java.net.HttpURLConnection): void;
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
                    isRetryAfter(param0: string): boolean;
                    send(param0: SentryEnvelope): TransportResult;
                    close(): void;
                    close(): void;
                });
                public constructor();
                public send(param0: SentryEnvelope): TransportResult;
                public close(): void;
                public isRetryAfter(param0: string): boolean;
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
                public store(param0: SentryEnvelope, param1: any): void;
                public store(param0: SentryEnvelope): void;
                public forEach(param0: any /* any*/): void;
                public iterator(): java.util.Iterator<any>;
                public static getInstance(): NoOpEnvelopeCache;
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
                public send(param0: SentryEnvelope): TransportResult;
                public close(): void;
                public static getInstance(): NoOpTransport;
                public isRetryAfter(param0: string): boolean;
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
                public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
                public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
                public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                public isTerminated(): boolean;
                public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler, param4: ILogger);
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
                public beforeExecute(param0: java.lang.Thread, param1: java.lang.Runnable): void;
                public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): any;
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
            export class StdoutTransport extends java.lang.Object implements ITransport {
                public static class: java.lang.Class<StdoutTransport>;
                public send(param0: SentryEnvelope): TransportResult;
                public close(): void;
                public isRetryAfter(param0: string): boolean;
                public constructor(param0: ISerializer);
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
            export class ApplyScopeUtils extends java.lang.Object {
                public static class: java.lang.Class<ApplyScopeUtils>;
                public static shouldApplyScopeData(param0: any): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class CollectionUtils extends java.lang.Object {
                public static class: java.lang.Class<CollectionUtils>;
                public static size(param0: java.lang.Iterable<any>): number;
                public static shallowCopy(param0: java.util.Map): java.util.Map;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace util {
            export class LogUtils extends java.lang.Object {
                public static class: java.lang.Class<LogUtils>;
                public static logIfNotRetryable(param0: ILogger, param1: any): void;
                public static logIfNotFlushable(param0: ILogger, param1: any): void;
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
            export class StringUtils extends java.lang.Object {
                public static class: java.lang.Class<StringUtils>;
                public static capitalize(param0: string): string;
                public static getStringAfterDot(param0: string): string;
                public static removeSurrounding(param0: string, param1: string): string;
            }
        }
    }
}

