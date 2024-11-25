import clsx from 'clsx';
import SearchIcon from 'shared/assets/icons/search.svg';
import styles from './styles.module.scss';

export const SearchFilterIcon = (filtered: boolean) => {
    return (
        <SearchIcon
            width={16}
            className={clsx(styles.icon, {
                [styles.iconActive]: filtered,
            })}
        />
    );
};
