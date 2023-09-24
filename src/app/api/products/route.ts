import { NextResponse } from 'next/server';
import { decode } from 'shared/lib/helpers/decode';
import { restBackendClient } from 'shared/lib/api/restApi';
import { GetProductsResponseBackend, GetProductsResponseSchema } from './model/schema';
import { productMapper } from './model/mapper';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const { data } = await restBackendClient.get<GetProductsResponseBackend>('/products', {
        params: searchParams,
    });

    const decodedData = decode(data, GetProductsResponseSchema, productMapper);

    return NextResponse.json(decodedData);
}
