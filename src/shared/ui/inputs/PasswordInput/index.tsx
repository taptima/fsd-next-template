import BaseInput, { InputProps as BaseInputProps } from 'antd/es/input';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type PasswordInputProps<Form> = BaseInputProps & ControlledInputProps<Form>;

export function PasswordInput<Form>(props: PasswordInputProps<Form>) {
    const { labelProps, formItemProps, className, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseInput.Password
                    className={clsx(styles.inputWrapper, className)}
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
