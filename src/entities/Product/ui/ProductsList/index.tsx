import React, { ChangeEvent } from 'react';

import clsx from 'clsx';
import {
    useProductsActions,
    useProductsLimit,
    useProductsPage,
} from 'entities/Product/model/selectors/products';
import { useGetProductsSWR } from 'entities/Product/model/services/useGetProductsSWR';
import styles from './styles.module.scss';

const ProductsList = () => {
    const limit = useProductsLimit();
    const page = useProductsPage();
    const { setLimit, setPage } = useProductsActions();
    const { data, isLoading } = useGetProductsSWR();

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

    if (isLoading) {
        return <div>LOADING...</div>;
    }

    return (
        <>
            <div className={clsx(styles.grid, { big: isLoading })}>
                {data?.products?.map((el) => {
                    return (
                        <div className={styles.cardWrapper} key={el.id}>
                            <div className={styles.card}>
                                <div>{el.title}</div>
                                <div>{el.brand}</div>
                                <div>{el.category}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.paginationWrapper}>
                <div className={styles.pagination}>
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
