import type { FC, PropsWithChildren } from 'react';
import { unstable_serialize } from 'swr';
import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { composeSWRKey } from 'shared/lib/helpers/composeSWRKey';
import { fetchCatalog } from 'entities/Example/api/request/fetchCatalog';
import { CATALOG_KEY } from 'entities/Example/api/swr/keys';
import { SWRFallback } from 'shared/providers/SWRFallback';
import { INITIAL_CATALOG_FILTER } from './model/const/filter';

type Props = PropsWithChildren;

export const SSR: FC<Props> = async (props) => {
    const { children } = props;
    const catalog = await fetchCatalog();

    return (
        <SWRFallback
            fallback={{
                [unstable_serialize(
                    composeSWRKey<CatalogFilter>(CATALOG_KEY, INITIAL_CATALOG_FILTER),
                )]: catalog,
            }}
        >
            {children}
        </SWRFallback>
    );
};
