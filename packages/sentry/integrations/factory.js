/**
 * Creates an integration out of the provided name and setup function.
 * @hidden
 */
export function createIntegration(name, setupOnce = () => {
    /* noop */
}) {
    return {
        name,
        setupOnce,
    };
}
//# sourceMappingURL=factory.js.map