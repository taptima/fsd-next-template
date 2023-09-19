import { Product } from 'entities/Product/model/types/product';

export type ProductsProduct = Replace<Product, 'discountPercentage', 'discount'>;
