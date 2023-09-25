import type { GetProductsResponseBackend } from 'app/api/products/model/schema';
import { GetProductsResponse } from 'entities/Product/model/types/schema';

export const productMapper = (data: GetProductsResponseBackend): GetProductsResponse => ({
    limit: data.limit ?? NaN,
    products: data.products.map((product) => ({
        id: product.id ?? NaN,
        title: product.title ?? '',
        description: product.description ?? '',
        price: product.price ?? NaN,
        discount: product.discountPercentage ?? NaN,
        rating: product.rating ?? NaN,
        stock: product.stock ?? NaN,
        brand: product.brand ?? '',
        category: product.category ?? '',
        thumbnail: product.thumbnail ?? '',
        images: product.images ?? [],
    })),
    skip: data.skip ?? NaN,
    total: data.total ?? NaN,
});
