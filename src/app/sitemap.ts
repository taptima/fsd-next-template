import type { MetadataRoute } from 'next';
import { MAIN_PAGE } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: getAbsoluteUrl(MAIN_PAGE),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
