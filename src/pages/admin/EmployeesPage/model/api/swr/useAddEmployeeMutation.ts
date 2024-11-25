import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { delay } from 'shared/lib/helpers/delay';
import { ADD_EMPLOYEE_KEY } from './keys';

export const useAddEmployeeMutation = () => {
    return useSWRMutation<APIResponse<{ success: boolean }>, unknown, string, EmployeeForm>(
        ADD_EMPLOYEE_KEY,
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
