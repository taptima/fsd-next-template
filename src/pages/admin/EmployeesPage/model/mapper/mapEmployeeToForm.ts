import type { User } from 'entities/User';
import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { mapEnumToOption } from 'shared/lib/helpers/mapEnumToOption';
import { prettifyPhone } from 'shared/lib/helpers/prettifyPhone';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';

export const mapEmployeeToForm = (user: User): EmployeeForm => {
    const {
        lastname = '',
        firstname = '',
        middlename = '',
        email = '',
        phone = '',
        role,
    } = user ?? {};

    return {
        surname: lastname,
        firstname,
        middlename,
        email,
        phone: prettifyPhone(phone),
        role: mapEnumToOption(role, MAP_USER_ROLE_TO_TEXT),
    };
};
