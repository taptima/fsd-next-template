import type { FC } from 'react';
import { Flex } from 'antd';
import type { DynamicDrawerProps } from 'shared/types/modal';
import PencilIcon from 'shared/assets/icons/pencil.svg';
import TrashIcon from 'shared/assets/icons/trash-2.svg';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { Button } from 'shared/ui/inputs/Button';
import { getModalBlockAction } from 'entities/Blockable/model/lib/helpers/getModalBlockAction';
import { ActivityStatus } from 'entities/Blockable/ui/ActivityStatus';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { ViewModal } from 'widgets/ViewModal';

type Props = DynamicDrawerProps;

export const ViewEmployeeModal: FC<Props> = (props) => {
    const { open, onClose } = props;

    const employeeForView = useEmployeesActionsStore.use.employeeForView();
    const { username, role, phone, banned, lastname, firstname, middlename } =
        employeeForView ?? {};
    const fullName = getFullName(employeeForView);
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
        setIsChangePasswordEmployeeModalOpen,
    } = useEmployeesPageModalStore.use.actions();

    const handleEditButtonClick = () => {
        setEmployeeForEdit(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsEditEmployeeModalOpen(true);
    };

    const handleBlockButtonClick = () => {
        setEmployeeForBlocking(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsBlockEmployeeModalOpen(true);
    };

    const handleUnblockButtonClick = () => {
        setEmployeeForUnblocking(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsUnblockEmployeeModalOpen(true);
    };

    const handleDeleteButtonClick = () => {
        setEmployeeForDeletion(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsDeleteEmployeeModalOpen(true);
    };

    const handleChangeButtonClick = () => {
        setEmployeeForChangingPassword(employeeForView);
        setIsViewEmployeeModalOpen(false);
        setIsChangePasswordEmployeeModalOpen(true);
    };

    const content = (
        <>
            <Flex>
                <Flex vertical flex={1} gap={16}>
                    <p>Статус</p>
                    <p>Фамилия</p>
                    <p>Имя</p>
                    <p>Отчество</p>
                    <p>Роль</p>
                    <p>Email</p>
                    <p>Телефон</p>
                    <p>Логин</p>
                </Flex>
                <Flex vertical flex={1} gap={16}>
                    <p>{banned && <ActivityStatus banned={banned} />}</p>
                    <p>{lastname}</p>
                    <p>{firstname}</p>
                    <p>{middlename}</p>
                    <p>{role && MAP_USER_ROLE_TO_TEXT[role]}</p>
                    <p>{phone}</p>
                    <p>{username}</p>
                </Flex>
            </Flex>
            <Flex>
                <Button type="secondary" onClick={handleChangeButtonClick}>
                    Сменить пароль
                </Button>
            </Flex>
        </>
    );

    const actions = (
        <>
            {employeeForView && (
                <Button
                    type="secondary"
                    padding="Large"
                    {...getModalBlockAction({
                        blockable: employeeForView,
                        lockAction: handleBlockButtonClick,
                        unlockAction: handleUnblockButtonClick,
                    })}
                />
            )}
            <Button
                type="secondary"
                padding="Large"
                icon={<PencilIcon width={16} />}
                onClick={handleEditButtonClick}
            >
                Редактировать
            </Button>
            <Button
                type="secondaryDanger"
                padding="Large"
                icon={<TrashIcon width={16} />}
                onClick={handleDeleteButtonClick}
            >
                Удалить
            </Button>
        </>
    );

    return (
        <ViewModal
            open={open}
            onClose={onClose}
            title={fullName}
            content={content}
            actions={actions}
        />
    );
};
