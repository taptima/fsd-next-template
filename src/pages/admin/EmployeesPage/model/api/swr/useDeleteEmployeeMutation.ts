import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { DELETE_EMPLOYEE_KEY } from './keys';

export const useDeleteEmployeeMutation = () => {
    return useSWRMutation<APIResponse<{ success: boolean }>, unknown, string, { id: number }>(
        DELETE_EMPLOYEE_KEY,
        async () => {
            await delay(2000);

            return {
                data: {
                    success: true,
                },
            };
        },
    );
};
