import type { Product } from 'entities/Product';
import { GetProductResponse } from 'entities/Product/model/types/product';

export type ProductsProduct = Pick<Product, 'id' | 'title' | 'description' | 'price'>;

export interface GetProductsProductResponse extends StrictOmit<GetProductResponse, 'products'> {
    products: ProductsProduct[];
}
