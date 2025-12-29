import type { PropsWithChildren } from 'react';
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

type Props = PropsWithChildren;

export default function RootLayout(props: Props) {
    const { children } = props;

    return (
        <html lang="ru">
            <head>
                <meta name="apple-mobile-web-app-title" content="Title" />
            </head>
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
