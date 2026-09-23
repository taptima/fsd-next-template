import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import type { Classname } from 'shared/types/styles';
import styles from './styles.module.scss';

type Props = PropsWithChildren & Classname;

export const Container: FC<Props> = (props) => {
    const { children, className } = props;

    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
