import { NATIVE } from '../wrapper';
/** Adds screenshots to error events */
export class Screenshot {
    constructor() {
        /**
       * @inheritDoc
       */
        this.name = Screenshot.id;
    }
    /**
   * If enabled attaches a screenshot to the event hint.
   */
    static attachScreenshotToEventHint(hint, { attachScreenshot }) {
        if (!attachScreenshot) {
            return (hint);
        }
        const screenshots = NATIVE.captureScreenshot();
        if (screenshots !== null && screenshots.length > 0) {
            hint.attachments = [
                ...screenshots,
                ...(hint?.attachments || []),
            ];
        }
        return hint;
    }
    /**
   * @inheritDoc
   */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupOnce() { }
}
/**
* @inheritDoc
*/
Screenshot.id = 'Screenshot';
//# sourceMappingURL=screenshot.js.map