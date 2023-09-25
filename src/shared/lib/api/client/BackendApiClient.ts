import REST from 'shared/lib/api/REST';
import GraphQL from 'shared/lib/api/GraphQL';
import { API_BASE_URL, REST_FRONTEND_ENDPOINT, GRAPHQL_ENDPOINT } from 'shared/lib/api/const';
import AbstractApiClient from './AbstractApiClient';

export default class BackendApiClient extends AbstractApiClient {
    public readonly rest: REST;

    public readonly graphql: GraphQL;

    constructor() {
        super();
        this.rest = new REST(`${API_BASE_URL}/${REST_FRONTEND_ENDPOINT}`);
        this.graphql = new GraphQL(`${API_BASE_URL}/${GRAPHQL_ENDPOINT}`);
    }
}
