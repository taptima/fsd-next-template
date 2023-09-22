'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ProductsList, useProductsStore } from 'entities/Product';
import { useGetProductPageProductsSWR } from '../../model/services/useGetProductPageProductsSWR';

export default function ProductsPage() {
    const { data, isLoading, error } = useGetProductPageProductsSWR();

    const { reset } = useProductsStore.use.actions();

    useEffect(() => {
        return () => reset();
    }, [reset]);

    return (
        <div>
            <div>Products</div>
            <Link href="/">To MAIN</Link>
            <ProductsList products={data} isLoading={isLoading} error={error} />
        </div>
    );
}
