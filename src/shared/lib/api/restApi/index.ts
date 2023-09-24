import AbstractAxiosClient from 'shared/lib/api/axios';
import { API_BASE_URL, REST_BACKEND_ENDPOINT, REST_FRONTEND_ENDPOINT } from 'shared/lib/api/const';

export class RestApi extends AbstractAxiosClient {
    public post = this._client.post;

    public get = this._client.get;

    public put = this._client.put;

    public delete = this._client.delete;
}

export const restFrontendClient = new RestApi(`/${REST_FRONTEND_ENDPOINT}`);

export const restBackendClient = new RestApi(`${API_BASE_URL}/${REST_BACKEND_ENDPOINT}`);
