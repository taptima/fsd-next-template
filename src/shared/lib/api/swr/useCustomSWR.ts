import useSWR from 'swr';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpMethod, swrRestFetcher } from 'shared/lib/api/fetcher';

export const useCustomSWR = <T, Body>(
    url: string,
    params: AxiosRequestConfig | Body | undefined,
) => {
    const data = useSWR<AxiosResponse<T>>(
        [`${process.env.NEXT_PUBLIC_DOMAIN}/api${url}`, params],
        swrRestFetcher(HttpMethod.GET),
    );

    return data;
};
