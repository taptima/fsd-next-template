import type { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { DataListVariant } from 'shared/types/dataList';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    variant?: DataListVariant;
};

export const Description: FC<Props> = (props) => {
    const { children, variant = 'default' } = props;

    return <dd className={clsx(styles.description, styles[variant])}>{children}</dd>;
};
