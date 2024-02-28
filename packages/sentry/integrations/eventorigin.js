/** Default EventOrigin instrumentation */
export class EventOrigin {
    constructor() {
        /**
       * @inheritDoc
       */
        this.name = EventOrigin.id;
    }
    /**
   * @inheritDoc
   */
    setupOnce(addGlobalEventProcessor) {
        addGlobalEventProcessor((event) => {
            event.tags = event.tags ?? {};
            event.tags['event.origin'] = __ANDROID__ ? 'android' : __IOS__ ? 'ios' : 'javascript';
            event.tags['event.environment'] = 'nativescript';
            return event;
        });
    }
}
/**
* @inheritDoc
*/
EventOrigin.id = 'EventOrigin';
//# sourceMappingURL=eventorigin.js.map