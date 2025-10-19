import type { Control, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

export type ControlledProps<Form extends FieldValues> = {
    name: FieldPath<Form>;
    control: Control<Form>;
};

export type FormSubmitHandler<FormData extends FieldValues> = (
    data: FormData,
    helpers: UseFormReturn<FormData>,
) => void | Promise<void>;
