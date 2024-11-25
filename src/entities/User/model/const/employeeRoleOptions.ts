import type { DefaultOptionType } from 'antd/es/select';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { Role } from 'entities/User/model/types/role';

export const EMPLOYEE_ROLE_OPTIONS = [Role.RoleAdmin, Role.RoleSuperAdmin].map<DefaultOptionType>(
    (status) => ({
        value: status,
        label: MAP_USER_ROLE_TO_TEXT[status],
    }),
);
