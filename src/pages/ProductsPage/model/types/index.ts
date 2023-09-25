import type { Product } from 'entities/Product';
import type { GetProductsResponse } from 'entities/Product/model/types/schema';

export type ProductsProduct = Pick<Product, 'id' | 'title' | 'description' | 'price'>;

export interface GetProductsProductResponse extends StrictOmit<GetProductsResponse, 'products'> {
    products: ProductsProduct[];
}
