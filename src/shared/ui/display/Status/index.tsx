import type { FC } from 'react';
import Badge, { BadgeProps } from 'antd/es/badge';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type StatusProps = BadgeProps & {
    variant: 'green' | 'blue' | 'red' | 'default' | 'orange' | 'purple';
    text: string;
};

export const Status: FC<StatusProps> = (props) => {
    const { variant, text, className, ...restProps } = props;
    const variantClassname = styles[variant];

    return (
        <span className={clsx(styles.wrapper, variantClassname, className)}>
            <Badge
                status="default"
                text={<span className={clsx(styles.text, variantClassname)}>{text}</span>}
                classNames={{ indicator: clsx(styles.indicator, variantClassname) }}
                {...restProps}
            />
        </span>
    );
};
