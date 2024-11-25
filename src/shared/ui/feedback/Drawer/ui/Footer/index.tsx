import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Classname } from 'shared/types/styles';
import { Panel } from './Panel';
import styles from './styles.module.scss';

type Props = PropsWithChildren & Classname;

export function Footer(props: Props) {
    const { children, className } = props;

    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

Footer.Panel = Panel;
