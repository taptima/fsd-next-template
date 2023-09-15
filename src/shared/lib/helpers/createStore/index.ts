import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { initializeDevtoolsOptions } from 'shared/lib/helpers/initializeDevtoolsOptions';
import { DevtoolsOptions } from 'zustand/esm/middleware';

export const createStoreWithDevtools = <T>(
    initializer: StateCreator<T, [['zustand/devtools', never]]>,
    storeName: string,
    devtoolsOptions?: DevtoolsOptions,
) => {
    return create<T>()(
        devtools(initializer, initializeDevtoolsOptions(storeName, devtoolsOptions)),
    );
};
