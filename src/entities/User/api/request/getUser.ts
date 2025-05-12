import type { User } from 'entities/User/model/types/user';
import { delay } from 'shared/lib/helpers/delay';

export const getUser = async () => {
    await delay(1000);

    return <User>{
        id: 1,
        lastname: 'Фамилия',
        firstname: 'Имя',
        middlename: 'Отчество',
    };
};
