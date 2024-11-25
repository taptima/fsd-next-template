import type { ColumnFilterItem } from 'antd/es/table/interface';
import { MAP_USER_ROLE_TO_TEXT } from 'entities/User/model/mapper/mapUserRoleToText';
import { DEFAULT_EMPLOYEE_ROLE_FILTER } from './filters';

export const EMPLOYEE_ROLE_FILTERS = DEFAULT_EMPLOYEE_ROLE_FILTER.map<ColumnFilterItem>(
    (status) => ({
        value: status,
        text: MAP_USER_ROLE_TO_TEXT[status],
    }),
);
