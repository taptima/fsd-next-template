import type { GQLEntity } from 'shared/types/utility';
import type { Role } from './role';

export type User = GQLEntity<{
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    middlename: string;
    banned: boolean;
    phone: string;
    role: Role;
}>;
