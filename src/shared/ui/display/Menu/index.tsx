import type { FC } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import type { IconComponent } from 'shared/types/icon';
import { Logo } from 'shared/ui/display/Logo';
import { Link } from 'shared/ui/navigation/Link';
import styles from './styles.module.scss';

export type MenuItem = {
    href: string;
    Icon: IconComponent;
    label: string;
};

type Props = {
    items: MenuItem[];
};

export const Menu: FC<Props> = (props) => {
    const { items } = props;
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <Logo />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {items.map(({ href, Icon, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={clsx(styles.link, {
                                    [styles.linkActive]: pathname?.includes(href),
                                })}
                            >
                                <Icon className={styles.icon} />
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
