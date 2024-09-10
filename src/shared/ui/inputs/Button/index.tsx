import {
    ButtonHTMLAttributes,
    ElementType,
    ComponentPropsWithoutRef,
    ReactNode,
    Ref,
    forwardRef,
    ForwardedRef,
} from 'react';
import clsx from 'clsx';
import { Loader } from 'shared/ui/display/Loader';
import { ButtonVariant, MAP_BUTTON_VARIANT_TO_LOADER_VARIANT } from './utils';
import styles from './styles.module.scss';

export type { ButtonVariant };

type InternalButtonProps<T extends ElementType> = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    isLoading?: boolean;
    as?: T;
};

export type ButtonProps<T extends ElementType = 'button'> = InternalButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof InternalButtonProps<T>>;

const ButtonWithRef = <T extends ElementType = 'button'>(
    props: ButtonProps<T>,
    ref?: Ref<HTMLButtonElement>,
) => {
    const {
        children,
        variant = 'primary',
        startIcon,
        endIcon,
        as = 'button',
        className,
        isLoading,
        disabled,
        ...restProps
    } = props;
    const Element = as;

    return (
        <Element
            ref={ref}
            type={as === 'button' ? 'button' : undefined}
            disabled={disabled || isLoading}
            className={clsx(styles.wrapper, styles[variant], className, {
                [styles.loading]: isLoading,
            })}
            {...restProps}
        >
            {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
            {isLoading && (
                <span className={styles.loaderWrapper}>
                    <Loader
                        variant={MAP_BUTTON_VARIANT_TO_LOADER_VARIANT[variant]}
                        size={16}
                        strokeWidth={8}
                    />
                </span>
            )}
        </Element>
    );
};

export const Button = forwardRef(ButtonWithRef) as <T extends ElementType = 'button'>(
    props: ButtonProps<T> & { ref?: ForwardedRef<HTMLButtonElement> },
) => ReturnType<typeof ButtonWithRef>;
