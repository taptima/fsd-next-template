import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { EDIT_EMPLOYEE_STATE_KEY } from './keys';

export const useEditEmployeeStateMutation = () => {
    return useSWRMutation<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        APIResponse<any>,
        unknown,
        string,
        unknown
    >(
        EDIT_EMPLOYEE_STATE_KEY,
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
