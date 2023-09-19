import { Product } from 'entities/Product/model/types/product';

export type ArticlesProduct = Replace<Product, 'images', 'image', Product['images'][0]>;
