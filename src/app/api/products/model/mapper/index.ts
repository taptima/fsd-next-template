import type { Product } from 'entities/Product/model/types/product';
import type { ProductBackend } from 'app/api/products/model/schema';

export const productMapper = (product: ProductBackend): Product => ({
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
});
