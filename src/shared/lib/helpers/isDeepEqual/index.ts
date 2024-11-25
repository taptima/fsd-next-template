// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (value: Record<string, any>) => {
    return typeof value === 'object' && value !== null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDeepEqual = (a: Record<string, any>, b: Record<string, any>): boolean => {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keysA) {
        const valueA = a[key];
        const valueB = b[key];
        const isObjects = isObject(valueA) && isObject(valueB);

        if ((isObjects && !isDeepEqual(valueA, valueB)) || (!isObjects && valueA !== valueB)) {
            return false;
        }
    }

    return true;
};
