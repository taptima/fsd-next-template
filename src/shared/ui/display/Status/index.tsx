import type { FC } from 'react';
import Badge, { BadgeProps } from 'antd/es/badge';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type StatusVariant = 'green' | 'blue' | 'red' | 'default' | 'orange' | 'purple';

export type StatusProps = BadgeProps & {
    variant: StatusVariant;
    withBackground?: boolean;
    text?: string;
};

export const Status: FC<StatusProps> = (props) => {
    const { variant, withBackground = true, text, className, ...restProps } = props;
    const variantClassname = styles[variant];

    return (
        <span
            className={clsx(styles.wrapper, className, {
                [variantClassname]: withBackground,
            })}
        >
            <Badge
                status="default"
                text={text && <span className={clsx(styles.text, variantClassname)}>{text}</span>}
                classNames={{ indicator: clsx(styles.indicator, variantClassname) }}
                {...restProps}
            />
        </span>
    );
};
