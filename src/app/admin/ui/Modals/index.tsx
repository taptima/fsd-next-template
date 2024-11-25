import type { FC } from 'react';
import { useAdminModalStore } from 'app/admin/model/store/useAdminModalStore';
import { LogoutModal } from './LogoutModal/dynamic';

export const Modals: FC = () => {
    const isLogoutModalOpen = useAdminModalStore.use.isLogoutModalOpen();
    const { setIsLogoutModalOpen } = useAdminModalStore.use.actions();

    return <LogoutModal open={isLogoutModalOpen} onCancel={() => setIsLogoutModalOpen(false)} />;
};
