import { createStore } from 'shared/config/project/createStore';
import { ProductsState, ProductsStore } from 'entities/Product/model/types/store';

const initialState: ProductsState = {
    limit: 10,
    page: 1,
};

export const useProductsStore = createStore<ProductsStore>(
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
