import type { ItemFilter } from 'entities/Example/api/types/filter';
import { delay } from 'shared/lib/helpers/delay';
import { CATALOG_MOCK } from 'entities/Example/mock';

export const fetchItem = async (filters?: ItemFilter) => {
    const { id } = filters ?? {};

    await delay(500);

    return CATALOG_MOCK.find((record) => record.id === id);
};
