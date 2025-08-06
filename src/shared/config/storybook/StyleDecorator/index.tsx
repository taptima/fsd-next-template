import type { Decorator } from '@storybook/nextjs';
import { Inter } from 'next/font/google';
import 'app/styles/index.scss';

const inter = Inter({ weight: 'variable', subsets: ['cyrillic', 'latin'] });

export const StyleDecorator: Decorator = (Story, context) => (
    <div className={inter.className}>{Story(context)}</div>
);
