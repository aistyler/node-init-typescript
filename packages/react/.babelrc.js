const { babel: aliases } = require("./pathconfig.json");

module.exports = {
  "presets": [
    ["@babel/preset-env", { loose: true }],
    ["@babel/preset-react", {}],
    ["@babel/preset-typescript",       
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
  "plugins": [
    // path aliases using module-resolve
    ["babel-plugin-module-resolver", aliases],
    // make silence the "loose" warning
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
  ],
};
