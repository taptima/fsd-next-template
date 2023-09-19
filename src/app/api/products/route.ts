import { $axios } from 'shared/lib/api/axios';
import { GetProductsResponse } from 'entities/Product/model/types/product';
import { NextResponse } from 'next/server';
import { assert } from 'superstruct';
import { GetProductsResponseSchema } from 'app/products/model/schema/products';
import { mapProductToProductsProduct } from 'app/products/model/mappers/products';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const { data } = await $axios<GetProductsResponse>('/products', {
        params: searchParams,
    });

    assert(data, GetProductsResponseSchema);

    const products = data.products.map(mapProductToProductsProduct);

    return NextResponse.json({
        products,
    });
}
