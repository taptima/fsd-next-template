import type { FC, PropsWithChildren } from 'react';
import { Tabs, TabsProps } from 'antd';
import clsx from 'clsx';
import { Card, CardProps } from 'shared/ui/surfaces/Card';
import { Toolbar, ToolbarProps } from 'widgets/Toolbar';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    toolbarProps: ToolbarProps;
    tabsProps?: TabsProps;
    cardProps?: CardProps;
};

export const PageTable: FC<Props> = (props) => {
    const { children, toolbarProps, tabsProps, cardProps } = props;

    return (
        <div className={styles.wrapper}>
            <Card padding="None" {...cardProps}>
                <Toolbar
                    className={clsx(toolbarProps.className, tabsProps && styles.toolbarWithTabs)}
                    {...toolbarProps}
                >
                    {tabsProps && <Tabs className={styles.tabs} tabBarGutter={20} {...tabsProps} />}
                </Toolbar>
                {children}
            </Card>
        </div>
    );
};
