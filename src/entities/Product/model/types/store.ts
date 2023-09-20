import { StoreActions } from 'shared/types/storeActions';

export interface ProductsState {
    limit: number;
    page: number;
}

export type ProductsAction = StoreActions<ProductsState> & {
    actions: {
        reset: () => void;
    };
};

export type ProductsStoreSchema = ProductsState & ProductsAction;
