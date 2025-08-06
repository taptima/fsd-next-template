import type { DataList } from 'shared/types/dataList';
import type { User } from 'entities/User/model/types/user';
import { getFullName } from 'shared/lib/helpers/getFullName';
import { getPhoneLinkProps } from 'shared/lib/helpers/getPhoneLinkProps';
import { Status } from 'shared/ui/display/Status';
import { Link } from 'shared/ui/navigation/Link';
import { getBannedStatus } from 'entities/Blockable/model/helper/getBannedStatus';
import { RoleTypeEnum } from 'entities/User/model/types/roleTypeEnum';
import { UserStateEnum } from 'entities/User/model/types/userStateEnum';
import { MAP_USER_ROLE_TO_TEXT } from './mapUserRoleToText';

export const mapEmployeeToDataList = (employee: User): DataList => {
    const {
        id,
        email,
        phone = '',
        role = RoleTypeEnum.RoleAdmin,
        state = UserStateEnum.Active,
    } = employee ?? {};

    return {
        entries: [
            {
                term: 'ID',
                description: id,
            },
            {
                term: 'ФИО',
                description: getFullName(employee),
            },
            {
                term: 'Email',
                description: (
                    <Link variant="secondary" href={`mailto:${email}`}>
                        {email}
                    </Link>
                ),
            },
            {
                term: 'Телефон',
                description: <Link variant="secondary" {...getPhoneLinkProps(phone)} />,
            },
            {
                term: 'Роль',
                description: MAP_USER_ROLE_TO_TEXT[role],
            },
            {
                term: 'Статус',
                description: <Status {...getBannedStatus(state === UserStateEnum.Blocked)} />,
            },
        ],
    };
};
