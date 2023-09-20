'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ProductsList, useProductsStore } from 'entities/Product';
import { useGetArticlesPageProductsSWR } from '../../model/services/useGetArticlesPageProductsSWR';

export default function ArticlesPage() {
    const { data, isLoading, error } = useGetArticlesPageProductsSWR();

    const { reset } = useProductsStore.use.actions();

    useEffect(() => {
        return () => reset();
    }, [reset]);

    return (
        <div>
            <div>Articles</div>
            <Link href="/">To MAIN</Link>
            <ProductsList products={data} isLoading={isLoading} error={error} />
        </div>
    );
}
