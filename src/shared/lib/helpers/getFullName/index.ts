import type { NamedEntity } from 'shared/types/namedEntity';
import type { Nullable } from 'shared/types/utility';

export const getFullName = (entity: Nullable<NamedEntity>) => {
    const { lastname, firstname, middlename } = entity ?? {};

    return [lastname, firstname, middlename].filter(Boolean).join(' ');
};
