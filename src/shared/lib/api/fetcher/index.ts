import { $axiosFrontend } from 'shared/lib/api/axios';
import { AxiosRequestConfig } from 'axios';

export enum HttpMethods {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

type FetcherProps = [string, AxiosRequestConfig['params'] | undefined];

export const fetcher =
    <T extends HttpMethods>(method: T) =>
    ([url, params]: FetcherProps) => {
        return $axiosFrontend[method](url, {
            params,
        });
    };
