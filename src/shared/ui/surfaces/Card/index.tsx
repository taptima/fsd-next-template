import type { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    variant?: 'White' | 'Gray';
    padding?: 'None' | 'Smaller' | 'Medium' | 'Large';
    border?: 'None' | 'Gray';
    borderRadius?: 'None' | 'Medium' | 'Large';
};

export const Card: FC<CardProps> = (props) => {
    const {
        children,
        variant = 'White',
        padding = 'Medium',
        border = 'Gray',
        borderRadius = 'Medium',
        className,
        ...restProps
    } = props;

    return (
        <div
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
};
