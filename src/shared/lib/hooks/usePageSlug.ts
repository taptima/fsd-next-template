import { useParams } from 'next/navigation';
import type { SlugParam } from 'shared/types/page';

export const usePageSlug = () => {
    const { slug = '' } = useParams<SlugParam>() ?? {};

    return slug;
};
