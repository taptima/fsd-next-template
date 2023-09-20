import { actionParams } from 'shared/lib/helpers/actionParams';
import { createStore } from 'shared/lib/config/createStore';
import { ProductsStoreSchema } from 'entities/Product/model/types/store';

export const useProductsStore = createStore<ProductsStoreSchema>(
    (set) => ({
        limit: 10,
        page: 1,
        actions: {
            setLimit: (limit) =>
                set(
                    ...actionParams<ProductsStoreSchema>({
                        callback: () => ({ limit }),
                        value: limit,
                        type: 'setLimit',
                    }),
                ),
            setPage: (page) =>
                set(
                    ...actionParams<ProductsStoreSchema>({
                        callback: () => ({ page }),
                        value: page,
                        type: 'setPage',
                    }),
                ),
        },
    }),
    'productsStore',
);
