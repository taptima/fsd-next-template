export type IdParam = { id: string };
export type SlugParam = { slug: string };

export type PageParams<T> = { params: Promise<T> };

export type PageId = PageParams<IdParam>;
export type PageSlug = PageParams<SlugParam>;
