import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import svgrConfig from '../build/svgr';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    'addons': ['@storybook/addon-links', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: (webpackConfig) => {
        svgrConfig(webpackConfig);

        return {
            ...webpackConfig,
            resolve: {
                ...webpackConfig.resolve,
                alias: {
                    ...webpackConfig.resolve?.alias,
                    'shared': path.resolve(__dirname, '../../src/shared'),
                },
            },
        };
    },
};
export default config;
