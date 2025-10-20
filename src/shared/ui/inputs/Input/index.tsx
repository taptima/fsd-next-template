import BaseInput, { InputProps as BaseInputProps } from 'antd/es/input';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';

export type InputProps<Form = unknown> = BaseInputProps & ControlledInputProps<Form>;

export function Input<Form>(props: InputProps<Form>) {
    const { labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseInput {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
