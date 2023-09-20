import useSWR from 'swr';
import { fetcher } from 'shared/lib/api/fetcher';
import { useProductsStore } from 'entities/Product/model/store/useProductsStore';
import { GetProductsResponse } from 'entities/Product/model/types/product';

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
