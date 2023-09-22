import type { Product } from 'entities/Product';

export type ProductsProduct = Pick<Product, 'id' | 'title' | 'description' | 'price'>;
