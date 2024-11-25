import type { GetProp } from 'antd/lib';
import { forwardRef } from 'react';
import BaseButton, { ButtonProps as BaseButtonProps } from 'antd/es/button';
import Spin from 'antd/es/spin';
import clsx from 'clsx';
import styles from './styles.module.scss';

type BaseButtonType = GetProp<BaseButtonProps, 'type'>;
type CustomButtonType = 'secondary' | 'secondaryDanger' | 'tertiary' | 'quaternary' | 'danger';
type ButtonType = BaseButtonType | CustomButtonType;

export type ButtonProps = Omit<BaseButtonProps, 'type' | 'variant'> & {
    type?: ButtonType;
    padding?: 'None' | 'Icon' | 'IconLarge' | 'Small' | 'Smaller' | 'Medium' | 'Regular' | 'Large';
    baseLoading?: boolean;
};

const CUSTOM_BUTTON_TYPES: ButtonType[] = ['secondary', 'tertiary', 'quaternary', 'danger'];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        children,
        type: baseType = 'default',
        padding = 'Regular',
        disabled,
        loading,
        baseLoading,
        className,
        ...restProps
    } = props;
    const type = CUSTOM_BUTTON_TYPES.includes(baseType) ? undefined : (baseType as BaseButtonType);

    return (
        <BaseButton
            ref={ref}
            type={type}
            disabled={disabled || !!loading || baseLoading}
            loading={baseLoading}
            className={clsx(
                styles.button,
                styles[baseType],
                styles[`padding${padding}`],
                className,
                {
                    [styles.buttonLoading]: !!loading,
                },
            )}
            {...restProps}
        >
            <span
                className={clsx(styles.loaderWrapper, {
                    [styles.loaderWrapperVisible]: !!loading,
                })}
            >
                <Spin size="small" className={styles.spin} />
            </span>
            {children}
        </BaseButton>
    );
});

Button.displayName = 'Button';
