import { mutate } from 'swr';

/**
 * Clears cache entries and revalidates the last query
 */
export async function invalidateWithKey(key: string) {
    return mutate((args) => {
        if (args && typeof args === 'object' && 'key' in args) {
            if (Array.isArray(args.key)) {
                return args.key.includes(key);
            }

            return args.key === key;
        }

        return false;
    }, undefined);
}
