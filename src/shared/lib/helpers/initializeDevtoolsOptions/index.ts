import { DevtoolsOptions } from 'zustand/middleware';

export default function initializeDevtoolsOptions(
    name: string,
    options?: DevtoolsOptions,
): DevtoolsOptions {
    return {
        name,
        store: name,
        ...options,
    };
}
