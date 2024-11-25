import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    variant?: 'Primary' | 'Black';
};

export const Accent: FC<Props> = (props) => {
    const { children, variant = 'Primary' } = props;

    return <span className={clsx(styles.accent, styles[`accent${variant}`])}>{children}</span>;
};
