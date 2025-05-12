import type { FC } from 'react';
import type { User } from 'entities/User';
// import { usePaginationRollback } from 'shared/lib/hooks/usePaginationRollback';
import { mapDataToTableEntries } from 'shared/lib/mapper/mapDataToTableEntries';
import { Table, TableProps } from 'shared/ui/display/Table';
import { Pagination } from 'shared/ui/navigation/Pagination';
import { useEmployees } from 'pages/admin/EmployeesPage/api/swr/useEmployees';
import { handleEmployeeFilters } from 'pages/admin/EmployeesPage/model/helper/handleEmployeeFilters';
import { handleEmployeeSorter } from 'pages/admin/EmployeesPage/model/helper/handleEmployeeSorter';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { useEmployeesPageStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageStore';
import { COLUMNS } from './content';

export const EmployeesTable: FC = () => {
    const { setIsViewEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const { setEmployeeForView } = useEmployeesActionsStore.use.actions();
    const page = useEmployeesPageStore.use.page();
    const pageSize = useEmployeesPageStore.use.pageSize();
    const { setPage, setPageSize } = useEmployeesPageStore.use.actions();
    const { data = [], isLoading } = useEmployees();
    // const { elements = [], pagination } = data ?? {};
    // const { itemsCount = 0 } = pagination ?? {};
    const itemsCount = 0;

    const handleRowClick = (record: User) => {
        setEmployeeForView(record);
        setIsViewEmployeeModalOpen(true);
    };

    const handleTableChange: TableProps['onChange'] = (_, filters, sorter) => {
        handleEmployeeFilters(filters);
        handleEmployeeSorter(sorter);
    };

    // usePaginationRollback({ data, setPage });

    return (
        <>
            <Table
                columns={COLUMNS}
                dataSource={mapDataToTableEntries(data)}
                loading={isLoading}
                onRowClick={handleRowClick}
                onChange={handleTableChange}
                fill
                absolute
                scroll={{ x: 'none', y: 'none' }}
            />
            <Pagination
                placement="Fixed"
                current={page}
                pageSize={pageSize}
                total={itemsCount}
                setPage={setPage}
                setPageSize={setPageSize}
            />
        </>
    );
};
