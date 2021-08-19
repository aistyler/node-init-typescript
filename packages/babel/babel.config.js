const path = require("path");
const pathconfig = require("./pathconfig");

module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current",
      },
    }],
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
