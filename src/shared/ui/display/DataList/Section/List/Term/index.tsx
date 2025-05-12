import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { DataListVariant } from 'shared/types/dataList';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    variant?: DataListVariant;
};

export const Term: FC<Props> = (props) => {
    const { children, variant = 'default' } = props;

    return <dt className={clsx(styles.term, styles[variant])}>{children}</dt>;
};
