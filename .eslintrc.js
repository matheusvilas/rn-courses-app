module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [0],
    'import/export': 0,
    'class-methods-use-this': 0,
  },
}
