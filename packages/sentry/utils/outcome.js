/**
 * Merges buffer with new outcomes.
 */
export function mergeOutcomes(...merge) {
    const map = new Map();
    const process = (outcome) => {
        const key = `${outcome.reason}:${outcome.category}`;
        const existing = map.get(key);
        if (existing) {
            existing.quantity += outcome.quantity;
        }
        else {
            map.set(key, outcome);
        }
    };
    merge.forEach((outcomes) => outcomes.forEach(process));
    return [...map.values()];
}
//# sourceMappingURL=outcome.js.map