import type { FlexProps } from 'antd/es/flex/interface';
import type { ReactNode } from 'react';
import Flex from 'antd/es/flex';
import Modal, { ModalProps } from 'antd/es/modal';
import type { Classnames } from 'shared/types/styles';
import ArrowLeftOutlinedIcon from 'shared/assets/icons/arrow-left-outlined.svg';
import { Loader } from 'shared/ui/display/Loader';
import { Button } from 'shared/ui/inputs/Button';
import { Form } from './ui/Form';
import { ScrollWrapper } from './ui/ScrollWrapper';
import { Suffix } from './ui/Suffix';
import { TableWrapper } from './ui/TableWrapper';
import styles from './styles.module.scss';

export type ScreenProps = ModalProps &
    Classnames<'scrollWrapper'> & {
        suffix?: ReactNode;
        isLoading?: boolean;
        tabs?: ReactNode;
        content: ReactNode;
        topActions?: ReactNode;
        bottomActions?: ReactNode;
        bottomActionsProps?: Partial<FlexProps>;
    };

// TODO: use pages instead
export function Screen(props: ScreenProps) {
    const {
        title,
        suffix,
        onCancel,
        isLoading = false,
        tabs,
        content,
        topActions,
        bottomActions,
        bottomActionsProps,
        scrollWrapperClassname,
        ...restProps
    } = props;

    return (
        <Modal
            centered
            closeIcon={false}
            footer={null}
            width=""
            onCancel={onCancel}
            className={styles.modal}
            rootClassName={styles.modalRoot}
            {...restProps}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <Button
                        aria-label="Закрыть модальное окно"
                        type="text"
                        padding="IconLarge"
                        icon={<ArrowLeftOutlinedIcon width={16} />}
                        onClick={onCancel}
                    />
                    <h2 className={styles.title}>{title}</h2>
                    {suffix}
                    {!isLoading && topActions && (
                        <Flex gap={8} justify="flex-end" className={styles.right}>
                            {topActions}
                        </Flex>
                    )}
                </div>

                {tabs && <div className={styles.tabsWrapper}>{tabs}</div>}

                <ScrollWrapper className={scrollWrapperClassname}>
                    {!isLoading && content}
                    <Loader fill withBackground isVisible={isLoading} />
                </ScrollWrapper>

                {!isLoading && bottomActions && (
                    <Flex
                        gap={8}
                        justify="flex-end"
                        className={styles.bottomActions}
                        {...bottomActionsProps}
                    >
                        {bottomActions}
                    </Flex>
                )}
            </div>
        </Modal>
    );
}

Screen.Form = Form;
Screen.ScrollWrapper = ScrollWrapper;
Screen.Suffix = Suffix;
Screen.TableWrapper = TableWrapper;
