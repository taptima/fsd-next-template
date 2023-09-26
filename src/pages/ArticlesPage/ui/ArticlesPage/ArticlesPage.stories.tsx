import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './index';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {};
