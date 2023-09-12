import useSWR from 'swr';
import { fetcher } from 'shared/lib/api/fetcher/fetcher';
import { useProductsStore } from '../../store/useProductsStore';

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

export const useProductsSWR = () => {
    const limit = useProductsStore((store) => store.limit);
    const page = useProductsStore((store) => store.page);

    const skip = page * limit;

    const values = useSWR<GetProductsResponse>(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        fetcher,
    );

    return values;
};
