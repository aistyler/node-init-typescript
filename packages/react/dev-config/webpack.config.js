const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

const { appDir } = require("./paths");
const devServerConfig = require("./webpackDevServer.config");

const env = {
  PUBLIC_URL: ".",
};

function genConfig(webpackEnv) {
  const isDev = webpackEnv === "development";
  const isProd = webpackEnv === "production";

  return {
    mode: process.env.NODE_ENV || "development",
    entry: path.resolve(appDir, "src/index.tsx"),
    output: {
      path: path.resolve(appDir, "build"),
      filename: "index.bundle.js",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      modules: ["node_modules", path.resolve(appDir, "node_modules")],
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: path.resolve(appDir, "src"),
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
        template: path.resolve(appDir, "public/index.html"),
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
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env),
    ],
    ...(isDev ? { devServer: devServerConfig() } : undefined),
  };
};

module.exports = (_, argv) => {
  if (argv.mode === "development") {
    return genConfig(argv.mode);
  }
  return genConfig("production");
};
