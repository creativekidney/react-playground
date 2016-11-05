'use strict';

const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/src",
  entry: {
    app: "./app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist/assets",
    publicPath: "/assets",            // New
  },
  devServer: {
    contentBase: __dirname + "/src",  // New
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ],
      },

      // Loaders for other file types can go here
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
};
