'use client';

import type { PropsWithChildren } from 'react';
import { Modals } from 'app/admin/ui/Modals';
import { ADMIN_SIGN_IN } from 'shared/const/pageRoutes';
import { RoleTypeEnum } from 'entities/User';
import { createRefreshLayout } from 'features/auth/provider/createRefreshLayout';
import { AdminLayout } from 'features/layout/AdminLayout';

type Props = PropsWithChildren;

function SystemLayout(props: Props) {
    const { children } = props;

    return (
        <>
            <AdminLayout>{children}</AdminLayout>
            <Modals />
        </>
    );
}

export default createRefreshLayout(SystemLayout, {
    roles: [RoleTypeEnum.RoleAdmin, RoleTypeEnum.RoleSuperAdmin],
    redirectHref: ADMIN_SIGN_IN,
});
