function svgrConfig(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            include: /src\/shared\/assets\/icons/,
            resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
            test: /\.svg$/i,
            include: /src\/shared\/assets\/icons/,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: /url/ }, // exclude if *.svg?url
            use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
        },
    );
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
}

module.exports = svgrConfig;
