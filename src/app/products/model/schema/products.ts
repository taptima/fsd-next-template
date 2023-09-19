import { array, Describe, number, object, optional, string } from 'superstruct';
import { GetProductsResponse, Product } from 'entities/Product/model/types/product';

export const ProductsBackendSchema: Describe<Product> = object({
    id: number(),
    price: number(),
    brand: string(),
    category: string(),
    description: string(),
    images: array(string()),
    rating: number(),
    stock: number(),
    discountPercentage: number(),
    thumbnail: string(),
    title: string(),
    length: optional(number()),
});

export const GetProductsResponseSchema: Describe<GetProductsResponse> = object({
    limit: number(),
    products: array(ProductsBackendSchema),
    skip: number(),
    total: number(),
});
