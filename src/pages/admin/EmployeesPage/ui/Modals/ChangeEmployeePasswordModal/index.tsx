import type { FC } from 'react';
import { useMemo } from 'react';
import Flex from 'antd/es/flex';
import { useForm } from 'antd/es/form/Form';
import useMessage from 'antd/es/message/useMessage';
import type { DynamicModalProps } from 'shared/types/modal';
import type { ChangeEmployeePasswordForm } from 'pages/admin/EmployeesPage/model/types/form';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { useFormInit } from 'shared/lib/hooks/form/useFormInit';
import { REQUIRED_RULE } from 'shared/lib/validation/rules';
import { Accent } from 'shared/ui/display/Accent';
import { Button } from 'shared/ui/inputs/Button';
import { PasswordInput } from 'shared/ui/inputs/PasswordInput';
import { PASSWORD_RULES, PASSWORD_CONFIRMATION_RULE } from 'entities/User/model/validation/rules';
import { Form as BaseForm } from 'features/form/Form';
import { useEditEmployeePasswordMutation } from 'pages/admin/EmployeesPage/api/swr/useEditEmployeePasswordMutation';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { PasswordTooltipList } from 'pages/admin/EmployeesPage/ui/Modals/common/PasswordTooltipList';
import { ActionModal } from 'widgets/ActionModal';

type Props = DynamicModalProps;

const FORM_ID = 'change-employee-password';

export const ChangeEmployeePasswordModal: FC<Props> = (props) => {
    const { open, onCancel, ...restProps } = props;
    const employeeForChangingPassword = useEmployeesActionsStore.use.employeeForChangingPassword();
    const { id } = employeeForChangingPassword ?? {};
    const initialValues: ChangeEmployeePasswordForm = useMemo(() => {
        return { password: '', confirmPassword: '' };
    }, []);
    const { isMutating, trigger } = useEditEmployeePasswordMutation();
    const [messageApi, contextHolder] = useMessage();
    const [form] = useForm();

    useFormInit({ form, open, initialValues });

    const handleFinish = async (values: ChangeEmployeePasswordForm) => {
        if (!id) {
            return;
        }

        const { password } = values;
        const response = await trigger({ id, password });

        handleApiErrors({
            response,
            onSuccess: () => {
                onCancel();
                messageApi.open({
                    type: 'info',
                    content: (
                        <>
                            Пароль сотрудника{' '}
                            <Accent>{getFullName(employeeForChangingPassword)}</Accent> изменён
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
                open={open}
                onCancel={onCancel}
                title="Смена пароля"
                actions={
                    <>
                        <Button type="secondary" disabled={isMutating} onClick={onCancel}>
                            Отменить
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            form={FORM_ID}
                            loading={isMutating}
                        >
                            Сохранить
                        </Button>
                    </>
                }
                {...restProps}
            >
                <BaseForm id={FORM_ID} form={form} onFinish={handleFinish}>
                    <Flex vertical gap={20}>
                        <PasswordInput<ChangeEmployeePasswordForm>
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

                        <PasswordInput<ChangeEmployeePasswordForm>
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
