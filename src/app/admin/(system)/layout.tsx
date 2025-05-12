'use client';

import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Modals } from 'app/admin/ui/Modals';
import { Card } from 'shared/ui/surfaces/Card';
import { AdminHeader } from 'widgets/admin/AdminHeader';
import { AdminMenu } from 'widgets/admin/AdminMenu';
import styles from './styles.module.scss';

// TODO: move to `features/layout/AdminLayout`
export default function SystemLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
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
            <Modals />
        </>
    );
}
