import { string } from 'yup';
import { maxSymbols, minSymbols, fieldRequiredMessage } from 'shared/lib/validation/messages';

export const requiredFirstNameValidation = string()
    .required(fieldRequiredMessage)
    .min(1, minSymbols)
    .max(50, maxSymbols);
export const requiredSurnameValidation = string()
    .required(fieldRequiredMessage)
    .min(1, minSymbols)
    .max(50, maxSymbols);
export const patronymicValidation = string().max(50, maxSymbols);

export const nameValidation = string().trim().max(50, maxSymbols);
export const requiredNameValidation = nameValidation.required(fieldRequiredMessage);
