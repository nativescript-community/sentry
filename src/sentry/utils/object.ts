export function splitObject<T extends object, K extends (keyof T)[]>(obj: T | null, keys: K): [Pick<T, K[number]> | null, Omit<T, K[number]> | null] {
    if (!obj) {
        return [null, null];
    }
    const picked = {} as Pick<T, K[number]>;
    const omitted = { ...obj } as Omit<T, K[number]>;

    keys.forEach((key) => {
        if (key in obj) {
            picked[key] = obj[key];
            delete omitted[key as any];
        }
    });

    return [Object.keys(picked).length > 0 ? picked : null, Object.keys(omitted).length > 0 ? omitted : null];
}
