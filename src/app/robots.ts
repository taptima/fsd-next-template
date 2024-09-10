import type { MetadataRoute } from 'next';
import { MAIN_PAGE } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [MAIN_PAGE],
        },
        sitemap: getAbsoluteUrl('/sitemap.xml'),
    };
}
