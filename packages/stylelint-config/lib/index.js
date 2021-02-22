module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'components',
          'extends',
          'screen',
          'tailwind',
          'utilities',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
