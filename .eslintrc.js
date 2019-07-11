module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  'env': {
    'browser': true,
    'es6': true
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'babel',
    'import',
    'react',
    'react-hooks',
    'jest',
  ],
  'rules': {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'babel/no-invalid-this': 'error',
    'babel/semi': 'warn',
    'babel/no-unused-expressions': 'warn',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['error', 'warn'] }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/no-default-export': ['error', 'always'],
    'prefer-const': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
};
