import { forwardRef, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export const ScrollWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children } = props;

    return (
        <div ref={ref} className={styles.wrapper}>
            {children}
        </div>
    );
});

ScrollWrapper.displayName = 'ScrollWrapper';
