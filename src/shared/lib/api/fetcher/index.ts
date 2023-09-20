import { axiosInstanceFrontend } from 'shared/lib/api/axios';
import { AxiosRequestConfig } from 'axios';

export const enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

type FetcherProps = [string, AxiosRequestConfig['params'] | undefined];

export const fetcher =
    <T extends HttpMethod>(method: T) =>
    (props: FetcherProps | string) => {
        if (typeof props === 'string') {
            return axiosInstanceFrontend[method](props);
        }
        const [url, params] = props;

        return axiosInstanceFrontend[method](url, {
            params,
        });
    };
