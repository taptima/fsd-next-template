import type { MetadataRoute } from 'next';
import { HOME } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: getAbsoluteUrl(HOME),
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
