import type { FC } from 'react';
import Flex from 'antd/es/flex';
import { AuthLayout } from 'features/auth/ui/AuthLayout';
import { Form } from './ui/Form';

export const SignInPage: FC = () => {
    return (
        <Flex gap={20} vertical>
            <div>
                <AuthLayout.Title>Войти</AuthLayout.Title>
                <AuthLayout.Subtitle>Введите логин и пароль</AuthLayout.Subtitle>
            </div>
            <Form />
        </Flex>
    );
};
