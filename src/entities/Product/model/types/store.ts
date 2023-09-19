import { StoreActions } from 'shared/types/storeActions';

export interface ProductsState {
    limit: number;
    page: number;
}

export interface ProductsAction extends StoreActions<ProductsState> {}

export type ProductsStoreSchema = ProductsState & ProductsAction;
