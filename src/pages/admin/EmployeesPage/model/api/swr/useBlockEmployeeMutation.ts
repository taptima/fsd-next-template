import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { BLOCK_EMPLOYEE_KEY } from './keys';

export const useBlockEmployeeMutation = () => {
    return useSWRMutation<
        APIResponse<{ success: boolean }>,
        unknown,
        string,
        { id: number; status: boolean }
    >(BLOCK_EMPLOYEE_KEY, async () => {
        await delay(2000);

        return {
            data: {
                success: true,
            },
        };
    });
};
