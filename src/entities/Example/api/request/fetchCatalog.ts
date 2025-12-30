import type { CatalogFilter } from 'entities/Example/api/types/filter';
import { delay } from 'shared/lib/helpers/delay';
import { CATALOG_MOCK } from 'entities/Example/mock';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchCatalog = async (filters?: CatalogFilter) => {
    await delay(500);

    return CATALOG_MOCK;
};
