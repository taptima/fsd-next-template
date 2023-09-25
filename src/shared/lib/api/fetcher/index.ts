import { AxiosRequestConfig } from 'axios';
import { frontendApiClient } from 'shared/lib/api/client';

export const enum HttpMethod {
    GET = 'get',
    POST = 'post',
}

type FetcherProps = [string, AxiosRequestConfig['params'] | undefined];

export const swrRestFetcher =
    <T extends HttpMethod>(method: T) =>
    (props: FetcherProps | string) => {
        if (typeof props === 'string') {
            return frontendApiClient.rest[method](props);
        }
        const [url, params] = props;

        return frontendApiClient.rest[method](url, {
            params,
        });
    };
