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

export const UnblockEmployeeModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const employeeForUnlocking = useEmployeesActionsStore.use.employeeForUnblocking();
    const { id } = employeeForUnlocking ?? {};
    const fullName = getFullName(employeeForUnlocking);
    const { isMutating, trigger } = useBlockEmployeeMutation();
    const { setIsUnblockEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const [messageApi, contextHolder] = message.useMessage();

    const handleConfirmButtonClick = async () => {
        //! статус пока временно
        const response = await trigger({ id: Number(id), status: false });

        handleApiErrors({
            response,
            onSuccess: () => {
                setIsUnblockEmployeeModalOpen(false);
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Сотрудник <Accent>{fullName}</Accent> разблокирован
                        </>
                    ),
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При разблокировке сотрудника произошла ошибка',
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <ActionModal
                onCancel={onCancel}
                title="Разблокировать сотрудника"
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
                            Разблокировать
                        </Button>
                    </>
                }
                {...restProps}
            >
                <span>
                    Вы действительно хотите разблокировать <Accent>{fullName}</Accent>?
                </span>
            </ActionModal>
        </>
    );
};
