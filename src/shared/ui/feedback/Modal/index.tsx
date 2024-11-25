import type { FC, ReactNode } from 'react';
import { Modal as BaseModal, ModalProps as BaseModalProps, Flex } from 'antd';
import clsx from 'clsx';
import type { Classnames } from 'shared/types/styles';
import XIcon from 'shared/assets/icons/x.svg';
import colors from 'shared/styles/colors.module.scss';
import {
    MAP_CLOSE_BUTTON_VARIANT_TO_PROPS,
    ModalCloseButtonVariant,
} from 'shared/ui/feedback/common/utils';
import { Button } from 'shared/ui/inputs/Button';
import styles from './styles.module.scss';

export type ModalProps = BaseModalProps &
    Classnames<'header' | 'content' | 'footer'> & {
        actions?: ReactNode;
        headerBorder?: 'None' | 'Regular';
        footerBorder?: 'None' | 'Regular';
        closeButtonVariant?: ModalCloseButtonVariant;
        isCenteredInMobile?: boolean;
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
        isCenteredInMobile = true,
        ...restProps
    } = props;
    const { closeButtonProps, closeIconProps } =
        MAP_CLOSE_BUTTON_VARIANT_TO_PROPS[closeButtonVariant];

    return (
        <BaseModal
            centered
            closeIcon={false}
            footer={null}
            className={styles.modal}
            classNames={{
                wrapper: clsx({ [styles.lowerWrapper]: !isCenteredInMobile }),
                content: clsx({ [styles.lowerContent]: !isCenteredInMobile }),
            }}
            rootClassName={styles.modalRoot}
            onCancel={onCancel}
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
            <div
                className={clsx(
                    styles.content,
                    {
                        [styles.lowerContent]: !isCenteredInMobile,
                    },
                    contentClassname,
                )}
            >
                {children}
            </div>
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
