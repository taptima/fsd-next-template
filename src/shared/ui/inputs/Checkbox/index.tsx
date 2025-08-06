import BaseCheckbox, { CheckboxProps as BaseCheckboxProps } from 'antd/es/checkbox/Checkbox';
import { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';

export type CheckboxProps<Form = unknown> = BaseCheckboxProps & ControlledInputProps<Form>;

export function Checkbox<Form>(props: CheckboxProps<Form>) {
    const { className, labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem valuePropName="checked" {...formItemProps}>
                <BaseCheckbox className={className} {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
