'use client';

import type { FC } from 'react';
import { useGlobalModalStore } from 'app/model/store/useGlobalModalStore';
import { LogoutModal } from './LogoutModal/dynamic';

export const Modals: FC = () => {
    const isLogoutModalOpen = useGlobalModalStore.use.isLogoutModalOpen();
    const { setIsLogoutModalOpen } = useGlobalModalStore.use.actions();

    return <LogoutModal open={isLogoutModalOpen} onCancel={() => setIsLogoutModalOpen(false)} />;
};
