import { API_BASE_URL } from 'shared/const/env';
import REST from 'shared/lib/api/REST';
import { REST_API_ENDPOINT } from 'shared/lib/api/const';
import AbstractApiClient from './AbstractApiClient';

export default class ApiClient extends AbstractApiClient {
    public readonly rest: REST;

    constructor() {
        super();
        this.rest = new REST(`${API_BASE_URL}${REST_API_ENDPOINT}`);

        this.useCredentialsInterceptor([this.rest.client]);
        this.useRefreshCredentialsInterceptor([this.rest.client]);
    }
}
