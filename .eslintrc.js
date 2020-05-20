const DONT_WARN_CI = process.env.NODE_ENV === 'production' ? 0 : 1

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    'react',
    'html',
    'json',
    'prettier',
    'import',
    'jsx-a11y',
    'jest',
    '@typescript-eslint',
  ],
  settings: {
    'html/indent': '0',
    es6: true,
    react: {
      version: '16.5'
    },
    propWrapperFunctions: ['forbidExtraProps'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any'
      }
    ],
    'no-restricted-modules': ['error', 'chai'],
    'react/jsx-no-literals': 1,
    'no-debugger': 'warn',
    'react/prop-types': 0,
    'react/no-deprecated': DONT_WARN_CI,
    'react/jsx-no-target-blank': DONT_WARN_CI,
    'import/first': 0,
    'import/no-deprecated': process.env.NODE_ENV === 'production' ? 0 : 1,
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'one-var': ['error', { initialized: 'never' }],
    'no-mixed-operators': 0,
    'no-var': 'error',
    'require-await': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'ignore', props: 'never' }
    ],
    'no-restricted-globals': [
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'localStorage',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'
    ],
    'jsx-a11y/click-events-have-key-events': DONT_WARN_CI,
    'jsx-a11y/alt-text': DONT_WARN_CI,
    'jsx-a11y/no-static-element-interactions': DONT_WARN_CI,
    'jsx-a11y/anchor-is-valid': DONT_WARN_CI,
    'jsx-a11y/no-noninteractive-element-interactions': DONT_WARN_CI,
    'jsx-a11y/no-autofocus': DONT_WARN_CI,
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['select']
      }
    ],
    'jsx-a11y/media-has-caption': DONT_WARN_CI,
    'jsx-a11y/iframe-has-title': DONT_WARN_CI,
    'jsx-a11y/heading-has-content': DONT_WARN_CI,
    'jsx-a11y/anchor-has-content': DONT_WARN_CI,
    'jsx-a11y/no-noninteractive-tabindex': DONT_WARN_CI,
    'jsx-a11y/tabindex-no-positive': DONT_WARN_CI,
    'jsx-a11y/mouse-events-have-key-events': DONT_WARN_CI,
    'jsx-a11y/no-onchange': 0
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // done by the TS compiler
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off'
      }
    }
  ]
}
