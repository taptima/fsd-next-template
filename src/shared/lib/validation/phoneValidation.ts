import { string } from 'yup';
import { sanitizePhone } from 'shared/lib/helpers/sanitizePhone';
import { fieldRequiredMessage } from 'shared/lib/validation/messages';

export const phoneValidation = string()
    .transform(sanitizePhone)
    .matches(/(^\+7\d{10}$)|(^$)/, 'Введите реальный номер');
export const requiredPhoneValidation = phoneValidation.required(fieldRequiredMessage);
