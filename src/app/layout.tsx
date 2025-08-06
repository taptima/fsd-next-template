import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import clsx from 'clsx';
import { inter } from './font';
import { theme } from './theme';
import { Modals } from './ui/Modals';
import './styles/index.scss';
import '@ant-design/v5-patch-for-react-19';
import styles from './styles.module.scss';

export { metadata, viewport } from './meta';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={clsx(styles.body, inter.className)}>
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
