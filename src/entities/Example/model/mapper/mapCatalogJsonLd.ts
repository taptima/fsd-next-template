import type { Item } from 'entities/Example/model/types/item';
import { ITEM } from 'shared/const/pageRoutes';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';

type Options = {
    name: string;
    url: string;
    data: Item[];
};

export const mapCatalogJsonLd = (options: Options) => {
    const { name: pageName, url: pageUrl, data } = options;

    return {
        '@type': 'ItemList',
        name: pageName,
        url: getAbsoluteUrl(pageUrl),
        numberOfItems: data.length,
        itemListOrder: 'https://schema.org/ItemListOrderUnordered',
        itemListElement: data.map(({ id, name, description, image }, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: getAbsoluteUrl(ITEM(id)),
            name,
            description,
            image: {
                '@type': 'ImageObject',
                url: image,
            },
        })),
    };
};
