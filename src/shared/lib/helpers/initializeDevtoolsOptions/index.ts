import { DevtoolsOptions } from 'zustand/middleware';

export const initializeDevtoolsOptions = (
    name: string,
    options?: DevtoolsOptions,
): DevtoolsOptions => ({
    name,
    store: name,
    ...options,
});
