import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import clsx from 'clsx';
import { inter } from './font';
import { theme } from './theme';
import './styles/index.scss';
import styles from './styles.module.scss';

export { metadata, viewport } from './meta';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={clsx(styles.body, inter.className)}>
                <AntdRegistry>
                    <ConfigProvider theme={theme} locale={ruRu}>
                        {children}
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
