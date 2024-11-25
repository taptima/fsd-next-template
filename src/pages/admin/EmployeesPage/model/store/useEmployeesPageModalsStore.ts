import { createModalsStore } from 'shared/config/project/createModalsStore';

export const useEmployeesPageModalStore = createModalsStore(
    [
        'AddEmployee',
        'EditEmployee',
        'DeleteEmployee',
        'ViewEmployee',
        'BlockEmployee',
        'UnblockEmployee',
        'ChangePasswordEmployee',
    ],
    'EmployeesPageModalStore',
);
