import { create, StateCreator } from 'zustand';
import { devtools, DevtoolsOptions } from 'zustand/middleware';
import initializeDevtoolsOptions from 'shared/lib/helpers/initializeDevtoolsOptions';
import { withGeneratedSelectors } from 'shared/lib/helpers/withGeneratedSelectors';

export const createStore = <Schema extends object>(
    initializer: StateCreator<Schema, [['zustand/devtools', never]]>,
    storeName: string,
    devtoolsOptions?: DevtoolsOptions,
) => {
    const withDevtools = devtools<Schema>(
        (setState, getState, store) => {
            // eslint-disable-next-line no-param-reassign
            store.setState = (state, replace, nameOrAction) => {
                const stateModifiedNameRegex = /[a-zA-Z]{2,}/;
                const [stateName] = state.toString().match(stateModifiedNameRegex) ?? [undefined];

                return setState(state, replace, (nameOrAction ?? stateName) as string);
            };

            return initializer(store.setState, getState, store);
        },
        initializeDevtoolsOptions(storeName, devtoolsOptions),
    );

    return withGeneratedSelectors(create<Schema>()(withDevtools));
};
