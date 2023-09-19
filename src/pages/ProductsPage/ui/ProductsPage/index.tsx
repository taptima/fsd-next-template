'use client';

import Link from 'next/link';
import { ProductsList } from 'entities/Product';

export default function ProductsPage() {
    return (
        <div>
            <div>Products</div>
            <Link href="/">To MAIN</Link>
            <ProductsList />
        </div>
    );
}
