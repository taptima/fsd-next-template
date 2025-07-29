/* eslint-disable no-console */
import { IS_PRODUCTION } from 'shared/const/env';

export const handleError = (title = '', error?: Error | null) => {
    if (!IS_PRODUCTION) {
        console.groupCollapsed(title);

        if (error) {
            console.error(error);
        }

        console.groupEnd();
    }
};
