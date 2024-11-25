'use client';

import type { FC } from 'react';
import InfoIcon from 'shared/assets/icons/info.svg';
import { Pagination } from 'shared/ui/navigation/Pagination';
import { PageTable } from 'widgets/PageTable';
import { TABS } from './content';
import { useEmployeesPageModalStore } from './model/store/useEmployeesPageModalsStore';
import { EmployeesTable } from './ui/EmployeesTable';
import { Modals } from './ui/Modals';

export const EmployeesPage: FC = () => {
    const { setIsAddEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();

    return (
        <>
            <PageTable
                cardProps={{
                    border: 'None',
                    variant: 'Gray',
                }}
                toolbarProps={{
                    title: 'Справочник',
                    Icon: InfoIcon,
                    buttonProps: {
                        children: 'Добавить сотрудника',
                        onClick: () => setIsAddEmployeeModalOpen(true),
                    },
                }}
                tabsProps={{
                    items: TABS,
                }}
            >
                <EmployeesTable />
            </PageTable>
            <Pagination placement="Fixed" />
            <Modals />
        </>
    );
};
