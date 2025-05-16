import type { FC } from 'react';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicModalProps } from 'shared/types/modal';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { Accent } from 'shared/ui/display/Accent';
import { Button } from 'shared/ui/inputs/Button';
import { useDeleteEmployeeMutation } from 'pages/admin/EmployeesPage/api/swr/useDeleteEmployeeMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const DeleteEmployeeModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const { setIsViewEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const employeeForDeletion = useEmployeesActionsStore.use.employeeForDeletion();
    const { id } = employeeForDeletion ?? {};
    const fullName = getFullName(employeeForDeletion);
    const { isMutating, trigger } = useDeleteEmployeeMutation();
    const [messageApi, contextHolder] = useMessage();

    const handleConfirm = async () => {
        if (!id) {
            return;
        }

        const response = await trigger({ id });

        handleApiErrors({
            response,
            onSuccess: () => {
                onCancel();
                setIsViewEmployeeModalOpen(false);
                messageApi.open({
                    type: 'success',
                    content: (
                        <>
                            Сотрудник <Accent>{fullName}</Accent> удалён
                        </>
                    ),
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <ActionModal
                onCancel={onCancel}
                title="Удаление сотрудника"
                actions={
                    <>
                        <Button type="secondary" disabled={isMutating} onClick={onCancel}>
                            Отменить
                        </Button>
                        <Button type="primary" danger loading={isMutating} onClick={handleConfirm}>
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
