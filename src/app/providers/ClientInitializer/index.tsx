'use client';

import { PropsWithChildren, useRef } from 'react';
import { useAuthStore } from 'app/model/store/useAuthStore';
import { frontendApiClient } from 'shared/lib/api/client';

export function ClientInitializer(props: PropsWithChildren) {
    const { children } = props;
    const isInitial = useRef(true);

    if (isInitial.current) {
        isInitial.current = false;

        const { token } = useAuthStore.getState();

        if (token) {
            frontendApiClient.setRefreshToken(token);
        }
    }

    return children;
}
