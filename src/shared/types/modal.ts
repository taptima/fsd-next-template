import type { DrawerProps } from 'shared/ui/feedback/Drawer';
import type { ModalProps } from 'shared/ui/feedback/Modal';

export type DynamicModalProps = Pick<ModalProps, 'open'> & {
    onCancel: () => void;
};

export type DynamicDrawerProps = Pick<DrawerProps, 'open'> & {
    onClose: () => void;
};
