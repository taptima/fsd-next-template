import { Role } from 'entities/User';

export const MAP_USER_ROLE_TO_TEXT: Record<Role, string> = {
    [Role.RoleAdmin]: 'Администратор',
    [Role.RoleSuperAdmin]: 'Суперадминистратор',
    [Role.RoleUser]: 'Клиент',
};
