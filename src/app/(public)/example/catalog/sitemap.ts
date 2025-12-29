import type { MetadataRoute } from 'next';
import { CATALOG, ITEM } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';
import { fetchCatalog } from 'entities/Example/api/request/fetchCatalog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await fetchCatalog({ pageSize: 1000 });

    return <MetadataRoute.Sitemap>[
        {
            url: getAbsoluteUrl(CATALOG),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...data.map(({ id }) => ({
            url: getAbsoluteUrl(ITEM(id)),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        })),
    ];
}
