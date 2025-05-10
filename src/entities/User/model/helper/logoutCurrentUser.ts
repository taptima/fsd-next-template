import { useAuthStore } from 'app/model/store/useAuthStore';
import { frontendApiClient } from 'shared/lib/api/client';

const { actions } = useAuthStore.getState();
const { setToken } = actions;

export const logoutCurrentUser = () => {
    frontendApiClient.setAccessToken(undefined);
    frontendApiClient.setRefreshToken(undefined);
    setToken(undefined);
};
