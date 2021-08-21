const path = require("path");
const fs = require("fs");
const getPublicUrlOrPath = require("react-dev-utils/getPublicUrlOrPath");

const appDir = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDir, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(process.env.NODE_ENV === "development", require(resolvePath("package.json")).homepage, process.env.PUBLIC_URL);

module.exports = {
  dotenv: resolvePath(".env"),
  appDir,
  appPath: resolvePath("."),
  appSrcDir: resolvePath("src"),
  appBuildDir: resolvePath("build"),
  appIndex: resolvePath("src/index"),
  publicDir: resolvePath("public"),
  publicIndex: resolvePath("public/index.html"),
  publicUrlOrPath,
};
