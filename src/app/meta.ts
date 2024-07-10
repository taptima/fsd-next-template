import type { Metadata, Viewport } from 'next';
import { API_BASE_URL } from 'shared/const/env';
import {
    ADDRESS,
    DESCRIPTION,
    EMAIL,
    KEYWORDS,
    LATITUDE,
    LOCALITY,
    LONGITUDE,
    MAIN_IMAGE,
    PHONE,
    POSTAL_CODE,
    REGION,
    SITE_NAME,
    TITLE,
} from 'shared/const/seo';

export const metadata: Metadata = {
    title: {
        default: TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: DESCRIPTION,
    keywords: KEYWORDS,
    alternates: {
        canonical: API_BASE_URL,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        siteName: SITE_NAME,
        url: API_BASE_URL,
        locale: 'ru_RU',
        images: [
            {
                url: MAIN_IMAGE,
                type: 'image/png',
            },
        ],
    },
    other: {
        'business:contact_data:region': REGION,
        'business:contact_data:country_name': REGION,
        'business:contact_data:locality': LOCALITY,
        'business:contact_data:street_address': ADDRESS,
        'business:contact_data:postal_code': POSTAL_CODE,
        'business:contact_data:email': EMAIL,
        'business:contact_data:phone_number': PHONE,
        'place:location:latitude': LATITUDE,
        'place:location:longitude': LONGITUDE,
        'business:contact_data:website': API_BASE_URL,
        'image_src': MAIN_IMAGE,
        'copyright': SITE_NAME,
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export const viewport: Viewport = {
    themeColor: '#0b0b13',
};
