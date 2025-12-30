import type { Item } from 'entities/Example/model/types/item';
import { ITEM } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';
import { ORGANIZATION_ID } from 'features/seo/model/const/jsonLd';

export const mapItemToJsonLd = (record: Item | undefined) => {
    const { id = NaN, name, description, image } = record ?? {};
    const href = ITEM(id);
    const url = getAbsoluteUrl(href);

    return {
        '@type': 'Product',
        '@id': url,
        name,
        description,
        url,
        image,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', '@id': ORGANIZATION_ID },
        offers: {
            '@type': 'Offer',
            url,
            // price,
            // priceCurrency: 'RUB',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', '@id': ORGANIZATION_ID },
        },
    };
};
