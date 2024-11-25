import type { FC, ReactNode } from 'react';
import Flex from 'antd/es/flex';
import { Drawer, DrawerProps } from 'shared/ui/feedback/Drawer';
import styles from './styles.module.scss';

type Props = DrawerProps & {
    content: ReactNode;
    actions?: ReactNode;
};

export const ViewModal: FC<Props> = (props) => {
    const { open, onClose, content, actions, ...restProps } = props;

    return (
        <Drawer open={open} onClose={onClose} headerBorder="Regular" width={600} {...restProps}>
            <Flex className={styles.wrapper} vertical>
                <Drawer.ScrollWrapper>{content}</Drawer.ScrollWrapper>
                <Drawer.Footer>
                    <Flex gap={8} justify="flex-end">
                        {actions}
                    </Flex>
                </Drawer.Footer>
            </Flex>
        </Drawer>
    );
};
