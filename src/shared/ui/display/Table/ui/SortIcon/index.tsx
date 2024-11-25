import type { SortOrder } from 'antd/es/table/interface';
import type { FC } from 'react';
import clsx from 'clsx';
import SortDescendIcon from 'shared/assets/icons/arrow-down-wide-narrow.svg';
import styles from './styles.module.scss';

type Props = {
    sortOrder: SortOrder;
};

export const SortIcon: FC<Props> = (props) => {
    const { sortOrder } = props;

    return (
        <SortDescendIcon
            className={clsx(styles.icon, {
                [styles.iconActive]: sortOrder === 'descend',
                [styles.iconAscendActive]: sortOrder === 'ascend',
            })}
        />
    );
};
