import { ComponentType, useEffect, useState } from 'react';
import dynamic, { Loader } from 'next/dynamic';
import type { ModalProps } from 'shared/ui/feedback/Modal';
import { BlockingLoader } from 'shared/ui/display/BlockingLoader';

type BaseModalProps = Pick<ModalProps, 'open'>;

type Props<T extends BaseModalProps> = T & {
    Modal: ComponentType<T>;
};

const LazyModalManager = <T extends BaseModalProps>(props: Props<T>) => {
    const { Modal, open = false, ...modalProps } = props;
    const LazyModal = Modal as ComponentType<Omit<T, 'open' | 'Modal'>>;
    const [wasOpen, setWasOpen] = useState(false);

    useEffect(() => {
        setWasOpen((prev) => prev || open);
    }, [open]);

    if (!wasOpen) {
        return null;
    }

    return <LazyModal open={open} {...modalProps} />;
};

export const createLazyModal = <T extends BaseModalProps>(loader: Loader<T>) => {
    const DynamicModal = dynamic(loader, {
        ssr: false,
        loading: () => <BlockingLoader />,
    });

    // eslint-disable-next-line react/display-name
    return (props: T) => <LazyModalManager Modal={DynamicModal} {...props} />;
};
