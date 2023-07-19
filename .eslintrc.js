module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'unicorn'],

  env: {
    browser: true,
    es2022: true,
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
    // https://eslint.org/docs/latest/rules/ にチェックのあるものを適用
    'eslint:recommended',
    // https://typescript-eslint.io/rules/ にチェックのあるものを適用
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],

  rules: {
    'no-console': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'no-new-func': 'error',
    semi: ['error', 'always'],
    camelcase: ['error', { properties: 'never' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'warn',
    'unicorn/prefer-node-protocol': 'error',
  },

  ignorePatterns: ['dist', 'copyfile.mjs'],
};
