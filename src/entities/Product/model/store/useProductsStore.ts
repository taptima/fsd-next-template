import { actionParams } from 'shared/lib/helpers/actionParams';
import { createStoreWithDevtools } from 'shared/lib/helpers/createStore';
import { ProductsStoreSchema } from '../types/store';

export const useProductsStore = createStoreWithDevtools<ProductsStoreSchema>(
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
