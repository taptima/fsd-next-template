'use client';

import type { FC } from 'react';
import { useCatalog } from 'entities/Example/api/swr/useCatalog';

export const Client: FC = () => {
    const { data = [] } = useCatalog();

    return <>{data.map(({ name }) => name)}</>;
};
