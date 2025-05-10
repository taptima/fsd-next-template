import type { APIError } from './apiError';

export type APIResponse<ResponseType = unknown> = {
    data: ResponseType;
    errors?: APIError[];
};
