import { useParams } from 'next/navigation';
import type { IdParam } from 'shared/types/page';

export const usePageId = () => {
    const { id = '' } = useParams<IdParam>() ?? {};

    return Number(id);
};
