import { mixed } from 'yup';
import { fileRequiredMessage, fileSizeMessage } from './messages';

const MAX_FILE_SIZE = 1000 * 1000 * 10; // bytes, 10 MB

export const requiredFileValidationSchema = mixed()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test('required', fileRequiredMessage, (value: any) => {
        return value && value.size !== 0;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .test('fileSize', fileSizeMessage, (value: any) => {
        return value && value.size <= MAX_FILE_SIZE;
    });
