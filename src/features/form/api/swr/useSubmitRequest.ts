import type { AxiosError } from 'axios';
import useSWRMutation from 'swr/mutation';
import { delay } from 'shared/lib/helpers/delay';
import { SUBMIT_REQUEST_KEY } from './keys';

export const useSubmitRequest = () => {
    return useSWRMutation<unknown, AxiosError, string, unknown>(
        SUBMIT_REQUEST_KEY,
        async () => {
            await delay(2000);

            return true;
        },
        {
            throwOnError: false,
        },
    );
};
