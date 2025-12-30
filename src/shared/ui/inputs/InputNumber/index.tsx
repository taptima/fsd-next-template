import BaseInputNumber, { InputNumberProps as BaseInputNumberProps } from 'antd/es/input-number';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type InputNumberProps<Form = unknown> = BaseInputNumberProps & ControlledInputProps<Form>;

export function InputNumber<Form>(props: InputNumberProps<Form>) {
    const { labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseInputNumber controls={false} className={styles.input} {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
