import { EXAMPLE } from 'shared/const/pageRoutes';
import { EXAMPLE_BREADCRUMBS } from 'features/navigation/model/const/breadcrumbs';
import { getBreadcrumbsJsonLd } from 'features/seo/model/helper/getBreadcrumbsJsonLd';
import { getPageJsonLd } from 'features/seo/model/helper/getPageJsonLd';
import { DESCRIPTION, KEYWORDS, TITLE } from './meta';

const PAGE_JSON_LD = getPageJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    url: EXAMPLE,
});
const BREADCRUMBS_JSON_LD = getBreadcrumbsJsonLd(EXAMPLE_BREADCRUMBS);

export const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [PAGE_JSON_LD, BREADCRUMBS_JSON_LD],
};
