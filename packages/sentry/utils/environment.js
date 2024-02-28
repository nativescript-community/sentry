/** Returns default environment based on __DEV__ */
export function getDefaultEnvironment() {
    return typeof __DEV__ !== 'undefined' && __DEV__ ? 'development' : 'production';
}
//# sourceMappingURL=environment.js.map