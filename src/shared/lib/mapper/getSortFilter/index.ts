import type { SortOrder } from 'antd/es/table/interface';

const MAP_SORTING_ORDER_TO_BOOLISH: Record<NonNullable<SortOrder>, boolean> = {
    ascend: true,
    descend: false,
};

export const getSortFilter = (order?: SortOrder): boolean | undefined => {
    if (!order) {
        return undefined;
    }

    return MAP_SORTING_ORDER_TO_BOOLISH[order];
};
