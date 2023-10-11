import { string } from 'yup';
import { requiredField } from './messages';

export const passwordValidationSchema = string()
    .required(requiredField)
    .matches(
        /^[\w#?!@$%^&*-]+$/i,
        'Пароль может содержать только латинские буквы, цифры и спецсимволы',
    )
    .min(6, 'Пароль должен содержать не менее 6 символов');
