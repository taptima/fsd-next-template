import type { APIResponse } from 'shared/types/api';
import { REFRESH } from 'shared/const/apiRoutes';
import { frontendApiClient } from 'shared/lib/api/client';

export type RefreshResponse = {
    access_token: string;
    refresh_token: string;
};

export const postRefresh = () => {
    return frontendApiClient.rest.post<APIResponse<RefreshResponse>>(
        REFRESH(frontendApiClient.getRefreshToken() ?? ''),
    );
};
