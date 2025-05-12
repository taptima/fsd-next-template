import useSWR from 'swr';
import { delay } from 'shared/lib/helpers/delay';
import { EMPLOYEES_MOCK } from 'entities/User/mock';
import { EMPLOYEE_KEY } from './keys';

export const useEmployee = (id: number | undefined) => {
    return useSWR(
        [EMPLOYEE_KEY, id],
        async ([, currentId]) => {
            await delay(1000);

            return EMPLOYEES_MOCK.find((record) => record?.id === currentId);
        },
        {
            shouldRetryOnError: false,
        },
    );
};
