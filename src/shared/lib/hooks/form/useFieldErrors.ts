import type { FieldErrors, FieldValues, FieldPath } from 'react-hook-form';
import { get } from 'react-hook-form';

type Return<Form extends FieldValues> = (field: FieldPath<Form>) => { error?: string };

export function useFieldErrors<Form extends FieldValues>(errors: FieldErrors<Form>): Return<Form> {
    return (field) => {
        const errorField = get(errors, field.toString());

        if (errorField) {
            if ('value' in errorField && typeof errorField.value.message === 'string') {
                return {
                    error: errorField.value.message,
                };
            }

            if (typeof errorField?.message === 'string') {
                return {
                    error: errorField.message,
                };
            }
        }

        return {};
    };
}
