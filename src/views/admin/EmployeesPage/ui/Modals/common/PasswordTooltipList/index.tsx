import type { FC } from 'react';
import styles from './styles.module.scss';

export const PasswordTooltipList: FC = () => {
    return (
        <ul className={styles.list}>
            <li>Пароль должен быть на латинице</li>
            <li>Должна быть как минимум одна заглавная буква</li>
            <li>Должна быть как минимум одна строчная буква</li>
            <li>Должна быть как минимум одна цифра</li>
        </ul>
    );
};
