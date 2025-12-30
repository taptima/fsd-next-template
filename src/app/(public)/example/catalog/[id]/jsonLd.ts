import { ITEM } from 'shared/const/pageRoutes';
import { fetchItem } from 'entities/Example/api/request/fetchItem';
import { mapItemMetadata } from 'entities/Example/model/mapper/mapItemMetadata';
import { mapItemToJsonLd } from 'entities/Example/model/mapper/mapItemToJsonLd';
import { CATALOG_BREADCRUMBS } from 'features/navigation/model/const/breadcrumbs';
import { getBreadcrumbsJsonLd } from 'features/seo/model/helper/getBreadcrumbsJsonLd';
import { getPageJsonLd } from 'features/seo/model/helper/getPageJsonLd';

export const getJsonLd = async (id: number) => {
    const record = await fetchItem({ id });
    const { name = '' } = record ?? {};
    const { title, description, keywords } = mapItemMetadata(record);
    const url = ITEM(id);

    return {
        '@context': 'https://schema.org',
        '@graph': [
            getPageJsonLd({ title, description, keywords, url }),
            getBreadcrumbsJsonLd([...CATALOG_BREADCRUMBS, { title: name, href: url }]),
            mapItemToJsonLd(record),
        ],
    };
};
