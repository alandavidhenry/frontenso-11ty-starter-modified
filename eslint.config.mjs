import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    env: {
      browser: true,
      es2021: true,
      commonjs: true
    },
    extends: [
      'airbnb-base',
      eslintConfigPrettier,
      'plugin:sonarjs/recommended',
      '@frontenso/javascript'
    ],
    languageOptions: {
      globals: globals.browser
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [pluginJs.configs.recommended.plugins, 'sonarjs'],
    rules: {
      'arrow-body-style': 'error',
      'prefer-arrow-callback': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', mjs: 'never', jsx: 'never' }
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '.eleventy.js',
            '*.config.{cjs,js,mjs}',
            'src/_data/**'
          ],
          optionalDependencies: false
        }
      ],
      'import/order': [
        'error',
        { groups: [['builtin', 'external'], 'parent', 'sibling', 'index'] }
      ],
      'import/prefer-default-export': 'off',
      'linebreak-style': [
        'error',
        process.platform === 'win32' ? 'windows' : 'unix'
      ],
      'no-unused-vars': 'error',
      'no-console': 'warn'
    }
  }
]
