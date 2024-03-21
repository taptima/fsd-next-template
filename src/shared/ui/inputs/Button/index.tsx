import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};

const MAP_VARIANT_TO_STYLES: Record<ButtonVariant, string> = {
    'primary': styles.primary,
    'secondary': styles.secondary,
};

export const Button: FC<ButtonProps> = (props) => {
    const { children, variant = 'primary', startIcon, endIcon, ...restProps } = props;

    return (
        <button
            type="button"
            className={clsx(styles.wrapper, MAP_VARIANT_TO_STYLES[variant])}
            {...restProps}
        >
            {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </button>
    );
};
