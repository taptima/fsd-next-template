import type { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = HTMLProps<HTMLSpanElement> & {
    isVisible?: boolean;
};

export const Wrapper: FC<Props> = (props) => {
    const { children, isVisible, ...restProps } = props;

    return (
        <span
            className={clsx(styles.wrapper, 'loaderWrapper', {
                [styles.wrapperVisible]: isVisible,
            })}
            {...restProps}
        >
            {children}
        </span>
    );
};
