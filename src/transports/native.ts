import { Event, Response, Transport } from '@sentry/types';
import { PromiseBuffer, SentryError } from '@sentry/utils';
import { NSSentry } from '../nssentry';

/** Native Transport class implementation */
export class NativeTransport implements Transport {
    /** A simple buffer holding all requests. */
    protected readonly _buffer: PromiseBuffer<Response> = new PromiseBuffer(30);

    /**
     * @inheritDoc
     */
    public sendEvent(event: Event): Promise<Response> {
        if (!this._buffer.isReady()) {
            return Promise.reject(new SentryError('Not adding Promise due to buffer limit reached.'));
        }
        return this._buffer.add(NSSentry.sendEvent(event)) as any;
    }

    /**
     * @inheritDoc
     */
    public close(timeout?: number): Promise<boolean> {
        return this._buffer.drain(timeout) as any;
    }
}
