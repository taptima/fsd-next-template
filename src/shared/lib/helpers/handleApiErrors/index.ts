import type { APIResponse } from 'shared/types/api';

type Parameters = {
    response: APIResponse<object> | undefined;
    onSuccess?: () => void | Promise<void>;
    onError?: () => void | Promise<void>;
};

export const handleApiErrors = async (parameters: Parameters) => {
    const { response, onSuccess, onError } = parameters;

    if (!response || response.errors) {
        await onError?.();

        return;
    }

    await onSuccess?.();
};
