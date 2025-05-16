import { REVALIDATE_IN_S } from 'shared/const/app';
import { REST_URL } from 'shared/lib/api/const';

export async function fetcher<T>(input: string, init: RequestInit = {}): Promise<T> {
    const { headers, ...restInit } = init;
    const apiUrl = `${REST_URL}${input}`;

    const response = await fetch(apiUrl, {
        ...restInit,
        headers: {
            ...headers,
            Platform: 'Web',
        },
        next: {
            revalidate: REVALIDATE_IN_S,
        },
    });
    const res = await response.json();

    return res;
}
