import { forwardRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import type { Classname } from 'shared/types/styles';
import styles from './styles.module.scss';

type Props = PropsWithChildren & Classname;

export const ScrollWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, className } = props;

    return (
        <div ref={ref} className={clsx(styles.wrapper, className)}>
            {children}
        </div>
    );
});

ScrollWrapper.displayName = 'ScrollWrapper';
