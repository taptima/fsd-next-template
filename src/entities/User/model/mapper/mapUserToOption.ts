import type { DefaultOptionType } from 'antd/es/select';
import type { User } from 'entities/User/model/types/user';
import { getFullName } from 'shared/lib/helpers/getFullName';

export const mapUserToOption = (record: User): DefaultOptionType | null => {
    if (!record) {
        return null;
    }

    const { id } = record;

    return {
        value: id,
        label: getFullName(record),
    };
};
