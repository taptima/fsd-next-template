import { CATALOG } from 'shared/const/pageRoutes';
import { fetchCatalog } from 'entities/Example/api/request/fetchCatalog';
import { mapCatalogJsonLd } from 'entities/Example/model/mapper/mapCatalogJsonLd';
import { EXAMPLE_BREADCRUMBS } from 'features/navigation/model/const/breadcrumbs';
import { getBreadcrumbsJsonLd } from 'features/seo/model/helper/getBreadcrumbsJsonLd';
import { getPageJsonLd } from 'features/seo/model/helper/getPageJsonLd';
import { DESCRIPTION, KEYWORDS, TITLE } from './meta';

const PAGE_JSON_LD = getPageJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    url: CATALOG,
});
const BREADCRUMBS_JSON_LD = getBreadcrumbsJsonLd(EXAMPLE_BREADCRUMBS);

export const getJsonLd = async () => {
    const data = await fetchCatalog({ pageSize: 1000 });

    return {
        '@context': 'https://schema.org',
        '@graph': [
            PAGE_JSON_LD,
            BREADCRUMBS_JSON_LD,
            mapCatalogJsonLd({ name: TITLE, url: CATALOG, data }),
        ],
    };
};
