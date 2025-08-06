import BaseSelect, { SelectProps as BaseSelectProps, DefaultOptionType } from 'antd/es/select';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type SelectProps<Form = unknown> = BaseSelectProps & ControlledInputProps<Form>;

export function Select<Form>(props: SelectProps<Form>) {
    const { value, labelProps, formItemProps, loading, className, ...restProps } = props;

    const renderLabel = (option: DefaultOptionType) => {
        if (loading) {
            return <span className={styles.loadingLabel}>Загрузка...</span>;
        }

        return option.label;
    };

    return (
        <FieldLabel wrapperClassname={styles.labelWrapper} {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseSelect
                    loading={loading}
                    labelRender={renderLabel}
                    className={clsx(styles.select, className)}
                    value={loading ? undefined : value}
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
