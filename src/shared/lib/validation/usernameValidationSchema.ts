import { string } from 'yup';
import { requiredField } from './messages';

// TODO: узнать что будет использоваться в качестве username
export const usernameValidationSchema = string().required(requiredField);
