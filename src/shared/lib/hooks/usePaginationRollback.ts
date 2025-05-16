import { useEffect } from 'react';
import type { ApiListResponse } from 'shared/types/api';

type Parameters = {
    data: ApiListResponse | undefined;
    setPage: (page: number) => void;
};

/**
 * @description Rolls pagination back one page on empty list (i.e. when the last element on the page gets deleted)
 */
export function usePaginationRollback(parameters: Parameters) {
    const { data, setPage } = parameters;
    const { elements = [], pagination } = data ?? {};
    const { currentPageNumber = 0, pagesCount = 0 } = pagination ?? {};

    useEffect(() => {
        if (elements.length === 0 && currentPageNumber > 1 && pagesCount > 0) {
            setPage(pagesCount);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
}
