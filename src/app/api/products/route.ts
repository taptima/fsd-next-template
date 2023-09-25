import { NextResponse } from 'next/server';
import { decode } from 'shared/lib/helpers/decode';
import { backendApiClient } from 'shared/lib/api/client';
import { GetProductsResponseBackend, GetProductsResponseSchema } from './model/schema';
import { productMapper } from './model/mapper';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const { data } = await backendApiClient.rest.get<GetProductsResponseBackend>('/products', {
        params: searchParams,
    });

    const decodedData = decode(data, GetProductsResponseSchema, productMapper);

    return NextResponse.json(decodedData);
}
