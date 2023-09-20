/**
 * Сделано на основе https://dhanrajsp.me/snippets/customize-css-loader-options-in-nextjs
 * и исходников next.js: packages/next/src/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.ts
 */

const loaderUtils = require('loader-utils');
const path = require('path');

const regexLikeIndexStylesModule = /(?<!pages[\\/])(index|styles)\.module\.(scss|sass|css)$/;

// Вместо <directory>__<classname>__<hash>
// Возвращает <hash>
function getCssModuleIdent(context, _, exportName, options) {
    const relativePath = path
        .relative(context.rootContext, context.resourcePath)
        .replace(/\\+/g, '/');

    const hash = loaderUtils.getHashDigest(
        Buffer.from(`filePath:${relativePath}#className:${exportName}`),
        'sha1',
        'base64',
        6,
    );

    // Generate a more meaningful name (parent folder) when the user names the
    // file `index.module.css` or `styles.module.css`
    const fileNameOrFolder = regexLikeIndexStylesModule.test(relativePath) ? '[folder]' : '[name]';

    const className =
        process.env.NODE_ENV === 'production'
            ? hash
            : `${fileNameOrFolder}__${exportName}__${hash}`;

    return loaderUtils
        .interpolateName(context, className, options)
        .replace(/\.module_/, '_')
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        .replace(/^(\d|--|-\d)/, '__$1');
}

const regexEqual = (x, y) =>
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline;

function cssLoaderOptions(modules) {
    const { getLocalIdent, ...others } = modules;

    return {
        ...others,
        getLocalIdent: getCssModuleIdent,
        exportLocalsConvention: 'camelCaseOnly',
        mode: 'local',
    };
}

function cssModulesConfig(config) {
    const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === 'object');

    if (!oneOf) {
        return;
    }

    const moduleSassRule = oneOf.oneOf.find((rule) =>
        regexEqual(rule.test, /\.module\.(scss|sass)$/),
    );

    if (!moduleSassRule) {
        return;
    }

    const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('/css-loader'));

    if (cssLoader) {
        cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules),
        };
    }
}

module.exports = cssModulesConfig;
