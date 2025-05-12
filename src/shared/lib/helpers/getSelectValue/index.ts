import type { DefaultOptionType } from 'antd/es/select';

/**
 * @description Select value can either be `DefaultOptionType` (on form init) or `T` (on option change). This helper gets the `T` value in both cases.
 * @example getSelectValue<RoleTypeEnum>(role)
 */
export const getSelectValue = <T>(optionOrValue: DefaultOptionType | null | T) => {
    if (typeof optionOrValue === 'object') {
        return (optionOrValue as DefaultOptionType | null)?.value as T;
    }

    return optionOrValue as T;
};
