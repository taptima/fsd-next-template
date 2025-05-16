import useSWR from 'swr';
import type { SWRKey } from 'shared/types/api/swrKey';
import { delay } from 'shared/lib/helpers/delay';
import { prepareIdQuery } from 'shared/lib/helpers/prepareIdQuery';
import { prepareBannedQuery } from 'entities/Blockable/model/helper/prepareBannedQuery';
import { EMPLOYEES_MOCK } from 'entities/User/mock';
import { useEmployeesPageStore } from 'pages/admin/EmployeesPage/model/store/useEmployeesPageStore';
import { EMPLOYEES_KEY } from './keys';

export const useEmployees = () => {
    const orderById = useEmployeesPageStore.use.orderById();
    const idFilter = useEmployeesPageStore.use.idFilter();
    const orderByFullname = useEmployeesPageStore.use.orderByFullname();
    const fullnameFilter = useEmployeesPageStore.use.fullnameFilter();
    const orderByRole = useEmployeesPageStore.use.orderByRole();
    const roleFilter = useEmployeesPageStore.use.roleFilter();
    const bannedFilter = useEmployeesPageStore.use.bannedFilter();
    const page = useEmployeesPageStore.use.page();
    const pageSize = useEmployeesPageStore.use.pageSize();

    return useSWR(
        <SWRKey<unknown>>{
            key: EMPLOYEES_KEY,
            filters: {
                id: prepareIdQuery(idFilter),
                orderById,
                orderByFullname,
                fullname: fullnameFilter,
                orderByRole,
                role: roleFilter,
                banned: prepareBannedQuery(bannedFilter),
                pageNumber: page,
                pageSize,
            },
        },
        async () => {
            await delay(1000);

            return EMPLOYEES_MOCK;
        },
        {
            keepPreviousData: true,
            shouldRetryOnError: false,
        },
    );
};
