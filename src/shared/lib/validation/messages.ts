import { SYMBOL_PLURALS } from 'shared/const/plurals';
import { getPlural } from 'shared/lib/helpers/getPlural';

export const fieldRequiredMessage = 'Поле обязательно для заполнения';
export const fileSizeMessage = 'Файл должен быть менее 10 МБ';
export const fileRequiredMessage = 'Необходимо прикрепить файл';

export const minSymbols = ({ min }: { min: number }) =>
    `Минимум ${min} ${getPlural(min, SYMBOL_PLURALS)}`;
export const maxSymbols = ({ max }: { max: number }) =>
    `Максимум ${max} ${getPlural(max, SYMBOL_PLURALS)}`;
