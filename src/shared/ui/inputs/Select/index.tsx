import FormItem from 'antd/es/form/FormItem';
import BaseSelect, { SelectProps as BaseSelectProps } from 'antd/es/select';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import styles from './styles.module.scss';

export type SelectProps<Form = unknown> = BaseSelectProps & ControlledInputProps<Form>;

export function Select<Form>(props: SelectProps<Form>) {
    const { labelProps, formItemProps, disabled, loading, className, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseSelect
                    disabled={disabled || loading}
                    loading={loading}
                    className={clsx(styles.select, className)}
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
