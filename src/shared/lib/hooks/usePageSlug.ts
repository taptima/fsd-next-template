import { useParams } from 'next/navigation';
import type { SlugFilter } from 'shared/types/page';

export const usePageSlug = () => {
    const { slug = '' } = useParams<SlugFilter>() ?? {};

    return slug;
};
