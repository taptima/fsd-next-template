import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import type { Classname } from 'shared/types/styles';
import styles from './styles.module.scss';

type Props = PropsWithChildren & Classname;

export const Subtitle: FC<Props> = (props) => {
    const { children, className } = props;

    return <p className={clsx(styles.subtitle, className)}>{children}</p>;
};
