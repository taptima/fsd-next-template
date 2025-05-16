import BaseSelect, { SelectProps as BaseSelectProps } from 'antd/es/select';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type SelectProps<Form = unknown> = BaseSelectProps & ControlledInputProps<Form>;

export function Select<Form>(props: SelectProps<Form>) {
    const { labelProps, formItemProps, size = 'small', className, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseSelect size={size} className={clsx(styles.select, className)} {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
