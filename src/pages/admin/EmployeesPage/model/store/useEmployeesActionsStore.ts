import type { StoreActions } from 'shared/types/store';
import type { User } from 'entities/User';
import { createStore } from 'shared/config/project/createStore';

type EmployeesActionsStore = {
    employeeForView: User | null;
    employeeForEdit: User | null;
    employeeForDeletion: User | null;
    employeeForBlocking: User | null;
    employeeForUnblocking: User | null;
    employeeForChangingPassword: User | null;
};

export const useEmployeesActionsStore = createStore<
    EmployeesActionsStore & StoreActions<EmployeesActionsStore>
>(
    (set) => ({
        employeeForView: null,
        employeeForEdit: null,
        employeeForDeletion: null,
        employeeForBlocking: null,
        employeeForUnblocking: null,
        employeeForChangingPassword: null,
        actions: {
            setEmployeeForView: (employeeForView) => set(() => ({ employeeForView })),
            setEmployeeForEdit: (employeeForEdit) => set(() => ({ employeeForEdit })),
            setEmployeeForDeletion: (employeeForDeletion) => set(() => ({ employeeForDeletion })),
            setEmployeeForBlocking: (employeeForBlocking) => set(() => ({ employeeForBlocking })),
            setEmployeeForUnblocking: (employeeForUnblocking) =>
                set(() => ({ employeeForUnblocking })),
            setEmployeeForChangingPassword: (employeeForChangingPassword) =>
                set(() => ({ employeeForChangingPassword })),
        },
    }),
    'EmployeesActionsStore',
);
