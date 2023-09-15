export interface Product {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    length: number;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface GetProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}
