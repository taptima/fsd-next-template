import type { ModalProps } from 'antd';
import type { DrawerProps } from 'shared/ui/feedback/Drawer';

export type DynamicModalProps = Pick<ModalProps, 'open'> & {
    onCancel: () => void;
};

export type DynamicDrawerProps = Pick<DrawerProps, 'open'> & {
    onClose: () => void;
};
