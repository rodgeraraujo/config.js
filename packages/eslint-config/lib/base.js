module.exports = {
  env: {
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'no-use-before-define': ['error', 'nofunc'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'unicorn/no-null': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
  ],
};
