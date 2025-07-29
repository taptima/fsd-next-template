import type { StorybookConfig } from '@storybook/nextjs';
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

        return webpackConfig;
    },
};
export default config;
