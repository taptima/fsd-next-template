import type { PaginationFilter } from 'shared/types/api/filter';

export type ItemFilter = {
    id: number;
};

export type CatalogFilter = PaginationFilter & {
    category?: number;
};
