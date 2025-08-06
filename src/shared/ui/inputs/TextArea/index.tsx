import type { TextAreaProps as BaseTextAreaProps } from 'antd/es/input/TextArea';
import BaseTextArea from 'antd/es/input/TextArea';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type TextAreaProps<Form = unknown> = BaseTextAreaProps & ControlledInputProps<Form>;

export function TextArea<Form>(props: TextAreaProps<Form>) {
    const { status, labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseTextArea status={status} autoSize className={styles.textarea} {...restProps} />
            </FormItem>
        </FieldLabel>
    );
}
