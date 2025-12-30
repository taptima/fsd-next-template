import { BASE_URL } from 'shared/const/env';

export const getAbsoluteUrl = (url: string) => `${BASE_URL}${url}`;
