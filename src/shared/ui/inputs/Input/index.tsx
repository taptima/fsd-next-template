import BaseInput, { InputProps as BaseInputProps } from 'antd/es/input';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from 'shared/ui/inputs/common/input.module.scss';

export type InputProps<Form = unknown> = BaseInputProps & ControlledInputProps<Form>;

export function Input<Form>(props: InputProps<Form>) {
    const { status, className, labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseInput
                    status={status}
                    className={clsx(styles.input, className)}
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
