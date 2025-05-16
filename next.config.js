const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const cssModulesConfig = require('./config/build/cssModules');
const svgrConfig = require('./config/build/svgr');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,
    compiler: { reactRemoveProperties: process.env.NODE_ENV === 'production' },
    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
    images: {
        domains: [process.env.NEXT_PUBLIC_DOMAIN],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    sassOptions: {
        'includePaths': ['./src'],
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
            ...(process.env.NODE_ENV !== 'production'
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

const withNextJSConfigs = [];

if (process.env.NODE_ENV === 'production' && Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)) {
    /**
     * @type {import('@sentry/nextjs').SentryWebpackPluginOptions}
     **/
    const SentryWebpackPluginOptions = {
        include: '.next',
        ignore: ['node_modules'],
        urlPrefix: '~/_next',
        configFile: 'sentry.properties',
    };

    withNextJSConfigs.push((config) =>
        withSentryConfig(
            {
                ...config,
                sentry: {
                    hideSourceMaps: true,
                },
            },
            SentryWebpackPluginOptions,
        ),
    );
}

if (process.env.NEXT_ANALYZE === 'true') {
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

module.exports = resultConfig;
