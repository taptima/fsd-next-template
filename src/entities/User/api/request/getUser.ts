import type { User } from 'entities/User/model/types/user';
import { delay } from 'shared/lib/helpers/delay';
import { RoleTypeEnum } from 'entities/User/model/types/roleTypeEnum';

export const getUser = async () => {
    await delay(1000);

    return <User>{
        id: 1,
        lastname: 'Фамилия',
        firstname: 'Имя',
        middlename: 'Отчество',
        role: RoleTypeEnum.RoleSuperAdmin,
    };
};
