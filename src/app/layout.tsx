import type { PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import clsx from 'clsx';
import { JsonLd } from 'features/seo/ui/JsonLD';
import { body } from './font';
import { ORGANIZATION_JSON_LD, WEB_SITE_JSON_LD } from './jsonLd';
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
                <JsonLd name="organization" data={ORGANIZATION_JSON_LD} />
                <JsonLd name="website" data={WEB_SITE_JSON_LD} />
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
