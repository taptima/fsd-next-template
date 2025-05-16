import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { handleGraphQLMutationResult } from 'shared/lib/helpers/handleGraphQLMutationResult';
import { invalidateFiltered } from 'shared/lib/helpers/invalidateFiltered';
import { invalidateWithKey } from 'shared/lib/helpers/invalidateWithKey';
import { mutateWithKey } from 'shared/lib/helpers/mutateWithKey';
import { EMPLOYEE_OPTIONS_KEY } from 'entities/User/api/swr/keys';
import { EDIT_EMPLOYEE_KEY, EMPLOYEE_KEY, EMPLOYEES_KEY } from './keys';
import { useEmployees } from './useEmployees';

export const useEditEmployeeMutation = () => {
    const { mutate: mutateEmployees } = useEmployees();

    return useSWRMutation<
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        APIResponse<any>,
        unknown,
        string,
        unknown
    >(
        EDIT_EMPLOYEE_KEY,
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
                    onFulfilled: async () => {
                        await invalidateFiltered(EMPLOYEES_KEY);
                        mutateEmployees();
                        mutateWithKey(EMPLOYEE_KEY);
                        invalidateWithKey(EMPLOYEE_OPTIONS_KEY);
                    },
                }),
            throwOnError: false,
        },
    );
};
