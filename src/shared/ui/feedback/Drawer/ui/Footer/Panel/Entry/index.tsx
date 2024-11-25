import type { FC } from 'react';
import { Flex } from 'antd';
import { LabelWithTooltip, LabelWithTooltipProps } from 'shared/ui/display/LabelWithTooltip';
import styles from './styles.module.scss';

type Props = {
    label: string;
    value: string;
    tooltipProps?: Partial<LabelWithTooltipProps>;
};

export const Entry: FC<Props> = (props) => {
    const { label, value, tooltipProps } = props;

    return (
        <Flex justify="space-between" align="center">
            <LabelWithTooltip
                text={<span className={styles.label}>{label}</span>}
                {...tooltipProps}
            />
            <span className={styles.value}>{value}</span>
        </Flex>
    );
};
