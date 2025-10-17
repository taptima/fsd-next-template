import { string } from 'yup';
import { fieldRequiredMessage } from './messages';

export const requiredUsernameValidation = string().required(fieldRequiredMessage);
