import useSWR from 'swr';
import { delay } from 'shared/lib/helpers/delay';
import { EMPLOYEES_MOCK } from 'entities/User/mock';
import { EMPLOYEE_OPTIONS_KEY } from './keys';

export const useEmployeeOptions = () => {
    return useSWR(
        EMPLOYEE_OPTIONS_KEY,
        async () => {
            await delay(1000);

            return EMPLOYEES_MOCK;
        },
        {
            shouldRetryOnError: false,
        },
    );
};
