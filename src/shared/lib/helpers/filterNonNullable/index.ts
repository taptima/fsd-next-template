export function filterNonNullable<T>(value: T[]): NonNullable<T>[] {
    return value.filter((item): item is NonNullable<T> => item !== null && item !== undefined);
}
