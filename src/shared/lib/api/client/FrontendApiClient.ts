import REST from 'shared/lib/api/REST';
import { REST_FRONTEND_ENDPOINT } from 'shared/lib/api/const';
import AbstractApiClient from './AbstractApiClient';

export default class FrontendApiClient extends AbstractApiClient {
    public readonly rest: REST;

    constructor() {
        super();
        this.rest = new REST(`/${REST_FRONTEND_ENDPOINT}`);

        // TODO: Разобраться с работой токенов на клиенте с BFF
        this.useCredentialsInterceptor([this.rest.client]);
        this.useRefreshCredentialsInterceptor([this.rest.client]);
    }
}
