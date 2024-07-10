import { type ComponentType, useEffect, useState } from 'react';
import dynamic, { type Loader } from 'next/dynamic';
import { BlockingLoader } from 'shared/ui/display/BlockingLoader';

// TODO: Заменить на пропсы из модалки
type ModalProps = {
    isOpen: boolean;
};

type BaseModalProps = Pick<ModalProps, 'isOpen'>;

type Props<T extends BaseModalProps> = T & {
    Modal: ComponentType<T>;
};

const LazyModalManager = <T extends BaseModalProps>(props: Props<T>) => {
    const { Modal, isOpen, ...modalProps } = props;
    const LazyModal = Modal as ComponentType<Omit<T, 'isOpen' | 'Modal'>>;
    const [wasOpen, setWasOpen] = useState(false);

    useEffect(() => {
        setWasOpen((prev) => prev || isOpen);
    }, [isOpen]);

    if (!wasOpen) {
        return null;
    }

    return <LazyModal isOpen={isOpen} {...modalProps} />;
};

export const createLazyModal = <T extends BaseModalProps>(loader: Loader<T>) => {
    const DynamicModal = dynamic(loader, {
        ssr: false,
        loading: () => <BlockingLoader />,
    });

    return function LazyModal(props: T) {
        return <LazyModalManager Modal={DynamicModal} {...props} />;
    };
};
