import clsx from 'clsx';
import { DataList, DataListVariant } from 'shared/types/dataList';
import { List } from './List';
import styles from './styles.module.scss';

type Props = {
    data: DataList;
    variant?: DataListVariant;
};

export function Section(props: Props) {
    const { data, variant = 'default' } = props;
    const { title, entries } = data;

    return (
        <div className={styles.wrapper}>
            {title && <span className={clsx(styles.title, styles[variant])}>{title}</span>}
            <List data={entries} variant={variant} />
        </div>
    );
}

Section.List = List;
