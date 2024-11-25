import type { Role } from './role';

export type User = {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    middlename: string;
    banned: boolean;
    phone: string;
    role: Role;
};
