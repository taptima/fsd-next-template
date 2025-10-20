import { SYMBOL_PLURALS } from 'shared/const/plurals';
import { getPlural } from 'shared/lib/helpers/getPlural';

export const requiredMessage = 'Поле обязательно для заполнения';
export const requiredFileMessage = 'Загрузите файл';

export const minSymbols = (min: number) => `Минимум ${min} ${getPlural(min, SYMBOL_PLURALS)}`;
export const maxSymbols = (max: number) => `Максимум ${max} ${getPlural(max, SYMBOL_PLURALS)}`;
export const lengthSymbols = (len: number) =>
    `Поле должно содержать ровно ${len} ${getPlural(len, SYMBOL_PLURALS)}`;
