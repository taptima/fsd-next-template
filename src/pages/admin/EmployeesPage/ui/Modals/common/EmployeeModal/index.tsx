import type { FC, ReactNode } from 'react';
import Flex from 'antd/es/flex';
import type { FormProps, RequiredProps } from 'shared/types/form';
import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { NAME_RULE, REQUIRED_RULE } from 'shared/lib/validation/rules';
import { Drawer, DrawerProps } from 'shared/ui/feedback/Drawer';
import { Input } from 'shared/ui/inputs/Input';
import { PasswordInput } from 'shared/ui/inputs/PasswordInput';
import { PhoneNumberInput } from 'shared/ui/inputs/PhoneNumberInput';
import { Select } from 'shared/ui/inputs/Select';
import { EMPLOYEE_ROLE_OPTIONS } from 'entities/User/model/const/employeeRoleOptions';
import {
    LOGIN_RULE,
    PASSWORD_RULES,
    EMPLOYEE_ROLE_RULE,
    PHONE_NUMBER_RULE,
    EMAIL_RULE,
} from 'entities/User/model/validation/rules';
import { PasswordTooltipList } from 'pages/admin/EmployeesPage/ui/Modals/common/PasswordTooltipList';

type Props = DrawerProps &
    FormProps &
    RequiredProps & {
        isMutating?: boolean;
        actions?: ReactNode;
        passwordRequired?: boolean;
        changePassword?: ReactNode;
    };

export const EmployeeModal: FC<Props> = (props) => {
    const {
        open,
        onClose,
        isRequired,
        formProps,
        isMutating,
        actions,
        passwordRequired = true,
        changePassword,
        ...modalProps
    } = props;

    return (
        <Drawer open={open} onClose={onClose} headerBorder="Regular" width={600} {...modalProps}>
            <Drawer.Form {...formProps}>
                <Drawer.ScrollWrapper>
                    <Select<EmployeeForm>
                        disabled={isMutating}
                        options={EMPLOYEE_ROLE_OPTIONS}
                        placeholder="Выберите должность"
                        labelProps={{
                            text: 'Роль',
                        }}
                        formItemProps={{
                            name: 'role',
                            rules: [REQUIRED_RULE, EMPLOYEE_ROLE_RULE],
                        }}
                    />
                    <Input<EmployeeForm>
                        disabled={isMutating}
                        placeholder="Введите фамилию"
                        labelProps={{
                            text: 'Фамилия',
                        }}
                        formItemProps={{
                            name: 'surname',
                            rules: [REQUIRED_RULE, NAME_RULE],
                        }}
                    />
                    <Input<EmployeeForm>
                        disabled={isMutating}
                        placeholder="Введите имя"
                        labelProps={{
                            text: 'Имя',
                        }}
                        formItemProps={{
                            name: 'firstName',
                            rules: [REQUIRED_RULE, NAME_RULE],
                        }}
                    />
                    <Input<EmployeeForm>
                        disabled={isMutating}
                        placeholder="Введите отчество"
                        labelProps={{
                            text: 'Отчество',
                        }}
                        formItemProps={{
                            name: 'middleName',
                            rules: [REQUIRED_RULE, NAME_RULE],
                        }}
                    />
                    <Input<EmployeeForm>
                        disabled={isMutating}
                        placeholder="Введите Email"
                        labelProps={{
                            text: 'Email',
                        }}
                        formItemProps={{
                            name: 'email',
                            rules: [REQUIRED_RULE, EMAIL_RULE],
                        }}
                    />
                    <PhoneNumberInput<EmployeeForm>
                        disabled={isMutating}
                        placeholder="+7"
                        labelProps={{
                            text: 'Телефон',
                        }}
                        formItemProps={{
                            name: 'phone',
                            rules: [REQUIRED_RULE, PHONE_NUMBER_RULE],
                        }}
                    />
                    <Input<EmployeeForm>
                        disabled={isMutating}
                        placeholder="Введите логин"
                        labelProps={{
                            text: 'Логин',
                            tooltipText: 'Логин должен быть уникальным',
                        }}
                        formItemProps={{
                            name: 'login',
                            rules: [REQUIRED_RULE, LOGIN_RULE],
                        }}
                    />
                    {passwordRequired && (
                        <PasswordInput<EmployeeForm>
                            disabled={isMutating}
                            placeholder="Введите пароль"
                            labelProps={{
                                text: 'Пароль',
                                tooltipText: <PasswordTooltipList />,
                                maxWidthTooltip: true,
                            }}
                            formItemProps={{
                                name: 'password',
                                rules: isRequired
                                    ? [REQUIRED_RULE, ...PASSWORD_RULES]
                                    : PASSWORD_RULES,
                            }}
                        />
                    )}
                    <Flex>{changePassword}</Flex>
                </Drawer.ScrollWrapper>
                <Drawer.Footer>
                    <Flex gap={8} justify="flex-end">
                        {actions}
                    </Flex>
                </Drawer.Footer>
            </Drawer.Form>
        </Drawer>
    );
};
