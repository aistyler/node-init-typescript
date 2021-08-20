const path = require("path");
const pathconfig = require("./pathconfig.json");

const useReact = false;

module.exports = {
  test: [
    /\.js$/,
    /\.ts$/,
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    [
      "@babel/preset-typescript",
      {
        // See https://babeljs.io/docs/en/babel-preset-typescript
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
        optimizeConstEnums: true,
      },
    ],
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        root: [path.resolve(pathconfig.babel.root)],
        alias: {
          ...pathconfig.babel.alias,
        },
      },
    ],
  ],
  env: {
    development: {
      presets: [
        ...(useReact ? ["@babel/preset-react", { development: true }] : []),
      ]
    },
    production: {
      ignore: [/\.spec\.js$/,/\.spec\.ts$/],
    }
  },
};
