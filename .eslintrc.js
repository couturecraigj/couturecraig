const path = require('path')

module.exports = {
  extends: 'standard',
  env: { es6: true },
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: ['error', 'always'],
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
        tagName: 'graphql',
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
  globals: {
    React: true,
  },
}
