import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { JsonLd } from 'features/seo/ui/JsonLD';
import { WebAnalytics } from 'features/seo/ui/WebAnalytics';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { body } from './font';
import { ORGANIZATION_JSON_LD, WEB_SITE_JSON_LD } from './jsonLd';
import './styles/index.scss';
import styles from './styles.module.scss';

export { metadata, viewport } from './meta';

type Props = PropsWithChildren;

export default function RootLayout(props: Props) {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <meta name="apple-mobile-web-app-title" content="Title" />
                <JsonLd name="organization" data={ORGANIZATION_JSON_LD} />
                <JsonLd name="website" data={WEB_SITE_JSON_LD} />
            </head>
            <WebAnalytics />
            <body className={clsx(styles.body, body.className)}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
                <Toaster
                    toastOptions={{ duration: 5000 }}
                    containerClassName={styles.toasterContainer}
                />
            </body>
        </html>
    );
}
