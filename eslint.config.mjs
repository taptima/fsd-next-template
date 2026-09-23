import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import prettier from 'eslint-config-prettier';
import nextVitals from 'eslint-config-next/core-web-vitals';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
    {
        ignores: [
            '**/*.config.js',
            '**/*.config.mjs',
            '**/*.config.ts',
            'config/build/**',
            'scripts/**',
            'electron/**',
            'src/shared/types/graphql/**',
            '.next/**',
            'node_modules/**',
            'out/**',
            'public/**',
        ],
    },
    {
        linterOptions: {
            // Keep historical eslint-disable comments after dropping airbnb rules.
            reportUnusedDisableDirectives: 'off',
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...nextVitals,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@stylistic': stylistic,
            perfectionist,
            'no-relative-import-paths': noRelativeImportPaths,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            'no-plusplus': 'off',
            'react/require-default-props': 'off',
            'react/function-component-definition': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react-hooks/purity': 'off',
            'react-hooks/set-state-in-effect': 'off',
            'react-hooks/refs': 'off',
            'react-hooks/immutability': 'off',
            'react-hooks/preserve-manual-memoization': 'off',
            'react-hooks/use-memo': 'off',
            'import/order': 'off',
            'import/prefer-default-export': 'off',
            'import/no-relative-parent-imports': 'off',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'no-restricted-syntax': [
                'error',
                {
                    selector:
                        'ImportDeclaration[source.value=/^(?!.*index\\.(ts|tsx)$).+\\.(ts|tsx)$/]',
                    message:
                        "Не используйте расширения .ts/.tsx в импорт-путях (используйте './mod' вместо './mod.ts'). Разрешён только './index.ts' / './index.tsx'.",
                },
                {
                    selector:
                        "CallExpression[callee.name='require'] > Literal[value=/^(?!.*index\\.(ts|tsx)$).+\\.(ts|tsx)$/]",
                    message: 'Не используйте расширения .ts/.tsx в require() (исключение — index).',
                },
                {
                    selector:
                        'ImportExpression[source.value=/^(?!.*index\\.(ts|tsx)$).+\\.(ts|tsx)$/]',
                    message:
                        'Не используйте расширения .ts/.tsx в динамическом import() (исключение — index).',
                },
            ],
            'perfectionist/sort-imports': [
                'warn',
                {
                    type: 'natural',
                    order: 'asc',
                    newlinesBetween: 0,
                    groups: [
                        'type-import',
                        'react',
                        ['value-builtin', 'value-external'],
                        'shared-types',
                        'type-internal',
                        'shared/assets',
                        'shared/styles',
                        'shared/const',
                        'shared/config',
                        'shared/types',
                        'shared/hooks',
                        'shared/lib',
                        'shared/ui',
                        'value-internal',
                        ['type-parent', 'type-sibling', 'type-index'],
                        ['value-parent', 'value-sibling', 'value-index'],
                        'side-effect',
                        'style',
                        'unknown',
                    ],
                    customGroups: [
                        {
                            groupName: 'react',
                            elementNamePattern: ['^react$', '^react-.+'],
                        },
                        {
                            groupName: 'shared-types',
                            modifiers: ['type'],
                            elementNamePattern: '^shared(/|$)',
                        },
                        {
                            groupName: 'shared/assets',
                            elementNamePattern: '^shared/assets(/|$)',
                        },
                        {
                            groupName: 'shared/styles',
                            elementNamePattern: '^shared/styles(/|$)',
                        },
                        {
                            groupName: 'shared/const',
                            elementNamePattern: '^shared/const(/|$)',
                        },
                        {
                            groupName: 'shared/config',
                            elementNamePattern: '^shared/config(/|$)',
                        },
                        {
                            groupName: 'shared/types',
                            elementNamePattern: '^shared/types(/|$)',
                        },
                        {
                            groupName: 'shared/hooks',
                            elementNamePattern: '^shared/hooks(/|$)',
                        },
                        {
                            groupName: 'shared/lib',
                            elementNamePattern: '^shared/lib(/|$)',
                        },
                        {
                            groupName: 'shared/ui',
                            elementNamePattern: '^shared/ui(/|$)',
                        },
                    ],
                    internalPattern: [
                        '^entities(/|$)',
                        '^features(/|$)',
                        '^pages(/|$)',
                        '^views(/|$)',
                        '^shared(/|$)',
                        '^widgets(/|$)',
                    ],
                },
            ],
            'import/no-cycle': [
                'warn',
                {
                    maxDepth: 2,
                },
            ],
            'no-empty': [
                'error',
                {
                    allowEmptyCatch: true,
                },
            ],
            '@stylistic/spaced-comment': 'warn',
            'no-underscore-dangle': 'off',
            'consistent-return': 'off',
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'none',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-empty-object-type': [
                'error',
                {
                    allowInterfaces: 'with-single-extends',
                },
            ],
            '@typescript-eslint/no-redeclare': [
                'error',
                {
                    ignoreDeclarationMerge: false,
                },
            ],
            'arrow-body-style': 'off',
            'no-relative-import-paths/no-relative-import-paths': [
                'error',
                { allowSameFolder: true, rootDir: 'src' },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['interface', 'typeAlias'],
                    format: ['PascalCase'],
                    custom: {
                        regex: '(^[IT][A-Z]|[IT]$)',
                        match: false,
                    },
                },
            ],
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: [
                        '**/*.{test,stories}.{ts,tsx}',
                        '**/vitest/**',
                        '**/*.test.cjs',
                        'electron/**/*.test.cjs',
                        '**/test/**',
                    ],
                },
            ],
            'jsx-a11y/label-has-associated-control': [
                'error',
                {
                    required: {
                        some: ['nesting', 'id'],
                    },
                },
            ],
            'jsx-a11y/label-has-for': [
                'error',
                {
                    required: {
                        some: ['nesting', 'id'],
                    },
                },
            ],
        },
    },
    {
        files: ['next-env.d.ts'],
        rules: {
            '@typescript-eslint/triple-slash-reference': 'off',
        },
    },
);
