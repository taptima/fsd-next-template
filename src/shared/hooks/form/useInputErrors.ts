import type { FieldErrors, FieldValues } from 'react-hook-form';
import type { InputProps } from 'shared/ui/inputs/Input';

export function useInputErrors<T extends FieldValues>(
    errors: FieldErrors<T>,
): (field: keyof T) => Partial<Pick<InputProps, 'description' | 'status'>> {
    return (field) => {
        const errorMessage = errors[field]?.message;

        if (typeof errorMessage === 'string') {
            return {
                description: errorMessage,
                status: 'error',
            };
        }

        return {};
    };
}
