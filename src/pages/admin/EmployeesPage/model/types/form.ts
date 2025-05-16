import type { DefaultOptionType } from 'antd/es/select';

export type EmployeeForm = {
    surname: string;
    firstname: string;
    middlename: string;
    email: string;
    password?: string | null;
    phone: string;
    role: DefaultOptionType | null;
};

export type ChangeEmployeePasswordForm = {
    password: string;
    confirmPassword: string;
};
