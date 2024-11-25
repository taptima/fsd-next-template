import { Modal, ModalProps } from 'shared/ui/feedback/Modal';
import { GridActions } from './ui/GridActions';
import styles from './styles.module.scss';

type Variant = 'Default' | 'Compact';

type Props = ModalProps & {
    variant?: Variant;
};

const MAP_VARIANT_TO_PROPS: Record<Variant, ModalProps> = {
    Default: {
        headerBorder: 'Regular',
    },
    Compact: {
        headerBorder: 'None',
        footerBorder: 'None',
        headerClassname: styles.header,
        contentClassname: styles.content,
        footerClassname: styles.footer,
        closeButtonVariant: 'Border',
    },
};

export function ActionModal(props: Props) {
    const { children, variant = 'Default', onCancel, title, ...restProps } = props;
    const variantProps = MAP_VARIANT_TO_PROPS[variant];

    return (
        <Modal
            onCancel={onCancel}
            title={title}
            closeButtonVariant="Text"
            width="max-content"
            classNames={{
                content: styles.modalContent,
            }}
            {...variantProps}
            {...restProps}
        >
            {children}
        </Modal>
    );
}

ActionModal.GridActions = GridActions;
