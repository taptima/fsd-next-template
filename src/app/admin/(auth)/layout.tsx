import type { PropsWithChildren } from 'react';
import { AuthLayout as BaseAuthLayout } from 'features/auth/ui/AuthLayout';

type Props = PropsWithChildren;

export default function AuthLayout(props: Props) {
    const { children } = props;

    return <BaseAuthLayout>{children}</BaseAuthLayout>;
}
