import { FieldValues, useForm as useBaseForm, UseFormProps } from 'react-hook-form';
import type { FormSubmitHandler } from 'shared/types/form';
import { useFieldErrors } from 'shared/lib/hooks/form/useFieldErrors';

type Parameters<Form extends FieldValues> = UseFormProps<Form> & {
    onSubmit: FormSubmitHandler<Form>;
};

export function useForm<Form extends FieldValues>(parameters: Parameters<Form>) {
    const { onSubmit } = parameters;
    const baseForm = useBaseForm<Form>(parameters);
    const { formState, reset, setError, handleSubmit, ...restProps } = baseForm;
    const { errors } = formState;
    const getFieldError = useFieldErrors<Form>(errors);

    return {
        ...restProps,
        formState,
        reset,
        getFieldError,
        setError,
        handleSubmit,
        onSubmit: handleSubmit((data) => onSubmit(data, baseForm)),
    };
}
