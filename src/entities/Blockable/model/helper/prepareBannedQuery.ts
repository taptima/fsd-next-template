import { DEFAULT_BANNED_FILTER } from 'entities/Blockable/model/const/filters';

export const prepareBannedQuery = (filters: boolean[]) => {
    const isAllSelected = DEFAULT_BANNED_FILTER.every((status) => filters.includes(status));

    if (isAllSelected) {
        return undefined;
    }

    return filters[0];
};
