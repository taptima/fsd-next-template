import type { Metadata } from 'next';
import { PREVIEW_IMAGE } from 'features/seo/model/const/meta';

type Options = {
    title: string;
    description: string;
    keywords: string;
};

export const getPageMetadata = (options: Options): Metadata => {
    const { title, description, keywords } = options;

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            images: PREVIEW_IMAGE,
        },
    };
};
