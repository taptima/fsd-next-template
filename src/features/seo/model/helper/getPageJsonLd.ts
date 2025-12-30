import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';
import { ORGANIZATION_ID } from 'features/seo/model/const/jsonLd';

/** string(s), templates, null, undefined */
type MetaString = unknown;

type Options = {
    title: MetaString;
    description: MetaString;
    keywords: MetaString;
    url: string;
};

export const getPageJsonLd = (options: Options) => {
    const { title, description, keywords, url } = options;

    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        keywords,
        url: getAbsoluteUrl(url),
        mainEntity: { '@id': ORGANIZATION_ID },
    };
};
