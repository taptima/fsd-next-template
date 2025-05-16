export type SWRKey<Filters = object> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any;
    filters?: Filters;
};
