import useSWR from 'swr';
import { useCatalogPageStore } from 'views/example/CatalogPage/model/store/useCatalogPageStore';
import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { composeSWRKey } from 'shared/lib/helpers/composeSWRKey';
import { fetchCatalog } from 'entities/Example/api/request/fetchCatalog';
import { CATALOG_KEY } from './keys';

export const useCatalog = () => {
    const category = useCatalogPageStore.use.category();
    const page = useCatalogPageStore.use.page();
    const pageSize = useCatalogPageStore.use.pageSize();

    return useSWR(
        composeSWRKey<CatalogFilter>(CATALOG_KEY, {
            category,
            page,
            pageSize,
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
