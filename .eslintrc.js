module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'semi': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': ['error', 'always'],
    'new-cap': 'off',
    'require-jsdoc': 'off',
    'camelcase': 'off',
    'no-trailing-spaces': 'error'
  },
};
