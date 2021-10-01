module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      project: './tsconfig.json', // Tells Eslint where to find the root tsconfig file of your project.
      ecmaVersion: 2021, // ECMAScript version supported in the project.
      sourceType: 'module', // set to `module` because we ue ECMAScript modules.
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // Recommended react hooks linting configs.
    'plugin:jsx-a11y/recommended', // Turns on a11y rules for JSX.
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // ENABLING THIS BREAKS ESLINT RULES
    'plugin:prettier/recommended', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint', 'import'],
  settings: {
    react: {
      version: 'detect', // auto-detect React version from package.json.
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // use typescript-eslint parser for .ts|tsx files.
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`.
      },
    },
  },

  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: [
        'src/**/__tests__/**/*.[jt]s?(x)',
        'src/**/?(*.)+(spec|test).[jt]s?(x)',
      ], // Override config for same files pattern as jest `testMatch` default value
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      plugins: ['jest', 'jest-dom', 'testing-library'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'warn',
        'testing-library/no-dom-import': 'off',
      },
      env: {
        'jest/globals': true, // enable Jest global variables.
      },
    },
  ],
}
