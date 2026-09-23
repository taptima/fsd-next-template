import type { StoreActions } from 'shared/types/store';
import type { RoleTypeEnum } from 'entities/User';
import { TABLE_PAGE_SIZE } from 'shared/const/app';
import { createStore } from 'shared/config/project/createStore';
import { DEFAULT_BANNED_FILTER } from 'entities/Blockable/model/const/filters';
import { DEFAULT_EMPLOYEE_ROLE_FILTER } from 'entities/User/model/const/filters';

type EmployeesPageStore = {
    orderById: boolean | undefined;
    idFilter: string | undefined;
    orderByFullname: boolean | undefined;
    fullnameFilter: string | undefined;
    orderByRole: boolean | undefined;
    roleFilter: RoleTypeEnum[];
    bannedFilter: boolean[];
    page: number;
    pageSize: number;
};

type EmployeesPageActions = {
    resetIdFilter: () => void;
    resetFullnameFilter: () => void;
    resetRoleFilter: () => void;
    resetBannedFilter: () => void;
};

export const useEmployeesPageStore = createStore<
    EmployeesPageStore & StoreActions<EmployeesPageStore, EmployeesPageActions>
>(
    (set) => ({
        orderById: undefined,
        idFilter: undefined,
        orderByFullname: undefined,
        fullnameFilter: undefined,
        orderByRole: undefined,
        roleFilter: DEFAULT_EMPLOYEE_ROLE_FILTER,
        bannedFilter: DEFAULT_BANNED_FILTER,
        page: 1,
        pageSize: TABLE_PAGE_SIZE,
        actions: {
            setOrderById: (orderById) => set(() => ({ orderById })),
            setIdFilter: (idFilter) =>
                set(() => ({ idFilter, page: 1, pageSize: TABLE_PAGE_SIZE })),
            setOrderByFullname: (orderByFullname) => set(() => ({ orderByFullname })),
            setFullnameFilter: (fullnameFilter) =>
                set(() => ({ fullnameFilter, page: 1, pageSize: TABLE_PAGE_SIZE })),
            setOrderByRole: (orderByRole) => set(() => ({ orderByRole })),
            setRoleFilter: (roleFilter) =>
                set(() => ({ roleFilter, page: 1, pageSize: TABLE_PAGE_SIZE })),
            setBannedFilter: (bannedFilter) =>
                set(() => ({ bannedFilter, page: 1, pageSize: TABLE_PAGE_SIZE })),
            setPage: (page) => set(() => ({ page })),
            setPageSize: (pageSize) => set(() => ({ pageSize, page: 1 })),
            resetIdFilter: () => set(() => ({ idFilter: undefined })),
            resetFullnameFilter: () => set(() => ({ fullnameFilter: undefined })),
            resetRoleFilter: () => set(() => ({ roleFilter: DEFAULT_EMPLOYEE_ROLE_FILTER })),
            resetBannedFilter: () => set(() => ({ bannedFilter: DEFAULT_BANNED_FILTER })),
        },
    }),
    'EmployeesPageStore',
);
