const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      root: "miniPi",
      amd: "mini-progressive-image",
      commonjs: "mini-progressive-image",
    },
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(ts)|(m?js)$/, // 多个匹配 .ts
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // 传入配置方式 或者 创建配置文件
          options: {
            presets: [
              // ["@babel/preset-env", { debug: true, targets: "ie >= 11" }],
              "@babel/preset-typescript", // 使用插件
            ],
            // plugins: [["@babel/plugin-transform-runtime", { corejs: 3 }]],
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
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({ filename: "index.css" }),
  ],
};
