import type { MenuItem } from 'shared/ui/display/Menu';
import EmployeesIcon from 'shared/assets/icons/users.svg';
import { ADMIN_EMPLOYEES } from 'shared/const/pageRoutes';

export const ITEMS: MenuItem[] = [
    {
        href: ADMIN_EMPLOYEES,
        Icon: EmployeesIcon,
        label: 'Сотрудники',
    },
];
