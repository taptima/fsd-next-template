import { string } from 'yup';
import { requiredField } from './messages';

export const usernameValidationSchema = string().required(requiredField);
