import { string } from 'yup';
import { fieldRequiredMessage } from './messages';

export const emailValidation = string().trim().email('Введите корректный E-Mail');

export const requiredEmailValidation = emailValidation.required(fieldRequiredMessage);
