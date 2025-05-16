'use client';

import type { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Modals } from 'app/admin/ui/Modals';
import { ADMIN_SIGN_IN } from 'shared/const/pageRoutes';
import { Card } from 'shared/ui/surfaces/Card';
import { RoleTypeEnum } from 'entities/User';
import { createRefreshLayout } from 'features/auth/provider/createRefreshLayout';
import { AdminHeader } from 'widgets/admin/AdminHeader';
import { AdminMenu } from 'widgets/admin/AdminMenu';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

// TODO: move to `features/layout/AdminLayout`
function SystemLayout(props: Props) {
    const { children } = props;

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

export default createRefreshLayout(SystemLayout, {
    roles: [RoleTypeEnum.RoleAdmin, RoleTypeEnum.RoleSuperAdmin],
    redirectHref: ADMIN_SIGN_IN,
});
