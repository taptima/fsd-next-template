import GraphQL from 'shared/lib/api/GraphQL';
import REST from 'shared/lib/api/REST';
import { GRAPHQL_URL, REST_URL } from 'shared/lib/api/const';
import AbstractApiClient from './AbstractApiClient';

export default class ApiClient extends AbstractApiClient {
    public readonly rest: REST;

    public readonly graphql: GraphQL;

    constructor() {
        super();
        this.rest = new REST(REST_URL);
        this.graphql = new GraphQL(GRAPHQL_URL);

        this.useCredentialsInterceptor([this.rest.client, this.graphql.client]);
        this.useRefreshCredentialsInterceptor([this.rest.client, this.graphql.client]);
        this.useInvalidCredentialsInterceptor([this.graphql.client]);
    }
}
