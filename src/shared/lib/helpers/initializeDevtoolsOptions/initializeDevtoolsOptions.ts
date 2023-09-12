import { DevtoolsOptions } from 'zustand/middleware';
import { StoreNames } from '../../../constants/storeNames';

export const initializeDevtoolsOptions = (
    name: StoreNames,
    options?: DevtoolsOptions,
): DevtoolsOptions => ({
    name,
    store: name,
    ...options,
});
