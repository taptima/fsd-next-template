import type { FC } from 'react';
import { useEmployeesActionsStore } from 'views/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'views/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import type { User } from 'entities/User';
import { Table } from 'shared/ui/display/Table';
import { getTableBlockAction } from 'entities/Blockable/model/helper/getTableBlockAction';
import { useUserActionsCheck } from 'entities/User/model/service/useUserActionsCheck';

type Props = {
    data: User;
};

export const Actions: FC<Props> = (props) => {
    const { data } = props;
    const {
        setIsEditEmployeeModalOpen,
        setIsDeleteEmployeeModalOpen,
        setIsBlockEmployeeModalOpen,
        setIsUnblockEmployeeModalOpen,
    } = useEmployeesPageModalStore.use.actions();
    const {
        setEmployeeForEdit,
        setEmployeeForDeletion,
        setEmployeeForBlocking,
        setEmployeeForUnblocking,
    } = useEmployeesActionsStore.use.actions();
    const { isCurrentUser } = useUserActionsCheck(data);

    return (
        <Table.Actions
            items={[
                getTableBlockAction({
                    blockable: data,
                    disabled: isCurrentUser,
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
                    disabled: isCurrentUser,
                    onClick: () => {
                        setEmployeeForDeletion(data);
                        setIsDeleteEmployeeModalOpen(true);
                    },
                },
            ]}
        />
    );
};
