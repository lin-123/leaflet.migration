module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'string'
  },
  overrides: [{
    files: ['*.ts', '*.tsx'], // Your TypeScript files extension
    parserOptions: {
      project: ['./tsconfig.json'], // Specify it only for TypeScript files
    },
  }, ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // 'comma-dangle': 'off',
    // '@typescript-eslint/comma-dangle': ['off']
  }
}
