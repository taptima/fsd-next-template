import { Fragment, FC } from 'react';
import type { DataEntry, DataListVariant } from 'shared/types/dataList';
import { Description } from './Description';
import { Term } from './Term';
import styles from './styles.module.scss';

type Props = {
    data: DataEntry[];
    variant?: DataListVariant;
};

export const List: FC<Props> = (props) => {
    const { data, variant = 'default' } = props;

    return (
        <dl className={styles.list}>
            {data.map(
                ({ term, description, isVisible = true }, index) =>
                    isVisible && (
                        // eslint-disable-next-line react/no-array-index-key
                        <Fragment key={index}>
                            <Term variant={variant}>{term}</Term>
                            <Description variant={variant}>{description}</Description>
                        </Fragment>
                    ),
            )}
        </dl>
    );
};
