import type { SorterResult } from 'antd/es/table/interface';
import type { EmployeeFilterColumn } from 'pages/admin/EmployeesPage/model/types/table';
import { getSortFilter } from 'shared/lib/mapper/getSortFilter';
import { useEmployeesPageStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageStore';

const { actions } = useEmployeesPageStore.getState();
const { setOrderById, setOrderByFullname, setOrderByRole } = actions;

export const handleEmployeeSorter = (sorter: SorterResult<unknown> | SorterResult<unknown>[]) => {
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
