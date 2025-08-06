import type { ReactNode } from 'react';
import { Drawer as BaseDrawer, DrawerProps as BaseDrawerProps } from 'antd';
import clsx from 'clsx';
import type { Classnames } from 'shared/types/styles';
import XIcon from 'shared/assets/icons/x.svg';
import { colors } from 'shared/styles/colors';
import {
    MAP_CLOSE_BUTTON_VARIANT_TO_PROPS,
    ModalCloseButtonVariant,
} from 'shared/ui/feedback/common/utils';
import { Button } from 'shared/ui/inputs/Button';
import { Footer } from './ui/Footer';
import { Form } from './ui/Form';
import { ScrollWrapper } from './ui/ScrollWrapper';
import styles from './styles.module.scss';

export type DrawerProps = BaseDrawerProps &
    Classnames<'wrapper' | 'content'> & {
        headerBorder?: 'None' | 'Regular';
        headerActions?: ReactNode;
        closeButtonVariant?: ModalCloseButtonVariant;
    };

export function Drawer(props: DrawerProps) {
    const {
        children,
        title,
        onClose,
        headerBorder = 'None',
        headerActions,
        closeButtonVariant = 'Text',
        wrapperClassname,
        contentClassname,
        ...restProps
    } = props;
    const { closeButtonProps, closeIconProps } =
        MAP_CLOSE_BUTTON_VARIANT_TO_PROPS[closeButtonVariant];

    return (
        <BaseDrawer
            footer={null}
            closeIcon={false}
            classNames={{
                wrapper: clsx(styles.wrapper, wrapperClassname),
            }}
            onClose={onClose}
            {...restProps}
        >
            <div className={styles.body}>
                <div className={clsx(styles.header, styles[`border${headerBorder}`])}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.actions}>
                        {headerActions}
                        <Button
                            aria-label="Закрыть модальное окно"
                            icon={<XIcon width={24} fill={colors.neture400} {...closeIconProps} />}
                            className={clsx(
                                styles.closeButton,
                                styles[`closeButton${closeButtonVariant}`],
                            )}
                            onClick={onClose}
                            {...closeButtonProps}
                        />
                    </div>
                </div>
                <div className={clsx(styles.content, contentClassname)}>{children}</div>
            </div>
        </BaseDrawer>
    );
}

Drawer.Footer = Footer;
Drawer.Form = Form;
Drawer.ScrollWrapper = ScrollWrapper;
