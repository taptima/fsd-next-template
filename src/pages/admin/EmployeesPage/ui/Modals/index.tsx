import type { FC } from 'react';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { AddEmployeeModal } from './AddEmployeeModal/dynamic';
import { BlockEmployeeModal } from './BlockEmployeeModal/dynamic';
import { ChangePasswordEmployeeModal } from './ChangePasswordEmployeeModal/dynamic';
import { DeleteEmployeeModal } from './DeleteEmployeeModal/dynamic';
import { EditEmployeeModal } from './EditEmployeeModal/dynamic';
import { UnblockEmployeeModal } from './UnblockEmployeeModal/dynamic';
import { ViewEmployeeModal } from './ViewEmployeeModal/dynamic';

export const Modals: FC = () => {
    const isAddEmployeeModalOpen = useEmployeesPageModalStore.use.isAddEmployeeModalOpen();
    const isEditEmployeeModalOpen = useEmployeesPageModalStore.use.isEditEmployeeModalOpen();
    const isDeleteEmployeeModalOpen = useEmployeesPageModalStore.use.isDeleteEmployeeModalOpen();
    const isViewEmployeeModalOpen = useEmployeesPageModalStore.use.isViewEmployeeModalOpen();
    const isBlockEmployeeModalOpen = useEmployeesPageModalStore.use.isBlockEmployeeModalOpen();
    const isUnblockEmployeeModalOpen = useEmployeesPageModalStore.use.isUnblockEmployeeModalOpen();
    const isChangePasswordEmployeeModalOpen =
        useEmployeesPageModalStore.use.isChangePasswordEmployeeModalOpen();

    const {
        setIsAddEmployeeModalOpen,
        setIsEditEmployeeModalOpen,
        setIsDeleteEmployeeModalOpen,
        setIsViewEmployeeModalOpen,
        setIsBlockEmployeeModalOpen,
        setIsUnblockEmployeeModalOpen,
        setIsChangePasswordEmployeeModalOpen,
    } = useEmployeesPageModalStore.use.actions();

    return (
        <>
            <AddEmployeeModal
                open={isAddEmployeeModalOpen}
                onClose={() => setIsAddEmployeeModalOpen(false)}
            />
            <EditEmployeeModal
                open={isEditEmployeeModalOpen}
                onClose={() => setIsEditEmployeeModalOpen(false)}
            />
            <DeleteEmployeeModal
                open={isDeleteEmployeeModalOpen}
                onCancel={() => setIsDeleteEmployeeModalOpen(false)}
            />
            <ViewEmployeeModal
                open={isViewEmployeeModalOpen}
                onClose={() => setIsViewEmployeeModalOpen(false)}
            />
            <BlockEmployeeModal
                open={isBlockEmployeeModalOpen}
                onCancel={() => setIsBlockEmployeeModalOpen(false)}
            />
            <UnblockEmployeeModal
                open={isUnblockEmployeeModalOpen}
                onCancel={() => setIsUnblockEmployeeModalOpen(false)}
            />
            <ChangePasswordEmployeeModal
                open={isChangePasswordEmployeeModalOpen}
                onCancel={() => setIsChangePasswordEmployeeModalOpen(false)}
            />
        </>
    );
};
