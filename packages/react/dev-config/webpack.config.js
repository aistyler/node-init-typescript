const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

const getClientEnvironment = require("./env");
const paths = require("./paths");
const devServerConfig = require("./webpackDevServer.config");
const { webpack: aliases } = require("../pathconfig.json");

function genConfig(webpackEnv) {
  const isDev = webpackEnv === "development";
  const isProd = webpackEnv === "production";

  const { appDir, appIndex, appBuildDir, appSrcDir, publicIndex, publicUrlOrPath } = paths;
  const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

  return {
    mode: process.env.NODE_ENV || "development",
    entry: appIndex,
    output: {
      path: appBuildDir,
      filename: "index.bundle.js",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      modules: ["node_modules", path.resolve(appDir, "node_modules")],
      roots: [path.resolve(__dirname, "../")],
      alias: Object.keys(aliases).reduce((acc, key) => {
        acc[key] = path.resolve(__dirname, aliases[key]);
        return acc;
      }, {}),
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: appSrcDir,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: publicIndex,
        ...(isProd
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined),
      }),
      // Makes some environment variables available in index.html.
      // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
      // <link rel="icon" href="%PUBLIC_URL%/favicon.ico">
      // It will be an empty string unless you specify "homepage"
      // in `package.json`, in which case it will be the pathname of that URL.
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    ],
    //
    // dev-server
    ...(isDev ? { devServer: devServerConfig() } : undefined),
    //
    // devtool source-map
    devtool: isDev ? "inline-source-map" : false,
    //
    // misc
    // Stop compilation early in production
    bail: isProd,
    // Some libraries import Node modules but don't use them in the browser.
    // Tell webpack to provide empty mocks for them so importing them works.
    node: {
      global: false,
    },
    //
    // workaround dev-server bug
    // See https://github.com/webpack/webpack-dev-server/issues/2758#issuecomment-710086019
    target: isProd ? "browserslist" : "web",
  };
}

module.exports = (_, argv) => {
  process.env.NODE_ENV = argv.mode;
  if (argv.mode === "development") {
    return genConfig(argv.mode);
  }
  return genConfig("production");
};
