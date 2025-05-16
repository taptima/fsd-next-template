import type { ModalsStore, Setters, StoreActions } from 'shared/types/store';
import { createStore } from 'shared/config/project/createStore';

export type ResetAction = {
    resetModals: () => void;
};

export function createModalsStore<
    T extends Capitalize<string>,
    Schema extends ModalsStore<T> = ModalsStore<T>,
>(keys: T[], storeName: string) {
    const initialState = keys.reduce((acc, key) => {
        return {
            ...acc,
            [`is${key}ModalOpen`]: false,
        };
    }, {} as Schema);

    return createStore<Schema & StoreActions<Schema, ResetAction>>(
        (set) => ({
            ...initialState,
            actions: {
                ...keys.reduce((acc, key) => {
                    return {
                        ...acc,
                        [`setIs${key}ModalOpen`]: (isOpen: boolean) =>
                            set(() => {
                                return {
                                    [`is${key}ModalOpen`]: isOpen,
                                } as Partial<Schema & StoreActions<Schema, ResetAction>>;
                            }),
                    };
                }, {} as Setters<Schema>),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resetModals: () => set(() => ({ ...initialState })),
            },
        }),
        storeName,
    );
}
