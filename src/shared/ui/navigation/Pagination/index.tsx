import type { FC } from 'react';
import Flex from 'antd/es/flex';
import BasePagination, { PaginationProps as BasePaginationProps } from 'antd/es/pagination';
import Select, { DefaultOptionType } from 'antd/es/select';
import Space from 'antd/es/space';
import clsx from 'clsx';
import type { Classname } from 'shared/types/styles';
import { TABLE_PAGE_SIZE } from 'shared/const/app';
import styles from './styles.module.scss';

export type PaginationProps = BasePaginationProps &
    Classname & {
        placement?: 'Fixed';
        setPage?: (value: number) => void;
        setPageSize?: (value: number) => void;
    };

const OPTIONS: DefaultOptionType[] = [TABLE_PAGE_SIZE, 50, 100].map((value) => ({
    label: value,
    value,
}));

export const Pagination: FC<PaginationProps> = (props) => {
    const {
        className,
        placement,
        setPage,
        setPageSize,
        current = 0,
        pageSize = 0,
        total = 0,
        ...restProps
    } = props;

    if (!total) {
        return null;
    }

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize?.(newPageSize);
    };

    const handlePaginationChange: BasePaginationProps['onChange'] = (newPage) => {
        setPage?.(newPage);
    };

    return (
        <Flex
            justify="space-between"
            align="center"
            className={clsx(styles.wrapper, styles[`wrapper${placement}`], className)}
        >
            <Space className={styles.selectWrapper} rootClassName={styles.space}>
                Показывать по:
                <Select
                    value={pageSize}
                    options={OPTIONS}
                    size="large"
                    style={{ width: 80 }}
                    onChange={handlePageSizeChange}
                />
                <span>
                    {(current - 1) * pageSize + 1}-{Math.min(current * pageSize, total)}
                </span>
                <span className={styles.grey}>из</span>
                {total}
            </Space>
            <BasePagination
                showLessItems
                responsive
                size={undefined}
                showSizeChanger={false}
                current={current}
                pageSize={pageSize}
                total={total}
                className={styles.pagination}
                onChange={handlePaginationChange}
                {...restProps}
            />
        </Flex>
    );
};
