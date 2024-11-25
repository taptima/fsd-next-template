import type { MetadataRoute } from 'next';
import { HOME } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [HOME],
        },
        sitemap: getAbsoluteUrl('/sitemap.xml'),
    };
}
