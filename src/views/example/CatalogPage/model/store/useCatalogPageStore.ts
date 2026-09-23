import { INITIAL_CATALOG_FILTER } from 'views/example/CatalogPage/model/const/filter';
import type { StoreActions } from 'shared/types/store';
import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { createStore } from 'shared/config/project/createStore';

type Store = CatalogFilter;

export const useCatalogPageStore = createStore<Store & StoreActions<Store>>(
    (set) => ({
        ...INITIAL_CATALOG_FILTER,
        actions: {
            setCategory: (category) => set(() => ({ category })),
            setPage: (page) => set(() => ({ page })),
            setPageSize: (pageSize) => set(() => ({ pageSize })),
        },
    }),
    'CatalogPageStore',
);
