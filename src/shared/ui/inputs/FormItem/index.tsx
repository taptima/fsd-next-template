import BaseFormItem, { FormItemProps as BaseFormItemProps } from 'antd/es/form/FormItem';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type FormItemProps<Form> = BaseFormItemProps<Form> & {
    hideValidation?: boolean;
};

export function FormItem<Form>(props: FormItemProps<Form>) {
    const { className, hideValidation, ...restProps } = props;

    return (
        <BaseFormItem
            className={clsx(
                styles.formItem,
                {
                    [styles.formItemHideValidation]: hideValidation,
                },
                className,
            )}
            {...restProps}
        />
    );
}
