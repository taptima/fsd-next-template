import useSWR from 'swr';
import { fetcher } from 'shared/lib/api/fetcher';
import { useProductsStore } from '../store/useProductsStore';
import { GetProductsResponse } from '../types/product';

export const useGetProductsSWR = () => {
    const limit = useProductsStore((store) => store.limit);
    const page = useProductsStore((store) => store.page);

    const skip = page * limit;

    const values = useSWR<GetProductsResponse>(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        fetcher,
    );

    return values;
};
