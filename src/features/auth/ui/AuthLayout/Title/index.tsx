import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export const Title: FC<Props> = (props) => {
    const { children } = props;

    return <h1 className={styles.title}>{children}</h1>;
};
