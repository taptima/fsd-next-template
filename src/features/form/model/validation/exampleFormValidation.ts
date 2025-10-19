import { object, ObjectSchema } from 'yup';
import type { ExampleForm } from 'features/form/model/types/form';
import { requiredEmailValidation } from 'shared/lib/validation/emailValidation';
import { requiredNameValidation } from 'shared/lib/validation/nameValidation';
import { requiredPhoneValidation } from 'shared/lib/validation/phoneValidation';

export const exampleFormValidation: ObjectSchema<ExampleForm> = object({
    name: requiredNameValidation,
    email: requiredEmailValidation,
    phone: requiredPhoneValidation,
});
