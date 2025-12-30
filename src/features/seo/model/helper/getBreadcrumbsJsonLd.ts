import type { Breadcrumb } from 'features/navigation/model/types/breadcrumb';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

export const getBreadcrumbsJsonLd = (breadcrumbs: Breadcrumb[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map(({ title, href }, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: title,
            item: href ? getAbsoluteUrl(href) : '',
        })),
    };
};
