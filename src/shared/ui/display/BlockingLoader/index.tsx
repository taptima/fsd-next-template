import type { FC } from 'react';
import { Spin } from 'antd';
import styles from './styles.module.scss';

export const BlockingLoader: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Spin percent="auto" fullscreen />
        </div>
    );
};
