'use client';

import type { FC, PropsWithChildren } from 'react';
import Sider from 'antd/es/layout/Sider';
import Layout from 'antd/es/layout/layout';
import { Card } from 'shared/ui/surfaces/Card';
import { AdminHeader } from 'widgets/admin/AdminHeader';
import { AdminMenu } from 'widgets/admin/AdminMenu';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export const AdminLayout: FC<Props> = (props) => {
    const { children } = props;

    return (
        <Layout className={styles.layout}>
            <Sider width={208}>
                <AdminMenu />
            </Sider>
            <main className={styles.content}>
                <AdminHeader />
                <Card variant="Gray" borderRadius="None" className={styles.card}>
                    {children}
                </Card>
            </main>
        </Layout>
    );
};
