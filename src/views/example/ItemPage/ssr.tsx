import type { FC, PropsWithChildren } from 'react';
import { unstable_serialize } from 'swr';
import type { PageId } from 'shared/types/page';
import type { ItemFilter } from 'entities/Example/api/types/filter';
import { composeSWRKey } from 'shared/lib/helpers/composeSWRKey';
import { fetchItem } from 'entities/Example/api/request/fetchItem';
import { ITEM_KEY } from 'entities/Example/api/swr/keys';
import { SWRFallback } from 'shared/providers/SWRFallback';

type Props = PropsWithChildren & PageId;

export const SSR: FC<Props> = async (props) => {
    const { children, params } = props;
    const { id: idParam } = await params;
    const id = Number(idParam);
    const item = await fetchItem({ id });

    return (
        <SWRFallback
            fallback={{
                [unstable_serialize(composeSWRKey<ItemFilter>(ITEM_KEY, { id }))]: item,
            }}
        >
            {children}
        </SWRFallback>
    );
};
