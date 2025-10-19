import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleError } from 'shared/config/project/logger';
import AbstractAxiosClient from 'shared/lib/api/axios';

type QueryVariables = {
    [key: string]: unknown;
};

const QUERY_NAME_REGEXP = /(?:query|mutation)\s+(\w+)/m;

const getGraphQLParams = (query: string): AxiosRequestConfig['params'] => {
    const searchParams: Record<string, string | number> = {};

    const [, name] = query.match(QUERY_NAME_REGEXP) ?? [];

    if (name) {
        searchParams.q = name;
    }

    return searchParams;
};

export default class GraphQL extends AbstractAxiosClient {
    public async query<ResponseType = unknown, Variables extends object = QueryVariables>(
        query: string,
        variables?: Variables,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<ResponseType>> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await this.client.post<ResponseType, any>(
            '',
            {
                query,
                variables,
            },
            {
                params: getGraphQLParams(query),
                ...config,
            },
        );

        return this.withHandleErrors(response);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
    private withHandleErrors(response: any) {
        if (response?.data?.errors) {
            handleError('GraphQL error', response.data.errors);
        }

        return response;
    }
}
