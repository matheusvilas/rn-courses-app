module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  rules: {
    'react/prop-types': 0,
  },
}
