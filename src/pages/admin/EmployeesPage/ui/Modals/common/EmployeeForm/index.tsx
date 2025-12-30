import type { FC } from 'react';
import type { FormProps, FormVariantProps } from 'shared/types/form';
import type { EmployeeForm as EmployeeFormEntity } from 'pages/admin/EmployeesPage/model/types/form';
import {
    EMAIL_RULE,
    NAME_RULE,
    PHONE_NUMBER_RULE,
    REQUIRED_RULE,
} from 'shared/lib/validation/rules';
import { Screen } from 'shared/ui/feedback/Screen';
import { Input } from 'shared/ui/inputs/Input';
import { PasswordInput } from 'shared/ui/inputs/PasswordInput';
import { PhoneNumberInput } from 'shared/ui/inputs/PhoneNumberInput';
import { Select } from 'shared/ui/inputs/Select';
import { EMPLOYEE_ROLE_OPTIONS } from 'entities/User/model/const/employeeRoleOptions';
import { useUserActionsCheck } from 'entities/User/model/service/useUserActionsCheck';
import { PASSWORD_RULES } from 'entities/User/model/validation/rules';
import { useEmployeesActionsStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesActionsStore';
import { PasswordTooltipList } from 'pages/admin/EmployeesPage/ui/Modals/common/PasswordTooltipList';

type Props = FormProps &
    FormVariantProps & {
        isMutating?: boolean;
    };

export const EmployeeForm: FC<Props> = (props) => {
    const { variant, formProps, isMutating } = props;
    const isAdd = variant === 'add';
    const employeeForEdit = useEmployeesActionsStore.use.employeeForEdit();
    const { isCurrentUser } = useUserActionsCheck(employeeForEdit);

    return (
        <Screen.Form {...formProps}>
            <Input<EmployeeFormEntity>
                disabled={isMutating}
                placeholder="Введите фамилию"
                labelProps={{
                    text: 'Фамилия',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'surname',
                    rules: [REQUIRED_RULE, NAME_RULE],
                }}
            />
            <Input<EmployeeFormEntity>
                disabled={isMutating}
                placeholder="Введите имя"
                labelProps={{
                    text: 'Имя',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'firstname',
                    rules: [REQUIRED_RULE, NAME_RULE],
                }}
            />
            <Input<EmployeeFormEntity>
                disabled={isMutating}
                placeholder="Введите отчество"
                labelProps={{
                    text: 'Отчество',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'middlename',
                    rules: [REQUIRED_RULE, NAME_RULE],
                }}
            />
            <Input<EmployeeFormEntity>
                disabled={isMutating}
                placeholder="Введите Email"
                labelProps={{
                    text: 'Email',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'email',
                    rules: [REQUIRED_RULE, EMAIL_RULE],
                }}
            />
            {isAdd && (
                <PasswordInput<EmployeeFormEntity>
                    disabled={isMutating}
                    placeholder="Введите пароль"
                    labelProps={{
                        text: 'Пароль',
                        tooltipText: <PasswordTooltipList />,
                        maxWidthTooltip: true,
                        required: isAdd,
                    }}
                    formItemProps={{
                        name: 'password',
                        rules: [REQUIRED_RULE, ...PASSWORD_RULES],
                    }}
                />
            )}
            <PhoneNumberInput<EmployeeFormEntity>
                disabled={isMutating}
                placeholder="Введите телефон"
                labelProps={{
                    text: 'Телефон',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'phone',
                    rules: [REQUIRED_RULE, PHONE_NUMBER_RULE],
                }}
            />
            <Select<EmployeeFormEntity>
                disabled={(!isAdd && isCurrentUser) || isMutating}
                options={EMPLOYEE_ROLE_OPTIONS}
                placeholder="Выберите роль"
                labelProps={{
                    text: 'Роль',
                    required: isAdd,
                }}
                formItemProps={{
                    name: 'role',
                    rules: [REQUIRED_RULE],
                }}
            />
        </Screen.Form>
    );
};
