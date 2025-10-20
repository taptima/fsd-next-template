import BaseInput, { InputProps as BaseInputProps } from 'antd/es/input';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';

export type PasswordInputProps<Form> = BaseInputProps & ControlledInputProps<Form>;

export function PasswordInput<Form>(props: PasswordInputProps<Form>) {
    const { labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseInput.Password {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
