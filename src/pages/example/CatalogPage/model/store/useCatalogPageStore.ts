import type { StoreActions } from 'shared/types/store';
import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { createStore } from 'shared/config/project/createStore';
import { INITIAL_CATALOG_FILTER } from 'pages/example/CatalogPage/model/const/filter';

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
