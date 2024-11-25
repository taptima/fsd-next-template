import type { FC, PropsWithChildren } from 'react';
import { BlockingLoader } from 'shared/ui/display/BlockingLoader';
import { ErrorState } from './ErrorState';

type Props = PropsWithChildren & {
    isLoading: boolean;
    isAuthorized: boolean;
    isAllowed: boolean;
    redirectHref: string;
};

export const RefreshLayout: FC<Props> = (props) => {
    const { children, isLoading, isAuthorized, isAllowed, redirectHref } = props;

    if (isLoading) {
        return <BlockingLoader />;
    }

    if (isAllowed) {
        return children;
    }

    if (isAuthorized) {
        return (
            <ErrorState
                title="Доступ отсутствует"
                subtitle="У вас нет доступа для просмотра этой страницы"
                redirectHref={redirectHref}
            />
        );
    }

    return (
        <ErrorState
            title="Это приватная страница"
            subtitle="Для ее просмотра необходимо авторизоваться"
            redirectHref={redirectHref}
        />
    );
};
