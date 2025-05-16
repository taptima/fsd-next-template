import message from 'antd/es/message';
import type { APIResponse } from 'shared/types/api';

type Parameters = {
    response: APIResponse;
    errorMessage?: string | false;
    onFulfilled?: () => void;
};

export const handleGraphQLMutationResult = (parameters: Parameters) => {
    const { response, errorMessage = 'Произошла ошибка', onFulfilled } = parameters;
    const { errors } = response;

    if (errors && errorMessage) {
        message.open({ type: 'error', content: errorMessage });

        return;
    }

    onFulfilled?.();
};
