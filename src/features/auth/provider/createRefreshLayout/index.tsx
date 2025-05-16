'use client';

import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import type { RoleTypeEnum } from 'entities/User';
import { frontendApiClient } from 'shared/lib/api/client';
import { useUser } from 'entities/User/api/swr/useUser';
import { useRefreshMutation } from 'features/auth/api/swr/useRefreshMutation';
import { RefreshLayout as BaseRefreshLayout } from 'features/auth/ui/RefreshLayout';

type Options = {
    roles: RoleTypeEnum[];
    redirectHref: string;
};

type Props = PropsWithChildren & Options;

const RefreshLayout: FC<Props> = (props) => {
    const { children, roles, redirectHref } = props;
    const { data, isLoading: isUserLoading } = useUser();
    const { role } = data ?? {};
    const isAuthorized = !!frontendApiClient.getAccessToken();
    const isAllowed = !!role && roles.includes(role);
    const { trigger, isMutating } = useRefreshMutation();
    const [isRefreshing, setIsRefreshing] = useState(!isAuthorized);
    const isInitialRender = useRef(true);
    const isLoading = isUserLoading || isRefreshing;

    useEffect(() => {
        if (!isInitialRender.current || isAuthorized) {
            return;
        }

        isInitialRender.current = false;
        trigger().finally(() => setIsRefreshing(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BaseRefreshLayout
            isLoading={isLoading || isMutating}
            isAuthorized={isAuthorized}
            isAllowed={isAllowed}
            redirectHref={redirectHref}
        >
            {children}
        </BaseRefreshLayout>
    );
};

export const createRefreshLayout = <T extends object>(Component: FC<T>, options: Options) => {
    // eslint-disable-next-line react/display-name
    return (props: T) => {
        return (
            <RefreshLayout {...options}>
                <Component {...props} />
            </RefreshLayout>
        );
    };
};
