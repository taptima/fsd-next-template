import type { FC, PropsWithChildren } from 'react';
import Tabs, { TabsProps } from 'antd/es/tabs';
import clsx from 'clsx';
import { PageHeader, PageHeaderProps } from 'shared/ui/display/PageHeader';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    headerProps: PageHeaderProps;
    tabsProps?: TabsProps;
    withPaginationOffset?: boolean;
};

export const PageTable: FC<Props> = (props) => {
    const { children, headerProps, tabsProps, withPaginationOffset } = props;

    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.wrapperPaginationOffset]: withPaginationOffset,
            })}
        >
            <PageHeader {...headerProps} />
            {tabsProps && (
                <div className={styles.tabsWrapper}>
                    <Tabs tabBarGutter={20} {...tabsProps} />
                </div>
            )}
            <div className={styles.tableWrapper}>{children}</div>
        </div>
    );
};
