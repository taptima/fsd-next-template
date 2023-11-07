import { NextResponse } from 'next/server';
import { backendApiClient } from 'shared/lib/api/client';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const { data } = await backendApiClient.rest.get('/products', {
        params: searchParams,
    });

    return NextResponse.json(data);
}
