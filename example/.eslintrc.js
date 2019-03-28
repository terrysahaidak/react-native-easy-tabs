module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: { fetch: false },
  plugins: ['react', 'react-native'],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['js', '.android.js', '.ios.js'],
      },
    },
  },
  rules: {
    'max-len': [2, 100, 2],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/prop-types': 0,
    'function-paren-newline': 0,
    'import/prefer-default-export': 0,
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': 0,
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] },
    ],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
  },
};
