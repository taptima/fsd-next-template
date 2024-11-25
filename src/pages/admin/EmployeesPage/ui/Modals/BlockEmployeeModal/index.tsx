import type { FC } from 'react';
import { message } from 'antd';
import type { DynamicModalProps } from 'shared/types/modal';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { Accent } from 'shared/ui/display/Accent';
import { Button } from 'shared/ui/inputs/Button';
import { useBlockEmployeeMutation } from 'pages/admin/EmployeesPage/model/api/swr/useBlockEmployeeMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const BlockEmployeeModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const employeeForBlocking = useEmployeesActionsStore.use.employeeForBlocking();
    const { id } = employeeForBlocking ?? {};
    const fullName = getFullName(employeeForBlocking);
    const { isMutating, trigger } = useBlockEmployeeMutation();
    const { setIsBlockEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const [messageApi, contextHolder] = message.useMessage();

    const handleConfirmButtonClick = async () => {
        //! статус пока временно
        const response = await trigger({ id: Number(id), status: true });

        handleApiErrors({
            response,
            onSuccess: () => {
                setIsBlockEmployeeModalOpen(false);
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Сотрудник <Accent>{fullName}</Accent> заблокирован
                        </>
                    ),
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При блокировке сотрудника произошла ошибка',
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <ActionModal
                onCancel={onCancel}
                title="Заблокировать сотрудника"
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
                            Заблокировать
                        </Button>
                    </>
                }
                {...restProps}
            >
                <span>
                    Вы действительно хотите заблокировать <Accent>{fullName}</Accent>?
                </span>
            </ActionModal>
        </>
    );
};
