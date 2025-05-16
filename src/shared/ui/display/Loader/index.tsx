import type { FC } from 'react';
import Spin, { SpinProps } from 'antd/es/spin';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = SpinProps & {
    isVisible?: boolean;
} & (
        | {
              fill: boolean;
              withBackground?: boolean;
              rounded?: boolean;
              blurred?: boolean;
          }
        | {
              fill?: undefined;
              withBackground?: undefined;
              rounded?: undefined;
              blurred?: undefined;
          }
    );

export const Loader: FC<Props> = (props) => {
    const { fill, withBackground, rounded, blurred, isVisible, className, ...restProps } = props;

    return (
        <Spin
            className={clsx(styles.loader, className, {
                [styles.loaderFill]: fill,
                [styles.loaderWithBackground]: withBackground,
                [styles.loaderWithBackgroundRounded]: rounded,
                [styles.loaderWithBackgroundBlurred]: blurred,
                [styles.loaderHideable]: isVisible !== undefined,
                [styles.loaderVisible]: isVisible,
            })}
            {...restProps}
        />
    );
};
