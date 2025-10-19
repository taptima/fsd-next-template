import { string } from 'yup';
import { fieldRequiredMessage } from './messages';

export const requiredPasswordValidation = string()
    .required(fieldRequiredMessage)
    .matches(
        /^[\w#?!@$%^&*-]+$/i,
        'Пароль может содержать только латинские буквы, цифры и спецсимволы',
    )
    .min(6, 'Пароль должен содержать не менее 6 символов');
