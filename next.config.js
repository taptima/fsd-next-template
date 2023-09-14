const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true,
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
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.graphql$/,
            loader: 'graphql-tag/loader',
            exclude: /node_modules/,
        });

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
            enabled: true,
        }),
    );
}

const resultConfig = withNextJSConfigs.reduce(
    (acc, withNextConfig) => withNextConfig(acc),
    nextConfig,
);

module.exports = resultConfig;
