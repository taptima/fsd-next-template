import useSWRMutation from 'swr/mutation';
import { delay } from 'shared/lib/helpers/delay';
import { SIGN_IN_KEY } from './keys';

type SignInPayload = {
    username: string;
    password: string;
};

type SignInResponse = {
    success: boolean;
};

export const useSignInMutation = () => {
    return useSWRMutation<SignInResponse, Error, string, SignInPayload>(SIGN_IN_KEY, async () => {
        await delay(2000);

        return {
            success: true,
        };
    });
};
