import type { Rule } from 'antd/es/form';
import { decorateNumber } from 'shared/lib/helpers/decorateNumber';
import {
    lengthSymbols,
    maxSymbols,
    minSymbols,
    requiredMessage,
    requiredFileMessage,
} from './messages';

export const lengthRule = (length: number): Rule => ({
    transform: (value: string) => value.replace(/ |-/g, ''),
    len: length,
    message: lengthSymbols(length),
});

export const minLengthRule = (min: number): Rule => ({
    min,
    message: minSymbols(min),
});

export const maxLengthRule = (max: number): Rule => ({
    max,
    message: maxSymbols(max),
});

export const minValueRule = (min: number): Rule => ({
    validator(_, value) {
        if (!value || value < min) {
            return Promise.reject(
                new Error(`Значение должно быть больше или равно ${decorateNumber(min)}`),
            );
        }

        return Promise.resolve();
    },
});

export const maxValueRule = (max: number): Rule => ({
    validator(_, value) {
        if (value > max) {
            return Promise.reject(new Error(`Значение не должно превышать ${decorateNumber(max)}`));
        }

        return Promise.resolve();
    },
});

export const NAME_RULE: Rule = {
    validator(_, value) {
        if (value?.match(/[`!@№#$%^&*()_+=[\]{};':"\\|,.<>/?~\d]/g)) {
            return Promise.reject(new Error('Поле не должно содержать цифры и спецсимволы'));
        }

        return Promise.resolve();
    },
};

export const PHONE_NUMBER_RULE: Rule = {
    validator(_, value) {
        if (value && String(value).length < 11) {
            return Promise.reject(new Error('Введите реальный номер'));
        }

        return Promise.resolve();
    },
};

export const EMAIL_RULE: Rule = {
    type: 'email',
    message: 'Введите корректный E-mail',
};

export const NUMBER_RULE: Rule = {
    transform: Number,
    type: 'number',
    message: 'Поле должно содержать число',
};

export const REQUIRED_FILE_RULE: Rule = {
    required: true,
    message: requiredFileMessage,
};

export const REQUIRED_RULE: Rule = {
    required: true,
    message: requiredMessage,
    validator(_, value) {
        if (!value || String(value).trim().length === 0) {
            return Promise.reject(new Error(requiredMessage));
        }

        return Promise.resolve();
    },
};
