import type { FC } from 'react';
import Image from 'next/image';
import image from 'shared/assets/images/gear.png';
import { ENABLE_DEV_LAYOUT } from 'shared/const/env';
import styles from './styles.module.scss';

export const DevLayout: FC = () => {
    if (!ENABLE_DEV_LAYOUT) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <Image alt="" src={image.src} width={26} height={26} />
            </div>
            <span className={styles.text}>Сайт находится в разработке</span>
        </div>
    );
};
