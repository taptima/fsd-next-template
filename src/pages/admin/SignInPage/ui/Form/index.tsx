'use client';

import type { FC } from 'react';
import { useForm } from 'antd/es/form/Form';
import { REQUIRED_RULE } from 'shared/lib/validation/rules';
import { Button } from 'shared/ui/inputs/Button';
import { Input } from 'shared/ui/inputs/Input';
import { PasswordInput } from 'shared/ui/inputs/PasswordInput';
import { LOGIN_RULE, PSEUDO_PASSWORD_RULE } from 'entities/User/model/validation/rules';
import { useSignInMutation } from 'features/auth/api/swr/useSignInMutation';
import { Form as BaseForm } from 'features/form/Form';
import { SignInForm } from 'pages/admin/SignInPage/model/types/form';

export const Form: FC = () => {
    const { isMutating, trigger } = useSignInMutation();
    const [form] = useForm<SignInForm>();

    const handleFinish = async (values: SignInForm) => {
        await trigger(values);
    };

    return (
        <BaseForm form={form} onFinish={handleFinish}>
            <Input
                placeholder="Введите логин"
                disabled={isMutating}
                allowClear
                labelProps={{
                    text: 'Логин',
                }}
                formItemProps={{
                    name: 'username',
                    rules: [REQUIRED_RULE, LOGIN_RULE],
                }}
            />
            <PasswordInput
                disabled={isMutating}
                placeholder="Введите пароль"
                labelProps={{
                    text: 'Пароль',
                }}
                formItemProps={{
                    name: 'password',
                    rules: [REQUIRED_RULE, PSEUDO_PASSWORD_RULE],
                }}
            />
            <Button htmlType="submit" type="primary" padding="Large" loading={isMutating}>
                Войти
            </Button>
        </BaseForm>
    );
};
