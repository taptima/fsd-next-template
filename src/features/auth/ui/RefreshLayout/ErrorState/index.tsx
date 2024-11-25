import type { FC } from 'react';
import Flex from 'antd/es/flex';
import { ButtonLink } from 'shared/ui/navigation/ButtonLink';
import { AuthLayout } from 'features/auth/ui/AuthLayout';
import styles from './styles.module.scss';

type Props = {
    title: string;
    subtitle: string;
    redirectHref: string;
};

export const ErrorState: FC<Props> = (props) => {
    const { title, subtitle, redirectHref } = props;

    return (
        <AuthLayout variant="MobileCard">
            <Flex vertical gap={20}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <ButtonLink type="primary" href={redirectHref}>
                    Авторизоваться
                </ButtonLink>
            </Flex>
        </AuthLayout>
    );
};
