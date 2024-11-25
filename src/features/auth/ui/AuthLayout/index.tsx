import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Logo } from 'shared/ui/display/Logo';
import { Card } from 'shared/ui/surfaces/Card';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import styles from './styles.module.scss';

type Props = PropsWithChildren & {
    variant?: 'Regular' | 'MobileCard';
};

export function AuthLayout(props: Props) {
    const { children, variant = 'Regular' } = props;

    return (
        <div className={clsx(styles.wrapper, styles[`wrapper${variant}`])}>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logoWrapper}>
                        <Logo />
                    </div>
                </div>
            </header>
            <main className={styles.contentContainer}>
                <Card
                    padding="Large"
                    borderRadius="Large"
                    className={clsx(styles.card, styles[`card${variant}`])}
                >
                    {children}
                </Card>
            </main>
        </div>
    );
}

AuthLayout.Title = Title;
AuthLayout.Subtitle = Subtitle;
