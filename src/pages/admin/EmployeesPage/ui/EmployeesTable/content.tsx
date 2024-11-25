import type { TableColumnsType } from 'antd';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { Table } from 'shared/ui/display/Table';
import { getTableBlockAction } from 'entities/Blockable/model/lib/helpers/getTableBlockAction';
import { ActivityStatus } from 'entities/Blockable/ui/ActivityStatus';
import { User, Role } from 'entities/User';
import { EMPLOYEE_ROLE_FILTERS } from 'entities/User/model/const/employeeRoleFilters';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';

const { actions: modalActions } = useEmployeesPageModalStore.getState();
const {
    setIsEditEmployeeModalOpen,
    setIsDeleteEmployeeModalOpen,
    setIsBlockEmployeeModalOpen,
    setIsUnblockEmployeeModalOpen,
} = modalActions;
const { actions: actionsActions } = useEmployeesActionsStore.getState();
const {
    setEmployeeForEdit,
    setEmployeeForDeletion,
    setEmployeeForBlocking,
    setEmployeeForUnblocking,
} = actionsActions;

export const COLUMNS: TableColumnsType<User> = [
    {
        key: '1',
        dataIndex: 'fullName',
        title: <Table.Header>ФИО</Table.Header>,
        width: '15%',
        sortIcon: Table.SortIcon,
        sorter: (a, b) => a.lastname.localeCompare(b.lastname),
        sortDirections: ['ascend'],
        showSorterTooltip: false,
        filterIcon: Table.SearchFilterIcon,
        filterDropdown: (props) => (
            <Table.SearchFilterDropdown {...props} placeholder="Поиск по имени" />
        ),
        render: (_, employee) => getFullName(employee),
    },
    {
        key: '2',
        dataIndex: 'role',
        title: <Table.Header>Роль</Table.Header>,
        width: '15%',
        sortIcon: Table.SortIcon,
        sorter: (a, b) => a.role.localeCompare(b.role),
        sortDirections: ['ascend', 'descend'],
        showSorterTooltip: false,
        filterIcon: Table.FilterIcon,
        filters: EMPLOYEE_ROLE_FILTERS,
        onFilter: (value, record) => record.role === value,
        render: (role: Role) => MAP_USER_ROLE_TO_TEXT[role],
    },
    {
        key: '3',
        dataIndex: 'email',
        title: <Table.Header>Email</Table.Header>,
        width: '15%',
        filterIcon: Table.SearchFilterIcon,
        filterDropdown: (props) => (
            <Table.SearchFilterDropdown placeholder="Поиск по e-mail" {...props} />
        ),
    },
    {
        key: '4',
        dataIndex: 'phone',
        title: <Table.Header>Телефон</Table.Header>,
        width: '15%',
        filterIcon: Table.SearchFilterIcon,
        filterDropdown: (props) => (
            <Table.SearchFilterDropdown placeholder="Поиск по номеру" {...props} />
        ),
    },
    {
        key: '5',
        dataIndex: 'login',
        title: <Table.Header>Логин</Table.Header>,
        width: '15%',
    },
    {
        key: '6',
        dataIndex: 'status',
        title: <Table.Header>Статус</Table.Header>,
        width: '15%',
        render: (banned) => <ActivityStatus banned={banned} />,
    },

    {
        key: '7',
        dataIndex: 'actions',
        title: <Table.Header>Действия</Table.Header>,
        width: '8%',
        render: (_, data) => (
            <Table.Actions
                items={[
                    getTableBlockAction({
                        blockable: data,
                        lockAction: () => {
                            setEmployeeForBlocking(data);
                            setIsBlockEmployeeModalOpen(true);
                        },
                        unlockAction: () => {
                            setEmployeeForUnblocking(data);
                            setIsUnblockEmployeeModalOpen(true);
                        },
                    }),
                    {
                        variant: 'edit',
                        onClick: () => {
                            setEmployeeForEdit(data);
                            setIsEditEmployeeModalOpen(true);
                        },
                    },
                    {
                        variant: 'delete',
                        onClick: () => {
                            setEmployeeForDeletion(data);
                            setIsDeleteEmployeeModalOpen(true);
                        },
                    },
                ]}
            />
        ),
    },
];
