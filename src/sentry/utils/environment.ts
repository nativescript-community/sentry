/** Returns default environment based on __DEV__ */
export function getDefaultEnvironment(): 'development' | 'production' {
    return typeof __DEV__ !== 'undefined' && __DEV__ ? 'development' : 'production';
}
