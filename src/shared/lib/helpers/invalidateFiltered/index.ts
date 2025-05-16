import { mutate } from 'swr';
import type { SWRKey } from 'shared/types/api/swrKey';

const PAGINATION_FILTERS = ['pageNumber', 'pageSize'];

/**
 * @description invalidates filtered data, excluding pagination filters
 */
export async function invalidateFiltered(key: string) {
    return mutate(
        (args) => {
            if (args && typeof args === 'object' && 'key' in args && args.key === key) {
                const { filters = {} } = args as SWRKey;
                const isFiltered =
                    Object.entries(filters).filter(([entryKey, value]) => {
                        if (PAGINATION_FILTERS.includes(entryKey)) {
                            return false;
                        }

                        return value !== undefined;
                    }).length > 0;

                return isFiltered;
            }

            return false;
        },
        undefined,
        {
            revalidate: false,
        },
    );
}
