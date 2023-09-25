import type { Mutex } from 'async-mutex';
import type { AxiosInstance } from 'axios';

export default class AbstractApiClient {
    private mutex: Mutex | null = null;

    private accessToken?: string;

    public async refreshCredentials(): Promise<void> {
        if (this.mutex === null) {
            const { Mutex } = await import('async-mutex');

            this.mutex = new Mutex();
        }

        if (this.mutex.isLocked()) {
            return this.mutex.waitForUnlock();
        }

        await this.mutex.runExclusive(() => this._refreshCredentials());
    }

    // TODO: Настроить обновление токенов
    // eslint-disable-next-line class-methods-use-this
    private async _refreshCredentials(): Promise<void> {
        // try {
        //     const { data } = await this.rest.post<CredentialsResponseDTO>(REFRESH_TOKENS_ENDPOINT, {
        //         refresh_token: this.accessToken.refresh,
        //     });
        //     const credentials = AbstractApiClient.decode(
        //         CredentialsResponseDTO,
        //         undefined,
        //         ({ token, refresh_token }) => new Credentials(token, refresh_token),
        //         data,
        //     );
        //
        //     if (credentials === undefined) {
        //         throw new Error('Cannot decode API response');
        //     }
        //
        //     this.setCredentials(credentials, !!ApiClient.getCredentialsFromLocalStorage());
        // } catch (e) {
        //     this.resetCredentials();
        //
        //     return Promise.reject(e);
        // }
    }

    protected useCredentialsInterceptor(clients: AxiosInstance[]) {
        clients.forEach((client) =>
            client.interceptors.request.use((request) => {
                if (this.accessToken && request.headers) {
                    request.headers.Authorization = `Bearer ${this.accessToken}`;
                }

                return request;
            }, Promise.reject),
        );
    }

    protected useRefreshCredentialsInterceptor(clients: AxiosInstance[]) {
        clients.forEach((client) =>
            client.interceptors.response.use(undefined, async (error) => {
                try {
                    // TODO: Вынести 401 в enum
                    if (error.response.status === 401) {
                        await this.refreshCredentials();

                        return await client.request(error.config);
                    }

                    throw error;
                } catch (e) {
                    return Promise.reject(error);
                }
            }),
        );
    }
}
