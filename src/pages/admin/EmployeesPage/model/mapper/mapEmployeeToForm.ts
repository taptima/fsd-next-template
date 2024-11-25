import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { User } from 'entities/User';

export const mapEmployeeToForm = (user: User | null): EmployeeForm => {
    const {
        role = null,
        lastname = '',
        firstname = '',
        middlename = '',
        username = '',
        phone = '',
    } = user ?? {};

    return {
        role,
        surname: lastname,
        firstName: firstname,
        middleName: middlename,
        login: username,
        email: '',
        phone,
        password: '',
    };
};
