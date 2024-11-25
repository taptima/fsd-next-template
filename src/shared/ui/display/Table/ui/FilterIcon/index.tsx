import clsx from 'clsx';
import BaseFilterIcon from 'shared/assets/icons/filter.svg';
import styles from './styles.module.scss';

export const FilterIcon = (filtered: boolean) => {
    return (
        <BaseFilterIcon
            width={16}
            className={clsx(styles.icon, {
                [styles.iconActive]: filtered,
            })}
        />
    );
};
