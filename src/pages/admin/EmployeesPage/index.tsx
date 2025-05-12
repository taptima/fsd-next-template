'use client';

import type { FC } from 'react';
import { Button } from 'shared/ui/inputs/Button';
import { WithModalsReset } from 'shared/providers/WithModalsReset';
import { PageTable } from 'widgets/PageTable';
// import { useEmployees } from './api/swr/useEmployees';
import { useEmployeesPageModalStore } from './model/store/useEmployeesPageModalsStore';
import { EmployeesTable } from './ui/EmployeesTable';
import { Modals } from './ui/Modals';

const BaseEmployeesPage: FC = () => {
    const { setIsAddEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    // const { data } = useEmployees();
    // const { elements = [], pagination } = data ?? {};
    // const { itemsCount = 0 } = pagination ?? {};
    const itemsCount = 0;

    const handleAdd = () => {
        setIsAddEmployeeModalOpen(true);
    };

    return (
        <>
            <PageTable
                headerProps={{
                    title: 'Пользователи',
                    extra: [
                        <Button key="1" type="primary" onClick={handleAdd}>
                            Добавить
                        </Button>,
                    ],
                }}
                withPaginationOffset={!!itemsCount}
            >
                <EmployeesTable />
            </PageTable>
            <Modals />
        </>
    );
};

export const EmployeesPage = WithModalsReset(BaseEmployeesPage);
