import type { Rule } from 'antd/es/form';
import { sanitizePhone } from 'shared/lib/helpers/sanitizePhone';
import { maxLengthRule } from 'shared/lib/validation/rules';
import { Role } from 'entities/User/model/types/role';

export const EMPLOYEE_ROLE_RULE: Rule = {
    enum: [Role.RoleAdmin, Role.RoleSuperAdmin],
};

export const EMAIL_RULE: Rule = {
    type: 'email',
    message: 'Введите корректный email адрес',
};

export const LOGIN_RULE: Rule = {
    transform: String.prototype.trim,
    ...maxLengthRule(50),
};

export const PHONE_NUMBER_RULE: Rule = {
    transform: sanitizePhone,
    validator(_, value) {
        if (!value.match(/(^\+7\d{10}$)|(^$)/g)) {
            return Promise.reject(new Error('Введите реальный номер'));
        }

        return Promise.resolve();
    },
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
