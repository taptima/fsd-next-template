import { inter } from './font';
import './styles/index.scss';

export { metadata, viewport } from './meta';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
