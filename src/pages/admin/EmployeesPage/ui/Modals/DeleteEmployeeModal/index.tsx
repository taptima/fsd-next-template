import type { FC } from 'react';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicModalProps } from 'shared/types/modal';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { Accent } from 'shared/ui/display/Accent';
import { Button } from 'shared/ui/inputs/Button';
import { useDeleteEmployeeMutation } from 'pages/admin/EmployeesPage/model/api/swr/useDeleteEmployeeMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const DeleteEmployeeModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const employeeForDeletion = useEmployeesActionsStore.use.employeeForDeletion();
    const { id } = employeeForDeletion ?? {};
    const fullName = getFullName(employeeForDeletion);
    const { isMutating, trigger } = useDeleteEmployeeMutation();
    const { setIsDeleteEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const [messageApi, contextHolder] = useMessage();

    const handleConfirmButtonClick = async () => {
        const response = await trigger({ id: Number(id) });
        handleApiErrors({
            response,
            onSuccess: () => {
                setIsDeleteEmployeeModalOpen(false);
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Сотрудник <Accent>{fullName}</Accent> удален
                        </>
                    ),
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При удалении сотрудника произошла ошибка',
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <ActionModal
                onCancel={onCancel}
                title="Удалить сотрудника"
                actions={
                    <>
                        <Button
                            type="secondary"
                            padding="Large"
                            disabled={isMutating}
                            onClick={onCancel}
                        >
                            Отменить
                        </Button>
                        <Button
                            type="primary"
                            padding="Large"
                            loading={isMutating}
                            onClick={handleConfirmButtonClick}
                        >
                            Удалить
                        </Button>
                    </>
                }
                {...restProps}
            >
                <span>
                    Вы действительно хотите удалить <Accent>{fullName}</Accent>?
                </span>
            </ActionModal>
        </>
    );
};
