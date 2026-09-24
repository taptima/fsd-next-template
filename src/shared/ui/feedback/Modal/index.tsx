import type { FC, ReactNode } from 'react';
import { Modal as BaseModal, ModalProps as BaseModalProps, Flex } from 'antd';
import clsx from 'clsx';
import type { DynamicModalProps } from 'shared/types/modal';
import type { Classnames } from 'shared/types/styles';
import XIcon from 'shared/assets/icons/x.svg';
import { colors } from 'shared/styles/colors';
import {
    MAP_CLOSE_BUTTON_VARIANT_TO_PROPS,
    ModalCloseButtonVariant,
} from 'shared/ui/feedback/common/utils';
import { Button } from 'shared/ui/inputs/Button';
import styles from './styles.module.scss';

export type ModalProps = BaseModalProps &
    Partial<DynamicModalProps> &
    Classnames<'header' | 'content' | 'footer'> & {
        actions?: ReactNode;
        headerBorder?: 'None' | 'Regular';
        footerBorder?: 'None' | 'Regular';
        closeButtonVariant?: ModalCloseButtonVariant;
    };

export const Modal: FC<ModalProps> = (props) => {
    const {
        children,
        title,
        onCancel,
        actions,
        headerBorder = 'None',
        footerBorder = 'Regular',
        closeButtonVariant = 'Text',
        headerClassname,
        contentClassname,
        footerClassname,
        ...restProps
    } = props;
    const { closeButtonProps, closeIconProps } =
        MAP_CLOSE_BUTTON_VARIANT_TO_PROPS[closeButtonVariant];

    return (
        <BaseModal
            centered
            closeIcon={false}
            footer={null}
            destroyOnHidden
            getContainer={() => document.getElementById('modal-container') ?? document.body}
            onCancel={onCancel}
            className={styles.modal}
            rootClassName={styles.modalRoot}
            {...restProps}
        >
            <div className={clsx(styles.header, styles[`border${headerBorder}`], headerClassname)}>
                <h2 className={styles.title}>{title}</h2>
                <Button
                    aria-label="Закрыть модальное окно"
                    icon={<XIcon width={24} fill={colors.black} {...closeIconProps} />}
                    className={clsx(styles.closeButton, styles[`closeButton${closeButtonVariant}`])}
                    onClick={onCancel}
                    {...closeButtonProps}
                />
            </div>
            <div className={clsx(styles.content, contentClassname)}>{children}</div>
            {actions && (
                <div
                    className={clsx(
                        styles.footer,
                        styles[`footerBorder${footerBorder}`],
                        footerClassname,
                    )}
                >
                    <Flex gap={8} justify="flex-end" align="center">
                        {actions}
                    </Flex>
                </div>
            )}
        </BaseModal>
    );
};
