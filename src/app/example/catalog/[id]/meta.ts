import type { Metadata } from 'next';
import type { PageId } from 'shared/types/page';
import { fetchItem } from 'entities/Example/api/request/fetchItem';
import { mapItemMetadata } from 'entities/Example/model/mapper/mapItemMetadata';

type Parameters = PageId;

export const generateMetadata = async (parameters: Parameters): Promise<Metadata> => {
    const { params } = parameters;
    const { id: queryId } = await params;
    const id = Number(queryId);
    const data = await fetchItem({ id });

    return mapItemMetadata(data);
};
