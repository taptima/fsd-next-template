import type { FilterDropdownProps } from 'antd/es/table/interface';
import type { ChangeEvent, FC } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import colors from 'shared/styles/colors.module.scss';
import { Button } from 'shared/ui/inputs/Button';
import { Input } from 'shared/ui/inputs/Input';
import styles from './styles.module.scss';

type Props = FilterDropdownProps & {
    placeholder?: string;
};

type SearchDropdownForm = {
    query: string;
};

export const SearchFilterDropdown: FC<Props> = (props) => {
    const { placeholder, selectedKeys, setSelectedKeys, clearFilters, confirm } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setSelectedKeys(value);
    };

    const handleReset = () => {
        clearFilters?.();
        confirm({ closeDropdown: true });
    };

    const handleFinish = () => {
        confirm({ closeDropdown: true });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Input<SearchDropdownForm>
                    placeholder={placeholder}
                    prefix={<SearchIcon width={16} fill={colors.neture400} />}
                    className={styles.input}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    value={selectedKeys}
                    onChange={handleChange}
                    onPressEnter={handleFinish}
                />
            </div>
            <div className={styles.actions}>
                <Button type="text" onClick={handleReset}>
                    Сбросить
                </Button>
                <Button
                    type="primary"
                    icon={<SearchIcon width={16} fill={colors.neture0} />}
                    onClick={handleFinish}
                >
                    Поиск
                </Button>
            </div>
        </div>
    );
};
