import type { FC } from 'react';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicModalProps } from 'shared/types/modal';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { Accent } from 'shared/ui/display/Accent';
import { Button } from 'shared/ui/inputs/Button';
import { UserStateEnum } from 'entities/User';
import { useEditEmployeeStateMutation } from 'pages/admin/EmployeesPage/api/swr/useEditEmployeeStateMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const UnblockEmployeeModal: FC<Props> = (props) => {
    const { onCancel, ...restProps } = props;
    const employeeForUnlocking = useEmployeesActionsStore.use.employeeForUnblocking();
    const { id } = employeeForUnlocking ?? {};
    const fullName = getFullName(employeeForUnlocking);
    const { isMutating, trigger } = useEditEmployeeStateMutation();
    const [messageApi, contextHolder] = useMessage();

    const handleConfirm = async () => {
        if (!id) {
            return;
        }

        const response = await trigger({ id, state: UserStateEnum.Active });

        handleApiErrors({
            response,
            onSuccess: () => {
                onCancel();
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Пользователь <Accent>{fullName}</Accent> разблокирован
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
                title="Разблокировка пользователя"
                actions={
                    <>
                        <Button type="secondary" disabled={isMutating} onClick={onCancel}>
                            Отменить
                        </Button>
                        <Button type="primary" loading={isMutating} onClick={handleConfirm}>
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
