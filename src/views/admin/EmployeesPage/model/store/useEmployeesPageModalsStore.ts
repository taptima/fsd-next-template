import { createModalsStore } from 'shared/config/project/createModalsStore';

export const useEmployeesPageModalStore = createModalsStore(
    [
        'ViewEmployee',
        'AddEmployee',
        'EditEmployee',
        'DeleteEmployee',
        'BlockEmployee',
        'UnblockEmployee',
        'ChangeEmployeePassword',
    ],
    'EmployeesPageModalStore',
);
