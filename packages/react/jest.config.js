// jest.config.js
const pathconfig = require("./pathconfig.json");

module.exports = {
  // module resolution
  rootDir: ".",
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    ...pathconfig.jest,
  },
  // test env
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/dev-config/jest/setupTests.ts"],
  setupFiles: ["react-app-polyfill/jsdom"],

  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],

  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testRunner: "jest-circus/runner.js", // default runner in jest27
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/dev-config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/dev-config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/dev-config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: [],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resetMocks: true,
};
