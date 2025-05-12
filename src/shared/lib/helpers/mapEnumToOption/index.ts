import type { DefaultOptionType } from 'antd/es/select';
import type { Nullable } from 'shared/types/utility';

/**
 * @example mapEnumToOption(role, MAP_USER_ROLE_TO_TEXT)
 */
export const mapEnumToOption = <T extends string>(
    value: Nullable<T>,
    mapper?: Record<T, string>,
): DefaultOptionType | null => {
    if (!value) {
        return null;
    }

    return {
        value,
        label: mapper?.[value] ?? value,
    };
};
