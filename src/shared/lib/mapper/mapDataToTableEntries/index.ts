import type { TableEntry } from 'shared/types/table';

export const mapDataToTableEntries = <Data>(data: Data[]): TableEntry<Data>[] => {
    return data.map((entry, index) => ({
        key: String(index),
        ...entry,
    }));
};
