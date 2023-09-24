import { AxiosRequestConfig } from 'axios';
import { restFrontendClient } from 'shared/lib/api/restApi';

export const enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

type FetcherProps = [string, AxiosRequestConfig['params'] | undefined];

export const swrRestFetcher =
    <T extends HttpMethod>(method: T) =>
    (props: FetcherProps | string) => {
        if (typeof props === 'string') {
            return restFrontendClient[method](props);
        }
        const [url, params] = props;

        return restFrontendClient[method](url, {
            params,
        });
    };
