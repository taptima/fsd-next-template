import type { FC } from 'react';
import clsx from 'clsx';
import type { DataList as DataListEntity, DataListVariant } from 'shared/types/dataList';
import type { Classname } from 'shared/types/styles';
import { Card, CardProps } from 'shared/ui/surfaces/Card';
import { Section } from './Section';
import styles from './styles.module.scss';

const CARD_PROPS_MAP: Record<DataListVariant, CardProps> = {
    default: {
        padding: 'Medium',
        border: 'Default',
    },
    compact: {
        padding: 'None',
        border: 'None',
    },
};

type Props = Classname & {
    data: DataListEntity | DataListEntity[];
    variant?: DataListVariant;
};

export const DataList: FC<Props> = (props) => {
    const { data, variant = 'default', className } = props;
    const cardProps = CARD_PROPS_MAP[variant];

    return (
        <Card {...cardProps} className={clsx(styles.card, className)}>
            {!Array.isArray(data) && <Section data={data} variant={variant} />}
            {Array.isArray(data) &&
                data.map((dataList, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Section key={index} data={dataList} variant={variant} />
                ))}
        </Card>
    );
};

export { Section };
