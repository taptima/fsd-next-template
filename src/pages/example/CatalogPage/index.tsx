import type { FC } from 'react';
import { Client } from './client';
import { SSR } from './ssr';

export const CatalogPage: FC = () => {
    return (
        <SSR>
            <Client />
        </SSR>
    );
};
