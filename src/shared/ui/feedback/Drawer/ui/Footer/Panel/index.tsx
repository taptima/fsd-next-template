import type { PropsWithChildren } from 'react';
import { Entry } from 'shared/ui/feedback/Drawer/ui/Footer/Panel/Entry';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export function Panel(props: Props) {
    const { children } = props;

    return <div className={styles.wrapper}>{children}</div>;
}

Panel.Entry = Entry;
