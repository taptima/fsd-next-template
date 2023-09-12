import React, { ChangeEvent } from 'react';

import { useProductsSWR } from '../../model/services/useGetProductsSWR/useGetProductsSWR';
import {
    useProductsActions,
    useProductsLimit,
    useProductsPage,
} from '../../model/selectors/products';
import cls from './ProductsList.module.css';

const ProductsList = () => {
    const limit = useProductsLimit();
    const page = useProductsPage();
    const { setLimit, setPage } = useProductsActions();
    const { data, isLoading } = useProductsSWR();

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
            <div className={cls.grid}>
                {data?.products?.map((el) => {
                    return (
                        <div className={cls.cardWrapper} key={el.id}>
                            <div className={cls.card}>
                                <div>{el.title}</div>
                                <div>{el.brand}</div>
                                <div>{el.category}</div>
                            </div>
                        </div>
                    );
                })}
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
