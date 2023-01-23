module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'promise',
    'security',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:security/recommended',
  ],
  root: true,
  env: {
    es6: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'max-len': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    indent: 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/prefer-default-export': 0,
    semi: ['error', 'always'],
    '@typescript-eslint/camelcase': 0,
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-useless-constructor': ['warn'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    camelcase: 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'max-classes-per-file': ['error', 4],
    'consistent-return': 'off',
    'mocha/no-mocha-arrows': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
