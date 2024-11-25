import { FC } from 'react';
import { mapDataToTableEntries } from 'shared/lib/mapper/mapDataToTableEntries';
import { Table } from 'shared/ui/display/Table';
import { User } from 'entities/User';
import { USERS_MOCK } from 'entities/User/mock';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { COLUMNS } from './content';

export const EmployeesTable: FC = () => {
    const { setIsViewEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const { setEmployeeForView } = useEmployeesActionsStore.use.actions();

    const handleRowClick = (employee: User) => {
        setEmployeeForView(employee);
        setIsViewEmployeeModalOpen(true);
    };

    return (
        <Table<User>
            columns={COLUMNS}
            dataSource={mapDataToTableEntries(USERS_MOCK)}
            onRowClick={handleRowClick}
        />
    );
};
