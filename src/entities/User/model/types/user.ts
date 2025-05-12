import type { GQLEntity } from 'shared/types/utility';
import type { RoleTypeEnum } from './roleTypeEnum';
import type { UserStateEnum } from './userStateEnum';

export type User = GQLEntity<{
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
    banned: boolean;
    phone: string;
    role: RoleTypeEnum;
    state: UserStateEnum;
}>;
