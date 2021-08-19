// .eslintrc.js
// off: 0, warn: 1, error: 2

const { eslint: aliases } = require("./pathconfig.json");

//
// rules for javascript development
const dev_rules = {
  "no-unused-vars": [0],
  "no-empty-pattern": [0],
  "no-empty": [0],
  "jest/no-done-callback": [0],
  "jest/no-disabled-tests": [0],
  "camelcase": [0],
  "jsx-a11y/anchor-is-valid": [0],
};

//
// rules for typescript development
const dev_ts_rules = {
  "@typescript-eslint/no-unused-vars": [0],
  "@typescript-eslint/no-empty-function": [0],
  "@typescript-eslint/no-use-before-define": [0],
  "@typescript-eslint/no-var-requires": [0],
  "@typescript-eslint/no-explicit-any": [0],
  "@typescript-eslint/no-empty-interface": [0],
  "@typescript-eslint/ban-ts-ignore": [0],
  "@typescript-eslint/explicit-function-return-type": [0],
  "@typescript-eslint/camelcase": [0],
};

//
// prettier config
const prettierConfig = {
  endOfLine: "lf",
  semi: true,
  trailingComma: "es5",
  printWidth: 100,
  singleQuote: false,
  quoteProps: "preserve",
  tabWidth: 2,
  proseWrap: "preserve",
  arrowParens: "always",
  bracketSpacing: true,
};

/**
 * eslint config for *.js?x
 */
const config = {
  env: {
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    browser: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    sourceType: "module",
    ecmaVersion: 2018,
  },
  globals: {
    strapi: "writable",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["prettier", "jest", "json"] /* react ==> "react", "react-hooks", "jsx-a11y" */,
  extends: [
    /* react ==> "plugin:react/recommended", "airbnb" */ "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:json/recommended",
  ],
  rules: {
    "linebreak-style": [2, "unix"],
    "quotes": [0, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "quote-props": [1, "consistent-as-needed"],
    "json/*": [2, "allowComments"],
    "no-template-curly-in-string": [0],
    "no-underscore-dangle": [0],
    "jest/no-done-callback": [1],
    "no-unused-vars": [1, { argsIgnorePattern: "^_.*_$" }],
    "import/prefer-default-export": [0],
    "spaced-comment": [0],
    // prettier
    "prettier/prettier": [1, prettierConfig, { usePrettierrc: false }],
    "max-len": [1, { code: prettierConfig.printWidth, ignoreUrls: true }],
    ...(process.env.NODE_ENV === "production" ? {} : dev_rules),
  },
};

/**
 * eslint config for *.ts?x
 */
const configTS = {
  files: ["*.ts", "*.tsx"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  rules: {
    "quotes": [0],
    "@typescript-eslint/quotes": [0, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "@typescript-eslint/explicit-function-return-type": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-var-requires": [0],
    "no-use-before-define": [0],
    "import/prefer-default-export": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "@typescript-eslint/no-empty-function": [1],
    "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-ts-comment": [1],
    "import/order": [0],
    ...(process.env.NODE_ENV === "production" ? {} : dev_ts_rules),
  },
};

module.exports = {
  root: true, // do not use parent's props
  ...config,
  overrides: [configTS],
  settings: {
    "import/resolver": {
      "root-import": aliases,
    },
  },
};
