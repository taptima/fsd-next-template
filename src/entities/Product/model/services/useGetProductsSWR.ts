import useSWR from 'swr';
import { useProductsLimit, useProductsPage } from 'entities/Product/model/selectors/products';
import { AxiosResponse } from 'axios';
import { fetcher, HttpMethods } from 'shared/lib/api/fetcher';
import { GetProductsResponse } from '../types/product';

export const useGetProductsSWR = () => {
    const limit = useProductsLimit();
    const page = useProductsPage();

    const skip = page * limit;

    const { data, ...rest } = useSWR<AxiosResponse<GetProductsResponse>>(
        [`/api/products`, { skip, limit }],
        fetcher(HttpMethods.GET),
    );

    return { data: data?.data, ...rest };
};
