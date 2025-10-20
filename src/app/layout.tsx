import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import clsx from 'clsx';
import { body } from './font';
import { theme } from './theme';
import { Modals } from './ui/Modals';
import './styles/index.scss';
import '@ant-design/v5-patch-for-react-19';
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
            <body className={clsx(styles.body, body.className)}>
                <AntdRegistry>
                    <ConfigProvider theme={theme} locale={ruRu}>
                        {children}
                        <div id="modal-container">
                            <Modals />
                        </div>
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
