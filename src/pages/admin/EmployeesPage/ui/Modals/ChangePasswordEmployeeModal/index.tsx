import type { FC } from 'react';
import { Flex, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import type { DynamicModalProps } from 'shared/types/modal';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { REQUIRED_RULE } from 'shared/lib/validation/rules';
import { Button } from 'shared/ui/inputs/Button';
import { PasswordInput } from 'shared/ui/inputs/PasswordInput';
import { PASSWORD_RULES, PASSWORD_CONFIRMATION_RULE } from 'entities/User/model/validation/rules';
import { Form as BaseForm } from 'features/form/Form';
import { useChangePasswordEmployeeMutation } from 'pages/admin/EmployeesPage/model/api/swr/useChangePasswordEmployeeMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { useEmployeesPageModalStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageModalsStore';
import { PasswordTooltipList } from 'pages/admin/EmployeesPage/ui/Modals/common/PasswordTooltipList';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

export const ChangePasswordEmployeeModal: FC<Props> = (props) => {
    const { open, onCancel, ...restProps } = props;
    const employeeForChangingPassword = useEmployeesActionsStore.use.employeeForChangingPassword();
    const { id } = employeeForChangingPassword ?? {};
    const { isMutating, trigger } = useChangePasswordEmployeeMutation();
    const { setIsChangePasswordEmployeeModalOpen } = useEmployeesPageModalStore.use.actions();
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = useForm();

    const handleConfirmButtonClick = async () => {
        const values = await form.validateFields();
        const response = await trigger({
            id: Number(id),
            password: values.password,
        });

        handleApiErrors({
            response,
            onSuccess: () => {
                setIsChangePasswordEmployeeModalOpen(false);
                messageApi.open({
                    type: 'success',
                    content: 'Пароль успешно изменен',
                });
            },
            onError: () => {
                messageApi.open({
                    type: 'error',
                    content: 'При смене пароля произошла ошибка',
                });
            },
        });
    };

    return (
        <>
            {contextHolder}
            <ActionModal
                onCancel={onCancel}
                title="Смена пароля"
                open={open}
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
                            Изменить
                        </Button>
                    </>
                }
                {...restProps}
            >
                <BaseForm form={form}>
                    <Flex vertical gap={10}>
                        <PasswordInput
                            disabled={isMutating}
                            placeholder="Введите новый пароль"
                            labelProps={{
                                text: 'Введите новый пароль',
                                tooltipText: <PasswordTooltipList />,
                                maxWidthTooltip: true,
                            }}
                            formItemProps={{
                                name: 'password',
                                rules: [REQUIRED_RULE, ...PASSWORD_RULES],
                            }}
                        />

                        <PasswordInput
                            disabled={isMutating}
                            placeholder="Повторите пароль"
                            labelProps={{
                                text: 'Повторите пароль',
                                tooltipText: 'Пароли должны совпадать',
                                maxWidthTooltip: true,
                            }}
                            formItemProps={{
                                name: 'confirmPassword',
                                dependencies: ['password'],
                                rules: [REQUIRED_RULE, PASSWORD_CONFIRMATION_RULE],
                            }}
                        />
                    </Flex>
                </BaseForm>
            </ActionModal>
        </>
    );
};
