import type { DefaultOptionType } from 'antd/es/select';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { RoleTypeEnum } from 'entities/User/model/types/roleTypeEnum';

export const EMPLOYEE_ROLE_OPTIONS = [
    RoleTypeEnum.RoleAdmin,
    RoleTypeEnum.RoleSuperAdmin,
].map<DefaultOptionType>((status) => ({
    value: status,
    label: MAP_USER_ROLE_TO_TEXT[status],
}));
