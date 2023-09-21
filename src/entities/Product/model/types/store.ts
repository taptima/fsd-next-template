import { StoreActions } from 'shared/types/storeActions';

export interface ProductsState {
    limit: number;
    page: number;
}

export type ProductsAction = StoreActions<ProductsState, { reset: () => void }>;

export type ProductsStore = ProductsState & ProductsAction;
