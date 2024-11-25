import type { FC } from 'react';
import Flex from 'antd/es/flex';
import Tabs, { TabsProps } from 'antd/es/tabs';
import PlusIcon from 'shared/assets/icons/plus.svg';
import colors from 'shared/styles/colors.module.scss';
import { Button, ButtonProps } from 'shared/ui/inputs/Button';
import styles from './styles.module.scss';

export type AdditionalProps = {
    tabsProps: TabsProps;
    buttonProps: ButtonProps;
};

export const Additional: FC<AdditionalProps> = (props) => {
    const { tabsProps, buttonProps } = props;

    return (
        <Flex justify="space-between" align="center" className={styles.wrapper}>
            <Tabs className={styles.tabs} {...tabsProps} />
            <Button
                type="primary"
                icon={<PlusIcon width={16} fill={colors.neture0} />}
                {...buttonProps}
            />
        </Flex>
    );
};
