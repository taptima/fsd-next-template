import useSWR from 'swr';
import { frontendApiClient } from 'shared/lib/api/client';
import { getUser } from 'entities/User/api/request/getUser';
import { USER_KEY } from './keys';

export const useUser = () => {
    const token = frontendApiClient.getAccessToken();

    return useSWR(
        token ? USER_KEY : null,
        async () => {
            const response = await getUser();

            return response;
        },
        {
            shouldRetryOnError: false,
        },
    );
};
