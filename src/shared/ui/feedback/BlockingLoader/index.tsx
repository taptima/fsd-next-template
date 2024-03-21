import type { FC } from 'react';
import styles from './styles.module.scss';

// TODO: Добавить loader
export const BlockingLoader: FC = () => {
    return <div className={styles.wrapper}>Загрузка...</div>;
};
