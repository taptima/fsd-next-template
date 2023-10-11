import { StoryFn } from '@storybook/react';
import { Inter } from 'next/font/google';
import 'app/styles/index.scss';

const inter = Inter({ weight: 'variable', subsets: ['cyrillic', 'latin'] });

export const StyleDecorator = (Story: StoryFn) => (
    <div className={inter.className}>
        <Story />
    </div>
);
