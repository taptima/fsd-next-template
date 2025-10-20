import type { FormInstance, FormProps as BaseFormProps } from 'antd/es/form';
import type { ReactNode } from 'react';
import type { FieldLabelProps } from 'shared/ui/display/FieldLabel';
import type { FormItemProps } from 'shared/ui/inputs/FormItem';

export type FormProps = {
    formProps: Omit<BaseFormProps, 'form'> & {
        form: FormInstance;
    };
    isMutating?: boolean;
    actions?: ReactNode;
};

export type FormVariantProps = {
    variant: 'add' | 'edit';
};

export type ControlledInputProps<Form = unknown> = {
    labelProps?: FieldLabelProps;
    formItemProps?: FormItemProps<Form>;
};
