import type { AxiosError, AxiosResponse } from 'axios';
import message from 'antd/es/message';
import { useAuthStore } from 'app/model/store/useAuthStore';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
// import { LOGIN } from 'shared/const/apiRoutes';
import { HttpCode } from 'shared/const/httpCode';
import { frontendApiClient } from 'shared/lib/api/client';
import { SIGN_IN_KEY } from './keys';

type SignInPayload = {
    username: string;
    password: string;
};

type SignInResponse = {
    access_token: string;
    refresh_token: string;
};

export const useSignInMutation = (onSuccess: () => void) => {
    return useSWRMutation<
        AxiosResponse<APIResponse<SignInResponse>>,
        unknown,
        string,
        SignInPayload
    >(
        SIGN_IN_KEY,
        async () => {
            // const response = await frontendApiClient.rest.post<APIResponse<SignInResponse>>(
            //     LOGIN,
            //     arg,
            // );

            // return response;

            return new Promise((resolve) => {
                setTimeout(() => {
                    // @ts-expect-error: unused properties omitted
                    resolve({
                        data: {
                            data: { access_token: 'accessToken', refresh_token: 'refreshToken' },
                        },
                    });
                }, 1000);
            });
        },
        {
            onSuccess: async (response) => {
                try {
                    const { access_token: accessToken = '', refresh_token: refreshToken = '' } =
                        response?.data.data ?? {};
                    frontendApiClient.setAccessToken(accessToken);
                    frontendApiClient.setRefreshToken(refreshToken);
                    useAuthStore.getState().actions.setToken(refreshToken);

                    mutate(() => true, undefined, { revalidate: false });

                    onSuccess();
                } catch (error) {
                    message.open({ type: 'error', content: 'Ошибка авторизации' });
                }
            },
            onError: (error) => {
                if ((error as AxiosError).response?.status === HttpCode.Unauthorized) {
                    message.open({ type: 'error', content: 'Ошибка авторизации' });

                    return;
                }

                if ((error as AxiosError).response?.status === HttpCode.Forbidden) {
                    message.open({ type: 'error', content: 'Пользователь заблокирован' });

                    return;
                }

                message.open({ type: 'error', content: 'Ошибка сервера' });
            },
            throwOnError: false,
        },
    );
};
