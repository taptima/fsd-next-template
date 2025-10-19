import clsx from 'clsx';
import type { IconProps } from 'shared/types/icon';
import LoaderIcon from 'shared/assets/icons/loader.svg';
import { createCssVariable } from 'shared/lib/helpers/style/createCssVariable';
import { Wrapper } from './Wrapper';
import styles from './styles.module.scss';

export type LoaderVariant = 'Current' | 'Primary' | 'White';

export type LoaderProps = Omit<IconProps, 'width' | 'height' | 'fill'> & {
    size?: number;
    strokeWidth?: number;
    variant?: LoaderVariant;
    isVisible?: boolean;
} & (
        | {
              fill: boolean;
              withBackground?: boolean;
              rounded?: boolean;
          }
        | {
              fill?: undefined;
              withBackground?: undefined;
              rounded?: undefined;
          }
    );

export function Loader(props: LoaderProps) {
    const {
        size = 80,
        strokeWidth = 4,
        variant = 'Current',
        fill,
        withBackground,
        rounded,
        isVisible,
        className,
        ...restProps
    } = props;

    return (
        <LoaderIcon
            className={clsx(styles.spinner, styles[`spinner${variant}`], className)}
            style={{
                ...createCssVariable('base-size', size, 'px'),
                ...createCssVariable('stroke-width', strokeWidth, 'px'),
            }}
            {...restProps}
        />
    );
}

Loader.Wrapper = Wrapper;
