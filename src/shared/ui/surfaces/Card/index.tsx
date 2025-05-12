import { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    variant?: 'White' | 'Gray';
    padding?: 'None' | 'Smaller' | 'Medium' | 'Large';
    border?: 'None' | 'Default' | 'Gray';
    borderRadius?: 'None' | 'Medium' | 'Large';
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const {
        children,
        variant = 'White',
        padding = 'Medium',
        border = 'Default',
        borderRadius = 'Medium',
        className,
        ...restProps
    } = props;

    return (
        <div
            ref={ref}
            className={clsx(
                styles.wrapper,
                styles[`variant${variant}`],
                styles[`padding${padding}`],
                styles[`border${border}`],
                styles[`borderRadius${borderRadius}`],
                className,
            )}
            {...restProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
