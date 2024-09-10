import type { FC } from 'react';
import { Loader } from 'shared/ui/display/Loader';
import styles from './styles.module.scss';

export const BlockingLoader: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Loader className={styles.loader} />
        </div>
    );
};
