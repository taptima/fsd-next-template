import type { FC } from 'react';
import type { DynamicModalProps } from 'shared/types/modal';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { DataList } from 'shared/ui/display/DataList';
import { Screen } from 'shared/ui/feedback/Screen';
import { Button } from 'shared/ui/inputs/Button';
import { getModalBlockAction } from 'entities/Blockable/model/helper/getModalBlockAction';
import { mapEmployeeToDataList } from 'entities/User/model/mapper/mapEmployeeToDataList';
import { useUserActionsCheck } from 'entities/User/model/service/useUserActionsCheck';
import { useEmployee } from 'pages/admin/EmployeesPage/api/swr/useEmployee';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';

type Props = DynamicModalProps;

export const ViewEmployeeModal: FC<Props> = (props) => {
    const { open, onCancel } = props;
    const employeeForView = useEmployeesActionsStore.use.employeeForView();
    const { data, isLoading } = useEmployee(employeeForView?.id);
    const fullName = getFullName(data ?? employeeForView);
    const {
        setEmployeeForEdit,
        setEmployeeForBlocking,
        setEmployeeForUnblocking,
        setEmployeeForDeletion,
        setEmployeeForChangingPassword,
    } = useEmployeesActionsStore.use.actions();
    const {
        setIsEditEmployeeModalOpen,
        setIsViewEmployeeModalOpen,
        setIsBlockEmployeeModalOpen,
        setIsUnblockEmployeeModalOpen,
        setIsDeleteEmployeeModalOpen,
        setIsChangeEmployeePasswordModalOpen,
    } = useEmployeesPageModalStore.use.actions();
    const { isCurrentUser } = useUserActionsCheck(employeeForView);

    const handleEditButtonClick = () => {
        setEmployeeForEdit(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsEditEmployeeModalOpen(true);
    };

    const handleBlockButtonClick = () => {
        setEmployeeForBlocking(employeeForView);
        setIsBlockEmployeeModalOpen(true);
    };

    const handleUnblockButtonClick = () => {
        setEmployeeForUnblocking(employeeForView);
        setIsUnblockEmployeeModalOpen(true);
    };

    const handleDeleteButtonClick = () => {
        setEmployeeForDeletion(employeeForView);
        setIsDeleteEmployeeModalOpen(true);
    };

    const handleChangeButtonClick = () => {
        setEmployeeForChangingPassword(employeeForView);
        setIsChangeEmployeePasswordModalOpen(true);
    };

    return (
        <Screen
            open={open}
            onCancel={onCancel}
            title={fullName}
            isLoading={isLoading}
            content={<DataList data={mapEmployeeToDataList(data)} />}
            topActions={
                <>
                    {employeeForView && (
                        <Button
                            type="secondary"
                            disabled={isCurrentUser}
                            {...getModalBlockAction({
                                blockable: data,
                                lockAction: handleBlockButtonClick,
                                unlockAction: handleUnblockButtonClick,
                            })}
                        />
                    )}
                    <Button type="secondary" onClick={handleEditButtonClick}>
                        Редактировать
                    </Button>
                    <Button type="secondary" onClick={handleChangeButtonClick}>
                        Сменить пароль
                    </Button>
                    <Button
                        type="secondary"
                        disabled={isCurrentUser}
                        onClick={handleDeleteButtonClick}
                    >
                        Удалить
                    </Button>
                </>
            }
        />
    );
};
