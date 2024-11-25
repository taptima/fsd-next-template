import type { FC } from 'react';
import { Flex } from 'antd';
import { Header as BaseHeader } from 'antd/es/layout/layout';
import { User } from './User';

export const AdminHeader: FC = () => {
    return (
        <BaseHeader>
            <Flex justify="flex-end">
                <User />
            </Flex>
        </BaseHeader>
    );
};
