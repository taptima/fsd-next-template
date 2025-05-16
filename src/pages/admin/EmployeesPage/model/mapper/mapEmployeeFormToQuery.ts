import type { EmployeeForm } from 'pages/admin/EmployeesPage/model/types/form';
import { getSelectValue } from 'shared/lib/helpers/getSelectValue';
import { sanitizePhone } from 'shared/lib/helpers/sanitizePhone';
import { RoleTypeEnum } from 'entities/User';

// use gql import
type UserInput = object;

export const mapEmployeeFormToQuery = (form: EmployeeForm): UserInput => {
    const { surname, firstname, middlename, email, password, phone = '', role } = form ?? {};

    return {
        lastname: surname,
        firstname,
        middlename,
        email,
        password,
        phone: sanitizePhone(phone),
        role: getSelectValue<RoleTypeEnum>(role),
    };
};
