import { RoleTypeEnum } from 'entities/User/model/types/roleTypeEnum';

export const MAP_USER_ROLE_TO_TEXT: Record<RoleTypeEnum, string> = {
    [RoleTypeEnum.Client]: 'Клиент',
    [RoleTypeEnum.Admin]: 'Администратор',
};
