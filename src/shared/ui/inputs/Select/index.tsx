import BaseSelect, {
    BaseOptionType,
    SelectProps as BaseSelectProps,
    DefaultOptionType,
} from 'antd/es/select';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type SelectProps<
    Form = unknown,
    Option extends DefaultOptionType | BaseOptionType = DefaultOptionType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = BaseSelectProps<any, Option> & ControlledInputProps<Form>;

export function Select<Form, Option extends DefaultOptionType | BaseOptionType = DefaultOptionType>(
    props: SelectProps<Form, Option>,
) {
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
                    maxTagCount="responsive"
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
