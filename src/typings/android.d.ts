declare namespace com {
    export namespace google {
        export namespace gson {
            export class DefaultDateTypeAdapter extends TypeAdapter<java.util.Date> {
                public static class: java.lang.Class<DefaultDateTypeAdapter>;
                public constructor(param0: number, param1: number);
                public read(param0: any): any;
                public read(param0: any): java.util.Date;
                public write(param0: any, param1: java.util.Date): void;
                public write(param0: any, param1: any): void;
                public constructor(param0: java.lang.Class<any>, param1: number, param2: number);
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class ExclusionStrategy extends java.lang.Object {
                public static class: java.lang.Class<ExclusionStrategy>;
                /**
                 * Constructs a new instance of the ExclusionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { shouldSkipField(param0: FieldAttributes): boolean; shouldSkipClass(param0: java.lang.Class<any>): boolean });
                public constructor();
                public shouldSkipField(param0: FieldAttributes): boolean;
                public shouldSkipClass(param0: java.lang.Class<any>): boolean;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class TypeAdapterFactory extends java.lang.Object {
                public static class: java.lang.Class<TypeAdapterFactory>;
                /**
                 * Constructs a new instance of the com.google.gson.TypeAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { create(param0: Gson, param1: any): TypeAdapter<any> });
                public constructor();
                public create(param0: Gson, param1: any): TypeAdapter<any>;
            }
        }
    }
}
declare namespace com {
    export namespace google {
        export namespace gson {
            export class FieldAttributes extends java.lang.Object {
                public static class: java.lang.Class<FieldAttributes>;
                public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
                public hasModifier(param0: number): boolean;
                public constructor(param0: java.lang.reflect.Field);
                public getDeclaredClass(): java.lang.Class<any>;
                public getDeclaredType(): java.lang.reflect.Type;
                public getName(): string;
                public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
                public getDeclaringClass(): java.lang.Class<any>;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export abstract class FieldNamingPolicy extends FieldNamingStrategy {
                public static class: java.lang.Class<FieldNamingPolicy>;
                public static IDENTITY: FieldNamingPolicy;
                public static UPPER_CAMEL_CASE: FieldNamingPolicy;
                public static UPPER_CAMEL_CASE_WITH_SPACES: FieldNamingPolicy;
                public static LOWER_CASE_WITH_UNDERSCORES: FieldNamingPolicy;
                public static LOWER_CASE_WITH_DASHES: FieldNamingPolicy;
                public static LOWER_CASE_WITH_DOTS: FieldNamingPolicy;
                public static valueOf(param0: string): FieldNamingPolicy;
                public translateName(param0: java.lang.reflect.Field): string;
                public static values(): native.Array<FieldNamingPolicy>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class FieldNamingStrategy extends java.lang.Object {
                public static class: java.lang.Class<FieldNamingStrategy>;
                /**
                 * Constructs a new instance of the FieldNamingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { translateName(param0: java.lang.reflect.Field): string });
                public constructor();
                public translateName(param0: java.lang.reflect.Field): string;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class Gson extends java.lang.Object {
                public static class: java.lang.Class<Gson>;
                public excluder(): any;
                public getDelegateAdapter(param0: TypeAdapterFactory, param1: any): TypeAdapter<any>;
                public getAdapter(param0: java.lang.Class<any>): TypeAdapter<any>;
                public serializeNulls(): boolean;
                public newJsonReader(param0: java.io.Reader): any;
                public fromJson(param0: java.io.Reader, param1: java.lang.reflect.Type): any;
                public toJson(param0: JsonElement, param1: any): void;
                public fromJson(param0: string, param1: java.lang.Class<any>): any;
                public fromJson(param0: JsonElement, param1: java.lang.Class<any>): any;
                public htmlSafe(): boolean;
                public fromJson(param0: string, param1: java.lang.reflect.Type): any;
                public constructor();
                public toJsonTree(param0: any, param1: java.lang.reflect.Type): JsonElement;
                public newJsonWriter(param0: java.io.Writer): any;
                public fieldNamingStrategy(): FieldNamingStrategy;
                public fromJson(param0: any, param1: java.lang.reflect.Type): any;
                public toJson(param0: JsonElement, param1: java.lang.Appendable): void;
                public fromJson(param0: java.io.Reader, param1: java.lang.Class<any>): any;
                public newBuilder(): GsonBuilder;
                public toJson(param0: any, param1: java.lang.Appendable): void;
                public toJson(param0: any): string;
                public toJson(param0: any, param1: java.lang.reflect.Type, param2: any): void;
                public toJson(param0: any, param1: java.lang.reflect.Type): string;
                public toJsonTree(param0: any): JsonElement;
                public toString(): string;
                public toJson(param0: any, param1: java.lang.reflect.Type, param2: java.lang.Appendable): void;
                public toJson(param0: JsonElement): string;
                public getAdapter(param0: any): TypeAdapter<any>;
                public fromJson(param0: JsonElement, param1: java.lang.reflect.Type): any;
            }
            export namespace Gson {
                export class FutureTypeAdapter<T> extends TypeAdapter<any> {
                    public static class: java.lang.Class<FutureTypeAdapter<any>>;
                    public write(param0: any, param1: any): void;
                    public setDelegate(param0: TypeAdapter<any>): void;
                    public read(param0: any): any;
                }
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class GsonBuilder extends java.lang.Object {
                public static class: java.lang.Class<GsonBuilder>;
                public setPrettyPrinting(): GsonBuilder;
                public setDateFormat(param0: number, param1: number): GsonBuilder;
                public setLenient(): GsonBuilder;
                public registerTypeAdapter(param0: java.lang.reflect.Type, param1: any): GsonBuilder;
                public constructor();
                public registerTypeHierarchyAdapter(param0: java.lang.Class<any>, param1: any): GsonBuilder;
                public generateNonExecutableJson(): GsonBuilder;
                public excludeFieldsWithoutExposeAnnotation(): GsonBuilder;
                public setDateFormat(param0: number): GsonBuilder;
                public addSerializationExclusionStrategy(param0: ExclusionStrategy): GsonBuilder;
                public serializeNulls(): GsonBuilder;
                public serializeSpecialFloatingPointValues(): GsonBuilder;
                public addDeserializationExclusionStrategy(param0: ExclusionStrategy): GsonBuilder;
                public setExclusionStrategies(param0: native.Array<ExclusionStrategy>): GsonBuilder;
                public enableComplexMapKeySerialization(): GsonBuilder;
                public create(): Gson;
                public registerTypeAdapterFactory(param0: TypeAdapterFactory): GsonBuilder;
                public disableInnerClassSerialization(): GsonBuilder;
                public disableHtmlEscaping(): GsonBuilder;
                public setFieldNamingPolicy(param0: FieldNamingPolicy): GsonBuilder;
                public excludeFieldsWithModifiers(param0: native.Array<number>): GsonBuilder;
                public setFieldNamingStrategy(param0: FieldNamingStrategy): GsonBuilder;
                public setLongSerializationPolicy(param0: LongSerializationPolicy): GsonBuilder;
                public setDateFormat(param0: string): GsonBuilder;
                public setVersion(param0: number): GsonBuilder;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class InstanceCreator<T> extends java.lang.Object {
                public static class: java.lang.Class<InstanceCreator<any>>;
                /**
                 * Constructs a new instance of the InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { createInstance(param0: java.lang.reflect.Type): T });
                public constructor();
                public createInstance(param0: java.lang.reflect.Type): T;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonArray extends JsonElement implements java.lang.Iterable<JsonElement> {
                public static class: java.lang.Class<JsonArray>;
                public addAll(param0: JsonArray): void;
                public getAsLong(): number;
                public deepCopy(): JsonArray;
                public getAsShort(): number;
                public getAsBigDecimal(): java.math.BigDecimal;
                public constructor();
                public remove(param0: number): JsonElement;
                public getAsInt(): number;
                public getAsBoolean(): boolean;
                public add(param0: JsonElement): void;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public getAsDouble(): number;
                public iterator(): java.util.Iterator<JsonElement>;
                public getAsString(): string;
                public set(param0: number, param1: JsonElement): JsonElement;
                public getAsCharacter(): string;
                public spliterator(): java.util.Spliterator<any>;
                public iterator(): java.util.Iterator<any>;
                public contains(param0: JsonElement): boolean;
                public add(param0: string): void;
                public size(): number;
                public deepCopy(): JsonElement;
                public getAsBigInteger(): java.math.BigInteger;
                public getAsByte(): number;
                public add(param0: java.lang.Number): void;
                public remove(param0: JsonElement): boolean;
                public get(param0: number): JsonElement;
                public forEach(param0: any /* any*/): void;
                public constructor(param0: number);
                public getAsFloat(): number;
                public add(param0: java.lang.Boolean): void;
                public add(param0: java.lang.Character): void;
                public getAsNumber(): java.lang.Number;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonDeserializationContext extends java.lang.Object {
                public static class: java.lang.Class<JsonDeserializationContext>;
                /**
                 * Constructs a new instance of the JsonDeserializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { deserialize(param0: JsonElement, param1: java.lang.reflect.Type): any });
                public constructor();
                public deserialize(param0: JsonElement, param1: java.lang.reflect.Type): any;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonDeserializer<T> extends java.lang.Object {
                public static class: java.lang.Class<JsonDeserializer<any>>;
                /**
                 * Constructs a new instance of the JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): T });
                public constructor();
                public deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): T;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export abstract class JsonElement extends java.lang.Object {
                public static class: java.lang.Class<JsonElement>;
                public isJsonArray(): boolean;
                public getAsJsonArray(): JsonArray;
                public getAsJsonPrimitive(): JsonPrimitive;
                public getAsLong(): number;
                public getAsCharacter(): string;
                public isJsonPrimitive(): boolean;
                public getAsShort(): number;
                public toString(): string;
                public getAsBigDecimal(): java.math.BigDecimal;
                public constructor();
                public getAsJsonNull(): JsonNull;
                public deepCopy(): JsonElement;
                public getAsByte(): number;
                public getAsBigInteger(): java.math.BigInteger;
                public getAsBoolean(): boolean;
                public getAsInt(): number;
                public isJsonObject(): boolean;
                public getAsJsonObject(): JsonObject;
                public isJsonNull(): boolean;
                public getAsDouble(): number;
                public getAsFloat(): number;
                public getAsString(): string;
                public getAsNumber(): java.lang.Number;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonIOException extends JsonParseException {
                public static class: java.lang.Class<JsonIOException>;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonNull extends JsonElement {
                public static class: java.lang.Class<JsonNull>;
                public static INSTANCE: JsonNull;
                public deepCopy(): JsonElement;
                /** @deprecated */
                public constructor();
                public deepCopy(): JsonNull;
                public hashCode(): number;
                public equals(param0: any): boolean;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonObject extends JsonElement {
                public static class: java.lang.Class<JsonObject>;
                public addProperty(param0: string, param1: java.lang.Number): void;
                public getAsJsonArray(): JsonArray;
                public getAsJsonPrimitive(): JsonPrimitive;
                public keySet(): java.util.Set<string>;
                public get(param0: string): JsonElement;
                public getAsJsonPrimitive(param0: string): JsonPrimitive;
                public getAsJsonObject(param0: string): JsonObject;
                public entrySet(): java.util.Set<java.util.Map.Entry<string, JsonElement>>;
                public remove(param0: string): JsonElement;
                public constructor();
                public size(): number;
                public deepCopy(): JsonElement;
                public addProperty(param0: string, param1: java.lang.Character): void;
                public getAsJsonArray(param0: string): JsonArray;
                public deepCopy(): JsonObject;
                public hashCode(): number;
                public getAsJsonObject(): JsonObject;
                public add(param0: string, param1: JsonElement): void;
                public equals(param0: any): boolean;
                public addProperty(param0: string, param1: string): void;
                public has(param0: string): boolean;
                public addProperty(param0: string, param1: java.lang.Boolean): void;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonParseException extends java.lang.RuntimeException {
                public static class: java.lang.Class<JsonParseException>;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonParser extends java.lang.Object {
                public static class: java.lang.Class<JsonParser>;
                public parse(param0: java.io.Reader): JsonElement;
                public parse(param0: string): JsonElement;
                public parse(param0: any): JsonElement;
                public constructor();
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonPrimitive extends JsonElement {
                public static class: java.lang.Class<JsonPrimitive>;
                public deepCopy(): JsonPrimitive;
                public getAsLong(): number;
                public getAsCharacter(): string;
                public isNumber(): boolean;
                public getAsShort(): number;
                public constructor(param0: java.lang.Number);
                public getAsBigDecimal(): java.math.BigDecimal;
                public constructor(param0: string);
                public constructor();
                public deepCopy(): JsonElement;
                public getAsBigInteger(): java.math.BigInteger;
                public getAsByte(): number;
                public getAsBoolean(): boolean;
                public getAsInt(): number;
                public hashCode(): number;
                public isString(): boolean;
                public equals(param0: any): boolean;
                public constructor(param0: java.lang.Character);
                public getAsDouble(): number;
                public getAsFloat(): number;
                public isBoolean(): boolean;
                public getAsString(): string;
                public constructor(param0: java.lang.Boolean);
                public getAsNumber(): java.lang.Number;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonSerializationContext extends java.lang.Object {
                public static class: java.lang.Class<JsonSerializationContext>;
                /**
                 * Constructs a new instance of the JsonSerializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { serialize(param0: any): JsonElement; serialize(param0: any, param1: java.lang.reflect.Type): JsonElement });
                public constructor();
                public serialize(param0: any, param1: java.lang.reflect.Type): JsonElement;
                public serialize(param0: any): JsonElement;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonSerializer<T> extends java.lang.Object {
                public static class: java.lang.Class<JsonSerializer<any>>;
                /**
                 * Constructs a new instance of the JsonSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { serialize(param0: T, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement });
                public constructor();
                public serialize(param0: T, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonStreamParser extends java.util.Iterator<JsonElement> {
                public static class: java.lang.Class<JsonStreamParser>;
                public remove(): void;
                public hasNext(): boolean;
                public next(): JsonElement;
                public constructor(param0: java.io.Reader);
                public constructor(param0: string);
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export class JsonSyntaxException extends JsonParseException {
                public static class: java.lang.Class<JsonSyntaxException>;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export abstract class LongSerializationPolicy {
                public static class: java.lang.Class<LongSerializationPolicy>;
                public static DEFAULT: LongSerializationPolicy;
                public static STRING: LongSerializationPolicy;
                public serialize(param0: java.lang.Long): JsonElement;
                public static values(): native.Array<LongSerializationPolicy>;
                public static valueOf(param0: string): LongSerializationPolicy;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace com {
    export namespace google {
        export namespace gson {
            export abstract class TypeAdapter<T> extends java.lang.Object {
                public static class: java.lang.Class<TypeAdapter<any>>;
                public write(param0: any, param1: T): void;
                public fromJson(param0: java.io.Reader): T;
                public toJsonTree(param0: T): JsonElement;
                public toJson(param0: T): string;
                public nullSafe(): TypeAdapter<T>;
                public fromJson(param0: string): T;
                public toJson(param0: java.io.Writer, param1: T): void;
                public fromJsonTree(param0: JsonElement): T;
                public read(param0: any): T;
                public constructor();
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
                        public constructor(implementation: { onAppNotResponding(param0: ApplicationNotResponding): void });
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
                export class AndroidLogger extends java.lang.Object {
                    public static class: java.lang.Class<AndroidLogger>;
                    public log(param0: sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
                    public log(param0: sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
                    public log(param0: sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
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
                export class AndroidSerializer extends java.lang.Object {
                    public static class: java.lang.Class<AndroidSerializer>;
                    public deserializeEvent(param0: java.io.Reader): sentry.core.SentryEvent;
                    public serialize(param0: sentry.core.SentryEvent, param1: java.io.Writer): void;
                    public constructor(param0: sentry.core.ILogger);
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class AndroidTransportGate extends java.lang.Object {
                    public static class: java.lang.Class<AndroidTransportGate>;
                    public isSendingAllowed(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class AnrIntegration extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<AnrIntegration>;
                    public register(param0: sentry.core.IHub, param1: sentry.core.SentryOptions): void;
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
                    public getState(): java.lang.Thread.State;
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
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public static SENTRY_CLIENT_NAME: string;
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
                export class DefaultAndroidEventProcessor extends java.lang.Object {
                    public static class: java.lang.Class<DefaultAndroidEventProcessor>;
                    public getUser(): sentry.core.protocol.User;
                    public process(param0: sentry.core.SentryEvent, param1: any): sentry.core.SentryEvent;
                    public constructor(param0: globalAndroid.content.Context, param1: sentry.core.SentryOptions);
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
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export abstract class EnvelopeFileObserverIntegration extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<EnvelopeFileObserverIntegration>;
                    public register(param0: sentry.core.IHub, param1: sentry.core.SentryOptions): void;
                    public close(): void;
                    public static getOutboxFileObserver(): EnvelopeFileObserverIntegration;
                }
                export namespace EnvelopeFileObserverIntegration {
                    export class OutboxEnvelopeFileObserverIntegration extends EnvelopeFileObserverIntegration {
                        public static class: java.lang.Class<OutboxEnvelopeFileObserverIntegration>;
                        public close(): void;
                        public getPath(param0: sentry.core.SentryOptions): string;
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
                export class IHandler extends java.lang.Object {
                    public static class: java.lang.Class<IHandler>;
                    /**
                     * Constructs a new instance of the io.sentry.android.core.IHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { post(param0: java.lang.Runnable): void; getThread(): java.lang.Thread });
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
                export class NdkIntegration extends java.lang.Object {
                    public static class: java.lang.Class<NdkIntegration>;
                    public register(param0: sentry.core.IHub, param1: sentry.core.SentryOptions): void;
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
                export class SentryAndroid extends java.lang.Object {
                    public static class: java.lang.Class<SentryAndroid>;
                    public static init(param0: globalAndroid.content.Context): void;
                    public static init(param0: globalAndroid.content.Context, param1: sentry.core.ILogger, param2: sentry.core.Sentry.OptionsConfiguration<SentryAndroidOptions>): void;
                    public static init(param0: globalAndroid.content.Context, param1: sentry.core.Sentry.OptionsConfiguration<SentryAndroidOptions>): void;
                    public static init(param0: globalAndroid.content.Context, param1: sentry.core.ILogger): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class SentryAndroidOptions extends sentry.core.SentryOptions {
                    public static class: java.lang.Class<SentryAndroidOptions>;
                    public setAnrReportInDebug(param0: boolean): void;
                    public setAnrTimeoutIntervalMills(param0: number): void;
                    public isAnrReportInDebug(): boolean;
                    public constructor();
                    public isAnrEnabled(): boolean;
                    public setAnrEnabled(param0: boolean): void;
                    public getAnrTimeoutIntervalMills(): number;
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
                    public query(
                        param0: globalAndroid.net.Uri,
                        param1: native.Array<string>,
                        param2: globalAndroid.os.Bundle,
                        param3: globalAndroid.os.CancellationSignal
                    ): globalAndroid.database.Cursor;
                    public getType(param0: globalAndroid.net.Uri): string;
                    public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
                    public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
                    public query(
                        param0: globalAndroid.net.Uri,
                        param1: native.Array<string>,
                        param2: string,
                        param3: native.Array<string>,
                        param4: string,
                        param5: globalAndroid.os.CancellationSignal
                    ): globalAndroid.database.Cursor;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace android {
            export namespace core {
                export class UnknownPropertiesTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
                    public static class: java.lang.Class<UnknownPropertiesTypeAdapterFactory>;
                    public create(param0: com.google.gson.Gson, param1: any): com.google.gson.TypeAdapter<any>;
                }
                export namespace UnknownPropertiesTypeAdapterFactory {
                    export class UnknownPropertiesTypeAdapter<T> extends com.google.gson.TypeAdapter<any> {
                        public static class: java.lang.Class<UnknownPropertiesTypeAdapter<any>>;
                        public read(param0 /* : com.google.any */): any;
                        public write(param0 /* : com.google.any */, param1: any): void;
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
                export namespace adapters {
                    export class ContextsDeserializerAdapter extends com.google.gson.JsonDeserializer<sentry.core.protocol.Contexts> {
                        public static class: java.lang.Class<ContextsDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public constructor(param0: sentry.core.ILogger);
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): sentry.core.protocol.Contexts;
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
                export namespace adapters {
                    export class DateDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.Date> {
                        public static class: java.lang.Class<DateDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
                        public constructor(param0: sentry.core.ILogger);
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
                export namespace adapters {
                    export class DateSerializerAdapter extends com.google.gson.JsonSerializer<java.util.Date> {
                        public static class: java.lang.Class<DateSerializerAdapter>;
                        public constructor(param0: sentry.core.ILogger);
                        public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                        public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
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
                export namespace adapters {
                    export class OrientationDeserializerAdapter extends com.google.gson.JsonDeserializer<sentry.core.protocol.Device.DeviceOrientation> {
                        public static class: java.lang.Class<OrientationDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public constructor(param0: sentry.core.ILogger);
                        public deserialize(
                            param0: com.google.gson.JsonElement,
                            param1: java.lang.reflect.Type,
                            param2: com.google.gson.JsonDeserializationContext
                        ): sentry.core.protocol.Device.DeviceOrientation;
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
                export namespace adapters {
                    export class OrientationSerializerAdapter extends com.google.gson.JsonSerializer<sentry.core.protocol.Device.DeviceOrientation> {
                        public static class: java.lang.Class<OrientationSerializerAdapter>;
                        public constructor(param0: sentry.core.ILogger);
                        public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                        public serialize(
                            param0: sentry.core.protocol.Device.DeviceOrientation,
                            param1: java.lang.reflect.Type,
                            param2: com.google.gson.JsonSerializationContext
                        ): com.google.gson.JsonElement;
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
                export namespace adapters {
                    export class SentryIdDeserializerAdapter extends com.google.gson.JsonDeserializer<sentry.core.protocol.SentryId> {
                        public static class: java.lang.Class<SentryIdDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): sentry.core.protocol.SentryId;
                        public constructor(param0: sentry.core.ILogger);
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
                export namespace adapters {
                    export class SentryIdSerializerAdapter extends com.google.gson.JsonSerializer<sentry.core.protocol.SentryId> {
                        public static class: java.lang.Class<SentryIdSerializerAdapter>;
                        public constructor(param0: sentry.core.ILogger);
                        public serialize(param0: sentry.core.protocol.SentryId, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                        public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
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
                export namespace adapters {
                    export class SentryLevelDeserializerAdapter extends com.google.gson.JsonDeserializer<sentry.core.SentryLevel> {
                        public static class: java.lang.Class<SentryLevelDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public constructor(param0: sentry.core.ILogger);
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): sentry.core.SentryLevel;
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
                export namespace adapters {
                    export class SentryLevelSerializerAdapter extends com.google.gson.JsonSerializer<sentry.core.SentryLevel> {
                        public static class: java.lang.Class<SentryLevelSerializerAdapter>;
                        public constructor(param0: sentry.core.ILogger);
                        public serialize(param0: sentry.core.SentryLevel, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                        public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
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
                export namespace adapters {
                    export class TimeZoneDeserializerAdapter extends com.google.gson.JsonDeserializer<java.util.TimeZone> {
                        public static class: java.lang.Class<TimeZoneDeserializerAdapter>;
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): any;
                        public constructor(param0: sentry.core.ILogger);
                        public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.TimeZone;
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
                export namespace adapters {
                    export class TimeZoneSerializerAdapter extends com.google.gson.JsonSerializer<java.util.TimeZone> {
                        public static class: java.lang.Class<TimeZoneSerializerAdapter>;
                        public constructor(param0: sentry.core.ILogger);
                        public serialize(param0: java.util.TimeZone, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
                        public serialize(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
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
                    export class ConnectivityChecker extends java.lang.Object {
                        public static class: java.lang.Class<ConnectivityChecker>;
                        public static isConnected(param0: globalAndroid.content.Context, param1: sentry.core.ILogger): java.lang.Boolean;
                        public static getConnectionType(param0: globalAndroid.content.Context, param1: sentry.core.ILogger): string;
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
        export namespace core {
            export class AsyncConnectionFactory extends java.lang.Object {
                public static class: java.lang.Class<AsyncConnectionFactory>;
                public static create(
                    param0: SentryOptions,
                    param1: cache.IEventCache,
                    param2: cache.IEnvelopeCache
                ): transport.AsyncConnection;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Breadcrumb extends java.lang.Object implements java.lang.Cloneable, IUnknownPropertiesConsumer {
                public static class: java.lang.Class<Breadcrumb>;
                public getTimestamp(): java.util.Date;
                public getType(): string;
                public setData(param0: string, param1: any): void;
                public setCategory(param0: string): void;
                public setType(param0: string): void;
                public constructor(param0: string);
                public setLevel(param0: SentryLevel): void;
                public constructor();
                public getCategory(): string;
                public getLevel(): SentryLevel;
                public clone(): Breadcrumb;
                public clone(): any;
                public setMessage(param0: string): void;
                public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                public getMessage(): string;
                public removeData(param0: string): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class CircularFifoQueue<E> extends java.util.AbstractCollection<any> {
                public static class: java.lang.Class<CircularFifoQueue<any>>;
                public parallelStream(): java.util.stream.Stream<any>;
                public peek(): any;
                public addAll(param0: java.util.Collection<any>): boolean;
                public removeIf(param0: any /* any*/): boolean;
                public constructor();
                public toArray(): native.Array<any>;
                public constructor(param0: java.util.Collection<any>);
                public containsAll(param0: java.util.Collection<any>): boolean;
                public maxSize(): number;
                public add(param0: any): boolean;
                public hashCode(): number;
                public offer(param0: any): boolean;
                public clear(): void;
                public equals(param0: any): boolean;
                public isEmpty(): boolean;
                public remove(param0: any): boolean;
                public remove(): any;
                public element(): any;
                public spliterator(): java.util.Spliterator<any>;
                public contains(param0: any): boolean;
                public stream(): java.util.stream.Stream<any>;
                public toArray(param0: native.Array<any>): native.Array<any>;
                public iterator(): java.util.Iterator<any>;
                public retainAll(param0: java.util.Collection<any>): boolean;
                public get(param0: number): any;
                public size(): number;
                public poll(): any;
                public removeAll(param0: java.util.Collection<any>): boolean;
                public forEach(param0: any /* any*/): void;
                public isFull(): boolean;
                public isAtFullCapacity(): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class CredentialsSettingConfigurator extends java.lang.Object implements transport.IConnectionConfigurator {
                public static class: java.lang.Class<CredentialsSettingConfigurator>;
                public configure(param0: java.net.HttpURLConnection): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class DateUtils extends java.lang.Object {
                public static class: java.lang.Class<DateUtils>;
                public static getCurrentDateTime(): java.util.Date;
                public static getDateTime(param0: string): java.util.Date;
                public static getTimestamp(param0: java.util.Date): string;
                public static getDateTimeWithMillisPrecision(param0: string): java.util.Date;
                public static getDateTime(param0: java.util.Date): java.util.Date;
                public static getTimestampIsoFormat(param0: java.util.Date): string;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class DiagnosticLogger extends java.lang.Object implements ILogger {
                public static class: java.lang.Class<DiagnosticLogger>;
                public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                public constructor(param0: SentryOptions, param1: ILogger);
                public getLogger(): ILogger;
                public isEnabled(param0: SentryLevel): boolean;
                public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export abstract class DirectoryProcessor extends java.lang.Object {
                public static class: java.lang.Class<DirectoryProcessor>;
                public processFile(param0: java.io.File, param1: any): void;
                public isRelevantFileName(param0: string): boolean;
            }
            export namespace DirectoryProcessor {
                export class SendCachedEventHint extends java.lang.Object
                    implements hints.Cached, hints.Retryable, hints.SubmissionResult, hints.Flushable {
                    public static class: java.lang.Class<SendCachedEventHint>;
                    public constructor(param0: number, param1: ILogger);
                    public isRetry(): boolean;
                    public setRetry(param0: boolean): void;
                    public waitFlush(): boolean;
                    public setResult(param0: boolean): void;
                    public isSuccess(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Dsn extends java.lang.Object {
                public static class: java.lang.Class<Dsn>;
                public getPublicKey(): string;
                public getPath(): string;
                public getProjectId(): string;
                public getSecretKey(): string;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class EnvelopeReader extends java.lang.Object implements IEnvelopeReader {
                public static class: java.lang.Class<EnvelopeReader>;
                public read(param0: java.io.InputStream): SentryEnvelope;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class EnvelopeSender extends DirectoryProcessor implements IEnvelopeSender {
                public static class: java.lang.Class<EnvelopeSender>;
                public processEnvelopeFile(param0: string, param1: any): void;
                public constructor(param0: IHub, param1: IEnvelopeReader, param2: ISerializer, param3: ILogger, param4: number);
                public processFile(param0: java.io.File, param1: any): void;
                public isRelevantFileName(param0: string): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class EventProcessor extends java.lang.Object {
                public static class: java.lang.Class<EventProcessor>;
                /**
                 * Constructs a new instance of the io.sentry.core.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { process(param0: SentryEvent, param1: any): SentryEvent });
                public constructor();
                public process(param0: SentryEvent, param1: any): SentryEvent;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class HttpTransportFactory extends java.lang.Object {
                public static class: java.lang.Class<HttpTransportFactory>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Hub extends java.lang.Object implements IHub {
                public static class: java.lang.Class<Hub>;
                public constructor(param0: SentryOptions);
                public popScope(): void;
                public bindClient(param0: ISentryClient): void;
                public removeExtra(param0: string): void;
                public setFingerprint(param0: java.util.List<string>): void;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public setUser(param0: protocol.User): void;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public setExtra(param0: string, param1: string): void;
                public removeTag(param0: string): void;
                public withScope(param0: ScopeCallback): void;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public clone(): any;
                public startSession(): void;
                public addBreadcrumb(param0: string): void;
                public setTag(param0: string, param1: string): void;
                public addBreadcrumb(param0: string, param1: string): void;
                public captureMessage(param0: string): protocol.SentryId;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public pushScope(): void;
                public clearBreadcrumbs(): void;
                public endSession(): void;
                public getLastEventId(): protocol.SentryId;
                public configureScope(param0: ScopeCallback): void;
                public setLevel(param0: SentryLevel): void;
                public setTransaction(param0: string): void;
                public addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public addBreadcrumb(param0: Breadcrumb): void;
                public clone(): IHub;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                public flush(param0: number): void;
            }
            export namespace Hub {
                export class StackItem extends java.lang.Object {
                    public static class: java.lang.Class<StackItem>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class HubAdapter extends java.lang.Object implements IHub {
                public static class: java.lang.Class<HubAdapter>;
                public popScope(): void;
                public bindClient(param0: ISentryClient): void;
                public removeExtra(param0: string): void;
                public setFingerprint(param0: java.util.List<string>): void;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public setUser(param0: protocol.User): void;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public setExtra(param0: string, param1: string): void;
                public removeTag(param0: string): void;
                public withScope(param0: ScopeCallback): void;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public clone(): any;
                public startSession(): void;
                public addBreadcrumb(param0: string): void;
                public setTag(param0: string, param1: string): void;
                public addBreadcrumb(param0: string, param1: string): void;
                public captureMessage(param0: string): protocol.SentryId;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public pushScope(): void;
                public clearBreadcrumbs(): void;
                public endSession(): void;
                public getLastEventId(): protocol.SentryId;
                public configureScope(param0: ScopeCallback): void;
                public setLevel(param0: SentryLevel): void;
                public setTransaction(param0: string): void;
                public static getInstance(): HubAdapter;
                public addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public addBreadcrumb(param0: Breadcrumb): void;
                public clone(): IHub;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class IEnvelopeReader extends java.lang.Object {
                public static class: java.lang.Class<IEnvelopeReader>;
                /**
                 * Constructs a new instance of the io.sentry.core.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { read(param0: java.io.InputStream): SentryEnvelope });
                public constructor();
                public read(param0: java.io.InputStream): SentryEnvelope;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class IEnvelopeSender extends java.lang.Object {
                public static class: java.lang.Class<IEnvelopeSender>;
                /**
                 * Constructs a new instance of the io.sentry.core.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { processEnvelopeFile(param0: string, param1: any): void });
                public constructor();
                public processEnvelopeFile(param0: string, param1: any): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class IHub extends java.lang.Object {
                public static class: java.lang.Class<IHub>;
                /**
                 * Constructs a new instance of the io.sentry.core.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
                public bindClient(param0: ISentryClient): void;
                public removeExtra(param0: string): void;
                public setFingerprint(param0: java.util.List<string>): void;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public setUser(param0: protocol.User): void;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public setExtra(param0: string, param1: string): void;
                public removeTag(param0: string): void;
                public withScope(param0: ScopeCallback): void;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public clone(): any;
                public startSession(): void;
                public addBreadcrumb(param0: string): void;
                public setTag(param0: string, param1: string): void;
                public addBreadcrumb(param0: string, param1: string): void;
                public captureMessage(param0: string): protocol.SentryId;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public pushScope(): void;
                public clearBreadcrumbs(): void;
                public endSession(): void;
                public getLastEventId(): protocol.SentryId;
                public configureScope(param0: ScopeCallback): void;
                public setLevel(param0: SentryLevel): void;
                public setTransaction(param0: string): void;
                public addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public addBreadcrumb(param0: Breadcrumb): void;
                public clone(): IHub;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class ILogger extends java.lang.Object {
                public static class: java.lang.Class<ILogger>;
                /**
                 * Constructs a new instance of the io.sentry.core.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                    log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                    log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
                });
                public constructor();
                public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class ISentryClient extends java.lang.Object {
                public static class: java.lang.Class<ISentryClient>;
                /**
                 * Constructs a new instance of the io.sentry.core.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
                    captureSession(param0: Session, param1: any): void;
                    captureSession(param0: Session): void;
                    captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                    captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                });
                public constructor();
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public captureSession(param0: Session, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public captureSession(param0: Session): void;
                public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public flush(param0: number): void;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class ISerializer extends java.lang.Object {
                public static class: java.lang.Class<ISerializer>;
                /**
                 * Constructs a new instance of the io.sentry.core.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    deserializeEvent(param0: java.io.Reader): SentryEvent;
                    deserializeSession(param0: java.io.Reader): Session;
                    deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
                    serialize(param0: SentryEvent, param1: java.io.Writer): void;
                    serialize(param0: Session, param1: java.io.Writer): void;
                    serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
                });
                public constructor();
                public deserializeSession(param0: java.io.Reader): Session;
                public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
                public deserializeEvent(param0: java.io.Reader): SentryEvent;
                public serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
                public serialize(param0: SentryEvent, param1: java.io.Writer): void;
                public serialize(param0: Session, param1: java.io.Writer): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class IUnknownPropertiesConsumer extends java.lang.Object {
                public static class: java.lang.Class<IUnknownPropertiesConsumer>;
                /**
                 * Constructs a new instance of the io.sentry.core.IUnknownPropertiesConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { acceptUnknownProperties(param0: java.util.Map<string, any>): void });
                public constructor();
                public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Integration extends java.lang.Object {
                public static class: java.lang.Class<Integration>;
                /**
                 * Constructs a new instance of the io.sentry.core.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { register(param0: IHub, param1: SentryOptions): void });
                public constructor();
                public register(param0: IHub, param1: SentryOptions): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class InvalidDsnException extends java.lang.RuntimeException {
                public static class: java.lang.Class<InvalidDsnException>;
                public getDsn(): string;
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor(param0: string, param1: string);
                public constructor(param0: string, param1: string, param2: java.lang.Throwable);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class MainEventProcessor extends java.lang.Object implements EventProcessor {
                public static class: java.lang.Class<MainEventProcessor>;
                public process(param0: SentryEvent, param1: any): SentryEvent;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class NoOpHub extends java.lang.Object implements IHub {
                public static class: java.lang.Class<NoOpHub>;
                public popScope(): void;
                public bindClient(param0: ISentryClient): void;
                public removeExtra(param0: string): void;
                public setFingerprint(param0: java.util.List<string>): void;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public setUser(param0: protocol.User): void;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public setExtra(param0: string, param1: string): void;
                public removeTag(param0: string): void;
                public withScope(param0: ScopeCallback): void;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public clone(): any;
                public startSession(): void;
                public addBreadcrumb(param0: string): void;
                public setTag(param0: string, param1: string): void;
                public addBreadcrumb(param0: string, param1: string): void;
                public captureMessage(param0: string): protocol.SentryId;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public pushScope(): void;
                public clearBreadcrumbs(): void;
                public endSession(): void;
                public getLastEventId(): protocol.SentryId;
                public configureScope(param0: ScopeCallback): void;
                public setLevel(param0: SentryLevel): void;
                public setTransaction(param0: string): void;
                public addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public static getInstance(): NoOpHub;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public addBreadcrumb(param0: Breadcrumb): void;
                public clone(): IHub;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                public flush(param0: number): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class NoOpLogger extends java.lang.Object implements ILogger {
                public static class: java.lang.Class<NoOpLogger>;
                public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                public static getInstance(): NoOpLogger;
                public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class NoOpSentryClient extends java.lang.Object implements ISentryClient {
                public static class: java.lang.Class<NoOpSentryClient>;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public captureSession(param0: Session, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
                public static getInstance(): NoOpSentryClient;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
                public captureSession(param0: Session): void;
                public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public flush(param0: number): void;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class NoOpSerializer extends java.lang.Object implements ISerializer {
                public static class: java.lang.Class<NoOpSerializer>;
                public static getInstance(): NoOpSerializer;
                public deserializeSession(param0: java.io.Reader): Session;
                public deserializeEnvelope(param0: java.io.InputStream): SentryEnvelope;
                public deserializeEvent(param0: java.io.Reader): SentryEvent;
                public serialize(param0: SentryEnvelope, param1: java.io.Writer): void;
                public serialize(param0: SentryEvent, param1: java.io.Writer): void;
                public serialize(param0: Session, param1: java.io.Writer): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class OptionsContainer<T> extends java.lang.Object {
                public static class: java.lang.Class<OptionsContainer<any>>;
                public createInstance(): T;
                public static create(param0: java.lang.Class<any>): OptionsContainer<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Scope extends java.lang.Object implements java.lang.Cloneable {
                public static class: java.lang.Class<Scope>;
                public constructor(param0: SentryOptions);
                public removeExtra(param0: string): void;
                public setFingerprint(param0: java.util.List<string>): void;
                public clearBreadcrumbs(): void;
                public clone(): Scope;
                public setUser(param0: protocol.User): void;
                public setLevel(param0: SentryLevel): void;
                public setTransaction(param0: string): void;
                public setExtra(param0: string, param1: string): void;
                public getLevel(): SentryLevel;
                public addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public removeTag(param0: string): void;
                public clear(): void;
                public clone(): any;
                public getTransaction(): string;
                public getUser(): protocol.User;
                public addBreadcrumb(param0: Breadcrumb): void;
                public addEventProcessor(param0: EventProcessor): void;
                public setTag(param0: string, param1: string): void;
            }
            export namespace Scope {
                export class IWithSession extends java.lang.Object {
                    public static class: java.lang.Class<IWithSession>;
                    /**
                     * Constructs a new instance of the io.sentry.core.Scope$IWithSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { accept(param0: Session): void });
                    public constructor();
                    public accept(param0: Session): void;
                }
                export class SessionPair extends java.lang.Object {
                    public static class: java.lang.Class<SessionPair>;
                    public getPrevious(): Session;
                    public getCurrent(): Session;
                    public constructor(param0: Session, param1: Session);
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class ScopeCallback extends java.lang.Object {
                public static class: java.lang.Class<ScopeCallback>;
                /**
                 * Constructs a new instance of the io.sentry.core.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { run(param0: Scope): void });
                public constructor();
                public run(param0: Scope): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SendCachedEvent extends DirectoryProcessor {
                public static class: java.lang.Class<SendCachedEvent>;
                public processFile(param0: java.io.File, param1: any): void;
                public isRelevantFileName(param0: string): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SendCachedEventFireAndForgetIntegration extends java.lang.Object implements Integration {
                public static class: java.lang.Class<SendCachedEventFireAndForgetIntegration>;
                public register(param0: IHub, param1: SentryOptions): void;
            }
            export namespace SendCachedEventFireAndForgetIntegration {
                export class SendFireAndForget extends java.lang.Object {
                    public static class: java.lang.Class<SendFireAndForget>;
                    /**
                     * Constructs a new instance of the io.sentry.core.SendCachedEventFireAndForgetIntegration$SendFireAndForget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { send(): void });
                    public constructor();
                    public send(): void;
                }
                export class SendFireAndForgetFactory extends java.lang.Object {
                    public static class: java.lang.Class<SendFireAndForgetFactory>;
                    /**
                     * Constructs a new instance of the io.sentry.core.SendCachedEventFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        create(param0: IHub, param1: SentryOptions): SendFireAndForget;
                    });
                    public constructor();
                    public create(param0: IHub, param1: SentryOptions): SendFireAndForget;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Sentry extends java.lang.Object {
                public static class: java.lang.Class<Sentry>;
                public static init(): void;
                public static addBreadcrumb(param0: Breadcrumb): void;
                public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>, param2: boolean): void;
                public static clearBreadcrumbs(): void;
                public static captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
                public static addBreadcrumb(param0: string, param1: string): void;
                public static init(param0: OptionsContainer<any>, param1: Sentry.OptionsConfiguration<any>): void;
                public static setTransaction(param0: string): void;
                public static popScope(): void;
                public static addBreadcrumb(param0: Breadcrumb, param1: any): void;
                public static captureEvent(param0: SentryEvent): protocol.SentryId;
                public static setLevel(param0: SentryLevel): void;
                public static setExtra(param0: string, param1: string): void;
                public static getLastEventId(): protocol.SentryId;
                public static startSession(): void;
                public static bindClient(param0: ISentryClient): void;
                public static endSession(): void;
                public static withScope(param0: ScopeCallback): void;
                public static configureScope(param0: ScopeCallback): void;
                public static removeExtra(param0: string): void;
                public static init(param0: Sentry.OptionsConfiguration<SentryOptions>, param1: boolean): void;
                public static flush(param0: number): void;
                public static setFingerprint(param0: java.util.List<string>): void;
                public static init(param0: Sentry.OptionsConfiguration<SentryOptions>): void;
                public static captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public static captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public static isEnabled(): boolean;
                public static removeTag(param0: string): void;
                public static close(): void;
                public static captureMessage(param0: string): protocol.SentryId;
                public static setTag(param0: string, param1: string): void;
                public static addBreadcrumb(param0: string): void;
                public static pushScope(): void;
                public static captureException(param0: java.lang.Throwable): protocol.SentryId;
                public static setUser(param0: protocol.User): void;
            }
            export namespace Sentry {
                export class OptionsConfiguration<T> extends java.lang.Object {
                    public static class: java.lang.Class<OptionsConfiguration<any>>;
                    /**
                     * Constructs a new instance of the io.sentry.core.Sentry$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { configure(param0: T): void });
                    public constructor();
                    public configure(param0: T): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryClient extends java.lang.Object implements ISentryClient {
                public static class: java.lang.Class<SentryClient>;
                public captureException(param0: java.lang.Throwable): protocol.SentryId;
                public close(): void;
                public captureSession(param0: Session, param1: any): void;
                public captureEvent(param0: SentryEvent, param1: Scope, param2: any): protocol.SentryId;
                public captureEvent(param0: SentryEvent): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: Scope): protocol.SentryId;
                public captureEnvelope(param0: SentryEnvelope, param1: any): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope, param2: any): protocol.SentryId;
                public captureSession(param0: Session): void;
                public captureMessage(param0: string, param1: SentryLevel, param2: Scope): protocol.SentryId;
                public captureException(param0: java.lang.Throwable, param1: Scope): protocol.SentryId;
                public captureEnvelope(param0: SentryEnvelope): protocol.SentryId;
                public captureEvent(param0: SentryEvent, param1: any): protocol.SentryId;
                public constructor(param0: SentryOptions, param1: transport.Connection);
                public isEnabled(): boolean;
                public captureMessage(param0: string, param1: SentryLevel): protocol.SentryId;
                public flush(param0: number): void;
                public captureException(param0: java.lang.Throwable, param1: any): protocol.SentryId;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelope extends java.lang.Object {
                public static class: java.lang.Class<SentryEnvelope>;
                public constructor(param0: SentryEnvelopeHeader, param1: java.lang.Iterable<SentryEnvelopeItem>);
                public static fromSession(param0: ISerializer, param1: Session): SentryEnvelope;
                public constructor(param0: protocol.SentryId, param1: SentryEnvelopeItem);
                public getItems(): java.lang.Iterable<SentryEnvelopeItem>;
                public getHeader(): SentryEnvelopeHeader;
                public constructor(param0: protocol.SentryId, param1: java.lang.Iterable<SentryEnvelopeItem>);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeHeader extends java.lang.Object {
                public static class: java.lang.Class<SentryEnvelopeHeader>;
                public getEventId(): protocol.SentryId;
                public constructor(param0: protocol.SentryId);
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeHeaderAdapter extends com.google.gson.TypeAdapter<SentryEnvelopeHeader> {
                public static class: java.lang.Class<SentryEnvelopeHeaderAdapter>;
                public read(param0: any): SentryEnvelopeHeader;
                public write(param0: any, param1: SentryEnvelopeHeader): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeItem extends java.lang.Object {
                public static class: java.lang.Class<SentryEnvelopeItem>;
                public getData(): native.Array<number>;
                public getHeader(): SentryEnvelopeItemHeader;
                public static fromEvent(param0: ISerializer, param1: SentryEvent): SentryEnvelopeItem;
                public static fromSession(param0: ISerializer, param1: Session): SentryEnvelopeItem;
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
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeItemHeader extends java.lang.Object {
                public static class: java.lang.Class<SentryEnvelopeItemHeader>;
                public getType(): string;
                public getContentType(): string;
                public getFileName(): string;
                public getLength(): number;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeItemHeaderAdapter extends com.google.gson.TypeAdapter<SentryEnvelopeItemHeader> {
                public static class: java.lang.Class<SentryEnvelopeItemHeaderAdapter>;
                public write(param0: any, param1: SentryEnvelopeItemHeader): void;
                public read(param0: any): SentryEnvelopeItemHeader;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEnvelopeItemType {
                public static class: java.lang.Class<SentryEnvelopeItemType>;
                public static Session: SentryEnvelopeItemType;
                public static Event: SentryEnvelopeItemType;
                public getType(): string;
                public static values(): native.Array<SentryEnvelopeItemType>;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                public static valueOf(param0: string): SentryEnvelopeItemType;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryEvent extends java.lang.Object implements IUnknownPropertiesConsumer {
                public static class: java.lang.Class<SentryEvent>;
                public setExceptions(param0: java.util.List<protocol.SentryException>): void;
                public getSdk(): protocol.SdkVersion;
                public setEventId(param0: protocol.SentryId): void;
                public isCrashed(): boolean;
                public setBreadcrumbs(param0: java.util.List<Breadcrumb>): void;
                public setServerName(param0: string): void;
                public setSdk(param0: protocol.SdkVersion): void;
                public constructor(param0: java.lang.Throwable);
                public constructor();
                public getBreadcrumbs(): java.util.List<Breadcrumb>;
                public setMessage(param0: protocol.Message): void;
                public getEnvironment(): string;
                public getLevel(): SentryLevel;
                public getExceptions(): java.util.List<protocol.SentryException>;
                public setContexts(param0: protocol.Contexts): void;
                public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                public getRelease(): string;
                public setRelease(param0: string): void;
                public setTag(param0: string, param1: string): void;
                public getTimestamp(): java.util.Date;
                public removeModule(param0: string): void;
                public getLogger(): string;
                public constructor(param0: java.util.Date);
                public getUnknown(): java.util.Map<string, any>;
                public setLevel(param0: SentryLevel): void;
                public getEventId(): protocol.SentryId;
                public setFingerprints(param0: java.util.List<string>): void;
                public getContexts(): protocol.Contexts;
                public setEnvironment(param0: string): void;
                public getUser(): protocol.User;
                public addBreadcrumb(param0: Breadcrumb): void;
                public setExtras(param0: java.util.Map<string, any>): void;
                public getServerName(): string;
                public removeExtra(param0: string): void;
                public getRequest(): protocol.Request;
                public setThrowable(param0: java.lang.Throwable): void;
                public setModule(param0: string, param1: string): void;
                public setUser(param0: protocol.User): void;
                public setTags(param0: java.util.Map<string, string>): void;
                public getMessage(): protocol.Message;
                public removeTag(param0: string): void;
                public getDist(): string;
                public setPlatform(param0: string): void;
                public setExtra(param0: string, param1: any): void;
                public setLogger(param0: string): void;
                public getTransaction(): string;
                public getDebugMeta(): protocol.DebugMeta;
                public setRequest(param0: protocol.Request): void;
                public setThreads(param0: java.util.List<protocol.SentryThread>): void;
                public getThreads(): java.util.List<protocol.SentryThread>;
                public setTransaction(param0: string): void;
                public setDebugMeta(param0: protocol.DebugMeta): void;
                public getPlatform(): string;
                public setModules(param0: java.util.Map<string, string>): void;
                public setDist(param0: string): void;
                public isErrored(): boolean;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryExceptionFactory extends java.lang.Object {
                public static class: java.lang.Class<SentryExceptionFactory>;
                public constructor(param0: SentryStackTraceFactory);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryLevel {
                public static class: java.lang.Class<SentryLevel>;
                public static LOG: SentryLevel;
                public static DEBUG: SentryLevel;
                public static INFO: SentryLevel;
                public static WARNING: SentryLevel;
                public static ERROR: SentryLevel;
                public static FATAL: SentryLevel;
                public static values(): native.Array<SentryLevel>;
                public static valueOf(param0: string): SentryLevel;
                public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryOptions extends java.lang.Object {
                public static class: java.lang.Class<SentryOptions>;
                public getEventProcessors(): java.util.List<EventProcessor>;
                public isDebug(): boolean;
                public getShutdownTimeout(): number;
                public setServerName(param0: string): void;
                public getDistinctId(): string;
                public addInAppExclude(param0: string): void;
                public getFlushTimeoutMillis(): number;
                public constructor();
                public setMaxBreadcrumbs(param0: number): void;
                public setShutdownTimeout(param0: number): void;
                public getBeforeBreadcrumb(): SentryOptions.BeforeBreadcrumbCallback;
                public getEnvironment(): string;
                public getInAppIncludes(): java.util.List<string>;
                public getDiagnosticLevel(): SentryLevel;
                public getRelease(): string;
                public getTransportGate(): transport.ITransportGate;
                public setRelease(param0: string): void;
                public setSessionTrackingIntervalMillis(param0: number): void;
                public setFlushTimeoutMillis(param0: number): void;
                public getDsn(): string;
                public getOutboxPath(): string;
                public getInAppExcludes(): java.util.List<string>;
                public getSessionsDirSize(): number;
                public setSampleRate(param0: java.lang.Double): void;
                public addInAppInclude(param0: string): void;
                public setSessionsDirSize(param0: number): void;
                public isAttachThreads(): boolean;
                public getIntegrations(): java.util.List<Integration>;
                public setTransport(param0: transport.ITransport): void;
                public getSessionTrackingIntervalMillis(): number;
                public setBeforeSend(param0: SentryOptions.BeforeSendCallback): void;
                public setDistinctId(param0: string): void;
                public setAttachStacktrace(param0: boolean): void;
                public getSessionsPath(): string;
                public setLogger(param0: ILogger): void;
                public setSerializer(param0: ISerializer): void;
                public setEnvironment(param0: string): void;
                public addEventProcessor(param0: EventProcessor): void;
                public getSampleRate(): java.lang.Double;
                public getCacheDirSize(): number;
                public addIntegration(param0: Integration): void;
                public getLogger(): ILogger;
                public getServerName(): string;
                public setAttachThreads(param0: boolean): void;
                public getCacheDirPath(): string;
                public getTransport(): transport.ITransport;
                public setDebug(param0: boolean): void;
                public setEnableSessionTracking(param0: boolean): void;
                public getDist(): string;
                public setProxy(param0: java.net.Proxy): void;
                public setEnableNdk(param0: boolean): void;
                public setDiagnosticLevel(param0: SentryLevel): void;
                public getMaxBreadcrumbs(): number;
                public setSentryClientName(param0: string): void;
                public isAttachStacktrace(): boolean;
                public setTransportGate(param0: transport.ITransportGate): void;
                public setCacheDirSize(param0: number): void;
                public getSerializer(): ISerializer;
                public setDsn(param0: string): void;
                public getSentryClientName(): string;
                public setCacheDirPath(param0: string): void;
                public isEnableSessionTracking(): boolean;
                public setBeforeBreadcrumb(param0: SentryOptions.BeforeBreadcrumbCallback): void;
                public getProxy(): java.net.Proxy;
                public setDist(param0: string): void;
                public isEnableNdk(): boolean;
                public getBeforeSend(): SentryOptions.BeforeSendCallback;
            }
            export namespace SentryOptions {
                export class BeforeBreadcrumbCallback extends java.lang.Object {
                    public static class: java.lang.Class<BeforeBreadcrumbCallback>;
                    /**
                     * Constructs a new instance of the io.sentry.core.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { execute(param0: Breadcrumb, param1: any): Breadcrumb });
                    public constructor();
                    public execute(param0: Breadcrumb, param1: any): Breadcrumb;
                }
                export class BeforeSendCallback extends java.lang.Object {
                    public static class: java.lang.Class<BeforeSendCallback>;
                    /**
                     * Constructs a new instance of the io.sentry.core.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { execute(param0: SentryEvent, param1: any): SentryEvent });
                    public constructor();
                    public execute(param0: SentryEvent, param1: any): SentryEvent;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryStackTraceFactory extends java.lang.Object {
                public static class: java.lang.Class<SentryStackTraceFactory>;
                public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryThreadFactory extends java.lang.Object {
                public static class: java.lang.Class<SentryThreadFactory>;
                public constructor(param0: SentryStackTraceFactory, param1: boolean);
                public constructor(param0: SentryStackTraceFactory);
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SentryValues<T> extends java.lang.Object {
                public static class: java.lang.Class<SentryValues<any>>;
                public getValues(): java.util.List<T>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class Session extends java.lang.Object {
                public static class: java.lang.Class<Session>;
                public getTimestamp(): java.util.Date;
                public end(param0: java.util.Date): void;
                public errorCount(): number;
                public getIpAddress(): string;
                public update(param0: Session.State, param1: string, param2: boolean): boolean;
                public getInit(): java.lang.Boolean;
                public getSequence(): java.lang.Long;
                public getDistinctId(): string;
                public getSessionId(): java.util.UUID;
                public end(): void;
                public getStarted(): java.util.Date;
                public getEnvironment(): string;
                public getStatus(): Session.State;
                public constructor(param0: string, param1: protocol.User, param2: string, param3: string);
                public getDuration(): java.lang.Double;
                public getRelease(): string;
                public constructor(
                    param0: Session.State,
                    param1: java.util.Date,
                    param2: java.util.Date,
                    param3: number,
                    param4: string,
                    param5: java.util.UUID,
                    param6: java.lang.Boolean,
                    param7: java.lang.Long,
                    param8: java.lang.Double,
                    param9: string,
                    param10: string,
                    param11: string,
                    param12: string
                );
                public getUserAgent(): string;
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
                    public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SessionAdapter extends com.google.gson.TypeAdapter<Session> {
                public static class: java.lang.Class<SessionAdapter>;
                public read(param0: any): Session;
                public write(param0: any, param1: Session): void;
                public constructor();
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SynchronizedCollection<E> extends java.lang.Object {
                public static class: java.lang.Class<SynchronizedCollection<any>>;
                public addAll(param0: java.util.Collection<any>): boolean;
                public parallelStream(): java.util.stream.Stream<E>;
                public removeIf(param0: any /* any*/): boolean;
                public toArray(): native.Array<any>;
                public containsAll(param0: java.util.Collection<any>): boolean;
                public hashCode(): number;
                public clear(): void;
                public equals(param0: any): boolean;
                public iterator(): java.util.Iterator<E>;
                public decorated(): java.util.Collection<E>;
                public isEmpty(): boolean;
                public stream(): java.util.stream.Stream<E>;
                public remove(param0: any): boolean;
                public spliterator(): java.util.Spliterator<any>;
                public contains(param0: any): boolean;
                public toArray(param0: native.Array<any>): native.Array<any>;
                public iterator(): java.util.Iterator<any>;
                public toString(): string;
                public retainAll(param0: java.util.Collection<any>): boolean;
                public size(): number;
                public spliterator(): java.util.Spliterator<E>;
                public add(param0: E): boolean;
                public removeAll(param0: java.util.Collection<any>): boolean;
                public forEach(param0: any /* any*/): void;
                public static synchronizedCollection(param0: java.util.Collection<any>): SynchronizedCollection<any>;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SynchronizedQueue<E> extends SynchronizedCollection<any> implements java.util.Queue<any> {
                public static class: java.lang.Class<SynchronizedQueue<any>>;
                public parallelStream(): java.util.stream.Stream<any>;
                public peek(): any;
                public addAll(param0: java.util.Collection<any>): boolean;
                public removeIf(param0: any /* any*/): boolean;
                public toArray(): native.Array<any>;
                public containsAll(param0: java.util.Collection<any>): boolean;
                public decorated(): java.util.Queue<any>;
                public add(param0: any): boolean;
                public hashCode(): number;
                public offer(param0: any): boolean;
                public decorated(): java.util.Collection<any>;
                public equals(param0: any): boolean;
                public clear(): void;
                public isEmpty(): boolean;
                public remove(param0: any): boolean;
                public remove(): any;
                public element(): any;
                public spliterator(): java.util.Spliterator<any>;
                public contains(param0: any): boolean;
                public stream(): java.util.stream.Stream<any>;
                public toArray(param0: native.Array<any>): native.Array<any>;
                public iterator(): java.util.Iterator<any>;
                public retainAll(param0: java.util.Collection<any>): boolean;
                public constructor(param0: java.util.Queue<any>, param1: any);
                public poll(): any;
                public size(): number;
                public removeAll(param0: java.util.Collection<any>): boolean;
                public forEach(param0: any /* any*/): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class SystemOutLogger extends java.lang.Object implements ILogger {
                public static class: java.lang.Class<SystemOutLogger>;
                public log(param0: SentryLevel, param1: string, param2: native.Array<any>): void;
                public log(param0: SentryLevel, param1: string, param2: java.lang.Throwable): void;
                public constructor();
                public log(param0: SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class UncaughtExceptionHandler extends java.lang.Object {
                public static class: java.lang.Class<UncaughtExceptionHandler>;
                /**
                 * Constructs a new instance of the io.sentry.core.UncaughtExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
                    setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
                });
                public constructor();
                public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
                public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
            }
            export namespace UncaughtExceptionHandler {
                export class Adapter extends java.lang.Object implements UncaughtExceptionHandler {
                    public static class: java.lang.Class<Adapter>;
                    public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
                    public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export class UncaughtExceptionHandlerIntegration extends java.lang.Object implements Integration, java.lang.Thread.UncaughtExceptionHandler, java.io.Closeable {
                public static class: java.lang.Class<UncaughtExceptionHandlerIntegration>;
                public close(): void;
                public register(param0: IHub, param1: SentryOptions): void;
                public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
            }
            export namespace UncaughtExceptionHandlerIntegration {
                export class UncaughtExceptionHint extends java.lang.Object implements hints.DiskFlushNotification, hints.Flushable {
                    public static class: java.lang.Class<UncaughtExceptionHint>;
                    public waitFlush(): boolean;
                    public markFlushed(): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace cache {
                export class DiskCache extends java.lang.Object implements IEventCache {
                    public static class: java.lang.Class<DiskCache>;
                    public static FILE_SUFFIX: string;
                    public iterator(): java.util.Iterator<SentryEvent>;
                    public discard(param0: SentryEvent): void;
                    public iterator(): java.util.Iterator<any>;
                    public store(param0: SentryEvent): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public constructor(param0: SentryOptions);
                    public forEach(param0: any /* any*/): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace cache {
                export class IEnvelopeCache extends java.lang.Iterable<SentryEnvelope> {
                    public static class: java.lang.Class<IEnvelopeCache>;
                    /**
                     * Constructs a new instance of the io.sentry.core.cache.IEnvelopeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
                    public store(param0: SentryEnvelope, param1: any): void;
                    public store(param0: SentryEnvelope): void;
                    public iterator(): java.util.Iterator<any>;
                    public discard(param0: SentryEnvelope): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public forEach(param0: any /* any*/): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace cache {
                export class IEventCache extends java.lang.Iterable<SentryEvent> {
                    public static class: java.lang.Class<IEventCache>;
                    /**
                     * Constructs a new instance of the io.sentry.core.cache.IEventCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        store(param0: SentryEvent): void;
                        discard(param0: SentryEvent): void;
                        iterator(): java.util.Iterator<any>;
                        forEach(param0: any /* any*/): void;
                        spliterator(): java.util.Spliterator<any>;
                    });
                    public constructor();
                    public discard(param0: SentryEvent): void;
                    public iterator(): java.util.Iterator<any>;
                    public store(param0: SentryEvent): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public forEach(param0: any /* any*/): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace cache {
                export class SessionCache extends java.lang.Object implements IEnvelopeCache {
                    public static class: java.lang.Class<SessionCache>;
                    public static PREFIX_CURRENT_SESSION_FILE: string;
                    public store(param0: SentryEnvelope, param1: any): void;
                    public store(param0: SentryEnvelope): void;
                    public iterator(): java.util.Iterator<any>;
                    public discard(param0: SentryEnvelope): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public constructor(param0: SentryOptions);
                    public forEach(param0: any /* any*/): void;
                    public iterator(): java.util.Iterator<SentryEnvelope>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace exception {
                export class ExceptionMechanismException extends java.lang.RuntimeException {
                    public static class: java.lang.Class<ExceptionMechanismException>;
                    public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
                    public constructor(param0: string, param1: java.lang.Throwable);
                    public constructor(param0: string);
                    public constructor(param0: java.lang.Throwable);
                    public constructor();
                    public getThrowable(): java.lang.Throwable;
                    public getExceptionMechanism(): protocol.Mechanism;
                    public constructor(param0: protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
                    public getThread(): java.lang.Thread;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class ApplyScopeData extends java.lang.Object {
                    public static class: java.lang.Class<ApplyScopeData>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.ApplyScopeData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class Cached extends java.lang.Object {
                    public static class: java.lang.Class<Cached>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.Cached interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class DiskFlushNotification extends java.lang.Object {
                    public static class: java.lang.Class<DiskFlushNotification>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { markFlushed(): void });
                    public constructor();
                    public markFlushed(): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class Flushable extends java.lang.Object {
                    public static class: java.lang.Class<Flushable>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.Flushable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { waitFlush(): boolean });
                    public constructor();
                    public waitFlush(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class Retryable extends java.lang.Object {
                    public static class: java.lang.Class<Retryable>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { isRetry(): boolean; setRetry(param0: boolean): void });
                    public constructor();
                    public isRetry(): boolean;
                    public setRetry(param0: boolean): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionEnd extends java.lang.Object {
                    public static class: java.lang.Class<SessionEnd>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.SessionEnd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionEndHint extends java.lang.Object implements SessionEnd {
                    public static class: java.lang.Class<SessionEndHint>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionStart extends java.lang.Object {
                    public static class: java.lang.Class<SessionStart>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.SessionStart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionStartHint extends java.lang.Object implements SessionStart {
                    public static class: java.lang.Class<SessionStartHint>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionUpdate extends java.lang.Object {
                    public static class: java.lang.Class<SessionUpdate>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.SessionUpdate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SessionUpdateHint extends java.lang.Object implements SessionUpdate {
                    public static class: java.lang.Class<SessionUpdateHint>;
                    public constructor();
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace hints {
                export class SubmissionResult extends java.lang.Object {
                    public static class: java.lang.Class<SubmissionResult>;
                    /**
                     * Constructs a new instance of the io.sentry.core.hints.SubmissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { setResult(param0: boolean): void; isSuccess(): boolean });
                    public constructor();
                    public setResult(param0: boolean): void;
                    public isSuccess(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class App extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<App>;
                    public static TYPE: string;
                    public getAppIdentifier(): string;
                    public setAppBuild(param0: string): void;
                    public getAppName(): string;
                    public setAppStartTime(param0: java.util.Date): void;
                    public setDeviceAppHash(param0: string): void;
                    public getBuildType(): string;
                    public setBuildType(param0: string): void;
                    public getAppBuild(): string;
                    public getAppVersion(): string;
                    public setAppVersion(param0: string): void;
                    public constructor();
                    public getAppStartTime(): java.util.Date;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getDeviceAppHash(): string;
                    public setAppIdentifier(param0: string): void;
                    public setAppName(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Browser extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Browser>;
                    public static TYPE: string;
                    public setVersion(param0: string): void;
                    public getVersion(): string;
                    public constructor();
                    public getName(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setName(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Contexts extends java.util.concurrent.ConcurrentHashMap<string, any> {
                    public static class: java.lang.Class<Contexts>;
                    public setGpu(param0: Gpu): void;
                    public replace(param0: any, param1: any): any;
                    public isEmpty(): boolean;
                    public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
                    public forEach(param0: any /* any<any,any>*/): void;
                    public getApp(): App;
                    public size(): number;
                    public setOperatingSystem(param0: OperatingSystem): void;
                    public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
                    public getBrowser(): Browser;
                    public put(param0: any, param1: any): any;
                    public getOrDefault(param0: any, param1: any): any;
                    public getDevice(): Device;
                    public putAll(param0: java.util.Map<any, any>): void;
                    public replace(param0: any, param1: any, param2: any): boolean;
                    public containsValue(param0: any): boolean;
                    public remove(param0: any): any;
                    public constructor();
                    public keySet(): java.util.Set<any>;
                    public constructor(param0: number, param1: number, param2: number);
                    public clear(): void;
                    public keySet(param0: any): java.util.concurrent.ConcurrentHashMap.KeySetView<any, any>;
                    public hashCode(): number;
                    public putIfAbsent(param0: any, param1: any): any;
                    public remove(param0: any, param1: any): boolean;
                    public constructor(param0: number);
                    public setBrowser(param0: Browser): void;
                    public constructor(param0: number, param1: number);
                    public setDevice(param0: Device): void;
                    public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
                    public getRuntime(): SentryRuntime;
                    public getGpu(): Gpu;
                    public constructor(param0: java.util.Map<any, any>);
                    public values(): java.util.Collection<any>;
                    public setApp(param0: App): void;
                    public forEach(param0: number, param1: any /* any<any,any>*/): void;
                    public equals(param0: any): boolean;
                    public containsKey(param0: any): boolean;
                    public entrySet(): java.util.Set<java.util.Map.Entry<any, any>>;
                    public forEach(param0: number, param1: any /* any*/, param2: any /* any*/): void;
                    public getOperatingSystem(): OperatingSystem;
                    public compute(param0: any, param1: any /* any<any,any,any>*/): any;
                    public setRuntime(param0: SentryRuntime): void;
                    public replaceAll(param0: any /* any<any,any,any>*/): void;
                    public get(param0: any): any;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class DebugImage extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<DebugImage>;
                    public getImageAddr(): string;
                    public getCodeId(): string;
                    public setImageSize(param0: java.lang.Long): void;
                    public setType(param0: string): void;
                    public setDebugId(param0: string): void;
                    public setUuid(param0: string): void;
                    public getDebugFile(): string;
                    public setCodeFile(param0: string): void;
                    public setDebugFile(param0: string): void;
                    public getCodeFile(): string;
                    public getDebugId(): string;
                    public setImageAddr(param0: string): void;
                    public constructor();
                    public setArch(param0: string): void;
                    public getArch(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getUuid(): string;
                    public getType(): string;
                    public getImageSize(): java.lang.Long;
                    public setCodeId(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class DebugMeta extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<DebugMeta>;
                    public getSdkInfo(): SdkInfo;
                    public getImages(): java.util.List<DebugImage>;
                    public constructor();
                    public setSdkInfo(param0: SdkInfo): void;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setImages(param0: java.util.List<DebugImage>): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Device extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Device>;
                    public static TYPE: string;
                    public getFreeMemory(): java.lang.Long;
                    public setOnline(param0: java.lang.Boolean): void;
                    public getId(): string;
                    public getModel(): string;
                    public isOnline(): java.lang.Boolean;
                    public getScreenDpi(): java.lang.Integer;
                    public isSimulator(): java.lang.Boolean;
                    public getUsableMemory(): java.lang.Long;
                    public getScreenDensity(): java.lang.Float;
                    public constructor();
                    public setMemorySize(param0: java.lang.Long): void;
                    public setFamily(param0: string): void;
                    /** @deprecated */
                    public getArch(): string;
                    public getScreenWidthPixels(): java.lang.Integer;
                    public setArchs(param0: native.Array<string>): void;
                    public setConnectionType(param0: string): void;
                    public setExternalFreeStorage(param0: java.lang.Long): void;
                    public setTimezone(param0: java.util.TimeZone): void;
                    public setOrientation(param0: Device.DeviceOrientation): void;
                    public getBrand(): string;
                    public getFamily(): string;
                    public setScreenWidthPixels(param0: java.lang.Integer): void;
                    public getMemorySize(): java.lang.Long;
                    public getBootTime(): java.util.Date;
                    /** @deprecated */
                    public setArch(param0: string): void;
                    public setName(param0: string): void;
                    public isCharging(): java.lang.Boolean;
                    public setLanguage(param0: string): void;
                    public getExternalFreeStorage(): java.lang.Long;
                    public setManufacturer(param0: string): void;
                    public setBatteryLevel(param0: java.lang.Float): void;
                    public setScreenDpi(param0: java.lang.Integer): void;
                    public setScreenHeightPixels(param0: java.lang.Integer): void;
                    public setModel(param0: string): void;
                    public getModelId(): string;
                    public setExternalStorageSize(param0: java.lang.Long): void;
                    public isLowMemory(): java.lang.Boolean;
                    public getConnectionType(): string;
                    public getStorageSize(): java.lang.Long;
                    public setFreeStorage(param0: java.lang.Long): void;
                    public setSimulator(param0: java.lang.Boolean): void;
                    public getTimezone(): java.util.TimeZone;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getScreenHeightPixels(): java.lang.Integer;
                    public setModelId(param0: string): void;
                    /** @deprecated */
                    public getScreenResolution(): string;
                    /** @deprecated */
                    public setScreenResolution(param0: string): void;
                    public setCharging(param0: java.lang.Boolean): void;
                    public getBatteryLevel(): java.lang.Float;
                    public getArchs(): native.Array<string>;
                    public getOrientation(): Device.DeviceOrientation;
                    public setScreenDensity(param0: java.lang.Float): void;
                    public getManufacturer(): string;
                    public getFreeStorage(): java.lang.Long;
                    public setUsableMemory(param0: java.lang.Long): void;
                    public getExternalStorageSize(): java.lang.Long;
                    public setBrand(param0: string): void;
                    public getName(): string;
                    public setFreeMemory(param0: java.lang.Long): void;
                    public setId(param0: string): void;
                    public getLanguage(): string;
                    public setStorageSize(param0: java.lang.Long): void;
                    public setLowMemory(param0: java.lang.Boolean): void;
                    public setBootTime(param0: java.util.Date): void;
                }
                export namespace Device {
                    export class DeviceOrientation {
                        public static class: java.lang.Class<DeviceOrientation>;
                        public static PORTRAIT: DeviceOrientation;
                        public static LANDSCAPE: DeviceOrientation;
                        public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
                        public static valueOf(param0: string): DeviceOrientation;
                        public static values(): native.Array<DeviceOrientation>;
                    }
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Gpu extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Gpu>;
                    public static TYPE: string;
                    public getVersion(): string;
                    public getApiType(): string;
                    public setApiType(param0: string): void;
                    public getVendorName(): string;
                    public setId(param0: java.lang.Integer): void;
                    public getVendorId(): java.lang.Integer;
                    public setVendorId(param0: java.lang.Integer): void;
                    public setNpotSupport(param0: string): void;
                    public getMemorySize(): java.lang.Integer;
                    public setName(param0: string): void;
                    public getNpotSupport(): string;
                    public setVersion(param0: string): void;
                    public setMultiThreadedRendering(param0: java.lang.Boolean): void;
                    public constructor();
                    public getName(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setMemorySize(param0: java.lang.Integer): void;
                    public isMultiThreadedRendering(): java.lang.Boolean;
                    public setVendorName(param0: string): void;
                    public getId(): java.lang.Integer;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Mechanism extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Mechanism>;
                    public setDescription(param0: string): void;
                    public constructor(param0: java.lang.Thread);
                    public setType(param0: string): void;
                    public setHelpLink(param0: string): void;
                    public isHandled(): java.lang.Boolean;
                    public setSynthetic(param0: java.lang.Boolean): void;
                    public getMeta(): java.util.Map<string, any>;
                    public getSynthetic(): java.lang.Boolean;
                    public getHelpLink(): string;
                    public getData(): java.util.Map<string, any>;
                    public setMeta(param0: java.util.Map<string, any>): void;
                    public constructor();
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setData(param0: java.util.Map<string, any>): void;
                    public getType(): string;
                    public getDescription(): string;
                    public setHandled(param0: java.lang.Boolean): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Message extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Message>;
                    public setFormatted(param0: string): void;
                    public constructor();
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getMessage(): string;
                    public getParams(): java.util.List<string>;
                    public setMessage(param0: string): void;
                    public getFormatted(): string;
                    public setParams(param0: java.util.List<string>): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class OperatingSystem extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<OperatingSystem>;
                    public static TYPE: string;
                    public getVersion(): string;
                    public setKernelVersion(param0: string): void;
                    public isRooted(): java.lang.Boolean;
                    public setRooted(param0: java.lang.Boolean): void;
                    public getKernelVersion(): string;
                    public setName(param0: string): void;
                    public setVersion(param0: string): void;
                    public setBuild(param0: string): void;
                    public constructor();
                    public getName(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getRawDescription(): string;
                    public setRawDescription(param0: string): void;
                    public getBuild(): string;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class Request extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<Request>;
                    public setCookies(param0: string): void;
                    public getHeaders(): java.util.Map<string, string>;
                    public getData(): any;
                    public setEnvs(param0: java.util.Map<string, string>): void;
                    public getOthers(): java.util.Map<string, string>;
                    public setData(param0: any): void;
                    public getUrl(): string;
                    public constructor();
                    public getCookies(): string;
                    public setUrl(param0: string): void;
                    public getQueryString(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setMethod(param0: string): void;
                    public getEnvs(): java.util.Map<string, string>;
                    public setOthers(param0: java.util.Map<string, string>): void;
                    public getMethod(): string;
                    public setQueryString(param0: string): void;
                    public setHeaders(param0: java.util.Map<string, string>): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SdkInfo extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SdkInfo>;
                    public setVersionMinor(param0: java.lang.Integer): void;
                    public setSdkName(param0: string): void;
                    public constructor();
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setVersionPatchlevel(param0: java.lang.Integer): void;
                    public getVersionMajor(): java.lang.Integer;
                    public setVersionMajor(param0: java.lang.Integer): void;
                    public getVersionMinor(): java.lang.Integer;
                    public getSdkName(): string;
                    public getVersionPatchlevel(): java.lang.Integer;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SdkVersion extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SdkVersion>;
                    public setVersion(param0: string): void;
                    public getVersion(): string;
                    public constructor();
                    public getName(): string;
                    public addPackage(param0: string, param1: string): void;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public addIntegration(param0: string): void;
                    public setName(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryException extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryException>;
                    public getModule(): string;
                    public setType(param0: string): void;
                    public setModule(param0: string): void;
                    public setValue(param0: string): void;
                    public setStacktrace(param0: SentryStackTrace): void;
                    public getThreadId(): java.lang.Long;
                    public setThreadId(param0: java.lang.Long): void;
                    public getValue(): string;
                    public constructor();
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getType(): string;
                    public getStacktrace(): SentryStackTrace;
                    public getMechanism(): Mechanism;
                    public setMechanism(param0: Mechanism): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryId extends java.lang.Object {
                    public static class: java.lang.Class<SentryId>;
                    public static EMPTY_ID: SentryId;
                    public equals(param0: any): boolean;
                    public toString(): string;
                    public constructor(param0: string);
                    public constructor();
                    public hashCode(): number;
                    public constructor(param0: java.util.UUID);
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryPackage extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryPackage>;
                    public setVersion(param0: string): void;
                    public getVersion(): string;
                    public constructor();
                    public getName(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setName(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryRuntime extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryRuntime>;
                    public static TYPE: string;
                    public setVersion(param0: string): void;
                    public getVersion(): string;
                    public constructor();
                    public getName(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public getRawDescription(): string;
                    public setRawDescription(param0: string): void;
                    public setName(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryStackFrame extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryStackFrame>;
                    public getPreContext(): java.util.List<string>;
                    public getFunction(): string;
                    public setInApp(param0: java.lang.Boolean): void;
                    public getColno(): java.lang.Integer;
                    public getFramesOmitted(): java.util.List<java.lang.Integer>;
                    public setFunction(param0: string): void;
                    public setModule(param0: string): void;
                    public isInApp(): java.lang.Boolean;
                    public setPlatform(param0: string): void;
                    public setContextLine(param0: string): void;
                    public setLineno(param0: java.lang.Integer): void;
                    public getPostContext(): java.util.List<string>;
                    public setPackage(param0: string): void;
                    public setSymbolAddr(param0: string): void;
                    public getRawFunction(): string;
                    public constructor();
                    public setPostContext(param0: java.util.List<string>): void;
                    public getVars(): java.util.Map<string, string>;
                    public getFilename(): string;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public isNative(): java.lang.Boolean;
                    public getInstructionAddr(): string;
                    public getSymbolAddr(): string;
                    public getImageAddr(): string;
                    public setColno(param0: java.lang.Integer): void;
                    public getModule(): string;
                    public getLineno(): java.lang.Integer;
                    public setNative(param0: java.lang.Boolean): void;
                    public setRawFunction(param0: string): void;
                    public getPlatform(): string;
                    public setVars(param0: java.util.Map<string, string>): void;
                    public setFilename(param0: string): void;
                    public setAbsPath(param0: string): void;
                    public getAbsPath(): string;
                    public getPackage(): string;
                    public setImageAddr(param0: string): void;
                    public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
                    public setInstructionAddr(param0: string): void;
                    public setPreContext(param0: java.util.List<string>): void;
                    public getContextLine(): string;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryStackTrace extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryStackTrace>;
                    public constructor(param0: java.util.List<SentryStackFrame>);
                    public getFrames(): java.util.List<SentryStackFrame>;
                    public constructor();
                    public getRegisters(): java.util.Map<string, string>;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setFrames(param0: java.util.List<SentryStackFrame>): void;
                    public setRegisters(param0: java.util.Map<string, string>): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class SentryThread extends java.lang.Object implements IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<SentryThread>;
                    public setState(param0: string): void;
                    public setCrashed(param0: java.lang.Boolean): void;
                    public setCurrent(param0: java.lang.Boolean): void;
                    public getState(): string;
                    public getId(): java.lang.Long;
                    public setName(param0: string): void;
                    public setStacktrace(param0: SentryStackTrace): void;
                    public constructor();
                    public setId(param0: java.lang.Long): void;
                    public getName(): string;
                    public setDaemon(param0: java.lang.Boolean): void;
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public isCrashed(): java.lang.Boolean;
                    public isCurrent(): java.lang.Boolean;
                    public getPriority(): java.lang.Integer;
                    public getStacktrace(): SentryStackTrace;
                    public setPriority(param0: java.lang.Integer): void;
                    public isDaemon(): java.lang.Boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace protocol {
                export class User extends java.lang.Object implements java.lang.Cloneable, IUnknownPropertiesConsumer {
                    public static class: java.lang.Class<User>;
                    public getId(): string;
                    public getOthers(): java.util.Map<string, string>;
                    public clone(): User;
                    public setIpAddress(param0: string): void;
                    public getUsername(): string;
                    public getIpAddress(): string;
                    public setUsername(param0: string): void;
                    public clone(): any;
                    public constructor();
                    public acceptUnknownProperties(param0: java.util.Map<string, any>): void;
                    public setId(param0: string): void;
                    public setOthers(param0: java.util.Map<string, string>): void;
                    public getEmail(): string;
                    public setEmail(param0: string): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class AsyncConnection extends java.lang.Object implements java.io.Closeable, Connection {
                    public static class: java.lang.Class<AsyncConnection>;
                    public send(param0: SentryEnvelope): void;
                    public send(param0: SentryEnvelope, param1: any): void;
                    public close(): void;
                    public send(param0: SentryEvent): void;
                    public send(param0: SentryEvent, param1: any): void;
                    public constructor(
                        param0: ITransport,
                        param1: ITransportGate,
                        param2: cache.IEventCache,
                        param3: cache.IEnvelopeCache,
                        param4: number,
                        param5: SentryOptions
                    );
                }
                export namespace AsyncConnection {
                    export class AsyncConnectionThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
                        public static class: java.lang.Class<AsyncConnectionThreadFactory>;
                        public newThread(param0: java.lang.Runnable): java.lang.Thread;
                    }
                    export class EventSender extends java.lang.Object implements java.lang.Runnable {
                        public static class: java.lang.Class<EventSender>;
                        public run(): void;
                    }
                    export class SessionSender extends java.lang.Object implements java.lang.Runnable {
                        public static class: java.lang.Class<SessionSender>;
                        public run(): void;
                    }
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class Connection extends java.lang.Object {
                    public static class: java.lang.Class<Connection>;
                    /**
                     * Constructs a new instance of the io.sentry.core.transport.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        send(param0: SentryEvent, param1: any): void;
                        send(param0: SentryEvent): void;
                        send(param0: SentryEnvelope, param1: any): void;
                        send(param0: SentryEnvelope): void;
                        close(): void;
                    });
                    public constructor();
                    public send(param0: SentryEnvelope): void;
                    public send(param0: SentryEnvelope, param1: any): void;
                    public close(): void;
                    public send(param0: SentryEvent): void;
                    public send(param0: SentryEvent, param1: any): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class HttpTransport extends java.lang.Object implements ITransport {
                    public static class: java.lang.Class<HttpTransport>;
                    public send(param0: SentryEvent): TransportResult;
                    public isRetryAfter(param0: string): boolean;
                    public constructor(
                        param0: SentryOptions,
                        param1: IConnectionConfigurator,
                        param2: number,
                        param3: number,
                        param4: boolean,
                        param5: java.net.URL
                    );
                    public close(): void;
                    public send(param0: SentryEnvelope): TransportResult;
                    public open(param0: java.net.Proxy): java.net.HttpURLConnection;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class IConnectionConfigurator extends java.lang.Object {
                    public static class: java.lang.Class<IConnectionConfigurator>;
                    /**
                     * Constructs a new instance of the io.sentry.core.transport.IConnectionConfigurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { configure(param0: java.net.HttpURLConnection): void });
                    public constructor();
                    public configure(param0: java.net.HttpURLConnection): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class ITransport extends java.lang.Object implements java.io.Closeable {
                    public static class: java.lang.Class<ITransport>;
                    /**
                     * Constructs a new instance of the io.sentry.core.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        send(param0: SentryEvent): TransportResult;
                        isRetryAfter(param0: string): boolean;
                        send(param0: SentryEnvelope): TransportResult;
                        close(): void;
                        close(): void;
                    });
                    public constructor();
                    public send(param0: SentryEvent): TransportResult;
                    public isRetryAfter(param0: string): boolean;
                    public close(): void;
                    public send(param0: SentryEnvelope): TransportResult;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class ITransportGate extends java.lang.Object {
                    public static class: java.lang.Class<ITransportGate>;
                    /**
                     * Constructs a new instance of the io.sentry.core.transport.ITransportGate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { isSendingAllowed(): boolean });
                    public constructor();
                    public isSendingAllowed(): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class NoOpEnvelopeCache extends java.lang.Object implements cache.IEnvelopeCache {
                    public static class: java.lang.Class<NoOpEnvelopeCache>;
                    public store(param0: SentryEnvelope, param1: any): void;
                    public store(param0: SentryEnvelope): void;
                    public iterator(): java.util.Iterator<any>;
                    public discard(param0: SentryEnvelope): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public forEach(param0: any /* any*/): void;
                    public static getInstance(): NoOpEnvelopeCache;
                    public iterator(): java.util.Iterator<SentryEnvelope>;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class NoOpEventCache extends java.lang.Object implements cache.IEventCache {
                    public static class: java.lang.Class<NoOpEventCache>;
                    public static getInstance(): NoOpEventCache;
                    public iterator(): java.util.Iterator<SentryEvent>;
                    public discard(param0: SentryEvent): void;
                    public iterator(): java.util.Iterator<any>;
                    public store(param0: SentryEvent): void;
                    public spliterator(): java.util.Spliterator<any>;
                    public forEach(param0: any /* any*/): void;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class RetryingThreadPoolExecutor extends java.util.concurrent.ScheduledThreadPoolExecutor {
                    public static class: java.lang.Class<RetryingThreadPoolExecutor>;
                    public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
                    public invokeAny(param0: java.util.Collection<any>): any;
                    public constructor(param0: number, param1: java.util.concurrent.ThreadFactory, param2: java.util.concurrent.RejectedExecutionHandler);
                    public constructor(
                        param0: number,
                        param1: number,
                        param2: number,
                        param3: java.util.concurrent.TimeUnit,
                        param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
                        param5: java.util.concurrent.ThreadFactory,
                        param6: java.util.concurrent.RejectedExecutionHandler
                    );
                    public constructor(
                        param0: number,
                        param1: number,
                        param2: number,
                        param3: java.util.concurrent.TimeUnit,
                        param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
                        param5: java.util.concurrent.ThreadFactory
                    );
                    public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public isShutdown(): boolean;
                    public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public shutdown(): void;
                    public constructor();
                    public beforeExecute(param0: java.lang.Thread, param1: java.lang.Runnable): void;
                    public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
                    public constructor(param0: number, param1: java.util.concurrent.RejectedExecutionHandler);
                    public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
                    public constructor(param0: number);
                    public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
                    public isTerminated(): boolean;
                    public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
                    public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
                    public constructor(param0: number, param1: java.util.concurrent.ThreadFactory);
                    public shutdownNow(): java.util.List<java.lang.Runnable>;
                    public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler);
                    public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
                    public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
                    public constructor(
                        param0: number,
                        param1: number,
                        param2: number,
                        param3: java.util.concurrent.TimeUnit,
                        param4: java.util.concurrent.BlockingQueue<java.lang.Runnable>,
                        param5: java.util.concurrent.RejectedExecutionHandler
                    );
                    public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                    public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
                    public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
                }
                export namespace RetryingThreadPoolExecutor {
                    export class CancelledFuture<T> extends java.util.concurrent.Future<any> {
                        public static class: java.lang.Class<CancelledFuture<any>>;
                        public isDone(): boolean;
                        public isCancelled(): boolean;
                        public cancel(param0: boolean): boolean;
                        public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
                        public get(): any;
                    }
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export class StdoutTransport extends java.lang.Object implements ITransport {
                    public static class: java.lang.Class<StdoutTransport>;
                    public constructor(param0: ISerializer);
                    public send(param0: SentryEvent): TransportResult;
                    public isRetryAfter(param0: string): boolean;
                    public close(): void;
                    public send(param0: SentryEnvelope): TransportResult;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace transport {
                export abstract class TransportResult extends java.lang.Object {
                    public static class: java.lang.Class<TransportResult>;
                    public getResponseCode(): number;
                    public static error(param0: number): TransportResult;
                    public static success(): TransportResult;
                    public isSuccess(): boolean;
                }
                export namespace TransportResult {
                    export class ErrorTransportResult extends TransportResult {
                        public static class: java.lang.Class<ErrorTransportResult>;
                        public isSuccess(): boolean;
                        public getResponseCode(): number;
                    }
                    export class SuccessTransportResult extends TransportResult {
                        public static class: java.lang.Class<SuccessTransportResult>;
                        public isSuccess(): boolean;
                        public getResponseCode(): number;
                    }
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace util {
                export class ApplyScopeUtils extends java.lang.Object {
                    public static class: java.lang.Class<ApplyScopeUtils>;
                    public constructor();
                    public static shouldApplyScopeData(param0: any): boolean;
                }
            }
        }
    }
}

declare namespace io {
    export namespace sentry {
        export namespace core {
            export namespace util {
                export class Objects extends java.lang.Object {
                    public static class: java.lang.Class<Objects>;
                    public static requireNonNull(param0: any, param1: string): any;
                }
            }
        }
    }
}
