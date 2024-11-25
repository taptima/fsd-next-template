import type { MaskedInputProps as BaseMaskedInputProps } from 'antd-5-mask-input/build/main/lib/MaskedInput';
import { MaskedInput as BaseMaskedInput } from 'antd-5-mask-input';
import type { ControlledInputProps } from 'shared/types/form';
import { FieldLabel } from 'shared/ui/display/FieldLabel';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from 'shared/ui/inputs/common/input.module.scss';

export type MaskedInputProps<Form = unknown> = BaseMaskedInputProps & ControlledInputProps<Form>;

export function MaskedInput<Form>(props: MaskedInputProps<Form>) {
    const { labelProps, formItemProps, ...restProps } = props;

    return (
        <FieldLabel {...labelProps}>
            <FormItem {...formItemProps}>
                <BaseMaskedInput
                    maskOptions={{ lazy: true, placeholderChar: '9' }}
                    className={styles.input}
                    {...restProps}
                />
            </FormItem>
        </FieldLabel>
    );
}
