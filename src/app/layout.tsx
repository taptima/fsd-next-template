import { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { WebAnalytics } from 'features/seo/ui/WebAnalytics';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { body } from './font';
import './styles/index.scss';
import styles from './styles.module.scss';

export { metadata, viewport } from './meta';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            {/* <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Site" />
                <link rel="manifest" href="/site.webmanifest" />
            </head> */}
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
