import type { Product } from 'entities/Product';

export type ArticleProduct = Pick<
    Product,
    'id' | 'title' | 'description' | 'price' | 'rating' | 'thumbnail'
>;
