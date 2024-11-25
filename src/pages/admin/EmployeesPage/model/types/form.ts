import type { Role } from 'entities/User';

export type EmployeeForm = {
    role: Role | null;
    surname: string;
    firstName: string;
    middleName: string;
    login: string;
    email: string;
    phone: string;
    password?: string;
};

export type EmployeeWithPasswordForm = EmployeeForm & {
    password: string;
};
