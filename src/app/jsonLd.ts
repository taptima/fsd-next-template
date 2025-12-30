import { BASE_URL } from 'shared/const/env';
import { getAbsoluteUrl } from 'shared/lib/helpers/getAbsoluteUrl';
import { ORGANIZATION_ID } from 'features/seo/model/const/jsonLd';
import {
    ADDRESS,
    COUNTRY,
    DESCRIPTION,
    EMAIL,
    KEYWORDS,
    LOCALITY,
    PHONE,
    POSTAL_CODE,
    REGION,
    SITE_NAME,
} from 'features/seo/model/const/meta';

// const FEEDBACK_ACTION_URL = getAbsoluteUrl(`/?${ACTION_QUERY_PARAM}=${'feedback' as ActionType}`);

export const ORGANIZATION_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: BASE_URL,
    logo: getAbsoluteUrl('/favicon.ico'),
    image: getAbsoluteUrl('/preview.jpg'),
    telephone: PHONE,
    email: EMAIL,
    // vatID: INN,
    // taxID: INN,
    // foundingDate: 2000,
    foundingLocation: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            addressCountry: COUNTRY,
            addressRegion: REGION,
            addressLocality: LOCALITY,
        },
    },
    address: {
        '@type': 'PostalAddress',
        addressCountry: COUNTRY,
        addressRegion: REGION,
        addressLocality: LOCALITY,
        postalCode: POSTAL_CODE,
        streetAddress: ADDRESS,
    },
    // potentialAction: [
    //     {
    //         '@type': 'InteractAction',
    //         name: 'Запросить консультацию',
    //         target: {
    //             '@type': 'EntryPoint',
    //             urlTemplate: FEEDBACK_ACTION_URL,
    //             inLanguage: 'ru',
    //             actionPlatform: [
    //                 'http://schema.org/DesktopWebPlatform',
    //                 'http://schema.org/MobileWebPlatform',
    //             ],
    //         },
    //     },
    // ],
};

export const WEB_SITE_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    url: BASE_URL,
};
