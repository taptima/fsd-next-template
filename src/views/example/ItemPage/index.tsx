import type { FC } from 'react';
import type { PageId } from 'shared/types/page';
import { Client } from './client';
import { SSR } from './ssr';

type Props = PageId;

export const ItemPage: FC<Props> = async (props) => {
    return (
        <SSR {...props}>
            <Client />
        </SSR>
    );
};
