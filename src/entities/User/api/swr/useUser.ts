import useSWR from 'swr';
import { delay } from 'shared/lib/helpers/delay';
import { Role, User } from 'entities/User';
import { USER_KEY } from './keys';

const EMPTY_USER: User = {
    id: NaN,
    username: 'Empty User',
    phone: '',
    firstname: '',
    middlename: '',
    lastname: '',
    role: Role.RoleAdmin,
    banned: false,
};

export const useUser = () => {
    return useSWR(
        // frontendApiClient.getAccessToken() ? USER_KEY : null,
        USER_KEY,
        async () => {
            await delay(2000);

            return EMPTY_USER;
        },
        {
            shouldRetryOnError: false,
        },
    );
};
