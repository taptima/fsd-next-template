import type { TableProps } from 'shared/ui/display/Table';
import type { User } from 'entities/User';
import type { EmployeeFilterColumn } from 'pages/admin/EmployeesPage/model/types/table';
import { getSortFilter } from 'shared/lib/mapper/getSortFilter';
import { useEmployeesPageStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageStore';

const { actions } = useEmployeesPageStore.getState();
const { setOrderById, setOrderByFullname, setOrderByRole } = actions;

type Sorter = Parameters<NonNullable<TableProps<User>['onChange']>>[2];

export const handleEmployeeSorter = (sorter: Sorter) => {
    if (Array.isArray(sorter)) {
        return;
    }

    const column = sorter.columnKey as EmployeeFilterColumn | undefined;
    const { order } = sorter;

    if (!column) {
        return;
    }

    if (column === 'id') {
        setOrderByFullname(undefined);
        setOrderByRole(undefined);

        return setOrderById(getSortFilter(order));
    }

    if (column === 'fullname') {
        setOrderById(undefined);
        setOrderByRole(undefined);

        return setOrderByFullname(getSortFilter(order));
    }

    if (column === 'role') {
        setOrderById(undefined);
        setOrderByFullname(undefined);

        return setOrderByRole(getSortFilter(order));
    }
};
