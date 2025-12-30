import type { FC } from 'react';
import { DevLayout } from 'features/layout/DevLayout';
import styles from './styles.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <DevLayout />
            Header
        </header>
    );
};
