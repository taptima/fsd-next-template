'use client';

import type { FC } from 'react';
import { useItem } from 'entities/Example/api/swr/useItem';

export const Client: FC = () => {
    const { data } = useItem();
    const { name } = data ?? {};

    return name;
};
