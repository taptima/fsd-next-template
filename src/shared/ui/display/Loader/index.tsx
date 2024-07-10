import type { FC } from 'react';
import clsx from 'clsx';
import type { IconProps } from 'shared/types/icon';
import LoaderIcon from 'shared/assets/icons/loader.svg';
import { createCssVariable } from 'shared/lib/helpers/style/createCssVariable';
import styles from './styles.module.scss';

export type LoaderProps = Omit<IconProps, 'width' | 'height'> & {
    size?: number;
    strokeWidth?: number;
    variant?: 'primary' | 'white';
};

export const Loader: FC<LoaderProps> = (props) => {
    const { size = 80, strokeWidth = 4, variant = 'primary', className, ...restProps } = props;

    return (
        <LoaderIcon
            width={size}
            className={clsx(styles.spinner, styles[variant], className)}
            style={createCssVariable('stroke-width', strokeWidth, 'px')}
            {...restProps}
        />
    );
};
