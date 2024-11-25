import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { delay } from 'shared/lib/helpers/delay';
import { CHANGE_PASSWORD_KEY } from './keys';

export const useChangePasswordEmployeeMutation = () => {
    return useSWRMutation<
        APIResponse<{ success: boolean }>,
        unknown,
        string,
        { id: number; password: string }
    >(CHANGE_PASSWORD_KEY, async () => {
        await delay(2000);

        return {
            data: {
                success: true,
            },
        };
    });
};
