import useSWR from 'swr';
import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { composeSWRKey } from 'shared/lib/helpers/composeSWRKey';
import { fetchCatalog } from 'entities/Example/api/request/fetchCatalog';
import { CATALOG_KEY } from './keys';

export const useCatalog = () => {
    // const category = useStore.use.category();
    // const page = useStore.use.page();
    // const pageSize = useStore.use.pageSize();

    return useSWR(
        composeSWRKey<CatalogFilter>(CATALOG_KEY, {
            // category,
            // page,
            // pageSize,
        }),
        async ({ filters }) => {
            const data = await fetchCatalog(filters);

            return data;
        },
        {
            keepPreviousData: true,
            shouldRetryOnError: false,
        },
    );
};
