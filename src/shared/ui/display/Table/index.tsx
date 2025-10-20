'use client';

import BaseTable, { TableProps as BaseTableProps } from 'antd/es/table';
import clsx from 'clsx';
import type { Classnames } from 'shared/types/styles';
import type { GQLEntity } from 'shared/types/utility';
import { Actions } from './ui/Actions';
import { DragHandle } from './ui/DragHandle';
import { FilterDropdown } from './ui/FilterDropdown';
import { FilterIcon } from './ui/FilterIcon';
import { Header } from './ui/Header';
import { SearchFilterDropdown } from './ui/SearchFilterDropdown';
import { SearchFilterIcon } from './ui/SearchFilterIcon';
import { SortIcon } from './ui/SortIcon';
import { SortableRow } from './ui/SortableRow';
import { Switch } from './ui/Switch';
import styles from './styles.module.scss';

export type TableProps<Data extends GQLEntity<object>> = BaseTableProps<Data> &
    Classnames<'adaptiveListWrapper'> & {
        loading?: boolean;
        fill?: boolean;
        absolute?: boolean;
        onRowClick?: (data: Data) => void;
    };

export function Table<Data extends GQLEntity<object>>(props: TableProps<Data>) {
    const { fill, absolute, onRowClick, ...restProps } = props;

    return (
        <BaseTable
            pagination={false}
            tableLayout="fixed"
            className={clsx(styles.tableWrapper, {
                [styles.tableWrapperFill]: fill,
                [styles.tableWrapperAbsolute]: absolute,
                [styles.rowClickable]: !!onRowClick,
            })}
            onRow={(data) => ({
                onClick: () => onRowClick?.(data),
            })}
            {...restProps}
        />
    );
}

Table.Actions = Actions;
Table.DragHandle = DragHandle;
Table.Header = Header;
Table.FilterIcon = FilterIcon;
Table.FilterDropdown = FilterDropdown;
Table.SearchFilterIcon = SearchFilterIcon;
Table.SearchFilterDropdown = SearchFilterDropdown;
Table.SortableRow = SortableRow;
Table.SortIcon = SortIcon;
Table.Switch = Switch;
