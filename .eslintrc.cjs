module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/prefer-optional-chain": "error",
  },
};
