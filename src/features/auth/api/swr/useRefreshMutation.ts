import type { AxiosResponse } from 'axios';
import { useAuthStore } from 'app/model/store/useAuthStore';
import useSWRMutation from 'swr/mutation';
import type { APIResponse } from 'shared/types/api';
import { frontendApiClient } from 'shared/lib/api/client';
import { handleApiErrors } from 'shared/lib/helpers/handleApiErrors';
import { useUser } from 'entities/User/api/swr/useUser';
import { postRefresh, RefreshResponse } from 'features/auth/api/request/postRefresh';
import { REFRESH_KEY } from './keys';

export const useRefreshMutation = () => {
    const { mutate: mutateUser } = useUser();

    return useSWRMutation<AxiosResponse<APIResponse<RefreshResponse>>, unknown, string>(
        REFRESH_KEY,
        async () => {
            const response = await postRefresh();

            await handleApiErrors({
                response,
                onSuccess: async () => {
                    const { access_token: accessToken, refresh_token: refreshToken } =
                        response?.data.data ?? {};

                    frontendApiClient.setAccessToken(accessToken);
                    frontendApiClient.setRefreshToken(refreshToken);
                    useAuthStore.getState().actions.setToken(refreshToken);

                    await mutateUser();
                },
            });

            return response;
        },
        {
            throwOnError: false,
        },
    );
};
