'use client';

import type { FC, PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

type SWRFallbackProps = PropsWithChildren & {
    fallback: Record<string, unknown>;
};

export const SWRFallback: FC<SWRFallbackProps> = (props) => {
    const { children, fallback } = props;

    return <SWRConfig value={{ fallback }}>{children}</SWRConfig>;
};
