import type { Preview } from '@storybook/react';

import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';

const preview: Preview = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator],
};

export default preview;
