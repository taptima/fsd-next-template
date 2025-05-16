import type { FC } from 'react';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { AddEmployeeModal } from './AddEmployeeModal/dynamic';
import { BlockEmployeeModal } from './BlockEmployeeModal/dynamic';
import { ChangeEmployeePasswordModal } from './ChangeEmployeePasswordModal/dynamic';
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
    const isChangeEmployeePasswordModalOpen =
        useEmployeesPageModalStore.use.isChangeEmployeePasswordModalOpen();

    const {
        setIsAddEmployeeModalOpen,
        setIsEditEmployeeModalOpen,
        setIsDeleteEmployeeModalOpen,
        setIsViewEmployeeModalOpen,
        setIsBlockEmployeeModalOpen,
        setIsUnblockEmployeeModalOpen,
        setIsChangeEmployeePasswordModalOpen,
    } = useEmployeesPageModalStore.use.actions();

    return (
        <>
            <AddEmployeeModal
                open={isAddEmployeeModalOpen}
                onCancel={() => setIsAddEmployeeModalOpen(false)}
            />
            <EditEmployeeModal
                open={isEditEmployeeModalOpen}
                onCancel={() => setIsEditEmployeeModalOpen(false)}
            />
            <DeleteEmployeeModal
                open={isDeleteEmployeeModalOpen}
                onCancel={() => setIsDeleteEmployeeModalOpen(false)}
            />
            <ViewEmployeeModal
                open={isViewEmployeeModalOpen}
                onCancel={() => setIsViewEmployeeModalOpen(false)}
            />
            <BlockEmployeeModal
                open={isBlockEmployeeModalOpen}
                onCancel={() => setIsBlockEmployeeModalOpen(false)}
            />
            <UnblockEmployeeModal
                open={isUnblockEmployeeModalOpen}
                onCancel={() => setIsUnblockEmployeeModalOpen(false)}
            />
            <ChangeEmployeePasswordModal
                open={isChangeEmployeePasswordModalOpen}
                onCancel={() => setIsChangeEmployeePasswordModalOpen(false)}
            />
        </>
    );
};
