const path = require("path");
const pathconfig = require("./pathconfig");

module.exports = {
  "targets": {
    "node": "12",
  },
  "presets": ["@babel/preset-env", "@babel/preset-typescript"],
  "plugins": [
    [
      "babel-plugin-module-resolver",
      {
        root: [path.resolve(pathconfig.compilerOptions.baseUrl)],
        "alias": {
          ...pathconfig.babel
        },
      },
    ],
  ],
  "env": {
    "development": {
      "ignore": ["**/*.spec.js"] 
    },
    "production": { 
      "ignore": ["**/*.spec.js"] 
    },
    "test": {
    },
  },
};
