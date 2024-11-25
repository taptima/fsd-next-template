import type { NamedEntity } from 'shared/types/namedEntity';
import type { Nullable } from 'shared/types/utility';

export const getFullName = (entity: Nullable<NamedEntity>) => {
    const { lastname, firstname, middlename } = entity ?? {};

    const fullName = [];

    if (lastname) {
        fullName.push(lastname);
    }

    if (firstname) {
        fullName.push(firstname);
    }

    if (middlename) {
        fullName.push(middlename);
    }

    return fullName.join(' ');
};
