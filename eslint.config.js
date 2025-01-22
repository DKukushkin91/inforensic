import jsEslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarJsPlugin from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const appPath = 'src/app';
const pagesPath = 'src/pages';
const widgetsPath = 'src/widgets';
const featuresPath = 'src/features';
const entitiesPath = 'src/entities';
const sharedPath = 'src/shared';

export default [
    jsEslint.configs.recommended,
    ...tsEslint.configs.recommended,
    sonarJsPlugin.configs.recommended,
    stylisticPlugin.configs['recommended-flat'],
    {
        plugins: {
            'react-refresh': reactRefresh,
            'import': importPlugin,
        },
        languageOptions: {
            parser: tsEslint.parser,
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'no-console': ['error', {
                allow: ['warn', 'error', 'info'],
            }],

            // @stylistic
            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
            }],
            '@stylistic/max-len': ['error', {
                code: 220,
                ignorePattern: 'd=',
            }],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/jsx-indent': 'off',
            '@stylistic/jsx-indent-props': 'off',
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/block-spacing': ['error', 'never'],
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/arrow-parens': ['error', 'always'],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            }],
            '@stylistic/multiline-ternary': ['error', 'never'],

            // @typescript-eslint
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            }],

            // sonarjs
            'sonarjs/sonar-no-fallthrough': 'off',
            'sonarjs/pluginRules-of-hooks': 'off',
            'sonarjs/todo-tag': 'off',
            'sonarjs/no-array-index-key': 'off',
            'sonarjs/sonar-no-unused-vars': 'off',
            'sonarjs/no-selector-parameter': 'off',

            // import
            'import/prefer-default-export': 'off',
            'import/no-named-as-default': 'off',
            'import/extensions': 'off',
            'import/no-cycle': 'error',
            'import/no-extraneous-dependencies': ['error', {
                devDependencies: true,
            }],
            'import/order': ['error', {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {group: 'internal', position: 'after', pattern: '@pages/**'},
                    {group: 'internal', position: 'after', pattern: '@widgets/**'},
                    {group: 'internal', position: 'after', pattern: '@features/**'},
                    {group: 'internal', position: 'after', pattern: '@entities/**'},
                    {group: 'internal', position: 'after', pattern: '@shared/**'},
                    {group: 'internal', position: 'after', pattern: '@assets/**'},
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            }],
            'import/no-restricted-paths': ['error', {
                zones: [
                    // pages
                    {target: pagesPath, from: appPath},

                    // widgets
                    {target: widgetsPath, from: appPath},
                    {target: widgetsPath, from: pagesPath},

                    // features
                    {target: featuresPath, from: appPath},
                    {target: featuresPath, from: pagesPath},
                    {target: featuresPath, from: widgetsPath},

                    // entities
                    {target: entitiesPath, from: appPath},
                    {target: entitiesPath, from: pagesPath},
                    {target: entitiesPath, from: widgetsPath},
                    {target: entitiesPath, from: featuresPath},

                    // shared
                    {target: sharedPath, from: appPath},
                    {target: sharedPath, from: pagesPath},
                    {target: sharedPath, from: widgetsPath},
                    {target: sharedPath, from: featuresPath},
                    {target: sharedPath, from: entitiesPath},
                ],
            }],
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    },
    {
        ignores: [
            'node_modules',
            '.yarn',
            'dist',
        ],
    },
];
