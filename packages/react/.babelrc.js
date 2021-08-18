const path = require("path");
const pathconfig = require("./pathconfig");

module.exports = {
  "presets": [
    ["@babel/preset-env", {}],
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
  ],
};
