import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { actionParams } from 'shared/lib/helpers/actionParams/actionParams';
import { initializeDevtoolsOptions } from 'shared/lib/helpers/initializeDevtoolsOptions/initializeDevtoolsOptions';
import { StoreNames } from 'shared/constants/storeNames';
import { ProductsStoreSchema } from '../types/store';

export const useProductsStore = create<ProductsStoreSchema>()(
    devtools(
        (set) => ({
            limit: 10,
            page: 1,
            actions: {
                setLimit: (limit) =>
                    set(() => ({ limit }), ...actionParams<ProductsStoreSchema>(limit, 'setLimit')),
                setPage: (page) =>
                    set(() => ({ page }), ...actionParams<ProductsStoreSchema>(page, 'setPage')),
            },
        }),
        initializeDevtoolsOptions(StoreNames.productsStore),
    ),
);
