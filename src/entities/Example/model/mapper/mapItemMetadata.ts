import type { Metadata } from 'next';
import type { Item } from 'entities/Example/model/types/item';
import { ITEM } from 'shared/const/pageRoutes';

export const mapItemMetadata = (record: Item | undefined): Metadata => {
    const { id = NaN, name, description, image = '' } = record ?? {};
    const keywords = [name].join(', ');
    const href = ITEM(id);

    return {
        title: name,
        description,
        keywords,
        alternates: {
            canonical: href,
        },
        openGraph: {
            title: name,
            description,
            url: href,
            images: [
                {
                    url: image,
                    width: 1920,
                    height: 1080,
                    type: 'image/png',
                },
            ],
        },
    };
};
