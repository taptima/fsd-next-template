import useSWR from 'swr';
import type { ItemFilter } from 'entities/Example/api/types/filter';
import { composeSWRKey } from 'shared/lib/helpers/composeSWRKey';
import { usePageId } from 'shared/lib/hooks/usePageId';
import { fetchItem } from 'entities/Example/api/request/fetchItem';
import { ITEM_KEY } from './keys';

export const useItem = () => {
    const id = usePageId();

    return useSWR(
        composeSWRKey<ItemFilter>(ITEM_KEY, { id }),
        async ({ filters }) => {
            const response = fetchItem(filters);

            return response;
        },
        {
            keepPreviousData: true,
            shouldRetryOnError: false,
        },
    );
};
