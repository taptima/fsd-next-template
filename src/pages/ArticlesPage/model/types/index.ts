import type { Product } from 'entities/Product';
import { GetProductResponse } from 'entities/Product/model/types/product';

export type ArticleProduct = Pick<
    Product,
    'id' | 'title' | 'description' | 'price' | 'rating' | 'thumbnail'
>;

export interface GetArticlesProductResponse extends StrictOmit<GetProductResponse, 'products'> {
    products: ArticleProduct[];
}
