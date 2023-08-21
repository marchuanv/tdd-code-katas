module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es2021: true
  },
  extends: 'semistandard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'no-unused-private-class-members': 'error'
  }
};
