import type { Rule } from 'antd/es/form';
import { maxLengthRule } from 'shared/lib/validation/rules';
import { RoleTypeEnum } from 'entities/User/model/types/roleTypeEnum';

export const EMPLOYEE_ROLE_RULE: Rule = {
    enum: [RoleTypeEnum.RoleAdmin, RoleTypeEnum.RoleSuperAdmin],
};

export const LOGIN_RULE: Rule = {
    transform: String.prototype.trim,
    ...maxLengthRule(50),
};

export const PSEUDO_PASSWORD_RULE: Rule = maxLengthRule(50);

export const PASSWORD_RULES: Rule[] = [
    {
        pattern: /^[\w#?!@$%^&*-]+$/i,
        message: 'Пароль может содержать только латинские буквы, цифры и спецсимволы',
    },
    {
        pattern: /^(?=.*[A-Z])/,
        message: 'Должна быть как минимум одна заглавная буква',
    },
    {
        pattern: /^(?=.*[a-z])/,
        message: 'Должна быть как минимум одна строчная буква',
    },
    {
        pattern: /^(?=.*[0-9])/,
        message: 'Должна быть как минимум одна цифра',
    },
    PSEUDO_PASSWORD_RULE,
];

export const PASSWORD_CONFIRMATION_RULE: Rule = ({ getFieldValue }) => ({
    validator(_, value) {
        if (value && value !== getFieldValue('password')) {
            return Promise.reject(new Error('Пароли должны совпадать'));
        }

        return Promise.resolve();
    },
});
