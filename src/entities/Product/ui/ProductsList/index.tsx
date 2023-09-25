import React, { ChangeEvent, FC } from 'react';

import clsx from 'clsx';
import type { ProductsProduct } from 'pages/ProductsPage';
import type { ArticleProduct } from 'pages/ArticlesPage';
import { useProductsStore } from 'entities/Product/model/store/useProductsStore';
import cls from './styles.module.scss';

type Props = {
    products?: ProductsProduct[] | ArticleProduct[];
    isLoading: boolean;
    error: string;
};

const ProductsList: FC<Props> = ({ products, isLoading, error }) => {
    const limit = useProductsStore.use.limit();
    const page = useProductsStore.use.page();
    const { setLimit, setPage } = useProductsStore.use.actions();

    const onLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(event.target.value));
        setPage(1);
    };

    const onPageChange = (value: 'prev' | 'next') => {
        if (value === 'prev') {
            if (page === 1) {
                return;
            }
            setPage(page - 1);
        }

        if (value === 'next') {
            setPage(page + 1);
        }
    };

    const renderListItem = (el: ArticleProduct | ProductsProduct) => {
        if ('thumbnail' in el && el.thumbnail) {
            return (
                <div className={cls.cardWrapper} key={el.id}>
                    <div className={cls.card}>
                        <div>Title: {el.title}</div>
                        <div>Price: {el.price}</div>
                        <div>Descr: {el.description}</div>
                        <div>Thumbnail: {el.thumbnail}</div>
                        <div>Rating: {el.rating}</div>
                    </div>
                </div>
            );
        }

        return (
            <div className={cls.cardWrapper} key={el.id}>
                <div className={cls.card}>
                    <div>Title: {el.title}</div>
                    <div>Price: {el.price}</div>
                    <div>Descr: {el.description}</div>
                </div>
            </div>
        );
    };

    if (isLoading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <div className={clsx(cls.grid, { big: isLoading })}>
                {products?.map(renderListItem)}
            </div>
            <div className={cls.paginationWrapper}>
                <div className={cls.pagination}>
                    <select value={limit} onChange={onLimitChange}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>

                    <div>
                        <button type="button" onClick={() => onPageChange('prev')}>
                            {'<'}
                        </button>
                        <span>Current page: {page}</span>
                        <button type="button" onClick={() => onPageChange('next')}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsList;
