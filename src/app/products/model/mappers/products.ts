import { Product } from 'entities/Product/model/types/product';
import { ProductsProduct } from 'pages/ProductsPage/model/types';
import { ArticlesProduct } from 'pages/ArticlesPage/model/types';

export const mapProductToProductsProduct = (product: Product): ProductsProduct => {
    return {
        id: product.id,
        brand: product.brand,
        price: product.price,
        description: product.description,
        images: product.images,
        discount: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
        title: product.title,
        length: product.length,
        category: product.category,
    };
};

export const mapProductToArticlesProduct = (product: Product): ArticlesProduct => {
    return {
        id: product.id,
        brand: product.brand,
        price: product.price,
        description: product.description,
        image: product.images[0],
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        thumbnail: product.thumbnail,
        title: product.title,
        length: product.length,
        category: product.category,
    };
};
