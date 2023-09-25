import useSWR from 'swr';
import { AxiosResponse } from 'axios';
import { swrRestFetcher, HttpMethod } from 'shared/lib/api/fetcher';
import { useProductsStore } from 'entities/Product/model/store/useProductsStore';
import { GetProductsResponse } from 'entities/Product/model/types/schema';

export const useGetProductsSWR = () => {
    const limit = useProductsStore.use.limit();
    const page = useProductsStore.use.page();

    const skip = page * limit;

    const { data, ...rest } = useSWR<AxiosResponse<GetProductsResponse>>(
        [`/api/products`, { skip, limit }],
        swrRestFetcher(HttpMethod.GET),
    );

    return { data: data?.data, ...rest };
};
