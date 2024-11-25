import type { User } from './model/types/user';
import { Role } from './model/types/role';

export const USERS_MOCK: User[] = [
    {
        id: 1,
        lastname: 'Петровская',
        firstname: 'Ольга',
        middlename: 'Дмитриевна',
        role: Role.RoleAdmin,
        username: 'asteward',
        phone: '+7 (903) 880-93-38',
        banned: false,
    },
    {
        id: 2,
        lastname: 'Кулешова',
        firstname: 'Елена',
        middlename: 'Валерьевна',
        role: Role.RoleUser,
        phone: '+7 (903) 679-96-15',
        username: 'astewardwiyruefhwl',
        banned: false,
    },
    {
        id: 3,
        lastname: 'Кулешова',
        firstname: 'Елена',
        middlename: 'Валерьевна',
        role: Role.RoleUser,
        phone: '+7 (903) 679-96-14',
        username: 'khowarduweb',
        banned: false,
    },
    {
        id: 4,
        lastname: 'Петровская',
        firstname: 'Ольга',
        middlename: 'Дмитриевна',
        role: Role.RoleAdmin,
        phone: '+7 (903) 880-91-85',
        username: 'arussel',
        banned: false,
    },
    {
        id: 5,
        lastname: 'Василенко',
        firstname: 'Кирилл',
        middlename: 'Никитич',
        role: Role.RoleUser,
        phone: '+7 (903) 840-31-53',
        username: 'afisherlala',
        banned: false,
    },
    {
        id: 6,
        lastname: 'Василенко',
        firstname: 'Карл',
        middlename: 'Николаевич',
        role: Role.RoleUser,
        phone: '+7 (903) 880-93-38',
        username: 'prichards',
        banned: true,
    },
    {
        id: 7,
        lastname: 'Вечерняя',
        firstname: 'Зоря',
        middlename: 'Сергеевна',
        role: Role.RoleAdmin,
        phone: '+7 (903) 880-91-85',
        username: 'cwilliamson',
        banned: true,
    },
];