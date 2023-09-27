/**
 * @type {import('svgo').Config}
 **/
module.exports = {
    multipass: true,
    js2svg: {
        indent: 4,
        pretty: true,
    },
    plugins: [
        'removeDimensions',
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                    sortAttrs: false,
                },
            },
        },
        {
            name: 'removeAttrs',
            params: {
                attrs: '(fill|stroke)',
            },
        },
    ],
};
