import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { handleGraphQLMutationResult } from 'shared/lib/helpers/handleGraphQLMutationResult';
import { invalidateWithKey } from 'shared/lib/helpers/invalidateWithKey';
import { EMPLOYEE_OPTIONS_KEY } from 'entities/User/api/swr/keys';
import { ADD_EMPLOYEE_KEY, EMPLOYEES_KEY } from './keys';

export const useAddEmployeeMutation = () => {
    return useSWRMutation<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        APIResponse<any>,
        unknown,
        string,
        unknown
    >(
        ADD_EMPLOYEE_KEY,
        async () => {
            await delay(1000);

            return {
                data: true,
            };
        },
        {
            onSuccess: (response) =>
                handleGraphQLMutationResult({
                    response,
                    onFulfilled: () => {
                        invalidateWithKey(EMPLOYEES_KEY);
                        invalidateWithKey(EMPLOYEE_OPTIONS_KEY);
                    },
                }),
            throwOnError: false,
        },
    );
};
