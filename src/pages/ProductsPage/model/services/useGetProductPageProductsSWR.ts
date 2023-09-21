import useSWR from 'swr';
import { AxiosResponse } from 'axios';
import { fetcher, HttpMethod } from 'shared/lib/api/fetcher';
import { useProductsStore } from 'entities/Product';
import { GetProductsProductResponse } from 'pages/ProductsPage/model/types';

export const useGetProductPageProductsSWR = () => {
    const limit = useProductsStore.use.limit();
    const page = useProductsStore.use.page();

    const skip = page * limit;

    // For the GraphQL request, we will send the fields that we want to receive.
    // Since in this example there is a REST request, it's identical to the request from the entity.
    const { data, ...rest } = useSWR<AxiosResponse<GetProductsProductResponse>>(
        [`/api/products`, { skip, limit }],
        fetcher(HttpMethod.GET),
    );

    return { data: data?.data, ...rest };
};
