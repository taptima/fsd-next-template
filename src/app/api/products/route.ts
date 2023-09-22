import { NextResponse } from 'next/server';
import { is } from 'superstruct';
import { axiosInstance } from 'shared/lib/api/axios';
import { GetProductsResponse, GetProductsResponseSchema } from './model/schema';
import { productMapper } from './model/mapper';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const { data } = await axiosInstance<GetProductsResponse>('/products', {
        params: searchParams,
    });

    if (!is(data, GetProductsResponseSchema)) {
        console.error('Products: Data and schema are not compatible');
    }

    const products = data.products.map(productMapper);

    return NextResponse.json(products);
}
