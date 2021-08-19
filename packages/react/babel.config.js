const path = require("path");
const pathconfig = require("./pathconfig");

module.exports = {
  "presets": [
    ["@babel/preset-env", { loose: true }],
    ["@babel/preset-react", {}],
    ["react-app", {}],
    ["@babel/preset-typescript", {}],
  ],
  "plugins": [
    [
      "babel-plugin-module-resolver",
      {
        "root": [path.resolve(pathconfig.babel.root)],
        "alias": {
          ...pathconfig.babel.alias
        },
      },
    ],
    // make silence the "loose" warning
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
  ],
};
