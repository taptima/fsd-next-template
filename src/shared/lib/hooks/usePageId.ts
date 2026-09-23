import { useParams } from 'next/navigation';
import type { IdFilter } from 'shared/types/page';

export const usePageId = () => {
    const { id = '' } = useParams<IdFilter>() ?? {};

    return Number(id);
};
