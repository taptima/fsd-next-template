import { API_BASE_URL, REST_API_ENDPOINT } from 'shared/lib/api/const';

export async function fetcher<T>(input: string, init?: RequestInit): Promise<T> {
    const apiUrl = new URL(
        input.startsWith('http') ? input : `${REST_API_ENDPOINT}${input}`,
        API_BASE_URL,
    );

    const response = await fetch(apiUrl, init);

    return response.json();
}
