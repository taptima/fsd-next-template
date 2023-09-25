import { Product } from 'entities/Product';

export interface GetProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}
