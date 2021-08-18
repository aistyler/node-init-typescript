const path = require("path");
const fs = require("fs");
const getPublicUrlOrPath = require("react-dev-utils/getPublicUrlOrPath");

const appDir = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDir, relativePath);

const publicUrlOrPath = (isDev) =>
  getPublicUrlOrPath(isDev, require(resolvePath("package.json")).homepage, process.env.PUBLIC_URL);

module.exports = {
  appDir,
  appPath: resolvePath("."),
  appSrc: resolvePath("src"),
  appIndex: resolvePath("src/index"),
  publicDir: resolvePath("public"),
  publicUrlOrPath,
};
