import { create, StateCreator } from 'zustand';
import { devtools, DevtoolsOptions } from 'zustand/middleware';
import initializeDevtoolsOptions from 'shared/lib/helpers/initializeDevtoolsOptions';
import { withGeneratedSelectors } from 'shared/lib/helpers/withGeneratedSelectors';
import { IS_PRODUCTION } from 'shared/const/env';
import { StoreActions } from 'shared/types/storeActions';

export const createStore = <Schema extends StoreActions>(
    initializer: StateCreator<Schema, [['zustand/devtools', never]]>,
    storeName: string,
    devtoolsOptions?: DevtoolsOptions,
) => {
    const withDevtools = devtools<Schema>(
        (setState, getState, store) => {
            if (!IS_PRODUCTION) {
                const fnMap = new Map<string, string>();
                const stateMap = new Map<
                    Schema | Partial<Schema> | ((state: Schema) => Schema | Partial<Schema>),
                    string
                >();
                // eslint-disable-next-line no-param-reassign
                store.setState = (state, replace, nameOrAction) => {
                    const currentState = getState();
                    let actionName = 'anonymous';

                    if ('actions' in currentState) {
                        Object.entries(currentState.actions).forEach(([key, fn]) => {
                            if (!fnMap.has(key)) {
                                fnMap.set(key, fn.toString());
                            }

                            if (typeof state === 'function' && !stateMap.has(state)) {
                                stateMap.set(state, state.toString());
                            }

                            const fnAsString = fnMap.get(key);
                            const stateAsString = stateMap.get(state);

                            if (stateAsString && fnAsString?.includes(stateAsString)) {
                                actionName = key;
                            }
                        });
                    }

                    return setState(state, replace, (nameOrAction ?? actionName) as string);
                };
            }

            return initializer(store.setState, getState, store);
        },
        initializeDevtoolsOptions(storeName, devtoolsOptions),
    );

    return withGeneratedSelectors(create<Schema>()(withDevtools));
};
