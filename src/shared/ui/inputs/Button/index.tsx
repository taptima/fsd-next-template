import { ReactNode, Ref, forwardRef, ForwardedRef, ButtonHTMLAttributes, ElementType } from 'react';
import clsx from 'clsx';
import { Loader } from 'shared/ui/display/Loader';
import { MAP_BUTTON_VARIANT_TO_LOADER_VARIANT } from './utils';
import styles from './styles.module.scss';

export type ButtonVariant = 'Primary' | 'Secondary';

type InternalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: ElementType;
    variant?: ButtonVariant;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    isLoading?: boolean;
};
export type ButtonProps = InternalButtonProps;
type RefButtonProps = ButtonProps & { ref?: ForwardedRef<HTMLButtonElement> };

const ButtonWithRef = (props: ButtonProps, ref?: Ref<HTMLButtonElement>) => {
    const {
        children,
        as = 'button',
        variant = 'Secondary',
        startIcon,
        endIcon,
        disabled,
        isLoading,
        className,
        ...restProps
    } = props;
    const Element = as;

    return (
        <Element
            ref={ref}
            type={as === 'button' ? 'button' : undefined}
            disabled={disabled || isLoading}
            className={clsx(styles.button, styles[`button${variant}`], className)}
            {...restProps}
        >
            {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.endIcon}>{endIcon}</span>}

            <Loader.Wrapper aria-hidden isVisible={isLoading}>
                <Loader
                    variant={MAP_BUTTON_VARIANT_TO_LOADER_VARIANT[variant]}
                    size={16}
                    strokeWidth={12}
                />
            </Loader.Wrapper>
        </Element>
    );
};

export const Button = forwardRef(ButtonWithRef) as (
    props: RefButtonProps,
) => ReturnType<typeof ButtonWithRef>;
