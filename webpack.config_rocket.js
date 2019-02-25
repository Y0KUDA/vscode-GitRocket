"use strict";
require.ensure;
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var env = process.env.NODE_ENV;
var config = {
  module: {
    rules: [
      {
        test: /\.(gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000000000, // All of images to BASE64 !!!!!!!!!!!!!!!!!
              name: "[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  entry: {
    rocket: "rocket.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: "rocket.html",
      inlineSource: ".(js|css)$", // embed all javascript and css inline
      template: "src/rocket.html"
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    modules: [path.join(__dirname, "src")]
  },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000
  }
};

module.exports = config;
