import { FC, PropsWithChildren, useLayoutEffect } from 'react';
import { useGlobalModalStore } from 'app/model/store/useGlobalModalStore';
import type { createModalsStore } from 'shared/config/project/createModalsStore';

type Options = {
    modalsStore?: ReturnType<typeof createModalsStore<never>>;
};

type Props = PropsWithChildren & Options;

const ModalsReset: FC<Props> = (props) => {
    const { children, modalsStore } = props;

    useLayoutEffect(() => {
        [useGlobalModalStore, modalsStore].forEach((store) =>
            store?.getState().actions.resetModals(),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children;
};

export const WithModalsReset = <T extends object>(Component: FC<T>, options?: Options) => {
    // eslint-disable-next-line react/display-name
    return (props: T) => {
        return (
            <ModalsReset {...options}>
                <Component {...props} />
            </ModalsReset>
        );
    };
};
