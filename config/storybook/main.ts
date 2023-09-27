import type { StorybookConfig } from '@storybook/nextjs';
import svgrConfig from '../build/svgr';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: (webpackConfig) => {
        svgrConfig(webpackConfig);

        return webpackConfig;
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
