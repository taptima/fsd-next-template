import type { ReactNode } from 'react';

export type DataEntry = {
    term: ReactNode;
    description: ReactNode;
    isVisible?: boolean;
};

export type DataList = {
    title?: string;
    entries: DataEntry[];
};

export type DataListVariant = 'default' | 'compact';
