import { API_BASE_URL } from 'shared/const/env';

export const getAbsoluteUrl = (url: string) => `${API_BASE_URL}${url}`;
