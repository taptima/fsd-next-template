import { createStore } from 'shared/config/project/createStore';
import type { ModalsStore, Setters, StoreActions } from 'shared/types/store';

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

    return createStore<Schema & StoreActions<Schema>>(
        (set) => ({
            ...initialState,
            actions: keys.reduce((acc, key) => {
                return {
                    ...acc,
                    [`setIs${key}ModalOpen`]: (isOpen: boolean) =>
                        set(() => {
                            return {
                                [`is${key}ModalOpen`]: isOpen,
                            } as Partial<Schema & StoreActions<Schema>>;
                        }),
                };
            }, {} as Setters<Schema>),
        }),
        storeName,
    );
}
