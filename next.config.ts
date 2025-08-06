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
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    images: {
        domains: [IMAGE_DOMAIN],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        includePaths: ['./src'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/admin/sign-in',
                permanent: false,
            },
        ];
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
