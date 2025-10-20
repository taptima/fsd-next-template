import type { PropsWithChildren } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import styles from './styles.module.scss';

type Props = PropsWithChildren;

export default function PublicLayout(props: Props) {
    const { children } = props;

    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}
