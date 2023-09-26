import useSWR from 'swr';
import { AxiosResponse } from 'axios';
import { swrRestFetcher, HttpMethod } from 'shared/lib/api/fetcher';
import { useProductsStore } from 'entities/Product';
import { GetArticlesProductResponse } from 'pages/ArticlesPage/model/types';

export const useGetArticlesPageProductsSWR = () => {
    const limit = useProductsStore.use.limit();
    const page = useProductsStore.use.page();

    const skip = page * limit;

    // For the GraphQL request, we will send the fields that we want to receive.
    // Since in this example there is a REST request, it's identical to the request from the entity.
    const { data, ...rest } = useSWR<AxiosResponse<GetArticlesProductResponse>>(
        [`http://localhost:3000/api/products`, { skip, limit }],
        swrRestFetcher(HttpMethod.GET),
    );

    return { data: data?.data, ...rest };
};
