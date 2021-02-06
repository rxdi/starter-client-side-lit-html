module.exports = {
    // Specifies the ESLint parser
    parser: "@typescript-eslint/parser",
    extends: [
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "prettier/@typescript-eslint",
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: "module"
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "simple-import-sort/sort": "error",
        "sort-imports": "off",
        "import/order": "off",
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/interface-name-prefix": 0,
    },
    plugins: ["simple-import-sort", 'lit', 'prettier']
};