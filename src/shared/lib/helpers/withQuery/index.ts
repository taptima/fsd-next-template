type DefaultParams = Record<string, string | number | undefined>;

export const withQuery = <Params extends DefaultParams = DefaultParams>(
    url: string,
    params?: Params,
) => {
    const query = new URLSearchParams();

    Object.entries(params ?? {}).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            query.set(key, value.toString());
        }
    });

    return query.toString() ? `${url}?${query.toString()}` : url;
};
