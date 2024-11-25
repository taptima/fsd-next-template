'use client';

import BaseTable, { TableProps as BaseTableProps } from 'antd/es/table';
import clsx from 'clsx';
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

export type TableProps<Data extends object = object> = BaseTableProps & {
    onRowClick?: (data: Data) => void;
};

export function Table<Data extends object = object>(props: TableProps<Data>) {
    const { onRowClick, ...restProps } = props;

    return (
        <BaseTable
            pagination={false}
            tableLayout="fixed"
            onRow={(data) => ({
                onClick: () => onRowClick?.(data),
            })}
            className={clsx(styles.tableWrapper, {
                [styles.rowClickable]: !!onRowClick,
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
