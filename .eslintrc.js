module.exports = {
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier',
    'plugin:lit/recommended',
  ],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: true,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    indent: ['off', 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-template-arrow': 'off',
  },
  plugins: ['simple-import-sort', '@typescript-eslint', 'prettier', 'lit'],
};
