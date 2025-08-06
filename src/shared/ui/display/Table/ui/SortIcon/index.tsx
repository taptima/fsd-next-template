import type { TableColumnsType } from 'antd/lib';
import clsx from 'clsx';
import SortDescendIcon from 'shared/assets/icons/arrow-down-wide-narrow.svg';
import styles from './styles.module.scss';

type Props = TableColumnsType[number];

export const SortIcon = (props: Props) => {
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
