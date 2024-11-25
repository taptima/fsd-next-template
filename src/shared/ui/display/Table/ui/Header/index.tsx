import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export const Header: FC<Props> = (props) => {
    const { children } = props;

    return <span className={styles.header}>{children}</span>;
};
