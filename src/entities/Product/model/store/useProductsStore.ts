import { createStore } from 'shared/lib/config/createStore';
import { ProductsState, ProductsStoreSchema } from 'entities/Product/model/types/store';

const initialState: ProductsState = {
    limit: 10,
    page: 1,
};

export const useProductsStore = createStore<ProductsStoreSchema>(
    (set) => ({
        ...initialState,
        actions: {
            setLimit: (limit) => set(() => ({ limit })),
            setPage: (page) => set(() => ({ page })),
            reset: () => set(() => ({ ...initialState })),
        },
    }),
    'productsStore',
);
