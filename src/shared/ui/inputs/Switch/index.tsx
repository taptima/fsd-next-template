import BaseSwitch, { SwitchProps as BaseSwitchProps } from 'antd/es/switch';
import clsx from 'clsx';
import type { ControlledInputProps } from 'shared/types/form';
import type { IconProps } from 'shared/types/icon';
import CheckIcon from 'shared/assets/icons/check.svg';
import XIcon from 'shared/assets/icons/x.svg';
import { colors } from 'shared/styles/colors';
import { Classnames } from 'shared/types/styles';
import { FormItem } from 'shared/ui/inputs/FormItem';
import styles from './styles.module.scss';

export type SwitchProps<Form = unknown> = BaseSwitchProps &
    Pick<ControlledInputProps<Form>, 'formItemProps'> &
    Classnames<'wrapper'> & {
        label?: string;
    };

const ICON_PROPS: IconProps = {
    width: 16,
    fill: colors.neture0,
};

export function Switch<Form>(props: SwitchProps<Form>) {
    const { label, wrapperClassname, formItemProps, ...restProps } = props;

    return (
        <div className={clsx(styles.wrapper, wrapperClassname)}>
            {label && <span className={styles.label}>{label}</span>}
            <FormItem {...formItemProps}>
                <BaseSwitch
                    checkedChildren={<CheckIcon {...ICON_PROPS} />}
                    unCheckedChildren={<XIcon {...ICON_PROPS} />}
                    className={styles.switch}
                    {...restProps}
                />
            </FormItem>
        </div>
    );
}
