import type { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export const Inline: FC<Props> = (props) => {
    const { children } = props;

    return <div className={styles.wrapper}>{children}</div>;
};
