import { DevtoolsOptions } from 'zustand/middleware';
import { IS_PRODUCTION } from 'shared/const/env';

export default function initializeDevtoolsOptions(
    name: string,
    options?: DevtoolsOptions,
): DevtoolsOptions {
    return {
        name,
        store: name,
        enabled: !IS_PRODUCTION,
        ...options,
    };
}
