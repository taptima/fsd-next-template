import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import type { Classname } from 'shared/types/styles';
import styles from './styles.module.scss';

type Props = PropsWithChildren & Classname;

export const Suffix: FC<Props> = (props) => {
    const { children, className } = props;

    return <span className={clsx(styles.suffix, className)}>{children}</span>;
};

Suffix.displayName = 'Suffix';
