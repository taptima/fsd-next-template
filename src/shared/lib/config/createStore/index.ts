import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import initializeDevtoolsOptions from 'shared/lib/helpers/initializeDevtoolsOptions';
import { DevtoolsOptions } from 'zustand/esm/middleware';

export const createStore = <Schema extends object>(
    initializer: StateCreator<Schema, [['zustand/devtools', never]]>,
    storeName: string,
    devtoolsOptions?: DevtoolsOptions,
) => {
    return create<Schema>()(
        devtools(initializer, initializeDevtoolsOptions(storeName, devtoolsOptions)),
    );
};
