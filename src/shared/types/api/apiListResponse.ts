export type ApiListResponse<T = object> = {
    elements: T[];
    pagination:
        | {
              currentPageNumber: number;
              itemsCount: number;
              pageSize: number;
              pagesCount: number;
          }
        | undefined;
};
