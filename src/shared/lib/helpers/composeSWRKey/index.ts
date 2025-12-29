import type { SWRKey } from 'shared/types/api/swrKey';

export const composeSWRKey = <Filters = object>(
    key: string,
    filters?: Filters,
): SWRKey<Filters> => {
    return {
        key,
        filters,
    };
};
