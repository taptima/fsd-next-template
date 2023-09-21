import axios, { AxiosInstance } from 'axios';
import { handleError } from 'shared/lib/config/logger';

const TIMEOUT_ERROR_MESSAGE = 'TimeoutError';

class AxiosClient {
    private readonly _client: AxiosInstance;

    public constructor(apiBaseURL: string = '') {
        this._client = axios.create({
            baseURL: apiBaseURL,
            timeout: 10000,
            timeoutErrorMessage: TIMEOUT_ERROR_MESSAGE,
        });

        this.useTimeoutErrorInterceptor();
    }

    private useTimeoutErrorInterceptor(): void {
        this._client.interceptors.response.use(undefined, (error) => {
            if (error?.message === TIMEOUT_ERROR_MESSAGE) {
                handleError(TIMEOUT_ERROR_MESSAGE, error);
            }

            throw error;
        });
    }

    public get client(): AxiosInstance {
        return this._client;
    }
}

export const axiosInstance = new AxiosClient('https://dummyjson.com').client;

export const axiosInstanceFrontend = new AxiosClient().client;
