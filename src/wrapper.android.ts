import { createArrayBuffer, pointsFromBuffer } from '@nativescript-community/arraybuffers';
import { Application, Utils } from '@nativescript/core';
import { BaseEnvelopeItemHeaders, Breadcrumb, Envelope, EnvelopeItem, Event, SeverityLevel } from '@sentry/types';
import { SentryError } from '@sentry/utils';
import { parseErrorStack } from './integrations/debugsymbolicator';
import { isHardCrash } from './misc';
import { NativescriptOptions } from './options';
import { rewriteFrameIntegration } from './sdk';
import { utf8ToBytes } from './vendor';
import { SDK_NAME } from './version';

let encoder;
function strToTypedArray(str: string) {
    if (!encoder) {
        const charset = java.nio.charset.Charset.forName('UTF-8');
        encoder = charset.newEncoder();
    }
    return new Uint8Array((ArrayBuffer as any).from(encoder.encode(java.nio.CharBuffer.wrap(str))));
}

function concatTypedArrays(a, b) {
    if (!b || b.length === 0) return a;
    if (!a || a.length === 0) return b;
    const c = createArrayBuffer(a.length + b.length, true, false);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

export namespace NATIVE {
    let enableNative = true;
    const _DisabledNativeError = new SentryError('Native is disabled');
    let frameMetricsAggregator: androidx.core.app.FrameMetricsAggregator;

    export function isNativeTransportAvailable() {
        return enableNative;
    }

    const mJsModuleIdPattern = new RegExp('(?:^|[/\\\\])(\\d+\\.js)$');
    function stackFrameToModuleId(frame: { file?: string }) {
        if (!!frame.file) {
            const matcher = mJsModuleIdPattern.exec(frame.file);
            if (matcher) {
                return matcher[1] + ':';
            }
        }
        return '';
    }
    function convertToNativeJavascriptStacktrace(
        stack: {
            file?: string;
            filename?: string;
            function?: string;
            methodName?: string;
            column?: number;
            colno?: number;
            lineno?: number;
            lineNumber?: number;
            in_app?: boolean;
        }[]
    ) {
        if (!stack) {
            return null;
        }
        const nStackTrace = new io.sentry.protocol.SentryStackTrace();
        const frames = new java.util.ArrayList<io.sentry.protocol.SentryStackFrame>();
        for (let i = 0; i < stack.length; i++) {
            const frame = stack[i];

            const fileName = frame.file || frame.filename || '';
            const methodName = frame.methodName || frame.function || '';

            const lineNumber = frame.lineNumber || frame.lineno || 0;
            const column = frame.column || frame.colno || 0;
            const stackFrame = new io.sentry.protocol.SentryStackFrame();
            stackFrame.setFunction(methodName);
            stackFrame.setFilename(fileName);
            stackFrame.setLineno(new java.lang.Integer(lineNumber));
            stackFrame.setColno(new java.lang.Integer(column));
            stackFrame.setPlatform('javascript');
            stackFrame.setInApp(new java.lang.Boolean(frame.in_app || false));
            frames.add(stackFrame);
        }
        nStackTrace.setFrames(frames);
        return nStackTrace;
    }
    function addJavascriptExceptionInterface(nEvent: io.sentry.SentryEvent, type: string, value: string, stack) {
        const exceptions = nEvent.getExceptions();

        const actualExceptions = new java.util.ArrayList<io.sentry.protocol.SentryException>();
        const nException = new io.sentry.protocol.SentryException();
        nException.setType(type);
        nException.setValue(value);
        nException.setThreadId(new java.lang.Long(java.lang.Thread.currentThread().getId()));

        nException.setStacktrace(convertToNativeJavascriptStacktrace(stack));
        actualExceptions.add(nException);
        if (exceptions) {
            actualExceptions.addAll(1, exceptions);
        }
        nEvent.setExceptions(actualExceptions);
    }

    /**
   * Get breadcrumbs (removes breadcrumbs from handled exceptions on Android)
   *
   * We do this to avoid duplicate breadcrumbs on Android as sentry-android applies the breadcrumbs
   * from the native scope onto every envelope sent through it. This scope will contain the breadcrumbs
   * sent through the scope sync feature. This causes duplicate breadcrumbs.
   * We then remove the breadcrumbs in all cases but if it is handled == false,
   * this is a signal that the app would crash and android would lose the breadcrumbs by the time the app is restarted to read
   * the envelope.
   */
    function _getBreadcrumbs(event: Event): Breadcrumb[] | undefined {
        const breadcrumbs: Breadcrumb[] | undefined = event.breadcrumbs;

        const hardCrashed = isHardCrash(event);
        // if (event.breadcrumbs && !hardCrashed) {
        //     breadcrumbs = undefined;
        // }

        breadcrumbs && breadcrumbs.forEach(b=>{
            // fix for native SDK not supporting number
            b.timestamp = new Date(b.timestamp* 1000).toISOString() as any;
        });

        return breadcrumbs && breadcrumbs.length ? breadcrumbs : undefined;
    }

    /**
   * Convert js severity level in event.level and event.breadcrumbs to more widely supported levels.
   * @param event
   * @returns Event with more widely supported Severity level strings
   */

    function _processLevels(event: Event): Event {
        const processed: Event = {
            ...event,
            level: event.level ? _processLevel(event.level) : undefined,
            breadcrumbs: event.breadcrumbs?.map((breadcrumb) => ({
                ...breadcrumb,
                level: breadcrumb.level
                    ? _processLevel(breadcrumb.level)
                    : undefined,
            })),
        };

        return processed;
    }
    /**
   * Convert js severity level which has critical and log to more widely supported levels.
   * @param level
   * @returns More widely supported Severity level strings
   */

    function _processLevel(level: SeverityLevel): SeverityLevel {
        if (level === 'log' as SeverityLevel) {
            return 'debug' as SeverityLevel;
        }
        else if (level === 'critical' as SeverityLevel) {
            return 'fatal' as SeverityLevel;
        }
        return level;
    }
    /**
   * Gets the event from envelopeItem and applies the level filter to the selected event.
   * @param data An envelope item containing the event.
   * @returns The event from envelopeItem or undefined.
   */
    function _processItem(item: EnvelopeItem): EnvelopeItem {
        const [itemHeader, itemPayload] = item;

        if (itemHeader.type === 'event' || itemHeader.type === 'transaction') {
            const event = _processLevels(itemPayload as Event);

            // fix for native SDK
            event.timestamp = new Date(event.timestamp* 1000).toISOString() as any;
            if ('message' in event) {
                // @ts-ignore Android still uses the old message object, without this the serialization of events will break.
                event.message = { message: event.message };
            }
            event.breadcrumbs = _getBreadcrumbs(event);

            return [itemHeader, event];
        }

        return item;
    }
    export async function sendEnvelope(envelope: Envelope): Promise<void> {
        if (!enableNative) {
            console.warn('Event was skipped as native SDK is not enabled.');
            return;
        }
        const envelopeBytes = prepareEnvelopeNative(envelope);
        // const envelopeBytesNative = prepareEnvelopeNative(envelope);
        await captureEnvelope(envelopeBytes);
        if (sentryOptions.flushSendEvent) {
            flush(0);
        }
    }
    export function prepareEnvelope(envelope: Envelope) {
        const [EOL] = utf8ToBytes('\n');

        const [envelopeHeader, envelopeItems] = envelope;

        const headerString = JSON.stringify(envelopeHeader);
        const envelopeBytes: number[] = utf8ToBytes(headerString);
        envelopeBytes.push(EOL);

        let hardCrashed: boolean = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);

            let bytesPayload: number[] = [];
            if (typeof itemPayload === 'string') {
                bytesPayload = utf8ToBytes(itemPayload);
            } else if (itemPayload instanceof Uint8Array) {
                bytesPayload = [...itemPayload];
            } else if (itemPayload instanceof ArrayBuffer) {
                bytesPayload = [...new Uint8Array(itemPayload)];
            } else {
                bytesPayload = utf8ToBytes(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }

            // Content type is not inside BaseEnvelopeItemHeaders.
            (itemHeader as BaseEnvelopeItemHeaders).content_type = 'application/json';
            (itemHeader as BaseEnvelopeItemHeaders).length = bytesPayload.length;
            const serializedItemHeader = JSON.stringify(itemHeader) + '\n';

            envelopeBytes.push(...utf8ToBytes(serializedItemHeader));
            // envelopeBytes.push(EOL);
            envelopeBytes.push(...bytesPayload);
            envelopeBytes.push(EOL);
        }
        return envelopeBytes;
    }

    export function prepareEnvelopeNative(envelope: Envelope) {
        const [envelopeHeader, envelopeItems] = envelope;

        const headerString = JSON.stringify(envelopeHeader);
        let envelopeBytes = strToTypedArray(headerString + '\n');

        let hardCrashed: boolean = false;
        for (const rawItem of envelopeItems) {
            const [itemHeader, itemPayload] = _processItem(rawItem);

            let bytesPayload;
            if (typeof itemPayload === 'string') {
                bytesPayload = strToTypedArray(itemPayload);
            } else if (itemPayload instanceof Uint8Array) {
                bytesPayload = itemPayload;
            } else {
                bytesPayload = strToTypedArray(JSON.stringify(itemPayload));
                if (!hardCrashed) {
                    hardCrashed = isHardCrash(itemPayload);
                }
            }

            // Content type is not inside BaseEnvelopeItemHeaders.
            (itemHeader as BaseEnvelopeItemHeaders).content_type = 'application/json';
            (itemHeader as BaseEnvelopeItemHeaders).length = bytesPayload.length;
            const serializedItemHeaderBytes = strToTypedArray(JSON.stringify(itemHeader) + '\n');

            const rawItemBytes = createArrayBuffer(serializedItemHeaderBytes.length + bytesPayload.length + 1, true, false);
            rawItemBytes.set(serializedItemHeaderBytes, 0);
            rawItemBytes.set(bytesPayload, serializedItemHeaderBytes.length);
            rawItemBytes[serializedItemHeaderBytes.length + bytesPayload.length] = '\n'.charCodeAt(0);

            envelopeBytes = concatTypedArrays(envelopeBytes, rawItemBytes);
        }
        return envelopeBytes;
    }


    // export async function sendEvent(event: Event): Promise<Response> {
    //     try {
    //         // Process and convert deprecated levels
    //         const nEvent = new io.sentry.SentryEvent();
    //         if (event.event_id) {
    //             nEvent.setEventId(new io.sentry.protocol.SentryId(event.event_id));
    //         }

    //         if (event.breadcrumbs) {
    //             const breadcrumbs = event.breadcrumbs;
    //             const eventBreadcrumbs = new java.util.ArrayList<io.sentry.Breadcrumb>();
    //             for (let i = 0; i < breadcrumbs.length; i++) {
    //                 const breadcrumb = breadcrumbs[i];
    //                 const nBreadcumb = new io.sentry.Breadcrumb();
    //                 if (breadcrumb.category) {
    //                     nBreadcumb.setCategory(breadcrumb.category);
    //                 }

    //                 if (breadcrumb.type) {
    //                     const typeString = breadcrumb.type.toUpperCase();
    //                     try {
    //                         nBreadcumb.setType(typeString);
    //                     } catch (e) {
    //                         // don't copy over invalid breadcrumb 'type' value
    //                     }
    //                 }

    //                 if (breadcrumb.level) {
    //                     nBreadcumb.setLevel(eventLevel(breadcrumb.level));
    //                 }

    //                 try {
    //                     if (breadcrumb.data) {
    //                         Object.keys(breadcrumb.data).forEach((k) => {
    //                             let value = breadcrumb.data[k];
    //                             // in case a `status_code` entry got accidentally stringified as a float
    //                             if (k === 'status_code' && typeof value === 'string' && value.endsWith('.0')) {
    //                                 value = value.replace('.0', '');
    //                             } else if (typeof value === 'boolean') {
    //                                 value = new java.lang.Boolean(value);
    //                             } else if (typeof value === 'number') {
    //                                 value = value.toString();
    //                             } else if (Array.isArray(value)) {
    //                                 value = new org.json.JSONArray(JSON.stringify(value));
    //                             } else if (value && typeof value === 'object') {
    //                                 value = new org.json.JSONObject(JSON.stringify(value));
    //                             }

    //                             nBreadcumb.setData(k, value);
    //                         });
    //                     }
    //                 } catch (e) {
    //                     console.warn('Discarded breadcrumb.data since it was not an object');
    //                 }

    //                 if (breadcrumb.message) {
    //                     nBreadcumb.setMessage(breadcrumb.message);
    //                 } else {
    //                     nBreadcumb.setMessage('');
    //                 }
    //                 eventBreadcrumbs.add(i, nBreadcumb);
    //             }
    //             if (eventBreadcrumbs.size() > 0) {
    //                 nEvent.setBreadcrumbs(eventBreadcrumbs);
    //             }
    //         }

    //         if (event.message) {
    //             const nMsg = new io.sentry.protocol.Message();
    //             nMsg.setMessage(event.message || '');
    //             nEvent.setMessage(nMsg);
    //         }

    //         if (event.logger) {
    //             nEvent.setLogger(event.logger);
    //         }

    //         if (event.user) {
    //             nEvent.setUser(getUser(event.user));
    //         }

    //         if (event.extra) {
    //             Object.keys(event.extra).forEach((k) => {
    //                 const value = event.extra[k];
    //                 nEvent.setExtra(k, typeof value === 'string' ? value : JSON.stringify(value));
    //             });
    //         }

    //         if (event.fingerprint) {
    //             const fingerprint: string[] = event.fingerprint;
    //             const print = new java.util.ArrayList();
    //             for (let i = 0; i < fingerprint.length; ++i) {
    //                 print.add(fingerprint[i]);
    //             }
    //             nEvent.setFingerprints(print);
    //         }

    //         if (event.tags) {
    //             Object.keys(event.tags).forEach((k) => {
    //                 const value = event.tags[k];
    //                 nEvent.setTag(k, (value || 'INVALID_TAG').toString());
    //             });
    //         }

    //         if (event.exception) {
    //             const exceptionValues: any[] = event.exception.values;
    //             const exception = exceptionValues[0];
    //             if (exception.stacktrace) {
    //                 const stacktrace = exception.stacktrace;
    //                 const frames = stacktrace.frames;
    //                 if (exception.value) {
    //                     addExceptionInterface(nEvent, exception.type, exception.value, frames);
    //                 } else {
    //                     // We use type/type here since this indicates an Unhandled Promise Rejection
    //                     // https://github.com/getsentry/react-native-sentry/issues/353
    //                     addExceptionInterface(nEvent, exception.type, exception.type, frames);
    //                 }
    //             }
    //         }
    //         if (event.environment) {
    //             nEvent.setEnvironment(event.environment);
    //         }

    //         if (event.platform) {
    //             nEvent.setPlatform(event.platform);
    //         }

    //         if (event.release) {
    //             nEvent.setRelease(event.release);
    //         }

    //         if (event.dist) {
    //             nEvent.setDist(event.dist);
    //         }
    //         if (event.level) {
    //             nEvent.setLevel(eventLevel(event.level));
    //         }
    //         if (event.contexts) {
    //             Object.keys(event.contexts).forEach((k) => {
    //                 // const value = event.contexts[k];
    //                 // const context = new io.sentry.protocol.Contexts();
    //                 // nEvent.setTag(k, value || 'INVALID_TAG');
    //             });
    //         }
    //         if (event.sdk) {
    //             const sdk = event.sdk;
    //             const nSdk = new io.sentry.protocol.SdkVersion();
    //             nSdk.setName(sdk.name);
    //             nSdk.setVersion(sdk.version);
    //             if (sdk.integrations) {
    //                 const integrations: string[] = sdk.integrations;
    //                 for (let i = 0; i < integrations.length; ++i) {
    //                     nSdk.addIntegration(integrations[i]);
    //                 }
    //             }
    //             nEvent.setSdk(nSdk);
    //         }
    //         const id = io.sentry.Sentry.captureEvent(nEvent);
    //         flush(0);
    //         return({ status: 'success', id } as any);
    //     }catch(err) {
    //         console.error('error sending sentry event', err, err.stack);
    //         throw(err);
    //     };
    // }

    export async function captureEnvelope(envelope: string | Uint8Array | number[], {store}: {store?: boolean} = {}) {
        try {
            const outboxPath = new java.io.File(nSentryOptions.getOutboxPath(), java.util.UUID.randomUUID().toString());
            const out = new java.io.FileOutputStream(outboxPath);
            if (ArrayBuffer.isView(envelope)) {
                out.write(pointsFromBuffer(envelope, true, false));
            } else if (Array.isArray(envelope)) {
                out.write(envelope);
            } else {
                out.write(new java.lang.String(envelope).getBytes(java.nio.charset.Charset.forName('UTF-8')));
            }
            return true;
        } catch(err) {
            console.error('captureEnvelope error', err, err.stack);
            return false;
        }
    }

    export function flush(timeout: number = 0) {
        console.log('flush', timeout);
        io.sentry.Sentry.flush(timeout);
    }
    let initialized = false;
    let sentryOptions: NativescriptOptions ;
    let nSentryOptions: io.sentry.SentryOptions ;

    function addPackages( event: io.sentry.SentryEvent,  sdk: io.sentry.protocol.SdkVersion) {
        const eventSdk = event.getSdk();
        if (eventSdk && sdk && eventSdk.getName() === SDK_NAME) {
            const sentryPackages = sdk.getPackages();
            if (sentryPackages != null) {
                for (let index = 0; index < sentryPackages.size(); index++) {
                    const sentryPackage = sentryPackages.get(index);
                    eventSdk.addPackage(sentryPackage.getName(), sentryPackage.getVersion());

                }
            }
            const integrations = sdk.getIntegrations();
            if (integrations != null) {
                for (let index = 0; index < integrations.size(); index++) {
                    eventSdk.addIntegration(integrations.get(index));
                }
            }
            event.setSdk(eventSdk);
        }
    }
    export async function initNativeSdk(originalOptions: NativescriptOptions = {}): Promise<boolean> {
        if (initialized) {
            return (true);
        }

        try {
            const options = {
                enableNative: true,
                autoInitializeNativeSdk: true,
                ...originalOptions,
            };
            if (!options.enableNative) {
                if (options.enableNativeNagger) {
                    console.warn('Note: Native Sentry SDK is disabled.');
                }
                enableNative = false;
                return false;
            }
            if (!options.autoInitializeNativeSdk) {
                if (options.enableNativeNagger) {
                    console.warn(
                        'Note: Native Sentry SDK was not initialized automatically, you will need to initialize it manually. If you wish to disable the native SDK and get rid of this warning, pass enableNative: false'
                    );
                }
                return false;
            }

            if (!options.dsn) {
                console.warn(
                    'Warning: No DSN was provided. The Sentry SDK will be disabled. Native SDK will also not be initalized.'
                );
                return false;
            }
            io.sentry.android.core.SentryAndroid.init(
                Utils.android.getApplicationContext(),
                new io.sentry.Sentry.OptionsConfiguration({
                    configure(config: io.sentry.SentryOptions) {
                        // config.setLogger(new io.sentry.SystemOutLogger());
                        try {
                            if (options.dsn) {
                                config.setDsn(options.dsn);
                            } else {
                                config.setDsn('');
                            }

                            if (options.sendClientReports) {
                                // config.setSendClientReports(options.sendClientReports);
                            }

                            if (options.maxBreadcrumbs) {
                                config.setMaxBreadcrumbs(options.maxBreadcrumbs);
                            }

                            if (options.maxCacheItems) {
                                config.setMaxCacheItems(options.maxCacheItems);
                            }

                            if (!!options.environment) {
                                config.setEnvironment(options.environment);
                            } else {
                                config.setEnvironment('javascript');
                            }
                            if (!!options.debug) {
                                io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
                                config.setDebug(options.debug);
                            }
                            if (!!options.release) {
                                config.setRelease(options.release);
                            }
                            if (!!options.dist) {
                                config.setDist(options.dist);
                            }
                            if (options.enableAutoSessionTracking !== undefined) {
                                config.setEnableAutoSessionTracking(options.enableAutoSessionTracking);
                            }
                            if (options.sessionTrackingIntervalMillis !== undefined) {
                                config.setSessionTrackingIntervalMillis(options.sessionTrackingIntervalMillis);
                            }
                            if (options.shutdownTimeout !== undefined) {
                                config.setShutdownTimeoutMillis(options.shutdownTimeout);
                            }
                            if (options.enableNdkScopeSync !== undefined) {
                                config.setEnableScopeSync(options.enableNdkScopeSync);
                            }
                            if (options.attachStacktrace !== undefined) {
                                config.setAttachStacktrace(options.attachStacktrace);
                            }
                            if (options.attachThreads !== undefined) {
                                // JS use top level stacktraces and android attaches Threads which hides them so
                                // by default we hide.
                                config.setAttachThreads(options.attachThreads);
                            }
                            if (options.sendDefaultPii !== undefined) {
                                config.setSendDefaultPii(options.sendDefaultPii);
                            }

                            // if (options.enableAutoPerformanceTracking === true) {

                            //     frameMetricsAggregator = new androidx.core.app.FrameMetricsAggregator();
                            //     const currentActivity = Application.android.foregroundActivity;

                            //     if (frameMetricsAggregator != null && currentActivity != null) {
                            //         try {
                            //             frameMetricsAggregator.add(currentActivity);
                            //         } catch (err) {
                            //             // throws ConcurrentModification when calling addOnFrameMetricsAvailableListener
                            //             // this is a best effort since we can't reproduce it
                            //         }
                            //     }

                            // } else {
                            //     disableNativeFramesTracking();
                            // }

                            // config.setEnableNdk(true);
                            if (options.enableNativeCrashHandling === false) {
                                const integrations = config.getIntegrations();
                                const size = integrations.size();
                                for (let index = size - 1; index >= 0; index--) {
                                    const inte = integrations.get(index);
                                    if (
                                        inte instanceof io.sentry.UncaughtExceptionHandlerIntegration ||
                                        inte instanceof io.sentry.android.core.AnrIntegration ||
                                        inte instanceof io.sentry.android.core.NdkIntegration
                                    ) {
                                        integrations.remove(index);
                                    }
                                }
                            }

                            config.setTransportFactory(new io.sentry.ITransportFactory({
                                create( sopt: io.sentry.SentryOptions,  requestDetails: io.sentry.RequestDetails) {
                                    const map =requestDetails.getHeaders();
                                    map.put('X-Forwarded-Protocol', 'https');
                                    if (options.headers) {
                                        Object.keys(options.headers).forEach(k=>{
                                            map.put(k, options.headers[k]);
                                        });
                                    }
                                    return new io.sentry.transport.AsyncHttpTransport(
                                        sopt, new io.sentry.transport.RateLimiter(sopt), sopt.getTransportGate(), requestDetails);
                                }
                            }));
                            config.setBeforeSend(
                                new io.sentry.SentryOptions.BeforeSendCallback({
                                    execute(event, hint) {
                                        if (options.beforeSend) {
                                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                                            options.beforeSend(event as any, hint as any);
                                        }

                                        // we use this callback to actually try and get the JS stack when a native error is catched
                                        try {
                                            const ex: io.sentry.protocol.SentryException = event.getExceptions().get(0);
                                            console.log('beforeSend', ex, ex.getStacktrace(), ex.getMechanism());
                                            if (ex && ex.getType() === 'NativeScriptException') {
                                                let mechanism = event.getThrowable && event.getThrowable();
                                                if (!mechanism) {
                                                    const privateMethod = io.sentry.SentryEvent.class.getDeclaredMethod('getThrowable', null);
                                                    privateMethod.setAccessible(true);
                                                    mechanism = privateMethod.invoke(event, null);
                                                }
                                                let throwable;
                                                if (mechanism instanceof io.sentry.exception.ExceptionMechanismException) {
                                                    throwable = mechanism.getThrowable();
                                                } else if (mechanism instanceof (com as any).tns.NativeScriptException) {
                                                    throwable = mechanism;
                                                }
                                                if (throwable ) {
                                                    const jsStackTrace: string = (throwable ).getIncomingStackTrace();
                                                    if (jsStackTrace) {

                                                        console.log('jsStackTrace', jsStackTrace);
                                                        const stack = parseErrorStack({ stack: 'at ' + jsStackTrace } as any).reverse();
                                                        console.log('stack', stack);
                                                        stack.forEach((frame) => rewriteFrameIntegration._iteratee(frame));
                                                        addJavascriptExceptionInterface(event, 'Error', throwable.getMessage(), stack.reverse());
                                                    }
                                                }
                                            }
                                        } catch (e) {}
                                        setEventOriginTag(event);
                                        addPackages(event, config.getSdkVersion());
                                        return event;
                                    },
                                })
                            );
                            nSentryOptions = config;
                            sentryOptions = options;
                        } catch(err) {
                            console.error('Error starting Sentry', err);
                            throw err;
                        }

                    },
                })
            );
            initialized = true;
        } catch (e) {
            console.error('Catching on startWithOptions, calling callback', e);
            throw (e);
        }

        return (true);
    }
    export function disableNativeFramesTracking() {
        if (frameMetricsAggregator) {
            frameMetricsAggregator.stop();
            frameMetricsAggregator = null;
        }
    }

    function setEventOriginTag( event: io.sentry.SentryEvent) {
        const sdk = event.getSdk();
        if (sdk) {
            switch (sdk.getName()) {
                // If the event is from capacitor js, it gets set there and we do not handle it
                // here.
                case 'sentry.native':
                    setEventEnvironmentTag(event, 'native');
                    break;
                case 'sentry.java.android':
                    setEventEnvironmentTag(event, 'java');
                    break;
                default:
                    setEventEnvironmentTag(event, 'nativescript');
                    break;
            }
        }
    }
    function setEventEnvironmentTag(event: io.sentry.SentryEvent,  environment: string) {
        event.setTag('event.origin', 'android');
        event.setTag('event.environment', environment);
    }

    export function enableNativeFramesTracking() {
        if (!frameMetricsAggregator) {
            frameMetricsAggregator = new androidx.core.app.FrameMetricsAggregator();
            const currentActivity = Application.android.foregroundActivity;

            if (frameMetricsAggregator != null && currentActivity != null) {
                try {
                    frameMetricsAggregator.add(currentActivity);
                } catch (err) {
                    // throws ConcurrentModification when calling addOnFrameMetricsAvailableListener
                    // this is a best effort since we can't reproduce it
                }
            }
        }

    }
    // export function setLogLevel(level: number) {
    //     switch (level) {
    //         case 1:
    //             io.sentry.Sentry.setLevel(null);
    //             break;
    //         case 2:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.ERROR);
    //             break;
    //         case 3:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.DEBUG);
    //             break;
    //         case 4:
    //             io.sentry.Sentry.setLevel(io.sentry.SentryLevel.INFO);
    //             break;
    //     }
    // }

    export function fetchNativeSdkInfo () {
        return null;
    }

    let nativeRelease;
    export function fetchNativeRelease () {
        if (!enableNative) {
            throw _DisabledNativeError;
        }
        if (!nativeRelease) {
            const context = Utils.ad.getApplicationContext();
            const packageInfo = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
            nativeRelease =  {
                'id': packageInfo.packageName,
                'version': packageInfo.versionName,
                'build': packageInfo.versionCode + ''
            };
        }
        return nativeRelease;

    }

    export function closeNativeSdk () {
        io.sentry.Sentry.close();
    }

    export function nativeCrash() {
        throw new java.lang.RuntimeException('TEST - Sentry Client Crash');
    }
    export async function fetchNativeDeviceContexts() {
        return {};
        // return new Promise((resolve) => {
        //     const nEvent = new io.sentry.SentryEvent();

        //     const params = {};
        //     const it = nEvent.getContexts().entrySet().iterator();
        //     let value, pair, key;
        //     while (it.hasNext()) {
        //         pair = it.next();
        //         value = pair.getValue();
        //         key = pair.getKey();
        //         params[key] = getJSHashMap(value);
        //     }
        //     resolve(params);
        // });
    }

    // export function captureUserFeedback(feedback: UserFeedback) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     const userFeedback = new io.sentry.UserFeedback(new io.sentry.protocol.SentryId(feedback.eventId));
    //     if (feedback.comments) {
    //         userFeedback.setComments(feedback.comments);
    //     }
    //     if (feedback.email) {
    //         userFeedback.setEmail(feedback.email);
    //     }
    //     if (feedback.name) {
    //         userFeedback.setName(feedback.name);
    //     }
    //     io.sentry.Sentry.captureUserFeedback(userFeedback);
    // }


    // export function setUser(user: User | null, otherUserKeys) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             if (user == null && otherUserKeys == null) {
    //                 scope.setUser(null);
    //             } else {
    //                 const userInstance = new io.sentry.protocol.User();

    //                 if (user) {
    //                     if (user.email) {
    //                         userInstance.setEmail(user.email);
    //                     }

    //                     if (user.id) {
    //                         userInstance.setId(user.id);
    //                     }

    //                     if (user.username) {
    //                         userInstance.setUsername(user.username);
    //                     }

    //                     if (user.ip_address) {
    //                         userInstance.setIpAddress(user.ip_address);
    //                     }
    //                 }

    //                 if (otherUserKeys ) {
    //                     userInstance.setOthers(getNativeHashMap(otherUserKeys));
    //                 }
    //                 scope.setUser(userInstance);
    //             }
    //         }
    //     }));

    // }
    // export function setTag(key: string, value: string) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             scope.setTag(key, value);
    //         }
    //     }));
    // }

    // export function setExtra(key: string, extra: string) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             scope.setExtra(key, extra);
    //         }
    //     }));
    // }

    // export function withScope(callback: (scope: Scope) => void) {
    //     io.sentry.Sentry.withScope(new io.sentry.ScopeCallback({
    //         run(nscope) {
    //             // nscope is ignored
    //             console.log('native withScope', nscope);
    //             callback(nscope as any);
    //         }
    //     }));
    // }

    // export function addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             try {
    //                 console.log('addBreadcrumb', breadcrumb, scope);

    //                 const breadcrumbInstance = new io.sentry.Breadcrumb();

    //                 if (breadcrumb.message) {
    //                     breadcrumbInstance.setMessage(breadcrumb.message);
    //                 }

    //                 if (breadcrumb.type) {
    //                     breadcrumbInstance.setType(breadcrumb.type);
    //                 }

    //                 if (breadcrumb.category) {
    //                     breadcrumbInstance.setCategory(breadcrumb.category);
    //                 }

    //                 if (breadcrumb.level) {
    //                     breadcrumbInstance.setLevel(eventLevel(breadcrumb.level));
    //                 }

    //                 if (breadcrumb.data) {
    //                     Object.keys(breadcrumb.data).forEach(key => {
    //                         breadcrumbInstance.setData(key, breadcrumb.data[key]);
    //                     });
    //                 }

    //                 scope.addBreadcrumb(breadcrumbInstance);
    //             } catch (error) {
    //                 console.error('addBreadcrumb', error, error.stack);

    //             }
    //         }
    //     }));
    // }
    // export function  addAttachment(attachment: Attachment) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             console.log('addAttachment', attachment, scope);
    //             try {
    //                 if (attachment.data) {
    //                     if (typeof attachment.data === 'string') {
    //                         attachment.data = new TextEncoder().encode(attachment.data);
    //                     }
    //                     const bytes = pointsFromBuffer(attachment.data, true, false);
    //                     console.log('addAttachment', typeof attachment.data, attachment.data.length, bytes, bytes.length);
    //                     scope.addAttachment(new io.sentry.Attachment(bytes,  attachment.filename));
    //                 } else {
    //                     scope.addAttachment(new io.sentry.Attachment(attachment.filename));
    //                 }
    //             } catch (error) {
    //                 console.error('addAttachment', error, error.stack);
    //             }
    //         }
    //     }));
    // }
    // export function clearBreadcrumbs() {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             scope.clearBreadcrumbs();
    //         }
    //     }));
    // }
    // export function setContext(key: string, context: { [key: string]: any } | null) {
    //     if (!enableNative) {
    //         return;
    //     }
    //     io.sentry.Sentry.configureScope(new io.sentry.ScopeCallback({
    //         run(scope) {
    //             scope.setContexts(key, getNativeHashMap(context));
    //         }
    //     }));
    // }

    function isFrameMetricsAggregatorAvailable() {
        return frameMetricsAggregator != null;
    }

    // 700ms to constitute frozen frames.
    const FROZEN_FRAME_THRESHOLD = 700;
    // 16ms (slower than 60fps) to constitute slow frames.
    const SLOW_FRAME_THRESHOLD = 16;
    export async function fetchNativeFrames() {
        if (!isFrameMetricsAggregatorAvailable()) {
            return null;
        } else {
            try {
                let totalFrames = 0;
                let slowFrames = 0;
                let frozenFrames = 0;

                const framesRates = frameMetricsAggregator.getMetrics();

                if (framesRates != null) {
                    const totalIndexArray = framesRates[androidx.core.app.FrameMetricsAggregator.TOTAL_INDEX];
                    if (totalIndexArray != null) {
                        for (let i = 0; i < totalIndexArray.size(); i++) {
                            const frameTime = totalIndexArray.keyAt(i);
                            const numFrames = totalIndexArray.valueAt(i);
                            totalFrames += numFrames;
                            // hard coded values, its also in the official android docs and frame metrics
                            // API
                            if (frameTime > FROZEN_FRAME_THRESHOLD) {
                                // frozen frames, threshold is 700ms
                                frozenFrames += numFrames;
                            } else if (frameTime > SLOW_FRAME_THRESHOLD) {
                                // slow frames, above 16ms, 60 frames/second
                                slowFrames += numFrames;
                            }
                        }
                    }
                }

                if (totalFrames === 0 && slowFrames === 0 && frozenFrames === 0) {
                    return null;
                }

                return {
                    totalFrames,
                    slowFrames,
                    frozenFrames
                };
            } catch (err) {
                console.warn('Error fetching native frames.', err);
            }
            return null;
        }
    }
    let didFetchAppStart = false;
    export async function fetchNativeAppStart() {
        const appStartInstance = io.sentry.android.core.AppStartState.getInstance();
        const appStartTime = appStartInstance.getAppStartTime();
        const isColdStart = appStartInstance.isColdStart();

        const wasFetched  =didFetchAppStart;
        // This is always set to true, as we would only allow an app start fetch to only
        // happen once in the case of a JS bundle reload, we do not want it to be
        // instrumented again.
        didFetchAppStart = true;
        if (appStartTime == null) {
            console.warn("App start won't be sent due to missing appStartTime.");
            return null;
        } else if (isColdStart == null) {
            console.warn("App start won't be sent due to missing isColdStart.");
            return null;
        } else {

            return {
                appStartTime: appStartTime.getTime(),
                isColdStart,
                didFetchAppStart: wasFetched
            };

        }
    }
}
