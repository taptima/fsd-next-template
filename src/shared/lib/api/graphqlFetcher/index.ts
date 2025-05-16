import type { APIResponse } from 'shared/types/api';
import { REVALIDATE_IN_S } from 'shared/const/app';
import { GRAPHQL_URL } from 'shared/lib/api/const';

export const graphqlFetcher = async <Response, Variables>(
    query: string,
    variables?: Variables,
): Promise<APIResponse<Response>> => {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
        next: {
            revalidate: REVALIDATE_IN_S,
        },
    });

    return response.json();
};
