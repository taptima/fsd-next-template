import type { Product } from 'entities/Product';
import { GetProductsResponse } from 'entities/Product/model/types/product';

export type ArticleProduct = Pick<
    Product,
    'id' | 'title' | 'description' | 'price' | 'rating' | 'thumbnail'
>;

export interface GetArticlesProductResponse extends StrictOmit<GetProductsResponse, 'products'> {
    products: ArticleProduct[];
}
