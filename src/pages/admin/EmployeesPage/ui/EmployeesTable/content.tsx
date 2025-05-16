import type { TableColumnsType } from 'antd/lib';
import type { RoleTypeEnum, User } from 'entities/User';
import type { EmployeeFilterColumn } from 'pages/admin/EmployeesPage/model/types/table';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { Table } from 'shared/ui/display/Table';
import { BANNED_FILTERS } from 'entities/Blockable/model/const/bannedFilters';
import { DEFAULT_BANNED_FILTER } from 'entities/Blockable/model/const/filters';
import { ActivityStatus } from 'entities/Blockable/ui/ActivityStatus';
import { EMPLOYEE_ROLE_FILTERS } from 'entities/User/model/const/employeeRoleFilters';
import { DEFAULT_EMPLOYEE_ROLE_FILTER } from 'entities/User/model/const/filters';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { Actions } from './Actions';

export const COLUMNS: TableColumnsType<User> = [
    {
        key: 'id' as EmployeeFilterColumn,
        dataIndex: 'id',
        title: <Table.Header>ID</Table.Header>,
        width: 110,
        fixed: true,
        sortIcon: Table.SortIcon,
        sorter: () => NaN,
        sortDirections: ['descend'],
        showSorterTooltip: false,
        filterIcon: Table.SearchFilterIcon,
        filterDropdown: (props) => (
            <Table.SearchFilterDropdown placeholder="Поиск по ID" {...props} />
        ),
    },
    {
        key: 'fullname' as EmployeeFilterColumn,
        title: <Table.Header>ФИО</Table.Header>,
        width: 240,
        fixed: true,
        ellipsis: true,
        sortIcon: Table.SortIcon,
        sorter: () => NaN,
        sortDirections: ['descend', 'ascend'],
        showSorterTooltip: false,
        render: getFullName,
        filterIcon: Table.SearchFilterIcon,
        filterDropdown: (props) => (
            <Table.SearchFilterDropdown placeholder="Поиск по ФИО" {...props} />
        ),
    },
    {
        dataIndex: 'email',
        width: 150,
        ellipsis: true,
        title: <Table.Header>Email</Table.Header>,
    },
    {
        key: 'role' as EmployeeFilterColumn,
        dataIndex: 'role',
        title: <Table.Header>Роль</Table.Header>,
        width: 150,
        sortIcon: Table.SortIcon,
        sorter: () => NaN,
        sortDirections: ['descend', 'ascend'],
        showSorterTooltip: false,
        filterIcon: Table.FilterIcon,
        filterDropdown: (props) => <Table.FilterDropdown size="Large" {...props} />,
        filters: EMPLOYEE_ROLE_FILTERS,
        defaultFilteredValue: DEFAULT_EMPLOYEE_ROLE_FILTER,
        render: (role: RoleTypeEnum) => MAP_USER_ROLE_TO_TEXT[role],
    },
    {
        key: 'status' as EmployeeFilterColumn,
        dataIndex: 'banned',
        title: <Table.Header>Статус</Table.Header>,
        width: 120,
        filterIcon: Table.FilterIcon,
        filterDropdown: Table.FilterDropdown,
        filters: BANNED_FILTERS,
        defaultFilteredValue: DEFAULT_BANNED_FILTER,
        render: (banned) => <ActivityStatus banned={banned} />,
    },
    {
        title: <Table.Header>Действия</Table.Header>,
        width: 150,
        render: (data) => <Actions data={data} />,
    },
];
