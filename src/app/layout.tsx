import { Toaster } from 'react-hot-toast';
import { inter } from './font';
import './styles/index.scss';

export { metadata, viewport } from './meta';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
