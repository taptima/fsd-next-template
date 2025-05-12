import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { DELETE_EMPLOYEE_KEY } from './keys';

export const useDeleteEmployeeMutation = () => {
    return useSWRMutation<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        APIResponse<any>,
        unknown,
        string,
        unknown
    >(
        DELETE_EMPLOYEE_KEY,
        async () => {
            await delay(1000);

            return {
                data: true,
            };
        },
        {
            throwOnError: false,
        },
    );
};
