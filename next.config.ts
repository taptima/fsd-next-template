import type { NextConfig } from 'next';
// eslint-disable-next-line import/no-extraneous-dependencies
import withBundleAnalyzer from '@next/bundle-analyzer';
import cssModulesConfig from './config/build/cssModules';
import svgrConfig from './config/build/svgr';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_WITH_ANALYZE = process.env.NEXT_ANALYZE === 'true';
const IMAGE_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? '';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        reactRemoveProperties: IS_PRODUCTION,
    },
    images: {
        domains: [IMAGE_DOMAIN],
        deviceSizes: [375, 576, 768, 1080, 1200, 1300, 1440, 1600, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1024, 1366, 1600, 1920],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: ['./src'],
    },
    async headers() {
        return [
            {
                source: '/fonts/(.*?)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            ...(!IS_PRODUCTION
                ? [
                      {
                          source: '/api/(.*)',
                          headers: [
                              {
                                  key: 'Access-Control-Allow-Origin',
                                  value: '*',
                              },
                              {
                                  key: 'Access-Control-Allow-Credentials',
                                  value: 'true',
                              },
                          ],
                      },
                  ]
                : []),
        ];
    },
    turbopack: {
        rules: {
            '*.raw.svg': {
                loaders: [{ loader: '@svgr/webpack', options: { svgo: false } }],
                as: '*.js',
            },
            '*.svg': {
                loaders: [{ loader: '@svgr/webpack', options: { svgo: true } }],
                as: '*.js',
            },
        },
    },
    webpack(config) {
        cssModulesConfig(config);
        svgrConfig(config);

        return config;
    },
};

const withNextJSConfigs: ((config: NextConfig) => NextConfig)[] = [];

if (IS_WITH_ANALYZE) {
    withNextJSConfigs.push((config) =>
        withBundleAnalyzer({
            openAnalyzer: false,
            enabled: true,
        })(config),
    );
}

const resultConfig = withNextJSConfigs.reduce(
    (acc, withNextConfig) => withNextConfig(acc),
    nextConfig,
);

export default resultConfig;
