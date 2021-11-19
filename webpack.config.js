const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    library: {
      root: "miniPi",
      amd: "mini-progressive-image",
      commonjs: "mini-progressive-image",
    },
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(ts)|(m?js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  devServer: {
    static: "example",
    port: 9000,
    liveReload: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
    }),
    new miniCssExtractPlugin({ filename: "index.css" }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets",
        },
      ],
    }),
  ],
};
