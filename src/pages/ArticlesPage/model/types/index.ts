import type { Product } from 'entities/Product';
import type { GetProductsResponse } from 'entities/Product/model/types/schema';

export type ArticleProduct = Pick<
    Product,
    'id' | 'title' | 'description' | 'price' | 'rating' | 'thumbnail'
>;

export interface GetArticlesProductResponse extends StrictOmit<GetProductsResponse, 'products'> {
    products: ArticleProduct[];
}
