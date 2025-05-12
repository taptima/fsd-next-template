import type { FilterValue } from 'antd/es/table/interface';
import type { EmployeeFilterColumn } from 'pages/admin/EmployeesPage/model/types/table';
import { useEmployeesPageStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageStore';

const { actions } = useEmployeesPageStore.getState();
const {
    setIdFilter,
    resetIdFilter,
    setFullnameFilter,
    resetFullnameFilter,
    setRoleFilter,
    setBannedFilter,
    resetRoleFilter,
    resetBannedFilter,
} = actions;

export const handleEmployeeFilters = (filters: Record<string, FilterValue | null>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id, fullname, role, status } = filters as Record<EmployeeFilterColumn, any>;

    if (id) {
        setIdFilter(id);
    } else {
        resetIdFilter();
    }

    if (fullname) {
        setFullnameFilter(fullname);
    } else {
        resetFullnameFilter();
    }

    if (role) {
        setRoleFilter(role);
    } else {
        resetRoleFilter();
    }

    if (status) {
        setBannedFilter(status);
    } else {
        resetBannedFilter();
    }
};
