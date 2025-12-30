import { API_BASE_URL } from 'shared/const/env';
import { DESCRIPTION, KEYWORDS, TITLE } from 'features/seo/model/const/meta';
import { getPageJsonLd } from 'features/seo/model/helper/getPageJsonLd';

const PAGE_JSON_LD = getPageJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    url: API_BASE_URL,
});

export const HOME_JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [PAGE_JSON_LD],
};
