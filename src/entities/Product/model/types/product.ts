export interface Product {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    length?: number;
}

export interface GetProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}
