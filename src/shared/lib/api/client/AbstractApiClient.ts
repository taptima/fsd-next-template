import type { Mutex } from 'async-mutex';
import type { AxiosInstance } from 'axios';
import { useAuthStore } from 'app/model/store/useAuthStore';
import { HttpCode } from 'shared/const/httpCode';
import REST from 'shared/lib/api/REST';
import { postRefresh } from 'features/auth/api/request/postRefresh';

const EXPIRED_TOKEN_MESSAGE = 'Credentials have expired.';
const INVALID_TOKEN_MESSAGE = 'Bad credentials.';

export default abstract class AbstractApiClient {
    private mutex: Mutex | null = null;

    public abstract rest: REST;

    private accessToken?: string;

    private refreshToken?: string;

    public getAccessToken() {
        return this.accessToken;
    }

    public setAccessToken(token: string | undefined) {
        this.accessToken = token;
    }

    public getRefreshToken() {
        return this.refreshToken;
    }

    public setRefreshToken(token?: string) {
        this.refreshToken = token;
    }

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

    // eslint-disable-next-line class-methods-use-this
    private async _refreshCredentials(): Promise<void> {
        try {
            const response = await postRefresh();
            const { access_token: accessToken, refresh_token: refreshToken } = response.data.data;

            this.setAccessToken(accessToken);
            this.setRefreshToken(refreshToken);
            useAuthStore.getState().actions.setToken(refreshToken);
        } catch (e) {
            this.setAccessToken(undefined);
            this.setRefreshToken(undefined);
            useAuthStore.getState().actions.setToken(undefined);

            return Promise.reject(e);
        }
    }

    protected useCredentialsInterceptor(clients: AxiosInstance[]) {
        clients.forEach((client) =>
            client.interceptors.request.use((request) => {
                if (this.accessToken && request.headers) {
                    request.headers.token = this.accessToken;
                }

                return request;
            }, Promise.reject),
        );
    }

    protected useRefreshCredentialsInterceptor(clients: AxiosInstance[]) {
        clients.forEach((client) =>
            client.interceptors.response.use(undefined, async (error) => {
                try {
                    const isRestRefreshRequired =
                        error.response.status === HttpCode.Unauthorized &&
                        error.response.data.error === EXPIRED_TOKEN_MESSAGE;
                    const isGraphQLRefreshRequired =
                        error.response.data.errors[0] === EXPIRED_TOKEN_MESSAGE;

                    if (isRestRefreshRequired || isGraphQLRefreshRequired) {
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

    // eslint-disable-next-line class-methods-use-this
    protected useInvalidCredentialsInterceptor(clients: AxiosInstance[]) {
        clients.forEach((client) =>
            client.interceptors.response.use(undefined, async (error) => {
                try {
                    const isCredentialsInvalid =
                        error.response.status === HttpCode.Unauthorized &&
                        error.response.data.errors[0] === INVALID_TOKEN_MESSAGE;

                    if (isCredentialsInvalid) {
                        window.location.reload();
                    }

                    throw error;
                } catch (e) {
                    return Promise.reject(error);
                }
            }),
        );
    }
}
