import { array, Infer, number, object, string } from 'superstruct';

export const ProductBackendSchema = object({
    id: number(),
    title: string(),
    description: string(),
    price: number(),
    discountPercentage: number(),
    rating: number(),
    stock: number(),
    brand: string(),
    category: string(),
    thumbnail: string(),
    images: array(string()),
});

export const GetProductsResponseSchema = object({
    limit: number(),
    products: array(ProductBackendSchema),
    skip: number(),
    total: number(),
});

export type ProductBackend = Infer<typeof ProductBackendSchema>;

export type GetProductsResponseBackend = Infer<typeof GetProductsResponseSchema>;
