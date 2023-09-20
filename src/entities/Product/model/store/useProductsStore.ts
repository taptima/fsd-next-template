import { actionParams } from 'shared/lib/helpers/actionParams';
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
            setLimit: (limit) =>
                set(
                    ...actionParams<ProductsStoreSchema, number>({
                        callback: () => ({ limit }),
                        value: limit,
                        type: 'setLimit',
                    }),
                ),
            setPage: (page) =>
                set(
                    ...actionParams<ProductsStoreSchema, number>({
                        callback: () => ({ page }),
                        value: page,
                        type: 'setPage',
                    }),
                ),
            reset: () =>
                set(
                    ...actionParams<ProductsStoreSchema, ProductsState>({
                        callback: () => ({ ...initialState }),
                        value: initialState,
                        type: 'reset',
                    }),
                ),
        },
    }),
    'productsStore',
);
