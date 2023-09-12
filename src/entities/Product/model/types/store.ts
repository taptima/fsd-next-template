import { DefaultActions } from '../../../../shared/types/defaultActions';

export interface ProductsState {
    limit: number;
    page: number;
}

export interface ProductsAction
    extends DefaultActions<{
        setLimit: (limit: number) => void;
        setPage: (page: number) => void;
    }> {}

export type ProductsStoreSchema = ProductsState & ProductsAction;
