'use client';

import { AuthLayout as BaseAuthLayout } from 'features/auth/ui/AuthLayout';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <BaseAuthLayout>{children}</BaseAuthLayout>;
}
