import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { StoreActions } from 'shared/types/store';
import { PersistedStorageName } from 'shared/const/store';

type AuthStore = {
    token: string | undefined;
};

export const useAuthStore = create<AuthStore & StoreActions<AuthStore>>()(
    persist(
        (set) => ({
            token: undefined,
            actions: {
                setToken: (token) => set({ token }),
            },
        }),
        {
            version: 1,
            name: PersistedStorageName.Auth,
            partialize: (state) => ({
                token: state.token,
            }),
        },
    ),
);
