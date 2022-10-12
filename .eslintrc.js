// https://eslint.org/docs/user-guide/getting-started

module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    // envで指定している場合はそちらが優先される
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },

  extends: [
    // https://eslint.org/docs/rules/ にチェックのあるものを適用
    'eslint:recommended',
    // https://typescript-eslint.io/rules/ にチェックのあるものを適用
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],

  rules: {
    'no-console': 'error',
    camelcase: ['error', { properties: 'never' }],
    semi: ['error', 'always'],
  },

  ignorePatterns: ['dist'],
};
