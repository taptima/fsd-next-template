import type { APIError } from './apiError';

export type APIResponse<ResponseType extends object = object> = {
    data: ResponseType;
    errors?: APIError[];
};
