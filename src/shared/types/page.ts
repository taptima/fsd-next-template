export type IdFilter = { id: string };
export type SlugFilter = { slug: string };

export type SearchParams = Record<string, string | string[] | undefined>;

export type PageParams<T> = { params: Promise<T> };

export type IdParams = PageParams<IdFilter>;
export type SlugParams = PageParams<SlugFilter>;
